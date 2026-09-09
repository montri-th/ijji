"""Generate r9 favicon renditions from the approved ijji animated mark-only asset.

The 849 x 840 source is placed without cropping or distortion on an 849 x 849
transparent square (four pixels above, five below), then resized in
premultiplied-alpha space. Output filenames are content-derived.
"""

from hashlib import sha256
from pathlib import Path

from PIL import Image, PngImagePlugin


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets/ijji/logo-sting/layers/ijji-mark-still.png"
OUTPUT_DIR = ROOT / "assets/identity"
EXPECTED_SOURCE_SHA256 = (
    "acac2c65b1a17c1956686c3fdbb2a0a6dc3c547c35be1ca128675d28b0ffc630"
)
EXPECTED_SOURCE_SIZE = (849, 840)
CANVAS_SIZE = (849, 849)
SOURCE_OFFSET = (0, 4)
OUTPUT_SIZES = (32, 192)
EXPECTED_OUTPUTS = {
    32: (
        "ijji-favicon-animated-mark-32-r9-ba9ac2db8984.png",
        1924,
        "ba9ac2db8984a0c0fcef4afa54776b7f2f42440c0e84696fcc73968ab684c7ab",
    ),
    192: (
        "ijji-favicon-animated-mark-192-r9-9a647451f72f.png",
        13455,
        "9a647451f72f0c112a50481f614c884866c2d5edb23c34c1b916cf5166800a96",
    ),
}


def digest(data: bytes) -> str:
    return sha256(data).hexdigest()


source_bytes = SOURCE.read_bytes()
assert digest(source_bytes) == EXPECTED_SOURCE_SHA256

with Image.open(SOURCE) as source:
    assert source.mode == "RGBA"
    assert source.size == EXPECTED_SOURCE_SIZE
    canvas = Image.new("RGBa", CANVAS_SIZE, (0, 0, 0, 0))
    canvas.paste(source.convert("RGBa"), SOURCE_OFFSET)

for size in OUTPUT_SIZES:
    rendition = canvas.resize((size, size), Image.Resampling.LANCZOS).convert("RGBA")
    metadata = PngImagePlugin.PngInfo()
    metadata.add(b"sRGB", b"\x00")
    temporary_path = OUTPUT_DIR / f".ijji-favicon-animated-mark-{size}-r9.tmp.png"
    rendition.save(
        temporary_path,
        format="PNG",
        pnginfo=metadata,
        optimize=False,
        compress_level=9,
    )
    output_bytes = temporary_path.read_bytes()
    output_sha256 = digest(output_bytes)
    expected_name, expected_bytes, expected_sha256 = EXPECTED_OUTPUTS[size]
    assert len(output_bytes) == expected_bytes
    assert output_sha256 == expected_sha256
    assert expected_name.endswith(f"-{output_sha256[:12]}.png")
    output_path = OUTPUT_DIR / expected_name
    temporary_path.replace(output_path)
    print(f"{output_path.relative_to(ROOT)} {len(output_bytes)} {output_sha256}")

"""Create the owner-authorized ijji mark-only renditions for web r5."""

from hashlib import sha256
from pathlib import Path

from PIL import Image, PngImagePlugin


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(
    "/Users/montri/Downloads/ijji-ds-addon-assets-v0.5.3/"
    "assets/identity/ijji-logo-full-square.reference.png"
)
OUTPUT_DIR = ROOT / "assets" / "identity"
CROP_BOX = (575, 402, 1473, 1300)
EXPECTED_SOURCE_SHA256 = (
    "cbeb7bc4db8db795fc669ef521fc05442a275ab63cda866513277cdc75b05a86"
)
OUTPUTS = {
    32: (
        "ijji-favicon-mark-32-r5-6d6ac0921352.png",
        1780,
        "6d6ac092135290799da8d83a1323470f02e387b8983fd5159cd5943aac17e178",
    ),
    192: (
        "ijji-favicon-mark-192-r5-b5cdf9987c6a.png",
        12747,
        "b5cdf9987c6a26dc5711586780927e5f7f367f20fc9cdb364513f8f866b7bb34",
    ),
}


def digest(data: bytes) -> str:
    return sha256(data).hexdigest()


source_bytes = SOURCE.read_bytes()
assert digest(source_bytes) == EXPECTED_SOURCE_SHA256

with Image.open(SOURCE) as source:
    assert source.size == (2000, 2000)
    mark = source.convert("RGBA").crop(CROP_BOX).convert("RGBa")

for size, (name, expected_bytes, expected_sha) in OUTPUTS.items():
    rendition = mark.resize((size, size), Image.Resampling.LANCZOS).convert("RGBA")
    metadata = PngImagePlugin.PngInfo()
    metadata.add(b"sRGB", b"\x00")
    path = OUTPUT_DIR / name
    rendition.save(
        path,
        format="PNG",
        pnginfo=metadata,
        optimize=False,
        compress_level=9,
    )
    output_bytes = path.read_bytes()
    assert len(output_bytes) == expected_bytes
    assert digest(output_bytes) == expected_sha
    print(f"{path.relative_to(ROOT)} {len(output_bytes)} {expected_sha}")

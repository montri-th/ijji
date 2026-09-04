"""Move the comparison section immediately before the 12-challenges section."""

from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
PATTERN = re.compile(
    r'(\n    <section id="problems".*?</section>\n\n)'
    r'(    <section id="compare".*?</section>\n\n)',
    re.DOTALL,
)

for name in ("ijji-TH.dc.html", "ijji-EN.dc.html"):
    path = ROOT / name
    source = path.read_text(encoding="utf-8")
    updated, count = PATTERN.subn(r"\2\1", source, count=1)
    assert count == 1, f"expected one problems/compare pair in {name}, got {count}"
    path.write_text(updated, encoding="utf-8")
    print(name)

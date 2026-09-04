"""Static release checks for the ijji web r5 candidate."""

from hashlib import sha256
from pathlib import Path
from urllib.parse import urlparse

from lxml import html


ROOT = Path(__file__).resolve().parents[1]
PAGES = ("ijji-TH.dc.html", "ijji-EN.dc.html")
SECTION_ORDER = [
    "top",
    "why",
    "shops",
    "locale",
    "answer",
    "compare",
    "problems",
    "with-you",
    "start",
]
LINE_URL = "https://page.line.me/569ifvmv"
FAVICONS = {
    "32x32": (
        "assets/identity/ijji-favicon-mark-32-r5-6d6ac0921352.png",
        "6d6ac092135290799da8d83a1323470f02e387b8983fd5159cd5943aac17e178",
    ),
    "192x192": (
        "assets/identity/ijji-favicon-mark-192-r5-b5cdf9987c6a.png",
        "b5cdf9987c6a26dc5711586780927e5f7f367f20fc9cdb364513f8f866b7bb34",
    ),
}


def has_class(node, class_name: str) -> bool:
    return class_name in (node.get("class") or "").split()


for name in PAGES:
    raw = (ROOT / name).read_text(encoding="utf-8")
    document = html.document_fromstring(raw)

    sections = [
        element.get("id")
        for element in document.xpath("//main//section[@id]")
    ]
    assert sections == SECTION_ORDER, (name, sections)

    table = document.get_element_by_id("compare").xpath(
        ".//table[contains(concat(' ', normalize-space(@class), ' '), ' ij-compare-table ')]"
    )[0]
    column_headers = table.xpath("./thead/tr/th")
    rows = table.xpath("./tbody/tr")
    assert len(column_headers) == 5, (name, len(column_headers))
    assert len(rows) == 7, (name, len(rows))
    assert column_headers[-1].get("aria-label") == "ijji"
    assert column_headers[-1].xpath(".//img[contains(@src, 'ijji-favicon-mark-192-r5')]")
    assert table.get("aria-describedby") == "compare-price-note"
    assert document.get_element_by_id("compare-price-note") is not None
    for header in column_headers[:-1]:
        assert header.xpath(".//*[contains(concat(' ', normalize-space(@class), ' '), ' ls-icon ')]")
    for row in rows:
        assert len(row.xpath("./th")) == 1
        assert len(row.xpath("./td")) == 4
        for cell in row.xpath("./th|./td"):
            assert cell.xpath(".//*[contains(concat(' ', normalize-space(@class), ' '), ' ls-icon ')]")

    line_links = document.xpath(f"//a[@href='{LINE_URL}']")
    assert len(line_links) == 3, (name, len(line_links))
    for link in line_links:
        assert link.xpath(".//img[contains(concat(' ', normalize-space(@class), ' '), ' ij-line-mark ')]")
    assert "filter:saturate(0);opacity:.72" in raw

    compare_bookmarks = document.xpath("//*[@data-bookmark-target='compare']")
    assert len(compare_bookmarks) == 2, (name, len(compare_bookmarks))
    assert "'compare'" in raw

    wander_toggle = document.get_element_by_id("ij-wander-toggle")
    assert wander_toggle.get("data-pause-label")
    assert wander_toggle.get("data-resume-label")
    assert "visibility:hidden" in raw and "visibility:visible" in raw
    assert "syncThoughts" in raw

    for figure in document.xpath("//figure"):
        assert len(figure.xpath("./figcaption")) <= 1, (name, html.tostring(figure)[:160])

    local_resources = document.xpath("//img/@src | //script[@src]/@src | //link[@href]/@href")
    for resource in local_resources:
        parsed = urlparse(resource)
        if parsed.scheme or resource.startswith(("#", "//")):
            continue
        candidate = ROOT / parsed.path
        assert candidate.exists(), (name, resource)

    icon_links = {
        link.get("sizes"): link.get("href")
        for link in document.xpath("//link[@rel='icon']")
    }
    for size, (relative_path, _) in FAVICONS.items():
        assert icon_links.get(size) == relative_path, (name, size, icon_links)

for _, (relative_path, expected_sha) in FAVICONS.items():
    assert sha256((ROOT / relative_path).read_bytes()).hexdigest() == expected_sha

english = html.document_fromstring((ROOT / "ijji-EN.dc.html").read_text(encoding="utf-8"))
assert english.xpath("normalize-space(//section[@id='top']//h1)") == "Know what to fix first."
assert "THB 29/question" in english.xpath("string(//section[@id='compare'])")
assert "monthBefore" not in english.xpath("string(//section[@id='compare'])")

thai = html.document_fromstring((ROOT / "ijji-TH.dc.html").read_text(encoding="utf-8"))
assert "เริ่ม 29 บาท/คำถาม" in thai.xpath("string(//section[@id='compare'])")
assert "เดือนก่อน" not in thai.xpath("string(//section[@id='compare'])")

print("static r5 checks: passed")

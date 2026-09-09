"""Static, provenance, and byte-ledger checks for ijji web r9."""

import json
import struct
import sys
from hashlib import sha256
from pathlib import Path
from urllib.parse import urlparse

from lxml import etree, html


ROOT = Path(__file__).resolve().parents[1]
PAGES = ("ijji-TH.dc.html", "ijji-EN.dc.html")
RELEASE_ID = "ijji-web-20260909-r9"
SECTION_ORDER = [
    "top", "why", "shops", "locale", "answer", "compare", "problems", "with-you", "start"
]
LINE_URL = "https://page.line.me/569ifvmv"
R7_PAGE_SHA = {
    "ijji-TH.dc.html": "631fc1374e6255caa0fb66aae1a2324e2b69e1b9f9a8f98884a424da90d4eeb4",
    "ijji-EN.dc.html": "f239aff612725186941dd16d639c249a9f32aeda5a06c6a17d77b5fe62828314",
}
R8_PAGE_SHA = {
    "ijji-TH.dc.html": "ca4e144519f3e7a9dcf193c1776910e5ed7790123fc62b944a597b38bfe40462",
    "ijji-EN.dc.html": "abf1689afdfe4b75e023b855732b6ce2178ba05a88e81e737a4ce6dc98470099",
}
R9_INTENTIONALLY_CHANGED_PAGE_SHA = {
    "ijji-TH.dc.html": "2b46334c2eb4213cd704ce36048aada0b9a0aff07db37bfeda65b2ba0f4ec97e",
}
R8_INDEX_SHA = "e3d87559913971fff3b4ff73ab09e6405e4c63604696fca2aca392b15e6932e1"
OFFICIAL_LINE_IMAGE = '<img class="ij-line-mark" src="assets/providers/line-brand-icon-5e93437e.png" width="1001" height="1000" alt="" decoding="async">'
R7_LINE_STYLE = "\n".join((
    "    .ij-line-mark{display:block;flex:none;width:20px;height:20px;filter:saturate(0);opacity:.72;transition:opacity var(--motion-duration-state) var(--motion-ease-state)}",
    "    a:hover .ij-line-mark,a:focus-visible .ij-line-mark{opacity:1}",
))
R8_LINE_STYLE = "    .ij-line-mark{display:block;flex:none;width:20px;height:20px}"
MINIMAL_LINE_ASSETS = {
    "assets/providers/remixicon-line-line-v4.9.1.svg": "2139cb97180e90a0b0cb50937ac9c2260231f65a4cfe1e6f123210f3887573bd",
    "assets/providers/remixicon-line-line-v4.9.1.json": "d123a9119658419e0fd602fc9e20a316f76fe83d7560dc37da9c5a23f3daf3eb",
    "assets/licenses/remix-icon-v4.9.1-license.txt": "6f2f21c5f8db34635d31848e9ff831d5dc421bb83ffc9d37f82651364047ae58",
}
LINE_PROVENANCE_PATH = "assets/providers/remixicon-line-line-v4.9.1.json"
LINE_SOURCE_ROOT = etree.fromstring(
    (ROOT / "assets/providers/remixicon-line-line-v4.9.1.svg").read_bytes()
)
LINE_SOURCE_PATHS = LINE_SOURCE_ROOT.xpath("./*[local-name()='path']")
assert len(LINE_SOURCE_PATHS) == 1
LINE_SOURCE_VIEWBOX = LINE_SOURCE_ROOT.get("viewBox")
LINE_SOURCE_PATH = LINE_SOURCE_PATHS[0].get("d")
assert LINE_SOURCE_VIEWBOX == "0 0 24 24" and LINE_SOURCE_PATH
LINE_SPRITE = (
    '  <svg aria-hidden="true" focusable="false" width="0" height="0" '
    'style="position:absolute;width:0;height:0;overflow:hidden">'
    f'<symbol id="ij-line-logo" viewBox="{LINE_SOURCE_VIEWBOX}"><path d="{LINE_SOURCE_PATH}"/>'
    "</symbol></svg>"
)
INLINE_LINE_MARK = (
    '<svg class="ij-line-mark" aria-hidden="true" focusable="false" width="20" height="20" '
    f'viewBox="{LINE_SOURCE_VIEWBOX}" fill="currentColor"><use href="#ij-line-logo"></use></svg>'
)
BRAND_SYMBOL = (
    "assets/identity/landometer-symbol-color-rebuild02-r6.png",
    "b818eeb6a6f4abeb7a8fac2b858de0e7a03a662dff371842a29ebfe4c21d12f6",
)
WITH_YOU_MOTIF = (
    "graph-b-brand-blue",
    "ijji-addon/motif/svg/ijji-graph-b-brand-blue.svg",
    "f99e49088f14a97e6ba5c787708a1d1252734638d0f363f0c2f113258f57ee48",
)
R8_FAVICONS = {
    "32x32": (
        "assets/identity/ijji-favicon-mark-32-r5-6d6ac0921352.png",
        "6d6ac092135290799da8d83a1323470f02e387b8983fd5159cd5943aac17e178",
    ),
    "192x192": (
        "assets/identity/ijji-favicon-mark-192-r5-b5cdf9987c6a.png",
        "b5cdf9987c6a26dc5711586780927e5f7f367f20fc9cdb364513f8f866b7bb34",
    ),
}
FAVICONS = {
    "32x32": (
        "assets/identity/ijji-favicon-animated-mark-32-r9-ba9ac2db8984.png",
        "ba9ac2db8984a0c0fcef4afa54776b7f2f42440c0e84696fcc73968ab684c7ab",
    ),
    "192x192": (
        "assets/identity/ijji-favicon-animated-mark-192-r9-9a647451f72f.png",
        "9a647451f72f0c112a50481f614c884866c2d5edb23c34c1b916cf5166800a96",
    ),
}
FAVICON_BYTES = {"32x32": 1924, "192x192": 13455}
FAVICON_PROVENANCE_PATH = "assets/identity/ijji-favicon-r9.json"
FAVICON_PROVENANCE_SHA = "082b0d18c2ad49545a72c0c2006237a9b5cd4cbd75b494b5b5fed9a025a44efd"
MARK_ONLY_SOURCE = (
    "assets/ijji/logo-sting/layers/ijji-mark-still.png",
    "acac2c65b1a17c1956686c3fdbb2a0a6dc3c547c35be1ca128675d28b0ffc630",
    (849, 840),
    110298,
)
BANNED_IDENTITY_PATHS = {
    "assets/products/ijji-logo-official.png",
    "assets/identity/ijji-favicon-32-r4.png",
    "assets/identity/ijji-favicon-192-r4.png",
    "assets/identity/ijji-favicon-mark-32-r5-6d6ac0921352.png",
    "assets/identity/ijji-favicon-mark-192-r5-b5cdf9987c6a.png",
    "assets/identity/ijji-favicon-32-r9-ee2b564d52d7.png",
    "assets/identity/ijji-favicon-192-r9-b3ce5667942b.png",
}
BANNED_IDENTITY_HASHES = {
    "ae1e436b44abd7ac3762847e17799b156cbecae2ab56b98ce841050ff8f8662f",
    "ee2b564d52d7740f428965339126f3e4f2c8eabebdbb5a87f9e1eac98fbfd737",
    "b3ce5667942b65236f39981da50d768674983a24a341e5559e0d33d63874d453",
    "6d6ac092135290799da8d83a1323470f02e387b8983fd5159cd5943aac17e178",
    "b5cdf9987c6a26dc5711586780927e5f7f367f20fc9cdb364513f8f866b7bb34",
}
LOGO_FILES = {
    "ijji-logo-sting.js": "1a1d1bc247b5deb92aa19e4d84524ac1f823454a9401b6ce53acf8716010433e",
    "layers/i-1.png": "df5fb769b2bcf84a5bbb64a5b7be424463b3883632b722cebc5d9c4a29362ac6",
    "layers/i-2.png": "857ca5198e350fd02f644d492f1b7b0b14b9cacb9f2dd21f2031788678ce80f5",
    "layers/ijji-logo-still.png": "bb1bc80e0c79a10dedb1b48c39efd187e97fe429adec4917975e265f610ccaac",
    "layers/jj.png": "cb2743b05ee7d3270bef5e5f5a5bec2916e6fe6b1e99d85793ebbd1ec398dd93",
    "layers/tag-1-1.png": "6b51513e93df40e2a00b928d606373e688a3b6dd9e6869a6e803a7bef5ab7784",
    "layers/tag-1-2.png": "fb72390fe3125ed5c5ab9c2bafd03fb71cb74e751ebd7f14737ac7c0367117fa",
    "layers/tag-1-3.png": "5e01f5a2303ba67e18e69153003ba1f363e6eb1c80b67aa68115b8e434072ff0",
    "layers/tag-2-1.png": "2e4529e6961ffa9508ae12e4346cba6870f009cc4851e2a9c613e69ef7999cf8",
    "layers/tag-2-2.png": "ea066302ab3f407d258260f85ba19cd184b5ddbfa313f1f480726639b9ef3713",
    "layers/tag-2-3.png": "3821e99ab1ff83edc12b95e06c2d2fc2cd1019905900a8f15fc57481b7d367c4",
}


def digest(path: Path) -> str:
    return sha256(path.read_bytes()).hexdigest()


def png_dimensions(path: Path) -> tuple[int, int]:
    data = path.read_bytes()[:24]
    assert data[:8] == b"\x89PNG\r\n\x1a\n", path
    return struct.unpack(">II", data[16:24])


for name in PAGES:
    raw = (ROOT / name).read_bytes().decode("utf-8")
    assert raw.count(R8_LINE_STYLE) == 1, name
    assert R7_LINE_STYLE not in raw, name
    assert raw.count(LINE_SPRITE) == 1, name
    assert raw.count(INLINE_LINE_MARK) == 3, name
    assert OFFICIAL_LINE_IMAGE not in raw, name
    assert "-webkit-mask" not in raw and "mask:" not in raw, name
    restored_r8 = raw
    for size in FAVICONS:
        r9_path = FAVICONS[size][0]
        r8_path = R8_FAVICONS[size][0]
        assert restored_r8.count(f'href="{r9_path}"') == 1, (name, size)
        restored_r8 = restored_r8.replace(f'href="{r9_path}"', f'href="{r8_path}"', 1)
    r9_header_path = FAVICONS["192x192"][0]
    r8_header_path = R8_FAVICONS["192x192"][0]
    assert restored_r8.count(f'src="{r9_header_path}"') == 1, name
    restored_r8 = restored_r8.replace(
        f'src="{r9_header_path}"', f'src="{r8_header_path}"', 1
    )
    if name == "ijji-EN.dc.html":
        assert sha256(restored_r8.encode("utf-8")).hexdigest() == R8_PAGE_SHA[name], name
        restored_r7 = restored_r8.replace(R8_LINE_STYLE, R7_LINE_STYLE, 1)
        restored_r7 = restored_r7.replace(f"{LINE_SPRITE}\n", "", 1)
        restored_r7 = restored_r7.replace(INLINE_LINE_MARK, OFFICIAL_LINE_IMAGE)
        assert sha256(restored_r7.encode("utf-8")).hexdigest() == R7_PAGE_SHA[name], name
    else:
        assert sha256(raw.encode("utf-8")).hexdigest() == R9_INTENTIONALLY_CHANGED_PAGE_SHA[name]
    document = html.document_fromstring(raw)
    sections = [node.get("id") for node in document.xpath("//main//section[@id]")]
    assert sections == SECTION_ORDER, (name, sections)

    brand_links = document.xpath(
        "//a[@data-identity-asset='artifact.ijji-r5.landometer-symbol.rebuild02-r6.01']"
    )
    assert len(brand_links) == 1, (name, len(brand_links))
    assert brand_links[0].xpath(
        f".//img[@src='{BRAND_SYMBOL[0]}' and @width='1601' and @height='1601']"
    )

    with_you = document.get_element_by_id("with-you")
    motifs = with_you.xpath(".//*[@data-ij-motif]")
    assert len(motifs) == 1 and motifs[0].get("data-ij-motif") == WITH_YOU_MOTIF[0]
    assert motifs[0].xpath(f".//img[@src='{WITH_YOU_MOTIF[1]}']")

    table = document.get_element_by_id("compare").xpath(".//table[contains(@class, 'ij-compare-table')]")[0]
    assert len(table.xpath("./thead/tr/th")) == 5
    assert len(table.xpath("./tbody/tr")) == 7
    assert table.get("aria-describedby") == "compare-price-note"
    header_marks = table.xpath(f".//thead//img[@src='{FAVICONS['192x192'][0]}']")
    assert len(header_marks) == 1, name
    assert header_marks[0].attrib == {
        "src": FAVICONS["192x192"][0],
        "width": "192",
        "height": "192",
        "alt": "",
        "aria-hidden": "true",
    }, (name, header_marks[0].attrib)

    line_links = document.xpath(f"//a[@href='{LINE_URL}']")
    assert len(line_links) == 3, (name, len(line_links))
    line_marks = document.xpath(
        "//svg[contains(concat(' ', normalize-space(@class), ' '), ' ij-line-mark ')]"
    )
    assert len(line_marks) == 3, (name, len(line_marks))
    for line_link in line_links:
        marks = line_link.xpath(
            ".//svg[contains(concat(' ', normalize-space(@class), ' '), ' ij-line-mark ')]"
        )
        assert len(marks) == 1, (name, line_link.text_content())
        mark = marks[0]
        assert mark.attrib == {
            "class": "ij-line-mark",
            "aria-hidden": "true",
            "focusable": "false",
            "width": "20",
            "height": "20",
            "viewbox": LINE_SOURCE_VIEWBOX,
            "fill": "currentColor",
        }, (name, mark.attrib)
        uses = mark.xpath("./use[@href='#ij-line-logo']")
        assert len(uses) == 1 and len(mark) == 1, (name, html.tostring(mark))
        assert not line_link.xpath(".//img[contains(@class, 'ij-line-mark')]")
        assert not line_link.xpath(".//*[normalize-space(text())='chat']")
    symbols = document.xpath("//symbol[@id='ij-line-logo']")
    assert len(symbols) == 1, (name, len(symbols))
    symbol = symbols[0]
    assert symbol.get("viewbox") == LINE_SOURCE_VIEWBOX, (name, symbol.attrib)
    sprite_paths = symbol.xpath("./path")
    assert len(sprite_paths) == 1 and len(symbol) == 1, (name, html.tostring(symbol))
    assert sprite_paths[0].attrib == {"d": LINE_SOURCE_PATH}, name
    sprite = symbol.getparent()
    assert sprite.tag == "svg" and sprite.attrib == {
        "aria-hidden": "true",
        "focusable": "false",
        "width": "0",
        "height": "0",
        "style": "position:absolute;width:0;height:0;overflow:hidden",
    }, (name, sprite.attrib)
    assert not document.xpath("//img[@src='assets/providers/line-brand-icon-5e93437e.png']")
    assert not document.xpath("//span[contains(concat(' ', normalize-space(@class), ' '), ' ij-line-mark ')]")
    assert not document.xpath("//*[@data-provider-symbol='generic-chat-outline']")
    assert len(document.xpath("//*[@data-bookmark-target='compare']")) == 2
    assert document.get_element_by_id("ij-wander-toggle").get("data-pause-label")
    assert all(len(figure.xpath("./figcaption")) <= 1 for figure in document.xpath("//figure"))


    declared_icons = document.xpath("//link[@rel='icon' and @type='image/png']")
    assert len(declared_icons) == 2, (name, len(declared_icons))
    icon_links = {link.get("sizes"): link.get("href") for link in declared_icons}
    for size, (relative_path, _) in FAVICONS.items():
        assert icon_links.get(size) == relative_path, (name, size, icon_links)
    assert not document.xpath("//link[@rel='icon' and contains(@href, 'favicon-mark-')]")
    assert not document.xpath(
        "//*[@src or @href][contains(@src, 'favicon-32-r4') or "
        "contains(@src, 'favicon-192-r4') or contains(@src, 'favicon-mark-') or "
        "contains(@href, 'favicon-32-r4') or contains(@href, 'favicon-192-r4') or "
        "contains(@href, 'favicon-mark-')]"
    )

    local_resources = document.xpath("//img/@src | //script[@src]/@src | //link[@href]/@href")
    for resource in local_resources:
        parsed = urlparse(resource)
        if parsed.scheme or resource.startswith(("#", "//")):
            continue
        assert (ROOT / parsed.path).exists(), (name, resource)

index_raw = (ROOT / "index.html").read_text(encoding="utf-8")
index_document = html.document_fromstring(index_raw)
index_declared_icons = index_document.xpath("//link[@rel='icon' and @type='image/png']")
assert len(index_declared_icons) == 2
index_icons = {link.get("sizes"): link.get("href") for link in index_declared_icons}
restored_r8_index = index_raw
for size in FAVICONS:
    r9_path = FAVICONS[size][0]
    r8_path = R8_FAVICONS[size][0]
    assert index_icons.get(size) == r9_path, (size, index_icons)
    assert restored_r8_index.count(f'href="{r9_path}"') == 1
    restored_r8_index = restored_r8_index.replace(f'href="{r9_path}"', f'href="{r8_path}"', 1)
assert sha256(restored_r8_index.encode("utf-8")).hexdigest() == R8_INDEX_SHA

HERO_CONTRACTS = {
    "ijji-EN.dc.html": {
        "artLabel": "ijji — Your business buddy around the corner",
        "pause": "Pause logo animation",
        "resume": "Resume logo animation",
        "replay": "Replay logo animation",
    },
    "ijji-TH.dc.html": {
        "artLabel": "ijji — คู่หูธุรกิจ รอบรู้ รอบย่าน รอบร้านคุณ",
        "pause": "หยุดภาพเคลื่อนไหวโลโก้ชั่วคราว",
        "resume": "เล่นภาพเคลื่อนไหวโลโก้ต่อ",
        "replay": "เล่นภาพเคลื่อนไหวโลโก้อีกครั้ง",
    },
}
for page_name, expected in HERO_CONTRACTS.items():
    page_raw = (ROOT / page_name).read_text(encoding="utf-8")
    page_document = html.document_fromstring(page_raw)
    top = page_document.get_element_by_id("top")
    wraps = top.xpath(".//*[@data-ijji-logo-wrap]")
    assert len(wraps) == 1, page_name
    wrap = wraps[0]
    stages = wrap.xpath(".//*[@data-ijji-logo-stage]")
    assert len(stages) == 1, page_name
    stage = stages[0]
    art = stage.xpath(".//*[@data-ijji-logo-art]")
    fallback = stage.xpath(".//img[@data-ijji-logo-fallback]")
    logo = stage.xpath(".//ijji-logo-sting")
    control = wrap.xpath(".//button[@data-ijji-logo-control]")
    assert len(art) == len(fallback) == len(logo) == len(control) == 1, page_name
    assert not stage.xpath(".//button[@data-ijji-logo-control]"), page_name
    assert len(wrap.xpath("./div[contains(@class, 'ij-hero-logo-controls')]")) == 1, page_name
    assert art[0].get("role") == "img"
    assert art[0].get("aria-label") == expected["artLabel"]
    assert fallback[0].get("src") == "assets/ijji/logo-sting/layers/ijji-logo-still.png?v=1.2.1"
    assert fallback[0].get("width") == "891" and fallback[0].get("height") == "1087"
    assert fallback[0].get("alt") == ""
    assert logo[0].get("manual") is not None
    assert logo[0].get("surface") == "brand-blue"
    assert logo[0].get("bounce") == "playful"
    assert logo[0].get("assets") == "./assets/ijji/logo-sting/layers/"
    assert logo[0].get("aria-hidden") == "true"
    assert all(logo[0].get(forbidden) is None for forbidden in ("loop", "notagline", "speed"))
    assert control[0].get("data-pause-label") == expected["pause"]
    assert control[0].get("data-resume-label") == expected["resume"]
    assert control[0].get("data-replay-label") == expected["replay"]
    assert control[0].get("aria-label") == expected["pause"]
    assert control[0].get("title") == expected["pause"]
    assert control[0].xpath(".//*[@data-ijji-logo-icon]")
    assert control[0].xpath(".//*[@data-ijji-logo-label]")
    controller_scripts = page_document.xpath(
        "//script[contains(@src, 'assets/ijji/logo-sting/ijji-logo-controller-r7.js')]"
    )
    assert len(controller_scripts) == 1, page_name
    assert controller_scripts[0].get("data-motif-release") == "1.2.1"
    assert not page_document.xpath("//script[contains(@src, 'ijji-logo-sting.js')]")
    assert ".ij-hero-logo-art{display:grid;width:min(81.94%,320px)" in page_raw
    assert ".ij-hero-logo-panel{max-width:320px;aspect-ratio:890.7/1086.9!important}.ij-hero-logo-art{width:100%}" in page_raw
    assert ".ij-logo-motion-control[hidden]{display:none!important}" in page_raw
    assert "@media (prefers-reduced-motion:reduce)" in page_raw
    assert ".ij-hero-logo-controls{display:none!important}" in page_raw
    assert "@media print{" in page_raw
    assert ".ij-hero-logo-art>ijji-logo-sting,.ij-hero-logo-controls{display:none!important}" in page_raw
    assert page_raw.count("mountHeroLogo()") == 2
    assert "window.IjjiHeroLogo?.mount(this.rootRef.current)" in page_raw
    assert "this._heroLogoController.destroy()" in page_raw

english_raw = (ROOT / "ijji-EN.dc.html").read_text(encoding="utf-8")
english_document = html.document_fromstring(english_raw)
thai_raw = (ROOT / "ijji-TH.dc.html").read_text(encoding="utf-8")
thai_document = html.document_fromstring(thai_raw)
assert not thai_document.xpath("//section[@id='top']//img[@src='assets/identity/ijji-logo-full-square.png']")

for size, (relative_path, expected_sha) in FAVICONS.items():
    assert digest(ROOT / relative_path) == expected_sha
    assert png_dimensions(ROOT / relative_path) == tuple(map(int, size.split("x")))
    assert (ROOT / relative_path).stat().st_size == FAVICON_BYTES[size]
source_path, source_sha, source_dimensions, source_bytes = MARK_ONLY_SOURCE
assert digest(ROOT / source_path) == source_sha
assert png_dimensions(ROOT / source_path) == source_dimensions
assert (ROOT / source_path).stat().st_size == source_bytes
for banned_path in BANNED_IDENTITY_PATHS:
    assert not (ROOT / banned_path).exists(), banned_path
for candidate in ROOT.rglob("*"):
    if candidate.is_file() and candidate.name != "SHA256SUMS.txt":
        assert digest(candidate) not in BANNED_IDENTITY_HASHES, candidate
assert digest(ROOT / FAVICON_PROVENANCE_PATH) == FAVICON_PROVENANCE_SHA
favicon_provenance = json.loads((ROOT / FAVICON_PROVENANCE_PATH).read_text(encoding="utf-8"))
assert favicon_provenance["scope"].startswith("Browser-tab favicon declarations")
assert favicon_provenance["comparisonHeaderChanged"] is True
assert favicon_provenance["approvedSource"]["assetId"] == "ijji.logo-sting.mark"
assert favicon_provenance["approvedSource"]["variant"] == "mark_only"
assert favicon_provenance["approvedSource"]["path"] == "../ijji/logo-sting/layers/ijji-mark-still.png"
assert favicon_provenance["approvedSource"]["sha256"] == source_sha
assert favicon_provenance["approvedSource"]["dimensions"] == "849x840"
assert favicon_provenance["approvedSource"]["bytes"] == source_bytes
assert favicon_provenance["approvedSource"]["originalMinimumDeliveredPx"] == 160
assert favicon_provenance["approvedSource"]["originalCompatibleHostSurfaces"] == ["brand-blue", "dark"]
assert favicon_provenance["artifactLocalExceptions"]["ownerAuthorized"] is True
assert favicon_provenance["artifactLocalExceptions"]["sharedDesignSystemApproval"] is False
assert favicon_provenance["artifactLocalExceptions"]["sharedDesignSystemOrMotifAmendment"] is False
assert "below the source asset's original 160px" in favicon_provenance["artifactLocalExceptions"]["minimumSize"]
assert "light or dark surfaces" in favicon_provenance["artifactLocalExceptions"]["hostSurfaces"]
assert favicon_provenance["rejectedAssetTombstone"]["forbiddenForActiveUse"] is True
assert favicon_provenance["rejectedAssetTombstone"]["historicalPublishedTagsChanged"] is False
assert set(favicon_provenance["rejectedAssetTombstone"]["retainedInactiveEvidence"]) == {
    "ijji-favicon-r4.json",
    "ijji-favicon-r5.json",
}
assert all(item["deleteSuccess"] is True for item in favicon_provenance["driveCleanupEvidence"]["files"])
assert {item["fileId"] for item in favicon_provenance["driveCleanupEvidence"]["files"]} == {
    "1dnidyeNor2wSzeMoYmPHyLHnVcvK8Ys5",
    "1tzQMyTeLB0mbrN50fg4Tyv7YHDZeVviw",
}
assert favicon_provenance["sharedDesignSystemApproval"] is False
assert {item["sha256"] for item in favicon_provenance["renditions"]} == {
    value[1] for value in FAVICONS.values()
}
assert digest(ROOT / BRAND_SYMBOL[0]) == BRAND_SYMBOL[1]
assert digest(ROOT / WITH_YOU_MOTIF[1]) == WITH_YOU_MOTIF[2]
for relative_path, expected_sha in MINIMAL_LINE_ASSETS.items():
    assert digest(ROOT / relative_path) == expected_sha, relative_path

logo_root = ROOT / "assets/ijji/logo-sting"
for relative_path, expected_sha in LOGO_FILES.items():
    assert digest(logo_root / relative_path) == expected_sha, relative_path
assert png_dimensions(logo_root / "layers/ijji-logo-still.png") == (891, 1087)

controller_path = logo_root / "ijji-logo-controller-r7.js"
controller = controller_path.read_text(encoding="utf-8")
assert "threshold: 0.14" in controller
assert "state === 'paused'" in controller
assert "window.addEventListener('pagehide'" in controller
assert "logo.finish && logo.finish()" in controller
assert "if (!canObserve) return showFallback()" in controller
assert "stage.dataset.motionState !== 'running'" in controller
assert "setAttribute('aria-pressed'" not in controller
assert "loop" not in controller

release = json.loads((ROOT / "release.json").read_text(encoding="utf-8"))
navigation = json.loads((ROOT / "navigation-preset.json").read_text(encoding="utf-8"))
allow_prepared = "--allow-prepared" in sys.argv
assert release["releaseId"] == RELEASE_ID
assert release["releaseDate"] == "2026-09-09"
if allow_prepared:
    assert release["publicationStatus"] in {"prepared_not_published", "published"}
else:
    assert release["publicationStatus"] == "published"
assert navigation["presetId"] == "ijji-public-bilingual-r5"
assert release["authority"]["ijjiDesignSystem"] == "0.5.0"
assert release["authority"]["ijjiAddOn"] == "0.5.3"
assert release["authority"]["parentLDS"] == "0.9.1"
source_pins = {item["name"]: item for item in release["sourcePins"]}
assert source_pins["ijji motif asset with guide.zip"] == {
    "name": "ijji motif asset with guide.zip",
    "role": "owner_supplied_corroborating_ijji_four_beat_motif_kit_not_logo_or_favicon_source",
    "sha256": "516e0e510a8c7a775c8e3c05647273d28cd56f6aad1f23a712ab82a2f3cd8f38",
    "bytes": 172941,
    "archiveEntries": 65,
    "relationship": "selected motif bytes match the pinned Motif Library 1.2.1 four-beat assets; the archive contains no logo-sting or mark-only identity file",
}
assert source_pins["codex-clipboard-cf1e5c87-01ce-4def-b531-3928110fa7e2.png"]["sha256"] == (
    "a614714d08d2c97d03409e1d6eabd132b118ec7d60411e63ee6b956ded360fe9"
)
lineage = release["releaseLineage"]
assert lineage["previousPublishedRelease"] == "ijji-web-20260909-r8"
assert lineage["previousPublishedSourceSha"] == "92c7ff31a766f833bdcec4e213d223caee40aeb1"
assert lineage["notIncorporatedAsRelease"] == ["ijji-web-20260904-r6"]
assert lineage["successorState"] == ("published" if release["publicationStatus"] == "published" else "local_only")
reused = lineage["selectivelyReusedPreparedCandidateWork"]
assert len(reused) == 1 and reused[0]["candidate"] == "ijji-web-20260904-r6"
assert reused[0]["incorporatedPaths"] == [
    "assets/providers/remixicon-line-line-v4.9.1.svg",
    "assets/providers/remixicon-line-line-v4.9.1.json",
    "assets/licenses/remix-icon-v4.9.1-license.txt",
]

animated = release["animatedIdentity"]
assert animated["scope"] == "Thai and English hero identity panels"
assert animated["overlayRelease"] == "1.2.1"
assert animated["overlayCommit"] == "57eeb7c953dc8b45fe6fe97f1251467d09b0b199"
assert animated["overlayManifestSha256"] == "77e8185104751e2c21c2e10fb8c5d771821bcb8123e02f116638fdbf3968d483"
assert animated["ownerApprovalRecordId"] == "MOTIF-LIBRARY-OWNER-APPROVAL-20260906-02"
assert animated["ownerApprovalRecordSha256"] == "82e5614cf8545746becfc23318a3dff93c70c61f8a23ad628d69c6b70aa08fb0"
assert animated["familyId"] == "ijji.logo-sting.r3"
assert animated["fallbackAssetId"] == "ijji.logo-sting.tagline"
assert animated["motionMode"] == "finite_once_logo_sting"
assert animated["durationSeconds"] == 9
assert animated["visibilityThreshold"] == 0.14
assert animated["surface"] == "brand-blue" and animated["bounce"] == "playful"
assert animated["loop"] is False
assert animated["fallback"]["sha256"] == LOGO_FILES["layers/ijji-logo-still.png"]
assert animated["runtime"]["sha256"] == LOGO_FILES["ijji-logo-sting.js"]
assert animated["controller"]["sha256"] == digest(controller_path)
assert animated["layers"] == {
    key.removeprefix("layers/"): value for key, value in LOGO_FILES.items() if key.startswith("layers/") and key != "layers/ijji-logo-still.png"
}
assert set(animated["fallbackStates"]) == {"loading", "dependency_failure", "reduced_motion", "no_javascript", "print"}
assert animated["motionControls"] == ["pause", "resume", "replay"]
assert animated["localizedControlLabels"] == {"th-TH": True, "en": True}

browser_favicon = release["browserFavicon"]
assert browser_favicon["provenancePath"] == FAVICON_PROVENANCE_PATH
assert browser_favicon["provenanceSha256"] == FAVICON_PROVENANCE_SHA
assert browser_favicon["comparisonHeaderChanged"] is True
assert browser_favicon["renderedDefectStatus"] == (
    "live_byte_qa_passed_pending_native_browser_confirmation"
    if release["publicationStatus"] == "published"
    else "local_browser_qa_passed_pending_live_and_native_browser_confirmation"
)
assert browser_favicon["source"] == {
    "release": "Landometer Motif Library 1.2.1",
    "commit": "57eeb7c953dc8b45fe6fe97f1251467d09b0b199",
    "familyId": "ijji.logo-sting.r3",
    "assetId": "ijji.logo-sting.mark",
    "variant": "mark_only_no_tagline",
    "path": source_path,
    "sha256": source_sha,
    "dimensions": "849x840",
    "bytes": source_bytes,
}
assert browser_favicon["sharedDesignSystemApproval"] is False
assert len(browser_favicon["artifactLocalExceptions"]) == 3
assert set(browser_favicon["renditions"]) == set(FAVICONS)
for size, (relative_path, expected_sha) in FAVICONS.items():
    assert browser_favicon["renditions"][size] == {
        "path": relative_path,
        "sha256": expected_sha,
        "bytes": FAVICON_BYTES[size],
    }

retired = release["retiredIdentityAssets"]
assert retired["directiveRef"] == "owner-message:2026-09-09:animated-mark-only-favicon-and-old-mark-ban"
assert set(retired["removedPaths"]) == BANNED_IDENTITY_PATHS
assert retired["removedReproductionPaths"] == ["scripts/generate-favicon-r5.py"]
assert not (ROOT / "scripts/generate-favicon-r5.py").exists()
assert set(retired["bannedSha256"]) == BANNED_IDENTITY_HASHES
assert retired["driveDeletion"]["status"] == "completed_and_search_verified"
assert {item["fileId"] for item in retired["driveDeletion"]["deletedFiles"]} == {
    "1dnidyeNor2wSzeMoYmPHyLHnVcvK8Ys5",
    "1tzQMyTeLB0mbrN50fg4Tyv7YHDZeVviw",
}

auth_refs = {item["authorityEvidenceRef"] for item in release["artifactOwnedAuthorizations"]}
assert "owner-message:2026-09-08:animated-hero-logo-and-republish" in auth_refs
assert "owner-message:2026-09-09:thai-hero-animated-logo-and-publish" in auth_refs
assert "owner-message:2026-09-09:motif-kit-use-and-publish" in auth_refs
price_record = next(
    item for item in release["artifactOwnedAuthorizations"]
    if item["authorityEvidenceRef"] == "owner-message:2026-09-04:comparison-prices"
)
assert "owner-confirmation:2026-09-09:r9-comparison-prices-and-free-trial-and-publish" in auth_refs
assert price_record["revalidationStatus"] == "confirmed_for_r9"
assert price_record["publicationBlocking"] is False
if release["publicationStatus"] == "published":
    assert release["openManualGates"] == [
        "native browser chrome favicon presentation after a fresh navigation",
        "physical iPhone Safari and embedded WKWebView",
    ]
    assert RELEASE_ID in release["postDeployEvidence"]
else:
    assert allow_prepared
    assert release["postDeployEvidence"] is None
assert "owner-message:2026-09-09:animated-mark-only-favicon-and-old-mark-ban" in auth_refs
line_asset = release["providerAssets"]["lineOutlineSocialIcon"]
assert line_asset["sha256"] == MINIMAL_LINE_ASSETS["assets/providers/remixicon-line-line-v4.9.1.svg"]
assert line_asset["provenancePath"] == LINE_PROVENANCE_PATH
assert line_asset["provenanceSha256"] == MINIMAL_LINE_ASSETS[LINE_PROVENANCE_PATH]
assert line_asset["licenseSha256"] == MINIMAL_LINE_ASSETS["assets/licenses/remix-icon-v4.9.1-license.txt"]
assert line_asset["officialProviderAsset"] is False
assert line_asset["library"] == "Remix Icon" and line_asset["libraryVersion"] == "v4.9.1"
assert line_asset["tagCommit"] == "39eab8b69cadaa47e1bed6a41777b1cd22227c74"
assert line_asset["usageBoundary"].startswith("only the six literal links")
assert "official compliance is not claimed" in line_asset["providerGuidelineDisposition"]
assert "inline SVG" in line_asset["renderTreatment"]
assert "CSS mask" in line_asset["renderTreatment"] and "no backing shape" in line_asset["renderTreatment"]
assert release["providerAssets"]["retainedInactiveLineBrandIcon"]["sha256"] == "5e93437eb5ec0dcdece92d1562fcd435d1d521cca5c013d2d9e15b544a1d8a39"
assert "owner-confirmation:2026-09-09:r8-minimal-line-logo-all-links" in auth_refs
assert "owner-confirmation:2026-09-09:r8-english-animated-logo-with-tagline" in auth_refs
line_provenance = json.loads((ROOT / LINE_PROVENANCE_PATH).read_text(encoding="utf-8"))
assert line_provenance["officialProviderAsset"] is False
assert line_provenance["authorityEvidenceRef"] == "owner-confirmation:2026-09-09:r8-minimal-line-logo-all-links"
assert line_provenance["localSha256"] == MINIMAL_LINE_ASSETS["assets/providers/remixicon-line-line-v4.9.1.svg"]
assert line_provenance["licenseSha256"] == MINIMAL_LINE_ASSETS["assets/licenses/remix-icon-v4.9.1-license.txt"]
assert "inline SVG" in line_provenance["presentation"] and "CSS mask" in line_provenance["presentation"]
assert "official LINE brand-guideline compliance is not claimed" in line_provenance["providerPolicyStatus"]
verification = release["verificationEvidence"]
assert verification["parentLdsVerifier"] == {"status": "passed", "checks": 5394, "checksums": 103}
assert verification["ijjiResolver"] == {"status": "passed", "checks": 1421}
assert verification["staticVerifier"]["status"] == (
    "passed_published" if release["publicationStatus"] == "published" else "passed_prepared"
)
assert verification["faviconBrowserQa"]["status"] == (
    "passed_live" if release["publicationStatus"] == "published" else "passed_local"
)
assert verification["faviconBrowserQa"]["checks"] == 28
assert verification["faviconBrowserQa"]["cacheHitEvidence"].startswith("not observed")
assert verification["faviconBrowserQa"]["nativeBrowserChrome"] == "pending"
assert verification["bannedIdentityAssetScan"] == {
    "status": "passed",
    "scope": "r9 branch tip files and active HTML references",
}
assert verification["lineButtonsBrowserQa"]["status"] == "carried_forward_unchanged_from_r8"
assert verification["lineButtonsBrowserQa"]["checks"] == 22
animated_qa = verification["animatedHeroBrowserQa"]
assert animated_qa["status"] == (
    "passed_live" if release["publicationStatus"] == "published" else "passed_local"
)
assert animated_qa["checks"] == 62
assert animated_qa["screenshots"] == 20
assert animated_qa["runtimeFallbackPixelDifference"]["th-TH"].endswith("(0.202651%)")
assert animated_qa["runtimeFallbackPixelDifference"]["en"].endswith("(0.202651%)")
assert animated_qa["runtimeFallbackPixelDifference"]["budget"] == "3%"
advisory = verification["inheritedAdvisory"]
assert advisory["rootScrollWidthPx"] - advisory["viewportWidthPx"] == advisory["overflowPx"] == 36
assert advisory["source"] == "#ij-wander-toggle in #problems"
assert advisory["classification"] == "inherited_non_regression_outside_r9_scope"
assert release["localeInsightUsage"] is False

english = html.document_fromstring((ROOT / "ijji-EN.dc.html").read_text(encoding="utf-8"))
thai = html.document_fromstring((ROOT / "ijji-TH.dc.html").read_text(encoding="utf-8"))
assert english.xpath("normalize-space(//section[@id='top']//h1)") == "Know what to fix first."
assert "THB 29/question" in english.xpath("string(//section[@id='compare'])")
assert "เริ่ม 29 บาท/คำถาม" in thai.xpath("string(//section[@id='compare'])")

ledger_path = ROOT / "SHA256SUMS.txt"
ledger = {}
for line in ledger_path.read_text(encoding="utf-8").splitlines():
    expected_sha, relative_path = line.split("  ", 1)
    assert relative_path not in ledger
    ledger[relative_path] = expected_sha
actual_files = {
    path.relative_to(ROOT).as_posix()
    for path in ROOT.rglob("*")
    if path.is_file() and ".git" not in path.parts and path != ledger_path
}
assert set(ledger) == actual_files, (sorted(set(ledger) - actual_files), sorted(actual_files - set(ledger)))
for relative_path, expected_sha in ledger.items():
    assert digest(ROOT / relative_path) == expected_sha, relative_path

print("static r9 checks: passed")

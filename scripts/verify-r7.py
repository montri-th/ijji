"""Static, provenance, and byte-ledger checks for ijji web r7."""

import json
import struct
import sys
from hashlib import sha256
from pathlib import Path
from urllib.parse import urlparse

from lxml import html


ROOT = Path(__file__).resolve().parents[1]
PAGES = ("ijji-TH.dc.html", "ijji-EN.dc.html")
RELEASE_ID = "ijji-web-20260908-r7"
SECTION_ORDER = [
    "top", "why", "shops", "locale", "answer", "compare", "problems", "with-you", "start"
]
LINE_URL = "https://page.line.me/569ifvmv"
BRAND_SYMBOL = (
    "assets/identity/landometer-symbol-color-rebuild02-r6.png",
    "b818eeb6a6f4abeb7a8fac2b858de0e7a03a662dff371842a29ebfe4c21d12f6",
)
WITH_YOU_MOTIF = (
    "graph-b-brand-blue",
    "ijji-addon/motif/svg/ijji-graph-b-brand-blue.svg",
    "f99e49088f14a97e6ba5c787708a1d1252734638d0f363f0c2f113258f57ee48",
)
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
    raw = (ROOT / name).read_text(encoding="utf-8")
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

    line_links = document.xpath(f"//a[@href='{LINE_URL}']")
    assert len(line_links) == 3, (name, len(line_links))
    assert all(link.xpath(".//img[contains(@class, 'ij-line-mark')]") for link in line_links)
    assert len(document.xpath("//*[@data-bookmark-target='compare']")) == 2
    assert document.get_element_by_id("ij-wander-toggle").get("data-pause-label")
    assert all(len(figure.xpath("./figcaption")) <= 1 for figure in document.xpath("//figure"))


    icon_links = {link.get("sizes"): link.get("href") for link in document.xpath("//link[@rel='icon']")}
    for size, (relative_path, _) in FAVICONS.items():
        assert icon_links.get(size) == relative_path, (name, size, icon_links)

    local_resources = document.xpath("//img/@src | //script[@src]/@src | //link[@href]/@href")
    for resource in local_resources:
        parsed = urlparse(resource)
        if parsed.scheme or resource.startswith(("#", "//")):
            continue
        assert (ROOT / parsed.path).exists(), (name, resource)

english_raw = (ROOT / "ijji-EN.dc.html").read_text(encoding="utf-8")
english_document = html.document_fromstring(english_raw)
top = english_document.get_element_by_id("top")
wraps = top.xpath(".//*[@data-ijji-logo-wrap]")
assert len(wraps) == 1
wrap = wraps[0]
stages = wrap.xpath(".//*[@data-ijji-logo-stage]")
assert len(stages) == 1
stage = stages[0]
art = stage.xpath(".//*[@data-ijji-logo-art]")
fallback = stage.xpath(".//img[@data-ijji-logo-fallback]")
logo = stage.xpath(".//ijji-logo-sting")
control = wrap.xpath(".//button[@data-ijji-logo-control]")
assert len(art) == len(fallback) == len(logo) == len(control) == 1
assert not stage.xpath(".//button[@data-ijji-logo-control]")
assert len(wrap.xpath("./div[contains(@class, 'ij-hero-logo-controls')]")) == 1
assert art[0].get("role") == "img"
assert art[0].get("aria-label") == "ijji — Your business buddy around the corner"
assert fallback[0].get("src") == "assets/ijji/logo-sting/layers/ijji-logo-still.png?v=1.2.1"
assert fallback[0].get("width") == "891" and fallback[0].get("height") == "1087"
assert fallback[0].get("alt") == ""
assert logo[0].get("manual") is not None
assert logo[0].get("surface") == "brand-blue"
assert logo[0].get("bounce") == "playful"
assert logo[0].get("assets") == "./assets/ijji/logo-sting/layers/"
assert logo[0].get("aria-hidden") == "true"
assert all(logo[0].get(forbidden) is None for forbidden in ("loop", "notagline", "speed"))
assert control[0].get("data-pause-label") == "Pause logo animation"
assert control[0].get("data-resume-label") == "Resume logo animation"
assert control[0].get("data-replay-label") == "Replay logo animation"
assert control[0].xpath(".//*[@data-ijji-logo-icon]")
assert control[0].xpath(".//*[@data-ijji-logo-label]")
controller_scripts = english_document.xpath(
    "//script[contains(@src, 'assets/ijji/logo-sting/ijji-logo-controller-r7.js')]"
)
assert len(controller_scripts) == 1 and controller_scripts[0].get("data-motif-release") == "1.2.1"
assert not english_document.xpath("//script[contains(@src, 'ijji-logo-sting.js')]")
assert ".ij-hero-logo-art{display:grid;width:min(81.94%,320px)" in english_raw
assert ".ij-hero-logo-panel{max-width:320px;aspect-ratio:890.7/1086.9!important}.ij-hero-logo-art{width:100%}" in english_raw
assert ".ij-logo-motion-control[hidden]{display:none!important}" in english_raw
assert "@media (prefers-reduced-motion:reduce)" in english_raw
assert ".ij-hero-logo-controls{display:none!important}" in english_raw
assert "@media print{" in english_raw
assert ".ij-hero-logo-art>ijji-logo-sting,.ij-hero-logo-controls{display:none!important}" in english_raw
assert english_raw.count("mountHeroLogo()") == 2
assert "window.IjjiHeroLogo?.mount(this.rootRef.current)" in english_raw
assert "this._heroLogoController.destroy()" in english_raw

thai_raw = (ROOT / "ijji-TH.dc.html").read_text(encoding="utf-8")
thai_document = html.document_fromstring(thai_raw)
assert digest(ROOT / "ijji-TH.dc.html") == "631fc1374e6255caa0fb66aae1a2324e2b69e1b9f9a8f98884a424da90d4eeb4"
assert not thai_document.xpath("//*[@data-ijji-logo-stage]")
assert not thai_document.xpath("//script[contains(@src, 'ijji-logo-controller-r7.js')]")
assert len(thai_document.xpath("//section[@id='top']//img[@src='assets/identity/ijji-logo-full-square.png']")) == 1

for _, (relative_path, expected_sha) in FAVICONS.items():
    assert digest(ROOT / relative_path) == expected_sha
assert digest(ROOT / BRAND_SYMBOL[0]) == BRAND_SYMBOL[1]
assert digest(ROOT / WITH_YOU_MOTIF[1]) == WITH_YOU_MOTIF[2]

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
assert release["releaseDate"] == "2026-09-08"
if allow_prepared:
    assert release["publicationStatus"] in {"prepared_not_published", "published"}
else:
    assert release["publicationStatus"] == "published"
assert navigation["presetId"] == "ijji-public-bilingual-r5"
assert release["authority"]["ijjiDesignSystem"] == "0.5.0"
assert release["authority"]["ijjiAddOn"] == "0.5.3"
assert release["authority"]["parentLDS"] == "0.9.1"

animated = release["animatedIdentity"]
assert animated["overlayRelease"] == "1.2.1"
assert animated["overlayCommit"] == "57eeb7c953dc8b45fe6fe97f1251467d09b0b199"
assert animated["overlayManifestSha256"] == "77e8185104751e2c21c2e10fb8c5d771821bcb8123e02f116638fdbf3968d483"
assert animated["ownerApprovalRecordId"] == "MOTIF-LIBRARY-OWNER-APPROVAL-20260906-02"
assert animated["ownerApprovalRecordSha256"] == "82e5614cf8545746becfc23318a3dff93c70c61f8a23ad628d69c6b70aa08fb0"
assert animated["familyId"] == "ijji.logo-sting.r3"
assert animated["fallbackAssetId"] == "ijji.logo-sting.tagline"
assert animated["runtimeAssetId"] == "ijji.logo-sting.runtime.r3"
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

auth_refs = {item["authorityEvidenceRef"] for item in release["artifactOwnedAuthorizations"]}
assert "owner-message:2026-09-08:animated-hero-logo-and-republish" in auth_refs
price_record = next(
    item for item in release["artifactOwnedAuthorizations"]
    if item["authorityEvidenceRef"] == "owner-message:2026-09-04:comparison-prices"
)
if release["publicationStatus"] == "published":
    assert "owner-confirmation:2026-09-08:comparison-prices-and-free-trial" in auth_refs
    assert price_record["revalidationStatus"] == "confirmed_for_r7"
    assert price_record["publicationBlocking"] is False
    assert release["openManualGates"] == ["physical iPhone Safari and embedded WKWebView"]
    assert "ijji-web-20260908-r7" in release["postDeployEvidence"]
else:
    assert allow_prepared
    assert any("comparison entries" in gate for gate in release["openManualGates"])
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

print("static r7 checks: passed")

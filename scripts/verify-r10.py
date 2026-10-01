"""Bounded source and asset checks for ijji's LDS 0.9.5 web successor."""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import zipfile
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
DOC = ROOT / "design-system"
VENDOR = ROOT / "assets/lds/v0.9.5"
PAGES = ["ijji-TH.dc.html", "ijji-EN.dc.html"]
SECTIONS = ["top", "why", "shops", "locale", "answer", "compare", "problems", "with-you", "start"]
checks = 0


def check(condition: bool, label: str) -> None:
    global checks
    assert condition, label
    checks += 1


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


class PageInspector(HTMLParser):
    def __init__(self, source: str) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.text: dict[str, list[str]] = {}
        self.assets: list[str] = []
        self.section: str | None = None
        self.section_depth = 0
        self.feed(source)

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "section":
            self.section_depth += 1
            if self.section is None and values.get("id"):
                self.section = values["id"]
                self.ids.append(self.section)
                self.text[self.section] = []
        if tag in {"link", "script", "img"}:
            asset = values.get("href" if tag == "link" else "src")
            if asset:
                self.assets.append(asset)

    def handle_endtag(self, tag: str) -> None:
        if tag == "section" and self.section_depth:
            self.section_depth -= 1
            if self.section_depth == 0:
                self.section = None

    def handle_data(self, data: str) -> None:
        if self.section is not None:
            self.text[self.section].append(data)

    def section_text(self, section: str) -> str:
        return " ".join(" ".join(self.text[section]).split())


release = json.loads((ROOT / "release.json").read_text())
check(release["releaseId"] == "ijji-web-20260930-r10", "release identity")
check(release["publicationStatus"] in {"prepared_not_published", "published"}, "honest publication state")
authority = release["authority"]
check([authority["ijjiDesignSystem"], authority["ijjiAddOn"], authority["parentLDS"], authority["parentReleaseRef"], authority["parentColorSet"]] == ["0.5.2", "0.5.5", "0.9.5", "v0.9.5-owner.1", "color-srgb-08"], "release tuple")
check(authority["parentSignatureStatus"] == "unsigned_owner_distribution" and not authority["completeArtifactConformanceClaim"], "no false trust claim")
check(digest(ROOT / "releases/ijji-web-20260909-r9.json") == release["releaseLineage"]["previousReleaseRecordSha256"], "historical release unchanged")

lock = json.loads((DOC / "compatibility.json").read_text())
check(lock["id"] == "ijji-ds-0.5.2-addon-0.5.5-lds-0.9.5", "compatibility lock identity")
check(digest(DOC / "compatibility.json") == release["normative"]["compatibilityLockSha256"], "compatibility lock hash")
check(digest(VENDOR / "SHA256SUMS.upstream.txt") == authority["parentManifestSha256"], "parent manifest hash")
check(digest(VENDOR / "release.upstream.json") == authority["parentReleaseJsonSha256"], "parent release hash")
upstream_release = json.loads((VENDOR / "release.upstream.json").read_text())
check(upstream_release["release"]["releaseRef"] == "v0.9.5-owner.1" and upstream_release["release"]["colorSetId"] == "color-srgb-08", "upstream tuple")
upstream = {}
for line in (VENDOR / "SHA256SUMS.upstream.txt").read_text().splitlines():
    sha, path = line.split("  ", 1)
    upstream[path.removeprefix("assets/lds-0.9.5/")] = sha
vendor_files = [p for p in (VENDOR / "build-kit").rglob("*") if p.is_file()]
vendor_files.append(VENDOR / "machine/color-srgb-08.production.css")
check(len(vendor_files) == release["runtime"]["vendoredAssetCount"], "vendor file count")
for path in vendor_files:
    relative = path.relative_to(VENDOR).as_posix()
    check(digest(path) == upstream.get(relative) == lock["webRuntime"]["vendorFileSha256"].get(relative), f"parent runtime parity: {relative}")
check(digest(VENDOR / "ijji-compat.css") == lock["webRuntime"]["bridgeSha256"], "bridge hash")
motif_info = lock["motifProvenance"]
motif_path = ROOT / motif_info["familyRecordPath"]
check(digest(motif_path) == motif_info["familyRecordSha256"] == release["runtime"]["motifRegistrySha256"], "motif family registry")
motif = json.loads(motif_path.read_text())
check(motif["familyBoundary"]["motionEnabled"] is False and motif["familyBoundary"]["liveEligibleAssetCount"] == 9, "motif static scope")
check(len(motif["assetRecords"]) == motif_info["staticSvgCount"] == 18, "motif member count")
for asset in motif["assetRecords"]:
    path = ROOT / asset["path"]
    check(path.is_file() and digest(path) == asset["sha256"] and path.stat().st_size == asset["bytes"], f"motif asset: {asset['assetId']}")
check(digest(ROOT / motif_info["sourceArchivePath"]) == motif_info["sourceArchiveSha256"], "motif source archive")
check(digest(ROOT / motif_info["approvalPath"]) == motif_info["approvalSha256"], "motif approval")
check(digest(ROOT / "references/releases/v0.5.4/release-lock.json") and json.loads((ROOT / "references/releases/v0.5.4/release-lock.json").read_text())["motif"]["familyRecordSha256"] == motif_info["familyRecordSha256"], "motif installed release lock")
bridge = (VENDOR / "ijji-compat.css").read_text()
check(bridge.count('.ij-page[data-theme="light"]') == 1 and bridge.count('.ij-page[data-theme="dark"]') == 1, "both theme bridges")
for family in ("density-area", "density-capita", "density-household", "built"):
    check(f"--scale-{family}-low:" in bridge, f"theme family {family}")

for relative, expected in lock["product"]["normativeDocsSha256"].items():
    check(digest(DOC / relative) == expected, f"normative document {relative}")
archive = DOC / "ijji-normative-0.5.2-0.5.5-lds0.9.5.zip"
check(digest(archive) == release["normative"]["projectSourcePackageSha256"], "normative ZIP hash")
with zipfile.ZipFile(archive) as zipped:
    names = set(zipped.namelist())
    expected_names = set(lock["product"]["normativeDocsSha256"]) | {"compatibility.json", "README-for-project-source.txt"}
    check(names == expected_names, "normative ZIP membership")
    for name in lock["product"]["normativeDocsSha256"]:
        check(zipped.read(name) == (DOC / name).read_bytes(), f"archival normative ZIP content {name}")
    check(digest(archive) == "a1e1a4331868956b5c252f684569d200e1932e0a85508b2667deb04154a1a981", "archival ZIP exact bytes preserved")

for page in PAGES:
    source = (ROOT / page).read_text()
    tree = PageInspector(source)
    baseline = subprocess.check_output(["git", "show", f"b4894463ec16302a9c058f7bb8cf5164e66b7a70:{page}"], cwd=ROOT).decode()
    old_tree = PageInspector(baseline)
    check(source.count('assets/lds/v0.9.5/build-kit/lds-0.9.5.css') == 1, f"{page} parent kit")
    check(source.count('assets/lds/v0.9.5/ijji-compat.css') == 1, f"{page} compatibility CSS")
    check('_ds_bundle.js' not in source and 'mountMotifs()' not in source and 'ijji-motifs.js' not in source, f"{page} no old/inline runtime")
    check('this.io.unobserve(e.target)' not in source and "rootMargin: '0px 0px -12% 0px'" in source, f"{page} approach reentry observer")
    check("this._approachMediaChange = () => this.arm()" in source and "requestAnimationFrame(() => requestAnimationFrame(() =>" in source, f"{page} reduced-motion and reached-content safeguards")
    check('transparent-ink.svg' not in source and 'transparent-mint.svg' not in source, f"{page} no unapproved transparent motifs")
    check(source.count('data-ij-motif="graph-b-brand-blue"') == 1, f"{page} one approved static motif")
    check('data-lds-release="0.9.5" data-ijji-ds="0.5.2" data-ijji-addon="0.5.5"' in source, f"{page} runtime identity")
    check('href="design-system/"' in source, f"{page} normative entrypoint")
    for selector in ('.ij-menu-row[aria-current="page"]', '.ij-utility-choice[aria-pressed="true"]', '.ij-bookmark-link[aria-current="location"]'):
        match = re.search(re.escape(selector) + r'[^{}]*\{([^{}]*)\}', source)
        check(match is not None and 'box-shadow' not in match.group(1) and 'border-left' not in match.group(1), f"{page} restrained selection: {selector}")
    check('outline:3px solid var(--interaction-focus-ring)' in source, f"{page} focus visible")
    check(old_tree.ids == tree.ids == SECTIONS, f"{page} section order")
    for section in SECTIONS:
        before = old_tree.section_text(section)
        after = tree.section_text(section)
        check(before == after, f"{page} visible product copy: {section}")
    for value in tree.assets:
        if not value or urlparse(value).scheme or value.startswith(("//", "#", "data:")):
            continue
        path = (ROOT / value.split("?", 1)[0]).resolve()
        check(path.is_file() and path.is_relative_to(ROOT), f"{page} local asset {value}")

index = (DOC / "index.html").read_text()
policy = json.loads((DOC / "source-policy.json").read_text())
source = policy["normative"]
check(source["base"]["markdownUrl"] == "https://montri-th.github.io/Landometer/v0.9.7/normative/Landometer-Design-System-v0.9.7.md", "complete LDS base Markdown URL")
check(source["addon"]["markdownUrl"] == "https://montri-th.github.io/Landometer/v0.9.7/normative/ijji-Add-on-v0.5.5-for-LDS-v0.9.7.md", "separate ijji Add-on Markdown URL")
for part in ("base", "addon"):
    check(source[part]["jsonUrl"] == source[part]["markdownUrl"].removesuffix(".md") + ".json", f"{part} JSON alternative")
    check(all(value in index for value in (source[part]["markdownUrl"], source[part]["jsonUrl"])), f"{part} download links")
check(source["requiredDesignSourceFileCount"] == 2 and source["olderMasterRequired"] is False and source["addon"]["embedsSharedFoundation"] is False, "complete base plus separate product Add-on")
check("source-policy.json" in index, "source policy link")
check("ijji-LDS-v0.9.5-standalone" not in index, "withdrawn combined product route absent")
check(all(path in index for path in ("ijji-project-source-normative-0.5.2-0.5.5.md", "ijji-design-system-v0.5.2.md", "ijji-ds-addon-v0.5.5.md", archive.name)), "historical downloads retained")
check(policy["supersession"]["status"] == "cancelled_for_new_authoring", "former delivery cancelled")
for entry in policy["supersession"]["files"]:
    check(digest(ROOT / entry["path"]) == entry["sha256"], f"superseded file unchanged: {entry['path']}")
check(release["normative"]["currentProjectSource"] == source == lock["projectSource"], "one source route across release and compatibility")
check(digest(DOC / "source-policy.json") == lock["sourcePolicy"]["sha256"] == release["normative"]["sourcePolicy"]["sha256"], "source policy hash")
check("eight pinned LDS" not in index and "eight exact LDS" not in (DOC / "README-for-project-source.txt").read_text(), "old assembly no longer active onboarding")

ledger = {}
for line in (ROOT / "SHA256SUMS.txt").read_text().splitlines():
    sha, relative = line.split("  ", 1)
    check(relative not in ledger, f"duplicate ledger row: {relative}")
    ledger[relative] = sha
actual = {p.relative_to(ROOT).as_posix() for p in ROOT.rglob("*") if p.is_file() and ".git" not in p.parts and p.name != "SHA256SUMS.txt"}
check(set(ledger) == actual, "complete repository byte ledger")
for relative, sha in ledger.items():
    check(digest(ROOT / relative) == sha, f"repository hash: {relative}")

print(f"ijji r10 bounded source checks: PASS ({checks} checks)")

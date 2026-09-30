"""Refresh standalone guidance and the byte ledger without rewriting archival releases."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DOC = ROOT / "design-system"
VENDOR = ROOT / "assets/lds/v0.9.5"
ZIP = DOC / "ijji-normative-0.5.2-0.5.5-lds0.9.5.zip"
PACKAGE_SHA = "cd489c282693681c76ebc24b8a31956667678ac7cc2a25947dc557469af11ff0"
MANIFEST_SHA = "2f6da2d1e283bdf191a7714704a9818dad262449753abaff4403f47e230ca985"
RELEASE_SHA = "9a2725d21927a19b0d78d04455ad95ad0e7571ce2d45d74da21a17786cc9e829"
MOTIF_RECORD = ROOT / "assets/motifs/ijji-four-beat-selected-3-r3/family-record.json"
MOTIF_LOCK = ROOT / "references/releases/v0.5.4/release-lock.json"
MOTIF_SOURCE = ROOT / "references/releases/v0.5.4/source/ijji-motif-owner-supplied-20260904.zip"


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def write_json(path: Path, value: object) -> None:
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n")


assert digest(VENDOR / "SHA256SUMS.upstream.txt") == MANIFEST_SHA
assert digest(VENDOR / "release.upstream.json") == RELEASE_SHA
upstream = {}
for line in (VENDOR / "SHA256SUMS.upstream.txt").read_text().splitlines():
    sha, path = line.split("  ", 1)
    upstream[path.removeprefix("assets/lds-0.9.5/")] = sha

runtime = {}
for path in sorted((VENDOR / "build-kit").rglob("*")):
    if not path.is_file():
        continue
    relative = path.relative_to(VENDOR).as_posix()
    assert relative in upstream and digest(path) == upstream[relative], relative
    runtime[relative] = upstream[relative]
color_path = "machine/color-srgb-08.production.css"
assert digest(VENDOR / color_path) == upstream[color_path]
runtime[color_path] = upstream[color_path]

motif_lock = json.loads(MOTIF_LOCK.read_text())
motif = json.loads(MOTIF_RECORD.read_text())
assert digest(MOTIF_RECORD) == motif_lock["motif"]["familyRecordSha256"]
assert digest(MOTIF_SOURCE) == motif_lock["sourceArchive"]["sha256"]
assert len(motif["assetRecords"]) == motif_lock["motif"]["staticSvgFiles"] == 18
for asset in motif["assetRecords"]:
    path = ROOT / asset["path"]
    assert path.is_file() and digest(path) == asset["sha256"] and path.stat().st_size == asset["bytes"], asset["assetId"]

docs = [
    "ijji-project-source-normative-0.5.2-0.5.5.md",
    "ijji-design-system-v0.5.2.md",
    "ijji-ds-addon-v0.5.5.md",
    "history/ijji-design-system-v0.5.0.md",
    "history/ijji-design-system-v0.5.1.md",
    "history/ijji-ds-addon-v0.5.3.md",
    "history/ijji-ds-addon-v0.5.4.md",
]
lock = {
    "schemaVersion": "ijji-lds-compatibility/1.0",
    "id": "ijji-ds-0.5.2-addon-0.5.5-lds-0.9.5",
    "status": "owner-authorized-r10-prepared",
    "parent": {
        "dsVersion": "0.9.5",
        "releaseRef": "v0.9.5-owner.1",
        "colorSet": "color-srgb-08",
        "signatureStatus": "unsigned_owner_distribution",
        "packageUrl": "https://github.com/montri-th/Landometer/releases/download/v0.9.5/landometer-design-system-0.9.5.zip",
        "packageSha256": PACKAGE_SHA,
        "manifestSha256": MANIFEST_SHA,
        "releaseJsonSha256": RELEASE_SHA,
    },
    "product": {
        "ijjiDesignSystem": "0.5.2",
        "ijjiAddOn": "0.5.5",
        "normativeDocsSha256": {path: digest(DOC / path) for path in docs},
    },
    "webRuntime": {
        "source": "exact pinned LDS 0.9.5 build-kit plus color projection",
        "retainedStructuralCompatibility": "historical ijji 0.9.1 CSS only; no active old JS bundle",
        "vendorFileSha256": runtime,
        "bridgePath": "assets/lds/v0.9.5/ijji-compat.css",
        "bridgeSha256": digest(VENDOR / "ijji-compat.css"),
    },
    "motifProvenance": {
        "historicalAssetPack": "ijji-ds-addon-assets-v0.5.4",
        "historicalParentLds": "0.9.1",
        "currentCompatibility": "exact static asset approval inherited by ijji DS 0.5.2 / Add-on 0.5.5; governed parent for new work is LDS 0.9.5",
        "familyRecordPath": MOTIF_RECORD.relative_to(ROOT).as_posix(),
        "familyRecordSha256": digest(MOTIF_RECORD),
        "staticSvgCount": len(motif["assetRecords"]),
        "sourceArchivePath": MOTIF_SOURCE.relative_to(ROOT).as_posix(),
        "sourceArchiveSha256": digest(MOTIF_SOURCE),
        "approvalPath": "assets/guides/motif/ijji-four-beat-selected-3-r3.static.approval.yml",
        "approvalSha256": digest(ROOT / "assets/guides/motif/ijji-four-beat-selected-3-r3.static.approval.yml"),
    },
    "scope": "project/website adoption only; predecessor releases remain historical",
    "claimCeiling": "authoring_aligned",
}
source_policy = json.loads((DOC / "source-policy.json").read_text())
lock["projectSource"] = source_policy["normative"]
lock["sourcePolicy"] = {"path": "design-system/source-policy.json", "sha256": digest(DOC / "source-policy.json")}
lock["archivalDocumentStatus"] = "historical_only; former eight-plus-one instructions cancelled for new authoring"
write_json(DOC / "compatibility.json", lock)

readme = DOC / "README-for-project-source.txt"
readme.write_text(
    "ijji - complete LDS 0.9.5 base plus separate ijji Add-on 0.5.5\n"
    "Base: " + source_policy["normative"]["base"]["markdownUrl"] + "\n"
    "Add-on: " + source_policy["normative"]["addon"]["markdownUrl"] + "\n"
    "Upload these two Markdown files to the intended ChatGPT or Claude Project.\n"
    "The base owns shared LDS rules and exact shared machine values; the Add-on owns ijji product rules.\n"
    "Optional JSON base: " + source_policy["normative"]["base"]["jsonUrl"] + "\n"
    "Optional JSON Add-on: " + source_policy["normative"]["addon"]["jsonUrl"] + "\n"
    "The old eight-LDS-files setup and combined product/base proposal are cancelled for new authoring.\n"
    "Remove or deactivate conflicting old design sources; keep product/evidence/rights records.\n"
    "Set Project Instructions to the base plus Add-on and verify source access in a new session.\n"
    "Historical Markdown and ZIP files preserve their original bytes for audit only.\n"
    "Project source upload does not activate every plugin, client, account or team.\n"
)

# The original r10 ZIP is an immutable audit artifact. Its packaged README and
# compatibility lock describe the superseded delivery and must not be rewritten.
assert digest(ZIP) == "a1e1a4331868956b5c252f684569d200e1932e0a85508b2667deb04154a1a981"

release_path = ROOT / "release.json"
release = json.loads(release_path.read_text())
release["normative"]["historicalProjectSourceProjection"] = "design-system/ijji-project-source-normative-0.5.2-0.5.5.md"
release["normative"].pop("projectSourceProjection", None)
release["normative"]["currentProjectSource"] = source_policy["normative"]
release["normative"]["sourcePolicy"] = lock["sourcePolicy"]
release["normative"]["projectSourcePackageStatus"] = "historical_only; not the current Project Source installer"
release["normative"]["projectSourcePackageSha256"] = digest(ZIP)
release["normative"]["compatibilityLockSha256"] = digest(DOC / "compatibility.json")
release["runtime"]["vendoredAssetCount"] = len(runtime)
release["runtime"]["parentProductionCssSha256"] = upstream[color_path]
release["runtime"]["motifRegistry"] = MOTIF_RECORD.relative_to(ROOT).as_posix()
release["runtime"]["motifRegistrySha256"] = digest(MOTIF_RECORD)
write_json(release_path, release)

ledger = []
for path in sorted(ROOT.rglob("*")):
    if not path.is_file() or ".git" in path.parts or path.name == "SHA256SUMS.txt":
        continue
    ledger.append(f"{digest(path)}  {path.relative_to(ROOT).as_posix()}")
(ROOT / "SHA256SUMS.txt").write_text("\n".join(ledger) + "\n")
print(f"Preserved archival r10 ZIP {digest(ZIP)}; {len(runtime)} exact parent runtime files; {len(ledger)} repository files")

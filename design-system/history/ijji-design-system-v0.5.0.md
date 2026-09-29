# ijji Design System v0.5.0 — Identity, Motif and VES Normative Release

**Product Experience Overlay for Landometer Design System v0.9.0-r7**  
**Revision date:** 2026-08-22  
**Status:** Owner-approved Product Experience Overlay and `designsystem.adoption` reference; product-runtime availability remains independently gated  
**Owner approval date:** 2026-08-22  
**Approval record:** `approvals/ijji-design-system-v0.5.0.approval.yml`  
**Owner direction integrated:** retain the existing ijji logo; develop a coherent motif where safely possible; select ijji and supporting colors only from the governed Landometer Design System; make VES efficient for human and AI implementation  
**Base document:** `sources/ijji_Design_System_v0.5-draft.2_2026-08-22.md`  
**Base SHA-256:** `dcd0537a021f97116f31cc4c0d2ee231ddb606b7bce9c972c686b43d94cc339c`  
**Shared visual authority:** `Landometer Design System v0.9.0-r7`  
**Shared Color Set:** `color-srgb-05`  
**Shared kit:** `lds-kit-0.9.0-r4`  

> **Normative outcome:** ijji keeps a distinct product identity. Its logo and approved product motifs are ijji-owned assets. Its color values, surfaces, typography, controls, motion, data visualization and accessibility continue to inherit Landometer Design System. VES governs the product-specific visual experience projection; it consumes existing product and evidence truth without redefining either. Neither identity nor motif may raise a claim ceiling.

---

# 0. How This Revision Works

## 0.1 Immutable composition `[IJJI-D3-VERSION-01]`

This file does not overwrite draft.2. The effective v0.5.0 release is composed in this order:

1. Landometer Design System v0.9.0-r7 for shared visual, interaction, accessibility, token and QA authority;
2. the exact owner-approved ijji Product Brief or owner ADR for users, workflows, data, SKU, capability, privacy, availability and outcome truth;
3. `sources/ijji_Design_System_v0.5-draft.2_2026-08-22.md` at the exact hash above;
4. this amendment for ijji logo identity, color-role selection, motif governance and VES.

All draft.2 rules not explicitly replaced here remain unchanged. A correction to this file MUST create a new immutable revision. Silent overwrite is prohibited.

## 0.2 Rules replaced from draft.2

This amendment replaces only these draft.2 statements:

| Draft.2 location | Previous boundary | v0.5.0 outcome |
|---|---|---|
| §0.2–0.3 | ijji DS does not own official logo pixels or product motif | ijji owns approved product-logo and product-motif asset records; LDS still owns delivery, surface and accessibility rules |
| §5.6 | no logo-derived motif belongs in the overlay | a separately designed, registered motif MAY echo observable ijji form; no crop, trace or pseudo-logo |
| §12.3 | local logo hex and inferred motif geometry deliberately not restored | raw local palette remains retired, but the existing logo is retained as an asset and a bounded motif family is authorized |
| §13 Open Decision 6 | register official ijji logo variants and surfaces | identity direction and reference asset are resolved here; production export variants remain gated |
| draft.2 foreground-conflict note for the ijji product gradient | treat the r7 foreground prose conflict as unresolved | use only the later dated r7 owner-amendment recipe and its registered `surfaceForeground.onLight` contract; if the validated package cannot resolve the same record, stop release |

No AHA, evidence, Locale, Mission safety, privacy, capability or availability rule is relaxed.

No later Product Brief is silently promoted by this composition rule. `ijji_Product_Brief_v2.0-draft.2_2026-08-22.md` is a candidate alignment input only until an owner approval record exists. If the applicable approved Product Brief/ADR cannot be resolved, no candidate product truth may be rendered as current or available.

## 0.3 Normative language

`MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT` and `MAY` are normative. A rule marked `candidate` is not authorized for live delivery until its named gate passes.

## 0.4 VES terminology decision

Within this revision, **VES means Visual Experience Specification**: a thin product-specific composition and view-projection layer under LDS and the ijji Product Experience Overlay.

VES may govern scene order, hierarchy, density, responsive presentation, frontstage copy form and placement of approved identity/media assets. It MUST NOT own product truth, evidence truth, runtime capability, logo bytes, raw tokens or release proof.

---

# 1. Identity Authority

## 1.1 Identity ownership `[IJJI-IDENTITY-01]`

ijji owns:

- the approved ijji logo artwork and product-specific variants;
- an ijji identity-asset manifest;
- an approved product-motif asset family;
- selection of existing LDS color roles for ijji identity compositions;
- product-specific identity fixtures and recognition QA.

ijji does not own:

- a second raw color palette, font stack, icon family, spacing scale, radius scale, motion system, data palette or CSS foundation;
- a recolored or reconstructed Landometer logo;
- permission to change shared token values;
- a visual shortcut that converts a hypothesis, model, proxy or missing value into observed fact.

LDS rules `[LOGO-SURFACE-01]`, `[MOTIF-01]`, `[VIS-04]`, `[SURFACE-01]`, `[MOTION-01]`, `[REVEAL-01]` and `[A11Y-01]` remain binding.

## 1.2 Existing ijji logo — retained identity `[IJJI-LOGO-01]`

The existing ijji mark is retained as the product identity direction. The supplied reference source is registered as follows:

```yaml
assetRecordVersion: ijji-identity-asset/0.1
assetId: ijji.logo.legacy.full-square.reference.v1
sourcePath: sources/ijji Logo design.svg.txt
sourceRole: owner_supplied_identity_reference
container:
  form: svg_wrapper_with_embedded_png
  declaredCanvasPx: [2000, 2000]
  wrapperSha256: 56138771a1798f8a19f89afb0462f7f555f2048d3c35ddaa56c866b5f712f7ac
embeddedPayload:
  mime: image/png
  dimensionsPx: [2000, 2000]
  alpha: true
  byteLength: 283307
  sha256: cbeb7bc4db8db795fc669ef521fc05442a275ab63cda866513277cdc75b05a86
visibleIdentity:
  productName: ijji
  lockupRole: full_square_with_embedded_tagline_candidate
  includesTagline: true
  taglineText: Your business buddy around the corner
  taglineLocale: en
  taglineApprovalRef: approvals/ijji-logo-public-playground.approval.yml
  dominantAssetColor: frozen_in_asset
identityDecisionStatus: owner_approved_for_exact_playground_context
approvalState: approved_with_scope
visibility: public_designsystem_adoption_projection
rightsRef: approvals/ijji-logo-public-playground.approval.yml
productionDeliveryStatus: reference_only_pending_export_manifest
liveUsageAllowed: true_for_exact_playground_identity_panel_only
```

The record preserves the owner-directed identity direction; it does not approve the observed file as an official or production asset. The `.svg.txt` wrapper MUST NOT be shipped directly as a production image. A byte-exact extraction of the embedded PNG MAY become a registered full-square candidate after it receives a stable path, correct MIME, rights record, asset manifest, identity approval, surface approval and rendered recognition evidence.

## 1.3 Logo integrity

The logo MUST:

- remain byte-identical to its registered variant;
- preserve aspect ratio, alpha, canvas and approved clear space;
- keep the product name and tagline intact when the full-square variant is used;
- use an exact asset ID and SHA-256 in every delivered context;
- remain static; the official logo is never animated.

The logo MUST NOT be:

- redrawn, traced, cropped, trimmed, masked, filtered, inverted, recolored or reconstructed;
- split into a symbol, wordmark or tagline by an implementer;
- used as a favicon, app icon, header lockup, social preview or maskable icon without a separately exported and approved variant;
- placed on a surface selected only because it “looks close”; the exact asset/surface/theme pairing must be recorded.

## 1.4 Delivery-context matrix `[IJJI-LOGO-CONTEXT-01]`

| Context | Required exact variant | Current state | Fallback before approval |
|---|---|---|---|
| Public VES playground identity panel | exact extracted full-square reference PNG | approved for this context only on direct `brand.blue` surface | render intact with exact hash; no white carrier, crop, recolor or role reuse |
| Other large identity/about panels | full-square lockup | export manifest pending | labelled placeholder in internal/private review only |
| Normal app header | transparent horizontal lockup | missing | internal/private demo may keep an accessible navigation label; it is not a text-logo substitute |
| Compact mark | approved symbol asset | missing | omit in internal/private demo; never derive it from the square reference |
| Browser-tab favicon | approved favicon asset | missing | omit declaration; never reuse the square lockup |
| Search-result favicon | approved hostname-bound search asset | missing | omit declaration and record the discovery blocker |
| Touch icon | approved touch asset | missing | omit |
| Maskable app icon | approved maskable asset with safe-zone evidence | missing | omit |
| Social preview composition | destination-specific preview asset showing the actual page object; optional approved logo-variant reference | missing | omit preview; never use a generic logo wallpaper |
| LINE OA profile | channel-approved profile asset | unresolved | internal/private review only until bytes, context and permission are registered |
| LINE OA cover | channel-approved cover composition | unresolved | internal/private review only until bytes, context and permission are registered |

Each context MUST follow LDS `[LOGO-SURFACE-01]`. Approval of one row never approves another. A text product name remains an accessibility/navigation label; it never satisfies official identity. Every production or `designsystem.adoption` artifact MUST resolve at least one required official identity context at artifact level, even when an individual VES view carries no logo.

## 1.5 Production export pack — required next artifact

The production identity pack SHOULD contain separately approved, append-only assets:

1. `ijji.logo.full-square`;
2. `ijji.logo.horizontal`;
3. `ijji.logo.compact`;
4. `ijji.logo.favicon`;
5. `ijji.logo.touch`;
6. `ijji.logo.maskable`;
7. `ijji.logo.line-profile`;
8. `ijji.logo.line-cover`.

A social preview is a separate destination-specific media composition with its own `previewAssetId`; it may reference an approved logo variant but is not itself a generic logo variant.

Every record MUST carry variant, path, MIME, dimensions, bytes, SHA-256, canvas behavior, clear space, minimum delivered size, theme strategy, surface pairing, approval scope, owner, approval date and expiry. Missing fields fail closed.

---

# 2. ijji Color Role Selection from LDS

## 2.1 One parent color source `[IJJI-COLOR-01]`

ijji consumes colors from LDS Color Set `color-srgb-05`. It MUST NOT mint a raw product palette or copy LDS values into a parallel token file.

The table below is a pinned review snapshot, not a second value authority. Runtime implementation resolves the named LDS token or recipe from the validated LDS package.

| ijji job | Governing LDS role | Pinned value/recipe snapshot | Why it fits | Must not mean |
|---|---|---|---|---|
| Frozen logo pixels | observed ijji asset candidate | legacy mint is visually aligned with `#0AD69C` | preserves the existing mark while approval remains separate | runtime token, state or data |
| Primary ijji expression | `energy.mint` | `#0AD69C` | exact match to the legacy dominant mint | success, confidence, observed progress or CTA state |
| Full-logo carrier candidate | `brand.blue` | `#1D4497` | governed deep blue closest to the legacy blue-field intent and reinforces ecosystem parentage | generic ijji background, filled action, evidence status or data |
| Product identity atmosphere · light | `product.ijji.gradient.light` | `#C4E0EE 0% · #B2E2E2 50% · #CCE6D0 100%` | blue–mint continuity without a local gradient | data, state, risk or magnitude |
| Product identity atmosphere · dark | `product.ijji.gradient.start.dark` → `.end.dark` | `#59C7E8 → #3BD3CB` | cool, energetic ijji recognition in dark theme | data, state, risk or magnitude |
| Interaction | `interaction.accent` / `dark.interaction.accent` | `#176B82` / `#68C4E2` | inherits shared control behavior and focus QA | brand ownership or analytical meaning |
| Foundation | `surface.*`, `text.*`, `border.*` | LDS theme pair | consistent component and theme behavior | ijji-specific palette |
| Semantic state | `semantic.*` | LDS state pair | one ecosystem status language | product identity |
| Evidence lineage | `status.source.*` | LDS source-status roles | evidence-specific meaning with text label | decoration |
| Optional expressive support | one of `energy.sky`, `energy.yellow`, `energy.coral` | LDS exact energy role | adds warmth or orientation when a real composition job exists | state, category, chart, map or priority |

### 2.1.1 Deterministic color-selection route

Human and AI implementers MUST select by job before visual similarity:

1. classify the job as asset pixel, product identity, expression, foundation, interaction, semantic state, evidence status, nominal category, quantitative scale or map interaction;
2. restrict candidates to that LDS namespace;
3. preserve a stable governed category/measure assignment when one exists;
4. use visual proximity only between role-compatible governed candidates;
5. if no role-compatible LDS token/recipe exists, return `NO_GOVERNED_MATCH` and redesign—never choose the nearest color from another namespace;
6. implement the exact LDS token/recipe reference and record Color Set/build parity.

The same legacy mint can therefore resolve to frozen asset pixels, `energy.mint`, `interaction.accent`, `semantic.success` or a data-scale value only according to the real job. Hex similarity never merges those meanings.

## 2.2 Legacy continuity decision

The old local palette is retired as a runtime authority. Continuity is preserved through role mapping:

- old ijji mint → exact LDS `energy.mint` for nearby expression, while logo pixels stay frozen in the asset;
- old Trust Blue field `#123E7C` → LDS `brand.blue` `#1D4497` only for an approved logo carrier, not as a new ijji token;
- old blue-and-mint atmosphere → LDS `product.ijji.gradient.light` or the exact dark start/end pair selected by theme;
- old supporting accents → LDS energy roles for expression, semantic roles for state, and data roles for analysis.

No implementation may keep the old hex palette “for compatibility.” A legacy screenshot is evidence of history, not a token source.

## 2.3 Logo carrier pairing `[IJJI-COLOR-LOGO-01]`

The governed deep carrier uses exact LDS `brand.blue`; it is not baked into the asset. Owner approval dated 2026-08-22 authorizes one `direct_surface` pairing for the intact extracted PNG inside the public ijji VES playground identity panel. This is an owned section surface—not a white, black or neutral plate inserted behind the logo. The approval includes the embedded English tagline only as unchanged pixels in this exact asset/context. No other context, variant or surface is approved by this decision. An implementer MUST NOT remove the tagline, crop it, or treat it as outside the artwork.

```yaml
identityApproval:
  decision: approved_with_scope
  assetId: ijji.logo.legacy.full-square.reference.v1
  surfaceRef: brand.blue
  lockupRole: full_square_with_embedded_tagline_candidate
  includesTagline: true
  taglineText: Your business buddy around the corner
  taglineLocale: en
  taglineApprovalRef: approvals/ijji-logo-public-playground.approval.yml
  assetInk: frozen_asset_pixels
  measuredContrast:
    legacyMintVsBrandBlue: 4.77_to_1
    method: WCAG_2_relative_luminance_sRGB
  scope: large_identity_panel_only
  themes: [light, dark]
  status: approved_for_public_ves_playground_identity_panel_only
  approvalRef: approvals/ijji-logo-public-playground.approval.yml
```

The computed contrast is a screening result, not production evidence. Approval requires testing the exact delivered bytes at actual size, including antialiased tagline pixels. If the full lockup is not readable, increase delivered size or use another approved variant; do not alter the asset.

## 2.4 Product atmosphere

The ijji product gradient MAY identify an opening, one major transition or closure when `[SURFACE-01]` records a real job and deletion test. It MUST NOT appear on every card, button, Mission, evidence plot or status.

Foreground MUST use the exact parent `surfaceForeground.onLight` contract attached by the later dated r7 owner amendment to both ijji theme recipes. A build MUST NOT infer white or dark ink from a screenshot. If the validated LDS delivery identity does not resolve that same contract and recipe lineage, the build stops; ijji stores references, never copied foreground values.

## 2.5 Supporting-color composition rule

A normal ijji viewport SHOULD contain:

- foundation surfaces and text;
- one ijji identity signal: an approved logo or the owning product gradient; `energy.mint` may accompany either only as controlled expression and is never the sole product identifier;
- the shared interaction accent where controls exist;
- semantic/evidence colors only where their real state exists;
- at most one additional energy color when it improves orientation or warmth.

Do not create a rainbow of decorative accents. Do not use color alone to distinguish SKU, ICP, evidence status, urgency or recommendation strength.

## 2.6 Color delivery record

```yaml
ijjiColorSelectionVersion: ijji-color-selection/0.1
ldsVersion: 0.9.0-r7
ldsSourceSha256: 52ef41f1b231f8b84955a40c21a018991a114a4f5eaabd8c5111816bf8d645b1
colorSetId: color-srgb-05
kitId: lds-kit-0.9.0-r4
expressionRoles:
  primaryExpression: energy.mint
identityRoles:
  logoCarrierCandidate: brand.blue
  productAtmosphereLight: product.ijji.gradient.light
  productAtmosphereDark:
    startRef: product.ijji.gradient.start.dark
    endRef: product.ijji.gradient.end.dark
  productAtmosphereForeground:
    lightContractRef: surfaceForeground.onLight
    darkContractRef: surfaceForeground.onLight
sharedRoles:
  interaction: interaction.accent
  foundation: surface_and_text_theme_pairs
  semantic: semantic_state_pairs
  evidence: status.source
localRawValuesAllowed: false
deliveryIdentityContractRef: LDS-r7.[PUB-01].deliveryIdentity
```

Any change to a selected governed color, gradient or token source requires a new append-only ijji color-selection version and the LDS Color Set/build parity gate. A mutable `latest` token package is not approval evidence.

---

# 3. Product Motif

## 3.1 Motif intent `[IJJI-MOTIF-01]`

ijji MAY have a product motif that feels related to its existing logo. The motif is a separately designed and approved asset family, not a fragment of the logo.

The only form cues authorized by this revision are directly observable:

- four rounded circular/capsule-like units;
- a gentle rising rhythm from left to right;
- soft, continuous, approachable geometry.

This revision does not canonize historical interpretations such as tracked people, footfall, growth, revenue, confidence, learning or network effects. Those meanings require compatible evidence and labels; a motif cannot supply them.

## 3.2 Primary motif family — `ijji.four-beat` `[IJJI-MOTIF-4B-01]`

`ijji.four-beat` is the single initial motif family. The neutral name describes a four-unit rhythm; it does not claim growth or progress.

Allowed jobs:

- secondary orientation inside an artifact that already resolves an approved ijji identity context;
- orientation at the beginning of an ijji-owned section after official identity has been established;
- quiet transition or closure;
- a four-step process only when four real, labelled steps exist.

The motif has `identityRole: none`. It never satisfies a required logo, compact mark, favicon, signature or artifact-level identity context. If artwork must identify ijji by itself, register and approve it as an exact identity variant—not as a motif.

Conditional jobs:

- progress MAY use four units only when the underlying object has exactly four authoritative stages and every stage is text-labelled;
- collaboration MAY use grouped units only when roles and sharing state are real and permission-safe.

Prohibited jobs:

- showing traffic, footfall, people count, persona density or customer presence;
- implying rising sales, profit, confidence, completion or better future advice;
- encoding evidence strength, SKU tier, urgency, semantic state, score or magnitude;
- decorating alerts, legal, cashflow, food-safety or high-stress surfaces;
- sitting inside a chart, map, legend, evidence mark or source-status badge;
- acting as a pseudo-logo.

## 3.3 Motif construction and asset gate

A motif designer MAY use the observable grammar above but MUST NOT crop, trace, auto-vectorize or reconstruct the official logo. The motif must be original artwork with its own ID and hash.

Until an approved production vector and manifest exist:

- `motif.status: candidate_asset_missing`;
- live motif usage is prohibited;
- use the approved logo, product gradient, real evidence objects or whitespace instead;
- no developer or AI may draw substitute circles from memory.

## 3.4 Motif asset record

```yaml
motifAssetRecordVersion: ijji-motif-asset/0.1
motifId: ijji.four-beat
assetId: required
path: required
mime: image/svg+xml
intrinsicViewBox: required
sha256: required
designSourceRef: required
observableFormSourceRef: ijji.logo.legacy.full-square.reference.v1
identityRole: none
roleRegistryRef: required
allowedJobRefs: []
originalityEvidenceRef: required
nonTraceComparisonRef: required
pseudoLogoSubstitutionTestRef: required
approval:
  owner: required
  approvedAt: required
  expiresAt: required
  allowedContexts: []
  prohibitedContexts: []
colorTreatment:
  type: lds_role_ref_only
  allowedRoleRefs: []
  surfacePairingRefs: []
  contrastEvidenceRefs: []
motionTreatment:
  motionEnabled: true | false
  recipeRef: required_when_motionEnabled_is_true
  reducedMotion: final_state_immediate
accessibility:
  meaning: decorative | redundant
  ariaTreatment: required
liveUsageAllowed: true | false
```

`approval.expiresAt` is an ISO date-time or explicit `null` for a documented non-expiring approval. `liveUsageAllowed` MUST be `false` until every required field, approval, deletion test and applicable release gate resolves.

## 3.5 Motif color

An approved motif MAY use one of these treatments:

- `energy.mint` as a flat product-expression treatment;
- the exact theme-resolved `product.ijji.gradient.light` or `product.ijji.gradient.start.dark` → `.end.dark` recipe as product atmosphere only;
- an exact recorded `text.*` or `surfaceForeground.*` role when the motif is a quiet outline.

It MUST NOT use semantic, source-status, categorical, sequential, diverging or map colors. It MUST NOT mix a new gradient.

Every treatment MUST record its owned adjacent surface and rendered contrast evidence. A motif that carries recognition, orientation or structure passes at least `3:1` against every owned adjacent surface. A lower-contrast decorative treatment is allowed only when `aria-hidden`, redundant, and unnecessary for recognition, order, state or action.

## 3.6 Motif motion

The official logo remains static. A separately approved motif MAY use only an existing LDS Riddim recipe when motion clarifies reading order, transition or cause-and-effect.

- land once; never loop, pulse, shimmer, bounce or replay on scroll;
- no independent local duration, curve, distance or stagger;
- do not withhold content behind motion;
- reduced motion and no JavaScript show the final state immediately;
- if removing motion does not reduce comprehension, remove it.

## 3.7 Motif cadence and deletion test

| Surface | Maximum treatment |
|---|---|
| App/LINE operational view | one tiny motif, only when it aids orientation |
| Mission or evidence card | normally none |
| Opening identity scene | approved logo/identity context first; at most one secondary motif treatment |
| Transition/closure | one quiet instance |
| Alert, Rescue, privacy, legal or escalation | none |
| Chart/map/data table | none inside the evidence encoding |

Every motif use MUST record its job and a flat replacement. If recognition, comprehension or action is unchanged or improves without it, remove the motif.

---

# 4. VES — Visual Experience Specification

## 4.1 Purpose and boundary `[IJJI-VES-01]`

VES is the thin composition layer that projects approved ijji objects into a coherent visual experience:

```text
OwnerMomentWorksheet
→ selected LDS profile
→ owning ijji pattern/object
→ VES composition and view mapping
→ governed fixture or runtime projection
→ QA and release receipt
```

VES MAY own:

- composition/view names;
- scene order, hierarchy and responsive density;
- frontstage copy form within the approved voice/truth boundary;
- placement of approved logo, motif, media and product-atmosphere assets;
- visual-state projection and accessibility presentation.

VES MUST NOT own or redefine:

- AHA, ICP, SKU, Mission, workflow, capability, availability or outcome truth;
- evidence/status enums, claim ceiling or analytical records;
- canonical Locale JSON, geometry or release lineage;
- raw tokens, local primitives, logo bytes or motif geometry;
- implementation evidence, authorization or release receipts.

## 4.2 One-to-one projection `[IJJI-VES-MAP-01]`

Every visible VES view MUST map one-to-one to an owning ijji pattern/object and its canonical record. Every truth- or state-bearing visual slot maps to an exact canonical field; purely structural slots map to an LDS component/rule, and identity slots map to approved asset records. VES changes presentation density, never the object’s meaning.

| VES layer | Owning source | VES may decide | VES may not decide |
|---|---|---|---|
| Identity | ijji identity manifest + LDS | placement, cadence and approved surface | asset bytes, logo meaning, evidence/state |
| Owner answer | `DiagnosisAha` or other owning pattern | hierarchy and copy presentation | AHA status or claim ceiling |
| Evidence disclosure | canonical analysis/evidence record | L1/L2/L3 density and layout | evidence enum, missingness or limitation |
| Route/action | `RouteChoice` / `MissionCard` | composition and responsive order | eligibility, price, safety or availability |
| Receipt/closure | `MissionReceipt`, `ReportBack`; the originating object for clean completion; `CrossProductHandoff` for a handoff | visibility and recovery presentation | authoritative state, effect truth, clean-completion reason or product ownership |

Logo, motif, gradient, motion and polish MUST remain outside plots, legends, state badges and quantitative encoding.

## 4.3 VES principles `[IJJI-VES-PRINCIPLES-01]`

1. **Owning object first** — no view exists without a canonical pattern/object reference.
2. **One visual job** — each view has one dominant reading/action job.
3. **Truth-preserving density** — progressive disclosure may reduce first-view density but never remove the canonical truth record.
4. **Identity is framing** — identity helps recognition and orientation, never claim strength.
5. **Question before visual form** — the decision question selects the composition, not the number of available fields.
6. **Owner language before taxonomy** — presentation uses current ijji voice without rewriting the underlying object.
7. **State comes from the object** — animation, color or time never manufactures state.
8. **Material truth parity across channels** — Web, LINE, export and AI output keep the same canonical object/version, material truth, effect and receipt semantics; presentation density and layout may differ by approved channel profile.
9. **Fallback is a valid view** — no-color, no-motion, no-JavaScript and text/table routes preserve the task.
10. **Release truth stays external** — a beautiful VES fixture is not implementation or availability proof.

## 4.4 Composition classes `[IJJI-VES-COMPOSE-01]`

VES reuses the draft.2 visual router and LDS components. It adds no chart library.

| Composition class | Owning ijji object | Typical first-view treatment | Required boundary |
|---|---|---|---|
| `ves.triage` | `SymptomIntake` | one symptom, answer scope and one next question/clean completion | cannot appear as diagnosis |
| `ves.aha` | `DiagnosisAha` | bounded answer, support/counter-signal cue and evidence affordance | AHA status and claim ceiling unchanged |
| `ves.evidence` | `EvidenceSummary` / `EvidenceDrawer` | compact summary then L2/L3 detail | exact evidence record remains reachable |
| `ves.route` | `RouteChoice` | up to three eligible choices with status/entitlement | no route invented by composition |
| `ves.mission` | `MissionCard` | progressive Mission anatomy with safety fields at decision time | Action Card/SKU and safety contract pass |
| `ves.receipt` | `MissionReceipt` / `ReportBack` | authoritative state, date, scope, retry/correction | sent ≠ received ≠ persisted ≠ outcome |
| `ves.closure` | originating canonical object for clean completion; `CrossProductHandoff` for handoff | bounded explanation, safe alternative and recovery | map the exact clean-completion reason or handoff fields; never mint a standalone closure record |

When a view contains a chart, map, comparison, time matrix or analytical mark, its semantic form still comes from draft.2 `[IJJI-VISUAL-01]` and LDS `[DATA-01]`; VES only places and prioritizes it.

## 4.5 Composition manifest `[IJJI-VES-MANIFEST-01]`

Human and AI authors MUST use the same thin manifest:

```yaml
vesVersion: ijji-ves/0.1
vesId: required
buildCardRef: required
liveUsageRequested: true | false
approvalRecordRef: required_for_live_usage
profileRef: required
compositionManifestId: required
views: []
# items are VesViewMapping/0.1 records
identityUsageRefs: []
motifUsageRefs: []
mediaUsageRefs: []
channelParityKey: required
channelParityContractRef: required
ldsColorSetId: color-srgb-05
renderedArtifactExists: true | false
artifactBuildRef: required_when_renderedArtifactExists_is_true
ldsDeliveryIdentityRef: required_when_renderedArtifactExists_is_true
renderedViewInventoryRef: required_when_renderedArtifactExists_is_true
channelParityValidationRef: required_when_renderedArtifactExists_is_true
officialIdentityRequired: true | false
officialIdentityRequirementResolutionRef: required
officialIdentityContextRef: required_when_officialIdentityRequired_is_true
```

The manifest stores references and mappings, not copied product/evidence/Locale objects.

When `vesId` is present, `views` MUST contain at least one `VesViewMapping/0.1`. `officialIdentityRequired` and its resolution reference MUST come from the LDS delivery/adoption record, never author preference; it is `true` for production and `designsystem.adoption`. `identityUsageRefs`, `motifUsageRefs` and `mediaUsageRefs` may be empty, but an empty `identityUsageRefs` is valid for a delivered view only when `officialIdentityContextRef` proves the artifact’s approved identity elsewhere. Only an `internal_demo` with internal/private visibility may omit official identity entirely and use a labelled placeholder. The sole authoritative release/acceptance receipt remains in the referenced draft.2 Build Card; VES MUST NOT create a parallel receipt. Live usage requires a pass result for every applicable gate.

`channelParityContractRef` resolves parity as the same canonical object/version, material truth, effect and receipt semantics across channels—not identical layout. For a rendered artifact, the rendered-view inventory MUST equal the manifest view set exactly: no unregistered extra view and no declared-but-missing view.

## 4.6 View mapping `[IJJI-VES-VIEW-01]`

```yaml
schemaVersion: VesViewMapping/0.1
viewId: required
compositionId: required
owningPatternRef: required
canonicalRecordRef: required
canonicalRecordVersion: required
approvedMachineSchemaExists: true | false
interactive: true | false
authorizationApplies: true | false
visibilityApplies: true | false
claimOrRecommendation: true | false
canonicalSchemaRef: required_when_approvedMachineSchemaExists_is_true
mappingValidationRecordRef: required_when_approvedMachineSchemaExists_is_false
conditionResolutionRefs:
  interactive: required
  authorizationApplies: required
  visibilityApplies: required
  claimOrRecommendation: required
fieldMappings: []
# truth/state-bearing items: {visualSlot, canonicalFieldPath, presentationRuleRef}
structuralSlotRefs: []
# items: {visualSlot, ldsComponentOrRuleRef}
allowedVisualStateRefs: []
capabilityRef: required_when_interactive_is_true
authorizationRef: required_when_authorizationApplies_is_true
visibilityRef: required_when_visibilityApplies_is_true
evidenceRouteRef: required_when_claimOrRecommendation_is_true
observableEffectRef: required_when_interactive_is_true
identityPlacementRefs: []
accessibilityContractRef: required
fallbackCompositionRef: required
acceptanceTestIds: []
```

Generic local fields such as `status`, `confidence`, `stage` or `evidenceStatus` are prohibited because they collapse authorities. `fieldMappings` MUST point to exact canonical paths for every truth/state-bearing slot. Structural slots use `structuralSlotRefs`; identity/media placements use their exact usage records. Each condition-resolution reference MUST point to the owning canonical predicate/path rather than a VES-authored boolean. When no approved machine schema exists, `mappingValidationRecordRef` MUST resolve a reviewed mapping record and machine validation remains unresolved; do not create a parallel truth schema.

`fieldMappings` MUST contain at least one item. `acceptanceTestIds` MUST contain every applicable VES/owning-pattern gate for live usage; an empty array is valid only for a labelled non-live authoring specimen whose unresolved QA is explicit.

## 4.7 Identity usage in VES `[IJJI-VES-IDENTITY-01]`

```yaml
schemaVersion: IdentityUsage/0.1
contextId: required
assetManifestRef: required
assetId: required
variant: required
sha256: required
artifactRole: required
approvalRecordRef: required
surfacePairingRef: required
themeBackdropRefs: []
recognitionEvidenceRef: required
insideEvidenceEncoding: false
```

Empty identity usage is valid. Missing approval blocks placement, not the underlying product flow.

## 4.8 Motif usage in VES `[IJJI-VES-MOTIF-01]`

```yaml
schemaVersion: MotifUsage/0.1
assetManifestRef: required
assetId: required
vectorSha256: required
approvalRecordRef: required
identityRole: none
roleRegistryRef: required
allowedJobRef: required
contextRef: required
surfacePairingRef: required
contrastEvidenceRef: required
originalityEvidenceRef: required
nonTraceComparisonRef: required
pseudoLogoSubstitutionTestRef: required
deletionTestResult: improves | neutral | worsens
deletionTestEvidenceRef: required
fallbackCompositionRef: required
```

`neutral` or `worsens` MUST render the fallback without the motif. A missing or unapproved motif record is represented by an empty `motifUsageRefs` array, never a placeholder drawing.

## 4.9 Efficient human route `[IJJI-VES-HUMAN-01]`

A human author follows eight steps:

1. complete or reference the Owner Moment Worksheet;
2. select exactly one LDS profile;
3. select the owning ijji pattern/object;
4. choose one VES composition class;
5. map every truth/state-bearing slot to an exact canonical field and every structural slot to an LDS component/rule;
6. add only approved identity/motif/media placements;
7. build one governed fixture and its fallback;
8. run object, evidence, accessibility and release gates.

If the owning object, field path or claim boundary is unresolved, composition stops. Styling cannot fill the gap.

## 4.10 Efficient AI route `[IJJI-VES-AI-01]`

An AI builder MUST:

1. resolve immutable LDS, Product Brief, overlay and registry versions;
2. validate every canonical record and exact field mapping;
3. fail closed on missing capability, authorization, asset approval, Locale identity or release evidence;
4. select only a registered composition class and owning pattern;
5. emit LDS component/token/rule references, never raw local values;
6. generate visual, copy, fallback and accessibility projections from the same mapping;
7. record applied rules, omitted unavailable assets/motifs, unresolved mappings and gate results;
8. bind live output to the exact artifact and source hashes.

AI MUST NOT infer logo variants, generate pseudo-logos, draw motifs from memory, invent canonical fields, or copy evidence/Locale JSON into VES.

## 4.11 Fixture projections

Existing draft.2 fixtures remain the truth source. VES adds only this projection:

```yaml
visualExperienceProjection:
  projectionVersion: ijji-ves-fixture-projection/0.1
  fixtureRef: required
  fixtureSourceVersionRef: required
  canonicalRecordRefs: []
  truthBaselineHash: required
  vesRef: required
  compositionIds: []
  viewMappingRefs: []
  identityUsageRefs: []
  motifUsageRefs: []
  renderedStateRefs: []
  fallbackCompositionRefs: []
  pairedTreatmentComparison: true | false
  truthParityEvidenceRef: required_when_pairedTreatmentComparison_is_true
```

When `visualExperienceProjection` exists, `compositionIds`, `viewMappingRefs` and `canonicalRecordRefs` each contain at least one exact reference. A paired motif-absent/motif-present comparison MUST resolve `truthParityEvidenceRef`; prose similarity is not evidence.

Minimum projection coverage:

1. Case A renders unmistakable pre-AHA triage with no motif-dependent meaning;
2. Case B renders the same diagnosis/evidence/action with motif absent and, after approval, motif present—truth must be identical;
3. Case C uses no decorative first object or rising/progress motif;
4. Rejected Case D fails when dots, stems, gradient or motion imply confidence, growth, completion or evidence;
5. identity micro-states cover approved pairing, unavailable variant, long Thai, zoom and blocked placement.

Every fixture remains synthetic or source-backed, visibly labelled, versioned and non-live unless implementation/deployment evidence exists.

---

# 5. Build Card and Registry Extensions

## 5.1 Build Card extension `[IJJI-D3-BUILD-01]`

Append this block to the draft.2 Build Card when identity, motif or VES is in scope:

```yaml
ijjiIdentityAndVes:
  identityDecisionRef: ijji-identity/0.1
  identityUsageRefs: []
  # items are exact IdentityUsage/0.1 refs
  colorSelectionRef: ijji-color-selection/0.1
  ldsColorSetId: color-srgb-05
  motifUsageRefs: []
  # items are exact MotifUsage/0.1 refs
  vesUsed: true | false
  vesManifestRef: required_when_vesUsed_is_true
  vesViewMappingRefs: []
  # items are exact VesViewMapping/0.1 refs
  renderedArtifactExists: true | false
  ldsDeliveryIdentityRef: required_when_renderedArtifactExists_is_true
  officialIdentityRequired: true | false
  officialIdentityRequirementResolutionRef: required
  officialIdentityContextRef: required_when_officialIdentityRequired_is_true
  identityEvidenceSeparationConfirmed: true
```

Empty arrays are valid only under the artifact-level identity rule above: an individual view may omit identity treatment, while production and `designsystem.adoption` artifacts cannot omit approved official identity. `officialIdentityRequired` MUST resolve from the LDS delivery/adoption record through `officialIdentityRequirementResolutionRef`. The base draft.2 Build Card remains the sole owner of the release receipt. A builder MUST omit unavailable motif treatments rather than fabricate them, and MUST block production/adoption delivery when official identity is unresolved.

## 5.2 Pattern candidates

| Pattern ID | Role | Current live state |
|---|---|---|
| `ijji.identity.full-square-lockup` | large product-identity panel | unavailable until export manifest and pairing approval |
| `ijji.identity.horizontal-lockup` | normal header | unavailable; asset missing |
| `ijji.motif.four-beat` | bounded product motif | unavailable; production vector/hash missing |
| `ijji.ves.composition` | projects owning patterns into governed views without redefining them | specified candidate; implementation proof required |

Pattern maturity is not capability lifecycle, SKU status, availability scope or production proof. The axes remain separate under draft.2 `[IJJI-STATUS-01]`.

---

# 6. QA and Release Gates

## 6.1 Identity gate `[IJJI-D3-QA-IDENTITY-01]`

Pass only when:

- exact asset path, MIME, dimensions, byte length and SHA-256 match the manifest;
- context-specific variant and surface pairing are approved;
- clear space and minimum delivered size come from the asset manifest, not inference;
- the logo is not cropped, traced, recolored, animated or repurposed;
- actual-size recognition and tagline legibility pass in every declared theme/backdrop;
- browser-tab, search-result, touch, maskable, LINE profile, LINE cover and social-preview contexts use separately approved records or are omitted;
- every production or `designsystem.adoption` artifact resolves at least one required official identity context; a text label or motif does not satisfy it.

## 6.2 Color gate `[IJJI-D3-QA-COLOR-01]`

Pass only when:

- every color resolves to LDS `color-srgb-05` through a governed role/recipe;
- exact build, kit and token-source identity are pinned;
- no local raw product palette exists;
- identity, interaction, semantic, evidence and data roles remain separate;
- component-owned surfaces pass their complete foreground/focus/state contract;
- grayscale and representative color-vision-deficiency checks preserve meaning;
- product gradients carry a real `[SURFACE-01]` job and completed deletion test.

## 6.3 Motif gate `[IJJI-D3-QA-MOTIF-01]`

Pass only when:

- original motif vector, design source, asset ID and SHA-256 resolve;
- role registry, allowed semantic job and approval scope explicitly name every use and context;
- originality evidence, no-trace comparison and pseudo-logo-substitution test pass;
- the motif is recognizably related but not a pseudo-logo or traced fragment;
- `identityRole` remains `none`; the motif never substitutes for official identity;
- it encodes no unsupported people, growth, confidence, progress or evidence meaning;
- cadence and deletion test pass;
- motion, if any, uses LDS Riddim only and reduced motion is complete;
- every owned surface pairing has rendered contrast evidence; recognition/orientation/structure passes `3:1`, while any lower-contrast decorative treatment is `aria-hidden` and redundant;
- decorative motifs are hidden from assistive technology and meaningful uses have redundant labels.

## 6.4 VES gate `[IJJI-D3-QA-VES-01]`

Pass only when:

- one complete `VesViewMapping` exists for every rendered VES view;
- the rendered-view inventory equals the manifest view set exactly;
- every truth/state-bearing slot maps to an exact canonical field and owning pattern; every structural slot maps to an LDS component/rule;
- approved schemas or reviewed mapping-validation records resolve, including every condition source;
- visual form matches the decision question and compatible evidence without creating new truth;
- `[DATA-01]` fields remain available without enum or field loss;
- missingness, limitation and material counter-signal/reversal warning are reachable;
- identity treatment is outside evidence encoding;
- text/table, no-color, no-motion and no-JavaScript fallbacks preserve the answer;
- action eligibility, effect truth and receipt pass draft.2 gates;
- Web, LINE, export and AI projections retain canonical object IDs/versions, material truth, effect/receipt semantics and a validated channel-parity contract even when layouts differ.

## 6.5 P0 stop-release conditions

Stop release when any of these is true:

- a logo or motif asset is generated, cropped, traced, recolored or shipped without exact approval/hash;
- a square/full lockup is used as favicon, compact mark or header substitute;
- a production or `designsystem.adoption` artifact lacks a required approved official identity context;
- a motif, text label, energy color or product gradient is used to satisfy an official logo/identity requirement;
- legacy raw hex values are reintroduced as runtime tokens;
- mint, product gradient or motif encodes success, traffic, growth, confidence, evidence or state;
- a VES view copies or invents evidence, status, product or Locale truth, or projects incompatible benchmark universes, missing Locale identity or unapproved geometry;
- a generated prior is presented as observed fact;
- a visual recommendation omits a material limitation, counter-signal, stop rule or next safe action;
- a rendered output lacks exact LDS delivery identity, Color Set/build/asset/source parity, or live output lacks the base Build Card release receipt.

---

# 7. Human and AI Implementation Checklist

- [ ] Load draft.2 at the pinned hash, then this amendment.
- [ ] Select exactly one LDS profile.
- [ ] Resolve product/SKU/capability/availability truth before UI.
- [ ] Resolve the required artifact-level official identity context; only an internal/private `internal_demo` may use a labelled placeholder.
- [ ] Bind LDS `color-srgb-05`; do not copy a local palette.
- [ ] Use `energy.mint` only as controlled expression beside approved identity, never as the sole identifier or as state/evidence/data.
- [ ] Use shared `interaction.accent`, semantic and evidence roles for their real jobs.
- [ ] Use no motif until `ijji.four-beat` has an approved vector and hash.
- [ ] Build one VES manifest and exact view mapping for each rendered composition.
- [ ] Select the visual form from the decision question, not from available columns.
- [ ] Keep logo/motif/gradient outside the evidence encoding.
- [ ] Preserve source, grain, period, method, missingness, limitation and counter-signal.
- [ ] Provide a safe action/receipt or clean completion.
- [ ] Test TH/EN, light/dark/Auto, keyboard, focus, 200% zoom, Thai 130%, no color, reduced motion and no JavaScript.
- [ ] Pin exact asset, source, LDS delivery identity, Color Set, kit, artifact and base Build Card acceptance-receipt hashes.

---

# 8. Approval State and Open Work

## 8.1 Owner-approved in v0.5.0

- ijji retains its own existing logo identity.
- ijji may have a coherent product motif, separately designed and registered.
- ijji primary expression uses LDS `energy.mint`, preserving the legacy mint exactly.
- the exact extracted full-square reference PNG may use a direct LDS `brand.blue` section surface only in the public ijji VES playground identity panel; every other logo context remains gated.
- other identity atmosphere and supporting colors come from LDS roles.
- VES is defined as a thin Visual Experience Specification shared by human and AI builders.

## 8.2 Still open before product-runtime or broader identity approval

1. Exact owner-approved Product Brief or owner ADR for any product truth promoted beyond the currently approved record; draft v2.0 remains candidate input.
2. Production logo export pack and every context manifest beyond the approved playground identity panel.
3. Approved `ijji.four-beat` vector, hash, semantic-job/context scope, originality/no-trace evidence and deletion-test evidence.
4. Product-runtime VES renderer, field-mapping validator, channel-parity validator and AI decision-log implementation.
5. Live Web/LINE capability, consent, persistence, receipt and accessibility evidence.
6. Product-runtime release receipt binding exact capability, evidence, privacy and deployment records.

This release is normative for ijji product-experience authoring and the named public adoption playground. It is not evidence that the broader logo pack, motif, product-runtime VES renderer or live ijji capabilities are available.

---

# Appendix A — Source and Decision Ledger

| ID | Source | Role | SHA-256 / status |
|---|---|---|---|
| D3-S1 | `ijji_Design_System_v0.5-draft.2_2026-08-22.md` | immutable imported base | `dcd0537a021f97116f31cc4c0d2ee231ddb606b7bce9c972c686b43d94cc339c` |
| D3-S2 | upstream `montri-th/Landometer` · `Landometer Design System v0.9.0-r7.md` | owner-approved shared visual/token/interaction authority; delivered here through the pinned build kit | `52ef41f1b231f8b84955a40c21a018991a114a4f5eaabd8c5111816bf8d645b1` |
| D3-S3 | `sources/ijji Logo design.svg.txt` | owner-supplied legacy identity reference | wrapper `56138771a1798f8a19f89afb0462f7f555f2048d3c35ddaa56c866b5f712f7ac`; embedded PNG `cbeb7bc4db8db795fc669ef521fc05442a275ab63cda866513277cdc75b05a86` |
| D3-S4 | historical `ijji_design_system_v0_3_3_integrated_cocreation_learning_shop_circle.md` | legacy blue/mint and experience intent; not runtime token authority | `77c812a8c6239e17293ecadddc0d3697f47cb226ee489281f583a78be8c72d77` |
| D3-S5 | `sources/ijji_design_system_v0_4_integrated_logo_semiotics_progress_memory.md` | historical motif ideation; meanings re-audited, not inherited wholesale | `6412b9470011e73c6ec344fe3a7c3b5c75c2988cc34ef436dc5a38acb2fc6c29` |
| D3-S6 | `ijji_Product_Brief_v2.0-draft.2_2026-08-22.md` | candidate product-truth alignment input; not an approved baseline | `ba2aecc2da8a329798f313ad4a52be7bcf6d627bb57a9edf8a601c99157a8b5f` |
| D3-D1 | Owner approval, 2026-08-22 | retain logo, coherent motif, LDS-only color selection, efficient VES, and publish a corrected interactive playground | approved for v0.5.0 plus the exact playground identity context; all broader/runtime gates remain separate |

---

# Final Normative Definition

> **ijji retains its own recognizable logo as the product identity direction; production use requires exact approved context assets. A motif never substitutes for that identity and may use only one separately designed, asset-gated family. ijji preserves its legacy mint as controlled expression through the exact LDS mint role, uses only LDS colors and product-gradient recipes, and keeps identity, interaction, semantic, evidence and data meanings separate. VES is the thin Visual Experience Specification that projects each approved ijji object into a clear, responsive and accessible view through exact truth/state mappings and governed structural references—consistently for human and AI builders, without creating product or evidence truth.**

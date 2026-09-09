# ijji web r9 — release notes

Release ID: `ijji-web-20260909-r9`
Released: 9 September 2026
Publication status: `published`
Previous published release: `ijji-web-20260909-r8` at `92c7ff31a766f833bdcec4e213d223caee40aeb1`

## What changed

- Replaced the rejected browser-tab favicon in `index.html`, Thai, and English with the exact mark-only artwork used by the approved animated ijji identity family.
- Replaced the ijji comparison-table header in both locale pages with the same clean 192px mark-only rendition.
- Replaced the Thai hero's static logo panel with the same approved finite-once animated logo, full tagline, exact fallback, and localized motion controls already used by the English hero.
- Added new content-revisioned 32px and 192px URLs so browser favicon caches cannot reuse an earlier incorrect asset URL.
- Tombstoned the rejected r4 mark hashes and removed those binaries, the superseded r5 renditions, the discarded prepublication r9 aliases, and the r5 rendition generator from the r9 branch tip. Historical r4/r5 provenance JSON remains as inactive evidence.

The authoritative source is Landometer Motif Library 1.2.1 asset `ijji.logo-sting.mark`, variant `mark_only`, at pinned commit `57eeb7c953dc8b45fe6fe97f1251467d09b0b199`. The local source is `assets/ijji/logo-sting/layers/ijji-mark-still.png`, 849×840 RGBA, 110,298 bytes, SHA-256 `acac2c65b1a17c1956686c3fdbb2a0a6dc3c547c35be1ca128675d28b0ffc630`.

The deterministic generator places the complete source at `(0,4)` on an 849×849 transparent canvas and proportionally resizes it with premultiplied-alpha LANCZOS. It does not crop, redraw, recolour, sharpen, add a backing plate, distort, trace, or apply a generative transformation.

- 32×32 browser rendition: `assets/identity/ijji-favicon-animated-mark-32-r9-ba9ac2db8984.png`, 1,924 bytes, SHA-256 `ba9ac2db8984a0c0fcef4afa54776b7f2f42440c0e84696fcc73968ab684c7ab`.
- 192×192 browser and comparison-header rendition: `assets/identity/ijji-favicon-animated-mark-192-r9-9a647451f72f.png`, 13,455 bytes, SHA-256 `9a647451f72f0c112a50481f614c884866c2d5edb23c34c1b916cf5166800a96`.

All visible product and comparison copy, claims, prices, section order, navigation, destinations, and LINE symbols remain unchanged from published r8. The identity-related HTML changes are the six favicon declarations, two comparison-header image sources, the Thai hero replacement from static to animated identity, and its localized motion-control labels.

## Artifact-local authorization boundary

The motif asset's original identity role is an animated-mark final fallback, its original minimum delivered size is 160px, and its compatible host surfaces are brand-blue and dark. The owner's 9 September 2026 directive directly authorizes two r9-only extensions:

- the 32px browser rendition may be delivered below the original 160px minimum; and
- browser chrome and the comparison table may present the mark on light or dark surfaces.

The 192px rendition meets the original size minimum. These are artifact-local authorizations for the ijji r9 website and do not amend the Landometer Design System, ijji Design System, or Motif Library.

## Rejected assets, Drive cleanup, and history

The owner directed that the rejected flat-mint r4 mark must never be used again. Its 32px SHA-256 `ee2b564d52d7740f428965339126f3e4f2c8eabebdbb5a87f9e1eac98fbfd737` and 192px SHA-256 `b3ce5667942b65236f39981da50d768674983a24a341e5559e0d33d63874d453` are forbidden for active use and absent from the r9 branch tip. The same applies to the discarded r9 aliases carrying those bytes.

Two loose legacy files found on Google Drive were deleted successfully on 9 September 2026 in the Asia/Bangkok timezone:

- `icon__ijjiLogo.png`, file ID `1dnidyeNor2wSzeMoYmPHyLHnVcvK8Ys5`;
- `ijjiLogo.png`, file ID `1tzQMyTeLB0mbrN50fg4Tyv7YHDZeVviw`.

A follow-up image search for `ijji` returned neither file ID. The provider did not return a deletion timestamp.

Previously published Git tags and their bytes remain immutable. The ban and removals apply to the r9 successor branch tip and future active use; no historical release was silently rewritten.

## Identity and cache boundary

- Browser-tab role: new r9 mark-only 32px and 192px URLs.
- Comparison-table header role: the same new r9 192px rendition in Thai and English.
- Explicit declarations: two `image/png` icons, 32×32 and 192×192, on each of the three entry points.
- Host-level `/favicon.ico`, Apple touch icon, and web manifest remain outside this correction and are not claimed.
- Native browser favicon stores may retain an old image until a fresh navigation or cache refresh; the changed asset URLs remove the page-level cache-key collision.

## Preserved r8 boundaries

The six LINE destinations still use the owner-directed Remix Icon v4.9.1 `line-line` silhouette at 20px in `currentColor`. It remains a third-party social glyph, not an official LINE-supplied asset, and official LINE guideline compliance is not claimed.

The English hero still uses the immutable `ijji.logo-sting.r3` family from Landometer Motif Library 1.2.1 with the full tagline, 9-second finite-once playback, Pause/Resume/Replay, and exact fallback. The Thai hero now uses the same implementation with localized labels. The r9 mark-only browser/header correction does not remove the hero tagline.

The owner-supplied `ijji motif asset with guide.zip`, SHA-256 `516e0e510a8c7a775c8e3c05647273d28cd56f6aad1f23a712ab82a2f3cd8f38`, corroborates the existing pinned four-beat motif bytes. It contains no logo or mark-only identity file, so it is recorded as motif provenance and is not represented as the favicon or hero-logo source.

## Claim revalidation

The comparison table still contains the r8 owner-stated entries:

- General AI: THB 700 per month
- Data dashboards: THB 20,000 per month
- Consultants: THB 200,000 per month
- ijji: THB 29 per question and free to try now

They are unchanged from r8 and are not independently verified provider prices. The owner explicitly confirmed all four entries for r8 earlier on 9 September 2026 and, after the successor gate was stated, explicitly instructed publication of r9 with the comparison content unchanged. The release records this as same-day r9 revalidation while noting that the owner did not recite the four values again in the latest message.

## Verification status

- Parent Landometer Design System 0.9.1 verifier: passed 5,394 checks plus 103 checksums.
- ijji Design System 0.5.0 / Add-on 0.5.3 resolver: passed 1,421 checks.
- Static r9 verification passes on the published byte set. Live favicon/comparison-header browser QA passes 28/28, and live Thai/English animated-hero browser QA passes 62/62 with 20 evidence screenshots and a 0.203% runtime/fallback pixel difference in each locale against a 3% budget.
- r8 LINE browser QA: 22/22 carried forward because the LINE implementation is unchanged.
- The r8 English animated-hero baseline remains the comparison reference; r9 adds a Thai animated-hero test matrix before publication.
- Native browser chrome favicon presentation, physical iPhone Safari, and embedded WKWebView remain open manual gates.

## Publication evidence

The annotated git tag `ijji-web-20260909-r9` records the exact source SHA, GitHub Pages workflow/build/deployment identifiers, live-byte attestation time, live favicon and animated-hero browser QA, and remaining manual gates.

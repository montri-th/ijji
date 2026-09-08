# ijji web r8 — release notes

Release ID: `ijji-web-20260909-r8`
Date published: 9 September 2026
Publication status: `published` with a recorded physical-device manual gate
Previous published release: `ijji-web-20260908-r7` at `43f8224e8db1b7d1287617e1b6b1bfff96c66396`

## What changed

- Replaced the LINE Brand Icon presentation at all three direct LINE destinations in each locale—six links total—with the recognizable minimal Remix Icon `line-line` silhouette.
- Rendered each symbol at 20px in `currentColor` through an inline SVG instance referencing one document-local sprite, matching the size and colour behaviour of the adjacent Facebook and TikTok symbols.
- Preserved every localized label, LINE URL, external-link cue, link order, focus treatment and minimum 44px target.
- Kept the official LINE PNG as an inactive provenance asset with no active r8 HTML reference.
- Retained the complete owner-approved animated ijji identity with tagline in the English hero exactly as published in r7.

All copy, claims, prices, section order, navigation, destinations, non-LINE imagery and existing non-hero motion remain unchanged from r7. The Thai hero retains its static identity.

## Provider and lineage boundary

The active LINE symbol is Remix Icon v4.9.1 `line-line`, pinned to tag commit `39eab8b69cadaa47e1bed6a41777b1cd22227c74`, with local provenance and the Remix Icon License v1.0.

This is a third-party social glyph, not an official LINE-supplied asset, and does not imply LINE endorsement. The owner explicitly directed this minimal treatment after being informed that LINE's official guidance does not sanction an outline or monochrome variant; official LINE guideline compliance is not claimed.

Only the verified SVG, provenance JSON and license file were selectively reused from the unpublished `ijji-web-20260904-r6` candidate. That candidate was never incorporated as a release, and none of its motif adapter, rendition or other changes are part of r8.

## Animated identity

The English hero uses the immutable `ijji.logo-sting.r3` family from Landometer Motif Library 1.2.1:

- Fallback asset: `ijji.logo-sting.tagline`
- Runtime asset: `ijji.logo-sting.runtime.r3`
- Surface: `brand-blue`
- Bounce: `playful`
- Duration: 9 seconds, finite once, no loop
- Controls: Pause, Resume and Replay

The runtime, fallback, controller and nine image layers are byte-identical to published r7. The owner reconfirmed the full animated logo with tagline for r8. This is an artifact-local approval and does not amend Landometer Design System 0.9.1 or the ijji Design System 0.5.0 / Add-on 0.5.3 no-motion canon.

## Claim revalidation

The owner explicitly revalidated all four comparison entries for r8 on 9 September 2026:

- General AI: THB 700 per month
- Data dashboards: THB 20,000 per month
- Consultants: THB 200,000 per month
- ijji: THB 29 per question and free to try now

These are owner-stated comparison claims rather than independently verified provider prices. The time-sensitive free-trial statement and all other entries must be revalidated for a successor release.

## Verification status

- Parent Landometer Design System 0.9.1 verifier: passed 5,394 checks plus 103 checksums.
- ijji Design System 0.5.0 / Add-on 0.5.3 resolver: passed 1,421 checks.
- Static r8 verifier: passed against the published byte set.
- Focused LINE browser QA: passed 22/22 checks across Thai and English, all six LINE destinations, 320/390/1,440px, light/dark, Thai 130%, English 200%, no JavaScript, forced colours, print and keyboard focus.
- Full r7 animated-hero regression rerun against r8: passed 54/54 checks.
- Inherited advisory: at a 390px viewport with English text scaled to 200%, r7 and r8 have the same 36px page-wide overflow from `#ij-wander-toggle` in `#problems`; the footer and social group remain contained.
- Physical iPhone Safari and embedded WKWebView remain open manual gates.

## Publication evidence

The annotated tag `ijji-web-20260909-r8` records the exact source commit, GitHub Pages workflow/build/deployment identifiers, live-byte attestation, live LINE and animated-hero QA, owner confirmations and the remaining physical-device gate.

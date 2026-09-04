# ijji web r4 — release notes

Release ID: `ijji-web-20260904-r4`
Date: 4 September 2026

## What changed

- Preserved the r3 unified navbar, calm-on-scroll behavior, 44px semantic hit areas, one-shot sweeping CTA highlight, disclosure menu, scrollspy, and no-JavaScript fallback.
- Raised the governed live-text Landometer identity to the requested `Landometer / ijji` lockup treatment in both prominent and calm states.
- Added a complete English sibling page, rewritten for natural product English while preserving every section’s order, IDs, component structure, media, interactions, claims, and CTA destinations.
- Enabled reciprocal TH/EN language links and added canonical plus `th`, `en`, and `x-default` hreflang metadata.
- Added Auto, Light, and Dark appearance controls with persisted preference and synchronized document/component theme ownership.
- Replaced numeric bookmark markers with five self-hosted semantic Material Symbols at FILL 0.
- Added the official LINE Brand Icon to all three—and only the three—links whose literal destination is the ijji LINE page.
- Added clear 32px and 192px browser favicons derived from the official ijji product logo under the owner’s artifact-specific authorization.

## Adaptation boundary

The attached r7 navbar is treated as a candidate design reference. This successor applies its requested visual behavior through the current Landometer Design System v0.9.1 and ijji Add-on v0.5.3 boundaries: CTA motion is one-shot rather than perpetual, all direct controls stay at least 44px, selected bookmark state does not depend on colour alone, and the master brand is rendered as governed live text rather than an unapproved reconstructed lockup.

The Thai page’s product claims, business advice, imagery context, evidence ceiling, privacy boundary, and primary ijji destination are unchanged. The English page carries the same meaning without a sentence-by-sentence literal translation or any new factual claim.

The owner’s explicit 4 September 2026 request authorizes the official ijji logo for this website’s browser-tab favicon only. The authorization is artifact-owned and does not promote the favicon treatment into the shared ijji Design System.

## Verification completed before publish

- Thai and English structure signatures match for every section.
- Automated browser QA passed 54 checks across Thai and English desktop/mobile views with zero failures, console errors, failed requests, HTTP errors, or horizontal overflow. Three supplemental in-app-browser gates also passed: Thai at a 1108 × 769 viewport (130%-zoom equivalent), English at 720 × 500 (200%-zoom equivalent), and the 32px favicon before and after a warm reload.
- Menu, nested Escape behavior, 44px targets, calm state, Auto/Light/Dark persistence, scrollspy, semantic rail icons, reciprocal locale controls, LINE asset boundaries, favicon dimensions, local fonts, reduced motion, and no-JavaScript navigation were checked in Chrome.
- Static artifact graph, checksum, and design-system gates are completed before tagging; deployed bytes are attested against the tagged source after GitHub Pages finishes publishing.
- Native physical-device Safari/WKWebView remains an explicitly open manual gate.

# ijji web r3 — release notes

Release ID: `ijji-web-20260904-r3`
Date: 4 September 2026

## What changed

- Added the unified Landometer/ijji navbar requested from the r7 design handoff.
- Added calm-on-scroll behavior with a 29px desktop / 27px compact visible surface while preserving 44px semantic hit areas.
- Added a 540ms one-shot sweeping text highlight to the first visible navbar CTA.
- Added a desktop bookmark rail and the same page-section destinations inside the disclosure menu at narrower widths.
- Added ecosystem navigation, skip-link behavior, focus transfer, Escape/backdrop/focus-leave close behavior, and scrollspy current state.
- Hid the English switch because no English route exists.
- Self-hosted React, React DOM, and Material Symbols so the page has no required runtime asset request to a third-party origin.
- Added a no-JavaScript expanded navigation fallback and `.nojekyll` for `_ds/**` delivery on GitHub Pages.

## Adaptation boundary

The attached r7 navbar is treated as a candidate design reference. This successor applies its requested visual behavior through the current Landometer Design System v0.9.1 and ijji Add-on v0.5.3 boundaries: CTA motion is one-shot rather than perpetual, all direct controls stay at least 44px, selected bookmark state does not depend on color alone, and the master brand is rendered as governed live text rather than an unapproved reconstructed lockup.

The page’s product claims, business advice, imagery context, evidence ceiling, privacy boundary, and primary ijji destination are unchanged.

No favicon is shipped because the governed ijji identity asset is approved only for its large example panel; a favicon remains pending a separately approved asset.

## Verification completed before publish

- ijji and parent LDS release verifiers passed.
- Static artifact graph: 2 routes, 26 images, no missing initial-HTML asset or route edge.
- Responsive render checks: 360, 390, 600, 713, 899, 900, 1024, 1279, 1280, and 1440px; no horizontal overflow or navbar control collision.
- Menu, keyboard Escape, focus return/leave, direct 44px calm hit areas, scrollspy, bookmark focus landing, one-shot CTA cue, local font loading, and zero browser console errors were checked in the in-app browser.
- Native physical-device Safari/WKWebView remains an explicitly open manual gate.

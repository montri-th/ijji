# ijji web r5 — release notes

Release ID: `ijji-web-20260904-r5`
Date published: 4 September 2026
Publication status: `published`

## What changed

- Preserved the r4 unified navbar behavior, calm-on-scroll state, 44px semantic hit areas, one-shot sweeping CTA highlight, disclosure menu, scrollspy, reciprocal locale controls, Auto/Light/Dark appearance controls, and no-JavaScript fallback.
- Added the exact full-colour Landometer symbol used by Rebuild 02 beside the governed live-text wordmark. The same immutable source is used in both themes and the whole identity remains a single semantic link.
- Moved the comparison section directly before the 12 shop challenges without changing the section IDs or the remaining page order.
- Rebuilt that section as an icon-led comparison: each header and data cell has a semantic graphic, the ijji column uses the owner-selected ijji mark, and the desktop five-column table reflows into labelled comparison cards at narrower widths.
- Added an indicative price row for general AI, data dashboards, consultants, and ijji, plus a visible qualifier describing the source and time sensitivity of the figures.
- Recalibrated the English sibling against the Product Brief rather than translating Thai sentence by sentence; the shorter hero and selected section copy keep the same meaning, interactions, imagery, and destinations while improving responsive fit.
- Applied an owner-requested quiet treatment to the official LINE Brand Icon on all three—and only the three—direct LINE destinations using CSS desaturation and reduced opacity; the official image bytes remain unchanged.
- Added a deterministic mark-only 32px and 192px favicon, replacing the prior incorrect product-logo rendition.
- Replaced only the low-contrast `with-you` motif: the transparent-ink treatment measured about 1.11:1 on the dark canvas, while the selected blue-and-mint asset provides 4.78:1 internal mark contrast. Timing and reduced-motion behavior are unchanged.
- Added a pause/resume control to rotating challenge highlights and kept one quote per card visible to assistive technology.

## Adaptation boundary

The attached r7 navbar remains a candidate design reference. This successor applies its requested visual behavior through the current Landometer Design System v0.9.1 and ijji Add-on v0.5.3 boundaries: CTA motion is one-shot rather than perpetual, all direct controls stay at least 44px, selected bookmark state does not depend on colour alone, and the master-brand wordmark remains governed live text.

The Rebuild 02 Landometer symbol is an owner-selected, artifact-owned r5 use—not a new shared Design System approval. It is byte-identical to the reference asset (SHA-256 `b818eeb6a6f4abeb7a8fac2b858de0e7a03a662dff371842a29ebfe4c21d12f6`) and is neither recoloured nor filtered. The immutable source’s small dark-blue pin measures about 2.01:1 against the dark navbar; that known identity risk is retained because the owner explicitly requested the exact Rebuild 02 presentation.

The Thai page’s product positioning, business advice, imagery context, evidence ceiling, privacy boundary, and primary ijji destination remain unchanged outside the requested comparison section. The English page carries the same product meaning in sibling copy without a sentence-by-sentence literal translation.

The comparison prices are owner-stated, indicative starting figures for this r5 table; they are not represented as provider-verified market data. The free-trial statement is time-sensitive, and all four entries must be revalidated for any successor release.

The owner-selected favicon source is `ijji-logo-full-square.reference.png`, SHA-256 `cbeb7bc4db8db795fc669ef521fc05442a275ab63cda866513277cdc75b05a86`. The two-line wordmark is cropped away as explicitly authorized, then the intact mark is resized with premultiplied-alpha LANCZOS. There is no redraw, recolour, sharpening, backing plate, or generative alteration. The resulting 32px and 192px files match the hashes recorded in `release.json`. This authorization is artifact-owned and limited to the r5 favicon and comparison-table ijji header; it does not promote the treatment into the shared Design System.

## Verification status

- `scripts/verify-r5.py`: passed. It verifies the requested section order, five table headers, seven rows, icons in every header/data cell, ijji mark header, exactly three direct LINE links per locale, quiet LINE CSS, reciprocal comparison bookmarks, favicon paths and hashes, the exact navbar-symbol and motif bytes, local resources, and key Thai/English price copy.
- Wide-screen visual calibration: a same-width reference/prototype comparison has been generated at `qa/reference-vs-r5-th-compare.png`.
- Responsive navbar/motif regression: both locale siblings passed at 320×800, 360×800, 390×844, 600×900, 768×1024, 900×800, 1080×800, 1081×800, 1280×720, and 1440×900 in dark mode with zero horizontal overflow. The prominent symbol renders at 45px on compact screens and 54px on desktop; the calm visual scales to 23px and 27px respectively while its semantic target remains at least 44px.
- Interaction and state checks passed for language/theme controls, dark/light states, prominent/calm nav, active bookmark state, challenge pause/resume, and quiet LINE icons. The final dark-state screenshot is `qa/r5-final-motif-dark-calm-1048x926.png`.
- GitHub Pages publication and exact live-byte checks are recorded in the annotated `ijji-web-20260904-r5` tag.
- Native physical-device Safari and embedded WKWebView remain open manual gates.

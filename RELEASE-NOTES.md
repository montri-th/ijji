# ijji web r5 candidate — release notes

Release ID: `ijji-web-20260904-r5`
Date prepared: 4 September 2026
Publication status: `prepared_not_published`

The GitHub Pages site remains on `ijji-web-20260904-r4`. This candidate has not been published or attested against live bytes.

## What changed

- Preserved the r4 unified navbar, `Landometer / ijji` identity, calm-on-scroll behavior, 44px semantic hit areas, one-shot sweeping CTA highlight, disclosure menu, scrollspy, reciprocal locale controls, Auto/Light/Dark appearance controls, and no-JavaScript fallback.
- Moved the comparison section directly before the 12 shop challenges without changing the section IDs or the remaining page order.
- Rebuilt that section as an icon-led comparison: each header and data cell has a semantic graphic, the ijji column uses the owner-selected ijji mark, and the desktop five-column table reflows into labelled comparison cards at narrower widths.
- Added an indicative price row for general AI, data dashboards, consultants, and ijji, plus a visible qualifier describing the source and time sensitivity of the figures.
- Recalibrated the English sibling against the Product Brief rather than translating Thai sentence by sentence; the shorter hero and selected section copy keep the same meaning, interactions, imagery, and destinations while improving responsive fit.
- Applied an owner-requested quiet treatment to the official LINE Brand Icon on all three—and only the three—direct LINE destinations using CSS desaturation and reduced opacity; the official image bytes remain unchanged.
- Added a deterministic mark-only 32px and 192px favicon, replacing the prior incorrect product-logo rendition.
- Added a pause/resume control to rotating challenge highlights and kept one quote per card visible to assistive technology.

## Adaptation boundary

The attached r7 navbar remains a candidate design reference. This successor applies its requested visual behavior through the current Landometer Design System v0.9.1 and ijji Add-on v0.5.3 boundaries: CTA motion is one-shot rather than perpetual, all direct controls stay at least 44px, selected bookmark state does not depend on colour alone, and the master brand remains governed live text.

The Thai page’s product positioning, business advice, imagery context, evidence ceiling, privacy boundary, and primary ijji destination remain unchanged outside the requested comparison section. The English page carries the same product meaning in sibling copy without a sentence-by-sentence literal translation.

The comparison prices are owner-stated, indicative starting figures for this r5 table; they are not represented as provider-verified market data. The free-trial statement is time-sensitive, and all four entries must be revalidated for any successor release.

The owner-selected favicon source is `ijji-logo-full-square.reference.png`, SHA-256 `cbeb7bc4db8db795fc669ef521fc05442a275ab63cda866513277cdc75b05a86`. The two-line wordmark is cropped away as explicitly authorized, then the intact mark is resized with premultiplied-alpha LANCZOS. There is no redraw, recolour, sharpening, backing plate, or generative alteration. The resulting 32px and 192px files match the hashes recorded in `release.json`. This authorization is artifact-owned and limited to the r5 favicon and comparison-table ijji header; it does not promote the treatment into the shared Design System.

## Local verification status

- `scripts/verify-r5.py`: passed locally. It verifies the requested section order, five table headers, seven rows, icons in every header/data cell, ijji mark header, exactly three direct LINE links per locale, quiet LINE CSS, reciprocal comparison bookmarks, favicon paths and hashes, local resources, and key Thai/English price copy.
- Wide-screen visual calibration: a same-width reference/prototype comparison has been generated at `qa/reference-vs-r5-th-compare.png`.
- Responsive browser QA: passed in English at 1440×900, 1280×720, 1024×768, 900×800, 720×450 (200%-zoom equivalent), 600×900, 390×844, and 360×800, all with zero horizontal overflow. The desktop English hero fit at widths 1024, 1280, and 1440px. Thai passed at 1440×900 with hero fit and at 390×844 with zero horizontal overflow.
- Interaction and state checks passed for the five-column desktop table, two-column reflow at or below 1050px, one-column reflow at or below 599px, language/theme controls, Escape behavior, dark/light states, calm nav, active bookmark state, challenge pause/resume, and quiet LINE icons. No console warnings or errors were observed.
- Native physical-device Safari and embedded WKWebView remain open manual gates.
- The release tag, GitHub Pages publication, and exact live-byte attestation are not complete for r5; the local checksum ledger has been regenerated and verified.

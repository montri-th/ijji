# ijji web r7 — release notes

Release ID: `ijji-web-20260908-r7`
Date published: 8 September 2026
Publication status: `published` with a recorded physical-device manual gate
Previous published release: `ijji-web-20260904-r5` at `01ec5da14c1bd60d544341a96a85ba8ba13f85f9`

## What changed

- Replaced only the static ijji identity in the English hero with the owner-approved `ijji.logo-sting.r3` animated identity from Landometer Motif Library release 1.2.1.
- The identity plays once when at least 14% visible, runs for nine seconds, and then holds the complete logo. It does not loop.
- Added a visible 44px Pause/Resume control while the identity is moving and a Replay control after it completes.
- Kept the exact approved complete logo visible while assets load and for reduced motion, no JavaScript, print, runtime failure, or layer failure.
- Preserved the prior square Brand Blue panel on desktop; on compact layouts the panel follows the full identity aspect ratio so the tagline can use the available width without crop. Both modes reserve their geometry before enhancement, so the hero does not shift when the animation becomes ready.
- Kept the Thai sibling byte-for-byte identical to published r5 because the owner identified the English URL as the requested surface.

All non-hero copy, claims, pricing, imagery, section order, navigation, CTA destinations, and existing non-hero motion remain unchanged from r5.

## Authority and adaptation boundary

The animated identity is the immutable `ijji.logo-sting.r3` family from Landometer Motif Library release 1.2.1:

- Fallback asset: `ijji.logo-sting.tagline`
- Runtime asset: `ijji.logo-sting.runtime.r3`
- Surface: `brand-blue`
- Bounce: `playful`
- Motion mode: `finite_once_logo_sting`
- Owner approval: `MOTIF-LIBRARY-OWNER-APPROVAL-20260906-02`

The runtime and its nine image layers are copied without byte alteration. The website adds only an artifact-local lifecycle and accessibility controller. This use is limited to the English hero and does not amend Landometer Design System 0.9.1 or the no-motion canon of ijji Design System 0.5.0 / Add-on 0.5.3.

Existing r5 favicon, comparison-header mark, navbar symbol, comparison, and with-you motif authorizations are carried forward without visual or byte changes.

## Claim revalidation

The four owner-stated comparison entries remain unchanged:

- General AI: starts at THB 700 per month
- Data dashboards: start at THB 20,000 per month
- Consultants: cost THB 200,000 per month
- ijji: starts at THB 29 per question and is free to try now

The owner explicitly revalidated all four entries for r7 on 8 September 2026, including the time-sensitive free-trial statement. Future successor releases must revalidate them again.

## Verification status

- Parent Landometer Design System 0.9.1 verifier: passed, 5,394 checks plus 103 checksums.
- ijji Design System 0.5.0 / Add-on 0.5.3 verifier: passed, 1,421 checks.
- Landometer Motif Library release 1.2.1 verifier: passed, 680 checks.
- Existing r5 static regression verifier: passed after the hero change.
- r7 browser QA: passed 54 checks, including finite-once playback and all eleven timeline samples, Pause/Resume/Replay, final-to-fallback pixel comparison, exact configuration, below-fold and hidden-start activation, first-frame cancellation, reduced motion, no IntersectionObserver, no JavaScript, print, slow loading, runtime/layer failure, 130% and 200% text scale, light/dark states, responsive widths from 320px to 1,440px, short desktop viewports, zero horizontal overflow, and no artwork crop.
- The exact runtime, fallback, and nine layer hashes match the approved overlay.
- Physical iPhone Safari and embedded WKWebView remain open manual gates.

## Publication evidence

Nothing from the locally prepared r6 candidate is incorporated. The annotated tag `ijji-web-20260908-r7` records the exact source commit, GitHub Pages workflow/build/deployment identifiers, live-byte attestation, and the remaining physical iPhone Safari / embedded WKWebView manual gate.

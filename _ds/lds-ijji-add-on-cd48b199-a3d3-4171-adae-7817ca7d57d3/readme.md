# Landometer Design System — v0.9.1 (authoring revision 0.9.1-r8 · machine package v0.9.1-mp7)

Landometer is a **City Data + AI ecosystem for local decision intelligence**: it helps people, businesses and cities make better decisions about real places by turning messy city data into clear maps, traceable insight and tools people can act on.

## The brand stack

| Layer | Line |
| --- | --- |
| **Mission / North Star** | **Visualize City, Shape Tomorrow.** |
| **Territory / Scope** | **Land · Location · Living · Local Decisions.** |
| **Promise / Method** | **Measure What Matters. Make It Actionable.** |
| **Personality** | **Clear · Grounded · Energetic** |
| **Visual character** | **Trusted city intelligence with creative canvas energy** |
| **Culture / Rally cry** | **Let us cultivate our city with data.** |

### Three protected lines, one headline at a time

`[BRAND-01]` protects exactly three lines, and **only one may be headline-level in a single scene.** Never stack them as peer slogans.

| Role | Exact line | When it leads |
| --- | --- | --- |
| North Star | **Visualize City, Shape Tomorrow.** | corporate direction and ambition |
| Brand Promise | **Measure What Matters. Make It Actionable.** | product and work-quality test |
| Cultural activation | **Let us cultivate our city with data.** | an invitation to participate — internal, adoption and team-rally surfaces |

> **Let us cultivate our city with data.** *มาร่วมกันบ่มเพาะเมืองของเราด้วยข้อมูล*

The words **with data must not be removed** — they name the medium that makes the invitation Landometer's rather than a generic city slogan. The shortened v0.8.6/v0.8.7 form is historical only. Never rewrite it as "a better city with data", and never demote it to a footer slogan.

Two supporting systems are structures, not slogans, and appear only when they explain scope or behaviour: the ecosystem **Land · Location · Living · Local Decisions.** and the product loop **See → Understand → Decide → Act → Learn.**

## Brand DNA

| Trait | Content | Visual | Interaction |
| --- | --- | --- | --- |
| **Clear** | plain words, concrete object, direct next step | one focal idea, readable hierarchy | few necessary actions; current location obvious |
| **Grounded** | source, date, place, boundary, uncertainty, limitation | real place, real people, stable evidence surfaces | honest partial / error / recovery states |
| **Energetic** | active verbs, forward movement, no hype | confident scale, purposeful spectrum, human momentum | invite the next useful action; show cause → effect |

Three tensions to hold at once: **deep but easy**, **data-rich but decision-focused**, **trusted but energetic**. And one warning worth repeating — *energy is not a quota of gradients, slogans, exclamation marks, animation or controls.*

The design system's job is unusual and worth understanding before you design anything with it: **Landometer sells defensible decisions about places, so the system is built to keep a claim honest.** Every governed object carries its truth status, its source and date, its boundary, its limitation, and one next useful action. Most design systems optimise for consistency; this one optimises for *not overstating what the data supports*. A beautiful screen that hides a limitation is a failed screen here.

## The four products

The shared Landometer layer is product-neutral. Product data, workflows, scores, models, claims, voice and capabilities stay with the product that owns them, and each has its own identity gradient:

| Product | Line | Identity gradient (light) |
| --- | --- | --- |
| **CityMETER** | Nationwide spatial business-registry data and city change monitoring | `#12669B → #36BCE4` |
| **CityWiki** | Bilingual, story-first city reader (Bangkok Top 100) | `#F7CBC7 → #FBD1B6 → #F1E0B4` |
| **CityChat** | Conversational access to a bounded city record | `#007A58 → #007E79` |
| **ijji** | Locale insight for one place and one decision | `#C4E0EE → #B2E2E2 → #CCE6D0` |

CityWiki and ijji were re-pointed by owner amendment on 20 August 2026 (§C9): CityWiki now carries the Cultivate Mist recipe and ijji the Ground Mist recipe, replacing the plum and terracotta pairs the purple-brown purge retired.

Cross-product or cross-city comparison is only valid under the same schema and release. Otherwise the incompatibility must stay visible.

## Sources this system was built from

Everything here was read from source, not reconstructed from memory or screenshots.

- **The owner-approved v0.9.1 release package** (1 September 2026) — machine package `v0.9.1-mp7`, ruleset `lds-rules-0.9.1`: the normative master (now `brand/Landometer-Design-System-v0.9.1-authoring-master.md`), the working machine subset in `machine/v0.9.1/` (`release.json` · `tokens.v0.9.1.json` · `color-srgb-05.production.css` · `SHA256SUMS.txt`, the full-package receipt), eleven packaged font/icon binaries with licence texts in `assets/fonts/`, and the identity source `assets/logo/Landometer-Logo-TransparentBG.png`. `release.json` is the sole authority for lifecycle, schema identities and set IDs.
- **GitHub — <https://github.com/montri-th/Landometer>** (branch `main`), the design system's own repository and the origin of every token, font, contract and layout value in this project:
  - `deployment/assets/data/tokens.json` — the canonical token registry (Token Schema 6)
  - `machine/v0.9.0/` — the public-safe machine package `v0.9.0-mp1`: generated tokens, surface recipes, `preflight.yml` (both banned OKLCh windows encoded), `self-check.map.json`, the `build-kit/` bytes and `SHA256SUMS.txt`
  - `deployment/assets/data/color-delivery.v0.8.9.json` — the predecessor Color Set `color-srgb-02` record, now migration evidence
  - `deployment/assets/data/components.json` — the 13-entry component contract (`[CTRL-02]`)
  - `deployment/styles.css` — the shipped implementation, and the source of the UI-kit layout values
  - `deployment/font-assets.manifest.json` + `deployment/assets/fonts/` — the nine self-hosted webfont binaries with their SHA-256 records and OFL licences
  - `normative-patches/…v0.8.9-gradient-diversity.proposal.md` — why the gradient family changed in 0.8.9
  - `skill/refine-landometer-experience/references/*`, `skill/shape-inspiring-design-system-guidance/references/*` — voice, motion, surface, action-geometry and case-design rules
  - Published playground: <https://montri-th.github.io/Landometer/>
- **Uploaded identity assets** — ten logo renditions (colour, white, cream, gray, outline, symbol and horizontal lockup), all copied into `assets/logo/` unaltered.
- **Related product repositories** (not read for this build, useful for product-specific work): `montri-th/CityMETER`, `montri-th/CityWiki`, `montri-th/CityWiki-V5`, `montri-th/Landometer-in-Brief`, `montri-th/LDS`, `montri-th/DE-Fund-CityMETER-Business-Dynamics`.

**If you are extending this system, read the current master in `brand/` first.** As of v0.9.1 the owner-approved release package supersedes the repo's v0.9.0 machine set; its working subset is mirrored in `machine/v0.9.1/` and `release.json` resolves every identity. The upstream repository remains the byte origin for fonts, components and the playground. Pull a release as a whole set with its checksums rather than diffing files yourself.

- **Both governing documents are now in `brand/`**, supplied directly by the brand owner:
  - `brand/Landometer-Master-Brand-Brief-v0.5.2.md` — the master-brand source of truth (brand statement, DNA, voice, visual, product system, GTM, documentation standard, AI context).
  - `brand/Landometer-Design-System-v0.9.1-authoring-master.md` — the current owner-approved normative master (1 September 2026): the release card, build contract, numbered rule blocks and machine-contract inventory. Section 16 and all candidate material are non-normative.
  - `brand/Landometer-Design-System-v0.9.0-r7-authoring-master.md` — the predecessor 416 KB master (SHA-256 `52ef41f1b231f8b84955a40c21a018991a114a4f5eaabd8c5111816bf8d645b1`), now migration evidence; its Appendix E kit is superseded by the machine package.
  - `brand/Landometer-Design-System-v0.8.9-authoring-master.md` — the predecessor, kept as read-only migration evidence.
  - `brand/Landometer-v0.9.0-vibe-coding-guide.md` — the owner's step-by-step guide for putting this system onto an existing site or a new build: the guardrails block to paste into a session, the file set to attach, and the published asset URLs to pull from.

**When these two documents and this folder disagree, they win.** This folder is an implementation of them.

### One known discrepancy

The Master Brand Brief §4.3 quotes colour from **Design System v0.6.2** — `brand.beige #EFEFD0`, `surface.canvas #F8F4E8`, `surface.card #FFFCF4`, `text.primary #1E2230`, `text.tertiary #6F6A5D`. Those are superseded: Token Schema 6 ships `#F2F1DF`, `#F6F7F3`, `#FCFCFA`, `#182327`. **The design system overrules** (brand owner, 16 August 2026). This project implements v0.9.0-r7 throughout.

One consequence is recorded as a named pending approval in `brand/asset-records.md`: the cream symbol renditions are drawn in the older `#EFEFD0` and need a re-export at `#F2F1DF` from the identity owner. Until then, do not place a cream mark directly on a `--brand-beige` field — the three-unit difference reads as a seam. Put it on Ground Current, Measure Deep or a photograph. **Never recolour the PNG to fix it**; recolouring an identity asset needs approval, not a find-and-replace.

---

# CONTENT FUNDAMENTALS

## The claim recipe

Every substantive sentence in a Landometer interface can be traced to one shape:

```
object + result/status + source/date + limitation + next safe action
```

If a line cannot be placed in that sequence, it usually should not ship.

## Voice principle

> **Explain like a thoughtful analyst. Guide like a practical teammate. Invite action like a city builder.**

*อธิบายแบบนักวิเคราะห์ที่เข้าใจคน แนะนำแบบเพื่อนร่วมทีมที่ลงมือได้ และชวนไปต่อแบบคนที่อยากเห็นเมืองดีขึ้น*

Four messaging pillars, in order: **See clearly → Understand context → Decide with confidence → Act and learn.**

## Voice

**Clear, grounded, energetic, inviting.** Energy comes from useful verbs, visible progress and agency — never from hype, exclamation marks, fear or forced friendliness.

**Person.** Mostly no pronoun at all: the object is the subject. `Four flood events in ninety days.` When a pronoun is needed it is **you** for the reader's own work (`Compare it with your own screen`) and **we/us** only for the shared cultural line (`Let us cultivate our city with data.`). Never `I`.

**Casing.** Sentence case everywhere — headings, buttons, labels, table headers. Uppercase is reserved for the mono eyebrow (`BRAND TRACE`, `RELEASE BOUNDARY`) at `.8125rem` with `.08em` tracking. Title Case appears only in proper nouns and product names.

**Punctuation.** Middle dot `·` separates technical facts (`FLOOD-2569-TH-04 · r2 · 29 July 2026`). Em dash for a consequence. Dates are written out — `29 July 2026`, not `2026-07-29` — in prose; ISO only inside a machine record.

**Emoji: never.** Not in UI, not in docs, not in commit-adjacent copy. Status is carried by a labelled `TrustBadge`, not a coloured circle emoji.

**Numbers.** Always with a unit and a period. `4 events / 90 days`, not `4`. Contrast ratios keep two decimals and the colon: `4.99:1`.

### Strong

- Compare flood history for these two municipalities.
- Updated 11 July 2026 from the named source.
- This estimate excludes informal listings.
- ลองกับงานของฉัน
- ดูว่าอะไรเปลี่ยน และทีมถัดไปทำงานต่อง่ายขึ้นอย่างไร

### Avoid

- We have a lot of data. *(starts from the dataset, not the decision)*
- Unlock transformative data-driven insights. *(hype, no object)*
- Shared meaning creates room for brave work. *(abstract stack)*
- One governed decision language for every handoff. *(slogan pretending to be a fact)*
- X is not Y; it is Z. *(the definitional flourish — banned by name)*
- Learn more. *(name the destination instead)*

## Copy formula

For a landing page, proposal, post, product card or AI response:

```text
For [user], who needs to [decision/action],
Landometer helps [see / understand / decide / act]
using [data / method / product layer],
so they can [better outcome],
with [source / confidence / limitation / action boundary].
```

## Internal language → user-facing language

Never ship the left column to a user.

| Internal | User-facing |
| --- | --- |
| data foundation | ฐานข้อมูลเมืองที่รวมและตรวจสอบที่มาได้ / a city database you can trace |
| spatial intelligence | ความเข้าใจเชิงพื้นที่ / what the map is telling you |
| action loop | ขั้นตอนลงมือและติดตามผล / the steps to act and follow up |
| outcome ledger | บันทึกสิ่งที่ทำแล้วและผลลัพธ์ที่เกิดขึ้น / a record of what was done and what happened |
| grounded AI | AI ที่อ้างอิงข้อมูลจริงและบอกข้อจำกัดได้ |
| local decision intelligence | เครื่องมือช่วยตัดสินใจเรื่องพื้นที่จริง |

## Bilingual copy

Thai and English are **sibling drafts from one fact record**, never word-for-word translations. Draft each independently, then compare factual parity only. Thai uses words people actually say at work, one main thought per sentence, active verbs instead of stacked abstract nouns, and line breaks at phrase boundaries. Technical English appears in Thai copy only where the team genuinely uses it, explained once.

Thai display type is a different family and a different leading from Latin — treat the language switch as a typographic event, not a string swap.

## The five-question test

1. Can someone tell what this is about immediately?
2. Can they see why the current way is costly?
3. Can they see the improvement, rather than read a claim about it?
4. Do they know what to try next?
5. Are source, status, boundary and limitation still intact?

---

# VISUAL FOUNDATIONS

## Brand-memory signatures

`[BRAND-03]` names six signatures. A long adoption route selects **exactly three**; a smaller surface selects one to three and must not add ornament to reach a count. The default adoption set is **Measure · Ground · Cultivate**.

| Signature | Meaning |
| --- | --- |
| **Measure** | metric, range, confidence, status, threshold or progress |
| **Layer** | evidence and context revealed at the depth the decision needs |
| **Spectrum** | disciplined, role-correct colour showing diversity or category |
| **Move** | short state motion carrying attention from evidence to meaning to action |
| **Ground** | visible place, source, date, boundary, limitation, field or human context |
| **Cultivate** | a real action that helps a person, team, shared object or city improve |

The older **Meter · Diversity · Depth** triad maps onto **Measure · Spectrum · Layer** — so "diversity", in this system, is the **Spectrum** signature: colour doing category work correctly, not colour added for richness.

Repeating the logo, painting the page blue, adding abstract arcs or dropping in a rainbow gradient does **not** satisfy this rule.

## Controlled brand rhythm

A long route carries exactly three promoted moments — **Opening** (direction and invitation), **Transition** (Measure → Ground → Act), **Closing** (shared action or useful reference). Two to four major atmosphere surfaces across the whole route; at least one calm flat, photographic or evidence-led scene between any two gradient moments; one semantic moment may use no gradient at all. A gradient never creates an extra job, scene, card or control. The official logo never animates.

A small task surface uses only the one moment its job needs.

## The core motif

A Landometer surface opens with **measurement**: a Brand Blue panel, an 8px four-colour rule pinned across its top edge (coral · yellow · mint · sky, 25% each), and at the foot of the panel a `3 × 5px` **measure line** in sky / yellow / mint — the three-part DNA made physical. That combination is the single most recognisable thing in the system. Reproduce it exactly; do not re-order the colours or soften the hard 25% stops.

The identity mark is a **map pin fused with a gauge**: a Brand Blue teardrop under a segmented dial in the four energy colours. Location plus measurement, in one shape.

## Colour

Two colour systems that must never mix:

**Solids** (`build-kit/lds-tokens.css`) — warm-neutral surfaces, five ink levels, three line weights, seven semantic fill/ink pairs, and four energy accents. Notably:

- **Brand Blue `#1D4497` is identity, not interaction.** It appears on the hero panel, as a 4px top border on definition blocks, as a section-heading colour, and inside the logo. It is never a button fill.
- **`--interaction-accent #176B82` is every clickable thing** — links, capsules, focus rings, selected states, `::marker` colour, counter rings. In dark theme it becomes `#68C4E2`.
- Neutrals are warm and slightly green (`#F6F7F3`, `#EEF1EE`, `#E5E9E6`), never blue-gray. Metadata ink is now a *cooler* green-gray than body ink (`#5C6A61` vs `#5F635A`) — still a deliberate signal that technical text is a different register, but v0.9.0's purple-brown purge moved metadata, muted and disabled ink out of the warm-brown window.
- **`--text-muted` does not pass AA** (3.05:1 – 4.46:1 depending on surface) and is not meant to: it is the no-data label and disabled-hint role only. Important metadata uses `--text-metadata`. Measured values are in `guidelines/contrast-evidence.json`.
- **Beige `#F2F1DF` is a first-class brand colour**, not a background tint: it carries the logo in the header, fills the hero's quiet column, and is the low anchor of six of the nine data scales.

**Gradients** (`build-kit/lds-tokens.css`) — seven governed atmosphere recipes at exactly `135deg`, each with a fixed stop map, byte-identical since v0.8.9:

| Surface | Light | Dark | Job |
| --- | --- | --- | --- |
| Measure | `measure.deep` `#1D4497 → #176B82 54% → #08756F` | `measure.luminous` `#89CEF6 → #5ECAD6 → #6CD5B3` | entry, direction, closure |
| Ground | `ground.mist` `#C4E0EE → #B2E2E2 → #CCE6D0` | `ground.current` `#0F5773 → #006A6A → #1F744F` | context and evidence becoming clear |
| Cultivate | `cultivate.glow` `#EB8182 → #F5A06F → #EBC573` | `cultivate.mist` `#F7CBC7 → #FBD1B6 → #F1E0B4` | action and credible momentum |
| Diversity | `#89CEF6 → #6CD5B3 34% → #EBC573 67% → #EB8182` (theme-invariant) | — | rare, evidenced co-creation |

Three hard rules: the fifteen new stop values are **gradient-only** and illegal as solids; gradients are **never generated at runtime** or nudged to a nearby hue; and product gradients never act as shared atmosphere, data, map, state or interaction colour.

**The Diversity Spectrum is the system's one permitted flourish, and it is rationed.** At most once in a genuinely long route, inside an existing Ground or Cultivate moment, and only where the visible content names real different perspectives, contributors or co-creation roles. Labels, structure and people carry that meaning — hue never carries it alone. It must not identify a product, encode a category, fill a button, colour a logo, animate through a hue cycle, or appear to make a page livelier.

### More colour, correctly: the Vivid Civic 10

The brand's answer to "we prefer a spectrum, not a few colours" is a real registry, not a wider licence: **Vivid Civic 10** (`landometer-series-10-v5`) — ten governed light/dark pairs, each with a shape or pattern cue. Use the whole registry rather than recycling three favourite hues, and follow its own ceiling:

- **Colour-only identification stops at six categories.**
- **At seven to ten, the shape or pattern cue carries the difference** — circle, square, triangle, diamond, cross, star, hexagon, ring, dash, plus.
- **Above ten, group, filter, small-multiple or table.** Never generate an eleventh hue.
- Persist an assignment by canonical category ID, never by array position, so a category keeps its colour between renders.

Spectrum breadth is also bounded by role: `energy.*` expression uses **at most one or two** of the four accents in a scene and never dumps all four into a gradient; `series.*` is for nominal categories only and never for magnitude or decoration.

### Hues that are prohibited outright

Landometer-controlled UI, text, charts, maps, illustrations, motifs, previews, exports, presentations, social graphics and agent-generated assets **must not** introduce any of these as a controlled accent, categorical, product-identity, dataviz or motif family:

> violet · purple · periwinkle · lavender · iris · plum · orchid · fuchsia · cool or electric magenta · terracotta · brick · clay · rust · sienna · burnt orange · earth red · brown-orange

Bright coral, Signal Orange, yellow and Warm Pink may appear **only** through the exact approved tokens and named roles. Source photography, unalterable third-party marks and clearly labelled historical evidence are exempt — and none of them creates a reusable accent alias.

### Role ownership

`brand.*` identity · `energy.*` human/cultural expression · `surface.*`/`text.*` hierarchy and readability · `interaction.*` focus, selection, action · `semantic.*` state · `product.*` product identity beside a product name · `series.*` nominal category · `dataviz.*` magnitude · `map.*` hover, selection, focus. Crossing a role is the most common failure in this system. And no role may sample, alias or recolour official logo artwork.

**Filled Brand Blue actions are not permitted.** The deterministic action recipe is the interaction accent as label and border, `surface.blueTint` on hover/selected, `surface.soft` on active, and the separate focus-ring token — which is why no inverse-text token exists.

**Analytical colour is a third, separate registry** (series, no-data fill and zero outline in the kit; the nine scale families, the shape cues and the hatch in `tokens/ext-registry.css`): ten categorical series each paired with a redundant shape cue (circle, square, triangle, diamond, cross, star, hexagon, ring, dash, plus), six sequential and three diverging families, and — critically — **`no data` and `measured zero` as two different, separately labelled treatments**. No-data is a 135° diagonal hatch; measured zero is an outline only, and only when zero is a fact. Missing is never rendered as 0.

## Type

Five faces, all self-hosted, `font-synthesis: none`, split by **script and role** rather than by size:

| Role | Latin | Thai |
| --- | --- | --- |
| Display | **Arvo 700** — a slab serif; `-0.02em`, `1.02` leading | **IBM Plex Sans Thai Looped 700** — `1.25` safe-fallback leading (`1.16` is deprecated as a universal value; tighter needs a size+script fixture pass) |
| Body & UI | **Bai Jamjuree 400 / 600** | Bai Jamjuree 400 / 600 |
| Technical | **JetBrains Mono 400** | **IBM Plex Sans Thai 400** (proportional companion, `size-adjust: 102%`, `.008em` tracking, `1.48` leading, +1px vertical padding in small pills) |

The slab-serif display against a geometric Thai/Latin sans is the type signature. There is exactly **one technical weight (400)** in both scripts — emphasis comes from hierarchy, colour, spacing or wording, never faux bold. A generic `monospace` fallback must never be allowed to pick the Thai face by device.

Reading measure is `72ch` Latin, `66ch` Thai. `text-wrap: balance` on headings, `pretty` on body. H1 uses `clamp(3.25rem, 7vw, 6.5rem)` in Latin and a shorter `clamp(2.5rem, 6vw, 5rem)` in Thai, because Thai ascenders and tone marks need the extra room.

## Space, layout and structure

4px base scale, widening non-linearly to 128px (`4 8 12 16 24 32 48 64 96 128`). Gutter steps 32 → 24 → 16 by breakpoint. Three containers only: `760px` reading, `1120px` default, `1280px` wide.

The layout language is **asymmetric multi-column grids with real perceptual quiet.** The shipped hero is three columns (`.88fr` copy / `.85fr` beige field / `1.15fr` photo). Note the rule that governs it: `[LAYOUT-01]` and `[VIS-03]` **prohibit inventing a tinted or rounded "quiet column" as a third decorative component** just to look calm. Quiet must come from grid tracks, crop, scale and surface continuity — not from a filler block between message and proof. Sections routinely use a sticky intro column beside a scrolling content column. Related tiles are separated by `1px` gaps over a `--border-default` background rather than by margins, producing hairline-divided grids instead of floating cards.

**Fixed elements:** a `76px` sticky header (`68px` under 600px) with `blur(10px) saturate(1.2)` and a 92% canvas mix; a sticky sub-navigation in the lab at `top: var(--header-height)`; sticky section intros; and a fixed bottom-right toast. Nothing else is pinned.

## Corners, borders and cards

- **A page must never invent its own radius, breakpoint, shadow or z-index system.** Meaningful alignment comes from shared grid tracks, not independent flex distribution or absolute offsets.
- **Radius by role, not by fashion:** `xs 6px` (swatch, small note) · `sm 10px` (field, segment, table shell) · `md 16px` (card) · `lg 24px` (dialog, specimen panel) · `xl 32px` (large specimen) · `pill 999px` (actions and status only).
- **Actions are a capsule or a circle, and nothing else.** Text and icon-plus-text actions use `--radius-pill` and let the label wrap naturally at a 44px minimum height; quiet icon-only utilities are a `44 × 44` circle. This rule is scoped: tabs, segmented controls, lens lists, fields, cards, panels, chips, tags and data marks keep their own geometry. Never generalise the pill.
- **A card is a flat `1px --border-default` on `--surface-card` at `--radius-md`, with no shadow.** Borders do the separating. A left accent border (`4–10px`) marks a *panel* — a handoff panel, a source ledger, a product adaptation — and never a card.
- The baseline / "needs revision" state is signalled by a **dashed** border and `.66` opacity on metadata, so a comparison never needs to break the baseline to make the assisted state look better.

## Elevation, transparency and blur

Elevation is rare and quiet: `xs 0 1px 2px` for a selected segment, `sm 0 4px 12px` for a floating toast, `md 0 12px 32px` for the dialog and nothing else. Blur appears exactly twice — the header's `10px` backdrop, and the dialog scrim's `3px` over `rgba(17,25,29,.66)`.

Transparency is used sparingly and only where it means something: the header's canvas mix, the scrim, `.66` on baseline metadata, `rgba(255,255,255,.78)` label chips over data colour so a hex value stays readable on any swatch. Governed gradients are **not** to be washed out under a blanket white or black scrim just so page-global ink can be inherited — that is what the local foreground contracts are for.

## Imagery

Real photographs of real people working — the two in `assets/images/` are the team in review sessions. They are warm, naturally lit, unfiltered, and used **without alteration**: no duotone, no grain, no gradient overlay. Every photo sits in a `<figure>` with a caption on `--surface-alt` that states what it is and what its approval status is. Full-bleed photography appears only as a hero column, cropped with `object-fit: cover`, never behind text.

The logo is never placed on a plate of its own. When contrast fails, change the surrounding surface — that is why the beige carrier exists.

## Motion — Riddim Approach (motion-riddim-approach-02)

Short interaction durations stay tied to what is changing: `feedback 120ms` (2px of travel), `state 200ms`, `map 280ms`, `chart 360ms`. The entrance system is **Riddim Approach** — role-gated, played once, fail-open. Five explicit reveal roles and nothing else: `approach.soft` (opacity + 32px block rise + scale from `.985`) for a supporting section group, `approach.inline-start` / `approach.inline-end` (36px logical inline offset) for paired comparisons, `media.arrival` (900ms, opacity + transform only) for non-LCP editorial media, and `stagger.child` for a small related group after its parent settles. The two channels run at different lengths — opacity `760ms` on the enter curve, transform `920ms` on the settle curve — and the stagger is four beats: `min(i,3) × 150ms` = 0/150/300/450ms, items past the fourth hold the cap, group order follows reading order. Never a broad selector (every card, every heading), never nested unsynchronized reveals — and the first answer, primary proof and primary action are never reveal roles.

The same four curves carry it: `cubic-bezier(.2,0,0,1)` state, `cubic-bezier(.16,1,.3,1)` enter, `cubic-bezier(.2,.9,.25,1.08)` settle, `cubic-bezier(.3,0,.6,1)` press.

**Fail-open is the contract.** Source HTML renders the final visible state; the reveal is an enhancement armed only when normal motion and an IntersectionObserver are available (threshold `.14`, rootMargin `0px 0px -12% 0px`, one shared observer per document root, once-only unobserve, a `2400ms` initialization watchdog, a two-frame reached-content failsafe). No JavaScript, reduced motion, observer failure, hidden tabs, deep links, history restoration and print all land the final state, and a final→hidden→final flash is prohibited.

One more recipe exists and is rationed: the **CTA discovery cue** (`motion.cta.discovery-cue.01`) — browser-only, for the primary navigational CTA when the Build Card records a discoverability benefit. An inline highlight sweep from −120% to 120% with a 28% band, `540ms` (`600ms` ceiling), exactly once per page load, pointer-inert and aria-hidden, content opacity never below 1, zero layout movement. Reduced motion or observer failure means no cue; native apps, documents, PDF, decks and social never use it.

Motion may only clarify state, sequence, progress, spatial relationship or cause. **It never carries evidence, contrast or comprehension.** Parallax remains disabled in v0.9.1; no scroll-jacking, no looping ambience, no hue-cycling, no infinite attention animation. Reduced motion is one kill switch rather than per-token collapse: `@media (prefers-reduced-motion: reduce)` disables every animation and transition — the one sanctioned `!important` — and reduced motion means final-state-first, not slower.

## Interaction states

- **Hover** — a tint, not a darken: `--surface-blue-tint` behind outline buttons, icon buttons, nav rows and download tiles; links thicken their underline from `1px` to `2px`.
- **Press** — `--surface-soft` plus `translateY(2px)`. A press moves *down*; nothing scales or bounces.
- **Focus** — `3px solid var(--interaction-focus-ring)` at `2px` offset, always visible, never removed. On an atmosphere surface the ring takes that scene's own contract ink. A fixed-hex focus fails SC-05.
- **Selected** — accent ink plus an inset bar: `inset 4px 0` on a vertical tab, a `4px` bottom border on a horizontal tab, `--surface-raised` plus `elevation-xs` on a segment.
- **Disabled** — `opacity .56`, `cursor: not-allowed`, and a stated reason. Never disable something silently.
- **Selection** — `::selection` is `--energy-yellow` on `#182327`.

## The anti-generic gate

`[VIS-03]` fails these patterns whenever a real task does not require them. Read it as the list of things that make a design stop looking like Landometer:

- a floating dark dashboard card over a photograph of people;
- endless rounded SaaS cards, or a bento grid for unrelated ideas;
- pill clusters used as headings or decoration;
- glass blur, ungoverned gradient blobs, aurora fields, glow clouds, radial decoration, or shadows on every surface;
- a command palette over a small reference set;
- a gradient with no declared entry, orientation, transition, momentum, closure or product-identity job;
- a visible "quiet block" acting as a third decorative component;
- connector lines, loops or arrows that encode no named sequence, dependency, causality or handoff;
- abstract governance metrics placed before a real Landometer proof;
- hover lift on a card that cannot be operated;
- identical icon-card layouts for every principle;
- stock skylines or AI-generated city imagery when real evidence exists;
- literal plants, sprouts, city silhouettes, gauge fragments, flying particles or growth metaphors standing in for "cultivate".

Then run the deletion check: remove cards, badges, motifs, connector lines, glows and gradients **one class at a time**. If comprehension improves, the item goes. If a governed gradient clearly improves the entry point, reading direction, transition or closure, it stays — and its `[SURFACE-01]` role gets recorded.

## Surface ownership (the rule people break)

Any fixed surface — gradient, photograph, scrim or coloured panel — **owns its complete foreground contract**: primary ink, secondary, metadata, separator, icon, interactive surface, interactive ink, and both focus-ring colours. Theme-global ink must never leak onto it. Two contracts exist, `onDeep` (white on dark gradient) and `onLight` (near-black on light gradient), and `AtmosphereSurface` applies them for you as `--local-secondary` / `--local-metadata`.

Contrast is measured from the rendered glyph through the real alpha stack onto the component-owned surface. Token pairing on paper proves nothing.

---

# ICONOGRAPHY

**Nothing upstream packages an icon set.** `montri-th/Landometer` ships no icon font, no SVG sprite and no icon directory — searched across `deployment/`, `skill/` and the asset manifests. The shipped playground carries its few glyphs typographically instead.

## The chosen set — Material Symbols Rounded (approved)

The one stated preference in the upstream guidance is *"outline icons with rounded joins for role recognition."* This system therefore adopts **[Material Symbols Rounded](https://fonts.google.com/icons)** from Google Fonts (Apache 2.0), locked to one instance:

| Axis | Value | Why |
| --- | --- | --- |
| style | **Rounded** | rounded joins and terminals, as specified |
| `FILL` | **0** | outline in **every state** — v0.9.1 prohibits a fill change on selection; selected is carried by surface, colour, label or an outline container |
| `wght` | **300** | thin stroke, locked by `[ICON-01]` — there is no second permitted weight |
| `GRAD` | **0** | no optical weight compensation |
| `opsz` | **matches rendered size** | 24 at the 22–28px range this system uses, 20 at 18px |

It arrives with the design system: `tokens/fonts.css` opens with the Google Fonts `@import`, so any page that links `styles.css` has it. Two ways to use it:

```jsx
<Icon name="place" />
<Icon name="insights" size="lg" label="Analysis" />
<Button iconOnly aria-label="Switch theme" icon={<Icon name="routine" />} />
```

```html
<span class="ls-icon">place</span>
<span class="ls-icon" style="font-size:28px">insights</span>
```

Sizes are `--icon-size-sm 18px` / `--icon-size-md 22px` / `--icon-size-lg 28px`. Glyphs are ligature names, so a failed font load degrades to the readable word rather than to a blank box.

**Approved 16 August 2026** as the Landometer icon system, recorded in `brand/asset-records.md`. Approved for UI, documents and artifacts — **not** as an identity asset. It must never be used to reconstruct, stand in for or decorate the brand mark.

The former open item is closed in v0.9.1: two packaged subsets are **self-hosted with recorded hashes** beside the five text families — `assets/fonts/material-symbols-rounded-nav-300.woff2` and `material-symbols-rounded-open-in-new-300.woff2` (Apache 2.0 licence text in `assets/fonts/licenses/`). `tokens/fonts.css` still opens with the Google Fonts import so this reference folder can preview any approved glyph; a production or portable build binds the packaged subsets (or a build-specific subset with its recorded glyph map) through the artifact's asset registry instead of the CDN, and non-web output selects one exact native mapping with substitution forbidden.

## Rules for using an icon here

- Every icon needs **a distinct role, a direct label, and an accessible name when interactive.** Decorative repeats are hidden from assistive tech.
- **An icon never replaces essential evidence.** A status is a labelled `TrustBadge`; a limitation is text.
- **No decorative icon saturation, and no identical icon card for every principle** — `[VIS-03]` fails both by name. Vary the visual form to match the relationship being taught.
- Icons follow the ink they sit in (`currentColor` by default): accent for an action, `--text-metadata` for a technical cue, the local contract colour on a gradient surface.

## What stays typographic

These are set in JetBrains Mono and are **not** icons — do not swap them for glyphs:

`◐ ○ ◑` the theme cycle in the shipped page · `✕` the dialog close mark · `← →` the specimen stepper · `↗` the external-link cue · `→` between value-chain steps.

CSS-drawn marks carry the rest: the `38px` counter rings in the five-step route, the `7px` status dot in a `TrustBadge`, the `1px`-gap hairline grids, and the `repeating-linear-gradient(135deg, …)` no-data hatch.

## The identity mark is not an icon

`landometer-symbol-*.png` is an approved raster asset for identity contexts only — header, tab, small-space mark. Never in a list, never as a bullet, never redrawn, never recoloured outside the official spectrum. If a required identity role has no approved asset, omit it and record a named pending approval; a proposed rendition must stay visibly non-authoritative.

**Emoji are never used.**

# INDEX

## Root

| File | What it is |
| --- | --- |
| `styles.css` | The global entry point. Consumers link this one file; it is an `@import` list only, and its load order is normative. |
| `build-kit/` | The working projection of the v0.9.1 machine package: `lds-tokens.css` (every raw value), `lds-base.css` (anatomy), `skeleton.html` (page contract). Copy these into a build unchanged — editing them inside a build is token drift; the generating authority is `machine/v0.9.1/`. |
| `machine/v0.9.1/` | The owner-approved machine subset: `release.json` (sole lifecycle + schema authority), `tokens.v0.9.1.json` (Token Schema 7), `color-srgb-05.production.css` (the only audience-safe color CSS), `SHA256SUMS.txt` (full-package receipt). |
| `machine/ijji-ds-addon/v0.5.3/` | The ijji DS Add-on asset pack (`ds-addon-ui-20260902-01`) mirrored path-for-path — `asset-manifest.json` (52 files + SHA-256 + rights class), normative guides, approvals, 102-role Applied Color Atlas, LDS public color projections, build card, QA contract, reference site, exact logo. Immutable; receipt in `VERIFICATION.md`. |
| `addons/ijji/` | The ijji product layer: `README.md` (authority order, rule digest, file map), `ijji-asset-lock.json` (the one pointer other projects resolve), `ijji.css` (var()-only aliases + five semantic component recipes + no-motion + rail neutraliser), five `ijji` cards, `PROMPT-SNIPPET.md` for consuming projects. |
| `addons/ijji/motif/` | The ijji-owned motif set `ijji.four-beat` rev 3 (adopted 4 Sep 2026): 18 static SVGs (15 deliverable), the approved motion layer, `IjjiMotif` / `IjjiWorkingIndicator`, and its record, approval, measured contrast evidence and dev guide. ijji contexts only — never a logo, never a Landometer-wide mark. |
| `readme.md` | This document. |
| `SKILL.md` | Agent-Skill front matter so this folder works as a Claude Code skill. |
| `github.md` | Upstream source association and sync record. |
| `thumbnail.html` | Homepage tile for the system. |

## `brand/` — the governing documents

| File | What it is |
| --- | --- |
| `Landometer-Master-Brand-Brief-v0.5.2.md` | Master-brand source of truth: brand statement, Who / What / Which / How, DNA, voice, visual, product system, GTM, documentation standard, AI context capsule. |
| `Landometer-Design-System-v0.9.1-authoring-master.md` | The current owner-approved normative master (1 September 2026) — release card, build contract, numbered rule blocks for color, type, icon, layout, media, components, controls, theme and assets, navigation, actions and CTA, Riddim Approach motion, discoverability, output formats, QA and migration. Section 16 is non-normative. |
| `Landometer-Design-System-v0.9.0-r7-authoring-master.md` | The predecessor master, read-only migration evidence — every v0.9.0 rule ID has exactly one disposition in the v0.9.1 migration ledger. |
| `Landometer-Design-System-v0.8.9-authoring-master.md` | The predecessor master, read-only migration evidence. Its Color Set `color-srgb-02` stays immutable. |
| `Landometer-v0.9.0-vibe-coding-guide.md` | How to put this system onto an existing site or a new build, in rounds: audit → Build Card → kit + fonts → token mapping → component by component → motion → self-check. Includes the ten-rule guardrails block and the published asset URLs. |
| `asset-records.md` | Per-asset ledger: the approved icon system, every identity rendition with its scope, and the named pending cream re-export. |
| `release-readiness.md` | What is still open in the v0.8.9 release, in plain language — what each flag blocks, who closes it, and the honest sentence to use meanwhile. |

Read these before extending anything. This folder implements them; where they disagree, they win.

## `build-kit/` and `tokens/` — the token layers

`build-kit/lds-tokens.css` and `build-kit/lds-base.css` are the v0.9.1 token projection — generated from `machine/v0.9.1/tokens.v0.9.1.json`, color values identical to `color-srgb-05.production.css` — and the **only** place a raw value lives. `tokens/` is the extension layer around them, and it never redefines a projection token or selector:

| File | What it carries |
| --- | --- |
| `tokens/fonts.css` | the nine text `@font-face` rules; the eleven packaged binaries (nine text faces + two icon subsets) live in `assets/fonts/` with recorded hashes |
| `tokens/ext-aliases.css` | the legacy name bridge, `var()` only: v0.8.9 names (`--focus-ring`, `--success-fill`, `--on-deep-*`, `--font-mono`, `--data-no-data`) and the v0.9.0 motion names (`--motion-duration-reveal` → approach opacity) still resolve |
| `tokens/ext-registry.css` | registry values the projection omits — the nine scale families, the ten shape cues, the no-data hatch, tracking, reading measure, icon sizes, control geometry, observer + cue geometry, breakpoints, scrim and blur |
| `tokens/base.css` | element defaults the kit does not carry: link colour, per-element Thai routing, tabular numerals, `.eyebrow`, and `.ls-icon` as an alias of the kit's `.icon-symbol` |

The rename map is mechanical: `interaction.focus.ring → --interaction-focus-ring`, `semantic.warning.ink → --semantic-warning-ink`, `surface.blueTint → --surface-blue-tint`, and `gradient` is elided in atmosphere recipes (`atmosphere.gradient.measure.deep → --atmosphere-measure-deep`). New code uses the kit names; the aliases exist so the components, cards and templates written against v0.8.9 keep working.

## `components/` — 16 components in 8 groups

The thirteen families below are the **complete `[CTRL-02]` component contract** from `deployment/assets/data/components.json`. Each has a `.jsx`, a `.d.ts` props contract, a `.prompt.md` usage note, and a specimen card in its directory.

**`identity/`** — `BrandSignature` **`actions/`** — `Button`, `Link`, `Segmented` **`forms/`** — `FormField` **`evidence/`** — `DecisionCard`, `SourceLedger`, `TrustBadge` **`data/`** — `DataTable`, `MapLegend` **`feedback/`** — `EmptyState`, `ErrorState`, `Dialog`, `Toast` **`surfaces/`** — `AtmosphereSurface` **`icons/`** — `Icon`

### Intentional additions

Three components have no counterpart in the upstream contract and are marked as additions:

- **`Segmented`** — the shipped interface needs a governed non-capsule exclusive choice control for theme, locale and the Needs-revision ↔ Assisted comparison. `[CTRL-02]` explicitly excludes segmented controls from the action-capsule rule but names no component for them.
- **`AtmosphereSurface`** — `[SURFACE-01]` requires every fixed gradient surface to own a complete local foreground contract. Nothing in the thirteen families does that, so applying the seven governed gradients correctly would otherwise be manual every time.
- **`Icon`** — a wrapper for the substituted Material Symbols Rounded glyph set, locking the axes (`FILL 0`, `wght 300`, rounded, `opsz 24`) so the substitution stays consistent and reviewable. See ICONOGRAPHY.

## `templates/` — starting folders

Each template is a folder a consuming project can copy. Not compiled into the component bundle; they appear as their own group in the picker.

**`unified-nav/`** — the cross-property navigation bar + bookmark rail (`UnifiedNav.dc.html`, 4 presets: landometer · citymeter · citywiki · landom). Ported from the owner's r7 handoff and aligned to v0.9.1 §6–7: approved-asset identity per theme, 44×44 targets preserved through scroll-calm, FILL 0 selected states, `aria-current` split into `page`/`location` scopes, and the finite `motion.cta.discovery-cue.01` in place of the r7 looping sweep. `templates/unified-nav/README.md` carries the r7 → v0.9.1 decision table and open items; `handoff-r7/` keeps the original handoff docs as provenance.

| Template | What it is |
| --- | --- |
| `decision-brief/` | A one-page decision brief: claim, evidence, source ledger, limitation, next action. The default shape for a governed Landometer document. |
| `citymeter-rollup/` | Two print-ready 80 × 200 cm roll-up banners for the NSO / depa exhibition — R01 stops people at a distance and points at the screen and the QR; R02 is a scannable wall of 21 curated CityMETER data views. Carries its own `README.md` print order, `datasets.json` registry and QR / preview assets. |

## `guidelines/` — 31 specimen cards

Brand (5): identity lockup, symbol colorways, Brand Blue vs interaction accent, the measure line, iconography. Colors (13): brand & energy, surfaces, ink & lines, semantic states, atmosphere, Diversity Spectrum, spectrum in use, product gradients, categorical series, sequential scales, diverging scales, no-data vs measured zero, contrast evidence. Type (5): Latin display, Thai display, body & UI, the technical pair, the scale ladder. Spacing (3): space scale, radius & action geometry, containers. Motion (2): durations, easing. Elevation (1): cards. Navigation (1): the unified ecosystem navbar contract — anatomy, budget, calm scroll, bookmark rail, CTA cue. Release (2): the machine package and its authority rules, and the receipt-based conformance model. ijji (5, in `addons/ijji/`): identity carriers and logo scope, the label-first owner answer, authority order and claim ceiling, the 102-role applied color atlas, the four-beat motif set.

## `ui_kits/identity-playground/`

A recreation of the one product surface this repository ships — the internal-team **Design Identity Playground v0.8.9** (<https://montri-th.github.io/Landometer/>): three modes (Cultivate, Implementation library, Specimen lab), theme cycle, TH ↔ EN, and the baseline-vs-assisted workbench. See its own `README.md` for what is deliberately not reproduced and why.

## `assets/`

`logo/` — thirteen approved renditions: `landometer-lockup-color.png` (primary horizontal lockup, transparent), `landometer-lockup-banner.png`, `landometer-symbol-192.png` (the approved browser-tab symbol, repo commit `ce785864`), colour, white, cream, gray, mono, outline-cream, outline-white and square-white symbol variants, plus `Landometer-Logo-TransparentBG.png` — the packaged identity source (horizontal lockup) shipped with the v0.9.1 release: source evidence for identity work, not a new role approval. **Byte note:** the `Landometer-Logo-TransparentBG.png` copy here arrived through chat upload and was re-encoded in transit (909,096 B, sha256 `88141c95…`); the package records `8d706f80…` for the exact file. Visually identical, but pull the exact bytes from the release package or Drive when a hash must match. `images/` — `team-hero.jpg`, `team-presenting.jpg`, both used unaltered. `fonts/` — eleven `.woff2` binaries (nine text faces + the two Material Symbols Rounded subsets `nav` and `open-in-new` at wght 300) plus `licenses/` (SIL OFL 1.1 for the five text families, Apache 2.0 for the icon face). Hashes: `machine/v0.9.1/SHA256SUMS.txt`.

Also at the root: `guidelines/contrast-evidence.json` — the measured contrast record behind the Contrast evidence card.

---

# What changed in v0.9.0 (read this if you built on v0.8.9)

v0.9.0 exists because the same master produced materially different builds per builder — human or AI — and small-detail drift forced repeated redeploys. The correction is determinism plus governed growth, not new taste. In this folder that means five concrete changes:

1. **The kit is now the source of truth.** `build-kit/lds-tokens.css` and `build-kit/lds-base.css` are the Appendix E bytes, unedited. `styles.css` loads them first; everything else is an extension layer. The old per-topic token files (`colors.css`, `atmosphere.css`, `typography.css`, `spacing.css`, `motion.css`, `elevation.css`, `dataviz.css`) are gone — their values live in the kit, their names live in `tokens/ext-aliases.css`.
2. **Ten retired colour values.** The purple-brown purge replaced `#795300 #846100 #686354 #8B877A #B6AD98 #A59A80 #9E476F #E982AE #827C68 #85837A`. Metadata, muted and disabled ink moved to the green-gray family; `semantic.warning.ink` is now a vivid amber-orange; Marigold is `#A87B00`. SC-17 fails a build where any retired value still appears — including in a comment.
3. **Two product gradients were re-pointed.** CityWiki takes Cultivate Mist, ijji takes Ground Mist. The seven shared atmosphere recipes are byte-identical.
4. **Motion was re-tuned.** `reveal` 400ms → 640ms, travel 12px → 20px, stagger 60ms → 120ms capped at 600ms, and two new curves (`settle`, `press`). Reduced motion is one kill switch instead of per-token collapse.
5. **Icons are locked at `wght 300`.** `FILL 0 · wght 300 · GRAD 0 · opsz 24`, no second weight, no second icon font, no decorative SVG. `FILL 1` is for an active or selected state only. *(Superseded in v0.9.1: FILL stays 0 in every state — a fill change on selection is prohibited.)*

---

# What changed in v0.9.1 (read this if you built on v0.9.0-r7)

v0.9.1 is the first owner-approved release with a single authoritative tuple — `0.9.1 · 0.9.1-r8 · lds-rules-0.9.1 · v0.9.1-mp7`, approved 1 September 2026 — and it replaces prose-derived bytes with a signed machine package. In this folder that means:

 1. **`release.json` is the sole lifecycle and schema authority.** There is no Appendix E kit anymore; `build-kit/` here is the working projection of `machine/v0.9.1/tokens.v0.9.1.json`, and `color-srgb-05.production.css` is the only audience-safe color CSS. The four raw color-registry files are provenance-only — path and byte hash both denylisted from delivered files.
 2. **Five named sets.** Color `color-srgb-05` is **retained** — no color value changed, so all contrast evidence stands. Motion `motion-riddim-approach-02`, icon `icon-rounded-outline-01`, typography `type-script-aware-02` and layout `layout-cross-format-01` are new approved sets.
 3. **Riddim Approach Motion** replaces the v0.9.0 reveal: role-gated (five explicit roles), fail-open, played once — opacity `760ms` / transform `920ms` / media `900ms`, 32px block + 36px logical inline travel, scale from `.985`, four-beat `min(i,3)×150ms` stagger capped at `450ms`, observer threshold `.14` with a `2400ms` watchdog. Source HTML renders the final state; the first answer, proof and action are never reveal-hidden.
 4. **A tokenized once-only CTA discovery cue** — browser-only, primary navigational CTA, `540ms`/600ms ceiling, inline highlight sweep −120% → 120% at a 28% band, no cue under reduced motion.
 5. **Icons: FILL 0 in every state.** The v0.9.0 `FILL 1` selected-state is prohibited; selected is carried by surface, colour, label or an outline container. The two packaged subsets are self-hosted with recorded hashes in `assets/fonts/`.
 6. **Thai display leading `1.16` is deprecated** as a universal value; `1.25` is the safe fallback, and tighter leading needs a size+script stress-fixture pass.
 7. **Typed CTA destinations** — seven kinds (`anchor route external download form contact command`), format-specific static equivalents, label-pressure rules, and 44px targets in typed units (`css_px` browser / `platform_dp` native).
 8. **OUTPUT-CLARITY-01 is a release-wide hard gate**: workflow residue (approval status, rule/schema IDs, paths, validator text, placeholders) never ships to an audience; unresolved dependencies block delivery or stay internal preview instead of becoming caveats.
 9. **Receipt-based conformance replaces the SC table**: Discovery, Readability and Action each earn a hash-bound receipt, every resolved test passes, and exceptions are zero (`qa.exceptionIds: []`).
10. **Fonts and icon subsets are packaged and hash-verified**; identity may resolve as governed live-text typography when no role-approved logo asset exists, and non-web output selects one exact native font mapping with substitution forbidden.

Also new: the 23-row `[SELFCHECK-01]` binary self-check (SC-20–SC-23 were added in r7 for container fit, capsule padding, entrance visibility and icon anatomy inside actions), `[CONTAINER-FIT-01]`, `[REVEAL-01]`, and the `skeleton.html` page contract with its inline theme init and four `landometer:*` receipt metas.

---

# ijji DS Add-on (product layer on top of this system)

**ijji** — *Your business buddy around the corner* — is the Landometer product for small-shop owners: diagnose one local-business problem from the evidence that actually exists, then start achievable progress. Its design system is a **child** of this one: ijji owns its logo, motif family and the *selection* of LDS roles for identity; it owns no second palette, font stack, icon family, spacing, radius or motion system. Installed here as **ijji DS Add-on v0.5.3** (owner-authorized 2 September 2026) on ijji Design System v0.5.0 on LDS v0.9.1.

- Start at `addons/ijji/README.md`; resolve the release from `addons/ijji/ijji-asset-lock.json`; verify against `machine/ijji-ds-addon/v0.5.3/asset-manifest.json`.
- Load `styles.css`, then `addons/ijji/ijji.css`; scope with `data-product="ijji"`. Owner-facing answer / evidence / plan screens start from `templates/ijji-owner-answer/`.
- What ijji adds on top of LDS (never relaxes): one job · one dominant object · one answer/AHA · one primary capsule per page state; **label-first neutral evidence with no colored card-edge rail** (the kit's `.card--verified` rail is neutralised in ijji scope); `status.source.*` only for verified provenance with a visible label; the exact logo only as a large panel on direct `--brand-blue`, live-text product label everywhere else; **motion omitted by default**; fixture data is never shop truth; claims stop at `authoring_aligned`, and an ijji artifact never claims machine-package validation or full adoption.
- Per-project instruction text for consuming projects: `addons/ijji/PROMPT-SNIPPET.md`.
- **Motif** — `ijji.four-beat` rev 3, three marks (`graph-b` growing together, `rings-c` the neighbourhood read, `rotate-b` keeping on) measured off the logo's head proportions and adopted 4 September 2026 as an **ijji-owned** asset. Never a logo, never borrowed as a Landometer-wide indicator. Mint sits on Brand Blue (4.78:1) or dark (6.9–8.0:1), ink on light surfaces (14.5–16:1) and on the ijji gradient (11.4:1); the three canvas-framed files are restricted because mint measures 1.84:1 there, and `IjjiMotif` substitutes `transparent-ink` with a console warning. Its one sanctioned motion job is a working indicator bound to a real pending operation — `IjjiWorkingIndicator` carries the status in text with counted seconds and a real cancel; decorative looping stays unapproved until the motion set gains a named recipe.

---

# Release boundary (carry this forward)

Design System `0.9.1` · authoring revision `0.9.1-r8` · ruleset `lds-rules-0.9.1` · machine package `v0.9.1-mp7` · Token Schema `7` · Color Set `color-srgb-05` (retained) · owner approval recorded 1 September 2026. `machine/v0.9.1/release.json` is the sole lifecycle authority; Build Card schema `0.9.1.12`, Artifact Manifest `3.2`, rule catalog `1.6` and format packs `1.5` resolve from it — never from prose.

- **A package pass is never an artifact pass.** Every artifact made from this folder still resolves its own Build Card, experience profile, format kit, role-scoped assets, evidence and permissions, and earns `artifact_qa_passed` / `production_verified` from final-output receipts. **No artifact build ID is minted for this folder**; a build made from it mints its own.
- **Conformance is receipt-based with zero exceptions** (`qa.exceptionIds: []`): Discovery, Readability and Action each pass with a hash-bound receipt, plus every resolved test and acceptance. The v0.9.0 SC-01…23 self-score is retired.
- **OUTPUT-CLARITY-01 is a release-wide hard gate**: audience output never carries workflow residue — approval status, rule/schema/package IDs, local paths, validator text, placeholders, unfinished-work notes. Unresolved dependencies block delivery or stay internal preview; they never ship as caveats. A genuine limitation stays visible beside the affected claim, in audience language.
- **Thai display leading:** `1.25` is the safe fallback and this folder's declared value; `1.16` is deprecated as a universal value. Any tighter display leading needs a size-and-script stress-fixture pass before the typography gate can pass — the v0.9.0 fixture findings (deepest overlap 15px at display size) still argue against stacking a deep-descender word above a high stacked-mark word.
- **Measured evidence that stands:** Color Set `color-srgb-05` is retained byte-identical, so all seven atmosphere contrast floors and 14/14 semantic AA pairs in `guidelines/contrast-evidence.json` carry forward (solids measured 27 August 2026). That is a token-level floor, not device QA.
- The four raw color-registry files are provenance-only; both their paths and byte hashes are denylisted from delivered files. `color-srgb-05.production.css` is the only color CSS emission, and any other machine projection must be separately sanitized and verified.
- Fonts and the two icon subsets are packaged and hash-verified in `assets/fonts/` (`machine/v0.9.1/SHA256SUMS.txt`). Non-web output selects one exact native font mapping with substitution forbidden; a missing mapping blocks delivery.
- Identity: when no role-approved logo asset exists for a role, the governed canonical `Landometer` live-text identity with one exact typography binding is the approved implementation — the packaged logo PNG is source evidence, and asset approvals stay role-specific.
- For cross-device colour review, compare the same pinned immutable filename and record its build ID plus colour-registry hash **before** investigating displays or colour science. A mutable `latest` alias is a convenience, not evidence.
- Nothing in this folder authorises publishing, deployment, external messaging, analytics, remote mutation or any other external effect.

# ijji DS Add-on v0.5.3 — User-benefit-first Evidence and LDS v0.9.1 Alignment

**Status:** Owner-authorized compatible corrective successor; exact-byte acceptance remains pending live review  
**Authorized:** 2026-09-02  
**Supersedes:** evidence presentation, user-benefit hierarchy, parent-release binding, component contract and QA rules in v0.5.2  
**Retains:** all unchanged identity, product truth, evidence ceiling, privacy, capability, asset-rights, control hierarchy and immutable-release boundaries from v0.5.2, v0.5.1 and ijji Design System v0.5.0  
**Parent system:** Landometer Design System v0.9.1 (`0.9.1-r8`; owner-approved effective source)

> **Normative outcome:** หน้าจอ ijji ต้องช่วยให้เจ้าของร้านเข้าใจประโยชน์ คำตอบ หลักฐานที่มี ข้อจำกัด และก้าวถัดไปได้โดยไม่ต้องถอดรหัสสีหรือรูปแบบตกแต่ง. แถบสีที่ขอบ card ไม่ใช่ลำดับชั้นของข้อมูลและห้ามใช้เป็นตัวแทนความหมาย. งานต้องเริ่มจากหนึ่งประโยชน์ มีหนึ่ง AHA และหนึ่ง action ที่ตรงกับสิ่งที่ระบบทำได้จริง พร้อมใช้ Landometer DS v0.9.1 โดยไม่อ้าง machine package หรือ conformance เกินไฟล์ที่ได้รับจริง.

## 1. Authority และ release tuple `[IJJI-DSA-AUTH-03]`

v0.5.3 เป็น corrective successor ที่ compatible กับ v0.5.2. มันเปลี่ยนวิธีจัด hierarchy และวิธีตรวจงาน แต่ไม่เปลี่ยนข้อมูล อาการ การวิเคราะห์ หลักฐาน ความสามารถ product หรือสิทธิ์ใช้ asset.

ลำดับ authority ตาม domain:

1. Landometer DS v0.9.1 เป็นเจ้าของ shared visual, interaction, accessibility, format และ release rules.
2. ijji Design System v0.5.0 เป็นเจ้าของ product objects, AHA/evidence boundary, capability, identity scope และ ijji experience logic.
3. ijji DS Add-on เป็นเจ้าของ frontstage reading order, teaching specimens และวิธีทำให้กติกาข้างต้นนำไปใช้ได้จริง.
4. Build Card ของ artifact ระบุ one job, audience, format และสิ่งที่ใช้ใน release นั้น แต่ไม่มีสิทธิ์ override ข้อ 1–3.

Parent binding ที่ MUST resolve เป็น tuple เดียว:

```yaml
dsVersion: 0.9.1
authoringRevision: 0.9.1-r8
ruleset: lds-rules-0.9.1
machinePackageIdentity: v0.9.1-mp7
machinePackageDelivery: identity_only
normativeSource:
  sha256: 64f5d6277b557176502285bc65890ecc4c81faf4b97946eb5e3a2ef2c0d90d19
  status: owner_approved_effective_source
colorSet: color-srgb-05
```

`machinePackageIdentity` เป็นเพียง identity ที่เอกสาร owner-approved ระบุ. Official repository projection ที่ใช้เป็น authority ในงานนี้ **ไม่ได้ส่งมอบ bytes ของ machine package** และไม่ได้ให้สิทธิ์อ้างว่า package นั้นผ่าน validation. Implementation จึง MUST NOT:

- สร้าง schema, validator, receipt หรือ package bytes ขึ้นเองแล้วเรียกว่า `v0.9.1-mp7`;
- อ้าง `package_validated`, `artifact_qa_passed` หรือ `production_verified` เพียงเพราะ identifier ตรง;
- ใช้คำว่า “รองรับ v0.9.1 ครบถ้วน” เมื่อยังไม่มี exact package/receipt ที่จำเป็น;
- คัดลอก release identifier ไปแก้หลายจุดด้วยมือโดยไม่มี source record เดียว.

ภายใน ijji release ให้มี canonical release binding หนึ่งรายการ แล้ว derive เอกสาร manifest, build card, download metadata และ QA record จากรายการนั้น. หาก machine contract ที่ต้องใช้ยังไม่ถูกส่งมอบ ให้หยุด claim ที่เกี่ยวข้องและคงสถานะ public reference ตาม §9; ห้ามแสดง workflow residue ให้เจ้าของร้านรับภาระแทนทีม.

## 2. ประโยชน์ของผู้ใช้เป็นตัวตั้ง `[IJJI-DSA-BENEFIT-01]`

ทุก scene หรือ top-level specimen MUST ตอบตามลำดับนี้:

1. **เจ้าของกำลังพยายามรู้อะไร** — one job หรือ entry question หนึ่งเรื่อง;
2. **ตอนนี้รู้หรือเห็นอะไร** — one answer/first AHA ที่ไม่เกินหลักฐาน;
3. **อะไรทำให้ตอบเช่นนั้น** — evidence และ limitation ที่อ่านได้โดยไม่พึ่งสี;
4. **ทำอะไรต่อได้** — one primary action ที่มี outcome จริง;
5. **เมื่อไรถือว่าจบ** — clean completion หรือสิ่งที่จะทำให้เปลี่ยนข้อสรุป.

องค์ประกอบตกแต่ง MUST ผ่าน deletion test: หากเอาออกแล้วผู้ใช้ยังเข้าใจงาน หลักฐาน และ action เท่าเดิม ให้เอาออก. ความโดดเด่นของทีมสร้าง เวอร์ชัน hash rule ID หรือชื่อ component ห้ามมาก่อนประโยชน์ของเจ้าของร้าน. ข้อมูลเหล่านั้นอยู่ใน disclosure หรือไฟล์ดาวน์โหลดตาม `[OUTPUT-CLARITY-01]` และ `[IJJI-DSA-FRONTSTAGE-01]`.

หนึ่ง scene MUST มี primary reading path เดียว. ห้ามวาง card หลายใบด้วยน้ำหนักเท่ากันแล้วให้สีเป็นผู้บอกว่าควรอ่านอะไรก่อน. First view ต้องทำให้ผู้ใช้ตอบได้ภายในประมาณ 5 วินาทีว่า “หน้านี้ช่วยเรื่องอะไร” และภายในประมาณ 30 วินาทีว่า “รู้อะไรแล้ว ยังไม่รู้อะไร และทำอะไรต่อได้”.

## 3. Evidence ต้อง label-first และเป็นกลาง `[IJJI-DSA-EVIDENCE-VIS-01]`

### 3.1 กติกาหลัก

Owner-facing answer, owner-benefit block, evidence card และ teaching specimen MUST ใช้ **label-first neutral structure**:

```text
[label ที่บอกชนิดของข้อมูล]
[ข้อความจริงหรือคำตอบ]
[ข้อจำกัด/ผลต่อการตัดสินใจ เมื่อมี]
[action หรือ source route เมื่อจำเป็น]
```

ความสัมพันธ์ระหว่างรายการสร้างด้วย heading, order, spacing, alignment, grouping, neutral surface และ uniform hairline/default border. สีเป็นช่องทางรองเท่านั้นและเอาออกแล้วความหมายต้องยังอยู่ครบ.

### 3.2 ห้ามใช้ colored card-edge rail

ใน owner-facing answer/evidence และ teaching specimens:

- MUST NOT ใช้ `brand.*`, `energy.*`, `interaction.*`, `semantic.*`, `status.source.*`, product gradient หรือ authored color เป็นแถบที่ขอบซ้าย ขวา บน หรือล่างของ card เพื่อบอก hierarchy, category, confidence, reasoning stage หรือความสำคัญ;
- MUST NOT ใช้ full-height/full-width colored rail, inset stripe, pseudo-element stripe หรือ border หนา แม้มี text label ร่วมด้วย;
- MUST NOT เปลี่ยน rail จากสีหนึ่งเป็นอีกสีหนึ่งเพื่อ “แก้” ปัญหาเดิม;
- MAY ใช้ `border.hairline` หรือ `border.default` แบบ neutral และสม่ำเสมอรอบ component เมื่อช่วยแยกพื้นที่จริง;
- SHOULD ใช้พื้นที่ว่างและลำดับข้อความก่อนเพิ่มกรอบ; หาก surface เพียงพอ กรอบ MAY ถูก omit.

ข้อห้ามนี้ครอบคลุมตัวอย่างที่ผู้ใช้วงไว้: benefit panel และกลุ่ม “สิ่งที่บันทึกไว้ / เจ้าของระบุ / ยังไม่มี” ต้องไม่ใช้แถบสีขอบ card เป็นตัวบอกความหมาย.

### 3.3 การใช้ `status.source.*`

`status.source.*` เป็น role สำหรับ **provenance ที่ตรวจยืนยันแล้ว** เท่านั้น ไม่ใช่สีสำหรับ generic reasoning, task lane, owner statement, missing-data bucket, stage, priority หรือ decoration.

เมื่อใช้ MUST มีครบทุกข้อ:

- record มี governed provenance field ที่ยืนยันสถานะนั้นจริง;
- มี visible text label ที่บอกความหมาย เช่น “แหล่งข้อมูลตรวจสอบแล้ว”;
- มี semantic/programmatic name ที่เทียบเท่า;
- สีไม่ใช่ช่องทางเดียวและไม่เปลี่ยนน้ำหนักหลักฐาน;
- แสดงเป็น marker/label ที่จำกัดพื้นที่ ไม่ใช่ card-edge rail.

ถ้ายังไม่มี verified provenance record ให้ใช้ข้อความธรรมดาและ neutral structure; ห้ามเดา token จากชื่อกลุ่ม. Role อื่นใน source-status registry MAY ปรากฏใน Color Atlas เพื่ออธิบายแหล่งที่มา แต่ไม่ถือว่าได้รับอนุมัติให้ใช้กับ generic owner-facing case.

## 4. Color Atlas และ color ownership `[IJJI-DSA-COLOR-03]`

LDS v0.9.1 คง `color-srgb-05`; ไม่มี normative color value เปลี่ยนจาก v0.9.0-r7. ijji จึง MUST ไม่สร้าง palette ใหม่และ MUST คง **Applied Color Atlas 102 roles** ที่ใช้ใน implementation โดยอัปเดต authority และข้อความอธิบายให้ตรง v0.9.1. LDS v0.9.1 ยังเผยแพร่ public color reference ที่มี analytical coverage ตาม inventory ใน section นี้แยกต่างหาก; ijji MUST ส่งต่อ exact bytes และห้ามลดทอนหรือเรียกมันว่า ijji evidence.

ขอบเขตการอ้าง:

```yaml
atlasScope: ijji_applied_implementation_view
evidenceStatus: source_limited
recordCount: 102
colorSet: color-srgb-05
normativeColorValuesChangedFromV090R7: false
completeAtlasClaim: false
rawMachinePackageDelivered: false
parentPublicReference:
  tokensSha256: 00863492782b2fb1f93e6229f644fa0c092bde0e8c5d1093619c3120d73a71fc
  scalesSha256: daf8e5219f1da9229d7fb474fdaba3957f37c0cfe18eef7527e551c37d88d235
  colorDeliverySha256: 09cf3fe9d8926c58b1155bf2ef9e6ce57f74156e89c7ab2ac2ae16c2f525ca30
  analyticalScales: 18
  lutCells: 738
  classCells: 378
  machinePackageDelivery: identity_only
```

Public reference MUST แยกสองชั้น:

1. **Applied Color Atlas** — แสดง 102 roles ที่ช่วยงาน ijji จริงก่อน เช่น identity, action/focus, neutral reading surface, verified state/provenance และ data encoding ที่มี authority พร้อมบอก user job ของแต่ละ role; เป็น implementation view และไม่ใช่ Complete Atlas claim;
2. **LDS public color reference** — ส่งต่อ exact `tokens.json`, `scales.json` และ `color-delivery.v0.9.1.json` พร้อม hash และ inventory ที่ตรวจได้. ชุดนี้ไม่อ้าง Complete Atlas หรือ `v0.9.1-mp7` machine package และไม่ใช่ ijji product evidence หรือ Locale Insight evidence.

Runtime/UI MUST resolve governed semantic role จาก exact pinned projection หรือ audience-safe production projection. ห้ามฝังค่าสีใหม่ใน registry, sample สีจาก logo, คำนวณ LUT เอง หรืออ้าง raw v0.9.1 machine-package files ที่ไม่ได้ส่งมอบ. `brand.blue` ใช้ใน approved identity context; `interaction.*` ใช้กับ action/focus; `semantic.*` ใช้กับสถานะที่มี label/icon redundancy; `series.*` ใช้เมื่อมีข้อมูลจริงและ scale/legend ครบ. สีทุก use MUST ผ่าน contrast ใน light/dark และ color-off reading test.

## 5. One job, one AHA, one action `[IJJI-DSA-PATH-01]`

Build Card และ rendered route MUST ระบุและทำให้เห็น:

- one primary job;
- one dominant object;
- one first AHA หรือ truthful pre-AHA answer;
- one primary action พร้อม outcome จริง;
- one next useful action ที่ hierarchy ต่ำกว่า;
- one clean completion;
- evidence boundary ที่อยู่ใกล้ claim/action ที่มันจำกัด.

หนึ่ง active page state มี primary capsule action ได้หนึ่งอัน. First viewport มี at most one quiet secondary link และเมื่อ settings ปิด visible focusable targets ใน header/hero รวมไม่เกินสี่ตาม v0.5.2. ห้ามใช้สีหรือ motion ทำให้ action รองดูเป็น action หลักซ้อนกัน.

Public/client output MUST เป็น `resolved_only`: ส่งเฉพาะ content, state, material limitation และ action ที่พร้อมใช้. Approval workflow, local path, validator text, TODO/TBD, placeholder, internal release state และ machine identifiers ที่ไม่ช่วยงานผู้ใช้ MUST อยู่ใน internal record. ในหน้า DS reference MAY เปิดเฉพาะ release identifier/schema example ที่ purpose และ authority อนุญาต และต้องอยู่หลัง frontstage answer.

## 6. Controls, icons และ typography ของ v0.9.1 `[IJJI-DSA-PRIMITIVE-03]`

### 6.1 Direct control geometry

Control ต้องเลือกจาก `user job → control kind → governed component → rendered test`:

| งาน | Geometry | เกณฑ์ขั้นต่ำบน browser |
|---|---|---:|
| text หรือ icon+label action | capsule | สูง 44 CSS px ทุก state |
| icon-only action | circle | 44 × 44 CSS px และมี accessible name |
| segmented selector | outer `radius-sm`; option ไม่ใช่ pill ลอย | target แต่ละ option 44 × 44 CSS px |
| tab/step | tab/selector geometry + semantics | direct target 44 × 44 CSS px |
| field | `radius-sm` + label/state | direct target สูง 44 CSS px |
| disclosure | semantic summary; ไม่ masquerade เป็น CTA | direct target สูง 44 CSS px |

ห้ามใช้ proxy click-forward เพื่อขยาย target. Measurement ต้องอ่าน computed geometry ของ semantic element จริงในทุก state, locale, width และ zoom/reflow fixture.

### 6.2 Icons

Interface icons MUST มาจาก approved rounded-outline subset และคง:

```yaml
FILL: 0
wght: 300
GRAD: 0
opsz: match_rendered_size
```

Selected/current state ใช้ semantic surface, color, visible label หรือ outline-container; ห้ามเปลี่ยน glyph เป็น FILL 1 หรือเพิ่ม weight. Icon ไม่แทน label เมื่อ intent กำกวม และห้าม redraw logo ให้เป็น interface icon.

### 6.3 Script-aware Thai

Thai และ Latin MUST ใช้ role/family จาก `type-script-aware-02` และทดสอบต่อ size/role/output. ค่า line-height 1.16 ห้ามใช้เป็น universal Thai rule.

- ถ้ามี approved size/script fixture ให้ใช้ค่าที่ fixture นั้นผ่าน;
- ถ้ายังไม่มี fixture ให้ใช้ **1.25 เป็น safe fallback** เพื่อเลี่ยง clipping/collision;
- การใช้ 1.25 fallback ไม่ได้ทำให้ typography gate ผ่านเอง; conformance ของ artifact ยังคงไม่สูงกว่า `authoring_aligned` จนมี fixture receipt;
- ห้ามบีบ line-height, letter-spacing หรือ glyph scale เพื่อยัด copy;
- ทดสอบ Thai ที่ 130%, 200% zoom/reflow, fallback load และ light/dark.

## 7. Semantic component contracts `[IJJI-DSA-COMPONENT-01]`

Reusable component ทุกตัว MUST มี stable component ID และ contract ที่ตรงกับ implementation inventory หนึ่งต่อหนึ่ง. หน้าตาคล้ายกันไม่ทำให้ component แทนกันได้เมื่อ intent, consequence หรือ evidence role ต่างกัน.

Contract ขั้นต่ำ:

1. purpose และ non-purpose;
2. semantic element/landmark;
3. content slots, source refs และ locale stress state;
4. states ที่เกิดจริง; state ที่ไม่เกิดระบุ `not_applicable` พร้อมเหตุผล;
5. responsive, reflow, print/export behavior;
6. accessible name, role, value, order และ status;
7. governed token mapping;
8. evidence/permission boundary;
9. acceptance fixtures;
10. anti-patterns รวม colored card-edge rail.

Component เฉพาะชุด evidence อย่างน้อย MUST แยก contract ดังนี้:

| Component | Purpose | MUST | MUST NOT |
|---|---|---|---|
| `ijji.owner-benefit-answer` | ทำให้เห็นประโยชน์/คำตอบแรก | label → answer → limit/next step; neutral hierarchy | brand/interaction/semantic/source rail |
| `ijji.evidence-fact` | แสดง fact หนึ่งรายการ | evidence-kind label, value, source/limit route | ใช้สีแทน kind/certainty หรือให้ card ทั้งใบเป็น status |
| `ijji.provenance-label` | บอก provenance ที่ verified | visible + programmatic label; bounded marker | generic reasoning/task label หรือ full-edge rail |
| `ijji.evidence-group` | ทำให้เห็น recorded / stated / missing relation | heading/order/gap/neutral separation | peer cards ต่างสีโดยไม่มี reading order |
| `ijji.primary-action` | พาผู้ใช้ทำ one primary action | capsule, 44px, outcome/recovery | motion/decorative color แทน affordance |

AI MUST ไม่สร้าง component ใหม่จาก visual resemblance เพียงอย่างเดียว. ถ้าหา semantic contract ไม่เจอ ให้หยุดใช้ component นั้นหรือสร้าง contract ที่ครบก่อน render โดยไม่ขยาย product truth.

## 8. Motion decision `[IJJI-DSA-MOTION-01]`

Public `methodology_learning + web_public` utility reference ของ DS Add-on v0.5.3 ใช้ explicit decision:

```yaml
motionDecision: omitted
motionCapabilityDeclared: false
reason: Static hierarchy already makes the answer, evidence and action discoverable; motion adds no necessary user benefit.
reducedMotionEquivalent: identical_static_final_state
```

MUST ไม่มี decorative reveal, shimmer, pulse, looping attention cue, broad “animate every card” selector หรือ transition ที่ทำให้ evidence ดูมี certainty/progress เพิ่มขึ้น. First answer, primary proof และ primary action ต้องเห็นและใช้ได้ใน initial HTML โดยไม่รอ animation.

Necessary state feedback เช่น focus, pressed, loading หรือ disclosure state MAY ใช้ governed interaction behavior ที่ไม่ประกาศเป็น motion enhancement. หาก release ถัดไปต้องการ CTA discovery cue หรือ approach motion ต้องมี user-benefit record, motion capability/config/fixtures, final-state fallback และ approval ใหม่; ห้ามเปิดใช้เพราะ “ดูน่าสนใจขึ้น”.

## 9. Public profile และ claim ceiling `[IJJI-DSA-PROFILE-02]`

หน้า teaching reference นี้เลือก experience profile `methodology_learning` และ output format profile `web_public`. การเลือกนี้เป็น artifact-local resolution จาก human normative master เพราะ official repository ยังไม่ส่งมอบ mp7 schema bytes. จึงต้องประกาศอย่างซื่อตรง:

```yaml
experienceProfile: methodology_learning
outputFormatProfile: web_public
pageKind: utility_reference
conformanceLevel: authoring_aligned
fullDesignsystemAdoptionClaim: false
machinePackageDelivery: identity_only
machinePackageValidationClaim: false
exactLiveOwnerAcceptance: pending
```

Product, Design และ Engineering เป็น intended audiences ของ reference ไม่ใช่ owner-approved organization-role registry. Artifact นี้ไม่เลือก `adoption_change` จึงไม่ดึง photography หรือ role-roster gates มาเป็น universal requirement. `authoring_aligned` หมายถึง source/build records จัดตาม human authority เท่าที่ได้รับ; ไม่เท่ากับ package, artifact หรือ production conformance. หน้า owner-facing ห้ามแสดงคำว่า pending เป็น workflow disclaimer; สถานะเหล่านี้อยู่ใน technical reference/receipt ตาม purpose ที่อนุญาต.

## 10. วิธี implement สำหรับคนและ AI `[IJJI-DSA-BUILD-03]`

ทั้งคนและ AI MUST ทำตามลำดับ:

1. resolve parent tuple จาก canonical binding และตรวจ source SHA-256;
2. resolve ijji DS, DS Add-on, governed fixture, product capability และ asset rights;
3. เขียน one job, AHA/pre-AHA, primary action, next action และ clean completion;
4. สร้าง reading order จาก user benefit ก่อนเลือก surface/card;
5. จัด evidence ด้วย label-first neutral structure; ลบ colored card-edge rail ทั้ง source, pseudo-element และ computed output;
6. map สีจาก semantic role; ตรวจว่า `status.source.*` ใช้เฉพาะ verified provenance พร้อม label;
7. inventory ทุก reusable component และ bind semantic contract;
8. ใช้ 44px direct control geometry, FILL 0 icon และ script-aware typography;
9. บันทึก explicit no-motion decision;
10. render TH/EN, light/dark และ viewport/reflow matrix; ตรวจ computed output ไม่ใช่เชื่อ class/token name;
11. ส่ง source refs, screenshots, control/component inventory, QA records และ immutable release manifest;
12. publish ด้วย successor ID ใหม่ โดยไม่แก้ bytes ของ historical release.

AI MUST omit สิ่งที่ไม่มี authority แทนการเดา และ MUST NOT แปลง missing evidence เป็น zero, suggestion เป็น diagnosis, teaching fixture เป็น product proof หรือ version identity เป็น conformance claim.

## 11. QA checklist `[IJJI-DSA-QA-03]`

### 11.1 Automated / structural

- [ ] Parent tuple และ source hash ตรง §1 ทุก output record.
- [ ] ไม่มีการอ้างว่ามี bytes หรือ validation ของ `v0.9.1-mp7`; delivery คือ `identity_only`.
- [ ] one job, dominant object, AHA/pre-AHA, primary action, next action และ completion resolve อย่างละหนึ่ง.
- [ ] reusable component inventory เท่ากับ semantic contracts แบบ exact set; ไม่มี missing/extra/duplicate.
- [ ] owner-benefit/evidence/teaching selectors และ pseudo-elements ไม่มี colored edge rail; border ที่ใช้เป็น neutral uniform hairline/default.
- [ ] `status.source.*` ทุก use resolve verified provenance record และมี visible + programmatic label.
- [ ] ijji Applied Color Atlas มี 102 roles, `color-srgb-05`, `completeAtlasClaim: false`; LDS public reference files ตรงสาม hash ใน §4 และไม่มี local color value/LUT ที่สร้างเอง.
- [ ] direct control ทุก state มี semantic target จริง ≥44 × 44 CSS px ตามชนิด; text action เป็น capsule, icon-only เป็น circle.
- [ ] interface icon ทุก state คง FILL 0 / wght 300 และ glyph อยู่ใน approved subset.
- [ ] ไม่มี universal Thai line-height 1.16; fallback ที่ไม่มี fixture ใช้ 1.25 และไม่ยก conformance เอง.
- [ ] `motionDecision: omitted`, motion capability ปิด และไม่มี authored decorative animation/observer assignment.
- [ ] audience output scan ไม่พบ workflow residue, placeholder, local path, validator text หรือ unapproved machine identifier.
- [ ] historical release path/hash ไม่เปลี่ยน และ successor ID ไม่ซ้ำ.

### 11.2 Rendered / human review

- [ ] ที่ viewport เดียวกับภาพปัญหา owner benefit และ evidence group ไม่มีแถบสีขอบ card; ผู้ใช้ยังแยก “รู้แล้ว / เจ้าของบอก / ยังขาด” ได้จาก label และ order.
- [ ] squint test เห็น answer/AHA ก่อน card frame; card หลายใบไม่แข่งกันด้วยสี.
- [ ] color-off/grayscale view รักษา category, provenance, state, hierarchy และ action.
- [ ] Applied Color Atlas อธิบาย user job ของสี; LDS public reference แสดง scope/count/hash และไม่ปะปนกับ mp7, ijji หรือ Locale evidence.
- [ ] first view ตอบ one job ใน ~5 วินาที และ answer/evidence/action ใน ~30 วินาทีในการ review กับคนที่ไม่ได้อ่าน rule IDs.
- [ ] TH/EN เขียนตามความหมายของแต่ละภาษา; Thai ไม่มี clipping/collision ที่ normal, 130% และ reflow equivalent.
- [ ] light/dark, 320/390/768/1440 และช่วงระหว่าง breakpoint รักษา order, contrast และไม่เกิด rail จาก responsive override.
- [ ] keyboard, focus, touch, disclosure/tab semantics, reduced motion, no JavaScript และ 200% zoom/400% reflow ตาม applicable profile ผ่าน.
- [ ] first answer/proof/action อยู่ใน initial visible state; ไม่มี animation หรือ technical disclaimer ขวาง AHA.
- [ ] limitation อยู่ใกล้ claim ที่มันจำกัดและอธิบายผลต่อการตัดสินใจ; ไม่มี generic disclaimer band.

### 11.3 Release evidence

- [ ] เก็บ before/after screenshot ที่ viewport/theme/locale เดียวกัน พร้อมระบุว่าความจริงและ evidence record ไม่เปลี่ยน.
- [ ] control report แยก geometry จาก hierarchy; component report แยก semantic contract จาก visual match.
- [ ] color report ระบุ role count, source binding, theme resolution, contrast และ color-off result.
- [ ] QA record บอกสิ่งที่ตรวจจริง; คำว่า pass ใน prose ไม่ใช้แทน receipt.
- [ ] ตรวจ returned live bytes เทียบ immutable release bytes ก่อนสร้าง deployment receipt.
- [ ] exact-live owner acceptance ยังเป็น pending จน owner ตรวจ URL/bytes ที่เผยแพร่แล้ว.

## 12. Release acceptance `[IJJI-DSA-RELEASE-03]`

Successor ผ่านขอบเขตของ v0.5.3 เมื่อ:

- ใช้ release ID และ asset package ID ใหม่; prior release bytes ไม่เปลี่ยน;
- normative, implementation, public page, Atlas metadata, build card และ QA ใช้ parent tuple เดียว;
- colored card-edge rail ถูกลบจาก owner benefit, evidence และ teaching specimens โดยไม่ลดความเข้าใจ;
- label-first neutral evidence, one job/AHA/action และ resolved-only output ผ่าน rendered review;
- Applied Color Atlas คง 102 roles ของ `color-srgb-05`; LDS public color reference ถูกส่งต่อครบตาม exact hashes และไม่ claim machine completeness;
- direct control, FILL 0 icon, script-aware Thai, semantic component contracts และ explicit no-motion decision ผ่าน checks ที่ applicable;
- public profile ใช้ `methodology_learning + web_public / utility_reference / authoring_aligned`, ไม่อ้าง full adoption หรือ machine-package validation;
- product truth, evidence ceiling, capability/availability false states, synthetic-fixture boundary, logo scope และ asset rights ไม่ถูกขยาย;
- live successor มี exact-byte deployment receipt; owner acceptance ของ exact live bytes บันทึกภายหลังเท่านั้น.

## 13. Compatibility

v0.5.2 และ release ก่อนหน้าคงเป็น immutable approved history. v0.5.3 ไม่ rename canonical product/evidence schema หรือ normative rule ID เดิม ไม่เปลี่ยน ijji identity หรือ product behavior และไม่ถอน Color Set. Artifact-local playground schema MAY ขยับเพื่อบันทึก profile model ของ v0.9.1 โดยไม่เปลี่ยนข้อมูลจริง. รุ่นนี้แก้ปัญหาที่เห็นใน rendered output โดยตรง: เลิกใช้สีที่ขอบ card เป็นภาษาลัด, คืน hierarchy ให้ประโยชน์และข้อความ, เพิ่ม semantic component contract และย้าย shared authority ไป LDS v0.9.1 อย่างซื่อตรงตามขอบเขตที่ส่งมอบจริง.

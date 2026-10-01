# ijji product website

เว็บไซต์ภาษาไทยและ English sibling ของ **ijji — Your business buddy around the corner** สำหรับเจ้าของร้านอาหาร คาเฟ่ และธุรกิจอาหารที่มีหน้าร้าน

- Live: <https://montri-th.github.io/ijji/>
- Thai canonical: <https://montri-th.github.io/ijji/ijji-TH.dc.html>
- English canonical: <https://montri-th.github.io/ijji/ijji-EN.dc.html>
- Prepared successor: `ijji-web-20260930-r10` (publication pending)
- Current published release: `ijji-web-20260909-r9`
- Stack: static HTML + self-hosted runtime, fonts, imagery, and Landometer Design System assets

## Current authoring · LDS 0.9.7

For Story supporting colours and analytical scales, including Location Intelligence, use the released original HEX, lookup tables and role colours unchanged on both light and dark surfaces. Do not generate an automatic dark palette for these sets. Foundation UI and categorical colours follow the released theme rules.

New design authoring uses two human- and machine-readable design files: the **[complete LDS 0.9.7 base](https://montri-th.github.io/Landometer/v0.9.7/normative/Landometer-Design-System-v0.9.7.md)** and the **[separate ijji Add-on 0.5.5](https://montri-th.github.io/Landometer/v0.9.7/normative/ijji-Add-on-v0.5.5-for-LDS-v0.9.7.md)**. The base owns all shared rules and exact machine tokens/scales; the Add-on owns ijji DS 0.5.2 / Add-on 0.5.5 product rules without duplicating the base. JSON alternatives are available from the [download page](design-system/index.html); a product Project Source needs the two Markdown files.

Follow the [source policy](design-system/source-policy.json). The former eight-LDS-files setup and combined product/base proposal are cancelled for new work. Remove or deactivate conflicting old design sources in ChatGPT/Claude projects, retain factual product/evidence/rights sources, and point Project Instructions to the current base plus ijji Add-on. Verify source access in a new session; uploading alone does not activate a plugin or the whole team.

The historical normative chain and ZIP remain byte-identical for audit. Their old installation prose is superseded by the current source policy. The exact [motif registry and SVGs](assets/motifs/ijji-four-beat-selected-3-r3/family-record.json) retain their approved asset scope.

The current authoring source uses LDS 0.9.7 / color-srgb-10, standalone-0.9.7-r1. The existing landing runtime remains pinned to LDS 0.9.5 / color-srgb-08; no runtime color or motion asset changes are included in this source-guidance update.

The site keeps its historical structural CSS for layout compatibility and loads the byte-identical LDS 0.9.5 build-kit and color projection after it. The color bridge sets analytical and categorical aliases by explicit theme. The old `_ds` JavaScript bundle and unapproved inline/looping four-beat motif route are inactive; the approved finite ijji logo identity stays. Selected navigation uses restrained fill and type weight, without a bracket or colored edge rail.

Run `python3 scripts/verify-r10.py` on this branch. Inspect actual Thai/English pages at narrow and desktop widths and light/dark themes before publishing; package checks and static checks do not establish browser or live deployment QA. `scripts/verify-r9.py` and the r9 release record remain historical checks for the original r9 tag.

The sections below describe the historical r9 release and its original evidence.

## r9 mark-only identity correction

r9 เปลี่ยน browser-tab favicon ทั้ง 32px และ 192px รวมถึงโลโก้ ijji ในหัวตารางเปรียบเทียบของทั้งสองภาษา ให้ใช้เครื่องหมายแบบ **mark-only ไม่มี tagline** ตัวเดียวกับที่อยู่ในชุด animated identity ที่เจ้าของเลือก โดยอ้างอิง asset `ijji.logo-sting.mark` จาก Landometer Motif Library 1.2.1 แบบระบุ release และ commit ตายตัว

ต้นฉบับคือ `assets/ijji/logo-sting/layers/ijji-mark-still.png` ขนาด 849×840, 110,298 bytes และ SHA-256 `acac2c65b1a17c1956686c3fdbb2a0a6dc3c547c35be1ca128675d28b0ffc630` การสร้าง rendition ทำเพียงวางต้นฉบับที่ `(0,4)` บน canvas โปร่งใส 849×849 แล้ว resize ตามสัดส่วนด้วย premultiplied-alpha LANCZOS ไม่มีการ crop, วาดใหม่, เปลี่ยนสี, sharpen, ใส่ backing plate หรือบิดรูป

- 32px: `ijji-favicon-animated-mark-32-r9-ba9ac2db8984.png` — SHA-256 `ba9ac2db8984a0c0fcef4afa54776b7f2f42440c0e84696fcc73968ab684c7ab`
- 192px: `ijji-favicon-animated-mark-192-r9-9a647451f72f.png` — SHA-256 `9a647451f72f0c112a50481f614c884866c2d5edb23c34c1b916cf5166800a96`

การใช้ 32px ต่ำกว่าขนาดส่งมอบขั้นต่ำ 160px ของ asset ต้นฉบับ และ browser chrome/หัวตารางอาจวางเครื่องหมายบนพื้นสว่างหรือมืด ซึ่งขยายจากขอบเขตพื้น brand-blue/dark เดิม เจ้าของอนุมัติข้อยกเว้นทั้งสองนี้เฉพาะเว็บไซต์ r9 เท่านั้น จึงไม่ใช่การแก้หรือขยาย Landometer Design System, ijji Design System หรือ Motif Library ร่วม

## Rejected legacy mark and history boundary

เครื่องหมาย flat-mint จาก r4 ถูกเจ้าของปฏิเสธและห้ามนำกลับมาใช้ ไฟล์ภาพของชุดนั้น รวมถึง r9 candidate ที่คัดลอก bytes เดิม, rendition r5 ที่ถูกแทนที่ และ generator ที่สามารถสร้าง rendition r5 ซ้ำ ถูกถอดออกจาก branch tip ของ r9 และบันทึก hashes ที่ห้ามใช้ไว้ใน `assets/identity/ijji-favicon-r9.json` โดยไม่แก้ไข tag หรือ bytes ของ release ที่เผยแพร่ไปก่อนหน้า ส่วน provenance JSON เดิมเก็บไว้เป็นหลักฐานแบบ inactive เท่านั้น

สำเนา loose legacy บน Google Drive ที่พบสองไฟล์ถูกลบสำเร็จเมื่อ 9 กันยายน 2026 เวลาเขต Asia/Bangkok:

- `icon__ijjiLogo.png` — file ID `1dnidyeNor2wSzeMoYmPHyLHnVcvK8Ys5`
- `ijjiLogo.png` — file ID `1tzQMyTeLB0mbrN50fg4Tyv7YHDZeVviw`

การค้นหา image ด้วยคำว่า `ijji` หลังลบไม่พบ file ID ทั้งสองรายการ โดยผู้ให้บริการไม่ได้ส่ง delete timestamp กลับมา

## Animated heroes and preserved r8 experience

LINE ทั้งสามจุดต่อภาษา รวม 6 จุด ยังคงใช้ `line-line` silhouette ของ Remix Icon v4.9.1 ที่ 20px และ `currentColor` แบบเดียวกับ r8 โดยไม่มีการเปลี่ยนข้อความ ปลายทาง ลูกศร external-link หรือ accessible name ไอคอนนี้เป็น third-party social glyph ไม่ใช่ไฟล์ที่ LINE จัดหา และไม่ได้สื่อว่า LINE รับรองการใช้งาน

English hero ยังคง `ijji.logo-sting.r3` แบบเต็มพร้อม tagline จาก Landometer Motif Library 1.2.1 เล่นครั้งเดียว 9 วินาที แล้วค้างที่ภาพสมบูรณ์ พร้อม Pause/Resume/Replay และ exact fallback สำหรับ loading, reduced motion, no JavaScript, print และ dependency failure ตาม r8 ส่วน r9 เปลี่ยน Thai hero จากภาพนิ่งเป็น animated logo ชุดเดียวกัน พร้อมปุ่มภาษาไทยและ lifecycle เดียวกัน การแก้ mark-only ของ favicon/หัวตารางไม่ได้ถอด tagline ออกจาก hero ทั้งสองภาษา

แพ็กเกจ `ijji motif asset with guide.zip` ที่เจ้าของส่งเพิ่มมี SHA-256 `516e0e510a8c7a775c8e3c05647273d28cd56f6aad1f23a712ab82a2f3cd8f38` และยืนยัน bytes ของ four-beat motifs ที่หน้าใช้อยู่กับ Motif Library 1.2.1 แต่แพ็กเกจไม่มีไฟล์โลโก้ จึงบันทึกเป็น corroborating motif source เท่านั้น ไม่อ้างเป็นต้นทางของ favicon หรือ animated hero logo

## Claim boundary

ราคาเริ่มต้นใน comparison table เป็นข้อเท็จจริงที่เจ้าของระบุ ไม่ใช่ราคาอ้างอิงที่ตรวจยืนยันจากผู้ให้บริการ:

- AI ทั่วไป 700 บาท/เดือน
- dashboard ข้อมูล 20,000 บาท/เดือน
- ที่ปรึกษา 200,000 บาท/เดือน
- ijji 29 บาท/คำถาม พร้อมทดลองใช้ฟรีในขณะนี้

เนื้อหาทั้งสี่รายการตรงกับ r8 ทุกไบต์ เจ้าของยืนยันทั้งสี่รายการสำหรับ r8 ในวันเดียวกัน และหลังจากระบุ gate นี้แล้วได้สั่งเผยแพร่ r9 อีกครั้ง จึงบันทึกเป็นการยืนยัน r9 บนฐานข้อความเดิมโดยไม่มีการแก้ claim (ไม่ได้อ้างว่าเจ้าของพิมพ์ราคาทั้งสี่ซ้ำในข้อความล่าสุด)

## Verification status

- Parent Landometer Design System 0.9.1 verifier: ผ่าน 5,394 checks และ 103 checksums
- ijji Design System 0.5.0 / Add-on 0.5.3 resolver: ผ่าน 1,421 checks
- Static r9 verifier ผ่านบน published byte set; live favicon และ comparison-header browser QA ผ่าน 28/28; live Thai/English animated-hero QA ผ่าน 62/62 พร้อมภาพหลักฐาน 20 ภาพ
- LINE browser QA 22/22 จาก r8 ยังใช้เป็นหลักฐานของ implementation ที่ไม่ได้เปลี่ยน; English hero baseline จาก r8 ใช้เป็น reference และ Thai hero มีผลทดสอบ r9 ใหม่แล้ว
- Open manual gates: การแสดง favicon ใน native browser chrome หลังเปิดหน้าใหม่ และ physical iPhone Safari / embedded WKWebView

## Provenance and integrity

ขอบเขต r10 และ owner authorization อยู่ใน [`release.json`](release.json); r9 เดิมอยู่ใน [`releases/ijji-web-20260909-r9.json`](releases/ijji-web-20260909-r9.json) รายละเอียด source, transform, ข้อยกเว้นเฉพาะ artifact, asset tombstone และ Drive cleanup อยู่ใน [`assets/identity/ijji-favicon-r9.json`](assets/identity/ijji-favicon-r9.json) ส่วน [`SHA256SUMS.txt`](SHA256SUMS.txt) เป็น byte ledger ของ release files ทั้งหมด ยกเว้นตัว ledger เอง การอ้างอิง ijji และ parent LDS เป็น `authoring_aligned` เท่านั้น ไม่ใช่ full machine-package หรือ production-device conformance

## Local preview

Serve directory นี้ผ่าน static HTTP server แล้วเปิด `/ijji-TH.dc.html` หรือ `/ijji-EN.dc.html` ไม่ต้องมี build step และไม่รองรับ direct `file://` เพราะหน้า English import local motif module

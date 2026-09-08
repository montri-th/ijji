# ijji product website

เว็บไซต์ภาษาไทยและ English sibling ของ **ijji — Your business buddy around the corner** สำหรับเจ้าของร้านอาหาร คาเฟ่ และธุรกิจอาหารที่มีหน้าร้าน

- Live: <https://montri-th.github.io/ijji/>
- Thai canonical: <https://montri-th.github.io/ijji/ijji-TH.dc.html>
- English canonical: <https://montri-th.github.io/ijji/ijji-EN.dc.html>
- Current published release: `ijji-web-20260909-r8`
- Previous published release: `ijji-web-20260908-r7`
- Stack: static HTML + self-hosted runtime, fonts, imagery, and Landometer Design System assets

## r8 release

r8 เปลี่ยนสัญลักษณ์ในลิงก์ LINE ทั้งสามจุดของแต่ละภาษา รวม 6 จุด ให้เป็น `line-line` silhouette ของ Remix Icon v4.9.1 ที่ 20px และ `currentColor` ผ่าน inline SVG เพื่อให้ขนาด สี และน้ำหนักภาพเข้าชุดกับ Facebook และ TikTok โดยไม่เปลี่ยนข้อความ ปลายทาง ลูกศร external-link หรือ accessible name เดิม

ไอคอนนี้เป็น third-party social glyph ไม่ใช่ไฟล์ที่ LINE จัดหา และไม่ได้สื่อว่า LINE รับรองการใช้งาน เจ้าของสั่งให้ใช้ minimal treatment นี้หลังรับทราบข้อจำกัดของแนวทาง LINE แล้ว ไฟล์ LINE Brand Icon ทางการเดิมยังคงอยู่เพื่อ provenance และประวัติ release แต่ไม่มี active reference ใน HTML ของ r8

ไฟล์ Remix SVG, provenance และ license สามไฟล์นำมาใช้ซ้ำแบบเจาะจงจาก candidate `ijji-web-20260904-r6` ที่ไม่เคยเผยแพร่ การเปลี่ยน motif และงานอื่นทั้งหมดจาก candidate นั้นไม่ถูกรวมใน r8

## Animated hero identity

English hero คง `ijji.logo-sting.r3` แบบเต็มพร้อม tagline จาก Landometer Motif Library 1.2.1 ตามที่เจ้าของอนุมัติ เล่นครั้งเดียวเมื่อมองเห็นอย่างน้อย 14% เป็นเวลา 9 วินาที แล้วค้างที่ภาพสมบูรณ์โดยไม่ loop พร้อม Pause/Resume/Replay และ fallback แบบ exact สำหรับ loading, reduced motion, no JavaScript, print และ dependency failure

runtime, fallback, controller และ image layers ทั้งเก้าชิ้นตรงกับ published r7 ทุก byte การใช้งานนี้เป็น artifact-local approval เฉพาะ English hero ไม่แก้ shared Design System หรือ motif-family defaults ส่วน Thai hero ยังคงเป็น static identity เดิม

## Claim boundary

ราคาเริ่มต้นใน comparison table เป็นข้อเท็จจริงที่เจ้าของระบุ ไม่ใช่ราคาอ้างอิงที่ตรวจยืนยันจากผู้ให้บริการ:

- AI ทั่วไป 700 บาท/เดือน
- dashboard ข้อมูล 20,000 บาท/เดือน
- ที่ปรึกษา 200,000 บาท/เดือน
- ijji 29 บาท/คำถาม พร้อมทดลองใช้ฟรีในขณะนี้

เจ้าของยืนยันทั้งสี่รายการสำหรับ r8 เมื่อ 9 กันยายน 2026 รวมถึงข้อความที่ขึ้นกับเวลา “ทดลองใช้ฟรีตอนนี้” และ successor release ต้องตรวจยืนยันใหม่

## Verification status

- Parent Landometer Design System 0.9.1 verifier: ผ่าน 5,394 checks และ 103 checksums
- ijji Design System 0.5.0 / Add-on 0.5.3 resolver: ผ่าน 1,421 checks
- Static r8 verifier: ผ่านสำหรับ published byte set
- LINE browser QA: ผ่าน 22/22 checks ครบสองภาษาและ LINE ทั้งหกจุด ที่ 320/390/1,440px, light/dark, Thai 130%, English 200%, no JavaScript, forced colours, print และ keyboard focus
- Full animated-hero regression: ผ่าน 54/54 checks รวม finite-once playback, controls, responsive layout, reduced motion, no JavaScript, print, slow/failing dependencies และ exact fallback
- Inherited advisory: ที่ viewport 390px และ English 200% text scale ยังมี page-wide overflow 36px จาก `#ij-wander-toggle` ใน `#problems` เท่ากับ r7; footer และ social group ยัง contained จึงไม่ใช่ regression จากไอคอน LINE
- Open manual gate: physical iPhone Safari และ embedded WKWebView
- Source SHA, GitHub Pages run/build/deployment, live-byte attestation และ live browser QA บันทึกใน annotated tag `ijji-web-20260909-r8`

## Provenance and integrity

ขอบเขต release และ owner authorizations อยู่ใน [`release.json`](release.json) ส่วน [`SHA256SUMS.txt`](SHA256SUMS.txt) เป็น byte ledger ของ committed release files ทั้งหมด ยกเว้นตัว ledger เอง การอ้างอิง ijji และ parent LDS เป็น `authoring_aligned` เท่านั้น ไม่ใช่ full machine-package หรือ production-device conformance

## Local preview

Serve directory นี้ผ่าน static HTTP server แล้วเปิด `/ijji-TH.dc.html` หรือ `/ijji-EN.dc.html` ไม่ต้องมี build step และไม่รองรับ direct `file://` เพราะหน้า English import local motif module

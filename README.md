# ijji product website

เว็บไซต์ภาษาไทยและ English sibling ของ **ijji — Your business buddy around the corner** สำหรับเจ้าของร้านอาหาร คาเฟ่ และธุรกิจอาหารที่มีหน้าร้าน

- Live (ยังเป็น r4): <https://montri-th.github.io/ijji/>
- Thai canonical (ยังเป็น r4): <https://montri-th.github.io/ijji/ijji-TH.dc.html>
- English canonical (ยังเป็น r4): <https://montri-th.github.io/ijji/ijji-EN.dc.html>
- Prepared candidate: `ijji-web-20260904-r5` (`prepared_not_published`)
- Current published release: `ijji-web-20260904-r4`
- Stack: static HTML + self-hosted runtime, fonts, imagery, and Landometer Design System assets

## r5 candidate experience

r5 คง unified Landometer navbar, calm-on-scroll state, one-shot CTA text highlight, disclosure menu, bookmark rail ที่ใช้ไอคอนสื่อความหมาย และตัวเลือก Auto / Light / Dark จาก r4 ไว้ พร้อมปรับ LINE Brand Icon ในลิงก์ไป LINE ทั้งหมดให้เป็น quiet treatment ด้วยการลดความอิ่มสีและ opacity ผ่าน CSS โดยไม่ดัดแปลงไฟล์ต้นฉบับ

Comparison section ถูกย้ายขึ้นมาอยู่ก่อน “ปัญหาร้าน 12 แบบ” และออกแบบใหม่ให้ทุกหัวคอลัมน์และเซลล์มีไอคอน ijji header ใช้ตราจากไฟล์ที่เจ้าของระบุ และเพิ่มแถวราคาพร้อมคำชี้แจง Table คงรูปแบบ 5 คอลัมน์บน desktop และ reflow เป็น comparison cards ใน viewport ที่แคบลง

หน้า English ยังเป็น sibling ที่คง section IDs, imagery, interactions และ CTA destinations ตรงกับหน้าไทย แต่เขียนใหม่ตาม Product Brief และย่อ hero ให้กระชับขึ้นเพื่อคุมความสูงใน desktop viewport โดยไม่แปลไทยตรงตัว

## Claim boundary

ราคาเริ่มต้นใน comparison table — AI ทั่วไป 700 บาท/เดือน, dashboard ข้อมูล 20,000 บาท/เดือน, ที่ปรึกษา 200,000 บาท/เดือน และ ijji 29 บาท/คำถามพร้อมทดลองใช้ฟรีในขณะนี้ — เป็นข้อเท็จจริงที่เจ้าของระบุสำหรับ r5 ไม่ใช่ราคาอ้างอิงที่ตรวจยืนยันจากผู้ให้บริการ จึงแสดงเป็นราคาโดยประมาณ และต้องตรวจใหม่ใน release ถัดไป

## Favicon provenance

favicon 32px และ 192px สร้างแบบ deterministic จาก `ijji-logo-full-square.reference.png` ที่เจ้าของแนบและอนุมัติ โดยครอปเฉพาะ wordmark สองบรรทัดด้านล่างออก แล้วย่อด้วย premultiplied-alpha LANCZOS ไม่วาดใหม่ ไม่เปลี่ยนสี ไม่ลับคม และไม่เติมพื้นหลัง การอนุมัตินี้จำกัดเฉพาะ favicon และ ijji header ใน comparison table ของเว็บ r5; ไม่ได้ขยายเป็นการอนุมัติใน shared Design System

## Verification status

- Local static verification: passed (`scripts/verify-r5.py`) ครอบคลุม section order, table semantics/cell icons, LINE link boundaries, favicon paths และ hashes, local resources และข้อความราคาหลักทั้งสองภาษา
- Visual comparison artifact: generated แล้วที่ `qa/reference-vs-r5-th-compare.png`
- Responsive browser QA: passed ใน English 8 viewports ตั้งแต่ 1440×900 ถึง 360×800 และ Thai ที่ 1440×900 กับ 390×844 โดยไม่พบ horizontal overflow; desktop English hero อยู่ใน viewport ที่ความกว้าง 1024, 1280 และ 1440px; table reflow, menu, language/theme, Escape, calm state, bookmark active state, challenge pause/resume, quiet LINE และ console ผ่านทั้งหมด
- Open manual gate: physical iPhone Safari และ embedded WKWebView
- Publish/live-byte attestation: pending explicit publish authorization; live site ยังเป็น r4

รายละเอียดค่าที่ใช้จริงอยู่ใน [`navigation-preset.json`](navigation-preset.json) และขอบเขต release อยู่ใน [`release.json`](release.json)

## Local preview

Serve this directory with any static HTTP server, then open `/ijji-TH.dc.html` or `/ijji-EN.dc.html`. No build step is required. Direct `file://` loading is not supported because the page imports its local motif module.

## Integrity

`SHA256SUMS.txt` is the byte ledger for every committed release file except the ledger itself. The ijji and parent LDS identifiers record an `authoring_aligned` boundary only; this website does not claim full machine-package or production-device conformance.

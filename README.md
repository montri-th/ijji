# ijji product website

เว็บไซต์ภาษาไทยและ English sibling ของ **ijji — Your business buddy around the corner** สำหรับเจ้าของร้านอาหาร คาเฟ่ และธุรกิจอาหารที่มีหน้าร้าน

- Live: <https://montri-th.github.io/ijji/>
- Thai canonical: <https://montri-th.github.io/ijji/ijji-TH.dc.html>
- English canonical: <https://montri-th.github.io/ijji/ijji-EN.dc.html>
- Current published release: `ijji-web-20260908-r7`
- Previous published release: `ijji-web-20260904-r5`
- Stack: static HTML + self-hosted runtime, fonts, imagery, and Landometer Design System assets

## r7 release

r7 replaces only the static identity in the English hero with the owner-approved `ijji.logo-sting.r3` from Landometer Motif Library 1.2.1. It plays once when at least 14% visible, holds the complete final identity, and never loops automatically. A reserved row below the artwork provides a 44px Pause/Resume control while moving and Replay after completion.

The exact complete PNG remains visible while the runtime and nine exact layers load, and it is also the reduced-motion, no-JavaScript, print, and dependency-failure fallback. Desktop uses the approved 320px preferred width when the square panel has room and scales down only enough to avoid crop; compact layouts follow the runtime viewBox ratio while centring the exact 891:1087 fallback. The Thai sibling remains byte-for-byte identical to published r5.

This animated-identity overlay is an artifact-local approval for the English hero. It does not amend Landometer Design System 0.9.1 or the ijji Design System 0.5.0 / Add-on 0.5.3 no-motion canon. Nothing from the locally prepared r6 candidate is included.

## r5 experience

r5 คง unified Landometer navbar, calm-on-scroll state, one-shot CTA text highlight, disclosure menu, bookmark rail ที่ใช้ไอคอนสื่อความหมาย และตัวเลือก Auto / Light / Dark จาก r4 ไว้ พร้อมเพิ่มสัญลักษณ์ Landometer แบบสีไฟล์เดียวกับ Rebuild 02 ข้าง live-text wordmark และปรับ LINE Brand Icon ในลิงก์ไป LINE ทั้งหมดให้เป็น quiet treatment ด้วยการลดความอิ่มสีและ opacity ผ่าน CSS โดยไม่ดัดแปลงไฟล์ต้นฉบับ

Comparison section ถูกย้ายขึ้นมาอยู่ก่อน “ปัญหาร้าน 12 แบบ” และออกแบบใหม่ให้ทุกหัวคอลัมน์และเซลล์มีไอคอน ijji header ใช้ตราจากไฟล์ที่เจ้าของระบุ และเพิ่มแถวราคาพร้อมคำชี้แจง Table คงรูปแบบ 5 คอลัมน์บน desktop และ reflow เป็น comparison cards ใน viewport ที่แคบลง

หน้า English ยังเป็น sibling ที่คง section IDs, imagery, interactions และ CTA destinations ตรงกับหน้าไทย แต่เขียนใหม่ตาม Product Brief และย่อ hero ให้กระชับขึ้นเพื่อคุมความสูงใน desktop viewport โดยไม่แปลไทยตรงตัว

motif ใน section `with-you` เปลี่ยนเฉพาะ rendition ที่มองไม่เห็นบน dark canvas จาก transparent ink ซึ่งวัดได้ประมาณ 1.11:1 เป็น blue-and-mint ที่มี internal mark contrast 4.78:1 โดยไม่เปลี่ยน timing, animation หรือ reduced-motion behavior

สัญลักษณ์ Landometer ใน navbar เป็นการอนุมัติระดับเว็บ r5 ตามคำขอของเจ้าของ ไม่ได้ขยายเป็น shared Design System approval ไฟล์คงสีและ byte เดิมทั้งสองธีมและจับคู่กับ wordmark ที่ยังเป็น live text

## Claim boundary

ราคาเริ่มต้นใน comparison table — AI ทั่วไป 700 บาท/เดือน, dashboard ข้อมูล 20,000 บาท/เดือน, ที่ปรึกษา 200,000 บาท/เดือน และ ijji 29 บาท/คำถามพร้อมทดลองใช้ฟรีในขณะนี้ — เป็นข้อเท็จจริงที่เจ้าของระบุสำหรับ r5 ไม่ใช่ราคาอ้างอิงที่ตรวจยืนยันจากผู้ให้บริการ จึงแสดงเป็นราคาโดยประมาณ และต้องตรวจใหม่ใน release ถัดไป

เจ้าของยืนยันตัวเลขทั้งสี่รายการนี้สำหรับ r7 อีกครั้งเมื่อ 8 กันยายน 2026 รวมถึงข้อความที่ขึ้นกับเวลา “Free to try now” และ release ถัดไปต้องตรวจยืนยันใหม่อีกครั้ง

## Favicon provenance

favicon 32px และ 192px สร้างแบบ deterministic จาก `ijji-logo-full-square.reference.png` ที่เจ้าของแนบและอนุมัติ โดยครอปเฉพาะ wordmark สองบรรทัดด้านล่างออก แล้วย่อด้วย premultiplied-alpha LANCZOS ไม่วาดใหม่ ไม่เปลี่ยนสี ไม่ลับคม และไม่เติมพื้นหลัง การอนุมัตินี้จำกัดเฉพาะ favicon และ ijji header ใน comparison table ของเว็บ r5; ไม่ได้ขยายเป็นการอนุมัติใน shared Design System

## Verification status

- r7 browser QA: passed across finite-once playback, Pause/Resume/Replay, below-fold activation, reduced motion, no JavaScript, print, slow/failing dependencies, required responsive widths and themes, without horizontal overflow or artwork crop.
- r7 provenance: exact Motif Library 1.2.1 runtime, fallback, and nine layer hashes verified; Thai sibling matches the published r5 SHA-256 exactly.
- Static verification: passed (`scripts/verify-r7.py`) ครอบคลุม section order, table semantics/cell icons, LINE link boundaries, favicon paths และ hashes, navbar symbol/motif bytes, animated-identity provenance, local resources และข้อความราคาหลักทั้งสองภาษา
- Visual comparison artifact: generated แล้วที่ `qa/reference-vs-r5-th-compare.png`
- Responsive navbar/motif QA: ทั้ง Thai และ English ผ่านที่ 320×800, 360×800, 390×844, 600×900, 768×1024, 900×800, 1080×800, 1081×800, 1280×720 และ 1440×900 ใน dark mode โดยไม่พบ horizontal overflow และตรวจ light state, prominent/calm state กับ menu/theme interactions เพิ่มเติมแล้ว
- Open manual gate: physical iPhone Safari และ embedded WKWebView
- Publish/live-byte attestation: บันทึกอยู่ใน annotated tag `ijji-web-20260908-r7`

รายละเอียดค่าที่ใช้จริงอยู่ใน [`navigation-preset.json`](navigation-preset.json) และขอบเขต release อยู่ใน [`release.json`](release.json)

## Local preview

Serve this directory with any static HTTP server, then open `/ijji-TH.dc.html` or `/ijji-EN.dc.html`. No build step is required. Direct `file://` loading is not supported because the page imports its local motif module.

## Integrity

`SHA256SUMS.txt` is the byte ledger for every committed release file except the ledger itself. The ijji and parent LDS identifiers record an `authoring_aligned` boundary only; this website does not claim full machine-package or production-device conformance.

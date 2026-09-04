# ijji product website

เว็บไซต์ภาษาไทยและ English sibling ของ **ijji — Your business buddy around the corner** สำหรับเจ้าของร้านอาหาร คาเฟ่ และธุรกิจอาหารที่มีหน้าร้าน

- Live: <https://montri-th.github.io/ijji/>
- Thai canonical: <https://montri-th.github.io/ijji/ijji-TH.dc.html>
- English canonical: <https://montri-th.github.io/ijji/ijji-EN.dc.html>
- Release: `ijji-web-20260904-r4`
- Stack: static HTML + self-hosted runtime, fonts, imagery, and Landometer Design System assets

## r4 experience

รุ่นนี้ต่อยอด unified Landometer navbar สำหรับ ijji ด้วย live-text `Landometer / ijji`, calm state เมื่อเลื่อนลง, CTA text-highlight แบบ one-shot, disclosure menu, bookmark rail ที่ใช้ไอคอนสื่อความหมาย และตัวเลือก Auto / Light / Dark ภายในเมนู ทุกลิงก์ควบคุมยังมีพื้นที่กดอย่างน้อย 44px และ reduced-motion จะคงแถบแบบ prominent พร้อมปิด CTA cue

หน้า `ijji-EN.dc.html` เป็น English sibling ที่เขียนใหม่ให้เป็นธรรมชาติ โดยคง section order, IDs, component structure, media, interactions และ CTA destinations ให้ตรงกับหน้าไทย ตัวเลือก TH/EN เป็น reciprocal links ที่ใช้งานจริงและทั้งสองหน้ามี canonical + hreflang ครบ

ทุกลิงก์ที่ไป LINE โดยตรงใช้ LINE Brand Icon ทางการ ส่วน favicon ใช้โลโก้ ijji ต้นฉบับที่เจ้าของอนุมัติเฉพาะสำหรับ browser tab แล้วสร้างขนาด 32px และ 192px ด้วยการย่ออย่างเดียว ไม่มีการครอป วาดใหม่ หรือเปลี่ยนสี

รายละเอียดค่าที่ใช้จริงอยู่ใน [`navigation-preset.json`](navigation-preset.json) และขอบเขต release อยู่ใน [`release.json`](release.json)

## Local preview

Serve this directory with any static HTTP server, then open `/ijji-TH.dc.html` or `/ijji-EN.dc.html`. No build step is required. Direct `file://` loading is not supported because the page imports its local motif module.

## Integrity

`SHA256SUMS.txt` is the byte ledger for every committed release file except the ledger itself. The ijji and parent LDS identifiers record an `authoring_aligned` boundary only; this website does not claim full machine-package or production-device conformance.

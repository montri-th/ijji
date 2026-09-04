# ijji product website

หน้าเว็บไซต์ภาษาไทยของ **ijji — Your business buddy around the corner** สำหรับเจ้าของร้านอาหาร คาเฟ่ และธุรกิจอาหารที่มีหน้าร้าน

- Live: <https://montri-th.github.io/ijji/>
- Canonical page: <https://montri-th.github.io/ijji/ijji-TH.dc.html>
- Release: `ijji-web-20260904-r3`
- Stack: static HTML + self-hosted runtime, fonts, imagery, and Landometer Design System assets

## r3 navigation

รุ่นนี้เพิ่ม unified Landometer navbar สำหรับ ijji: calm state เมื่อเลื่อนลง, CTA text-highlight แบบ one-shot, disclosure menu และ bookmark rail ที่จอขนาดใหญ่ รายการส่วนในหน้าจะย้ายเข้าเมนูเมื่อ rail ไม่แสดง ทุกลิงก์ควบคุมยังมีพื้นที่กดอย่างน้อย 44px และ reduced-motion จะคงแถบแบบ prominent พร้อมปิด CTA cue

รายละเอียดค่าที่ใช้จริงอยู่ใน [`navigation-preset.json`](navigation-preset.json) และขอบเขต release อยู่ใน [`release.json`](release.json)

## Local preview

Serve this directory with any static HTTP server, then open `/ijji-TH.dc.html`. No build step is required. Direct `file://` loading is not supported because the page imports its local motif module.

## Integrity

`SHA256SUMS.txt` is the byte ledger for every committed release file except the ledger itself. The ijji and parent LDS identifiers record an `authoring_aligned` boundary only; this website does not claim full machine-package or production-device conformance.

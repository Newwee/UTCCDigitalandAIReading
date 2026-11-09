# UTCC Digital and AI Challenge 2026 Study Platform

> **A modern study platform designed to organize learning materials, improve reading experience, and support exam preparation.**  
> Designed & Developed by **New JA (Pataradanai Ponsao)**  
> *Independent Study & Exam Preparation Platform for UTCC Digital & AI Challenge 2026*

---

## 📌 Project Overview

**UTCC Digital and AI Challenge 2026 Study Platform** เป็นระบบอ่านหนังสือและเตรียมตัวสอบแบบดิจิทัลที่พัฒนาขึ้นเพื่อรองรับการแข่งขัน *UTCC Digital and AI Challenge 2026* จัดโดย **คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยหอการค้าไทย (UTCC STECH)** ร่วมกับ **สมาคมโปรแกรมเมอร์ไทย** และ **สมาคมปัญญาประดิษฐ์ประเทศไทย (AIAT)**

แพลตฟอร์มนี้แปลงเอกสารคู่มือเตรียมสอบและงานวิจัยเชิงลึกฉบับสมบูรณ์ (57 หน้า) ให้กลายเป็นระบบ Study Hub ที่จัดหมวดหมู่อย่างเป็นระบบ ให้อ่านง่าย ค้นหาได้รวดเร็ว และมีระบบทบทวนข้อสอบพร้อมตรวจคำตอบได้ทันที

---

## 🚀 Key Features

### 1. 📖 Distraction-Free Reading Engine
- **3-Column Layout**: นำทางบทเรียนด้านซ้าย (Category Navigator) — พื้นที่อ่านเนื้อหาหลักตรงกลาง — สารบัญหัวข้อและ Scroll Progress ด้านขวา
- **Reading Progress Bar**: แถบความคืบหน้าในการอ่านคำนวณตามการเลื่อนหน้าจอจริง (Scroll Spy)
- **Customizable Typography**: ปรับขนาดตัวอักษรได้ 4 ระดับ (`sm`, `base`, `lg`, `xl`) และปรับความกว้างหน้าจออ่านได้ (`compact`, `standard`, `wide`)
- **Rich Elements**: รองรับตารางเปรียบเทียบ (OSI vs TCP/IP, Time Complexity, Flowchart Symbols), บล็อกโค้ดพร้อมชื่อภาษา, กล่อง Callout 4 รูปแบบ (`exam`, `tip`, `warning`, `note`)
- **Citation Badges**: ระบุหมายเลขหน้าอ้างอิงตรงกับ PDF ต้นฉบับทุกบทเรียน (เช่น `Study Guide หน้า 2–5`)

### 2. 📝 Interactive Practice & Quiz System
- **100 ข้อสอบจำลองพร้อมเฉลยละเอียด**: คัดเลือกจากเอกสารหน้า 24–52 ครบทั้ง 3 ระดับ:
  - ระดับพื้นฐาน (Basic: ข้อ 1–30)
  - ระดับปานกลาง (Intermediate: ข้อ 31–70)
  - ระดับยาก (Advanced: ข้อ 71–100)
- **Interactive Quiz Mode**: เลือกทำข้อสอบตามกลุ่มวิชาหรือระดับความยาก กำหนดจำนวนข้อ (10, 20, 30 ข้อ) พร้อมตรวจคำตอบและแสดงคำอธิบายเชิงลึกทันที
- **40 แฟลชการ์ดคำศัพท์เทคนิค (Flashcards)**: คลิกเพื่อพลิกการ์ดดูคำแปลและหลักการทำงาน พร้อมระบบสุ่มคำศัพท์
- **12 จุดหลอกในห้องสอบ (Exam Traps)**: รวมข้อเท็จจริงแก้ความเข้าใจผิดที่มักเสียคะแนนบ่อย
- **โจทย์อัตนัยวิเคราะห์เชิงลึกรอบชิงชนะเลิศ (Final Round)**: 3 ข้อใหญ่ (VLSM Subnetting, GPU VRAM สำหรับ LLM, และ Dynamic Programming)

### 3. 🔍 Dual-Language Instant Search
- ค้นหาแบบ Real-Time กดคีย์ลัด `Ctrl + K` หรือคลิกปุ่มค้นหา
- ค้นหาครอบคลุม 7 บทเรียนหลัก, 35 หัวข้อย่อย, 40 คำศัพท์เทคนิค และ 100 ข้อสอบจำลอง

### 4. 📊 Content Completeness Audit (57/57 Pages 100%)
- หน้ารายงานการตรวจสอบความครบถ้วน พร้อมตาราง **Page Coverage Checklist** ยืนยันการนำเข้าข้อมูลทุกหน้าตั้งแต่หน้า 1 ถึงหน้า 57 โดยไม่มีข้อมูลตกหล่น

### 5. 💾 Local Storage Persistence
- บันทึกสถานะบทเรียนที่อ่านจบแล้ว (Completed)
- บันทึกรายการโปรด (Bookmarks)
- บันทึกประวัติการอ่านล่าสุด (Reading History)
- บันทึกการตั้งค่าธีมมืด/สว่าง (Dark / Light Theme Switcher)

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Design System**: Midnight AI Study Lab (Primary `#080D1B`, Accent Cyan `#35D5F2`, Violet `#8B7CFF`, Mint `#53DBAB`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Noto Sans Thai + Inter

---

## 📁 Project Structure

```
UTCC/
├── public/
│   └── competition/           # ภาพเอกสารประกาศและโปสเตอร์ทางการ 4 ฉบับ
├── src/
│   ├── components/
│   │   ├── Header.tsx         # แถบเมนูนำทางหลัก, สลับธีม, Mobile Drawer
│   │   ├── Footer.tsx         # เครดิตผู้พัฒนา New JA และข้อความชี้แจงความเป็นอิสระ
│   │   ├── SearchModal.tsx    # ระบบค้นหาบทเรียน คำศัพท์ และข้อสอบ (Ctrl+K)
│   │   └── ui/
│   │       ├── SpotlightCard.tsx     # การ์ดแสงสปอตไลท์ตามตำแหน่งเมาส์ (React Bits)
│   │       ├── GradientText.tsx      # หัวข้อ Gradient สไตล์ Futuristic
│   │       ├── BackgroundEffects.tsx # แสงไฟ Ambient และ Dot Grid
│   │       └── EmptyState.tsx        # แสดงสถานะเมื่อไม่มีข้อมูล
│   ├── data/
│   │   ├── studyContent.ts           # 7 บทเรียนหลัก ครอบคลุม 5 กลุ่มสาระ + กลยุทธ์
│   │   ├── practiceQuestions.ts      # ข้อสอบจำลอง 100 ข้อ พร้อมเฉลยและหน้าอ้างอิง
│   │   ├── glossaryData.ts           # พจนานุกรมคำศัพท์เทคนิค 40 คำ (ตารางที่ 7)
│   │   ├── examTrapsData.ts          # 12 ข้อควรระวังและจุดหลอก (ตารางที่ 8)
│   │   ├── advancedQuestionsData.ts  # โจทย์อัตนัยวิเคราะห์เชิงลึกรอบชิงชนะเลิศ
│   │   ├── teamStrategyData.ts       # กลยุทธ์ทีม 3 คน Tri-Specialist & แผนซ้อม
│   │   ├── contentAudit.ts           # รายงาน Audit ตรวจสอบหน้า 1-57 ครบ 100%
│   │   └── competitionInfo.ts        # ข้อมูลกติกา กำหนดการ และรางวัลแข่งขัน
│   ├── hooks/
│   │   └── useStudyState.ts          # Hook จัดการสถานะ LocalStorage
│   ├── views/
│   │   ├── HomeView.tsx              # หน้าแดชบอร์ดสรุปสถิติจริง
│   │   ├── StudyLibraryView.tsx      # คลังบทเรียน กรอง 5 กลุ่มวิชา
│   │   ├── ReadingPageView.tsx       # หน้าอ่านหนังสือ 3 คอลัมน์ (Core Reader)
│   │   ├── RevisionView.tsx          # ศูนย์ฝึกทำข้อสอบ (Quiz, Flashcard, Traps, Final)
│   │   ├── ContentAuditView.tsx      # ตารางตรวจสอบ 57 หน้า 100%
│   │   ├── BookmarksHistoryView.tsx  # หน้าบุ๊กมาร์กและประวัติการอ่าน
│   │   ├── CompetitionView.tsx       # สรุปกติกาและแกลเลอรีภาพประกาศ
│   │   └── AboutView.tsx             # หน้าเกี่ยวกับผู้พัฒนาและแพลตฟอร์ม
│   ├── types/
│   │   └── index.ts                  # โครงสร้างข้อมูล TypeScript ทั้งหมด
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 💻 Installation & Development Setup

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันโหมด Development
```bash
npm run dev
```
เปิดเบราว์เซอร์ไปที่ `http://localhost:5173`

### 3. ตรวจสอบ Type และ Build สำหรับ Production
```bash
npm run build
```

---

## ➕ How to Add New Study Content

ระบบถูกออกแบบด้วยสถาปัตยกรรม **Decoupled Architecture** (แยก Content ออกจาก UI 100%):
- **เพิ่มบทเรียนใหม่**: เพิ่มอ็อบเจกต์ลงในอาร์เรย์ `STUDY_TOPICS` ภายในไฟล์ `src/data/studyContent.ts`
- **เพิ่มข้อสอบใหม่**: เพิ่มคำถามลงในอาร์เรย์ `PRACTICE_QUESTIONS` ใน `src/data/practiceQuestions.ts`
- **เพิ่มคำศัพท์**: เพิ่มคำศัพท์ลงใน `src/data/glossaryData.ts`
หน้าบ้าน (UI Components) จะนำข้อมูลไปคำนวณและแสดงผลในสารบัญ ระบบค้นหา และควิซโดยอัตโนมัติ

---

## 👤 Credits & Disclaimer

- **Lead Designer & Developer**: **New JA (Pataradanai Ponsao)**
- **Platform**: UTCC Digital and AI Challenge 2026 Study Platform
- **Disclaimer**: เว็บไซต์นี้เป็น Independent Study Website จัดทำขึ้นโดยอิสระเพื่อประโยชน์ในการศึกษาและเตรียมตัวสอบเท่านั้น ไม่ใช่เว็บไซต์ทางการของมหาวิทยาลัยหอการค้าไทย, สมาคมโปรแกรมเมอร์ไทย หรือ สมาคมปัญญาประดิษฐ์ประเทศไทย (AIAT)

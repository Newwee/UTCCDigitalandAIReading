import React from 'react';
import { 
  Sparkles, 
  Code, 
  ShieldCheck, 
  Layers, 
  Palette, 
  FileCode, 
  Cpu, 
  Heart,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { GradientText } from '../components/ui/GradientText';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#35D5F2]/10 border border-[#35D5F2]/30 text-[#35D5F2] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Independent Study Platform</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] leading-tight">
          เกี่ยวกับโครงการและผู้พัฒนา
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          แพลตฟอร์มรวบรวมเนื้อหาและเตรียมสอบ <GradientText from="#35D5F2" to="#8B7CFF">UTCC Digital & AI Challenge 2026</GradientText> ออกแบบมาเพื่อมอบประสบการณ์การอ่านที่ดีที่สุด
        </p>
      </div>

      {/* Developer Credit Card */}
      <SpotlightCard className="p-6 sm:p-8 border-[#35D5F2]/30">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#35D5F2] via-[#8B7CFF] to-[#53DBAB] p-[2px] shrink-0 shadow-glow-cyan">
            <div className="w-full h-full bg-[#080D1B] rounded-[14px] flex items-center justify-center">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-[#35D5F2] to-[#8B7CFF]">
                NJ
              </span>
            </div>
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#35D5F2]">
                Lead Designer & Developer
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#53DBAB]/10 text-[#53DBAB] font-semibold">
                Verified Creator
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
              New JA (Pataradanai Ponsao)
            </h2>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              ผู้ออกแบบและพัฒนาสถาปัตยกรรมระบบเว็บไซต์อ่านหนังสือเตรียมสอบ เพื่อสนับสนุนเพื่อนร่วมทีมและผู้สนใจในการเตรียมตัวสอบแข่งขันด้านเทคโนโลยีดิจิทัลและปัญญาประดิษฐ์
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-xs px-3 py-1 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)]">
                Full-Stack Architecture
              </span>
              <span className="text-xs px-3 py-1 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)]">
                Midnight AI Design System
              </span>
              <span className="text-xs px-3 py-1 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)]">
                React Bits Engine
              </span>
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Official Disclaimer */}
      <div className="p-5 rounded-2xl bg-[#080D1B] border border-amber-500/30 flex items-start gap-3.5 text-xs text-amber-200">
        <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-300">ข้อความชี้แจงความเป็นอิสระของแพลตฟอร์ม (Disclaimer)</h4>
          <p className="text-amber-200/90 leading-relaxed">
            เว็บไซต์นี้เป็น <strong>Independent Study Website</strong> ที่จัดทำขึ้นเพื่อการศึกษา วิจัย และใช้ประกอบการเตรียมตัวสอบเท่านั้น ไม่ใช่เว็บไซต์ทางการของมหาวิทยาลัยหอการค้าไทย (UTCC), สมาคมโปรแกรมเมอร์ไทย หรือ สมาคมปัญญาประดิษฐ์ประเทศไทย (AIAT) ข้อมูลสัญลักษณ์และกำหนดการแข่งขันถูกนำมาใช้อ้างอิงเพื่อประโยชน์ต่อการเตรียมสอบของผู้เข้าแข่งขัน
          </p>
        </div>
      </div>

      {/* Architecture & Future Content Pipeline */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <Code className="w-5 h-5 text-[#8B7CFF]" />
          <span>สถาปัตยกรรมข้อมูลและการรองรับเนื้อหาในอนาคต (Phase 2 Pipeline)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#35D5F2]/10 text-[#35D5F2] flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              การแยก Content ออกจาก UI 100%
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              เนื้อหาทั้งหมดถูกจัดการผ่านไฟล์กลาง <code className="text-[#35D5F2] font-mono">src/data/studyContent.ts</code> ทำให้เมื่อผู้จัดทำสรุปเนื้อหาจริงเสร็จ สามารถเพิ่มบทเรียน หัวข้อย่อย ตาราง หรือโค้ดตัวอย่างได้ทันทีโดยไม่ต้องรื้อหน้า UI
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#8B7CFF]/10 text-[#8B7CFF] flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              สถิติและการคำนวณจริง (Zero Fake Data)
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              เปอร์เซ็นต์ความคืบหน้า (Progress), จำนวนบทเรียนที่อ่านจบ, รายการโปรด และประวัติการอ่าน ถูกคำนวณจากสถานะจริงใน LocalStorage ไม่มีการสุ่มตัวเลขหลอกตา
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#53DBAB]/10 text-[#53DBAB] flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              เทคโนโลยี Midnight AI Study Lab
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              ใช้โทนสีมืด <code className="text-[#35D5F2] font-mono">#080D1B</code> ร่วมกับ Accent Cyan & Violet เพื่อลดความล้าของสายตาเมื่อต้องอ่านตำราและข้อสอบต่อเนื่อง พร้อมสลับสู่ Light Mode ได้ตามต้องการ
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center font-bold">
              4
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)]">
              ระบบค้นหาแบบ Real-Time สองภาษา
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Search Modal ทำงานได้ทันทีเพียงกด <kbd className="font-mono bg-[var(--bg-elevated)] px-1.5 py-0.5 rounded text-[10px]">Ctrl+K</kbd> ค้นหาครอบคลุมชื่อบท คำศัพท์สำคัญ (Terms) หัวข้อย่อย และแท็ก พร้อมไฮไลท์และกระโดดไปยังตำแหน่งที่ต้องการ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

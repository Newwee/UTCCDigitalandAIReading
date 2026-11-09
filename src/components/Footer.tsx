import React from 'react';
import { Sparkles, Heart, ShieldCheck, ExternalLink } from 'lucide-react';
import { NavTab } from './Header';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#35D5F2] to-[#8B7CFF] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#080D1B] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#35D5F2]" />
                </div>
              </div>
              <span className="font-bold text-sm tracking-wide text-[var(--text-primary)]">
                UTCC Digital and AI Challenge 2026
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-md">
              ระบบพื้นที่รวบรวมความรู้ สรุปเนื้อหา และเตรียมตัวสอบวัดความรู้ด้านคอมพิวเตอร์และเทคโนโลยีสารสนเทศ 5 กลุ่มความรู้ ออกแบบโครงสร้างรองรับการอ่านต่อเนื่องแบบ Distraction-Free
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#35D5F2]/10 text-[#35D5F2] border border-[#35D5F2]/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Independent Study & Exam Preparation Platform
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              เมนูนำทาง
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-[#35D5F2] transition-colors"
                >
                  หน้าหลัก / แดชบอร์ด
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('library')}
                  className="hover:text-[#35D5F2] transition-colors"
                >
                  คลังเนื้อหา 5 หมวดหมู่
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('revision')}
                  className="hover:text-[#35D5F2] transition-colors"
                >
                  ทบทวน & ข้อสอบจำลอง 100 ข้อ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('audit')}
                  className="hover:text-[#35D5F2] transition-colors"
                >
                  ตรวจสอบความครบถ้วน (57 หน้า 100%)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('competition')}
                  className="hover:text-[#35D5F2] transition-colors"
                >
                  เกณฑ์และกติกาการแข่งขัน
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-[#35D5F2] transition-colors"
                >
                  เกี่ยวกับผู้พัฒนา & แพลตฟอร์ม
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official References */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              แหล่งอ้างอิงโครงการ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://science.utcc.ac.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#35D5F2] transition-colors"
                >
                  คณะวิทยาศาสตร์ฯ ม.หอการค้าไทย
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/utccSciTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#35D5F2] transition-colors"
                >
                  Facebook: utccSciTech
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">ร่วมกับ สมาคมโปรแกรมเมอร์ไทย & AIAT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Credit Bar */}
        <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
            <span>Designed & Developed by</span>
            <span className="font-bold text-[#35D5F2] bg-[#35D5F2]/10 px-2 py-0.5 rounded-md border border-[#35D5F2]/20">
              New JA (Pataradanai Ponsao)
            </span>
          </div>

          <p className="text-[var(--text-muted)] text-center sm:text-right">
            เว็บไซต์นี้จัดทำขึ้นโดยอิสระเพื่อประโยชน์ในการศึกษาและเตรียมตัวสอบเท่านั้น
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useRef, useState, useEffect } from 'react';
import { 
  Flame, 
  ExternalLink, 
  Maximize2, 
  RotateCcw, 
  ShieldCheck, 
  BookOpen, 
  Award,
  Sun,
  Moon,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { NavTab } from '../components/Header';
import { GradientText } from '../components/ui/GradientText';

interface ExamPrepViewProps {
  onSelectTab: (tab: NavTab) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const ExamPrepView: React.FC<ExamPrepViewProps> = ({ 
  onSelectTab, 
  theme = 'dark',
  onToggleTheme 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'SET_THEME', theme }, '*');
    }
  }, [theme]);

  const handleRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = `/utcc_digital_ai_challenge_2026_interactive_prep_mock_exam.html?theme=${theme}`;
    }
  };

  const handleOpenSolutions = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'NAVIGATE', view: 'solutions' }, '*');
    }
  };

  const handleToggleFullscreen = () => {
    if (!iframeRef.current) return;
    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        window.open(`/utcc_digital_ai_challenge_2026_interactive_prep_mock_exam.html?theme=${theme}`, '_blank');
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  const handleOpenStandalone = () => {
    window.open(`/utcc_digital_ai_challenge_2026_interactive_prep_mock_exam.html?theme=${theme}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-current" />
              จำก่อนสอบ (MUST-READ)
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#35D5F2]/10 text-[#35D5F2] font-semibold border border-[#35D5F2]/30">
              Interactive Prep & Mock Exam
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/30">
              100 ข้อสอบจำลอง + สรุปเข้ม 5 หมวด
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
            <GradientText from="#F59E0B" to="#EF4444">
              จำก่อนสอบ
            </GradientText>
            {' '}— แพลตฟอร์มติวเข้มและสนามสอบจำลองรอบชิง
          </h1>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            รวบรวมแกนความรู้สำคัญและจุดออกสอบบ่อยที่ต้องจำก่อนเข้าห้องสอบ พร้อมระบบจำลองการทำข้อสอบ 100 ข้อ (ปรนัย 85 ข้อ + ข้อเขียน 15 ข้อ) ระบบเฉลยละเอียดที่เปิดดูได้ตลอดเวลา และระบบสลับธีมสบายตา
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1 text-[var(--text-secondary)]">
              <BookOpen className="w-3.5 h-3.5 text-[#35D5F2]" /> คลังสรุป 5 หมวด
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[var(--text-secondary)]">
              <Award className="w-3.5 h-3.5 text-amber-400" /> ม็อกสอบ 100 ข้อ
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[var(--text-secondary)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> เฉลยละเอียดเปิดดูได้ตลอดเวลา
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[var(--text-secondary)]">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Dark & Light Mode สบายตา
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 relative z-10 shrink-0">
          <button
            onClick={handleOpenSolutions}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all shadow-sm transform active:scale-95 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>เปิดดูเฉลยละเอียด 100 ข้อ</span>
          </button>

          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#35D5F2] hover:border-[#35D5F2] transition-all cursor-pointer"
              title={theme === 'dark' ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#8B7CFF]" />}
            </button>
          )}

          <button
            onClick={handleRefresh}
            title="โหลดหน้าสอบใหม่"
            className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#35D5F2] transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={handleToggleFullscreen}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold transition-all cursor-pointer"
          >
            <Maximize2 className="w-4 h-4 text-[#35D5F2]" />
            <span>เต็มจอ</span>
          </button>

          <button
            onClick={handleOpenStandalone}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-black shadow-lg shadow-amber-500/20 transition-all transform active:scale-95 cursor-pointer"
          >
            <span>เปิดหน้าต่างแยก</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="w-full rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-2xl bg-[var(--bg-card)] relative">
        <iframe
          ref={iframeRef}
          src={`/utcc_digital_ai_challenge_2026_interactive_prep_mock_exam.html?theme=${theme}`}
          title="UTCC Digital and AI Challenge 2026 Interactive Prep and Mock Exam"
          className="w-full h-[78vh] sm:h-[84vh] lg:h-[88vh] border-0 block"
          allow="fullscreen"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>ข้อมูลสถิติและการทำแบบทดสอบจะถูกบันทึกไว้ในเบราว์เซอร์ของคุณอัตโนมัติ สามารถกลับมาทำต่อได้ตลอดเวลา</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectTab('revision')}
            className="hover:text-[#35D5F2] flex items-center gap-1 font-semibold transition-colors cursor-pointer"
          >
            <span>ไปที่ข้อสอบแยก 5 หน่วย (150 ข้อ)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

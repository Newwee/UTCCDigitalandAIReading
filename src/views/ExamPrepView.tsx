import React, { useRef, useState, useEffect, useMemo } from 'react';
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
  ChevronRight,
  Play,
  Pause,
  Clock,
  Sparkles,
  Copy,
  Check,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  Trash2,
  AlertCircle,
  Globe,
  Network,
  Cpu,
  Code,
  BrainCircuit,
  FileText,
  CheckCheck
} from 'lucide-react';
import { NavTab } from '../components/Header';
import { GradientText } from '../components/ui/GradientText';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { ADVANCED_QUESTIONS, AdvancedQuestion } from '../data/advancedQuestionsData';
import { CategoryId } from '../types';

interface ExamPrepViewProps {
  onSelectTab: (tab: NavTab) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

type PrepMode = 'finals-written' | 'interactive';

const CATEGORY_META: Record<CategoryId, { name: string; icon: React.ElementType; color: string; border: string; bg: string }> = {
  'general-it': {
    name: 'หมวด 1: ความรู้ทั่วไปไอที & โทรคมนาคม',
    icon: Globe,
    color: '#35D5F2',
    border: 'border-[#35D5F2]/40',
    bg: 'bg-[#35D5F2]/10'
  },
  'network-cloud': {
    name: 'หมวด 2: เครือข่าย, Infrastructure & Cloud',
    icon: Network,
    color: '#8B7CFF',
    border: 'border-[#8B7CFF]/40',
    bg: 'bg-[#8B7CFF]/10'
  },
  'hardware-os': {
    name: 'หมวด 3: Hardware & ระบบปฏิบัติการ',
    icon: Cpu,
    color: '#53DBAB',
    border: 'border-[#53DBAB]/40',
    bg: 'bg-[#53DBAB]/10'
  },
  'programming-algo': {
    name: 'หมวด 4: การเขียนโปรแกรม & อัลกอริทึม',
    icon: Code,
    color: '#F59E0B',
    border: 'border-[#F59E0B]/40',
    bg: 'bg-[#F59E0B]/10'
  },
  'ai-datascience': {
    name: 'หมวด 5: ปัญญาประดิษฐ์ & Data Science',
    icon: BrainCircuit,
    color: '#EC4899',
    border: 'border-[#EC4899]/40',
    bg: 'bg-[#EC4899]/10'
  }
};

export const ExamPrepView: React.FC<ExamPrepViewProps> = ({ 
  onSelectTab, 
  theme = 'dark',
  onToggleTheme 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [activeMode, setActiveMode] = useState<PrepMode>('finals-written');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  
  const [teamAnswers, setTeamAnswers] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('utcc_finals_team_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [copiedQuestionId, setCopiedQuestionId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedAnswers, setCopiedAnswers] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [timerSeconds, setTimerSeconds] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('utcc_finals_stopwatch');
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          const next = prev + 1;
          try {
            localStorage.setItem('utcc_finals_stopwatch', next.toString());
          } catch {}
          return next;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'SET_THEME', theme }, '*');
    }
  }, [theme]);

  const handleAnswerChange = (id: string, text: string) => {
    setTeamAnswers(prev => {
      const updated = { ...prev, [id]: text };
      try {
        localStorage.setItem('utcc_finals_team_answers', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleClearAnswer = (id: string) => {
    setTeamAnswers(prev => {
      const updated = { ...prev };
      delete updated[id];
      try {
        localStorage.setItem('utcc_finals_team_answers', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast('ล้างคำตอบข้อนี้เรียบร้อยแล้ว');
  };

  const handleToggleSolution = (id: string) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleToggleAllSolutions = (show: boolean) => {
    const updated: Record<string, boolean> = {};
    ADVANCED_QUESTIONS.forEach(q => {
      updated[q.id] = show;
    });
    setRevealedSolutions(updated);
    showToast(show ? 'เปิดเฉลยละเอียดและ Rubric ครบทั้ง 10 ข้อแล้ว' : 'ซ่อนเฉลยทั้งหมดแล้ว');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyQuestion = (adv: AdvancedQuestion) => {
    const text = `[${adv.title}]\nหมวด: ${adv.categoryName}\nคะแนนเต็ม: ${adv.maxScore} คะแนน (อ้างอิง Study Guide หน้า ${adv.sourcePage})\n\n[สถานการณ์จำลอง]\n${adv.scenario}\n\n[โจทย์และประเด็นที่ต้องตอบ]\n${adv.questionPrompt}\n\n[เกณฑ์การให้คะแนน Rubric]\n${adv.rubric.map(r => `- ${r.criterion} (${r.points} คะแนน)`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedQuestionId(adv.id);
    showToast(`คัดลอกโจทย์ ${adv.title.split(':')[0]} สำเร็จ`);
    setTimeout(() => setCopiedQuestionId(null), 2000);
  };

  const handleCopyAllQuestions = () => {
    const text = ADVANCED_QUESTIONS.map((adv, idx) => {
      return `========================================\nข้อที่ ${idx + 1}: ${adv.title}\nหมวด: ${adv.categoryName} (${adv.maxScore} คะแนน)\n========================================\n[สถานการณ์]\n${adv.scenario}\n\n[โจทย์คำถาม]\n${adv.questionPrompt}\n\n[เกณฑ์การให้คะแนน Rubric]\n${adv.rubric.map(r => `• ${r.criterion}: ${r.points} คะแนน`).join('\n')}\n`;
    }).join('\n\n');

    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    showToast('คัดลอกโจทย์ข้อเขียนครบทั้ง 10 ข้อเรียบร้อยแล้ว');
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleCopyTeamAnswers = () => {
    const text = ADVANCED_QUESTIONS.map((adv, idx) => {
      const ans = teamAnswers[adv.id] || '(ยังไม่ได้ระบุคำตอบ)';
      return `[ข้อที่ ${idx + 1}] ${adv.title}\nหมวด: ${adv.categoryName}\nคำตอบของทีม:\n${ans}\n`;
    }).join('\n----------------------------------------\n\n');

    navigator.clipboard.writeText(`UTCC Challenge 2026 - บันทึกคำตอบรอบชิงชนะเลิศ (10 ข้ออัตนัย)\nเวลาที่ใช้: ${formatTime(timerSeconds)}\n\n${text}`);
    setCopiedAnswers(true);
    showToast('คัดลอกคำตอบของทีมครบทุกข้อเรียบร้อยแล้ว');
    setTimeout(() => setCopiedAnswers(false), 2500);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
    try {
      localStorage.removeItem('utcc_finals_stopwatch');
    } catch {}
    showToast('รีเซ็ตเวลาซ้อมทีมแล้ว');
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return ADVANCED_QUESTIONS;
    return ADVANCED_QUESTIONS.filter(q => q.categoryId === selectedCategory);
  }, [selectedCategory]);

  const answeredCount = useMemo(() => {
    return ADVANCED_QUESTIONS.filter(q => (teamAnswers[q.id] || '').trim().length > 0).length;
  }, [teamAnswers]);

  const handleRefreshIframe = () => {
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
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-7 space-y-6 animate-fade-in relative">
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#080D1B] border border-[#35D5F2] text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#35D5F2] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="p-5 sm:p-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl relative overflow-hidden space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-md animate-pulse">
                <Flame className="w-4 h-4 fill-current" />
                หมวดหมู่: จำก่อนสอบ (MUST-READ)
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EC4899]/15 text-[#EC4899] font-black border border-[#EC4899]/30">
                กติการอบชิงชนะเลิศ (ข้อ 3.3)
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#35D5F2]/10 text-[#35D5F2] font-semibold border border-[#35D5F2]/30">
                10 ข้ออัตนัย (100 คะแนน) + 100 ข้อสอบจำลอง
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              <GradientText from="#F59E0B" to="#EF4444">
                จำก่อนสอบ
              </GradientText>
              {' '}— ติวเข้มข้อสอบและข้อเขียนรอบชิงชนะเลิศ
            </h1>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
              ครอบคลุมทั้ง 2 รูปแบบสำคัญตามเกณฑ์การแข่งขันอย่างเป็นทางการ: โจทย์ข้อเขียนอัตนัย 10 ข้อสำหรับรอบชิงชนะเลิศ (แข่งขันแบบทีม ตัดสินเวลา) และระบบม็อกสอบจำลอง 100 ข้อ พร้อมเฉลยละเอียดและเกณฑ์ Rubric
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 relative z-10 shrink-0">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#35D5F2] hover:border-[#35D5F2] transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                title={theme === 'dark' ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}
                aria-label="เปลี่ยนธีม"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#8B7CFF]" />}
              </button>
            )}

            <button
              onClick={() => onSelectTab('revision')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold transition-all min-h-[44px]"
            >
              <Award className="w-4 h-4 text-[#35D5F2]" />
              <span>คลังข้อสอบ 150 ข้อ</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => setActiveMode('finals-written')}
            className={`p-4 rounded-2xl border transition-all text-left flex items-start gap-3.5 relative overflow-hidden cursor-pointer ${
              activeMode === 'finals-written'
                ? 'bg-gradient-to-br from-[#EC4899]/20 via-[var(--bg-card)] to-[#8B7CFF]/15 border-[#EC4899] shadow-lg shadow-pink-500/10'
                : 'bg-[var(--bg-elevated)] border-[var(--border-color)] hover:border-[#EC4899]/40 opacity-80 hover:opacity-100'
            }`}
          >
            <div className={`p-2.5 rounded-xl shrink-0 ${activeMode === 'finals-written' ? 'bg-[#EC4899] text-white' : 'bg-[var(--bg-card)] text-[#EC4899]'}`}>
              <FileText className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black text-[var(--text-primary)]">
                  📝 ข้อเขียนรอบชิง 10 ข้อ (อัตนัยทีม 100 คะแนน)
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#EC4899] text-white">
                  กติกาข้อ 3.3
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                2 ข้อต่อหมวด ครบทั้ง 5 กลุ่มความรู้ พร้อมระบบจับเวลาซ้อมทีม ช่องพิมพ์ตอบ และ Rubric เต็ม 10/10
              </p>
            </div>
          </button>

          <button
            onClick={() => setActiveMode('interactive')}
            className={`p-4 rounded-2xl border transition-all text-left flex items-start gap-3.5 relative overflow-hidden cursor-pointer ${
              activeMode === 'interactive'
                ? 'bg-gradient-to-br from-[#35D5F2]/20 via-[var(--bg-card)] to-[#53DBAB]/15 border-[#35D5F2] shadow-lg shadow-cyan-500/10'
                : 'bg-[var(--bg-elevated)] border-[var(--border-color)] hover:border-[#35D5F2]/40 opacity-80 hover:opacity-100'
            }`}
          >
            <div className={`p-2.5 rounded-xl shrink-0 ${activeMode === 'interactive' ? 'bg-[#35D5F2] text-[#080D1B]' : 'bg-[var(--bg-card)] text-[#35D5F2]'}`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black text-[var(--text-primary)]">
                  💻 สนามม็อกสอบ & เฉลย 100 ข้อ (Interactive Exam)
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#35D5F2] text-[#080D1B]">
                  ปรนัย + เฉลย
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                สนามสอบจำลองเสมือนจริง 100 ข้อ พร้อมสรุปเข้ม 5 หมวดและเปิดคลังเฉลยได้ตลอดเวลา
              </p>
            </div>
          </button>
        </div>
      </div>

      {activeMode === 'finals-written' && (
        <div className="space-y-6">
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#EC4899]/15 via-[#8B7CFF]/10 to-[var(--bg-card)] border border-[#EC4899]/40 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-color)]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#EC4899]/20 text-[#EC4899]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[var(--text-primary)]">
                    ระเบียบกติกาการแข่งขันรอบชิงชนะเลิศ (UTCC Challenge ข้อ 3.3)
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)]">
                    อ้างอิงเอกสารหลักเกณฑ์และวิธีการแข่งขันอย่างเป็นทางการ
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>คะแนนเท่ากัน ตัดสินด้วยเวลาทำข้อสอบของทีม</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed text-[var(--text-secondary)]">
              <div className="p-3.5 rounded-2xl bg-[var(--bg-card)]/80 border border-[var(--border-color)] space-y-1.5">
                <span className="font-bold text-[#EC4899] block">
                  1. ผู้เข้าแข่งขันในแต่ละทีมจะช่วยกันตอบคำถามแบบอัตนัย 10 ข้อ:
                </span>
                <p>
                  ข้อสอบกระจายครบทั้ง 5 กลุ่มสาระ (กลุ่มละ 2 ข้อ รวม 10 ข้อ ข้อละ 10 คะแนน รวม 100 คะแนนเต็ม) แต่ละทีมต้องวางแผนแบ่งบทบาทความเชี่ยวชาญเพื่อตอบคำถามให้ครอบคลุมตามเกณฑ์ Rubric
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--bg-card)]/80 border border-[var(--border-color)] space-y-1.5">
                <span className="font-bold text-[#35D5F2] block">
                  2. เกณฑ์การตัดสินแพ้ชนะกรณีผลคะแนนรวมเท่ากัน:
                </span>
                <p>
                  คณะกรรมการจะตัดสินจาก <strong className="text-white">เวลาที่ใช้ในการทำข้อสอบของทีม</strong> ทีมที่ได้คะแนนรวมสูงสุดจะได้รับรางวัลชนะเลิศ หากคะแนนเท่ากัน ทีมที่ส่งเร็วกว่าจะได้อันดับที่เหนือกว่า
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="w-12 h-12 rounded-2xl bg-[#EC4899]/15 border border-[#EC4899]/30 flex items-center justify-center shrink-0">
                  <Clock className={`w-6 h-6 ${isTimerRunning ? 'text-[#EC4899] animate-spin' : 'text-[var(--text-muted)]'}`} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    ระบบจับเวลาจำลองการทำข้อสอบทีม
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[var(--text-primary)]">
                    {formatTime(timerSeconds)}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
                <button
                  onClick={() => setIsTimerRunning(prev => !prev)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer min-h-[44px] ${
                    isTimerRunning
                      ? 'bg-amber-500 hover:bg-amber-600 text-[#080D1B]'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                  }`}
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>พักเวลา</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{timerSeconds > 0 ? 'จับเวลาต่อ' : 'เริ่มจับเวลาซ้อมทีม'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleResetTimer}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] text-xs font-semibold transition-all min-h-[44px]"
                  title="รีเซ็ตเวลา"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>รีเซ็ต</span>
                </button>

                <div className="h-6 w-[1px] bg-[var(--border-color)] hidden sm:block mx-1" />

                <button
                  onClick={handleCopyAllQuestions}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold transition-all min-h-[44px]"
                  title="คัดลอกโจทย์ทั้ง 10 ข้อ"
                >
                  {copiedAll ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#35D5F2]" />}
                  <span>{copiedAll ? 'คัดลอกโจทย์แล้ว' : 'คัดลอก 10 ข้อ'}</span>
                </button>

                <button
                  onClick={handleCopyTeamAnswers}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#8B7CFF]/15 hover:bg-[#8B7CFF]/25 border border-[#8B7CFF]/40 text-[#8B7CFF] text-xs font-bold transition-all min-h-[44px]"
                  title="ส่งออกคำตอบทีม"
                >
                  {copiedAnswers ? <Check className="w-4 h-4 text-emerald-400" /> : <CheckCheck className="w-4 h-4 text-[#8B7CFF]" />}
                  <span>{copiedAnswers ? 'คัดลอกคำตอบแล้ว' : 'คัดลอกคำตอบทีม'}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 text-xs">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">ความคืบหน้าการเขียนตอบ:</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30">
                  {answeredCount} จาก 10 ข้อ
                </span>
                <span>(คะแนนรวมเต็ม 100 คะแนน)</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleAllSolutions(true)}
                  className="text-xs text-[#35D5F2] hover:underline font-semibold cursor-pointer"
                >
                  เปิดดูเฉลยทุกข้อ
                </button>
                <span className="text-[var(--text-muted)]">•</span>
                <button
                  onClick={() => handleToggleAllSolutions(false)}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] font-semibold cursor-pointer"
                >
                  ซ่อนเฉลยทั้งหมด
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer min-h-[40px] flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-md'
                  : 'bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>ทั้งหมด 10 ข้อ (100 คะแนน)</span>
            </button>

            {(Object.keys(CATEGORY_META) as CategoryId[]).map((catId, idx) => {
              const meta = CATEGORY_META[catId];
              const Icon = meta.icon;
              const isSelected = selectedCategory === catId;
              return (
                <button
                  key={catId}
                  onClick={() => setSelectedCategory(catId)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer min-h-[40px] flex items-center gap-1.5 ${
                    isSelected
                      ? `${meta.bg} ${meta.border} text-white border shadow-sm`
                      : 'bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  style={isSelected ? { borderColor: meta.color, color: meta.color } : {}}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>หมวด {idx + 1} (2 ข้อ)</span>
                </button>
              );
            })}
          </div>

          <div className="space-y-6">
            {filteredQuestions.map((adv, idx) => {
              const isSolutionOpen = !!revealedSolutions[adv.id];
              const userAnswer = teamAnswers[adv.id] || '';
              const meta = CATEGORY_META[adv.categoryId];
              const Icon = meta.icon;

              return (
                <SpotlightCard key={adv.id} className="p-5 sm:p-7 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-[#EC4899]/15 text-[#EC4899] border border-[#EC4899]/30 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" />
                        ข้อเขียนที่ {adv.id.replace('adv-', '')} จาก 10 ข้อ
                      </span>

                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5"
                        style={{ backgroundColor: `${meta.color}15`, borderColor: `${meta.color}40`, color: meta.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        หมวด {adv.categoryNumber}: {adv.categoryName}
                      </span>

                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                        เต็ม {adv.maxScore} คะแนน
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
                      <span>หน้า {adv.sourcePage}</span>
                      <button
                        onClick={() => handleCopyQuestion(adv)}
                        className="p-1.5 rounded-lg hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                        title="คัดลอกโจทย์ข้อนี้"
                        aria-label="คัดลอกโจทย์"
                      >
                        {copiedQuestionId === adv.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                      {adv.title}
                    </h3>

                    <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#35D5F2] mb-1.5">
                        <AlertCircle className="w-4 h-4" />
                        <span>สถานการณ์จำลอง (Scenario Context):</span>
                      </div>
                      {adv.scenario}
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/25 text-xs sm:text-sm text-blue-200 leading-relaxed whitespace-pre-line space-y-1">
                      <div className="font-black text-blue-300 flex items-center gap-1.5 mb-1">
                        <FileText className="w-4 h-4 text-blue-400" />
                        <span>คำถามและประเด็นที่ต้องตอบ (Question Prompt):</span>
                      </div>
                      {adv.questionPrompt}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <label 
                        htmlFor={`answer-${adv.id}`}
                        className="font-bold text-[var(--text-primary)] flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#EC4899]" />
                        <span>พื้นที่ซ้อมพิมพ์คำตอบของทีม:</span>
                      </label>
                      <div className="flex items-center gap-3 text-[var(--text-muted)]">
                        <span>{userAnswer.length} ตัวอักษร</span>
                        {userAnswer.length > 0 && (
                          <button
                            onClick={() => handleClearAnswer(adv.id)}
                            className="text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>ล้าง</span>
                          </button>
                        )}
                      </div>
                    </div>

                    <textarea
                      id={`answer-${adv.id}`}
                      value={userAnswer}
                      onChange={(e) => handleAnswerChange(adv.id, e.target.value)}
                      placeholder="พิมพ์คำตอบวิเคราะห์ของทีมที่นี่... (ระบบจะบันทึกอัตโนมัติบนอุปกรณ์ของคุณ)"
                      rows={4}
                      className="w-full p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] focus:border-[#EC4899] focus:outline-none text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] resize-y min-h-[96px] leading-relaxed"
                    />
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-2 text-xs">
                    <div className="font-black text-amber-300 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        <span>เกณฑ์การให้คะแนนอย่างละเอียด (Official Scoring Rubric — 10 คะแนนเต็ม):</span>
                      </span>
                      <span className="font-mono text-amber-400">Total: 10 pts</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      {adv.rubric.map((r, rIdx) => (
                        <div key={rIdx} className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-amber-500/20 flex flex-col justify-between gap-1">
                          <span className="text-[var(--text-secondary)] leading-tight">{r.criterion}</span>
                          <span className="font-bold text-amber-400 text-[11px] self-end shrink-0">+{r.points} คะแนน</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      onClick={() => handleToggleSolution(adv.id)}
                      className={`w-full p-3.5 rounded-2xl border transition-all flex items-center justify-between text-xs sm:text-sm font-black cursor-pointer ${
                        isSolutionOpen
                          ? 'bg-[#8B7CFF]/15 border-[#8B7CFF]/40 text-[#8B7CFF]'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-color)] hover:border-[#8B7CFF]/50 text-[var(--text-primary)]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isSolutionOpen ? <EyeOff className="w-4 h-4 text-[#8B7CFF]" /> : <Eye className="w-4 h-4 text-[#35D5F2]" />}
                        <span>{isSolutionOpen ? 'ซ่อนแนวทางการตอบและเฉลยละเอียด' : 'เปิดดูแนวทางการตอบเต็ม 10/10 & เฉลยละเอียด'}</span>
                      </span>
                      {isSolutionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isSolutionOpen && (
                      <div className="mt-3 space-y-4 p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[#8B7CFF]/30 animate-fade-in">
                        <div className="space-y-3">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#35D5F2] flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4" />
                            <span>ขั้นตอนการวิเคราะห์และการตอบทีละสเต็ป (Step-by-Step):</span>
                          </h4>
                          <div className="space-y-2">
                            {adv.solutionSteps.map((step, sIdx) => (
                              <div key={sIdx} className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs space-y-1">
                                <div className="font-bold text-[#8B7CFF]">{step.step}</div>
                                <div className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line font-mono text-[11px] sm:text-xs">
                                  {step.detail}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#53DBAB]/10 border border-[#53DBAB]/30 text-xs space-y-1.5">
                          <div className="font-black text-[#53DBAB] flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>ตัวอย่างคำตอบระดับคะแนนเต็ม 10/10 (Model Answer):</span>
                          </div>
                          <div className="text-[var(--text-primary)] leading-relaxed whitespace-pre-line font-mono text-[11px] sm:text-xs bg-[var(--bg-card)] p-3 rounded-lg border border-[var(--border-color)]">
                            {adv.modelAnswer}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/25 text-xs text-purple-300">
                          <strong className="text-purple-200">Key Takeaway สำหรับจำก่อนสอบ:</strong> {adv.keyTakeaways}
                        </div>
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      )}

      {activeMode === 'interactive' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>สนามสอบเสมือนจริง 100 ข้อ พร้อมสรุป 5 หมวดและคลังเฉลยครบทุกข้อ</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleOpenSolutions}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all cursor-pointer min-h-[40px]"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>เปิดดูเฉลยละเอียด 100 ข้อ</span>
              </button>

              <button
                onClick={handleRefreshIframe}
                title="โหลดหน้าสอบใหม่"
                className="p-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handleToggleFullscreen}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-bold transition-all cursor-pointer min-h-[40px]"
              >
                <Maximize2 className="w-4 h-4 text-[#35D5F2]" />
                <span>เต็มจอ</span>
              </button>

              <button
                onClick={handleOpenStandalone}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-black shadow-md transition-all cursor-pointer min-h-[40px]"
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
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>ข้อมูลเวลาและคำตอบที่ซ้อมจะถูกบันทึกไว้ในเบราว์เซอร์อัตโนมัติ สามารถกลับมาซ้อมต่อได้ทุกเมื่อ</span>
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

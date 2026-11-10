import React, { useState, useEffect, useMemo } from 'react';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Flag, 
  HelpCircle, 
  Layers, 
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Check,
  Send,
  Zap,
  ShieldCheck,
  Globe,
  HardDrive,
  Code2,
  Brain,
  Lightbulb
} from 'lucide-react';
import { PRACTICE_QUESTIONS, PracticeQuestion } from '../data/practiceQuestions';
import { CategoryId } from '../types';
import { SpotlightCard } from './ui/SpotlightCard';
import { GradientText } from './ui/GradientText';

interface UnitExamEngineProps {
  initialCategoryId?: CategoryId;
  onOpenTopic?: (topicId: string) => void;
  onGoToSummary?: (categoryId: CategoryId) => void;
}

interface UnitInfo {
  id: CategoryId;
  unitNumber: number;
  nameTh: string;
  nameEn: string;
  color: string;
  icon: React.ElementType;
  questionRange: string;
  sourcePages: string;
  description: string;
  topics: string[];
}

export const UNIT_CONFIGS: UnitInfo[] = [
  {
    id: 'general-it',
    unitNumber: 1,
    nameTh: 'วิทยาการคอมพิวเตอร์และเทคโนโลยีดิจิทัลทั่วไป',
    nameEn: 'General IT, History & Emerging Tech',
    color: '#35D5F2',
    icon: Globe,
    questionRange: 'ข้อ 1–20 (20 ข้อ)',
    sourcePages: 'หน้า 2–5, 24–30',
    description: 'ประวัติศาสตร์คอมพิวเตอร์, 5 ยุคเทคโนโลยี, บุคคลสำคัญ, Wi-Fi 7 (802.11be), 5G NR, Quantum Computing, กฎหมาย PDPA และโนเบล 2024',
    topics: ['ประวัติศาสตร์ & ยุค 1-5', 'Ada Lovelace & Alan Turing', 'Wi-Fi 7 320MHz MLO', 'Qubit & Superposition', 'PDPA & CIA Triad']
  },
  {
    id: 'network-cloud',
    unitNumber: 2,
    nameTh: 'เครือข่ายคอมพิวเตอร์และความปลอดภัยบนคลาวด์',
    nameEn: 'Networks, Subnetting, Protocols & Cloud',
    color: '#8B7CFF',
    icon: Layers,
    questionRange: 'ข้อ 21–40 (20 ข้อ)',
    sourcePages: 'หน้า 5–8, 30–36',
    description: 'OSI 7 Layers, TCP/IP, PDU, Subnetting CIDR /24–/30, Private IP RFC 1918, DNS Resolution, Cloud IaaS/PaaS/SaaS และ Docker Containers',
    topics: ['OSI 7 Layers & PDUs', 'TCP 3-Way Handshake vs UDP', 'คำนวณ Subnetting CIDR', 'Private IP Classes', 'Cloud Models & Docker']
  },
  {
    id: 'hardware-os',
    unitNumber: 3,
    nameTh: 'ฮาร์ดแวร์ สถาปัตยกรรมคอมพิวเตอร์ และระบบปฏิบัติการ',
    nameEn: 'Computer Architecture, Memory, RAID & OS',
    color: '#53DBAB',
    icon: HardDrive,
    questionRange: 'ข้อ 41–60 (20 ข้อ)',
    sourcePages: 'หน้า 8–11, 36–42',
    description: 'สถาปัตยกรรม von Neumann vs Harvard, Machine Cycle 4 ขั้นตอน, CPU Registers, คำนวณ AMAT แคช, NVMe PCIe, RAID 0/1/5/6/10 และ Linux chmod',
    topics: ['von Neumann vs Harvard', 'Fetch-Decode-Execute Cycle', 'คำนวณ AMAT L1/RAM', 'RAID 0/1/5/6 ความจุและทนทาน', 'Linux Permissions 755/644']
  },
  {
    id: 'programming-algo',
    unitNumber: 4,
    nameTh: 'การเขียนโปรแกรม โครงสร้างข้อมูล และขั้นตอนวิธี',
    nameEn: 'Programming, Data Structures & Algorithms',
    color: '#EC4899',
    icon: Code2,
    questionRange: 'ข้อ 61–80 (20 ข้อ)',
    sourcePages: 'หน้า 11–14, 42–47',
    description: 'สัญลักษณ์ Flowchart ISO 5807, ตรรกศาสตร์ De Morgan, ลำดับ Big-O Notation, Binary Search, Sorting Algorithms, Stack/Queue และ BST In-Order',
    topics: ['สัญลักษณ์ผังงาน Flowchart', 'De Morgan & Boolean Laws', 'Big-O O(1) ถึง O(N²)', 'Binary Search O(log N)', 'BST In-Order Traversal']
  },
  {
    id: 'ai-datascience',
    unitNumber: 5,
    nameTh: 'ปัญญาประดิษฐ์และวิทยาศาสตร์ข้อมูล',
    nameEn: 'AI, Machine Learning, LLMs & Deep Learning',
    color: '#F59E0B',
    icon: Brain,
    questionRange: 'ข้อ 81–100 (20 ข้อ)',
    sourcePages: 'หน้า 14–18, 47–52',
    description: '3 เสาหลัก ML, คำนวณ Confusion Matrix (Accuracy, Precision, Recall, F1), Transformer Self-Attention, ขั้นตอน RAG Pipeline, Quantization VRAM และ Stable Diffusion',
    topics: ['Supervised vs Unsupervised vs RL', 'คำนวณ Precision & Recall & F1', 'Transformer Self-Attention', 'RAG Vector Database', 'Quantization FP16/INT8/INT4']
  }
];

// Map category to master lesson ID for direct reading jump
const categoryToLessonId: Record<CategoryId, string> = {
  'general-it': 'lesson-1',
  'network-cloud': 'lesson-2',
  'hardware-os': 'lesson-3',
  'programming-algo': 'lesson-4',
  'ai-datascience': 'lesson-5',
};

const STORAGE_KEY_BEST_SCORES = 'utcc_unit_best_scores';

export const UnitExamEngine: React.FC<UnitExamEngineProps> = ({
  initialCategoryId,
  onOpenTopic,
  onGoToSummary,
}) => {
  // Mode: Exam Simulator (timed, no instant explanation) VS Practice Mode (instant explanation)
  const [examMode, setExamMode] = useState<'exam' | 'practice'>('practice');
  const [selectedUnit, setSelectedUnit] = useState<UnitInfo | null>(() => {
    if (initialCategoryId) {
      return UNIT_CONFIGS.find(u => u.id === initialCategoryId) || null;
    }
    return null;
  });

  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'ก' | 'ข' | 'ค' | 'ง'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [examFinished, setExamFinished] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(25 * 60); // 25 minutes
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'wrong' | 'flagged'>('all');

  // Best scores from localStorage
  const [bestScores, setBestScores] = useState<Record<string, { score: number; total: number; percentage: number }>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BEST_SCORES);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Questions for the selected unit (20 questions)
  const unitQuestions = useMemo(() => {
    if (!selectedUnit) return [];
    return PRACTICE_QUESTIONS.filter(q => q.categoryId === selectedUnit.id);
  }, [selectedUnit]);

  // Timer countdown effect in Exam mode
  useEffect(() => {
    let interval: any = null;
    if (examStarted && !examFinished && timerActive && examMode === 'exam') {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examStarted, examFinished, timerActive, examMode]);

  // If initialCategoryId changes from props
  useEffect(() => {
    if (initialCategoryId) {
      const match = UNIT_CONFIGS.find(u => u.id === initialCategoryId);
      if (match) setSelectedUnit(match);
    }
  }, [initialCategoryId]);

  const handleStartExam = (unit: UnitInfo, mode: 'exam' | 'practice') => {
    setSelectedUnit(unit);
    setExamMode(mode);
    setCurrentQIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setExamFinished(false);
    setTimeRemaining(25 * 60);
    setTimerActive(mode === 'exam');
    setExamStarted(true);
    setShowConfirmSubmit(false);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleSelectAnswer = (key: 'ก' | 'ข' | 'ค' | 'ง') => {
    // In practice mode, once answered, keep it to show explanation
    if (examMode === 'practice' && userAnswers[currentQIndex] !== undefined) return;
    setUserAnswers(prev => ({ ...prev, [currentQIndex]: key }));
  };

  const handleToggleFlag = (index: number) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleFinishExam = () => {
    setExamFinished(true);
    setTimerActive(false);
    setShowConfirmSubmit(false);

    // Save best score
    if (selectedUnit) {
      let score = 0;
      unitQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) score++;
      });
      const total = unitQuestions.length;
      const pct = Math.round((score / total) * 100);

      setBestScores(prev => {
        const existing = prev[selectedUnit.id];
        if (!existing || pct > existing.percentage) {
          const updated = {
            ...prev,
            [selectedUnit.id]: { score, total, percentage: pct }
          };
          try {
            localStorage.setItem(STORAGE_KEY_BEST_SCORES, JSON.stringify(updated));
          } catch (e) {
            // ignore localStorage quota errors
          }
          return updated;
        }
        return prev;
      });
    }
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const calculateScore = () => {
    let score = 0;
    unitQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) score++;
    });
    return score;
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // =========================================================================
  // VIEW 1: UNIT SELECTION OVERVIEW (หน้าเลือกหน่วยสอบ)
  // =========================================================================
  if (!examStarted || !selectedUnit) {
    return (
      <div className="space-y-8 animate-fade-in">
        {/* Top Header */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#111B30] via-[#0D1526] to-[#18243A] border border-[#35D5F2]/25 shadow-card-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#35D5F2]/10 to-[#8B7CFF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#35D5F2]/10 border border-[#35D5F2]/30 text-[#35D5F2] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Unit Drill & Mastery Engine • คลังข้อสอบจริง 100 ข้อ</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[var(--text-primary)]">
                ข้อสอบแบบแยกหน่วย —{' '}
                <GradientText from="#35D5F2" to="#8B7CFF">
                  Unit Practice Tests
                </GradientText>
              </h2>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                ฝึกทำข้อสอบตรงตาม 5 กลุ่มสาระความรู้จริง หน่วยละ 20 ข้อ (รวม 100 ข้อ) พร้อมระบบจับเวลา วิเคราะห์ระดับความยาก และเฉลยละเอียดทุกข้อจากคู่มือ 57 หน้า
              </p>
            </div>

            {/* Exam Mode Selector Card */}
            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] shrink-0 space-y-2">
              <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                เลือกรูปแบบการทดสอบ
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setExamMode('practice')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                    examMode === 'practice'
                      ? 'bg-[#35D5F2] text-[#080D1B] border-[#35D5F2] shadow-glow-cyan'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>โหมดฝึกซ้อม</span>
                </button>

                <button
                  onClick={() => setExamMode('exam')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                    examMode === 'exam'
                      ? 'bg-[#8B7CFF] text-[#080D1B] border-[#8B7CFF] shadow-glow-violet'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>โหมดสอบจริง</span>
                </button>
              </div>
              <p className="text-[10px] text-[var(--text-muted)] pt-1">
                {examMode === 'practice' 
                  ? '⚡ เฉลยและอธิบายทันทีทุกข้อที่กดตอบ (เหมาะสำหรับฝึกฝน)' 
                  : '⏱️ จับเวลา 25 นาที ตรวจและแสดงผลเมื่อกดส่งข้อสอบ'}
              </p>
            </div>
          </div>
        </div>

        {/* 5 Unit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIT_CONFIGS.map(unit => {
            const Icon = unit.icon;
            const savedScore = bestScores[unit.id];

            // Calculate difficulty counts for this unit
            const questions = PRACTICE_QUESTIONS.filter(q => q.categoryId === unit.id);
            const basicCount = questions.filter(q => q.difficulty === 'basic').length;
            const interCount = questions.filter(q => q.difficulty === 'intermediate').length;
            const advCount = questions.filter(q => q.difficulty === 'advanced').length;

            return (
              <SpotlightCard
                key={unit.unitNumber}
                className="p-6 flex flex-col justify-between group transition-all space-y-5"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: `${unit.color}15`,
                        color: unit.color,
                        border: `1px solid ${unit.color}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-black text-[#080D1B]"
                        style={{ backgroundColor: unit.color }}
                      >
                        UNIT {unit.unitNumber}
                      </span>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono mt-1">
                        {unit.questionRange}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[#35D5F2] transition-colors">
                      {unit.nameTh}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                      {unit.nameEn}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {unit.description}
                  </p>

                  {/* Difficulty Breakdown Pills */}
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ง่าย {basicCount}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      กลาง {interCount}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      ยาก {advCount}
                    </span>
                  </div>

                  {/* Topics Checklist */}
                  <div className="space-y-1.5 pt-1 border-t border-[var(--border-color)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      หัวข้อหลักในชุดข้อสอบนี้:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {unit.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[10px] text-[var(--text-secondary)] border border-[var(--border-color)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best Score (if attempted previously) */}
                  {savedScore && (
                    <div className="p-2.5 rounded-xl bg-[#53DBAB]/10 border border-[#53DBAB]/30 flex items-center justify-between text-xs">
                      <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#53DBAB]" />
                        <span>คะแนนสูงสุด:</span>
                      </span>
                      <span className="font-bold text-[#53DBAB] font-mono">
                        {savedScore.score}/{savedScore.total} ({savedScore.percentage}%)
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
                  <button
                    onClick={() => handleStartExam(unit, examMode)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-glow-cyan"
                    style={{
                      backgroundColor: unit.color,
                      color: '#080D1B',
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>เริ่มทำข้อสอบหน่วยที่ {unit.unitNumber} (20 ข้อ)</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] pt-1">
                    {onGoToSummary && (
                      <button
                        onClick={() => onGoToSummary(unit.id)}
                        className="hover:text-[#35D5F2] flex items-center gap-1 transition-colors"
                      >
                        <Lightbulb className="w-3 h-3 text-[#35D5F2]" />
                        <span>อ่านสรุปก่อนสอบ</span>
                      </button>
                    )}

                    {onOpenTopic && (
                      <button
                        onClick={() => onOpenTopic(categoryToLessonId[unit.id])}
                        className="hover:text-[var(--text-primary)] flex items-center gap-1 transition-colors"
                      >
                        <BookOpen className="w-3 h-3 text-[#8B7CFF]" />
                        <span>เปิดบทเรียนเต็ม</span>
                      </button>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: TEST RESULT & COMPREHENSIVE REVIEW (หน้าสรุปผลคะแนนและการตรวจคำตอบ)
  // =========================================================================
  if (examFinished) {
    const score = calculateScore();
    const total = unitQuestions.length;
    const percentage = Math.round((score / total) * 100);

    let evaluation = {
      label: 'ยอดเยี่ยม (Mastery Level)',
      color: '#53DBAB',
      badgeClass: 'bg-[#53DBAB]/15 text-[#53DBAB] border-[#53DBAB]/30',
      description: 'คะแนนผ่านเกณฑ์ระดับยอดเยี่ยม คุณเข้าใจคอนเซ็ปต์ของหน่วยนี้อย่างสมบูรณ์แบบ พร้อมสำหรับการแข่งขันจริง!',
    };

    if (percentage < 60) {
      evaluation = {
        label: 'ควรทบทวนเพิ่มเติม (Needs Review)',
        color: '#EF4444',
        badgeClass: 'bg-red-500/15 text-red-400 border-red-500/30',
        description: 'คะแนนยังไม่ถึงเกณฑ์ 60% แนะนำให้อ่านสรุปฉบับเข้าใจง่ายและบทเรียนทบทวน จากนั้นกลับมาทำใหม่อีกครั้ง',
      };
    } else if (percentage < 80) {
      evaluation = {
        label: 'ผ่านเกณฑ์ดี (Proficient)',
        color: '#35D5F2',
        badgeClass: 'bg-[#35D5F2]/15 text-[#35D5F2] border-[#35D5F2]/30',
        description: 'มีความรู้ความเข้าใจในระดับดี แนะนำให้ตรวจสอบข้อที่ตอบผิดด้านล่างเพื่ออุดรอยรั่วก่อนลงสนามจริง',
      };
    }

    // Difficulty breakdown
    const basicQuestions = unitQuestions.filter(q => q.difficulty === 'basic');
    const basicCorrect = basicQuestions.filter((q, idx) => {
      const globalIdx = unitQuestions.indexOf(q);
      return userAnswers[globalIdx] === q.answer;
    }).length;

    const interQuestions = unitQuestions.filter(q => q.difficulty === 'intermediate');
    const interCorrect = interQuestions.filter((q, idx) => {
      const globalIdx = unitQuestions.indexOf(q);
      return userAnswers[globalIdx] === q.answer;
    }).length;

    const advQuestions = unitQuestions.filter(q => q.difficulty === 'advanced');
    const advCorrect = advQuestions.filter((q, idx) => {
      const globalIdx = unitQuestions.indexOf(q);
      return userAnswers[globalIdx] === q.answer;
    }).length;

    // Filter review questions
    const filteredReviewQuestions = unitQuestions.filter((q, idx) => {
      const isRight = userAnswers[idx] === q.answer;
      const isFlagged = !!flaggedQuestions[idx];
      if (reviewFilter === 'correct') return isRight;
      if (reviewFilter === 'wrong') return !isRight;
      if (reviewFilter === 'flagged') return isFlagged;
      return true;
    });

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
        {/* Score Summary Card */}
        <SpotlightCard className="p-8 text-center space-y-6">
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-[#35D5F2]/10 text-[#35D5F2] shadow-glow-cyan">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              ผลการทดสอบ: หน่วยที่ {selectedUnit.unitNumber} — {selectedUnit.nameTh}
            </span>
            <div className="text-4xl sm:text-6xl font-black text-[var(--text-primary)] font-mono">
              {score} <span className="text-2xl text-[var(--text-muted)]">/ {total}</span>
            </div>
            <div className="text-lg font-bold text-[#35D5F2]">
              คิดเป็น {percentage}%
            </div>
          </div>

          {/* Performance Badge */}
          <div className="max-w-md mx-auto space-y-2">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border ${evaluation.badgeClass}`}>
              <ShieldCheck className="w-4 h-4" />
              <span>{evaluation.label}</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {evaluation.description}
            </p>
          </div>

          {/* Difficulty Statistics Grid */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto pt-3">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase">ข้อพื้นฐาน</span>
              <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-mono">
                {basicCorrect} / {basicQuestions.length}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1">
              <span className="text-[10px] font-bold text-amber-400 uppercase">ข้อปานกลาง</span>
              <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-mono">
                {interCorrect} / {interQuestions.length}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1">
              <span className="text-[10px] font-bold text-rose-400 uppercase">ข้อยาก</span>
              <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-mono">
                {advCorrect} / {advQuestions.length}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[var(--border-color)]">
            <button
              onClick={() => handleStartExam(selectedUnit, examMode)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] font-bold text-xs hover:opacity-95 shadow-glow-cyan transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ทำข้อสอบหน่วยนี้ใหม่อีกครั้ง</span>
            </button>

            {onGoToSummary && (
              <button
                onClick={() => onGoToSummary(selectedUnit.id)}
                className="px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#35D5F2]/10 text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-color)] transition-all flex items-center gap-1.5"
              >
                <Lightbulb className="w-4 h-4 text-[#35D5F2]" />
                <span>ดูสรุปฉบับเข้าใจง่าย</span>
              </button>
            )}

            {onOpenTopic && (
              <button
                onClick={() => onOpenTopic(categoryToLessonId[selectedUnit.id])}
                className="px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#8B7CFF]/10 text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-color)] transition-all flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-[#8B7CFF]" />
                <span>อ่านบทเรียนทบทวน</span>
              </button>
            )}

            <button
              onClick={() => setExamStarted(false)}
              className="px-4 py-2.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)] transition-all"
            >
              <span>เลือกหน่วยอื่น</span>
            </button>
          </div>
        </SpotlightCard>

        {/* Detailed Question Review Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-color)] pb-3">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                ตรวจคำตอบและคำอธิบายละเอียด (20 ข้อ)
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                อ้างอิงจาก UTCC Digital and AI Challenge 2026 Study Guide
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {[
                { id: 'all', label: `ทั้งหมด (${total})` },
                { id: 'wrong', label: `ตอบผิด (${total - score})` },
                { id: 'correct', label: `ตอบถูก (${score})` },
                { id: 'flagged', label: `ติดธง (${Object.values(flaggedQuestions).filter(Boolean).length})` },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setReviewFilter(f.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    reviewFilter === f.id
                      ? 'bg-[#35D5F2] text-[#080D1B] border-[#35D5F2]'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            {filteredReviewQuestions.map((q) => {
              const originalIndex = unitQuestions.indexOf(q);
              const userAns = userAnswers[originalIndex];
              const isCorrect = userAns === q.answer;
              const isFlagged = !!flaggedQuestions[originalIndex];

              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-2xl border space-y-4 transition-all ${
                    isCorrect
                      ? 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-[#53DBAB]/40'
                      : 'bg-red-500/5 border-red-500/25 hover:border-red-500/40'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isCorrect ? 'bg-[#53DBAB]/15 text-[#53DBAB]' : 'bg-red-500/15 text-red-400'
                      }`}>
                        {originalIndex + 1}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-color)]">
                        ข้อสอบจริง #{q.number}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        หน้า {q.sourcePage} ใน Study Guide
                      </span>
                      {isFlagged && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 flex items-center gap-1">
                          <Flag className="w-3 h-3" />
                          <span>ติดธง</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 font-bold text-xs">
                      {isCorrect ? (
                        <span className="text-[#53DBAB] flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>ถูกต้อง (+1)</span>
                        </span>
                      ) : (
                        <span className="text-red-400 flex items-center gap-1">
                          <XCircle className="w-4 h-4" />
                          <span>ตอบผิด</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Text */}
                  <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-relaxed">
                    {q.question}
                  </h4>

                  {/* 4 Options Display */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map(opt => {
                      const isStudentChoice = userAns === opt.key;
                      const isRealAnswer = q.answer === opt.key;

                      let optClass = 'bg-[var(--bg-elevated)]/40 border-[var(--border-color)] text-[var(--text-muted)]';
                      if (isRealAnswer) {
                        optClass = 'bg-[#53DBAB]/15 border-[#53DBAB] text-[#53DBAB] font-semibold';
                      } else if (isStudentChoice && !isRealAnswer) {
                        optClass = 'bg-red-500/15 border-red-500 text-red-400 font-semibold';
                      }

                      return (
                        <div
                          key={opt.key}
                          className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${optClass}`}
                        >
                          <span className="w-5 h-5 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center font-bold text-[10px] shrink-0">
                            {opt.key}
                          </span>
                          <span className="flex-1 leading-relaxed">{opt.text}</span>
                          {isRealAnswer && <Check className="w-3.5 h-3.5 text-[#53DBAB] shrink-0 mt-0.5" />}
                          {isStudentChoice && !isRealAnswer && <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Box */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#35D5F2]/10 via-[#8B7CFF]/5 to-transparent border border-[#35D5F2]/20 space-y-1.5 text-xs">
                    <div className="font-bold text-[#35D5F2] flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>คำอธิบายเฉลยอย่างละเอียด (ข้อ {q.answer}. {q.answerText}):</span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed pl-5">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: ACTIVE TEST TAKING ENGINE (หน้าทำข้อสอบ 20 ข้อ)
  // =========================================================================
  const currentQ = unitQuestions[currentQIndex];
  if (!currentQ) return null;

  const answered = userAnswers[currentQIndex];
  const isCorrect = answered === currentQ.answer;
  const isFlagged = !!flaggedQuestions[currentQIndex];
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Top Test Control Bar */}
      <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-between gap-3 shadow-card-elevated sticky top-20 z-30 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (window.confirm('คุณต้องการยกเลิกการทดสอบและกลับสู่หน้าเลือกหน่วยใช่หรือไม่?')) {
                setExamStarted(false);
              }
            }}
            className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">ออก</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span
                className="px-2 py-0.5 rounded text-[10px] font-black text-[#080D1B]"
                style={{ backgroundColor: selectedUnit.color }}
              >
                UNIT {selectedUnit.unitNumber}
              </span>
              <span className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">
                {selectedUnit.nameTh.split('และ')[0]}
              </span>
            </div>
            <span className="text-[11px] text-[var(--text-muted)]">
              ตอบแล้ว {answeredCount}/20 ข้อ
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Flag Toggle Button */}
          <button
            onClick={() => handleToggleFlag(currentQIndex)}
            className={`p-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              isFlagged
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border-color)] hover:text-[var(--text-primary)]'
            }`}
            title="ติดธงไว้ทบทวน"
          >
            <Flag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isFlagged ? 'ติดธงแล้ว' : 'ติดธง'}</span>
          </button>

          {/* Timer Display (Exam mode) */}
          {examMode === 'exam' && (
            <div className={`px-3 py-1.5 rounded-xl border font-mono font-bold text-xs flex items-center gap-1.5 ${
              timeRemaining < 300 
                ? 'bg-red-500/15 border-red-500 text-red-400 animate-pulse'
                : 'bg-[var(--bg-elevated)] border-[var(--border-color)] text-[#35D5F2]'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          )}

          {/* Submit Exam Button */}
          <button
            onClick={() => {
              if (answeredCount < unitQuestions.length) {
                setShowConfirmSubmit(true);
              } else {
                handleFinishExam();
              }
            }}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] font-bold text-xs hover:opacity-95 shadow-glow-cyan transition-all flex items-center gap-1"
          >
            <Send className="w-3 h-3" />
            <span>ส่งข้อสอบ</span>
          </button>
        </div>
      </div>

      {/* 20-Question Grid Navigator */}
      <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-2">
        <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)]">
          <span className="font-semibold">ข้อสอบทั้งหมด 20 ข้อ (คลิกเพื่อกระโดดข้ามข้อ):</span>
          <span>ข้อปัจจุบัน: {currentQIndex + 1}/20</span>
        </div>

        <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
          {unitQuestions.map((_, idx) => {
            const isAnswered = userAnswers[idx] !== undefined;
            const isCurrent = currentQIndex === idx;
            const hasFlag = !!flaggedQuestions[idx];

            let cellClass = 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border-color)]';
            if (isCurrent) {
              cellClass = 'bg-[#35D5F2] text-[#080D1B] font-black border-[#35D5F2] shadow-glow-cyan';
            } else if (isAnswered) {
              cellClass = 'bg-[#8B7CFF]/20 text-[#8B7CFF] font-bold border-[#8B7CFF]/40';
            }

            return (
              <button
                key={idx}
                onClick={() => setCurrentQIndex(idx)}
                className={`h-8 rounded-lg text-xs font-mono transition-all border relative flex items-center justify-center ${cellClass}`}
              >
                <span>{idx + 1}</span>
                {hasFlag && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-black" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <SpotlightCard className="p-6 sm:p-8 space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#35D5F2]/10 text-[#35D5F2] border border-[#35D5F2]/20">
                {currentQ.tag}
              </span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">
                หน้า {currentQ.sourcePage} ใน Study Guide
              </span>
            </div>

            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
              currentQ.difficulty === 'basic' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
              currentQ.difficulty === 'intermediate' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
              'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }`}>
              ระดับ: {currentQ.difficulty.toUpperCase()}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-relaxed">
            <span className="text-[#35D5F2] mr-1.5 font-mono">ข้อ {currentQIndex + 1}.</span>
            {currentQ.question}
          </h3>
        </div>

        {/* 4 Choices */}
        <div className="space-y-3">
          {currentQ.options.map(opt => {
            const isSelected = answered === opt.key;
            const isRightAnswer = opt.key === currentQ.answer;

            let btnStyle = 'bg-[var(--bg-elevated)]/60 border-[var(--border-color)] hover:border-[#35D5F2]/50 text-[var(--text-primary)]';

            // In Practice Mode: reveal colors right away
            if (examMode === 'practice' && answered !== undefined) {
              if (isRightAnswer) {
                btnStyle = 'bg-[#53DBAB]/15 border-[#53DBAB] text-[#53DBAB] font-semibold';
              } else if (isSelected) {
                btnStyle = 'bg-red-500/15 border-red-500 text-red-400 font-semibold';
              } else {
                btnStyle = 'opacity-50 bg-[var(--bg-elevated)]/30 border-transparent text-[var(--text-muted)]';
              }
            } else if (examMode === 'exam') {
              // In Exam Simulator: only show selected blue state, don't spoil answers!
              if (isSelected) {
                btnStyle = 'bg-[#35D5F2]/15 border-[#35D5F2] text-[#35D5F2] font-semibold';
              }
            }

            return (
              <button
                key={opt.key}
                onClick={() => handleSelectAnswer(opt.key)}
                className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3.5 ${btnStyle}`}
              >
                <span className="w-6 h-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {opt.key}
                </span>
                <span className="leading-relaxed flex-1">{opt.text}</span>
                {examMode === 'practice' && answered !== undefined && isRightAnswer && (
                  <CheckCircle2 className="w-4 h-4 text-[#53DBAB] shrink-0 mt-0.5" />
                )}
                {examMode === 'practice' && answered !== undefined && isSelected && !isRightAnswer && (
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Explanation Box (In Practice Mode) */}
        {examMode === 'practice' && answered !== undefined && (
          <div className={`p-4 rounded-2xl border text-xs space-y-2 animate-fade-in ${
            isCorrect
              ? 'bg-[#53DBAB]/10 border-[#53DBAB]/30 text-[var(--text-primary)]'
              : 'bg-red-500/10 border-red-500/30 text-[var(--text-primary)]'
          }`}>
            <div className="flex items-center gap-2 font-bold">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#53DBAB]" />
                  <span className="text-[#53DBAB]">ถูกต้อง! เฉลยคือข้อ {currentQ.answer}. {currentQ.answerText}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400">ยังไม่ถูกต้อง คำตอบที่ถูกต้องคือข้อ {currentQ.answer}. {currentQ.answerText}</span>
                </>
              )}
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed pl-6">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Bottom Pagination & Navigation */}
        <div className="pt-4 flex items-center justify-between border-t border-[var(--border-color)]">
          <button
            onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQIndex === 0}
            className="px-4 py-2 rounded-xl bg-[var(--bg-elevated)] disabled:opacity-30 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] flex items-center gap-1.5 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>ข้อก่อนหน้า</span>
          </button>

          {currentQIndex < unitQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentQIndex(prev => Math.min(unitQuestions.length - 1, prev + 1))}
              className="px-5 py-2 rounded-xl bg-[#35D5F2] text-[#080D1B] font-bold text-xs hover:bg-[#35D5F2]/90 flex items-center gap-1.5 transition-all shadow-glow-cyan"
            >
              <span>ข้อถัดไป</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                if (answeredCount < unitQuestions.length) {
                  setShowConfirmSubmit(true);
                } else {
                  handleFinishExam();
                }
              }}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] font-bold text-xs hover:opacity-95 flex items-center gap-1.5 transition-all shadow-glow-cyan"
            >
              <Send className="w-3.5 h-3.5" />
              <span>ส่งข้อสอบและตรวจผล</span>
            </button>
          )}
        </div>
      </SpotlightCard>

      {/* Confirmation Modal when submitting with unanswered questions */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full p-6 rounded-3xl bg-[var(--bg-card)] border border-[#35D5F2]/30 space-y-4 shadow-2xl animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-lg font-bold text-[var(--text-primary)]">
                คุณยังตอบข้อสอบไม่ครบทุกข้อ
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                ตอบไปแล้ว {answeredCount} จาก {unitQuestions.length} ข้อ ยังเหลืออีก {unitQuestions.length - answeredCount} ข้อที่ยังว่างอยู่ คุณต้องการส่งตรวจทันทีหรือไม่?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-all"
              >
                กลับไปทำต่อ
              </button>
              <button
                onClick={handleFinishExam}
                className="py-2.5 rounded-xl bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] font-bold text-xs hover:opacity-95 transition-all shadow-glow-cyan"
              >
                ยืนยันส่งข้อสอบ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

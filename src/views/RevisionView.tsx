import React, { useState, useMemo } from 'react';
import { 
  Award, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  BookOpen, 
  ArrowRight, 
  HelpCircle, 
  Layers, 
  Shuffle, 
  ChevronLeft, 
  ChevronRight, 
  ShieldAlert, 
  Users, 
  Calendar,
  Check,
  Eye,
  EyeOff
} from 'lucide-react';
import { CATEGORIES } from '../data/studyContent';
import { PRACTICE_QUESTIONS, PracticeQuestion } from '../data/practiceQuestions';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';
import { EXAM_TRAPS, ExamTrap } from '../data/examTrapsData';
import { ADVANCED_QUESTIONS, AdvancedQuestion } from '../data/advancedQuestionsData';
import { TEAM_STRATEGY } from '../data/teamStrategyData';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { GradientText } from '../components/ui/GradientText';

interface RevisionViewProps {
  onOpenTopic: (topicId: string) => void;
}

export const RevisionView: React.FC<RevisionViewProps> = ({ onOpenTopic }) => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'flashcards' | 'traps' | 'advanced' | 'strategy'>('quiz');

  // ========================================================
  // 1. QUIZ MODE STATE & LOGIC
  // ========================================================
  const [quizDifficulty, setQuizDifficulty] = useState<'all' | 'basic' | 'intermediate' | 'advanced'>('all');
  const [quizCategory, setQuizCategory] = useState<string>('all');
  const [quizCount, setQuizCount] = useState<number>(20);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'ก' | 'ข' | 'ค' | 'ง'>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Filter questions for the quiz
  const activeQuizQuestions = useMemo(() => {
    return PRACTICE_QUESTIONS.filter(q => {
      if (quizDifficulty !== 'all' && q.difficulty !== quizDifficulty) return false;
      if (quizCategory !== 'all' && q.categoryId !== quizCategory) return false;
      return true;
    }).slice(0, quizCount);
  }, [quizDifficulty, quizCategory, quizCount, quizStarted]);

  const handleStartQuiz = () => {
    setCurrentQIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const handleSelectAnswer = (choiceKey: 'ก' | 'ข' | 'ค' | 'ง') => {
    if (userAnswers[currentQIndex] !== undefined) return; // already answered
    setUserAnswers(prev => ({ ...prev, [currentQIndex]: choiceKey }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQIndex < activeQuizQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    activeQuizQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) score++;
    });
    return score;
  };

  // ========================================================
  // 2. FLASHCARDS STATE & LOGIC
  // ========================================================
  const [cardCategory, setCardCategory] = useState<string>('all');
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const activeCards = useMemo(() => {
    return GLOSSARY_TERMS.filter(t => cardCategory === 'all' || t.categoryId === cardCategory);
  }, [cardCategory]);

  const currentCard = activeCards[cardIndex] || activeCards[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex(prev => (prev + 1) % activeCards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex(prev => (prev - 1 + activeCards.length) % activeCards.length);
  };

  const handleShuffleCards = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * activeCards.length);
    setCardIndex(randomIndex);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B7CFF]/15 border border-[#8B7CFF]/30 text-[#8B7CFF] text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Interactive Exam Preparation Engine</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
          ศูนย์ทบทวนและฝึกทำข้อสอบ —{' '}
          <GradientText from="#35D5F2" to="#8B7CFF">
            Exam Practice & Review Hub
          </GradientText>
        </h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          ระบบฝึกทำข้อสอบจำลอง 100 ข้อเสมือนจริง, แฟลชการ์ดคำศัพท์ 40 รายการ, จุดหลอกในห้องสอบ 12 ประเด็น และโจทย์วิเคราะห์อัตนัยรอบชิงชนะเลิศ
        </p>
      </div>

      {/* Main Mode Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-[var(--border-color)] pb-3 scrollbar-none">
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'quiz'
              ? 'bg-[#35D5F2] text-[#080D1B] shadow-glow-cyan'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>ข้อสอบจำลอง (Quiz Mode: 100 ข้อ)</span>
        </button>

        <button
          onClick={() => setActiveTab('flashcards')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'flashcards'
              ? 'bg-[#8B7CFF] text-[#080D1B] shadow-glow-violet'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>แฟลชการ์ดคำศัพท์ (Flashcards: 40 คำ)</span>
        </button>

        <button
          onClick={() => setActiveTab('traps')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'traps'
              ? 'bg-[#F59E0B] text-[#080D1B]'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>12 จุดหลอกในห้องสอบ (Exam Traps)</span>
        </button>

        <button
          onClick={() => setActiveTab('advanced')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'advanced'
              ? 'bg-[#EC4899] text-[#080D1B]'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>โจทย์อัตนัยรอบชิง (Final Round)</span>
        </button>

        <button
          onClick={() => setActiveTab('strategy')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'strategy'
              ? 'bg-[#53DBAB] text-[#080D1B]'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>กลยุทธ์ทีม 3 คน (Team Strategy)</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* 1. QUIZ MODE                                             */}
      {/* ======================================================== */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {!quizStarted ? (
            /* Quiz Configuration Card */
            <SpotlightCard className="p-6 sm:p-8 space-y-6 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#35D5F2]/10 text-[#35D5F2] flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  ตั้งค่าชุดข้อสอบจำลอง UTCC Digital & AI Challenge
                </h2>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  คัดเลือกจากคลังข้อสอบจำลอง 100 ข้อ พร้อมจับเวลาและเฉลยละเอียดแบบ Real-time
                </p>
              </div>

              <div className="space-y-4">
                {/* Level selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[var(--text-muted)] uppercase">
                    ระดับความยาก
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'all', label: 'ทั้งหมด' },
                      { id: 'basic', label: 'พื้นฐาน (1–30)' },
                      { id: 'intermediate', label: 'ปานกลาง (31–70)' },
                      { id: 'advanced', label: 'ยาก (71–100)' },
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setQuizDifficulty(opt.id as any)}
                        className={`p-2 rounded-xl text-xs font-semibold transition-all border text-center ${
                          quizDifficulty === opt.id
                            ? 'bg-[#35D5F2] text-[#080D1B] border-[#35D5F2]'
                            : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-color)]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[var(--text-muted)] uppercase">
                    หมวดหมู่ข้อสอบ
                  </label>
                  <select
                    value={quizCategory}
                    onChange={e => setQuizCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] outline-none cursor-pointer"
                  >
                    <option value="all">ทุกกลุ่มวิชา (5 กลุ่มสาระ)</option>
                    {CATEGORIES.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.nameTh}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Question count */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[var(--text-muted)] uppercase">
                    จำนวนข้อในการทดสอบ
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[10, 20, 30, 50].map(cnt => (
                      <button
                        key={cnt}
                        onClick={() => setQuizCount(cnt)}
                        className={`p-2 rounded-xl text-xs font-semibold transition-all border text-center ${
                          quizCount === cnt
                            ? 'bg-[#8B7CFF] text-[#080D1B] border-[#8B7CFF]'
                            : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-color)]'
                        }`}
                      >
                        {cnt} ข้อ {cnt === 20 && '(เท่ารอบคัดเลือก)'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleStartQuiz}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] font-bold text-sm hover:opacity-95 shadow-glow-cyan transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>เริ่มทำแบบทดสอบ ({activeQuizQuestions.length} ข้อ)</span>
                </button>
              </div>
            </SpotlightCard>
          ) : !quizFinished ? (
            /* Active Quiz Question Card */
            (() => {
              const currentQ = activeQuizQuestions[currentQIndex];
              if (!currentQ) return null;
              const answered = userAnswers[currentQIndex];
              const isCorrect = answered === currentQ.answer;

              return (
                <div className="max-w-3xl mx-auto space-y-6">
                  {/* Progress Header */}
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span className="font-semibold">
                      ข้อที่ <span className="text-[#35D5F2] font-mono font-bold">{currentQIndex + 1}</span> จาก {activeQuizQuestions.length}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[11px] font-mono">
                      ข้อสอบจริง #{currentQ.number} • {currentQ.difficulty.toUpperCase()}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-[var(--bg-card)] rounded-full overflow-hidden border border-[var(--border-color)]">
                    <div
                      className="h-full bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] transition-all duration-200"
                      style={{ width: `${((currentQIndex + 1) / activeQuizQuestions.length) * 100}%` }}
                    />
                  </div>

                  {/* Question Box */}
                  <SpotlightCard className="p-6 sm:p-8 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#35D5F2]/10 text-[#35D5F2] border border-[#35D5F2]/20">
                          {currentQ.tag}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)] font-mono">
                          หน้า {currentQ.sourcePage} ใน Study Guide
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-relaxed">
                        {currentQ.question}
                      </h3>
                    </div>

                    {/* Choices (ก, ข, ค, ง) */}
                    <div className="space-y-3">
                      {currentQ.options.map(opt => {
                        const isSelected = answered === opt.key;
                        const isRightAnswer = opt.key === currentQ.answer;

                        let btnStyle = 'bg-[var(--bg-elevated)]/60 border-[var(--border-color)] hover:border-[#35D5F2]/50 text-[var(--text-primary)]';

                        if (answered !== undefined) {
                          if (isRightAnswer) {
                            btnStyle = 'bg-[#53DBAB]/15 border-[#53DBAB] text-[#53DBAB] font-semibold';
                          } else if (isSelected) {
                            btnStyle = 'bg-red-500/15 border-red-500 text-red-400 font-semibold';
                          } else {
                            btnStyle = 'opacity-50 bg-[var(--bg-elevated)]/30 border-transparent text-[var(--text-muted)]';
                          }
                        }

                        return (
                          <button
                            key={opt.key}
                            onClick={() => handleSelectAnswer(opt.key)}
                            disabled={answered !== undefined}
                            className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3.5 ${btnStyle}`}
                          >
                            <span className="w-6 h-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                              {opt.key}
                            </span>
                            <span className="leading-relaxed flex-1">{opt.text}</span>
                            {answered !== undefined && isRightAnswer && (
                              <CheckCircle2 className="w-4 h-4 text-[#53DBAB] shrink-0 mt-0.5" />
                            )}
                            {answered !== undefined && isSelected && !isRightAnswer && (
                              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box (shown after answering) */}
                    {showExplanation && (
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

                    {/* Bottom Action */}
                    <div className="pt-4 flex items-center justify-between border-t border-[var(--border-color)]">
                      <button
                        onClick={() => setQuizStarted(false)}
                        className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      >
                        ยกเลิกการทดสอบ
                      </button>

                      {answered !== undefined && (
                        <button
                          onClick={handleNextQuestion}
                          className="px-5 py-2 rounded-xl bg-[#35D5F2] text-[#080D1B] font-bold text-xs hover:bg-[#35D5F2]/90 flex items-center gap-1.5 transition-all shadow-glow-cyan"
                        >
                          <span>{currentQIndex < activeQuizQuestions.length - 1 ? 'ข้อถัดไป' : 'ดูผลคะแนน'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </SpotlightCard>
                </div>
              );
            })()
          ) : (
            /* Quiz Result Screen */
            (() => {
              const score = calculateScore();
              const total = activeQuizQuestions.length;
              const pct = Math.round((score / total) * 100);

              return (
                <SpotlightCard className="p-8 text-center space-y-6 max-w-xl mx-auto animate-fade-in">
                  <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[#35D5F2]/10 text-[#35D5F2] shadow-glow-cyan">
                    <Award className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-[var(--text-primary)]">
                      ผลการทดสอบของคุณ
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">
                      ชุดข้อสอบจำลอง UTCC Digital and AI Challenge 2026
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)]">
                    <div className="text-4xl font-extrabold text-[#35D5F2] font-mono">
                      {score} / {total}
                    </div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-1">
                      คิดเป็น {pct}%
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-2">
                      {pct >= 80
                        ? 'ยอดเยี่ยมมาก! คุณมีความแม่นยำสูง พร้อมสำหรับการแข่งขันรอบคัดเลือก'
                        : pct >= 50
                        ? 'ผลงานดี! แนะนำให้ทบทวนข้อที่ตอบผิดและอ่านเนื้อหาเพิ่มเติมในส่วนของจุดหลอก'
                        : 'ควรกลับไปอ่านทบทวนเนื้อหาฉบับสมบูรณ์ในคลังบทเรียนและลองใหม่อีกครั้ง'}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleStartQuiz}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#35D5F2] text-[#080D1B] font-bold text-xs flex items-center justify-center gap-1.5 shadow-glow-cyan"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>ทำแบบทดสอบอีกครั้ง</span>
                    </button>

                    <button
                      onClick={() => onOpenTopic('lesson-general-it')}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)] text-xs font-semibold"
                    >
                      <span>กลับไปอ่านบทเรียน</span>
                    </button>
                  </div>
                </SpotlightCard>
              );
            })()
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. FLASHCARDS MODE                                       */}
      {/* ======================================================== */}
      {activeTab === 'flashcards' && (
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <select
              value={cardCategory}
              onChange={e => {
                setCardCategory(e.target.value);
                setCardIndex(0);
                setIsFlipped(false);
              }}
              className="px-3 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] outline-none w-full sm:w-auto"
            >
              <option value="all">ทุกกลุ่มวิชา ({GLOSSARY_TERMS.length} คำศัพท์)</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>
                  {c.nameTh}
                </option>
              ))}
            </select>

            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <span>{cardIndex + 1} / {activeCards.length}</span>
              <button
                onClick={handleShuffleCards}
                className="p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)]"
                title="สุ่มการ์ด"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Flashcard Component */}
          {currentCard && (
            <div
              onClick={() => setIsFlipped(prev => !prev)}
              className="cursor-pointer min-h-[300px] p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#8B7CFF]/50 transition-all flex flex-col justify-between shadow-card-elevated relative overflow-hidden group select-none"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#8B7CFF]/15 text-[#8B7CFF]">
                  {currentCard.categoryName}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] font-mono">
                  คลิกเพื่อพลิกดูความหมาย
                </span>
              </div>

              <div className="text-center py-6 space-y-3">
                {!isFlipped ? (
                  <>
                    <div className="text-[11px] uppercase tracking-widest text-[#35D5F2] font-semibold">
                      Technical Term
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                      {currentCard.term}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] pt-2">
                      (คลิกที่การ์ดเพื่อดูคำแปลภาษาไทยและหลักการทำงาน)
                    </p>
                  </>
                ) : (
                  <div className="space-y-3 animate-fade-in">
                    <div className="text-[11px] uppercase tracking-widest text-[#53DBAB] font-semibold">
                      ความหมายและหลักการทำงาน
                    </div>
                    <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed font-normal">
                      {currentCard.definition}
                    </p>
                    <div className="text-[11px] text-[var(--text-muted)] font-mono pt-2">
                      อ้างอิง: Study Guide หน้า {currentCard.sourcePage}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                <span>{isFlipped ? 'ด้านหลัง (คำแปล)' : 'ด้านหน้า (คำศัพท์)'}</span>
                <span className="text-[#8B7CFF] font-semibold">แตะเพื่อพลิก</span>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrevCard}
              className="px-4 py-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ก่อนหน้า</span>
            </button>

            <button
              onClick={() => setIsFlipped(prev => !prev)}
              className="px-4 py-2 rounded-xl bg-[var(--bg-elevated)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-color)]"
            >
              {isFlipped ? 'ดูคำศัพท์' : 'ดูเฉลยคำแปล'}
            </button>

            <button
              onClick={handleNextCard}
              className="px-4 py-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5"
            >
              <span>ถัดไป</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. 12 EXAM TRAPS & MISCONCEPTIONS (Table 8)              */}
      {/* ======================================================== */}
      {activeTab === 'traps' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-300">12 ข้อควรระวังและจุดหลอกในห้องสอบ (ตารางที่ 8 หน้า 23–24)</h4>
              <p className="mt-0.5 text-amber-200/90 leading-relaxed">
                สรุปจากสถิติข้อสอบแข่งขัน UTCC STECH ผู้เข้าสอบมักเสียคะแนนจาก 'ตัวลวงเชิงแนวคิด' เหล่านี้มากที่สุด ทบทวน 12 ข้อนี้ให้ขึ้นใจก่อนเข้าห้องสอบ!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EXAM_TRAPS.map((trap, idx) => (
              <SpotlightCard key={trap.id} className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-500/15 text-red-400">
                    จุดหลอกข้อที่ {idx + 1} • {trap.category}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] font-mono">
                    หน้า {trap.sourcePage}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-red-400 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>ความเข้าใจผิดที่พบบ่อย (Misconception):</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] pl-5 leading-relaxed font-medium">
                    {trap.misconception}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[var(--border-color)]">
                  <div className="text-xs font-bold text-[#53DBAB] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>ข้อเท็จจริงที่ถูกต้องทางเทคนิค (Exam Fact):</span>
                  </div>
                  <p className="text-xs text-[var(--text-primary)] pl-5 leading-relaxed">
                    {trap.fact}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. FINAL ROUND ADVANCED ANALYTICAL SCENARIOS            */}
      {/* ======================================================== */}
      {activeTab === 'advanced' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-[#EC4899]/10 border border-[#EC4899]/30 text-xs text-[var(--text-secondary)]">
            <h4 className="font-bold text-[#EC4899]">โจทย์วิเคราะห์และบูรณาการระดับสูง (รอบชิงชนะเลิศ 10 ข้ออัตนัย)</h4>
            <p className="mt-0.5 leading-relaxed">
              จำลองแนวข้อสอบอัตนัย 3 ข้อใหญ่จากคู่มือเตรียมสอบ (หน้า 52–54) เพื่อฝึกทักษะการคำนวณและวิเคราะห์อย่างเป็นขั้นตอน
            </p>
          </div>

          <div className="space-y-6">
            {ADVANCED_QUESTIONS.map(adv => (
              <SpotlightCard key={adv.id} className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EC4899]/15 text-[#EC4899] border border-[#EC4899]/30">
                    {adv.topic}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    หน้า {adv.sourcePage} ใน Study Guide
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {adv.title}
                  </h3>
                  <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] leading-relaxed whitespace-pre-line font-mono">
                    {adv.scenario}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#35D5F2]">
                    แนวทางการวิเคราะห์และเฉลยละเอียดทีละขั้นตอน:
                  </h4>
                  <div className="space-y-2.5">
                    {adv.solutionSteps.map((step, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs space-y-1">
                        <div className="font-bold text-[#8B7CFF]">{step.step}</div>
                        <div className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                          {step.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#53DBAB]/10 border border-[#53DBAB]/25 text-xs text-[#53DBAB]">
                  <strong>Key Takeaway:</strong> {adv.keyTakeaways}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. TEAM STRATEGY & COUNTDOWN PLAN                       */}
      {/* ======================================================== */}
      {activeTab === 'strategy' && (
        <div className="space-y-6">
          <SpotlightCard className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#53DBAB]/15 text-[#53DBAB] border border-[#53DBAB]/30">
                {TEAM_STRATEGY.sourcePageRange}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {TEAM_STRATEGY.title}
              </h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {TEAM_STRATEGY.concept}
              </p>
            </div>

            {/* Tri-Specialist Matrix */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#35D5F2]" />
                <span>การแบ่งบทบาท 3 สมาชิก (ตารางที่ 9)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TEAM_STRATEGY.roles.map((role, rIdx) => (
                  <div key={rIdx} className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-2.5">
                    <h4 className="font-bold text-xs text-[#35D5F2]">{role.member}</h4>
                    <div className="text-xs text-[var(--text-secondary)] space-y-1">
                      <div><strong className="text-[var(--text-primary)]">วิชาหลัก:</strong> {role.primaryDomain}</div>
                      <div><strong className="text-[var(--text-primary)]">ตรวจไขว้:</strong> {role.secondaryCrossCheck}</div>
                    </div>
                    <div className="pt-2 border-t border-[var(--border-color)] text-[11px] text-[var(--text-muted)] leading-relaxed">
                      <strong>จุดเน้น:</strong> {role.keyFocus}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countdown Plan */}
            <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
              <h3 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8B7CFF]" />
                <span>แผนตารางซ้อมโค้งสุดท้ายก่อน 19 พฤศจิกายน 2569</span>
              </h3>

              <div className="space-y-2.5">
                {TEAM_STRATEGY.countdownPlan.map((plan, pIdx) => (
                  <div key={pIdx} className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-[#8B7CFF] shrink-0 sm:w-80">{plan.period}</span>
                    <span className="text-[var(--text-secondary)] flex-1">{plan.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      )}
    </div>
  );
};

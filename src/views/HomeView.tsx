import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Bookmark, 
  Clock, 
  Layers, 
  Cpu, 
  Network, 
  BrainCircuit, 
  Code, 
  Globe,
  FileCheck2,
  Calendar,
  Flame,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle
} from 'lucide-react';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { GradientText } from '../components/ui/GradientText';
import { CATEGORIES, STUDY_TOPICS, getTopicById } from '../data/studyContent';
import { PRACTICE_QUESTIONS } from '../data/practiceQuestions';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { EXAM_TRAPS } from '../data/examTrapsData';
import { CONTENT_AUDIT_REPORT } from '../data/contentAudit';
import { COMPETITION_DATA } from '../data/competitionInfo';
import { NavTab } from '../components/Header';
import { CategoryId } from '../types';
import { Target, Lightbulb } from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenTopic: (topicId: string) => void;
  onSelectCategoryFilter: (catId: CategoryId | 'all') => void;
  onOpenRevision?: (subTab?: 'unit-tests' | 'summaries' | 'quiz' | 'flashcards' | 'traps', categoryId?: CategoryId) => void;
  completedIds: string[];
  bookmarkedIds: string[];
  lastReadTopicId?: string;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenTopic,
  onSelectCategoryFilter,
  onOpenRevision,
  completedIds,
  bookmarkedIds,
  lastReadTopicId,
}) => {
  const totalTopics = STUDY_TOPICS.length;
  const completedCount = completedIds.filter(id => STUDY_TOPICS.some(t => t.id === id)).length;
  const progressPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const lastReadTopic = lastReadTopicId ? getTopicById(lastReadTopicId) : undefined;

  const categoryIcons: Record<string, React.ElementType> = {
    'general-it': Globe,
    'network-cloud': Network,
    'hardware-os': Cpu,
    'programming-algo': Code,
    'ai-datascience': BrainCircuit,
  };

  return (
    <div className="space-y-12 pb-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[#35D5F2]/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#35D5F2] animate-pulse" />
            <span className="text-xs font-semibold text-[#35D5F2] tracking-wide">
              UTCC Digital & AI Challenge 2026
            </span>
            <span className="text-xs text-[var(--text-muted)]">|</span>
            <span className="text-xs text-[var(--text-secondary)]">Complete Study Guide 57 หน้า 100%</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
            เตรียมตัวสอบอย่างมั่นใจ ด้วย{' '}
            <GradientText from="#35D5F2" to="#8B7CFF">
              ระบบสรุปเนื้อหาอัจฉริยะ
            </GradientText>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            รวบรวมเนื้อหาครบถ้วนจากคู่มือเตรียมสอบฉบับสมบูรณ์ (57 หน้า) ทั้ง 5 กลุ่มความรู้, 150 ข้อสอบจำลองพร้อมเฉลยละเอียด, 40 คำศัพท์เทคนิค และโจทย์วิเคราะห์อัตนัยรอบชิงชนะเลิศ
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-3 pt-4 max-w-3xl mx-auto w-full px-2">
            <button
              onClick={() => {
                if (onOpenRevision) onOpenRevision('unit-tests');
                else onSelectTab('revision');
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#35D5F2] hover:bg-[#20c8e7] text-[#080D1B] text-sm sm:text-base font-black transition-all shadow-glow-cyan transform hover:-translate-y-0.5 active:scale-95 min-h-[48px] whitespace-nowrap"
            >
              <Target className="w-5 h-5 text-[#080D1B] shrink-0" />
              <span>🎯 ข้อสอบแยก 5 หน่วย (150 ข้อ)</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#080D1B] text-[#35D5F2] uppercase tracking-wider shrink-0 animate-pulse">
                NEW 150 ข้อ
              </span>
            </button>

            <button
              onClick={() => {
                if (onOpenRevision) onOpenRevision('summaries');
                else onSelectTab('revision');
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#8B7CFF] hover:bg-[#7a6aee] text-white text-sm sm:text-base font-black transition-all shadow-glow-violet transform hover:-translate-y-0.5 active:scale-95 min-h-[48px] whitespace-nowrap"
            >
              <Lightbulb className="w-5 h-5 text-amber-300 shrink-0" />
              <span>⚡ สรุปฉบับเข้าใจง่าย (Quick Notes)</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-[#080D1B] uppercase tracking-wider shrink-0 animate-pulse">
                HOT สรุป 15 นาที
              </span>
            </button>

            <button
              onClick={() => onSelectTab('library')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#18243A] hover:bg-[#20304c] text-white border-2 border-white/15 hover:border-[#35D5F2] font-bold text-sm transition-all transform hover:-translate-y-0.5 active:scale-95 min-h-[48px] whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-[#35D5F2] shrink-0" />
              <span>เข้าสู่คลังบทเรียน (7 บท)</span>
              <ArrowRight className="w-4 h-4 text-[#35D5F2] shrink-0" />
            </button>

            <button
              onClick={() => onSelectTab('audit')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#53DBAB]/10 hover:bg-[#53DBAB]/20 text-[#53DBAB] border border-[#53DBAB]/40 font-bold text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 active:scale-95 min-h-[48px] whitespace-nowrap"
            >
              <FileCheck2 className="w-4 h-4 text-[#53DBAB] shrink-0" />
              <span>ตรวจ 57 หน้า (100% Coverage)</span>
            </button>
          </div>

          {/* Quick Info Badges from verified competition posters */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-secondary)]">
            <div className="flex items-center gap-1.5 bg-[var(--bg-card)]/80 px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
              <Calendar className="w-3.5 h-3.5 text-[#35D5F2]" />
              <span>วันสอบจริง: {COMPETITION_DATA.date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[var(--bg-card)]/80 px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
              <Award className="w-3.5 h-3.5 text-[#8B7CFF]" />
              <span>ชิงรางวัลรวม 18,000 บ. + ทุนการศึกษา</span>
            </div>
          </div>
        </div>
      </section>

      {/* Real Study Overview Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <SpotlightCard className="p-4">
            <p className="text-[11px] font-medium text-[var(--text-muted)]">หมวดวิชาสอบ</p>
            <p className="text-2xl font-extrabold text-[var(--text-primary)] mt-1">
              {CATEGORIES.length}
            </p>
            <p className="text-[10px] text-[#35D5F2] mt-0.5 font-semibold">5 กลุ่มสาระหลัก</p>
          </SpotlightCard>

          <SpotlightCard className="p-4">
            <p className="text-[11px] font-medium text-[var(--text-muted)]">บทเรียนฉบับเต็ม</p>
            <p className="text-2xl font-extrabold text-[#8B7CFF] mt-1">
              {totalTopics}
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">35 หัวข้อย่อย</p>
          </SpotlightCard>

          <SpotlightCard className="p-4">
            <p className="text-[11px] font-medium text-[var(--text-muted)]">ข้อสอบจำลอง</p>
            <p className="text-2xl font-extrabold text-[#53DBAB] mt-1">
              {PRACTICE_QUESTIONS.length}
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">3 ระดับ + เฉลย</p>
          </SpotlightCard>

          <SpotlightCard className="p-4">
            <p className="text-[11px] font-medium text-[var(--text-muted)]">คำศัพท์เทคนิค</p>
            <p className="text-2xl font-extrabold text-[#F59E0B] mt-1">
              {GLOSSARY_TERMS.length}
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">Flashcards ตาราง 7</p>
          </SpotlightCard>

          <SpotlightCard className="p-4">
            <p className="text-[11px] font-medium text-[var(--text-muted)]">จุดหลอกในห้องสอบ</p>
            <p className="text-2xl font-extrabold text-red-400 mt-1">
              {EXAM_TRAPS.length}
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">12 ข้อควรระวัง</p>
          </SpotlightCard>

          <SpotlightCard className="p-4">
            <p className="text-[11px] font-medium text-[var(--text-muted)]">ความคืบหน้าการอ่าน</p>
            <p className="text-2xl font-extrabold text-[#35D5F2] mt-1">
              {progressPercentage}%
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">{completedCount}/{totalTopics} บท</p>
          </SpotlightCard>
        </div>
      </section>

      {/* Continue Reading / Quick Progress Banner */}
      {lastReadTopic && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#111B30] to-[#18243A] border border-[#35D5F2]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-card-elevated">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#35D5F2] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#35D5F2]">
                  อ่านค้างไว้ล่าสุด • {lastReadTopic.sourcePages}
                </span>
                <span className="text-xs text-[var(--text-muted)]">• {lastReadTopic.readingTime} นาที</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                {lastReadTopic.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] line-clamp-1">
                {lastReadTopic.description}
              </p>
            </div>

            <button
              onClick={() => onOpenTopic(lastReadTopic.id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#35D5F2] hover:bg-[#35D5F2]/90 text-[#080D1B] font-bold text-sm shrink-0 transition-all shadow-glow-cyan"
            >
              <span>อ่านต่อ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* NEW FEATURE HIGHLIGHT SHOWCASE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#111B30] via-[#0D1526] to-[#18243A] border-2 border-[#35D5F2]/40 shadow-glow-cyan relative overflow-hidden">
          {/* Ambient light blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#35D5F2]/20 to-[#8B7CFF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-color)] pb-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-black bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] tracking-wider animate-pulse shadow-glow-cyan">
                  ✨ อัปเดตใหม่ล่าสุด (NEW UPDATE)
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  คลังข้อสอบ 150 ข้อเต็ม (5 หน่วย x 30 ข้อ) + สรุปย่อ 5 หมวด
                </span>
              </div>
              <span className="text-xs text-[#53DBAB] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>พร้อมใช้งาน 100% ครอบคลุม 57 หน้า</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Feature 1: Unit Drill 150 ข้อ */}
              <div 
                onClick={() => onOpenRevision ? onOpenRevision('unit-tests') : onSelectTab('revision')}
                className="p-6 rounded-2xl bg-[var(--bg-elevated)]/90 hover:bg-[var(--bg-elevated)] border-2 border-[#35D5F2]/40 hover:border-[#35D5F2] transition-all cursor-pointer group shadow-card-elevated space-y-4 hover:shadow-glow-cyan transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#35D5F2]/15 text-[#35D5F2] border border-[#35D5F2]/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-cyan">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-black bg-[#35D5F2] text-[#080D1B] shadow-glow-cyan">
                    150 ข้อ • 5 หน่วย
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-[var(--text-primary)] group-hover:text-[#35D5F2] transition-colors flex items-center gap-2">
                    <span>🎯 ข้อสอบแยก 5 หน่วย (Unit Practice Tests)</span>
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                    ฝึกทำข้อสอบตรงตามกลุ่มวิชา หน่วยละ 30 ข้อ (ข้อ 1–150) มีให้เลือกทั้ง <strong>โหมดสอบจริงจับเวลา 25 นาที</strong> หรือ <strong>โหมดฝึกซ้อมตรวจเฉลยทันที</strong> พร้อมบันทึกคะแนนสูงสุดและเฉลยละเอียด
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-black text-[#35D5F2]">
                  <span>เริ่มทำข้อสอบแยก 5 หน่วยทันที</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Feature 2: Easy Summaries & Cheat Sheets */}
              <div 
                onClick={() => onOpenRevision ? onOpenRevision('summaries') : onSelectTab('revision')}
                className="p-6 rounded-2xl bg-[var(--bg-elevated)]/90 hover:bg-[var(--bg-elevated)] border-2 border-[#8B7CFF]/40 hover:border-[#8B7CFF] transition-all cursor-pointer group shadow-card-elevated space-y-4 hover:shadow-glow-violet transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B7CFF]/15 text-[#8B7CFF] border border-[#8B7CFF]/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-violet">
                    <Lightbulb className="w-6 h-6 text-amber-300" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-black bg-gradient-to-r from-[#8B7CFF] to-[#EC4899] text-white shadow-glow-violet">
                    HOT • อ่านจบ 15 นาที
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-[var(--text-primary)] group-hover:text-[#8B7CFF] transition-colors flex items-center gap-2">
                    <span>⚡ สรุปฉบับเข้าใจง่าย (Quick Visual Notes)</span>
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                    สกัดเฉพาะจุดตายที่ออกสอบชัวร์: แก่นแท้ 1 ประโยค, สูตรคำนวณทางลัด (AMAT, Subnetting, F1-Score, VRAM), ตารางเปรียบเทียบจุดต่าง และทริคตัดช้อยส์ในห้องสอบ
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-black text-[#8B7CFF]">
                  <span>เปิดอ่านสรุปฉบับเข้าใจง่ายทันที</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Official Study Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border-color)] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                5 กลุ่มสาระความรู้ตามเกณฑ์การแข่งขัน
              </h2>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#35D5F2]/10 text-[#35D5F2] border border-[#35D5F2]/20">
                Official Syllabus
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              อ้างอิงจากตารางที่ 1 ในคู่มือเตรียมสอบ UTCC Digital and AI Challenge 2026
            </p>
          </div>

          <button
            onClick={() => onSelectTab('library')}
            className="text-xs font-semibold text-[#35D5F2] hover:underline flex items-center gap-1"
          >
            <span>ดูทั้งหมดในคลังบทเรียน</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(category => {
            const Icon = categoryIcons[category.id] || Globe;
            const topics = STUDY_TOPICS.filter(t => t.category === category.id);
            const topicCount = topics.length;

            return (
              <SpotlightCard
                key={category.id}
                className="p-5 flex flex-col justify-between group cursor-pointer"
                onClick={() => {
                  onSelectCategoryFilter(category.id);
                  onSelectTab('library');
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                        border: `1px solid ${category.color}35`,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                      {topicCount} บทเรียนฉบับเต็ม
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-[var(--text-primary)] group-hover:text-[#35D5F2] transition-colors">
                      {category.nameTh}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                      {category.nameEn}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategoryFilter(category.id);
                      onSelectTab('library');
                    }}
                    className="font-semibold text-[#35D5F2] hover:underline flex items-center gap-1"
                  >
                    <span>อ่านบทเรียน</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenRevision) onOpenRevision('summaries', category.id);
                        else onSelectTab('revision');
                      }}
                      className="px-2 py-1 rounded-md bg-[var(--bg-elevated)] hover:bg-[#8B7CFF]/15 text-[#8B7CFF] border border-[var(--border-color)] text-[11px] font-bold transition-all flex items-center gap-1"
                      title="อ่านสรุปย่อหน่วยนี้"
                    >
                      <Lightbulb className="w-3 h-3 text-amber-300" />
                      <span>สรุป</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenRevision) onOpenRevision('unit-tests', category.id);
                        else onSelectTab('revision');
                      }}
                      className="px-2.5 py-1 rounded-md bg-[#35D5F2]/10 hover:bg-[#35D5F2] text-[#35D5F2] hover:text-[#080D1B] border border-[#35D5F2]/30 text-[11px] font-bold transition-all flex items-center gap-1"
                      title="ทำข้อสอบ 30 ข้อของหน่วยนี้"
                    >
                      <Target className="w-3 h-3" />
                      <span>สอบ 30 ข้อ</span>
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">
            เครื่องมือเตรียมตัวสอบ (Exam Preparation Suite)
          </h3>
          <span className="text-xs text-[var(--text-muted)]">ครบทั้งแบบฝึกหัด สรุปย่อ และจำลองสถานการณ์</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => onOpenRevision ? onOpenRevision('unit-tests') : onSelectTab('revision')}
            className="p-4 rounded-xl bg-gradient-to-br from-[#111B30] to-[#18243A] hover:bg-[var(--bg-elevated)] border border-[#35D5F2]/40 hover:border-[#35D5F2] text-left transition-all group shadow-glow-cyan"
          >
            <Target className="w-5 h-5 text-[#35D5F2] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">ข้อสอบแยก 5 หน่วย</h4>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">เจาะลึกหน่วยละ 30 ข้อ</p>
          </button>

          <button
            onClick={() => onOpenRevision ? onOpenRevision('summaries') : onSelectTab('revision')}
            className="p-4 rounded-xl bg-gradient-to-br from-[#111B30] to-[#18243A] hover:bg-[var(--bg-elevated)] border border-[#8B7CFF]/40 hover:border-[#8B7CFF] text-left transition-all group shadow-glow-violet"
          >
            <Lightbulb className="w-5 h-5 text-amber-300 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">สรุปฉบับเข้าใจง่าย</h4>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">สูตรลัด & ทริคตัดช้อยส์</p>
          </button>

          <button
            onClick={() => onOpenRevision ? onOpenRevision('quiz') : onSelectTab('revision')}
            className="p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 text-left transition-all group"
          >
            <Sparkles className="w-5 h-5 text-[#35D5F2] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">ข้อสอบรวม 150 ข้อ</h4>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">Full Mock Exam จับเวลา</p>
          </button>

          <button
            onClick={() => onOpenRevision ? onOpenRevision('flashcards') : onSelectTab('revision')}
            className="p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#53DBAB]/40 text-left transition-all group"
          >
            <Layers className="w-5 h-5 text-[#53DBAB] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">แฟลชการ์ด 40 คำศัพท์</h4>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">สุ่มทวนศัพท์เทคนิค</p>
          </button>

          <button
            onClick={() => onOpenRevision ? onOpenRevision('traps') : onSelectTab('revision')}
            className="p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#F59E0B]/40 text-left transition-all group"
          >
            <AlertTriangle className="w-5 h-5 text-[#F59E0B] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">12 จุดหลอกห้องสอบ</h4>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">ข้อที่คนมักตอบผิด</p>
          </button>

          <button
            onClick={() => onSelectTab('audit')}
            className="p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#53DBAB]/40 text-left transition-all group"
          >
            <FileCheck2 className="w-5 h-5 text-[#53DBAB] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">ตรวจ 57 หน้า 100%</h4>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">Audit Coverage</p>
          </button>
        </div>
      </section>
    </div>
  );
};

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
  ShieldAlert
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

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenTopic: (topicId: string) => void;
  onSelectCategoryFilter: (catId: CategoryId | 'all') => void;
  completedIds: string[];
  bookmarkedIds: string[];
  lastReadTopicId?: string;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenTopic,
  onSelectCategoryFilter,
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
            รวบรวมเนื้อหาครบถ้วนจากคู่มือเตรียมสอบฉบับสมบูรณ์ (57 หน้า) ทั้ง 5 กลุ่มความรู้, 100 ข้อสอบจำลองพร้อมเฉลยละเอียด, 40 คำศัพท์เทคนิค และโจทย์วิเคราะห์อัตนัยรอบชิงชนะเลิศ
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onSelectTab('library')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] font-bold text-sm hover:opacity-95 shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <BookOpen className="w-4 h-4" />
              <span>เข้าสู่คลังบทเรียน (7 บท)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectTab('revision')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 text-sm font-semibold transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#35D5F2]" />
              <span>ทำข้อสอบจำลอง 100 ข้อ (Quiz Mode)</span>
            </button>

            <button
              onClick={() => onSelectTab('audit')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#53DBAB]/10 text-xs font-semibold text-[var(--text-secondary)] hover:text-[#53DBAB] border border-[var(--border-color)] transition-all"
            >
              <FileCheck2 className="w-4 h-4 text-[#53DBAB]" />
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

                <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-semibold text-[#35D5F2]">
                  <span>เปิดอ่านบทเรียนกลุ่มนี้</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
          เครื่องมือเตรียมตัวสอบ (Exam Tools)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => onSelectTab('revision')}
            className="p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 text-left transition-all group"
          >
            <Sparkles className="w-5 h-5 text-[#35D5F2] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-[var(--text-primary)]">ข้อสอบจำลอง 100 ข้อ</h4>
            <p className="text-xs text-[var(--text-muted)] mt-1">Quiz Mode พร้อมเฉลยละเอียด</p>
          </button>

          <button
            onClick={() => onSelectTab('revision')}
            className="p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#8B7CFF]/40 text-left transition-all group"
          >
            <Layers className="w-5 h-5 text-[#8B7CFF] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-[var(--text-primary)]">แฟลชการ์ด 40 คำศัพท์</h4>
            <p className="text-xs text-[var(--text-muted)] mt-1">สุ่มทวนคำศัพท์เทคนิค</p>
          </button>

          <button
            onClick={() => onSelectTab('audit')}
            className="p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#53DBAB]/40 text-left transition-all group"
          >
            <FileCheck2 className="w-5 h-5 text-[#53DBAB] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-[var(--text-primary)]">ตรวจ 57 หน้า 100%</h4>
            <p className="text-xs text-[var(--text-muted)] mt-1">Content Audit Checklist</p>
          </button>

          <button
            onClick={() => onSelectTab('competition')}
            className="p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#F59E0B]/40 text-left transition-all group"
          >
            <Award className="w-5 h-5 text-[#F59E0B] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-[var(--text-primary)]">เกณฑ์และรางวัล</h4>
            <p className="text-xs text-[var(--text-muted)] mt-1">ปรนัย 20 + อัตนัย 10 ข้อ</p>
          </button>
        </div>
      </section>
    </div>
  );
};

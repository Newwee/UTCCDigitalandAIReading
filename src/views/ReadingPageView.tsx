import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  CheckCircle2, 
  Check, 
  Copy, 
  Share2, 
  Type, 
  Maximize2, 
  Minimize2, 
  ListOrdered, 
  BookOpen, 
  Clock, 
  Tag, 
  Sparkles, 
  AlertCircle, 
  Lightbulb, 
  Flame, 
  HelpCircle,
  Menu,
  X,
  ArrowUp
} from 'lucide-react';
import { StudyTopic, CategoryId } from '../types';
import { CATEGORIES, STUDY_TOPICS, getTopicById } from '../data/studyContent';

interface ReadingPageViewProps {
  currentTopicId?: string;
  onSelectTopic: (topicId: string) => void;
  isBookmarked: (id: string) => boolean;
  isCompleted: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  onRecordVisit: (topicId: string, scrollPercentage?: number) => void;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  onChangeFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
  readingWidth: 'compact' | 'standard' | 'wide';
  onChangeReadingWidth: (width: 'compact' | 'standard' | 'wide') => void;
}

export const ReadingPageView: React.FC<ReadingPageViewProps> = ({
  currentTopicId,
  onSelectTopic,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleCompleted,
  onRecordVisit,
  fontSize,
  onChangeFontSize,
  readingWidth,
  onChangeReadingWidth,
}) => {
  // If no topic selected, select the first available
  const activeTopic: StudyTopic = (currentTopicId && getTopicById(currentTopicId)) || STUDY_TOPICS[0];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightTocOpen, setRightTocOpen] = useState(false);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  const contentContainerRef = useRef<HTMLDivElement>(null);

  // Record visit
  useEffect(() => {
    if (activeTopic) {
      onRecordVisit(activeTopic.id, scrollProgress);
    }
  }, [activeTopic?.id]);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollProgress(currentProgress);
      }

      // Check which section is in view
      if (activeTopic?.sections) {
        for (let i = activeTopic.sections.length - 1; i >= 0; i--) {
          const section = activeTopic.sections[i];
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160) {
              setActiveSectionId(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTopic]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveSectionId(sectionId);
      setRightTocOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopySection = (sectionTitle: string, content: string, secId: string) => {
    const textToCopy = `${sectionTitle}\n\n${content}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSectionId(secId);
    setTimeout(() => setCopiedSectionId(null), 2000);
  };

  // Find previous and next topics
  const currentIndex = STUDY_TOPICS.findIndex(t => t.id === activeTopic.id);
  const prevTopic = currentIndex > 0 ? STUDY_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < STUDY_TOPICS.length - 1 ? STUDY_TOPICS[currentIndex + 1] : null;

  // Reading width CSS class
  const widthClasses = {
    compact: 'max-w-2xl',
    standard: 'max-w-3xl',
    wide: 'max-w-4xl',
  }[readingWidth];

  // Font size CSS class
  const fontClasses = {
    sm: 'reading-font-sm',
    base: 'reading-font-base',
    lg: 'reading-font-lg',
    xl: 'reading-font-xl',
  }[fontSize];

  const bookmarked = isBookmarked(activeTopic.id);
  const completed = isCompleted(activeTopic.id);
  const currentCategory = CATEGORIES.find(c => c.id === activeTopic.category);

  return (
    <div className="relative min-h-screen">
      {/* 1. Real-time Reading Progress Bar (Fixed Top) */}
      <div className="fixed top-16 left-0 w-full h-1 bg-[var(--border-color)] z-30">
        <div
          className="h-full bg-gradient-to-r from-[#35D5F2] via-[#8B7CFF] to-[#53DBAB] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Mobile Controls Bar */}
      <div className="lg:hidden sticky top-16 z-20 glass-panel px-4 py-2 flex items-center justify-between border-b border-[var(--border-color)]">
        <button
          onClick={() => setLeftSidebarOpen(true)}
          className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-primary)]"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#35D5F2]" />
          <span>หัวข้อ ({STUDY_TOPICS.length})</span>
        </button>

        <span className="text-xs font-mono text-[#35D5F2] font-bold">
          {scrollProgress}%
        </span>

        <button
          onClick={() => setRightTocOpen(true)}
          className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-primary)]"
        >
          <ListOrdered className="w-3.5 h-3.5 text-[#8B7CFF]" />
          <span>สารบัญบท</span>
        </button>
      </div>

      {/* 3-Column Desktop Layout */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* LEFT SIDEBAR: Categories & Topics Navigation             */}
          {/* ======================================================== */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 space-y-6 scrollbar-thin">
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  สารบัญบทเรียน
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] font-semibold text-[#35D5F2]">
                  {STUDY_TOPICS.length} หัวข้อ
                </span>
              </div>

              {/* Topics grouped by Category */}
              <div className="space-y-4">
                {CATEGORIES.map(category => {
                  const catTopics = STUDY_TOPICS.filter(t => t.category === category.id);
                  if (catTopics.length === 0) return null;

                  return (
                    <div key={category.id} className="space-y-1.5">
                      <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="truncate">{category.nameTh}</span>
                      </div>

                      <div className="space-y-1">
                        {catTopics.map(topic => {
                          const isActive = topic.id === activeTopic.id;
                          const isDone = isCompleted(topic.id);

                          return (
                            <button
                              key={topic.id}
                              onClick={() => onSelectTopic(topic.id)}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-start justify-between gap-2 ${
                                isActive
                                  ? 'bg-[#35D5F2]/10 text-[#35D5F2] border border-[#35D5F2]/30 font-semibold shadow-sm'
                                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                              }`}
                            >
                              <span className="line-clamp-2 leading-relaxed">{topic.title}</span>
                              {isDone && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#53DBAB] shrink-0 mt-0.5" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ======================================================== */}
          {/* CENTER CONTENT: The Long-form Reader                     */}
          {/* ======================================================== */}
          <main className="lg:col-span-6 w-full flex flex-col items-center">
            <div ref={contentContainerRef} className={`w-full ${widthClasses} space-y-8`}>
              
              {/* Reading Settings Control Bar */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 text-xs">
                {/* Font Size Selector */}
                <div className="flex items-center gap-1.5">
                  <Type className="w-4 h-4 text-[var(--text-muted)]" />
                  <span className="text-[var(--text-muted)] mr-1">ขนาดฟอนต์:</span>
                  {(['sm', 'base', 'lg', 'xl'] as const).map(size => (
                    <button
                      key={size}
                      onClick={() => onChangeFontSize(size)}
                      className={`px-2 py-1 rounded-lg font-medium uppercase text-[11px] transition-all ${
                        fontSize === size
                          ? 'bg-[#35D5F2] text-[#080D1B] font-bold'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Reading Width Selector */}
                <div className="hidden sm:flex items-center gap-1.5">
                  <span className="text-[var(--text-muted)] mr-1">ความกว้าง:</span>
                  {(['compact', 'standard', 'wide'] as const).map(w => (
                    <button
                      key={w}
                      onClick={() => onChangeReadingWidth(w)}
                      className={`px-2 py-1 rounded-lg capitalize text-[11px] transition-all ${
                        readingWidth === w
                          ? 'bg-[#8B7CFF] text-[#080D1B] font-bold'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {w === 'compact' ? 'กะทัดรัด' : w === 'standard' ? 'มาตรฐาน' : 'กว้าง'}
                    </button>
                  ))}
                </div>

                {/* Bookmark & Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleBookmark(activeTopic.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-semibold transition-all ${
                      bookmarked
                        ? 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[#F59E0B] border-[var(--border-color)]'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                    <span>{bookmarked ? 'บันทึกแล้ว' : 'บันทึก'}</span>
                  </button>
                </div>
              </div>

              {/* Sample Topic Banner if testing */}
              {activeTopic.isSampleTopic && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-xs text-amber-200">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-300">ตัวอย่างโครงสร้างระบบ (Layout Testing Mode)</p>
                    <p className="mt-0.5 text-amber-200/90 leading-relaxed">
                      หน้านี้เป็นข้อมูลตัวอย่างเพื่อทดสอบ UI/UX และฟีเจอร์การอ่าน ไม่ใช่เนื้อหาสอบจริง เมื่อคุณสรุปเนื้อหาจริงเสร็จและนำมาอัปเดต โครงสร้างทั้งหมดจะแสดงผลได้อย่างสมบูรณ์แบบ
                    </p>
                  </div>
                </div>
              )}

              {/* Article Header */}
              <header className="space-y-4 border-b border-[var(--border-color)] pb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${currentCategory?.color || '#35D5F2'}15`,
                      color: currentCategory?.color || '#35D5F2',
                      border: `1px solid ${currentCategory?.color || '#35D5F2'}30`,
                    }}
                  >
                    {currentCategory?.nameTh || activeTopic.category}
                  </span>
                  {activeTopic.sourcePages && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#8B7CFF]/15 text-[#8B7CFF] border border-[#8B7CFF]/30 font-mono font-semibold">
                      📖 Study Guide {activeTopic.sourcePages}
                    </span>
                  )}
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#35D5F2]" />
                    ประมาณ {activeTopic.readingTime} นาที
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] leading-tight">
                  {activeTopic.title}
                </h1>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {activeTopic.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeTopic.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* Sections Content */}
              <div className="space-y-12">
                {activeTopic.sections.map((section, idx) => {
                  const isCopied = copiedSectionId === section.id;

                  return (
                    <section
                      key={section.id}
                      id={section.id}
                      className="space-y-5 scroll-mt-24 group"
                    >
                      {/* Section Title with Copy Section button */}
                      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#35D5F2] transition-colors">
                          {section.title}
                        </h2>

                        <button
                          onClick={() => handleCopySection(section.title, section.content, section.id)}
                          className="opacity-60 group-hover:opacity-100 p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#35D5F2] text-xs transition-all flex items-center gap-1"
                          title="คัดลอกข้อความในหัวข้อนี้"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#53DBAB]" />
                              <span className="text-[#53DBAB] text-[11px]">คัดลอกแล้ว</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="text-[11px] hidden sm:inline">คัดลอก</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Main Paragraph Content */}
                      <div className={`text-[var(--text-primary)] ${fontClasses} whitespace-pre-line leading-relaxed`}>
                        {section.content}
                      </div>

                      {/* Key Takeaways */}
                      {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                        <div className="p-4 rounded-2xl bg-[var(--bg-elevated)]/60 border border-[var(--border-color)] space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#35D5F2] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            สาระสำคัญในส่วนนี้
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                            {section.keyTakeaways.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#35D5F2] mt-1.5 shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tables */}
                      {section.tables && section.tables.length > 0 && (
                        <div className="space-y-4 my-6">
                          {section.tables.map((tbl, tIdx) => (
                            <div key={tIdx} className="overflow-x-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
                              {tbl.caption && (
                                <div className="px-4 py-2.5 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-xs font-bold text-[var(--text-primary)]">
                                  {tbl.caption}
                                </div>
                              )}
                              <table className="w-full text-left text-xs">
                                <thead>
                                  <tr className="border-b border-[var(--border-color)] bg-[var(--bg-elevated)]/80">
                                    {tbl.headers.map((h, hIdx) => (
                                      <th key={hIdx} className="px-4 py-3 font-bold text-[var(--text-primary)]">
                                        {h}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-[var(--border-color)]">
                                  {tbl.rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-[var(--bg-elevated)]/40 transition-colors">
                                      {row.map((cell, cIdx) => (
                                        <td key={cIdx} className="px-4 py-3 text-[var(--text-secondary)] font-normal leading-relaxed">
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Code Snippets */}
                      {section.codeSnippets && section.codeSnippets.length > 0 && (
                        <div className="space-y-4 my-6">
                          {section.codeSnippets.map((snippet, sIdx) => (
                            <div key={sIdx} className="rounded-2xl border border-[var(--border-color)] bg-[#050914] overflow-hidden shadow-card-elevated">
                              <div className="px-4 py-2 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] flex items-center justify-between text-xs">
                                <span className="font-mono text-[#35D5F2] font-semibold">
                                  {snippet.title || snippet.language.toUpperCase()}
                                </span>
                                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono">
                                  {snippet.language}
                                </span>
                              </div>
                              <pre className="p-4 text-xs font-mono text-[#E2E8F0] overflow-x-auto leading-relaxed">
                                <code>{snippet.code}</code>
                              </pre>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Callouts (note, tip, warning, exam) */}
                      {section.callouts && section.callouts.length > 0 && (
                        <div className="space-y-3 my-4">
                          {section.callouts.map((callout, cIdx) => {
                            const config = {
                              note: { icon: HelpCircle, color: '#35D5F2', border: 'border-[#35D5F2]/30', bg: 'bg-[#35D5F2]/5' },
                              tip: { icon: Lightbulb, color: '#53DBAB', border: 'border-[#53DBAB]/30', bg: 'bg-[#53DBAB]/5' },
                              warning: { icon: AlertCircle, color: '#F59E0B', border: 'border-[#F59E0B]/30', bg: 'bg-[#F59E0B]/5' },
                              exam: { icon: Flame, color: '#8B7CFF', border: 'border-[#8B7CFF]/30', bg: 'bg-[#8B7CFF]/5' },
                            }[callout.type] || { icon: HelpCircle, color: '#35D5F2', border: 'border-[#35D5F2]/30', bg: 'bg-[#35D5F2]/5' };

                            const Icon = config.icon;

                            return (
                              <div
                                key={cIdx}
                                className={`p-4 rounded-2xl border ${config.border} ${config.bg} space-y-1.5`}
                              >
                                <div className="flex items-center gap-2" style={{ color: config.color }}>
                                  <Icon className="w-4 h-4" />
                                  <h4 className="text-xs font-bold uppercase tracking-wider">
                                    {callout.title}
                                  </h4>
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-6">
                                  {callout.content}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>

              {/* Important Terms Glossary Flashcards */}
              {activeTopic.importantTerms && activeTopic.importantTerms.length > 0 && (
                <section className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 mt-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#8B7CFF]" />
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      คำศัพท์สำคัญประจำบท (Key Glossary)
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeTopic.importantTerms.map((term, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[#35D5F2]">{term.term}</span>
                          {term.category && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-card)] text-[var(--text-muted)] font-mono">
                              {term.category}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {term.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Mark as Completed Button */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#111B30] to-[#18243A] border border-[var(--border-color)] text-center space-y-4 shadow-card-elevated">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-[#53DBAB]/10 text-[#53DBAB]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {completed ? 'คุณอ่านบทเรียนนี้จบเรียบร้อยแล้ว!' : 'อ่านเนื้อหาจบแล้วใช่ไหม?'}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    การทำเครื่องหมายว่าอ่านจบจะช่วยอัปเดตสถิติความพร้อมในการสอบบนแดชบอร์ด
                  </p>
                </div>
                <button
                  onClick={() => onToggleCompleted(activeTopic.id)}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                    completed
                      ? 'bg-[#53DBAB] text-[#080D1B] hover:bg-[#53DBAB]/90'
                      : 'bg-[var(--bg-elevated)] hover:bg-[#35D5F2] hover:text-[#080D1B] text-[var(--text-primary)] border border-[var(--border-color)]'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span>{completed ? 'อ่านจบแล้ว (คลิกเพื่อยกเลิก)' : 'ทำเครื่องหมายว่าอ่านจบแล้ว'}</span>
                </button>
              </div>

              {/* Prev / Next Topic Navigation */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-color)]">
                {prevTopic ? (
                  <button
                    onClick={() => {
                      onSelectTopic(prevTopic.id);
                      scrollToTop();
                    }}
                    className="w-full sm:w-auto p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 text-left transition-all flex items-center gap-3 group"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#35D5F2] group-hover:-translate-x-1 transition-transform" />
                    <div>
                      <div className="text-[10px] text-[var(--text-muted)] font-semibold uppercase">บทก่อนหน้า</div>
                      <div className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">{prevTopic.title}</div>
                    </div>
                  </button>
                ) : <div />}

                {nextTopic && (
                  <button
                    onClick={() => {
                      onSelectTopic(nextTopic.id);
                      scrollToTop();
                    }}
                    className="w-full sm:w-auto p-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 text-right transition-all flex items-center justify-end gap-3 group"
                  >
                    <div>
                      <div className="text-[10px] text-[var(--text-muted)] font-semibold uppercase">บทถัดไป</div>
                      <div className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">{nextTopic.title}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#35D5F2] group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

            </div>
          </main>

          {/* ======================================================== */}
          {/* RIGHT SIDEBAR: Table of Contents & Reading Progress      */}
          {/* ======================================================== */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pl-2 space-y-6 scrollbar-thin">
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  สารบัญเนื้อหา (TOC)
                </span>
                <span className="text-xs font-mono font-bold text-[#35D5F2]">
                  {scrollProgress}%
                </span>
              </div>

              {/* Mini Scroll Progress Bar in TOC */}
              <div className="w-full h-1 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Clickable Section Links */}
              <nav className="space-y-1">
                {activeTopic.sections.map(sec => {
                  const isActive = activeSectionId === sec.id;

                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
                        isActive
                          ? 'text-[#35D5F2] font-bold bg-[#35D5F2]/10'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#35D5F2]' : 'bg-[var(--text-muted)]'}`} />
                      <span className="truncate">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Bookmark Toggle in Sidebar */}
              <div className="pt-3 border-t border-[var(--border-color)]">
                <button
                  onClick={() => onToggleBookmark(activeTopic.id)}
                  className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    bookmarked
                      ? 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[#F59E0B] border border-[var(--border-color)]'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                  <span>{bookmarked ? 'บันทึกในรายการโปรดแล้ว' : 'บันทึกบทนี้'}</span>
                </button>
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-center gap-1.5 text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] py-1 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>กลับสู่ด้านบนสุด</span>
              </button>
            </div>
          </aside>

        </div>
      </div>

      {/* Mobile Drawer: Left Sidebar (Topic List) */}
      {leftSidebarOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="w-80 max-w-[85vw] h-full bg-[var(--bg-card)] border-r border-[var(--border-color)] p-5 overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
              <h3 className="font-bold text-sm text-[var(--text-primary)]">รายการบทเรียนทั้งหมด</h3>
              <button
                onClick={() => setLeftSidebarOpen(false)}
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {CATEGORIES.map(category => {
                const catTopics = STUDY_TOPICS.filter(t => t.category === category.id);
                if (catTopics.length === 0) return null;

                return (
                  <div key={category.id} className="space-y-1.5">
                    <div className="text-xs font-bold text-[var(--text-muted)] uppercase">
                      {category.nameTh}
                    </div>
                    {catTopics.map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => {
                          onSelectTopic(topic.id);
                          setLeftSidebarOpen(false);
                          scrollToTop();
                        }}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all ${
                          topic.id === activeTopic.id
                            ? 'bg-[#35D5F2]/10 text-[#35D5F2] font-semibold'
                            : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
                        }`}
                      >
                        {topic.title}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1" onClick={() => setLeftSidebarOpen(false)} />
        </div>
      )}

      {/* Mobile Drawer: Right Table of Contents */}
      {rightTocOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="flex-1" onClick={() => setRightTocOpen(false)} />
          <div className="w-80 max-w-[85vw] h-full bg-[var(--bg-card)] border-l border-[var(--border-color)] p-5 overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
              <h3 className="font-bold text-sm text-[var(--text-primary)]">สารบัญหัวข้อในบทนี้</h3>
              <button
                onClick={() => setRightTocOpen(false)}
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {activeTopic.sections.map(sec => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="w-full text-left p-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[#35D5F2] hover:bg-[var(--bg-elevated)] transition-colors"
                >
                  {sec.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

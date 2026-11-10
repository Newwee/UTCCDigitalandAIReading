import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Tag, ArrowRight, HelpCircle, Layers } from 'lucide-react';
import { STUDY_TOPICS, CATEGORIES } from '../data/studyContent';
import { PRACTICE_QUESTIONS } from '../data/practiceQuestions';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { UNIT_SUMMARIES } from '../data/easySummariesData';
import { StudyTopic } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (topicId: string, sectionId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTopic,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global shortcut to open/close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const clean = query.trim().toLowerCase();

  // Search results
  const searchResults: {
    targetTopicId: string;
    sectionId?: string;
    badgeText: string;
    badgeColor: string;
    title: string;
    snippet: string;
  }[] = [];

  if (clean.length > 0) {
    // 1. Match in Lessons & Sections
    STUDY_TOPICS.forEach(topic => {
      if (topic.title.toLowerCase().includes(clean)) {
        searchResults.push({
          targetTopicId: topic.id,
          badgeText: 'บทเรียนหลัก',
          badgeColor: 'bg-[#35D5F2]/10 text-[#35D5F2] border-[#35D5F2]/20',
          title: topic.title,
          snippet: topic.description,
        });
      }

      topic.sections.forEach(sec => {
        if (sec.title.toLowerCase().includes(clean) || sec.content.toLowerCase().includes(clean)) {
          searchResults.push({
            targetTopicId: topic.id,
            sectionId: sec.id,
            badgeText: 'หัวข้อย่อย',
            badgeColor: 'bg-[#8B7CFF]/15 text-[#8B7CFF] border-[#8B7CFF]/20',
            title: `${topic.title} > ${sec.title}`,
            snippet: sec.content.slice(0, 150) + '...',
          });
        }
      });
    });

    // 2. Match in Glossary Terms
    GLOSSARY_TERMS.forEach(term => {
      if (term.term.toLowerCase().includes(clean) || term.definition.toLowerCase().includes(clean)) {
        // map category to lesson
        const targetLesson = STUDY_TOPICS.find(t => t.category === term.categoryId) || STUDY_TOPICS[0];
        searchResults.push({
          targetTopicId: targetLesson.id,
          badgeText: `คำศัพท์ (${term.categoryName})`,
          badgeColor: 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/20',
          title: `คำศัพท์: ${term.term}`,
          snippet: `${term.definition} (Study Guide หน้า ${term.sourcePage})`,
        });
      }
    });

    // 3. Match in Easy Summaries (Formulas, Concept Cards, Memory Tricks)
    UNIT_SUMMARIES.forEach(unit => {
      const targetLesson = STUDY_TOPICS.find(t => t.category === unit.id) || STUDY_TOPICS[0];

      // Formulas
      unit.formulasAndRules?.forEach(f => {
        if (f.name.toLowerCase().includes(clean) || f.formula.toLowerCase().includes(clean) || f.explanation.toLowerCase().includes(clean)) {
          searchResults.push({
            targetTopicId: targetLesson.id,
            badgeText: `สูตรคำนวณ (หน่วย ${unit.unitNumber})`,
            badgeColor: 'bg-[#35D5F2]/15 text-[#35D5F2] border-[#35D5F2]/25',
            title: `สูตร: ${f.name} [${f.formula}]`,
            snippet: `${f.explanation} (ตัวอย่าง: ${f.example} -> ${f.result})`,
          });
        }
      });

      // Memory tricks
      unit.memoryTricks.forEach(m => {
        if (m.title.toLowerCase().includes(clean) || m.description.toLowerCase().includes(clean) || m.technique.toLowerCase().includes(clean)) {
          searchResults.push({
            targetTopicId: targetLesson.id,
            badgeText: `ทริคจำ (หน่วย ${unit.unitNumber})`,
            badgeColor: 'bg-[#EC4899]/15 text-[#EC4899] border-[#EC4899]/25',
            title: `ทริคจำ: ${m.title}`,
            snippet: `${m.description} -> ${m.technique}`,
          });
        }
      });
    });

    // 4. Match in Practice Questions
    PRACTICE_QUESTIONS.forEach(q => {
      if (
        q.question.toLowerCase().includes(clean) ||
        q.tag.toLowerCase().includes(clean) ||
        q.explanation.toLowerCase().includes(clean)
      ) {
        const targetLesson = STUDY_TOPICS.find(t => t.category === q.categoryId) || STUDY_TOPICS[0];
        searchResults.push({
          targetTopicId: targetLesson.id,
          badgeText: `ข้อสอบจำลอง #${q.number}`,
          badgeColor: 'bg-[#53DBAB]/15 text-[#53DBAB] border-[#53DBAB]/20',
          title: `โจทย์ #${q.number} [${q.tag}]`,
          snippet: `${q.question} (เฉลย: ข้อ ${q.answer} - หน้า ${q.sourcePage})`,
        });
      }
    });
  }

  // Deduplicate and limit to 25 items
  const uniqueResults = searchResults.slice(0, 25);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <Search className="w-5 h-5 text-[#35D5F2] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="ค้นหาบทเรียน, หัวข้อย่อย, คำศัพท์, หรือข้อสอบจำลอง 100 ข้อ..."
            className="w-full bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none text-base"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded">
              ESC
            </kbd>
          )}
          <button
            onClick={onClose}
            className="ml-2 sm:hidden p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results / Suggestions */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          {clean.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-sm text-[var(--text-muted)] mb-3">
                ค้นหาครอบคลุม 57 หน้า: 7 บทเรียน, 35 หัวข้อย่อย, 40 คำศัพท์ และ 100 ข้อสอบจำลอง
              </p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['Von Neumann', 'Subnet Mask', 'AMAT', 'Big O', 'Confusion Matrix', 'RAG', 'PDPA', 'Wi-Fi 7'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[#35D5F2] hover:border-[#35D5F2]/40 border border-[var(--border-color)] transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : uniqueResults.length === 0 ? (
            <div className="py-12 text-center text-[var(--text-secondary)]">
              <p className="text-base font-medium mb-1">ไม่พบผลการค้นหาสำหรับ "{query}"</p>
              <p className="text-xs text-[var(--text-muted)]">
                ลองตรวจสอบตัวสะกด หรือใช้คำค้นหาที่กว้างขึ้น เช่น "OSI", "RAM", "Sort", "AI"
              </p>
            </div>
          ) : (
            uniqueResults.map((result, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectTopic(result.targetTopicId, result.sectionId);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-xl bg-[var(--bg-elevated)]/50 hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 transition-all flex items-start justify-between group"
              >
                <div className="space-y-1 pr-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${result.badgeColor}`}>
                      {result.badgeText}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#35D5F2] transition-colors">
                    {result.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {result.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#35D5F2] group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>พบ {uniqueResults.length} รายการ</span>
          <span className="hidden sm:inline">กด ESC เพื่อปิด</span>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  Bookmark, 
  CheckCircle2, 
  ArrowUpDown, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  Inbox
} from 'lucide-react';
import { CATEGORIES, STUDY_TOPICS } from '../data/studyContent';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { EmptyState } from '../components/ui/EmptyState';
import { CategoryId, StudyTopic } from '../types';

interface StudyLibraryViewProps {
  onOpenTopic: (topicId: string) => void;
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  isBookmarked: (id: string) => boolean;
  isCompleted: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

export const StudyLibraryView: React.FC<StudyLibraryViewProps> = ({
  onOpenTopic,
  selectedCategory,
  onSelectCategory,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'title' | 'time' | 'date'>('default');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unread' | 'completed'>('all');

  // Filter & Sort Topics
  const filteredTopics = useMemo(() => {
    return STUDY_TOPICS.filter(topic => {
      // Category filter
      if (selectedCategory !== 'all' && topic.category !== selectedCategory) {
        return false;
      }

      // Status filter
      const completed = isCompleted(topic.id);
      if (statusFilter === 'unread' && completed) return false;
      if (statusFilter === 'completed' && !completed) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = topic.title.toLowerCase().includes(q);
        const inDesc = topic.description.toLowerCase().includes(q);
        const inTags = topic.tags.some(t => t.toLowerCase().includes(q));
        if (!inTitle && !inDesc && !inTags) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title, 'th');
      if (sortBy === 'time') return a.readingTime - b.readingTime;
      if (sortBy === 'date') return b.updatedAt.localeCompare(a.updatedAt);
      return 0;
    });
  }, [selectedCategory, statusFilter, searchQuery, sortBy, isCompleted]);

  const currentCategoryObj = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              คลังเนื้อหาและบทเรียนเตรียมสอบ
            </h1>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              รวบรวมเนื้อหา 5 กลุ่มความรู้สำหรับ UTCC Digital and AI Challenge 2026
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
              ทั้งหมด <span className="font-bold text-[#35D5F2]">{filteredTopics.length}</span> รายการ
            </span>
          </div>
        </div>

        {/* Notice for content in progress */}
        <div className="p-3.5 rounded-xl bg-[#35D5F2]/5 border border-[#35D5F2]/20 flex items-start gap-3 text-xs text-[var(--text-secondary)]">
          <Sparkles className="w-4 h-4 text-[#35D5F2] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[var(--text-primary)]">สถานะระบบ:</strong> โครงสร้างคลังเนื้อหาพร้อมทำงาน 100% รายการที่แสดงป้าย <span className="text-[#35D5F2] font-semibold">[ตัวอย่างโครงสร้างระบบ]</span> เป็นชุดทดสอบ UI/UX และจะถูกอัปเดตเป็นเนื้อหาสรุปจริงทันทีที่คุณส่งข้อมูลเข้ามา
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#35D5F2] text-[#080D1B] shadow-glow-cyan'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)]'
            }`}
          >
            ทั้งหมด (All Categories)
          </button>

          {CATEGORIES.map(category => {
            const count = STUDY_TOPICS.filter(t => t.category === category.id).length;
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#35D5F2] text-[#080D1B] shadow-glow-cyan'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)]'
                }`}
              >
                <span>{category.nameTh}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-[#080D1B]/20 text-[#080D1B]' : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search, Status & Sort Row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Search box */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="ค้นหาในคลังเนื้อหา..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-[#35D5F2]/50 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all"
            />
          </div>

          {/* Status Filter */}
          <div className="sm:col-span-3">
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value as any)}
              className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)] outline-none cursor-pointer"
            >
              <option value="all">สถานะทั้งหมด</option>
              <option value="unread">ยังไม่ได้อ่าน (Unread)</option>
              <option value="completed">อ่านจบแล้ว (Completed)</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)] outline-none cursor-pointer"
            >
              <option value="default">เรียงตามค่าเริ่มต้น</option>
              <option value="title">เรียงตามชื่อหัวข้อ (ก-ฮ)</option>
              <option value="time">เรียงตามเวลาอ่าน (น้อย-มาก)</option>
              <option value="date">เรียงตามวันที่อัปเดตล่าสุด</option>
            </select>
          </div>
        </div>
      </div>

      {/* Selected Category Header Banner if filtered */}
      {currentCategoryObj && (
        <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-1">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: currentCategoryObj.color }}
            />
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              {currentCategoryObj.nameTh}
            </h3>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              ({currentCategoryObj.nameEn})
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            {currentCategoryObj.description}
          </p>
        </div>
      )}

      {/* Topics Grid */}
      {filteredTopics.length === 0 ? (
        <EmptyState
          icon={Inbox}
          title="ยังไม่มีบทเรียนในเงื่อนไขที่เลือก"
          description={
            selectedCategory !== 'all'
              ? `หมวดหมู่นี้อยู่ระหว่างการรวบรวมเนื้อหาจริง เมื่อคุณจัดทำสรุปเสร็จและอัปเดตไฟล์ src/data/studyContent.ts เนื้อหาจะปรากฏทันที`
              : 'ไม่พบเนื้อหาที่ตรงกับคำค้นหาหรือตัวกรองที่เลือก ลองเปลี่ยนคำค้นหาหรือรีเซ็ตตัวกรอง'
          }
          actionText="แสดงบทเรียนทั้งหมด"
          onAction={() => {
            onSelectCategory('all');
            setSearchQuery('');
            setStatusFilter('all');
          }}
          badge={selectedCategory !== 'all' ? 'รอเนื้อหาจริง' : 'ไม่พบข้อมูล'}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTopics.map(topic => {
            const completed = isCompleted(topic.id);
            const bookmarked = isBookmarked(topic.id);
            const catObj = CATEGORIES.find(c => c.id === topic.category);

            return (
              <SpotlightCard
                key={topic.id}
                className="p-5 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Card Header: Category & Actions */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md truncate max-w-[200px]"
                      style={{
                        backgroundColor: `${catObj?.color || '#35D5F2'}15`,
                        color: catObj?.color || '#35D5F2',
                        border: `1px solid ${catObj?.color || '#35D5F2'}30`,
                      }}
                    >
                      {catObj?.nameTh || topic.category}
                    </span>

                    <div className="flex items-center gap-1">
                      {completed && (
                        <span
                          className="p-1 rounded-md bg-[#53DBAB]/10 text-[#53DBAB]"
                          title="อ่านจบแล้ว"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                      )}

                      <button
                        onClick={e => {
                          e.stopPropagation();
                          onToggleBookmark(topic.id);
                        }}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          bookmarked
                            ? 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30'
                            : 'text-[var(--text-muted)] hover:text-[#F59E0B] hover:bg-[var(--bg-elevated)] border-transparent'
                        }`}
                        title={bookmarked ? 'ยกเลิกบุ๊กมาร์ก' : 'บันทึกบทเรียนนี้'}
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3
                      onClick={() => onOpenTopic(topic.id)}
                      className="text-base font-bold text-[var(--text-primary)] group-hover:text-[#35D5F2] transition-colors cursor-pointer line-clamp-2"
                    >
                      {topic.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 mt-1.5 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {topic.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Metadata & Open Button */}
                <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#35D5F2]" />
                    <span>~{topic.readingTime} นาที</span>
                  </div>

                  <button
                    onClick={() => onOpenTopic(topic.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#35D5F2] hover:text-[#35D5F2]/80 group-hover:translate-x-1 transition-all"
                  >
                    <span>{completed ? 'ทบทวนอีกครั้ง' : 'เริ่มอ่าน'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      )}
    </div>
  );
};

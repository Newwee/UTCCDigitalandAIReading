import React, { useState } from 'react';
import { 
  Bookmark, 
  History, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  ArrowRight, 
  BookOpen, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { STUDY_TOPICS, getTopicById, CATEGORIES } from '../data/studyContent';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { EmptyState } from '../components/ui/EmptyState';
import { GradientText } from '../components/ui/GradientText';

interface BookmarksHistoryViewProps {
  bookmarkedIds: string[];
  completedIds: string[];
  history: { topicId: string; timestamp: number; scrollPercentage?: number }[];
  onOpenTopic: (topicId: string) => void;
  onToggleBookmark: (topicId: string) => void;
}

export const BookmarksHistoryView: React.FC<BookmarksHistoryViewProps> = ({
  bookmarkedIds,
  completedIds,
  history,
  onOpenTopic,
  onToggleBookmark,
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'history' | 'completed'>('bookmarks');

  // Bookmarked topics
  const bookmarkedTopics = bookmarkedIds
    .map(id => getTopicById(id))
    .filter(Boolean);

  // Completed topics
  const completedTopics = completedIds
    .map(id => getTopicById(id))
    .filter(Boolean);

  // History topics with metadata
  const historyItems = history
    .map(item => {
      const topic = getTopicById(item.topicId);
      return topic ? { ...item, topic } : null;
    })
    .filter(Boolean);

  const formatTimestamp = (ts: number) => {
    const diffMin = Math.round((Date.now() - ts) / (1000 * 60));
    if (diffMin < 1) return 'เมื่อสักครู่';
    if (diffMin < 60) return `${diffMin} นาทีที่แล้ว`;
    const diffHours = Math.round(diffMin / 60);
    if (diffHours < 24) return `${diffHours} ชั่วโมงที่แล้ว`;
    return new Date(ts).toLocaleDateString('th-TH', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
          คลังบันทึก &{' '}
          <GradientText from="#35D5F2" to="#8B7CFF">
            ประวัติการเรียนรู้
          </GradientText>
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          จัดการรายการโปรด ติดตามบทเรียนที่อ่านค้างไว้ และทบทวนบทเรียนที่อ่านจบแล้ว
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-3">
        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'bookmarks'
              ? 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 fill-current" />
          <span>รายการโปรด ({bookmarkedTopics.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'history'
              ? 'bg-[#35D5F2]/15 text-[#35D5F2] border border-[#35D5F2]/30'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>ประวัติการอ่าน ({historyItems.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('completed')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'completed'
              ? 'bg-[#53DBAB]/15 text-[#53DBAB] border border-[#53DBAB]/30'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>อ่านจบแล้ว ({completedTopics.length})</span>
        </button>
      </div>

      {/* Content based on Active Tab */}
      {activeTab === 'bookmarks' && (
        <div>
          {bookmarkedTopics.length === 0 ? (
            <EmptyState
              icon={Bookmark}
              title="ยังไม่มีรายการโปรดที่บันทึกไว้"
              description="คุณสามารถคลิกไอคอนบุ๊กมาร์กที่การ์ดบทเรียนหรือในหน้าอ่านหนังสือ เพื่อเก็บหัวข้อที่น่าสนใจหรือต้องการทบทวนซ้ำไว้ที่นี่"
              badge="ยังไม่มีบุ๊กมาร์ก"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {bookmarkedTopics.map(topic => {
                if (!topic) return null;
                const catObj = CATEGORIES.find(c => c.id === topic.category);

                return (
                  <SpotlightCard key={topic.id} className="p-5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-[#35D5F2]">
                          {catObj?.nameTh}
                        </span>
                        <button
                          onClick={() => onToggleBookmark(topic.id)}
                          className="p-1 text-[var(--text-muted)] hover:text-red-400 transition-colors"
                          title="ลบออกจากรายการโปรด"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <h3
                        onClick={() => onOpenTopic(topic.id)}
                        className="font-bold text-base text-[var(--text-primary)] hover:text-[#35D5F2] cursor-pointer"
                      >
                        {topic.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                        {topic.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                      <span className="text-[var(--text-muted)]">~{topic.readingTime} นาที</span>
                      <button
                        onClick={() => onOpenTopic(topic.id)}
                        className="font-semibold text-[#35D5F2] hover:underline flex items-center gap-1"
                      >
                        <span>เปิดอ่าน</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          )}
        </div>
      )}

      {activeTab === 'history' && (
        <div>
          {historyItems.length === 0 ? (
            <EmptyState
              icon={History}
              title="ยังไม่มีประวัติการอ่าน"
              description="เมื่อคุณเริ่มเปิดอ่านบทเรียนในคลังเนื้อหา ประวัติการเข้าชมและตำแหน่งการอ่านล่าสุดจะถูกบันทึกไว้ที่นี่โดยอัตโนมัติ"
              badge="ไม่มีประวัติ"
            />
          ) : (
            <div className="space-y-3">
              {historyItems.map((item, idx) => {
                if (!item?.topic) return null;
                const topic = item.topic;
                const catObj = CATEGORIES.find(c => c.id === topic.category);

                return (
                  <div
                    key={`${item.topicId}-${idx}`}
                    className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold text-[#35D5F2] px-2 py-0.5 rounded bg-[#35D5F2]/10">
                          {catObj?.nameTh}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatTimestamp(item.timestamp)}
                        </span>
                        {item.scrollPercentage !== undefined && item.scrollPercentage > 0 && (
                          <span className="text-xs font-mono text-[#8B7CFF]">
                            (อ่านถึง {item.scrollPercentage}%)
                          </span>
                        )}
                      </div>
                      <h4
                        onClick={() => onOpenTopic(topic.id)}
                        className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#35D5F2] cursor-pointer"
                      >
                        {topic.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => onOpenTopic(topic.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] hover:bg-[#35D5F2] hover:text-[#080D1B] text-xs font-semibold text-[var(--text-primary)] transition-all shrink-0"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>อ่านต่อ</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {activeTab === 'completed' && (
        <div>
          {completedTopics.length === 0 ? (
            <EmptyState
              icon={CheckCircle2}
              title="ยังไม่มีบทเรียนที่ทำเครื่องหมายว่าอ่านจบแล้ว"
              description="เมื่ออ่านบทเรียนจนเข้าใจแล้ว ให้กดปุ่ม 'ทำเครื่องหมายว่าอ่านจบแล้ว' ที่ส่วนท้ายของบทเรียน เพื่อเก็บบันทึกสถิติความพร้อมในการสอบ"
              badge="0 บทเรียน"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {completedTopics.map(topic => {
                if (!topic) return null;
                const catObj = CATEGORIES.find(c => c.id === topic.category);

                return (
                  <SpotlightCard key={topic.id} className="p-5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-[#53DBAB]">
                          {catObj?.nameTh}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#53DBAB] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          อ่านจบแล้ว
                        </span>
                      </div>

                      <h3
                        onClick={() => onOpenTopic(topic.id)}
                        className="font-bold text-base text-[var(--text-primary)] hover:text-[#35D5F2] cursor-pointer"
                      >
                        {topic.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                        {topic.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                      <span className="text-[var(--text-muted)]">~{topic.readingTime} นาที</span>
                      <button
                        onClick={() => onOpenTopic(topic.id)}
                        className="font-semibold text-[#35D5F2] hover:underline flex items-center gap-1"
                      >
                        <span>ทบทวนอีกครั้ง</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

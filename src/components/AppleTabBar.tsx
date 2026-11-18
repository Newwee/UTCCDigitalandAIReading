import React from 'react';
import { 
  Layers, 
  BookOpen, 
  FileText, 
  Award, 
  MoreHorizontal,
  FileCheck2,
  Bookmark,
  Sparkles,
  Info,
  Search,
  Sun,
  Moon,
  X,
  Flame
} from 'lucide-react';
import { NavTab } from './Header';

interface AppleTabBarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  bookmarkedCount: number;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  moreSheetOpen: boolean;
  onToggleMoreSheet: () => void;
  visible?: boolean;
}

export const AppleTabBar: React.FC<AppleTabBarProps> = ({
  currentTab,
  onSelectTab,
  bookmarkedCount,
  theme,
  onToggleTheme,
  onOpenSearch,
  moreSheetOpen,
  onToggleMoreSheet,
  visible = true,
}) => {
  const primaryTabs: { id: NavTab; label: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'home', label: 'หน้าแรก', icon: Layers },
    { id: 'library', label: 'คลังบทเรียน', icon: BookOpen },
    { id: 'reading', label: 'อ่านเนื้อหา', icon: FileText },
    { id: 'revision', label: 'ข้อสอบ', icon: Award, badge: '150 ข้อ' },
    { id: 'must-remember', label: 'จำก่อนสอบ', icon: Flame, badge: 'HOT' },
  ];

  const moreItems: { id: NavTab; label: string; icon: React.ElementType; desc: string; badge?: number }[] = [
    { id: 'must-remember', label: 'จำก่อนสอบ (ติวเข้ม & ม็อกสอบ 100 ข้อ)', icon: Flame, desc: 'สรุป 5 หมวด + สนามสอบจำลองพร้อมเฉลยละเอียด' },
    { id: 'audit', label: 'ตรวจ 57 หน้า', icon: FileCheck2, desc: 'ตรวจสอบความถูกต้องและครอบคลุมครบ 100%' },
    { id: 'bookmarks', label: 'บันทึก & ประวัติ', icon: Bookmark, desc: 'บทเรียนที่คั่นหน้าและประวัติการอ่านล่าสุด', badge: bookmarkedCount },
    { id: 'competition', label: 'เกณฑ์แข่งขัน', icon: Sparkles, desc: 'กำหนดการ รางวัล และเกณฑ์การสอบ UTCC' },
    { id: 'about', label: 'เกี่ยวกับโครงการ', icon: Info, desc: 'ผู้พัฒนาและข้อมูลระบบการเรียนรู้อิสระ' },
  ];

  return (
    <>
      {moreSheetOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div 
            onClick={onToggleMoreSheet} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
          />
          <div className="absolute bottom-20 left-4 right-4 max-w-lg mx-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl p-5 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
              <span className="text-sm font-bold text-[var(--text-primary)]">
                เมนูและการตั้งค่าเพิ่มเติม
              </span>
              <button 
                onClick={onToggleMoreSheet}
                className="p-1.5 rounded-xl hover:bg-[var(--bg-elevated)] text-[var(--text-muted)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenSearch();
                  onToggleMoreSheet();
                }}
                className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2] flex items-center gap-2.5 text-xs font-semibold text-[var(--text-primary)] text-left transition-all"
              >
                <Search className="w-4 h-4 text-[#35D5F2]" />
                <span>ค้นหาเนื้อหา (⌘K)</span>
              </button>

              <button
                onClick={onToggleTheme}
                className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#8B7CFF] flex items-center gap-2.5 text-xs font-semibold text-[var(--text-primary)] text-left transition-all"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-[#F59E0B]" />
                    <span>เปลี่ยนเป็นธีมสว่าง</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-[#8B7CFF]" />
                    <span>เปลี่ยนเป็นธีมมืด</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-1 pt-1">
              {moreItems.map(item => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectTab(item.id);
                      onToggleMoreSheet();
                    }}
                    className={`w-full p-3 rounded-2xl text-left flex items-center justify-between transition-all ${
                      isActive 
                        ? 'bg-[#35D5F2]/15 border border-[#35D5F2]/40 text-[#35D5F2]' 
                        : 'hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-[#35D5F2] text-[#080D1B]' : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">{item.label}</div>
                        <div className="text-[10px] text-[var(--text-muted)] line-clamp-1 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#35D5F2] text-[#080D1B]">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-40 xl:hidden w-[calc(100%-1.5rem)] max-w-md pointer-events-auto transition-transform duration-300 ease-in-out ${
          visible ? 'translate-y-0' : 'translate-y-36 pointer-events-none'
        }`}
        style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="bg-[#080D1B]/90 dark:bg-[#080D1B]/90 bg-white/95 backdrop-blur-2xl border border-white/10 dark:border-white/10 border-black/10 rounded-full px-2 py-1.5 shadow-2xl flex items-center justify-around">
          {primaryTabs.map(tab => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (moreSheetOpen) onToggleMoreSheet();
                  onSelectTab(tab.id);
                }}
                className={`relative flex flex-col items-center justify-center py-1.5 px-1.5 sm:px-2 rounded-full min-w-[48px] sm:min-w-[56px] min-h-[46px] transition-all transform active:scale-95 ${
                  isActive
                    ? 'text-[#35D5F2] font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-[#35D5F2]' : ''}`} />
                  {tab.badge && (
                    <span className={`absolute -top-1.5 -right-3 px-1 py-0.2 rounded-full text-[8px] font-black tracking-tight shadow-sm animate-pulse ${
                      tab.id === 'must-remember'
                        ? 'bg-gradient-to-r from-amber-400 to-rose-500 text-white'
                        : 'bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B]'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] mt-0.5 tracking-tight leading-none whitespace-nowrap">
                  {tab.label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-[#35D5F2]" />
                )}
              </button>
            );
          })}

          <button
            onClick={onToggleMoreSheet}
            className={`relative flex flex-col items-center justify-center py-1.5 px-1.5 sm:px-2 rounded-full min-w-[48px] sm:min-w-[56px] min-h-[46px] transition-all transform active:scale-95 ${
              moreSheetOpen || ['audit', 'bookmarks', 'competition', 'about'].includes(currentTab)
                ? 'text-[#8B7CFF] font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <div className="relative">
              <MoreHorizontal className="w-5 h-5" />
              {bookmarkedCount > 0 && (
                <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-[#35D5F2]" />
              )}
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight leading-none whitespace-nowrap">
              เพิ่มเติม
            </span>
            {['audit', 'bookmarks', 'competition', 'about'].includes(currentTab) && (
              <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-[#8B7CFF]" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

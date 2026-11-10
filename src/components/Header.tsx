import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Sun, 
  Moon, 
  BookOpen, 
  Bookmark, 
  FileText, 
  Info, 
  Menu, 
  X, 
  Award,
  Layers,
  FileCheck2
} from 'lucide-react';
import { GradientText } from './ui/GradientText';

export type NavTab = 'home' | 'library' | 'reading' | 'revision' | 'audit' | 'bookmarks' | 'competition' | 'about';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  bookmarkedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  theme,
  onToggleTheme,
  onOpenSearch,
  bookmarkedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: 'home', label: 'แดชบอร์ด', icon: Layers },
    { id: 'library', label: 'คลังเนื้อหา', icon: BookOpen },
    { id: 'reading', label: 'อ่านเนื้อหา', icon: FileText },
    { id: 'revision', label: 'ข้อสอบ & สรุปย่อ', icon: Award },
    { id: 'audit', label: 'ตรวจ 57 หน้า', icon: FileCheck2 },
    { id: 'bookmarks', label: 'บันทึก & ประวัติ', icon: Bookmark, badge: bookmarkedCount },
    { id: 'competition', label: 'เกณฑ์แข่งขัน', icon: Sparkles },
    { id: 'about', label: 'เกี่ยวกับ', icon: Info },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Logo & Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#35D5F2] to-[#8B7CFF] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-cyan">
            <div className="w-full h-full bg-[#080D1B] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#35D5F2]" />
            </div>
          </div>
          <div className="hidden min-[420px]:block">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#35D5F2]">UTCC CHALLENGE</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#8B7CFF]/20 text-[#8B7CFF] font-semibold border border-[#8B7CFF]/30">2026</span>
            </div>
            <div className="text-sm font-bold text-[var(--text-primary)] leading-tight">
              AI Study Hub
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all relative ${
                  isActive
                    ? 'text-[#35D5F2] bg-[#35D5F2]/10 border border-[#35D5F2]/30 shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#35D5F2]' : 'text-[var(--text-muted)]'}`} />
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-[#35D5F2] text-[#080D1B]">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons: Search, Theme, Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 text-sm text-[var(--text-secondary)] transition-all shadow-sm group"
            title="ค้นหาเนื้อหา (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#35D5F2] transition-colors" />
            <span className="hidden md:inline text-xs text-[var(--text-muted)]">ค้นหา...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#35D5F2] transition-all shadow-sm"
            aria-label="เปลี่ยนธีม มืด/สว่าง"
            title={theme === 'dark' ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#F59E0B]" />
            ) : (
              <Moon className="w-4 h-4 text-[#8B7CFF]" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] transition-all"
            aria-label="เมนูนำทาง"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-3 space-y-1 animate-fade-in shadow-2xl">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#35D5F2] bg-[#35D5F2]/10 border border-[#35D5F2]/30'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-[#35D5F2] text-[#080D1B]">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

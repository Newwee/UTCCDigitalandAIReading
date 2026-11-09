import React from 'react';
import { LucideIcon, Inbox } from 'lucide-react';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  badge?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = Inbox,
  title,
  description,
  actionText,
  onAction,
  badge = 'รอข้อมูลเพิ่มเติม',
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/60 backdrop-blur-sm my-6 max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] flex items-center justify-center text-[#35D5F2] mb-4 shadow-sm">
        <Icon className="w-8 h-8" />
      </div>

      {badge && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#35D5F2]/10 text-[#35D5F2] border border-[#35D5F2]/20 mb-3">
          {badge}
        </span>
      )}

      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-sm">
        {description}
      </p>

      {actionText && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold bg-[var(--bg-elevated)] hover:bg-[#35D5F2]/15 text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[#35D5F2]/50 transition-all duration-200"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

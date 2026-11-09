import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 dark:opacity-40" />

      {/* Top Ambient Glow (Cyan) */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] opacity-25 dark:opacity-20 transition-opacity"
        style={{
          background: 'radial-gradient(circle, #35D5F2 0%, #8B7CFF 50%, transparent 80%)'
        }}
      />

      {/* Side Subtle Violet Accent Glow */}
      <div 
        className="absolute top-[40%] -right-[15%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 dark:opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8B7CFF 0%, transparent 70%)'
        }}
      />
    </div>
  );
};

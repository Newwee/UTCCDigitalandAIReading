import React, { useState } from 'react';
import { 
  Sparkles, 
  Lightbulb, 
  CheckCircle2, 
  AlertTriangle, 
  Calculator, 
  Table, 
  BrainCircuit, 
  ArrowRight, 
  Search, 
  BookOpen, 
  Layers, 
  Check, 
  Copy,
  ChevronDown,
  ChevronUp,
  Cpu,
  Globe,
  HardDrive,
  Code2,
  Brain
} from 'lucide-react';
import { UNIT_SUMMARIES, UnitSummary } from '../data/easySummariesData';
import { SpotlightCard } from './ui/SpotlightCard';
import { GradientText } from './ui/GradientText';
import { CategoryId } from '../types';

interface EasySummariesViewProps {
  onStartUnitQuiz?: (categoryId: CategoryId) => void;
  onOpenTopic?: (topicId: string) => void;
}

const unitIcons: Record<CategoryId, React.ElementType> = {
  'general-it': Globe,
  'network-cloud': Layers,
  'hardware-os': HardDrive,
  'programming-algo': Code2,
  'ai-datascience': Brain,
};

// Map category to master lesson ID for direct reading jump
const categoryToLessonId: Record<CategoryId, string> = {
  'general-it': 'lesson-1',
  'network-cloud': 'lesson-2',
  'hardware-os': 'lesson-3',
  'programming-algo': 'lesson-4',
  'ai-datascience': 'lesson-5',
};

export const EasySummariesView: React.FC<EasySummariesViewProps> = ({
  onStartUnitQuiz,
  onOpenTopic,
}) => {
  const [selectedUnitIndex, setSelectedUnitIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const currentUnit = UNIT_SUMMARIES[selectedUnitIndex];
  const UnitIcon = unitIcons[currentUnit.id] || Sparkles;

  const handleCopyFormula = (formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormula(formulaText);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  // Filter units or items if search query is provided
  const isSearching = searchQuery.trim().length > 0;
  const filteredSummaries = isSearching
    ? UNIT_SUMMARIES.filter(u => 
        u.nameTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.mustRememberPoints.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
        u.keyConceptCards.some(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    : [];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Banner for Easy Summaries */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#111B30] via-[#0D1526] to-[#18243A] border border-[#35D5F2]/25 shadow-card-elevated relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#35D5F2]/10 to-[#8B7CFF]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#35D5F2]/10 border border-[#35D5F2]/30 text-[#35D5F2] text-xs font-semibold">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>สรุปฉบับเข้าใจง่าย & ทริคจำก่อนสอบ (High-Yield Visual Notes)</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
              สรุปเนื้อหาสำคัญ 5 หน่วย{' '}
              <GradientText from="#35D5F2" to="#8B7CFF">
                อ่านจบใน 15 นาที
              </GradientText>
            </h2>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              สกัดเฉพาะจุดตายที่ออกสอบชัวร์ 100% จากคู่มือ 57 หน้า พร้อมสูตรคำนวณทางลัด ตารางเปรียบเทียบจุดต่าง และทริคตัดช้อยส์ในห้องสอบ
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ค้นหาสรุปย่อ เช่น AMAT, Subnet, OSI..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] focus:border-[#35D5F2] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  ล้าง
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 5 Unit Selector Pills */}
        <div className="mt-6 pt-6 border-t border-[var(--border-color)] flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          {UNIT_SUMMARIES.map((unit, idx) => {
            const Icon = unitIcons[unit.id] || Sparkles;
            const isSelected = selectedUnitIndex === idx;

            return (
              <button
                key={unit.unitNumber}
                onClick={() => {
                  setSelectedUnitIndex(idx);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'shadow-glow-cyan text-[#080D1B]'
                    : 'bg-[var(--bg-elevated)]/60 text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[#35D5F2]/40 hover:text-[var(--text-primary)]'
                }`}
                style={
                  isSelected
                    ? {
                        backgroundColor: unit.color,
                        borderColor: unit.color,
                      }
                    : undefined
                }
              >
                <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-white/5 text-[var(--text-muted)]'
                }`}>
                  {unit.unitNumber}
                </span>
                <Icon className="w-3.5 h-3.5" />
                <span>หน่วยที่ {unit.unitNumber}: {unit.nameTh.split('และ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      {isSearching ? (
        /* Search Results Mode */
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>ผลการค้นหาสรุปย่อสำหรับ "{searchQuery}" พบ {filteredSummaries.length} หน่วย</span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#35D5F2] hover:underline"
            >
              แสดงทั้งหมด
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredSummaries.map(unit => (
              <SpotlightCard key={unit.unitNumber} className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs font-bold text-[#080D1B]"
                      style={{ backgroundColor: unit.color }}
                    >
                      หน่วยที่ {unit.unitNumber}
                    </span>
                    <h3 className="font-bold text-base text-[var(--text-primary)]">
                      {unit.nameTh}
                    </h3>
                  </div>
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    {unit.questionRange}
                  </span>
                </div>

                <p className="text-xs text-[#35D5F2] italic">
                  💡 {unit.oneLiner}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[var(--text-secondary)]">ประเด็นสำคัญ:</h4>
                  <ul className="space-y-1.5">
                    {unit.mustRememberPoints.slice(0, 4).map((pt, i) => (
                      <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="text-[#35D5F2] mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  {onStartUnitQuiz && (
                    <button
                      onClick={() => onStartUnitQuiz(unit.id)}
                      className="px-4 py-2 rounded-xl bg-[#35D5F2] text-[#080D1B] font-bold text-xs hover:bg-[#35D5F2]/90 transition-all flex items-center gap-1.5 shadow-glow-cyan"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>ทำข้อสอบหน่วยนี้ (20 ข้อ)</span>
                    </button>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      ) : (
        /* Detailed Single Unit View */
        <div className="space-y-8">
          {/* Unit Header Card */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: `${currentUnit.color}20`,
                    color: currentUnit.color,
                    border: `1px solid ${currentUnit.color}40`,
                  }}
                >
                  <UnitIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-black text-[#080D1B]"
                      style={{ backgroundColor: currentUnit.color }}
                    >
                      UNIT {currentUnit.unitNumber}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {currentUnit.sourcePages} • {currentUnit.questionRange}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mt-0.5">
                    {currentUnit.nameTh}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {currentUnit.nameEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                {onOpenTopic && (
                  <button
                    onClick={() => onOpenTopic(categoryToLessonId[currentUnit.id])}
                    className="px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--border-color)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] transition-all flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#35D5F2]" />
                    <span>อ่านบทเรียนฉบับเต็ม</span>
                  </button>
                )}

                {onStartUnitQuiz && (
                  <button
                    onClick={() => onStartUnitQuiz(currentUnit.id)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] font-bold text-xs hover:opacity-95 transition-all flex items-center gap-1.5 shadow-glow-cyan"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>เริ่มทำข้อสอบหน่วยนี้ (20 ข้อ)</span>
                  </button>
                )}
              </div>
            </div>

            {/* 1-Liner Essence Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#35D5F2]/10 via-[#8B7CFF]/5 to-transparent border border-[#35D5F2]/25 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#35D5F2] shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#35D5F2]">
                  แก่นแท้ 1 ประโยค (Key Essence)
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
                  {currentUnit.oneLiner}
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: สิ่งที่ต้องจำให้ได้ก่อนเข้าห้องสอบ (Must-Remember Core Points) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#53DBAB]" />
              <h4 className="text-base font-bold text-[var(--text-primary)]">
                สิ่งที่ต้องจำให้ได้ก่อนเข้าห้องสอบ (Must-Remember Core Points)
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentUnit.mustRememberPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#35D5F2]/30 transition-all flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#53DBAB]/10 text-[#53DBAB] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Key Concept Cards with Badges & Exam Tips */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-[#8B7CFF]" />
              <h4 className="text-base font-bold text-[var(--text-primary)]">
                การ์ดเจาะลึก 4 คอนเซ็ปต์หลัก (Core Concept Breakdown)
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentUnit.keyConceptCards.map((card, idx) => (
                <SpotlightCard key={idx} className="p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#8B7CFF]/15 text-[#8B7CFF] text-[10px] font-bold border border-[#8B7CFF]/30">
                        {card.badge || `หัวข้อที่ ${idx + 1}`}
                      </span>
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">
                        {card.subtitle}
                      </span>
                    </div>

                    <h5 className="font-bold text-sm text-[var(--text-primary)]">
                      {card.title}
                    </h5>

                    <ul className="space-y-2">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                          <span className="text-[#35D5F2] mt-0.5 shrink-0">•</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {card.examTip && (
                    <div className="p-3 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/25 text-[11px] text-[var(--text-primary)] flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#F59E0B]">ทริคข้อสอบ: </span>
                        <span>{card.examTip}</span>
                      </div>
                    </div>
                  )}
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Section 3: Formulas & Calculation Rules (if available) */}
          {currentUnit.formulasAndRules && currentUnit.formulasAndRules.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#35D5F2]" />
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  สูตรคำนวณและกฎทางลัดที่ออกสอบ (Formulas & Fast Rules)
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentUnit.formulasAndRules.map((f, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-br from-[#111B30] to-[#18243A] border border-[#35D5F2]/30 space-y-3.5 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#35D5F2]">
                        {f.name}
                      </span>
                      <button
                        onClick={() => handleCopyFormula(f.formula)}
                        className="text-[11px] text-[var(--text-muted)] hover:text-[#35D5F2] flex items-center gap-1 transition-colors"
                        title="คัดลอกสูตร"
                      >
                        {copiedFormula === f.formula ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#53DBAB]" />
                            <span className="text-[#53DBAB]">คัดลอกแล้ว</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>คัดลอก</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Formula highlight box */}
                    <div className="p-3 rounded-xl bg-black/40 border border-[#35D5F2]/20 font-mono text-xs sm:text-sm text-[#35D5F2] font-bold text-center">
                      {f.formula}
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {f.explanation}
                    </p>

                    <div className="p-3 rounded-xl bg-[var(--bg-card)]/80 border border-[var(--border-color)] text-xs space-y-1">
                      <div className="text-[11px] text-[var(--text-muted)] font-semibold">
                        ตัวอย่างการคิด: <span className="text-[var(--text-secondary)] font-mono">{f.example}</span>
                      </div>
                      <div className="text-[11px] text-[#53DBAB] font-bold">
                        👉 คำตอบ: {f.result}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Comparison Table */}
          {currentUnit.comparisonTable && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Table className="w-5 h-5 text-[#8B7CFF]" />
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  {currentUnit.comparisonTable.title}
                </h4>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[var(--bg-elevated)] border-b border-[var(--border-color)] text-[var(--text-primary)]">
                      <th className="p-3.5 font-bold">{currentUnit.comparisonTable.colA}</th>
                      <th className="p-3.5 font-bold text-[#35D5F2]">{currentUnit.comparisonTable.colB}</th>
                      <th className="p-3.5 font-bold text-[#8B7CFF]">{currentUnit.comparisonTable.colC}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-secondary)]">
                    {currentUnit.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[var(--bg-elevated)]/50 transition-colors">
                        <td className="p-3.5 font-semibold text-[var(--text-primary)] whitespace-nowrap">
                          {row.aspect}
                        </td>
                        <td className="p-3.5 leading-relaxed">{row.itemA}</td>
                        <td className="p-3.5 leading-relaxed">{row.itemB}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 5: Memory Tricks & Common Mistakes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Memory Tricks */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#35D5F2]" />
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  เทคนิคการจำ & ทางลัด (Memory Hooks)
                </h4>
              </div>

              <div className="space-y-3">
                {currentUnit.memoryTricks.map((trick, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-2xl bg-[#35D5F2]/10 border border-[#35D5F2]/25 space-y-2"
                  >
                    <h5 className="font-bold text-xs sm:text-sm text-[#35D5F2] flex items-center gap-2">
                      <span>💡 {trick.title}</span>
                    </h5>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {trick.description}
                    </p>
                    <div className="p-2.5 rounded-lg bg-black/30 border border-[#35D5F2]/20 font-mono text-xs text-[var(--text-primary)] font-semibold">
                      {trick.technique}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Mistakes & Traps */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  จุดที่คนสอบตกม้าตายบ่อยที่สุด (Common Traps)
                </h4>
              </div>

              <div className="space-y-3">
                {currentUnit.commonMistakes.map((mistake, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-2xl bg-[var(--bg-card)] border border-red-500/20 space-y-2 text-xs"
                  >
                    <div className="flex items-start gap-2 text-red-400">
                      <span className="font-bold shrink-0">❌ คิดผิด:</span>
                      <span className="line-through opacity-80">{mistake.wrong}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#53DBAB] font-semibold">
                      <span className="font-bold shrink-0">✅ ที่ถูก:</span>
                      <span>{mistake.right}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] pt-1 border-t border-[var(--border-color)]">
                      ⚠️ เหตุผล: {mistake.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#111B30] via-[#18243A] to-[#0D1526] border border-[#35D5F2]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-[var(--text-primary)]">
                พร้อมทดสอบความเข้าใจของหน่วยที่ {currentUnit.unitNumber} แล้วหรือยัง?
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                ฝึกทำข้อสอบตรงตามกลุ่มวิชา 20 ข้อ พร้อมจับเวลาและเฉลยละเอียด
              </p>
            </div>

            {onStartUnitQuiz && (
              <button
                onClick={() => onStartUnitQuiz(currentUnit.id)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#35D5F2] to-[#8B7CFF] text-[#080D1B] font-extrabold text-sm hover:opacity-95 shadow-glow-cyan transition-all flex items-center gap-2 shrink-0"
              >
                <Sparkles className="w-4 h-4" />
                <span>ทำข้อสอบหน่วยที่ {currentUnit.unitNumber} ทันที (20 ข้อ)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

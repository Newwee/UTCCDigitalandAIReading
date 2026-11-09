import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Maximize2,
  X,
  Phone,
  Globe,
  Share2
} from 'lucide-react';
import { COMPETITION_DATA } from '../data/competitionInfo';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { GradientText } from '../components/ui/GradientText';

export const CompetitionView: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#35D5F2]/10 border border-[#35D5F2]/30 text-[#35D5F2] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Official Competition Guidelines</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
          สรุปกติกาและข้อมูลการแข่งขัน —{' '}
          <GradientText from="#35D5F2" to="#8B7CFF">
            UTCC Digital & AI Challenge 2026
          </GradientText>
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          สรุปข้อมูลสำคัญจากเอกสารประกาศอย่างเป็นทางการของ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยหอการค้าไทย ร่วมกับ สมาคมโปรแกรมเมอร์ไทย และ สมาคมปัญญาประดิษฐ์ประเทศไทย (AIAT)
        </p>
      </div>

      {/* Key Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SpotlightCard className="p-5">
          <div className="flex items-center gap-3 mb-2 text-[#35D5F2]">
            <Calendar className="w-5 h-5" />
            <h3 className="font-bold text-sm text-[var(--text-primary)]">วันแข่งขัน</h3>
          </div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{COMPETITION_DATA.date}</p>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">เวลา {COMPETITION_DATA.time}</p>
        </SpotlightCard>

        <SpotlightCard className="p-5">
          <div className="flex items-center gap-3 mb-2 text-[#8B7CFF]">
            <MapPin className="w-5 h-5" />
            <h3 className="font-bold text-sm text-[var(--text-primary)]">สถานที่จัดงาน</h3>
          </div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{COMPETITION_DATA.venue}</p>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">อาคารหอประชุม ชั้น 1</p>
        </SpotlightCard>

        <SpotlightCard className="p-5">
          <div className="flex items-center gap-3 mb-2 text-[#53DBAB]">
            <Users className="w-5 h-5" />
            <h3 className="font-bold text-sm text-[var(--text-primary)]">คุณสมบัติผู้เข้าแข่ง</h3>
          </div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">ม.ปลาย / ปวช. / ปวส.</p>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">{COMPETITION_DATA.teamSize}</p>
        </SpotlightCard>

        <SpotlightCard className="p-5">
          <div className="flex items-center gap-3 mb-2 text-[#F59E0B]">
            <Award className="w-5 h-5" />
            <h3 className="font-bold text-sm text-[var(--text-primary)]">รางวัลการแข่งขัน</h3>
          </div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">ชิงรางวัลรวม 18,000 บาท</p>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">พร้อมสิทธิ์พิจารณาทุนการศึกษา</p>
        </SpotlightCard>
      </div>

      {/* Rounds & Format Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#35D5F2]" />
          <span>รูปแบบการแข่งขัน 2 รอบหลัก</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPETITION_DATA.rounds.map((round, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#35D5F2]/10 text-[#35D5F2] border border-[#35D5F2]/30">
                  {round.round}
                </span>
                <span className="text-xs font-semibold text-[#8B7CFF]">
                  {round.questionsCount}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {round.type}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2">
                  {round.details}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <CheckCircle className="w-4 h-4 text-[#53DBAB]" />
                <span>เกณฑ์การตัดสิน: หากคะแนนรวมเท่ากัน จะตัดสินจากเวลาที่ใช้ส่งข้อสอบ</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Pillars Breakdown Accordion/Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#8B7CFF]" />
          <span>ขอบเขต 5 กลุ่มความรู้ที่ใช้ในการแข่งขัน (5 Pillars)</span>
        </h2>

        <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] space-y-1">
              <span className="text-xs font-bold text-[#35D5F2]">กลุ่มที่ 1</span>
              <h4 className="font-bold text-xs text-[var(--text-primary)]">ความรู้ทั่วไป</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                ข่าวสารความเคลื่อนไหวไอที เทคโนโลยีสารสนเทศ คอมพิวเตอร์ และโทรคมนาคม
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] space-y-1">
              <span className="text-xs font-bold text-[#8B7CFF]">กลุ่มที่ 2</span>
              <h4 className="font-bold text-xs text-[var(--text-primary)]">Network & Cloud</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                เครือข่าย LAN, WAN, Internet ประโยชน์และองค์ประกอบของ Cloud Computing
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] space-y-1">
              <span className="text-xs font-bold text-[#53DBAB]">กลุ่มที่ 3</span>
              <h4 className="font-bold text-xs text-[var(--text-primary)]">Hardware & OS</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                การทำงานและองค์ประกอบคอมพิวเตอร์ การใช้งาน Windows, iOS, Android, Linux, VM
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] space-y-1">
              <span className="text-xs font-bold text-[#F59E0B]">กลุ่มที่ 4</span>
              <h4 className="font-bold text-xs text-[var(--text-primary)]">Programming & Algo</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                ขั้นตอนแก้ปัญหา Flowchart, Pseudo Code โครงสร้างลำดับ ทางเลือก ทำซ้ำ แถวลำดับ
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] space-y-1">
              <span className="text-xs font-bold text-[#EC4899]">กลุ่มที่ 5</span>
              <h4 className="font-bold text-xs text-[var(--text-primary)]">AI & Data Science</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                Data Science, Machine Learning, AI แนวคิด การประยุกต์ใช้ และประโยชน์
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Schedule Timeline Table */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#53DBAB]" />
          <span>กำหนดการในวันแข่งขัน (19 พฤศจิกายน 2569)</span>
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-primary)]">
                <th className="px-4 py-3 font-bold w-40">เวลา</th>
                <th className="px-4 py-3 font-bold">รายละเอียดกิจกรรม</th>
                <th className="px-4 py-3 font-bold w-60">สถานที่</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {COMPETITION_DATA.schedules.map((row, idx) => (
                <tr key={idx} className="hover:bg-[var(--bg-elevated)]/30 transition-colors">
                  <td className="px-4 py-3 font-mono font-semibold text-[#35D5F2]">{row.time}</td>
                  <td className="px-4 py-3 text-[var(--text-primary)] font-medium">{row.activity}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Official Document Scans Gallery (from the 4 photos) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#35D5F2]" />
            <span>ภาพเอกสารและโปสเตอร์ประกาศอย่างเป็นทางการ (4 ฉบับ)</span>
          </h2>
          <span className="text-xs text-[var(--text-muted)]">คลิกเพื่อดูภาพขยายเต็มจอ</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPETITION_DATA.documentImages.map((doc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(doc.path)}
              className="group cursor-pointer rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden hover:border-[#35D5F2]/50 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] bg-[var(--bg-elevated)] overflow-hidden">
                <img
                  src={doc.path}
                  alt={doc.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-xl bg-black/80 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>คลิกเพื่อดูฉบับเต็ม</span>
                  </span>
                </div>
              </div>

              <div className="p-3.5 space-y-1">
                <h4 className="font-bold text-xs text-[var(--text-primary)] group-hover:text-[#35D5F2] transition-colors">
                  {doc.title}
                </h4>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Lightbox for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[#080D1B]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 p-2 rounded-xl bg-black/70 text-white hover:bg-[#35D5F2] hover:text-[#080D1B] transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Official Document"
              className="max-h-[85vh] w-auto mx-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Contact & Support */}
      <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-bold text-sm text-[var(--text-primary)]">
            ช่องทางติดต่อฝ่ายจัดการแข่งขันทางการ
          </h3>
          <p className="text-xs text-[var(--text-secondary)]">
            คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยหอการค้าไทย (UTCC STECH)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:026976504"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#35D5F2]/20 text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-color)] transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#35D5F2]" />
            <span>02-697-6504-5</span>
          </a>
          <a
            href="https://science.utcc.ac.th"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#35D5F2]/20 text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-color)] transition-all"
          >
            <Globe className="w-3.5 h-3.5 text-[#8B7CFF]" />
            <span>science.utcc.ac.th</span>
            <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
          </a>
        </div>
      </div>
    </div>
  );
};

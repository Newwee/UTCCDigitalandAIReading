export interface TeamRole {
  member: string;
  primaryDomain: string;
  secondaryCrossCheck: string;
  keyFocus: string;
}

export interface CountdownSchedule {
  period: string;
  activity: string;
}

export interface TeamStrategyData {
  title: string;
  sourcePageRange: string;
  concept: string;
  roles: TeamRole[];
  countdownPlan: CountdownSchedule[];
}

export const TEAM_STRATEGY: TeamStrategyData = {
  "title": "กลยุทธ์เตรียมตัวและการแบ่งหน้าที่ทีม 3 คน (Tri-Specialist Strategy)",
  "sourcePageRange": "หน้า 54–55",
  "concept": "เนื่องจากข้อสอบรอบคัดเลือกมี 20 ข้อปรนัย และรอบชิงมี 10 ข้ออัตนัย โดยสมาชิกในทีมต้องช่วยกันทำข้อสอบ การให้ทุกคนอ่านทุกเรื่องเหมือนกันหมดอย่างผิวเผินจะทำให้สู้ทีมที่มีผู้เชี่ยวชาญเฉพาะทางไม่ได้ ดังนั้นควรวางกลยุทธ์แบบ Tri-Specialist: ทุกคนมีพื้นฐานครบทั้ง 5 กลุ่ม และเป็น Deep Specialist คนละ 2 กลุ่มวิชาเพื่อทำการ Cross-check",
  "roles": [
    {
      "member": "สมาชิกคนที่ 1: Infrastructure & Systems Lead",
      "primaryDomain": "กลุ่ม 2: Network / Cloud และ กลุ่ม 3: Hardware / OS",
      "secondaryCrossCheck": "กลุ่ม 1: General IT และความมั่นคงปลอดภัยไซเบอร์",
      "keyFocus": "การคำนวณ Subnet / VLSM, OSI 7 Layers, Cloud Service Models, CPU Architecture, AMAT Cache, Linux Permissions, RAID"
    },
    {
      "member": "สมาชิกคนที่ 2: Algorithms & Logic Lead",
      "primaryDomain": "กลุ่ม 4: Programming & Algorithms และ กลุ่ม 3: Hardware (ระบบตัวเลข)",
      "secondaryCrossCheck": "กลุ่ม 5: Machine Learning (ตรรกะคณิตศาสตร์และการแปลงสูตร)",
      "keyFocus": "การไล่ผังงาน Flowchart, ภาษาเทียม Pseudocode, ลูปและเงื่อนไข, ความซับซ้อน Big-O, Sorting/Search, พีชคณิตบูลีน, Dynamic Programming"
    },
    {
      "member": "สมาชิกคนที่ 3: AI & Data Science Lead",
      "primaryDomain": "กลุ่ม 5: AI / Machine Learning และ กลุ่ม 1: General IT / ข่าวสารเทคโนโลยี",
      "secondaryCrossCheck": "กลุ่ม 4: Programming (โครงสร้างข้อมูล Data Science)",
      "keyFocus": "Supervised/Unsupervised/RL, Data Preprocessing (Scaling/Encoding), Confusion Matrix & F1-Score, Neural Networks, Backpropagation, LLM, RAG, PDPA, โนเบล 2024"
    }
  ],
  "countdownPlan": [
    {
      "period": "10–13 พฤศจิกายน 2569 (ปูพื้นฐานและเก็บรายละเอียด 5 กลุ่ม)",
      "activity": "อ่านทบทวนเนื้อหาฉบับสมบูรณ์ทั้ง 5 กลุ่มใน Study Guide และทำความเข้าใจคำศัพท์ทางเทคนิคใน Glossary ทั้งหมด"
    },
    {
      "period": "14–16 พฤศจิกายน 2569 (ฝึกทำข้อสอบจำลองจับเวลาจริง)",
      "activity": "ทำข้อสอบจำลองทั้ง 100 ข้อ โดยจับเวลาทำรอบละ 20 ข้อ ตามรูปแบบรอบคัดเลือกจริงเพื่อฝึกความเร็วและลดความผิดพลาด"
    },
    {
      "period": "17–18 พฤศจิกายน 2569 (ทบทวนจุดผิดพลาดและเตรียมความพร้อมก่อนวันแข่ง)",
      "activity": "ทบทวน 12 ข้อควรระวังและจุดหลอก (Common Misconceptions) และซ้อมทำโจทย์วิเคราะห์เชิงลึก 3 ข้อของรอบชิงชนะเลิศ"
    },
    {
      "period": "วันพฤหัสบดีที่ 19 พฤศจิกายน 2569 (วันแข่งขันจริง)",
      "activity": "08:30 น. ลงทะเบียน ณ ชั้น 1 อาคารหอประชุม ม.หอการค้าไทย และลุยการแข่งขันทั้ง 2 รอบ"
    }
  ]
};

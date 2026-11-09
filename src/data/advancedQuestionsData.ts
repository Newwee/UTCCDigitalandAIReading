export interface AdvancedQuestionStep {
  step: string;
  detail: string;
}

export interface AdvancedQuestion {
  id: string;
  title: string;
  categoryId: 'general-it' | 'network-cloud' | 'hardware-os' | 'programming-algo' | 'ai-datascience';
  topic: string;
  scenario: string;
  questionPrompt: string;
  solutionSteps: AdvancedQuestionStep[];
  keyTakeaways: string;
  sourcePage: number;
}

/**
 * โจทย์วิเคราะห์และบูรณาการระดับสูงสำหรับรอบชิงชนะเลิศ (ข้อสอบอัตนัย)
 * อ้างอิงจาก UTCC Digital and AI Challenge 2026 Study Guide (หน้า 52–54)
 */
export const ADVANCED_QUESTIONS: AdvancedQuestion[] = [
  {
    "id": "adv-1",
    "title": "โจทย์วิเคราะห์ข้อที่ 1: การออกแบบเครือข่ายย่อยแบบ VLSM และความปลอดภัยคลาวด์",
    "categoryId": "network-cloud",
    "topic": "VLSM Subnetting & Network Security",
    "scenario": "บริษัทสตาร์ทอัพแห่งหนึ่งได้รับจัดสรรบล็อกเครือข่ายภายในคือ 10.10.10.0/24 และต้องการแบ่งเครือข่ายย่อยแบบประหยัดแอดเดรสที่สุด (VLSM: Variable Length Subnet Mask) ให้กับ 3 แผนก ได้แก่:\\n1. แผนก AI Research: มีเครื่องเซิร์ฟเวอร์และเวิร์กสเตชันรวม 55 เครื่อง\\n2. แผนก Software Dev: มีเครื่องคอมพิวเตอร์รวม 25 เครื่อง\\n3. แผนก Cloud Ops: มีเครื่องคอมพิวเตอร์รวม 10 เครื่อง",
    "questionPrompt": "จงหา Prefix (/p), Subnet Mask และช่วง Network–Broadcast Address ของทั้ง 3 แผนกโดยเรียงจากขนาดใหญ่ไปเล็ก",
    "solutionSteps": [
      {
        "step": "1. แผนก AI Research (ต้องการ 55 เครื่อง)",
        "detail": "หาจำนวนบิตโฮสต์ h ที่ทำให้ 2^h - 2 >= 55 จะได้ h = 6 บิต (2^6 - 2 = 62 เครื่อง, บล็อก 64)\\nPrefix คือ 32 - 6 = /26 (Subnet Mask: 255.255.255.192)\\nช่วงแอดเดรส: 10.10.10.0/26\\n• Network Address: 10.10.10.0\\n• Usable Hosts: 10.10.10.1 – 10.10.10.62\\n• Broadcast Address: 10.10.10.63"
      },
      {
        "step": "2. แผนก Software Dev (ต้องการ 25 เครื่อง)",
        "detail": "หาจำนวนบิตโฮสต์ h ที่ทำให้ 2^h - 2 >= 25 จะได้ h = 5 บิต (2^5 - 2 = 30 เครื่อง, บล็อก 32)\\nPrefix คือ 32 - 5 = /27 (Subnet Mask: 255.255.255.224)\\nช่วงแอดเดรส: 10.10.10.64/27 (เริ่มต่อจาก .63)\\n• Network Address: 10.10.10.64\\n• Usable Hosts: 10.10.10.65 – 10.10.10.94\\n• Broadcast Address: 10.10.10.95"
      },
      {
        "step": "3. แผนก Cloud Ops (ต้องการ 10 เครื่อง)",
        "detail": "หาจำนวนบิตโฮสต์ h ที่ทำให้ 2^h - 2 >= 10 จะได้ h = 4 บิต (2^4 - 2 = 14 เครื่อง, บล็อก 16)\\nPrefix คือ 32 - 4 = /28 (Subnet Mask: 255.255.255.240)\\nช่วงแอดเดรส: 10.10.10.96/28 (เริ่มต่อจาก .95)\\n• Network Address: 10.10.10.96\\n• Usable Hosts: 10.10.10.97 – 10.10.10.110\\n• Broadcast Address: 10.10.10.111"
      }
    ],
    "keyTakeaways": "การทำ VLSM ต้องจัดสรรเครือข่ายจากกลุ่มที่ต้องการจำนวนโฮสต์ 'มากที่สุดไปน้อยที่สุด' เสมอ เพื่อป้องกันไม่ให้เกิดช่องว่างที่ไม่สามารถรวมบล็อกได้",
    "sourcePage": 53
  },
  {
    "id": "adv-2",
    "title": "โจทย์วิเคราะห์ข้อที่ 2: การคำนวณหน่วยความจำ GPU (VRAM) สำหรับรันโมเดล LLM",
    "categoryId": "ai-datascience",
    "topic": "GPU VRAM Estimation & Model Quantization",
    "scenario": "ทีมนักวิจัยต้องการนำโมเดลภาษาขนาดใหญ่ (LLM) ที่มีจำนวนพารามิเตอร์ 7 พันล้านตัว (7B Parameters) มารันเพื่อทำ Inference บนเครื่องเซิร์ฟเวอร์หรือแล็ปท็อป\\n1. หากเก็บค่าน้ำหนัก (Weights) ของโมเดลในรูปแบบทศนิยม FP16 (16-bit Floating Point) จะต้องใช้ VRAM อย่างน้อยกี่ GB?\\n2. หากต้องการลดการใช้ VRAM ลงให้รันบนแล็ปท็อปที่มี VRAM 6 GB ได้โดยใช้เทคนิค 4-bit Quantization (INT4 / FP4) พื้นที่เก็บค่าน้ำหนักจะลดลงเหลือกี่ GB?",
    "questionPrompt": "จงคำนวณขนาด VRAM ที่ต้องใช้สำหรับโมเดล 7B ในกรณี FP16 และ 4-bit Quantization",
    "solutionSteps": [
      {
        "step": "1. กรณี FP16 (16 บิตต่อพารามิเตอร์)",
        "detail": "เนื่องจาก 1 Byte = 8 bits ดังนั้นพารามิเตอร์ขนาด 16 บิตจะใช้พื้นที่ = 16 / 8 = 2 Bytes ต่อพารามิเตอร์\\nโมเดลขนาด 7 x 10^9 พารามิเตอร์ จะใช้พื้นที่เก็บค่าน้ำหนัก = 7 x 10^9 x 2 Bytes = 14 x 10^9 Bytes = 14 GB\\n(เมื่อรวมพื้นที่สำหรับ KV Cache และ Context Window ขณะรัน Inference จะต้องใช้ VRAM รวมประมาณ 16–18 GB)"
      },
      {
        "step": "2. กรณี 4-bit Quantization (4 บิตต่อพารามิเตอร์)",
        "detail": "พารามิเตอร์ขนาด 4 บิต ใช้พื้นที่ = 4 / 8 = 0.5 Bytes ต่อพารามิเตอร์\\nพื้นที่เก็บค่าน้ำหนักจะลดลงเหลือ = 7 x 10^9 x 0.5 Bytes = 3.5 GB\\nทำให้สามารถโหลดตัวโมเดลลงในแล็ปท็อปที่มี GPU VRAM 6 GB ได้อย่างราบรื่น (เหลือพื้นที่อีก 2.5 GB สำหรับ KV Cache)"
      }
    ],
    "keyTakeaways": "สูตรคำนวณ VRAM พื้นฐาน: VRAM (Bytes) = Parameters x (Precision Bits / 8). การบีบอัด Quantization ช่วยให้โมเดลรันบน Edge Device ได้โดยสูญเสียความแม่นยำเพียงเล็กน้อย",
    "sourcePage": 53
  },
  {
    "id": "adv-3",
    "title": "โจทย์วิเคราะห์ข้อที่ 3: การไล่อัลกอริทึม Dynamic Programming vs Recursion",
    "categoryId": "programming-algo",
    "topic": "Dynamic Programming & Optimization",
    "scenario": "พิจารณาฟังก์ชันค้นหาค่าสูงสุดของการเลือกหยิบเหรียญโดยห้ามหยิบเหรียญที่วางติดกัน (House Robber / Non-adjacent Maximum Sum) สำหรับอาเรย์ coins = [4, 1, 2, 7, 5, 3] โดยมีสมการความสัมพันธ์เวียนเกิดคือ:\\ndp[i] = max(dp[i-1], dp[i-2] + coins[i])",
    "questionPrompt": "จงคำนวณค่าในตาราง dp ตั้งแต่ดัชนี 0 ถึง 5 พร้อมระบุผลลัพธ์สูงสุดและตำแหน่งของเหรียญที่ถูกเลือก",
    "solutionSteps": [
      {
        "step": "การไล่คำนวณตาราง dp ทีละดัชนี",
        "detail": "• i = 0 (coins[0] = 4): dp[0] = 4 (เลือกเหรียญ 0)\\n• i = 1 (coins[1] = 1): max(coins[0], coins[1]) = max(4, 1) -> dp[1] = 4\\n• i = 2 (coins[2] = 2): max(dp[1], dp[0] + coins[2]) = max(4, 4 + 2) -> dp[2] = 6 (หยิบ 4 และ 2)\\n• i = 3 (coins[3] = 7): max(dp[2], dp[1] + coins[3]) = max(6, 4 + 7) -> dp[3] = 11 (หยิบ 4 และ 7)\\n• i = 4 (coins[4] = 5): max(dp[3], dp[2] + coins[4]) = max(11, 6 + 5) -> dp[4] = 11\\n• i = 5 (coins[5] = 3): max(dp[4], dp[3] + coins[5]) = max(11, 11 + 3) -> dp[5] = 14"
      },
      {
        "step": "ผลลัพธ์และตำแหน่งเหรียญที่เลือก",
        "detail": "ผลรวมสูงสุดคือ 14 โดยเลือกเหรียญที่ดัชนี 0, 3, และ 5 (ค่า 4, 7, และ 3 ซึ่งไม่อยู่ติดกันเลย รวมได้ 4 + 7 + 3 = 14)\\nการใช้ตาราง Memoization / Tabulation ช่วยลดเวลาประมวลผลจาก O(2^n) เหลือเพียง O(n)"
      }
    ],
    "keyTakeaways": "Dynamic Programming ใช้แก้ปัญหาที่มี Overlapping Subproblems และ Optimal Substructure โดยเปลี่ยนปัญหา Exponential O(2^n) ให้กลายเป็น Linear O(n)",
    "sourcePage": 54
  }
];

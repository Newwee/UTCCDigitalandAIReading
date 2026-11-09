export interface ExamTrap {
  id: string;
  category: string;
  categoryId: 'general-it' | 'network-cloud' | 'hardware-os' | 'programming-algo' | 'ai-datascience';
  misconception: string;
  fact: string;
  sourcePage: number;
}

/**
 * 12 หัวข้อเน้นหนักและจุดหลอกในห้องสอบ (High-Priority Misconceptions - ตารางที่ 8)
 * อ้างอิงจาก UTCC Digital and AI Challenge 2026 Study Guide (หน้า 23–24)
 */
export const EXAM_TRAPS: ExamTrap[] = [
  {
    "id": "trap-1",
    "category": "Network",
    "categoryId": "network-cloud",
    "misconception": "เข้าใจว่า IP ที่ขึ้นต้นด้วย 172.x.x.x ทั้งหมดเป็น Private IP",
    "fact": "Private IP Class B ตามมาตรฐาน RFC 1918 คือช่วง 172.16.0.0 ถึง 172.31.255.255 (/12) เท่านั้น ดังนั้น 172.32.0.1 หรือ 172.15.0.1 จึงเป็น Public IP!",
    "sourcePage": 23
  },
  {
    "id": "trap-2",
    "category": "Network",
    "categoryId": "network-cloud",
    "misconception": "เข้าใจว่า Switch (Layer 2) แยกทั้ง Collision Domain และ Broadcast Domain",
    "fact": "Switch ที่ไม่ได้ตั้งค่า VLAN จะแยกเฉพาะ Collision Domain ในแต่ละพอร์ต แต่ทุกพอร์ตยังคงอยู่ใน Broadcast Domain เดียวกัน ผู้ที่แยก Broadcast Domain โดยค่าเริ่มต้นคือ Router (Layer 3)",
    "sourcePage": 23
  },
  {
    "id": "trap-3",
    "category": "Network",
    "categoryId": "network-cloud",
    "misconception": "เข้าใจว่าโปรโตคอล Ping (ICMP) ใช้หมายเลขพอร์ต TCP หรือ UDP",
    "fact": "ICMP ทำงานอยู่ในระดับ Network Layer (Layer 3) จึงไม่มีหมายเลขพอร์ต (No Port Number) ซึ่งหมายเลขพอร์ตจะมีเฉพาะใน Transport Layer (Layer 4: TCP/UDP) เท่านั้น",
    "sourcePage": 23
  },
  {
    "id": "trap-4",
    "category": "Cloud",
    "categoryId": "network-cloud",
    "misconception": "สับสนว่าบริการฐานข้อมูลจัดการสำเร็จรูปหรือสภาพแวดล้อมรันโค้ดเป็น IaaS",
    "fact": "หากผู้ใช้ไม่ต้องจัดการระบบปฏิบัติการ (OS) เอง แต่เป็นผู้อัปโหลดโค้ดแอปพลิเคชันขึ้นไปรัน จะจัดเป็น PaaS ส่วน IaaS ผู้ใช้ต้องดูแลและติดตั้ง OS เอง (เช่น AWS EC2, Azure VM)",
    "sourcePage": 23
  },
  {
    "id": "trap-5",
    "category": "Hardware",
    "categoryId": "hardware-os",
    "misconception": "สับสนระหว่างพอร์ต M.2 กับโปรโตคอล NVMe ว่าคือสิ่งเดียวกัน",
    "fact": "M.2 คือรูปแบบสล็อตทางกายภาพ (Form Factor) ซึ่งการ์ด SSD แบบ M.2 อาจทำงานด้วยโปรโตคอล SATA (ความเร็ว ~550 MB/s) หรือโปรโตคอล NVMe ผ่านบัส PCIe (ความเร็ว 3,500–14,000+ MB/s) ก็ได้",
    "sourcePage": 23
  },
  {
    "id": "trap-6",
    "category": "Hardware & OS",
    "categoryId": "hardware-os",
    "misconception": "เข้าใจว่าการเพิ่มขนาด RAM จะช่วยเพิ่มความเร็วสัญญาณนาฬิกา (Clock Speed) ของ CPU",
    "fact": "การเพิ่ม RAM ช่วยลดการเกิด Page Fault / Swapping ลงดิสก์เมื่อเปิดหลายโปรแกรมพร้อมกัน แต่ไม่ได้เพิ่มความถี่สัญญาณนาฬิกาของ CPU ส่วนหน่วยความจำที่อยู่ติดกับแกน CPU เพื่อลดเวลารอข้อมูลคือ Cache (SRAM)",
    "sourcePage": 23
  },
  {
    "id": "trap-7",
    "category": "Number Systems",
    "categoryId": "hardware-os",
    "misconception": "คำนวณความเร็วการดาวน์โหลดไฟล์จากอินเทอร์เน็ตโดยไม่แปลงหน่วย Bit เป็น Byte",
    "fact": "ความเร็วอินเทอร์เน็ตวัดเป็น บิตต่อวินาที (Mbps) แต่ขนาดไฟล์วัดเป็น ไบต์ (MB) ต้องนำความเร็วไป หารด้วย 8 เสมอ (เพราะ 1 Byte = 8 bits)",
    "sourcePage": 23
  },
  {
    "id": "trap-8",
    "category": "Programming",
    "categoryId": "programming-algo",
    "misconception": "เข้าใจว่าตัวดำเนินการ AND กับ OR มีลำดับความสำคัญเท่ากันและทำจากซ้ายไปขวา",
    "fact": "ในทุกภาษามาตรฐาน NOT สำคัญกว่า AND และ AND สำคัญกว่า OR เสมอ (เหมือนการคูณที่ต้องทำก่อนการบวกในพีชคณิตบูลีน)",
    "sourcePage": 23
  },
  {
    "id": "trap-9",
    "category": "Algorithms",
    "categoryId": "programming-algo",
    "misconception": "เห็นข้อมูลจำนวนน้อยหรือยังไม่เรียงลำดับแต่เลือกใช้ Binary Search เพราะจำว่า O(log n) เร็วกว่า",
    "fact": "Binary Search ใช้ได้เฉพาะกับข้อมูลที่เรียงลำดับแล้ว (Sorted Array) เท่านั้น หากข้อมูลยังไม่เรียงลำดับและต้องการค้นหาเพียงครั้งเดียว ต้องใช้ Linear Search O(n) (เพราะการเรียงลำดับก่อนจะใช้เวลา O(n log n) ซึ่งช้ากว่า!)",
    "sourcePage": 23
  },
  {
    "id": "trap-10",
    "category": "AI & ML",
    "categoryId": "ai-datascience",
    "misconception": "เห็นชื่ออัลกอริทึม Logistic Regression แล้วตอบว่าเป็นโมเดลประเภท Regression",
    "fact": "แม้ชื่อจะมีคำว่า Regression แต่ Logistic Regression ใช้ฟังก์ชัน Sigmoid เพื่อทำนายความน่าจะเป็นของหมวดหมู่ จึงเป็นอัลกอริทึมสำหรับงาน Classification (จำแนกประเภท)!",
    "sourcePage": 24
  },
  {
    "id": "trap-11",
    "category": "AI & ML",
    "categoryId": "ai-datascience",
    "misconception": "เข้าใจว่าโมเดลที่ได้ค่า Accuracy 99% คือโมเดลที่ดีเยี่ยมเสมอในทุกชุดข้อมูล",
    "fact": "ในชุดข้อมูลที่ไม่สมดุล (Imbalanced Dataset เช่น การตรวจจับผู้ป่วยโรคหายากที่มีเพียง 1% ของประชากร) โมเดลที่ทายว่า 'ไม่ป่วยทุกคน' จะได้ Accuracy 99% แต่ใช้งานไม่ได้จริง ต้องวัดผลด้วย Precision, Recall และ F1-Score",
    "sourcePage": 24
  },
  {
    "id": "trap-12",
    "category": "GenAI & LLM",
    "categoryId": "ai-datascience",
    "misconception": "เข้าใจว่าการทำ RAG คือการฝึกสอนโมเดล (Fine-tuning) ใหม่ด้วยข้อมูลองค์กร",
    "fact": "RAG ไม่ได้แก้ไขค่าน้ำหนัก (Weights) ของโมเดล LLM แต่เป็นการค้นหาเนื้อหาที่เกี่ยวข้องจากฐานข้อมูลภายนอก (เช่น Vector DB) มาใส่ใน Prompt ณ เวลาที่ถาม (Inference time)",
    "sourcePage": 24
  }
];

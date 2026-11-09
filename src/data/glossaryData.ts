export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  categoryId: 'general-it' | 'network-cloud' | 'hardware-os' | 'programming-algo' | 'ai-datascience';
  categoryName: string;
  sourcePage: number;
}

/**
 * Technical Glossary — พจนานุกรมคำศัพท์สำคัญทั้ง 5 กลุ่มวิชา (ตารางที่ 7)
 * อ้างอิงจาก UTCC Digital and AI Challenge 2026 Study Guide (หน้า 20–22)
 */
export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    "id": "term-1",
    "term": "Knowledge Von Neumann Architecture",
    "definition": "สถาปัตยกรรมคอมพิวเตอร์ที่จัดเก็บทั้งคำสั่งโปรแกรมและข้อมูลไว้ในหน่วย ความจำเดียวกัน (Timeline of Computer History)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-2",
    "term": "Knowledge Qubit (Quantum Bit)",
    "definition": "หน่วยข้อมูลพื้นฐานของคอมพิวเตอร์ควอนตัมที่สามารถอยู่ในสถานะซ้อนทับ (Superposition) ของ 0 และ 1 พร้อมกันได้ (IBM Think Topics)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-3",
    "term": "Knowledge Wi-Fi 7 (IEEE 802.11be)",
    "definition": "มาตรฐานเครือข่ายไร้สายยุคที่ 7 ที่ใช้คลื่น 2.4/5/6 GHz ความกว้างช่อง สัญญาณ 320 MHz และเทคโนโลยี Multi-Link Operation (Cisco Meraki)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-4",
    "term": "Knowledge CIA Triad",
    "definition": "หลักการรักษาความมั่นคงปลอดภัยสารสนเทศ 3 เสาหลัก ได้แก่ Confidentiality (ความลับ), Integrity (ความถูกต้อง) และ Availability (ความพร้อมใช้) (NIST SP 1800-26)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-5",
    "term": "Knowledge Zero Trust Architecture",
    "definition": "แนวคิดด้านความปลอดภัยที่ไม่เชื่อถือผู้ใช้หรืออุปกรณ์ใดโดยอัตโนมัติ (\"Never trust, always verify\") แม้จะอยู่ในเครือข่ายองค์กร (IBM Zero Trust)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-6",
    "term": "Knowledge Phishing / Spear Phishing",
    "definition": "การหลอกลวงเหยื่อผ่านข้อความหรือเว็บไซต์ปลอมเพื่อขโมยข้อมูลสำคัญ โดย Spear Phishing จะเจาะจงเป้าหมายเฉพาะบุคคล (Cloudflare Phishing)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-7",
    "term": "Knowledge Ransomware",
    "definition": "มัลแวร์เรียกค่าไถ่ที่เข้ารหัสไฟล์ข้อมูลของเหยื่อหรือล็อกหน้าจอเพื่อเรียกเงิน แลกกับกุญแจถอดรหัส (IBM Ransomware)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-8",
    "term": "Knowledge Zero-Day Exploit",
    "definition": "การโจมตีช่องโหว่ของซอฟต์แวร์ที่ผู้พัฒนายังไม่เคยตรวจพบหรือยังไม่มี แพตช์แก้ไข (IBM Cyberthreats)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-9",
    "term": "Knowledge SIEM / SOAR",
    "definition": "ระบบรวบรวมและวิเคราะห์ข้อมูลเหตุการณ์ความปลอดภัยแบบเรียลไทม์ (SIEM) และระบบตอบสนองเหตุอัตโนมัติ (SOAR) (IBM Cyber Resilience)",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-10",
    "term": "Knowledge Data Controller vs Processor",
    "definition": "ตามกฎหมาย PDPA ผู้ควบคุมข้อมูล (Controller) มีอำนาจตัดสินใจในการ ใช้ข้อมูล ส่วนผู้ประมวลผล (Processor) ดำเนินการตามคำสั่งของผู้ ควบคุม",
    "categoryId": "general-it",
    "categoryName": "1. General",
    "sourcePage": 20
  },
  {
    "id": "term-11",
    "term": "Cloud Encapsulation",
    "definition": "กระบวนการห่อหุ้มข้อมูลโดยเพิ่มส่วนหัว (Header) ของแต่ละชั้นใน OSI Model จากชั้นบนลงสู่ชั้นล่างก่อนส่งออกทางสายสัญญาณ",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 20
  },
  {
    "id": "term-12",
    "term": "Cloud MAC Address",
    "definition": "ที่อยู่ทางกายภาพขนาด 48 บิต (เขียนเป็นเลขฐานสิบหก 12 หลัก) ที่ฝังมา กับการ์ดเครือข่าย (NIC) ทำงานในชั้น Data Link Layer (Layer 2) (Microsoft Learn) Term) คำอธิบายความหมายและหลักการทำงานอย่างกระชับ",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-13",
    "term": "Cloud Subnet Mask / CIDR",
    "definition": "ตัวเลขที่ใช้แบ่งส่วน Network ID และ Host ID ออกจากกันใน IPv4 เช่น /24 เทียบเท่ากับ 255.255.255.0",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-14",
    "term": "Cloud NAT (Network Address Translation)",
    "definition": "กลไกบน Router ที่แปลง Private IP ภายในเครือข่ายองค์กรหรือบ้านให้ เป็น Public IP เพื่อเชื่อมต่อออกสู่อินเทอร์เน็ต",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-15",
    "term": "Cloud VLAN (Virtual LAN)",
    "definition": "การแบ่งเครือข่ายแลนเสมือนบน Switch ตัวเดียวกันเพื่อแยก Broadcast Domain ออกจากกันในระดับ Layer 2 (Cisco Switches)",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-16",
    "term": "Cloud ARP (Address Resolution Protocol)",
    "definition": "โปรโตคอลที่ใช้ค้นหาหมายเลข MAC Address จากหมายเลข IPv4 Address ที่ทราบค่าภายในเครือข่ายเดียวกัน (IBM OSI Model)",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-17",
    "term": "Cloud DNS over HTTPS (DoH)",
    "definition": "การส่งคำขอแปลงชื่อโดเมนเป็น IP Address ผ่านการเข้ารหัส HTTPS (Port 443) เพื่อป้องกันการดักฟังและปลอมแปลงข้อมูล (MDN DoH)",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-18",
    "term": "Cloud Hypervisor",
    "definition": "ซอฟต์แวร์หรือเฟิร์มแวร์ที่ทำหน้าที่สร้างและจัดการเครื่องเสมือน (Virtual Machines) โดยแบ่งสรรทรัพยากรจากเครื่องจริง",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-19",
    "term": "Cloud Containerization",
    "definition": "การบรรจุโค้ดและไลบรารีลงในแพ็กเกจที่ทำงานแยกส่วนโดยแชร์ Kernel ร่วมกับ Host OS เช่น Docker (AWS Containerization)",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-20",
    "term": "Cloud Kubernetes (K8s) Pod",
    "definition": "หน่วยเล็กที่สุดในการดีพลอยแอปพลิเคชันบน Kubernetes ซึ่งภายใน ประกอบด้วยหนึ่งหรือหลายคอนเทนเนอร์ที่แชร์เครือข่ายร่วมกัน (AWS K8s)",
    "categoryId": "network-cloud",
    "categoryName": "2. Network &",
    "sourcePage": 21
  },
  {
    "id": "term-21",
    "term": "OS ALU (Arithmetic Logic Unit)",
    "definition": "หน่วยคำนวณทางคณิตศาสตร์และเปรียบเทียบทางตรรกะภายใน CPU",
    "categoryId": "hardware-os",
    "categoryName": "3. Hardware &",
    "sourcePage": 21
  },
  {
    "id": "term-22",
    "term": "OS Cache Memory (SRAM)",
    "definition": "หน่วยความจำความเร็วสูงมากภายใน CPU (L1, L2, L3) ที่เก็บข้อมูลและคำ สั่งที่ถูกเรียกใช้บ่อยเพื่อลดการรอคอยจาก RAM",
    "categoryId": "hardware-os",
    "categoryName": "3. Hardware &",
    "sourcePage": 21
  },
  {
    "id": "term-23",
    "term": "OS UEFI & GPT",
    "definition": "เฟิร์มแวร์สมัยใหม่ (UEFI) ที่มาแทน BIOS และใช้คู่กับตารางพาร์ติชันแบบ GPT ที่รองรับดิสก์ขนาดเกิน 2 TB",
    "categoryId": "hardware-os",
    "categoryName": "3. Hardware &",
    "sourcePage": 21
  },
  {
    "id": "term-24",
    "term": "OS NVMe (Non-Volatile Memory Express)",
    "definition": "โปรโตคอลการเข้าถึงข้อมูลความเร็วสูงสำหรับ SSD ที่เชื่อมต่อผ่านบัส PCIe โดยตรง (Crucial SSD)",
    "categoryId": "hardware-os",
    "categoryName": "3. Hardware &",
    "sourcePage": 21
  },
  {
    "id": "term-25",
    "term": "OS Kernel",
    "definition": "แกนกลางของระบบปฏิบัติการที่ทำหน้าที่สื่อสารและควบคุมฮาร์ดแวร์ จัดการ หน่วยความจำ และจัดสรรเวลาซีพียูให้โปรเซส (Red Hat Kernel)",
    "categoryId": "hardware-os",
    "categoryName": "3. Hardware &",
    "sourcePage": 21
  },
  {
    "id": "term-26",
    "term": "OS Context Switching",
    "definition": "กระบวนการที่ CPU บันทึกสถานะของ Process/Thread ปัจจุบันไว้ใน PCB แล้วสลับไปรัน Process/Thread อื่น",
    "categoryId": "hardware-os",
    "categoryName": "3. Hardware &",
    "sourcePage": 21
  },
  {
    "id": "term-27",
    "term": "OS Virtual Memory / Paging",
    "definition": "การใช้พื้นที่ดิสก์ (Page File / Swap) จำลองเป็นหน่วยความจำเสมือนเมื่อ RAM ไม่เพียงพอ Term) คำอธิบายความหมายและหลักการทำงานอย่างกระชับ",
    "categoryId": "hardware-os",
    "categoryName": "3. Hardware &",
    "sourcePage": 22
  },
  {
    "id": "term-28",
    "term": "OS Journaling File System",
    "definition": "ระบบไฟล์ (เช่น NTFS, ext4) ที่บันทึกการเปลี่ยนแปลงลงในล็อกก่อนเขียน จริง เพื่อป้องกันข้อมูลเสียหายเมื่อไฟดับ",
    "categoryId": "hardware-os",
    "categoryName": "3. Hardware &",
    "sourcePage": 22
  },
  {
    "id": "term-29",
    "term": "Pseudocode",
    "definition": "รหัสลำลองที่เขียนอธิบายขั้นตอนของอัลกอริทึมด้วยถ้อยคำกึ่งภาษา อังกฤษและโครงสร้างตรรกะ โดยไม่ยึดติดไวยากรณ์ภาษาใดภาษาหนึ่ง (CS50x)",
    "categoryId": "programming-algo",
    "categoryName": "4. Programming",
    "sourcePage": 22
  },
  {
    "id": "term-30",
    "term": "Short-Circuit Evaluation",
    "definition": "การประเมินผลนิพจน์ตรรกะที่หยุดตรวจทันทีเมื่อทราบผลลัพธ์แน่นอนแล้ว (เช่น False AND X จะไม่ประมวลผล X ต่อ)",
    "categoryId": "programming-algo",
    "categoryName": "4. Programming",
    "sourcePage": 22
  },
  {
    "id": "term-31",
    "term": "Immutability",
    "definition": "คุณสมบัติของข้อมูลที่ไม่สามารถแก้ไขค่าภายในได้หลังถูกสร้างขึ้น เช่น tuple และ str ในภาษา Python",
    "categoryId": "programming-algo",
    "categoryName": "4. Programming",
    "sourcePage": 22
  },
  {
    "id": "term-32",
    "term": "Base Case (Recursion)",
    "definition": "เงื่อนไขหยุดการเรียกซ้ำในฟังก์ชันเวียนเกิด เพื่อป้องกันไม่ให้เกิด Infinite Recursion และ Stack Overflow (MIT 6.006)",
    "categoryId": "programming-algo",
    "categoryName": "4. Programming",
    "sourcePage": 22
  },
  {
    "id": "term-33",
    "term": "Big O Notation",
    "definition": "สัญกรณ์เชิงคณิตศาสตร์ที่ใช้วัดขอบเขตบน (Worst-case upper bound) ของอัตราการเติบโตของเวลาหรือพื้นที่หน่วยความจำเมื่ออินพุต n มีขนาดใหญ่ (CS50x)",
    "categoryId": "programming-algo",
    "categoryName": "4. Programming",
    "sourcePage": 22
  },
  {
    "id": "term-34",
    "term": "Universal Gates (NAND, NOR)",
    "definition": "ลอจิกเกตพื้นฐานที่สามารถนำมาต่อกันเพื่อสร้างเกตชนิดอื่น (AND, OR, NOT, XOR) ได้ครบทุกชนิด",
    "categoryId": "programming-algo",
    "categoryName": "4. Programming",
    "sourcePage": 22
  },
  {
    "id": "term-35",
    "term": "Science Feature Extraction / Engineering",
    "definition": "กระบวนการคัดเลือกและแปลงข้อมูลดิบให้เป็นตัวแปรคุณลักษณะเด่น (Features) ซึ่งใน Deep Learning จะทำขั้นตอนนี้ได้โดยอัตโนมัติ",
    "categoryId": "ai-datascience",
    "categoryName": "5. AI & Data",
    "sourcePage": 22
  },
  {
    "id": "term-36",
    "term": "Science Overfitting",
    "definition": "สภาวะที่โมเดลจดจำข้อมูลฝึกสอนมากเกินไปจนทำนายข้อมูลฝึกสอนได้ แม่นยำสูงมาก แต่ทำนายข้อมูลใหม่ (Test Set) ได้แย่ (Google ML Overfitting)",
    "categoryId": "ai-datascience",
    "categoryName": "5. AI & Data",
    "sourcePage": 22
  },
  {
    "id": "term-37",
    "term": "Science Backpropagation",
    "definition": "อัลกอริทึมการส่งค่าความคลาดเคลื่อน (Error/Loss) ย้อนกลับจากชั้น Output มาปรับค่าน้ำหนัก (Weights) ใน Neural Network",
    "categoryId": "ai-datascience",
    "categoryName": "5. AI & Data",
    "sourcePage": 22
  },
  {
    "id": "term-38",
    "term": "Science Transformer & Self- Attention",
    "definition": "สถาปัตยกรรมโครงข่ายประสาทเทียมที่ประมวลผลความสัมพันธ์ของทุกคำ ในลำดับข้อมูลพร้อมกัน เป็นรากฐานของ LLM (IBM ML)",
    "categoryId": "ai-datascience",
    "categoryName": "5. AI & Data",
    "sourcePage": 22
  },
  {
    "id": "term-39",
    "term": "Science Vector Embeddings",
    "definition": "การแปลงข้อความ รูปภาพ หรือเสียง ให้เป็นแถวลำดับของตัวเลขทศนิยมใน ปริภูมิหลายมิติที่แทนความหมายเชิงบริบท (IBM RAG)",
    "categoryId": "ai-datascience",
    "categoryName": "5. AI & Data",
    "sourcePage": 22
  },
  {
    "id": "term-40",
    "term": "Science RAG (Retrieval- Augmented Generation)",
    "definition": "สถาปัตยกรรมที่ดึงข้อมูลอ้างอิงจากฐานข้อมูลภายนอกมาแนบใน Prompt ก่อนให้ LLM สร้างคำตอบ เพื่อลด Hallucination (Google Cloud RAG)",
    "categoryId": "ai-datascience",
    "categoryName": "5. AI & Data",
    "sourcePage": 22
  }
];

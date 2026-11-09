export interface QuestionOption {
  key: 'ก' | 'ข' | 'ค' | 'ง';
  text: string;
}

export interface PracticeQuestion {
  id: string;
  number: number;
  categoryId: 'general-it' | 'network-cloud' | 'hardware-os' | 'programming-algo' | 'ai-datascience';
  tag: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  question: string;
  options: QuestionOption[];
  answer: 'ก' | 'ข' | 'ค' | 'ง';
  answerText: string;
  explanation: string;
  sourcePage: number;
}

/**
 * ชุดข้อสอบจำลอง 100 ข้อ พร้อมเฉลยละเอียดและคำอธิบายทางเทคนิค
 * อ้างอิงจาก UTCC Digital and AI Challenge 2026 Study Guide (หน้า 24–52)
 * ครอบคลุม 3 ระดับความยาก:
 * - ระดับพื้นฐาน (Basic): ข้อ 1–30
 * - ระดับปานกลาง (Intermediate): ข้อ 31–70
 * - ระดับยาก (Advanced): ข้อ 71–100
 */
export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "q-1",
    "number": 1,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ประวัติศาสตร์คอมพิวเตอร์",
    "difficulty": "basic",
    "question": "บุคคลใดได้รับการยกย่องว่าเป็น \"โปรแกรมเมอร์คนแรกของโลก\" จากการเขียนขั้น ตอนวิธีคำนวณเลขเบอร์นูลลีสำหรับเครื่อง Analytical Engine? (Computer History Museum)",
    "options": [
      {
        "key": "ก",
        "text": "Charles Babbage"
      },
      {
        "key": "ข",
        "text": "Ada Lovelace"
      },
      {
        "key": "ค",
        "text": "Grace Hopper"
      },
      {
        "key": "ง",
        "text": "Alan Turing"
      }
    ],
    "answer": "ข",
    "answerText": "Ada Lovelace",
    "explanation": "Charles Babbage เป็นผู้ออกแบบเครื่อง Analytical Engine ส่วน Ada Lovelace เป็นผู้เขียนบันทึกขั้นตอนการทำงาน (Algorithm/Program) สำหรับเครื่องดังกล่าวในปี ค.ศ. 1843 จึงได้รับ การยกย่องเป็นโปรแกรมเมอร์คนแรกของโลก",
    "sourcePage": 24
  },
  {
    "id": "q-2",
    "number": 2,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ยุคของคอมพิวเตอร์",
    "difficulty": "basic",
    "question": "คอมพิวเตอร์ในยุคที่ 1 (First Generation) เช่น เครื่อง ENIAC ใช้เทคโนโลยีฮาร์ดแวร์ ใดเป็นองค์ประกอบหลักในการประมวลผล?",
    "options": [
      {
        "key": "ก",
        "text": "ทรานซิสเตอร์ (Transistor)"
      },
      {
        "key": "ข",
        "text": "แผงวงจรรวม (Integrated Circuit)"
      },
      {
        "key": "ค",
        "text": "หลอดสุญญากาศ (Vacuum Tube)"
      },
      {
        "key": "ง",
        "text": "ไมโครโปรเซสเซอร์ (Microprocessor)"
      }
    ],
    "answer": "ค",
    "answerText": "หลอดสุญญากาศ (Vacuum Tube)",
    "explanation": "เครื่อง ENIAC ใช้หลอดสุญญากาศประมาณ 18,000 หลอด ส่วนยุคที่ 2 ใช้ทรานซิสเตอร์ ยุคที่ 3 ใช้ IC และยุคที่ 4 ใช้ไมโครโปรเซสเซอร์",
    "sourcePage": 24
  },
  {
    "id": "q-3",
    "number": 3,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ความมั่นคงปลอดภัยไซเบอร์",
    "difficulty": "basic",
    "question": "การที่บริษัทติดตั้งระบบสำรองไฟ (UPS) และทำระบบเซิร์ฟเวอร์สำรอง (Failover Cluster) เพื่อให้เว็บไซต์ธนาคารสามารถใช้งานได้ตลอด 24 ชั่วโมงแม้เกิดเหตุขัดข้อง ตรงกับเสาหลักใดใน CIA Triad?",
    "options": [
      {
        "key": "ก",
        "text": "Confidentiality (การรักษาความลับ)"
      },
      {
        "key": "ข",
        "text": "Integrity (ความถูกต้องครบถ้วน)"
      },
      {
        "key": "ค",
        "text": "Availability (ความพร้อมใช้งาน)"
      },
      {
        "key": "ง",
        "text": "Authentication (การพิสูจน์ตัวตน)"
      }
    ],
    "answer": "ค",
    "answerText": "Availability (ความพร้อมใช้งาน)",
    "explanation": "ตามหลักการ CIA Triad ของ NIST Availability คือการรับ ประกันว่าระบบและข้อมูลพร้อมให้ผู้มีสิทธิ์เข้าถึงได้ตลอดเวลาที่ต้องการ",
    "sourcePage": 25
  },
  {
    "id": "q-4",
    "number": 4,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ภัยคุกคามทางไซเบอร์",
    "difficulty": "basic",
    "question": "มัลแวร์ชนิดใดที่ทำงานโดยการเข้ารหัสไฟล์ข้อมูลสำคัญในเครื่องเหยื่อจนไม่สามารถเปิด ใช้งานได้ แล้วแสดงข้อความข่มขู่เรียกเงินแลกกับกุญแจถอดรหัส? (IBM Ransomware)",
    "options": [
      {
        "key": "ก",
        "text": "Spyware"
      },
      {
        "key": "ข",
        "text": "Adware"
      },
      {
        "key": "ค",
        "text": "Ransomware"
      },
      {
        "key": "ง",
        "text": "Keylogger"
      }
    ],
    "answer": "ค",
    "answerText": "Ransomware",
    "explanation": "Ransomware คือมัลแวร์เรียกค่าไถ่ที่ล็อกระบบหรือเข้ารหัสไฟล์ข้อมูลเพื่อบังคับ ให้เหยื่อจ่ายเงินค่าไถ่",
    "sourcePage": 25
  },
  {
    "id": "q-5",
    "number": 5,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ข่าวสารเทคโนโลยี 2024–2026",
    "difficulty": "basic",
    "question": "นักวิทยาศาสตร์คู่ใดได้รับรางวัลโนเบลสาขาฟิสิกส์ (Nobel Prize in Physics) จากผลงานการค้นพบรากฐานการเรียนรู้ของเครื่องด้วยโครงข่ายประสาทเทียม (Artificial Neural Networks)? (UCL News)",
    "options": [
      {
        "key": "ก",
        "text": "Demis Hassabis และ John Jumper"
      },
      {
        "key": "ข",
        "text": "John Hopfield และ Geoffrey Hinton"
      },
      {
        "key": "ค",
        "text": "Tim Berners-Lee และ Vint Cerf"
      },
      {
        "key": "ง",
        "text": "Jensen Huang และ Sam Altman"
      }
    ],
    "answer": "ข",
    "answerText": "John Hopfield และ Geoffrey Hinton",
    "explanation": "John Hopfield และ Geoffrey Hinton ได้รับรางวัล โนเบลสาขาฟิสิกส์ปี 2024 จากผลงาน Hopfield Network และ Boltzmann Machine ส่วน Demis Hassabis และ John Jumper ได้รับรางวัลโนเบลสาขาเคมีจากผลงาน AlphaFold",
    "sourcePage": 25
  },
  {
    "id": "q-6",
    "number": 6,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - กฎหมายดิจิทัล",
    "difficulty": "basic",
    "question": "ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) โรงเรียนมัธยมศึกษาที่เก็บ รวบรวมประวัติและผลการเรียนของนักเรียนเพื่อใช้บริหารจัดการภายในโรงเรียน มีสถานะเป็นข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "เจ้าของข้อมูลส่วนบุคคล (Data Subject)"
      },
      {
        "key": "ข",
        "text": "ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)"
      },
      {
        "key": "ค",
        "text": "ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor)"
      },
      {
        "key": "ง",
        "text": "ผู้ตรวจสอบข้อมูลส่วนบุคคล (Data Auditor)"
      }
    ],
    "answer": "ข",
    "answerText": "ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)",
    "explanation": "โรงเรียนเป็นผู้มีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการ เก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลของนักเรียน จึงมีสถานะเป็น Data Controller ส่วนนักเรียนคือ Data Subject (ThaiJo PDPA Analysis)",
    "sourcePage": 25
  },
  {
    "id": "q-7",
    "number": 7,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - ประเภทเครือข่าย",
    "difficulty": "basic",
    "question": "เครือข่ายคอมพิวเตอร์ที่เชื่อมต่ออุปกรณ์ภายในอาคารเรียนเดียวกันหรือสำนักงานเดียวกันใน ระยะทางไม่กี่ร้อยเมตร จัดเป็นเครือข่ายประเภทใด? (Cloudflare LAN)",
    "options": [
      {
        "key": "ก",
        "text": "PAN (Personal Area Network)"
      },
      {
        "key": "ข",
        "text": "LAN (Local Area Network)"
      },
      {
        "key": "ค",
        "text": "MAN (Metropolitan Area Network)"
      },
      {
        "key": "ง",
        "text": "WAN (Wide Area Network)"
      }
    ],
    "answer": "ข",
    "answerText": "LAN (Local Area Network)",
    "explanation": "LAN คือเครือข่ายท้องถิ่นที่ครอบคลุมพื้นที่จำกัด เช่น บ้าน อาคาร หรือโรงเรียน ส่วน WAN ครอบคลุมระดับประเทศหรือทั่วโลก",
    "sourcePage": 26
  },
  {
    "id": "q-8",
    "number": 8,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - OSI Model",
    "difficulty": "basic",
    "question": "ในแบบจำลอง OSI 7 Layers ชั้นใดทำหน้าที่ค้นหาเส้นทางที่ดีที่สุด (Routing) และกำหนดที่อยู่ เชิงตรรกะด้วย IP Address?",
    "options": [
      {
        "key": "ก",
        "text": "Layer 1 (Physical Layer)"
      },
      {
        "key": "ข",
        "text": "Layer 2 (Data Link Layer)"
      },
      {
        "key": "ค",
        "text": "Layer 3 (Network Layer)"
      },
      {
        "key": "ง",
        "text": "Layer 4 (Transport Layer)"
      }
    ],
    "answer": "ค",
    "answerText": "Layer 3 (Network Layer)",
    "explanation": "Network Layer (Layer 3) ทำหน้าที่จัดหาเส้นทาง (Routing) และใช้โปรโตคอล IP โดยหน่วยข้อมูลเรียกว่า Packet",
    "sourcePage": 26
  },
  {
    "id": "q-9",
    "number": 9,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - โปรโตคอลเครือข่าย",
    "difficulty": "basic",
    "question": "เมื่อผู้ใช้พิมพ์ชื่อเว็บไซต์ www.utcc.ac.th ลงในเว็บเบราว์เซอร์ โปรโตคอลใดทำหน้าที่ แปลงชื่อโดเมนดังกล่าวให้เป็นหมายเลข IP Address? (Cloudflare DNS)",
    "options": [
      {
        "key": "ก",
        "text": "DHCP"
      },
      {
        "key": "ข",
        "text": "DNS"
      },
      {
        "key": "ค",
        "text": "ARP"
      },
      {
        "key": "ง",
        "text": "ICMP"
      }
    ],
    "answer": "ข",
    "answerText": "DNS",
    "explanation": "DNS (Domain Name System) ทำหน้าที่เสมือนสมุดโทรศัพท์ของอินเทอร์เน็ตในการแปลง Domain Name เป็น IP Address (ทำงานที่พอร์ต 53)",
    "sourcePage": 26
  },
  {
    "id": "q-10",
    "number": 10,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - IPv4 vs IPv6",
    "difficulty": "basic",
    "question": "ข้อใดระบุขนาดจำนวนบิตของหมายเลขที่อยู่แบบ IPv4 และ IPv6 ได้ถูกต้องตามลำดับ?",
    "options": [
      {
        "key": "ก",
        "text": "16 บิต และ 64 บิต"
      },
      {
        "key": "ข",
        "text": "32 บิต และ 64 บิต"
      },
      {
        "key": "ค",
        "text": "32 บิต และ 128 บิต"
      },
      {
        "key": "ง",
        "text": "64 บิต และ 256 บิต"
      }
    ],
    "answer": "ค",
    "answerText": "32 บิต และ 128 บิต",
    "explanation": "IPv4 มีขนาด 32 บิต (232 แอดเดรส) ส่วน IPv6 มีขนาด 128 บิต (2128 แอดเดรส)",
    "sourcePage": 26
  },
  {
    "id": "q-11",
    "number": 11,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - Cloud Service Models",
    "difficulty": "basic",
    "question": "การที่นักเรียนเข้าใช้งาน Google Docs, Canva หรือ Microsoft 365 ผ่านเว็บ เบราว์เซอร์ได้ทันทีโดยไม่ต้องติดตั้งเซิร์ฟเวอร์หรือเขียนโค้ดเอง จัดเป็นบริการ Cloud รูปแบบใด? (AWS Types of Cloud)",
    "options": [
      {
        "key": "ก",
        "text": "IaaS (Infrastructure as a Service)"
      },
      {
        "key": "ข",
        "text": "PaaS (Platform as a Service)"
      },
      {
        "key": "ค",
        "text": "SaaS (Software as a Service)"
      },
      {
        "key": "ง",
        "text": "CaaS (Containers as a Service)"
      }
    ],
    "answer": "ค",
    "answerText": "SaaS (Software as a Service)",
    "explanation": "SaaS คือบริการซอฟต์แวร์สำเร็จรูปพร้อมใช้งานผ่าน อินเทอร์เน็ตที่ผู้ให้บริการดูแลโครงสร้างพื้นฐานและตัวโปรแกรมทั้งหมด",
    "sourcePage": 26
  },
  {
    "id": "q-12",
    "number": 12,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - โปรโตคอลและพอร์ต",
    "difficulty": "basic",
    "question": "โปรโตคอล HTTPS ซึ่งใช้ในการรับ-ส่งข้อมูลเว็บแบบเข้ารหัสผ่าน TLS ใช้หมายเลข พอร์ตมาตรฐานใด? (MDN DoH)",
    "options": [
      {
        "key": "ก",
        "text": "Port 21"
      },
      {
        "key": "ข",
        "text": "Port 22"
      },
      {
        "key": "ค",
        "text": "Port 80"
      },
      {
        "key": "ง",
        "text": "Port 443"
      }
    ],
    "answer": "ง",
    "answerText": "Port 443",
    "explanation": "HTTP ใช้พอร์ต 80 ส่วน HTTPS ใช้พอร์ตมาตรฐานคือ 443 (Port 21 คือ FTP และ Port 22 คือ SSH)",
    "sourcePage": 27
  },
  {
    "id": "q-13",
    "number": 13,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - หน่วยความจำ",
    "difficulty": "basic",
    "question": "ข้อใดเป็นหน่วยความจำแบบ Volatile Memory ซึ่งข้อมูลที่เก็บไว้จะสูญหายทั้งหมดทันทีเมื่อ ปิดเครื่องหรือไม่มีกระแสไฟฟ้าเลี้ยง? (Crucial Memory)",
    "options": [
      {
        "key": "ก",
        "text": "ROM (Read-Only Memory)"
      },
      {
        "key": "ข",
        "text": "SSD (Solid State Drive)"
      },
      {
        "key": "ค",
        "text": "RAM (Random Access Memory)"
      },
      {
        "key": "ง",
        "text": "Flash Drive"
      }
    ],
    "answer": "ค",
    "answerText": "RAM (Random Access Memory)",
    "explanation": "ทั้ง DRAM (แผง RAM) และ SRAM (Cache) เป็น Volatile Memory ที่ต้องมีไฟเลี้ยงตลอดเวลา ส่วน ROM, SSD และ Flash Drive เป็น Non-Volatile Memory",
    "sourcePage": 27
  },
  {
    "id": "q-14",
    "number": 14,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - องค์ประกอบ CPU",
    "difficulty": "basic",
    "question": "ส่วนประกอบใดภายใน CPU ที่ทำหน้าที่คำนวณทางคณิตศาสตร์ (เช่น บวก ลบ) และ เปรียบเทียบเงื่อนไขทางตรรกะ (เช่น มากกว่า น้อยกว่า เท่ากับ)?",
    "options": [
      {
        "key": "ก",
        "text": "Control Unit (CU)"
      },
      {
        "key": "ข",
        "text": "Arithmetic Logic Unit (ALU)"
      },
      {
        "key": "ค",
        "text": "Memory Management Unit (MMU)"
      },
      {
        "key": "ง",
        "text": "Bus Interface Unit (BIU)"
      }
    ],
    "answer": "ข",
    "answerText": "Arithmetic Logic Unit (ALU)",
    "explanation": "ALU คือหน่วยคำนวณและตรรกะ ส่วน Control Unit ทำหน้าที่ ถอดรหัสคำสั่งและควบคุมจังหวะการทำงาน",
    "sourcePage": 27
  },
  {
    "id": "q-15",
    "number": 15,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - ระบบเลขฐาน",
    "difficulty": "basic",
    "question": "เลขฐานสอง 101101 เมื่อแปลงเป็นเลขฐานสิบ (Decimal) จะมีค่าเท่ากับข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "43"
      },
      {
        "key": "ข",
        "text": "45"
      },
      {
        "key": "ค",
        "text": "47"
      },
      {
        "key": "ง",
        "text": "53"
      }
    ],
    "answer": "ข",
    "answerText": "45",
    "explanation": "คำนวณค่าประจำหลักของ 1011012 = (1 × 25) + (0 × 24) + (1 × 23) + (1 × 22) + (0 × 21) + (1 × 20) = 32 + 0 + 8 + 4 + 0 + 1 = 4510",
    "sourcePage": 27
  },
  {
    "id": "q-16",
    "number": 16,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - อุปกรณ์จัดเก็บข้อมูล",
    "difficulty": "basic",
    "question": "ข้อใดคือข้อได้เปรียบหลักของ SSD (Solid State Drive) เมื่อเปรียบเทียบกับ HDD (Hard Disk Drive)?",
    "options": [
      {
        "key": "ก",
        "text": "ใช้จานแม่เหล็กที่หมุนด้วยความเร็วสูงกว่าทำให้เก็บข้อมูลได้ถาวรกว่า"
      },
      {
        "key": "ข",
        "text": "ไม่มีชิ้นส่วนกลไกที่เคลื่อนไหว ทนแรงกระแทก และมีความเร็วในการอ่าน/เขียนข้อมูลสูงกว่ามาก"
      },
      {
        "key": "ค",
        "text": "มีราคาต่อกิกะไบต์ถูกกว่า HDD เสมอในทุกความจุ"
      },
      {
        "key": "ง",
        "text": "ไม่ต้องใช้พลังงานไฟฟ้าในการทำงาน"
      }
    ],
    "answer": "ข",
    "answerText": "ไม่มีชิ้นส่วนกลไกที่เคลื่อนไหว ทนแรงกระแทก และมีความเร็วในการอ่าน/เขียนข้อมูลสูงกว่ามาก",
    "explanation": "SSD ใช้ชิปหน่วยความจำ NAND Flash จึงไม่มีจานหมุนหรือหัวอ่านเชิงกล ทำให้เข้าถึงข้อมูลได้เร็วและทนต่อการสั่นสะเทือน",
    "sourcePage": 27
  },
  {
    "id": "q-17",
    "number": 17,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - ระบบไฟล์",
    "difficulty": "basic",
    "question": "ระบบไฟล์มาตรฐานที่ถูกออกแบบมาเพื่อใช้งานเป็นหลักในระบบปฏิบัติการ macOS และ iOS ยุค ปัจจุบัน โดยปรับแต่งมาเพื่อหน่วยความจำแบบ SSD/Flash โดยเฉพาะ คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "NTFS"
      },
      {
        "key": "ข",
        "text": "ext4"
      },
      {
        "key": "ค",
        "text": "APFS"
      },
      {
        "key": "ง",
        "text": "FAT32"
      }
    ],
    "answer": "ค",
    "answerText": "APFS",
    "explanation": "APFS (Apple File System) เป็นระบบไฟล์มาตรฐานของ Apple (macOS 10.13 ขึ้นไป และ iOS) ส่วน NTFS เป็นของ Windows และ ext4 เป็นของ Linux",
    "sourcePage": 28
  },
  {
    "id": "q-18",
    "number": 18,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - ระบบปฏิบัติการ",
    "difficulty": "basic",
    "question": "ระบบปฏิบัติการบนสมาร์ทโฟน Android พัฒนาขึ้นโดยมีพื้นฐานแกนกลาง (Kernel) มาจาก ระบบปฏิบัติการใด? (Red Hat Kernel)",
    "options": [
      {
        "key": "ก",
        "text": "Windows NT Kernel"
      },
      {
        "key": "ข",
        "text": "Linux Kernel"
      },
      {
        "key": "ค",
        "text": "Darwin / XNU Kernel"
      },
      {
        "key": "ง",
        "text": "FreeBSD Kernel"
      }
    ],
    "answer": "ข",
    "answerText": "Linux Kernel",
    "explanation": "Android พัฒนาอยู่บนฐานของ Linux Kernel ส่วน iOS และ macOS พัฒนาบน ฐานของ XNU (Darwin) Kernel",
    "sourcePage": 28
  },
  {
    "id": "q-19",
    "number": 19,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - สัญลักษณ์ Flowchart",
    "difficulty": "basic",
    "question": "ในการเขียนผังงาน (Flowchart) สัญลักษณ์ \"รูปสี่เหลี่ยมขนมเปียกปูน / ข้าวหลามตัด (Diamond)\" ใช้แทนการทำงานในข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "การรับข้อมูลเข้าหรือแสดงผลลัพธ์ (Input / Output)"
      },
      {
        "key": "ข",
        "text": "การคำนวณหรือกำหนดค่าตัวแปร (Process)"
      },
      {
        "key": "ค",
        "text": "การตรวจสอบเงื่อนไขเพื่อตัดสินใจเลือกทางเดิน (Decision)"
      },
      {
        "key": "ง",
        "text": "จุดเริ่มต้นหรือจุดสิ้นสุดของโปรแกรม (Terminal)"
      }
    ],
    "answer": "ค",
    "answerText": "การตรวจสอบเงื่อนไขเพื่อตัดสินใจเลือกทางเดิน (Decision)",
    "explanation": "รูปข้าวหลามตัด (Diamond) ใช้ สำหรับ Decision (Selection/Loop condition) ส่วนสี่เหลี่ยมด้านขนานใช้รับ/แสดงผล และสี่เหลี่ยมผืนผ้าใช้ประมวลผล",
    "sourcePage": 28
  },
  {
    "id": "q-20",
    "number": 20,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ตัวดำเนินการ",
    "difficulty": "basic",
    "question": "ในภาษาโปรแกรมทั่วไปและภาษา Python นิพจน์ 19 % 5 (Modulo) มีผลลัพธ์เท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "3.8"
      },
      {
        "key": "ค",
        "text": "4"
      },
      {
        "key": "ง",
        "text": "5"
      }
    ],
    "answer": "ค",
    "answerText": "4",
    "explanation": "ตัวดำเนินการ % (Modulo) คือการหารเอาเศษ โดย 19 ÷ 5 ได้ผลหารเป็น 3 (3 × 5 = 15) และ เหลือเศษเท่ากับ 19 - 15 = 4",
    "sourcePage": 28
  },
  {
    "id": "q-21",
    "number": 21,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - โครงสร้างข้อมูลแถวลำดับ",
    "difficulty": "basic",
    "question": "กำหนดให้อาเรย์ scores = [15, 28, 34, 42, 59] หากใช้ระบบดัชนีเริ่ม จากศูนย์ (Zero-based Indexing) การอ้างอิง scores[3] จะได้ค่าใด? (CS50x)",
    "options": [
      {
        "key": "ก",
        "text": "28"
      },
      {
        "key": "ข",
        "text": "34"
      },
      {
        "key": "ค",
        "text": "42"
      },
      {
        "key": "ง",
        "text": "59"
      }
    ],
    "answer": "ค",
    "answerText": "42",
    "explanation": "ดัชนีเริ่มนับจาก 0 ได้แก่ scores[0]=15, scores[1]=28, scores[2]=34, และ scores[3]=42",
    "sourcePage": 29
  },
  {
    "id": "q-22",
    "number": 22,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - โครงสร้างควบคุมทำซ้ำ",
    "difficulty": "basic",
    "question": "โครงสร้างการทำซ้ำ (Loop) ชนิดใดที่จะประมวลผลคำสั่งภายในลูป อย่างน้อย 1 รอบเสมอ แม้ว่าเงื่อนไขจะเป็นเท็จตั้งแต่เริ่มต้น?",
    "options": [
      {
        "key": "ก",
        "text": "for loop"
      },
      {
        "key": "ข",
        "text": "while loop"
      },
      {
        "key": "ค",
        "text": "do-while loop"
      },
      {
        "key": "ง",
        "text": "foreach loop"
      }
    ],
    "answer": "ค",
    "answerText": "do-while loop",
    "explanation": "do-while เป็น Post-test loop ที่ทำคำสั่งในบล็อก do ก่อน 1 รอบ แล้วจึง ตรวจสอบเงื่อนไข while ที่ท้ายลูป",
    "sourcePage": 29
  },
  {
    "id": "q-23",
    "number": 23,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ลอจิกเกต",
    "difficulty": "basic",
    "question": "ลอจิกเกต (Logic Gate) ชนิดใดที่ให้ผลลัพธ์เป็น 1 (True) เฉพาะเมื่ออินพุตทั้งสองตัวมีค่าแตก ต่างกัน (เช่น อินพุตเป็น 0 กับ 1 ได้ 1, แต่อินพุตเป็น 1 กับ 1 ได้ 0)?",
    "options": [
      {
        "key": "ก",
        "text": "AND Gate"
      },
      {
        "key": "ข",
        "text": "OR Gate"
      },
      {
        "key": "ค",
        "text": "NAND Gate"
      },
      {
        "key": "ง",
        "text": "XOR Gate"
      }
    ],
    "answer": "ง",
    "answerText": "XOR Gate",
    "explanation": "XOR (Exclusive OR) จะให้ค่าความจริงเป็น 1 เมื่ออินพุตทั้งสองมีสถานะต่างกัน (0 XOR 1 = 1, 1 XOR 0 = 1) และเป็น 0 เมื่ออินพุตเหมือนกัน",
    "sourcePage": 29
  },
  {
    "id": "q-24",
    "number": 24,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ประสิทธิภาพอัลกอริทึม",
    "difficulty": "basic",
    "question": "จากสัญกรณ์ Big O Notation ข้อใดมีความซับซ้อนของเวลาต่ำที่สุด (ทำงานเร็ว ที่สุดเมื่อจำนวนข้อมูล n มีขนาดใหญ่มาก)?",
    "options": [
      {
        "key": "ก",
        "text": "O(n2)"
      },
      {
        "key": "ข",
        "text": "O(n log n)"
      },
      {
        "key": "ค",
        "text": "O(n)"
      },
      {
        "key": "ง",
        "text": "O(log n)"
      }
    ],
    "answer": "ง",
    "answerText": "O(log n)",
    "explanation": "เมื่อ n มีค่ามาก อัตราการเติบโตเรียงจากน้อยไปมากคือ O(1) < O(log n) < O(n) < O(n log n) < O(n2) ดังนั้นในตัวเลือกที่ให้มา O(log n) จึงเร็วที่สุด (CS50x Lecture 3)",
    "sourcePage": 29
  },
  {
    "id": "q-25",
    "number": 25,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - ลำดับชั้นของ AI",
    "difficulty": "basic",
    "question": "ข้อใดเรียงลำดับความสัมพันธ์จากขอบเขตที่กว้างที่สุดไปยังขอบเขตที่เป็นซับเซตย่อยภายใน ได้อย่างถูกต้อง? (IBM AI vs ML vs DL)",
    "options": [
      {
        "key": "ก",
        "text": "Machine Learning → Artificial Intelligence → Deep Learning → Generative AI"
      },
      {
        "key": "ข",
        "text": "Artificial Intelligence → Machine Learning → Deep Learning → Generative AI"
      },
      {
        "key": "ค",
        "text": "Deep Learning → Machine Learning → Artificial Intelligence → Generative AI"
      },
      {
        "key": "ง",
        "text": "Generative AI → Deep Learning → Machine Learning → Artificial Intelligence"
      }
    ],
    "answer": "ข",
    "answerText": "Artificial Intelligence → Machine Learning → Deep Learning → Generative AI",
    "explanation": "ตามนิยามของ IBM AI คือร่มใหญ่ที่สุด โดยมี Machine Learning เป็นแขนงย่อยของ AI, Deep Learning เป็นแขนง ย่อยของ ML และ Generative AI เป็นซับเซตย่อยภายใน Deep Learning",
    "sourcePage": 29
  },
  {
    "id": "q-26",
    "number": 26,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - ประเภทของ Machine Learning",
    "difficulty": "basic",
    "question": "การฝึกสอนโมเดลคัดกรองอีเมลขยะ (Spam Detection) โดยป้อน ข้อมูลอีเมลจำนวน 50,000 ฉบับที่ระบุเฉลยไว้ชัดเจนว่าฉบับใดเป็น \"Spam\" หรือ \"Not Spam\" จัดเป็นการเรียนรู้แบบใด? (IBM Supervised Learning)",
    "options": [
      {
        "key": "ก",
        "text": "Supervised Learning (การเรียนรู้แบบมีผู้สอน)"
      },
      {
        "key": "ข",
        "text": "Unsupervised Learning (การเรียนรู้แบบไม่มีผู้สอน)"
      },
      {
        "key": "ค",
        "text": "Reinforcement Learning (การเรียนรู้แบบเสริมกำลัง)"
      },
      {
        "key": "ง",
        "text": "Zero-shot Learning"
      }
    ],
    "answer": "ก",
    "answerText": "Supervised Learning (การเรียนรู้แบบมีผู้สอน)",
    "explanation": "ข้อมูลฝึกสอนมีการระบุป้ายกำกับเฉลย (Labeled Data) ชัดเจน และเป็นโจทย์ประเภท Binary Classification จึงจัดเป็น Supervised Learning",
    "sourcePage": 30
  },
  {
    "id": "q-27",
    "number": 27,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - สาขาของ AI",
    "difficulty": "basic",
    "question": "ระบบตรวจจับป้ายทะเบียนรถยนต์อัตโนมัติจากกล้องวงจรปิด และระบบสแกนใบหน้าเพื่อปลด ล็อกสมาร์ทโฟน จัดเป็นการประยุกต์ใช้ AI ในสาขาใดเป็นหลัก? (IBM AI)",
    "options": [
      {
        "key": "ก",
        "text": "Natural Language Processing (NLP)"
      },
      {
        "key": "ข",
        "text": "Computer Vision (CV)"
      },
      {
        "key": "ค",
        "text": "Speech Recognition"
      },
      {
        "key": "ง",
        "text": "Expert Systems"
      }
    ],
    "answer": "ข",
    "answerText": "Computer Vision (CV)",
    "explanation": "Computer Vision คือสาขาของ AI ที่ทำให้คอมพิวเตอร์สามารถมอง เห็น วิเคราะห์ และทำความเข้าใจข้อมูลจากภาพนิ่งหรือวิดีโอได้",
    "sourcePage": 30
  },
  {
    "id": "q-28",
    "number": 28,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - Generative AI",
    "difficulty": "basic",
    "question": "ปรากฏการณ์ที่โมเดลภาษาขนาดใหญ่ (LLM) สร้างคำตอบที่ดูสมเหตุสมผลและเขียนด้วย ภาษาที่สละสลวย แต่เนื้อหาภายในกลับเป็นข้อมูลเท็จที่แต่งขึ้นเองหรือไม่มีอยู่จริง เรียกว่าอะไร? (IBM AI Hallucinations)",
    "options": [
      {
        "key": "ก",
        "text": "Overfitting"
      },
      {
        "key": "ข",
        "text": "Backpropagation"
      },
      {
        "key": "ค",
        "text": "AI Hallucination"
      },
      {
        "key": "ง",
        "text": "Tokenization"
      }
    ],
    "answer": "ค",
    "answerText": "AI Hallucination",
    "explanation": "AI Hallucination (อาการหลอนของ AI) คือการที่โมเดล Generative AI สร้างข้อมูลที่ไม่ตรงกับความเป็นจริงเนื่องจากโมเดลทำงานด้วยการทำนายความน่าจะเป็นของคำถัดไป ไม่ใช่การค้นฐานข้อมูล ข้อเท็จจริงโดยตรง",
    "sourcePage": 30
  },
  {
    "id": "q-29",
    "number": 29,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - โครงสร้าง LLM",
    "difficulty": "basic",
    "question": "หน่วยย่อยที่สุดของข้อความที่โมเดลภาษาขนาดใหญ่ (LLM) ใช้ในการตัดคำเพื่อนำไปแปลง เป็นเวกเตอร์ตัวเลขก่อนประมวลผล เรียกว่าอะไร? (NVIDIA AI Training)",
    "options": [
      {
        "key": "ก",
        "text": "Pixel"
      },
      {
        "key": "ข",
        "text": "Token"
      },
      {
        "key": "ค",
        "text": "Packet"
      },
      {
        "key": "ง",
        "text": "Neuron"
      }
    ],
    "answer": "ข",
    "answerText": "Token",
    "explanation": "ในระบบ NLP และ LLM ข้อความจะถูกแบ่งย่อยด้วยกระบวนการ Tokenization ออกเป็น Token (ซึ่งอาจเป็นคำเต็ม คำย่อย หรืออักขระ) (NVIDIA Glossary)",
    "sourcePage": 30
  },
  {
    "id": "q-30",
    "number": 30,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - การแบ่งชุดข้อมูล",
    "difficulty": "basic",
    "question": "ในการพัฒนาโมเดล Machine Learning ชุดข้อมูลส่วนใดที่ถูกแยกเก็บไว้เพื่อใช้ วัด ประสิทธิภาพขั้นสุดท้ายของโมเดล โดยห้ามนำมาใช้ปรับค่าน้ำหนักหรือเลือก Hyperparameters ระหว่างการฝึกสอนเด็ดขาด? (Google ML Overfitting)",
    "options": [
      {
        "key": "ก",
        "text": "Training Set"
      },
      {
        "key": "ข",
        "text": "Validation Set"
      },
      {
        "key": "ค",
        "text": "Test Set"
      },
      {
        "key": "ง",
        "text": "Feature Set"
      }
    ],
    "answer": "ค",
    "answerText": "Test Set",
    "explanation": "Training Set ใช้ฝึกโมเดล, Validation Set ใช้ปรับแต่ง Hyperparameters และ ตรวจดู Overfitting ระหว่างพัฒนา ส่วน Test Set ใช้ประเมินผลขั้นสุดท้ายเสมือนการใช้งานจริงกับข้อมูลที่ไม่เคยเห็นมา ก่อน (Google ML Crash Course) 5.2 ระดับปานกลาง (Intermediate Level: ข้อ 31–70)",
    "sourcePage": 31
  },
  {
    "id": "q-31",
    "number": 31,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - สถาปัตยกรรมคอมพิวเตอร์",
    "difficulty": "intermediate",
    "question": "แนวคิดสำคัญที่สุดของ Von Neumann Architecture ที่ทำให้คอมพิวเตอร์ ยุคหลังเครื่อง ENIAC ไม่ต้องเสียบสายไฟใหม่ทุกครั้งที่เปลี่ยนโปรแกรมคือข้อใด? (Timeline of Computer History)",
    "options": [
      {
        "key": "ก",
        "text": "การแยกหน่วยความจำเก็บคำสั่งโปรแกรมและหน่วยความจำเก็บข้อมูลออกจากกันคนละบัส"
      },
      {
        "key": "ข",
        "text": "การเก็บทั้งคำสั่งของโปรแกรม (Instructions) และข้อมูล (Data) ไว้ในหน่วยความจำหลักเดียวกันในรูปแบบเลขฐานสอง"
      },
      {
        "key": "ค",
        "text": "การใช้การ์ดเจาะรูแทนการใช้หลอดสุญญากาศทั้งหมด"
      },
      {
        "key": "ง",
        "text": "การประมวลผลด้วย Qubit แทนการใช้บิตปกติ"
      }
    ],
    "answer": "ข",
    "answerText": "การเก็บทั้งคำสั่งของโปรแกรม (Instructions) และข้อมูล (Data) ไว้ในหน่วยความจำหลักเดียวกันในรูปแบบ\nเลขฐานสอง",
    "explanation": "Stored-Program Concept ของ John von Neumann เก็บทั้งโปรแกรมและข้อมูลในหน่วย ความจำเดียวกัน (ส่วนข้อ ก. คือ Harvard Architecture)",
    "sourcePage": 31
  },
  {
    "id": "q-32",
    "number": 32,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - โทรคมนาคมและเครือข่ายไร้สาย",
    "difficulty": "intermediate",
    "question": "มาตรฐาน Wi-Fi 7 ที่เริ่มแพร่หลายในช่วงปี 2025–2026 ตรงกับรหัส มาตรฐาน IEEE ใด และมีฟีเจอร์เด่นใดที่ช่วยให้เชื่อมต่อหลายคลื่นความถี่พร้อมกันได้?",
    "options": [
      {
        "key": "ก",
        "text": "IEEE 802.11ac / ฟีเจอร์ Beamforming"
      },
      {
        "key": "ข",
        "text": "IEEE 802.11ax / ฟีเจอร์ OFDMA"
      },
      {
        "key": "ค",
        "text": "IEEE 802.11be / ฟีเจอร์ Multi-Link Operation (MLO)"
      },
      {
        "key": "ง",
        "text": "IEEE 802.15.1 / ฟีเจอร์ Mesh Networking"
      }
    ],
    "answer": "ค",
    "answerText": "IEEE 802.11be / ฟีเจอร์ Multi-Link Operation (MLO)",
    "explanation": "Wi-Fi 5 คือ 802.11ac, Wi-Fi 6/6E คือ 802.11ax และ Wi-Fi 7 คือ IEEE 802.11be ซึ่งมีฟีเจอร์เด่นคือ MLO (Multi-Link Operation) ที่รับ-ส่ง ข้อมูลข้ามย่าน 2.4, 5 และ 6 GHz พร้อมกันได้",
    "sourcePage": 31
  },
  {
    "id": "q-33",
    "number": 33,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - การเข้ารหัสข้อมูล",
    "difficulty": "intermediate",
    "question": "หากนาย ก. ต้องการส่งไฟล์ลับให้นาย ข. โดยใช้การเข้ารหัสแบบอสมมาตร (Asymmetric Encryption / Public-Key Cryptography) เพื่อรักษาความลับของข้อมูล (Confidentiality) นาย ก. ต้องใช้กุญแจดอกใด ในการเข้ารหัส และนาย ข. ต้องใช้กุญแจดอกใดในการถอดรหัส?",
    "options": [
      {
        "key": "ก",
        "text": "เข้ารหัสด้วย Private Key ของนาย ก. และถอดรหัสด้วย Public Key ของนาย ก."
      },
      {
        "key": "ข",
        "text": "เข้ารหัสด้วย Public Key ของนาย ข. และถอดรหัสด้วย Private Key ของนาย ข."
      },
      {
        "key": "ค",
        "text": "เข้ารหัสด้วย Public Key ของนาย ก. และถอดรหัสด้วย Private Key ของนาย ข."
      },
      {
        "key": "ง",
        "text": "ใช้ Secret Key ดอกเดียวกันทั้งการเข้ารหัสและถอดรหัส"
      }
    ],
    "answer": "ข",
    "answerText": "เข้ารหัสด้วย Public Key ของนาย ข. และถอดรหัสด้วย Private Key ของนาย ข.",
    "explanation": "เพื่อรักษา ความลับ (Confidentiality) ผู้ส่งต้องใช้ Public Key ของผู้รับ ในการล็อกข้อมูล เพื่อให้นาย ข. ซึ่งเป็นเจ้าของ Private Key ของผู้รับ เพียงคนเดียวเท่านั้นที่เปิดอ่านได้ (ส่วนข้อ ก. คือหลักการของ Digital Signature เพื่อยืนยันตัวตนผู้ส่ง)",
    "sourcePage": 31
  },
  {
    "id": "q-34",
    "number": 34,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ความมั่นคงปลอดภัยเว็บและฐานข้อมูล",
    "difficulty": "intermediate",
    "question": "การที่ผู้โจมตีกรอกข้อความ ' OR '1'='1 ลงในช่องรับชื่อผู้ใช้ของ หน้าเข้าสู่ระบบที่ไม่ผ่านการตรวจสอบข้อมูลขาเข้า จนสามารถเข้าถึงฐานข้อมูลได้โดยไม่ต้องรู้รหัสผ่าน เรียกว่าการโจมตีแบบใด? (IBM Cyberthreats)",
    "options": [
      {
        "key": "ก",
        "text": "Cross-Site Scripting (XSS)"
      },
      {
        "key": "ข",
        "text": "Distributed Denial of Service (DDoS)"
      },
      {
        "key": "ค",
        "text": "SQL Injection (SQLi)"
      },
      {
        "key": "ง",
        "text": "Man-in-the-Middle (MITM)"
      }
    ],
    "answer": "ค",
    "answerText": "SQL Injection (SQLi)",
    "explanation": "การแทรกคำสั่ง SQL แฝงเข้าไปในช่องรับข้อมูลเพื่อให้เงื่อนไข WHERE เป็นจริงเสมอ ('1'='1') คือการโจมตีแบบ SQL Injection ซึ่งป้องกันได้ด้วยการใช้ Prepared Statements / Parameterized Queries",
    "sourcePage": 32
  },
  {
    "id": "q-35",
    "number": 35,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - กฎหมายและธรรมาภิบาล AI",
    "difficulty": "intermediate",
    "question": "ตามกรอบกฎหมาย EU AI Act ของสหภาพยุโรป ระบบ AI ประเภทใดถูกจัดอยู่ ในกลุ่ม \"ความเสี่ยงที่ไม่อาจยอมรับได้\" (Unacceptable Risk) ซึ่งถูกห้ามนำมาใช้งานโดยเด็ดขาด?",
    "options": [
      {
        "key": "ก",
        "text": "แชตบอตสำหรับตอบคำถามลูกค้าทั่วไปบนเว็บไซต์อีคอมเมิร์ซ"
      },
      {
        "key": "ข",
        "text": "ระบบ AI สำหรับคัดกรองเรซูเม่สมัครงานและประเมินสินเชื่อธนาคาร"
      },
      {
        "key": "ค",
        "text": "ระบบให้คะแนนทางสังคมแก่พลเมืองโดยภาครัฐ (Social Scoring) และการสอดส่องชีวมาตรแบบเรียลไทม์ในพื้นที่ สาธารณะโดยไม่มีข้อยกเว้นตามกฎหมาย"
      },
      {
        "key": "ง",
        "text": "ตัวกรองอีเมลขยะและระบบแนะนำภาพยนตร์ในแอปสตรีมมิง"
      }
    ],
    "answer": "ค",
    "answerText": "ระบบให้คะแนนทางสังคมแก่พลเมืองโดยภาครัฐ (Social Scoring) และการสอดส่องชีวมาตรแบบเรียลไทม์\nในพื้นที่สาธารณะโดยไม่มีข้อยกเว้นตามกฎหมาย",
    "explanation": "ระบบ Social Scoring ถูกจัดเป็น Unacceptable Risk (ถูกแบน) ส่วนการคัดกรองสมัครงานและสินเชื่อ (ข้อ ข.) จัดเป็น High-Risk AI ที่ต้องมี Human Oversight ตามมาตรา 14 (ThaiJo EU AI Act Analysis)",
    "sourcePage": 32
  },
  {
    "id": "q-36",
    "number": 36,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ภัยคุกคามยุค AI",
    "difficulty": "intermediate",
    "question": "จากรายงาน IBM Cost of a Data Breach Report 2026 และการรักษาความปลอดภัย สมัยใหม่ เทคโนโลยีการยืนยันตัวตนใดได้รับการออกแบบตามมาตรฐาน FIDO2 / WebAuthn เพื่อป้องกันการถูกหลอกขโมย รหัสผ่านจากเว็บไซต์ปลอม (Phishing-resistant authentication) ได้อย่างแท้จริง? (IBM Zero Trust)",
    "options": [
      {
        "key": "ก",
        "text": "การตั้งรหัสผ่านความยาว 8 ตัวอักษรที่มีตัวพิมพ์ใหญ่และตัวเลข"
      },
      {
        "key": "ข",
        "text": "การส่งรหัส OTP 6 หลักผ่านข้อความ SMS"
      },
      {
        "key": "ค",
        "text": "การใช้คำถามความปลอดภัยส่วนบุคคล (Security Questions)"
      },
      {
        "key": "ง",
        "text": "การใช้ Passkeys / ฮาร์ดแวร์กุญแจนิรภัยที่ผูกกุญแจเข้ารหัส (Cryptographic Key Pair) เข้ากับโดเมนจริงของ เว็บไซต์"
      }
    ],
    "answer": "ง",
    "answerText": "การใช้ Passkeys / ฮาร์ดแวร์กุญแจนิรภัยที่ผูกกุญแจเข้ารหัส (Cryptographic Key Pair) เข้ากับโดเมน\nจริงของเว็บไซต์",
    "explanation": "SMS OTP ยังคงถูกดักจับด้วยหน้าเว็บ Phishing แบบ Real-time Proxy หรือ SIM Swapping ได้ แต่ Passkeys (FIDO2) จะตรวจสอบชื่อโดเมนระดับโปรโตคอลด้วยกุญแจอสมมาตร จึงไม่ส่งข้อมูลรับรอง ให้เว็บปลอมเด็ดขาด (IBM Zero Trust)",
    "sourcePage": 32
  },
  {
    "id": "q-37",
    "number": 37,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - การประมวลผลยุคใหม่",
    "difficulty": "intermediate",
    "question": "โรงงานอัจฉริยะแห่งหนึ่งติดตั้งกล้องตรวจจับความบกพร่องของสินค้าบนสายพาน การผลิต โดยต้องการให้ระบบประมวลผลภาพและสั่งดีดสินค้าเสียออกภายในเสี้ยววินาทีที่หน้างานทันทีโดยไม่ต้องส่งข้อมูลวิดีโอ ทั้งหมดขึ้นไปยัง Cloud Server ที่อยู่ต่างประเทศ สถาปัตยกรรมนี้เรียกว่าอะไร? (IBM Think Topics)",
    "options": [
      {
        "key": "ก",
        "text": "Mainframe Computing"
      },
      {
        "key": "ข",
        "text": "Edge Computing"
      },
      {
        "key": "ค",
        "text": "Grid Computing"
      },
      {
        "key": "ง",
        "text": "Quantum Computing"
      }
    ],
    "answer": "ข",
    "answerText": "Edge Computing",
    "explanation": "Edge Computing คือการนำหน่วยประมวลผลมาไว้ที่ต้นทางหรือใกล้แหล่ง กำเนิดข้อมูล (IoT/Sensors) เพื่อลดความหน่วง (Latency) และประหยัดแบนด์วิดท์ในการส่งข้อมูลขึ้นคลาวด์",
    "sourcePage": 32
  },
  {
    "id": "q-38",
    "number": 38,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - พ.ร.บ. คอมพิวเตอร์และจริยธรรม",
    "difficulty": "intermediate",
    "question": "หากองค์กรต้องการทดสอบเจาะระบบเครือข่ายของตนเองเพื่อค้นหาช่อง โหว่ก่อนที่แฮกเกอร์จริงจะเข้ามาโจมตี ทีมผู้เชี่ยวชาญที่ได้รับอนุญาตอย่างถูกต้องตามกฎหมายให้จำลองการโจมตีระบบเรียกว่าทีม ใด?",
    "options": [
      {
        "key": "ก",
        "text": "Red Team (หรือ Penetration Testers / White Hat Hackers)"
      },
      {
        "key": "ข",
        "text": "Black Hat Hackers"
      },
      {
        "key": "ค",
        "text": "Script Kiddies"
      },
      {
        "key": "ง",
        "text": "Botnet Herders"
      }
    ],
    "answer": "ก",
    "answerText": "Red Team (หรือ Penetration Testers / White Hat Hackers)",
    "explanation": "ในด้าน Cybersecurity ทีมจำลองการบุกรุกเพื่อทดสอบช่องโหว่โดยได้รับอนุญาตเรียกว่า Red Team ส่วนทีมป้องกันและเฝ้าระวังระบบเรียกว่า Blue Team",
    "sourcePage": 33
  },
  {
    "id": "q-39",
    "number": 39,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - OSI Model & PDU",
    "difficulty": "intermediate",
    "question": "เมื่อข้อมูลถูกส่งจากชั้นบนลงมายังชั้นล่างในแบบจำลอง OSI Model ข้อใดเรียงลำดับ ชื่อเรียกหน่วยข้อมูล (PDU: Protocol Data Unit) ตั้งแต่ชั้นที่ 4 ลงไปยังชั้นที่ 1 ได้ถูกต้อง? (Cloudflare OSI Model)",
    "options": [
      {
        "key": "ก",
        "text": "Packet → Segment → Frame → Bit"
      },
      {
        "key": "ข",
        "text": "Segment → Packet → Frame → Bit"
      },
      {
        "key": "ค",
        "text": "Frame → Packet → Segment → Bit"
      },
      {
        "key": "ง",
        "text": "Segment → Frame → Packet → Bit"
      }
    ],
    "answer": "ข",
    "answerText": "Segment → Packet → Frame → Bit",
    "explanation": "Layer 4 (Transport) = Segment (หรือ Datagram สำหรับ UDP) → Layer 3 (Network) = Packet → Layer 2 (Data Link) = Frame → Layer 1 (Physical) = Bit (Cloudflare OSI Model)",
    "sourcePage": 33
  },
  {
    "id": "q-40",
    "number": 40,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - คำนวณ Subnet",
    "difficulty": "intermediate",
    "question": "เครือข่าย IPv4 ที่กำหนดรหัสเครือข่ายเป็น 192.168.10.0/26 จะมี Subnet Mask ใน รูปแบบเลขฐานสิบตรงกับข้อใด และสามารถนำมาหนดให้เครื่องคอมพิวเตอร์ใช้งานได้จริงสูงสุดกี่เครื่อง (Usable Hosts)? (Cisco TCP/IP Overview)",
    "options": [
      {
        "key": "ก",
        "text": "255.255.255.128 / ใช้งานได้ 126 เครื่อง"
      },
      {
        "key": "ข",
        "text": "255.255.255.192 / ใช้งานได้ 62 เครื่อง"
      },
      {
        "key": "ค",
        "text": "255.255.255.192 / ใช้งานได้ 64 เครื่อง"
      },
      {
        "key": "ง",
        "text": "255.255.255.224 / ใช้งานได้ 30 เครื่อง"
      }
    ],
    "answer": "ข",
    "answerText": "255.255.255.192 / ใช้งานได้ 62 เครื่อง",
    "explanation": "/26 มีบิตที่เป็น 1 ในออกเต็ตที่สี่จำนวน 26 - 24 = 2 บิต คือ 110000002 = 128 + 64 = 192 จึงได้ Subnet Mask เป็น 255.255.255.192 ส่วนบิตโฮสต์เหลือ h = 32 - 26 = 6 บิต จำนวนเครื่องที่ใช้งานได้จริงคือ 26 - 2 = 64 - 2 = 62 เครื่อง (หัก Network Address 192.168.10.0 และ Broadcast Address 192.168.10.63)",
    "sourcePage": 33
  },
  {
    "id": "q-41",
    "number": 41,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - Private IP Address",
    "difficulty": "intermediate",
    "question": "ข้อใดต่อไปนี้ ไม่ใช่ หมายเลข Private IPv4 Address ตามมาตรฐาน RFC 1918?",
    "options": [
      {
        "key": "ก",
        "text": "10.250.1.1"
      },
      {
        "key": "ข",
        "text": "172.20.10.5"
      },
      {
        "key": "ค",
        "text": "172.32.0.1"
      },
      {
        "key": "ง",
        "text": "192.168.100.254"
      }
    ],
    "answer": "ค",
    "answerText": "172.32.0.1",
    "explanation": "ช่วง Private IP ของ Class B กำหนดไว้เฉพาะ 172.16.0.0 ถึง 172.31.255.255 เท่านั้น ดังนั้น 172.32.0.1 จึงอยู่นอกช่วงและเป็น Public IP Address",
    "sourcePage": 33
  },
  {
    "id": "q-42",
    "number": 42,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - กระบวนการ DHCP",
    "difficulty": "intermediate",
    "question": "เมื่อเครื่องคอมพิวเตอร์เปิดเครื่องขึ้นมาและขอรับ IP Address อัตโนมัติจาก DHCP Server ข้อใดเรียงลำดับข้อความ 4 ขั้นตอนของการสื่อสารได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Request → Offer → Discover → Acknowledge"
      },
      {
        "key": "ข",
        "text": "Discover → Offer → Request → Acknowledge"
      },
      {
        "key": "ค",
        "text": "SYN → SYN-ACK → ACK → FIN"
      },
      {
        "key": "ง",
        "text": "Query → Response → Update → Confirm"
      }
    ],
    "answer": "ข",
    "answerText": "Discover → Offer → Request → Acknowledge",
    "explanation": "กระบวนการของ DHCP ย่อว่า DORA: Client ส่ง DHCP Discover → Server ตอบกลับด้วย DHCP Offer → Client ยืนยันขอใช้ด้วย DHCP Request → Server บันทึกและยืนยันด้วย DHCP Acknowledge",
    "sourcePage": 34
  },
  {
    "id": "q-43",
    "number": 43,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - TCP vs UDP",
    "difficulty": "intermediate",
    "question": "ข้อใดเปรียบเทียบความแตกต่างระหว่างโปรโตคอล TCP และ UDP ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "TCP เป็นแบบ Connectionless ที่เน้นความเร็วสูง ส่วน UDP ต้องทำ 3-Way Handshake ก่อนส่งข้อมูล"
      },
      {
        "key": "ข",
        "text": "UDP มีกลไกตรวจสอบลำดับแพ็กเก็ตและส่งข้อมูลซ้ำเมื่อสูญหาย ส่วน TCP ไม่มี"
      },
      {
        "key": "ค",
        "text": "TCP ทำ 3-Way Handshake (SYN, SYN-ACK, ACK) เพื่อรับประกันความถูกต้องของข้อมูล ส่วน UDP ส่งข้อมูลทันที โดยไม่สร้างการเชื่อมต่อล่วงหน้าจึงมีความหน่วงต่ำกว่า"
      },
      {
        "key": "ง",
        "text": "ทั้ง TCP และ UDP ทำงานอยู่ในชั้น Network Layer (Layer 3) เหมือนกัน"
      }
    ],
    "answer": "ค",
    "answerText": "TCP ทำ 3-Way Handshake (SYN, SYN-ACK, ACK) เพื่อรับประกันความถูกต้องของข้อมูล ส่วน UDP ส่ง\nข้อมูลทันทีโดยไม่สร้างการเชื่อมต่อล่วงหน้าจึงมีความหน่วงต่ำกว่า",
    "explanation": "ทั้งคู่ทำงานที่ Layer 4 (Transport Layer) โดย TCP เน้นความน่าเชื่อถือ (Reliable, Connection-oriented) ส่วน UDP เน้นความเร็วและความหน่วงต่ำ (Unreliable, Connectionless) (Cloudflare TLS & TCP)",
    "sourcePage": 34
  },
  {
    "id": "q-44",
    "number": 44,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - อุปกรณ์เครือข่าย",
    "difficulty": "intermediate",
    "question": "หากนำเครื่องคอมพิวเตอร์ 12 เครื่องมาเชื่อมต่อเข้ากับพอร์ตของ Layer 2 Switch จำนวน 1 ตัว (โดยไม่มีการตั้งค่า VLAN) และไม่เชื่อมต่อกับอุปกรณ์อื่นเลย ระบบเครือข่ายนี้จะมีจำนวน Collision Domain และ Broadcast Domain กี่วงตามลำดับ?",
    "options": [
      {
        "key": "ก",
        "text": "1 Collision Domain และ 1 Broadcast Domain"
      },
      {
        "key": "ข",
        "text": "12 Collision Domains และ 1 Broadcast Domain"
      },
      {
        "key": "ค",
        "text": "1 Collision Domain และ 12 Broadcast Domains"
      },
      {
        "key": "ง",
        "text": "12 Collision Domains และ 12 Broadcast Domains"
      }
    ],
    "answer": "ข",
    "answerText": "12 Collision Domains และ 1 Broadcast Domain",
    "explanation": "พอร์ตแต่ละพอร์ตของ Layer 2 Switch ที่มีเครื่องเชื่อมต่อจะแยกเป็นคนละ Collision Domain (จึงมี 12 Collision Domains) แต่ทุกพอร์ตยังคงอยู่ใน Broadcast Domain เดียวกัน (1 Broadcast Domain)",
    "sourcePage": 34
  },
  {
    "id": "q-45",
    "number": 45,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - Cloud Shared Responsibility",
    "difficulty": "intermediate",
    "question": "ในการเลือกใช้บริการ Cloud แบบ PaaS (Platform as a Service) ข้อใดคือสิ่งที่นักพัฒนาของผู้ใช้บริการยังคงต้องรับผิดชอบดูแลด้วยตนเอง? (AWS Cloud vs On-Premises)",
    "options": [
      {
        "key": "ก",
        "text": "การซ่อมบำรุงเซิร์ฟเวอร์จริงและระบบจ่ายไฟในศูนย์ข้อมูล"
      },
      {
        "key": "ข",
        "text": "การติดตั้งและอัปเดตแพตช์ของระบบปฏิบัติการ (Host Operating System)"
      },
      {
        "key": "ค",
        "text": "การดูแลจัดการ Hypervisor และระบบเครือข่ายกายภาพ"
      },
      {
        "key": "ง",
        "text": "โค้ดของแอปพลิเคชัน (Application Code) ข้อมูล (Data) และการตั้งค่าของแอปพลิเคชัน"
      }
    ],
    "answer": "ง",
    "answerText": "โค้ดของแอปพลิเคชัน (Application Code) ข้อมูล (Data) และการตั้งค่าของแอปพลิเคชัน",
    "explanation": "ใน โมเดล PaaS ผู้ให้บริการ Cloud จะดูแลตั้งแต่ฮาร์ดแวร์, Virtualization, OS ไปจนถึง Runtime Environment ส่วนผู้ใช้ รับผิดชอบเฉพาะโค้ดและข้อมูลของตนเอง",
    "sourcePage": 34
  },
  {
    "id": "q-46",
    "number": 46,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - Virtual Machine vs Container",
    "difficulty": "intermediate",
    "question": "ข้อใดอธิบายความแตกต่างเชิงสถาปัตยกรรมระหว่าง Virtual Machine (VM) กับ Docker Container ได้ถูกต้องที่สุด? (Docker Docs)",
    "options": [
      {
        "key": "ก",
        "text": "Container ต้องจำลองฮาร์ดแวร์เสมือนและมี Guest OS Kernel แยกของตนเองทุกตัว ส่วน VM แชร์ Kernel ร่วมกัน"
      },
      {
        "key": "ข",
        "text": "Container แชร์ระบบปฏิบัติการและ Kernel ร่วมกับเครื่องโฮสต์ (Host OS) จึงมีขนาดเล็กและเริ่มทำงานได้เร็วกว่า VM ที่ต้องจำลองระดับฮาร์ดแวร์และรัน Guest OS เต็มรูปแบบ"
      },
      {
        "key": "ค",
        "text": "VM ไม่สามารถรันบนระบบ Cloud ได้ ในขณะที่ Container รันได้เฉพาะบน Cloud เท่านั้น"
      },
      {
        "key": "ง",
        "text": "Docker คือซอฟต์แวร์ประเภท Bare-metal Hypervisor Type 1"
      }
    ],
    "answer": "ข",
    "answerText": "Container แชร์ระบบปฏิบัติการและ Kernel ร่วมกับเครื่องโฮสต์ (Host OS) จึงมีขนาดเล็กและเริ่มทำงานได้\nเร็วกว่า VM ที่ต้องจำลองระดับฮาร์ดแวร์และรัน Guest OS เต็มรูปแบบ",
    "explanation": "ตามเอกสารของ AWS และ Docker Containerization ตัดชั้นการจำลองฮาร์ดแวร์และ Guest OS ออกไป โดยแชร์ Host OS Kernel ร่วมกัน จึง ประหยัดทรัพยากรและบูตได้เร็วกว่า VM มาก",
    "sourcePage": 35
  },
  {
    "id": "q-47",
    "number": 47,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - ลำดับชั้นหน่วยความจำ",
    "difficulty": "intermediate",
    "question": "ข้อใดเรียงลำดับหน่วยความจำจาก ความเร็วในการเข้าถึงข้อมูลสูงสุด ไปยัง ความเร็วต่ำสุด ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "L1 Cache → Registers → L2 Cache → RAM → SSD"
      },
      {
        "key": "ข",
        "text": "Registers → L1 Cache → L2 Cache → L3 Cache → Main Memory (RAM) → NVMe SSD"
      },
      {
        "key": "ค",
        "text": "Registers → Main Memory (RAM) → L1 Cache → L2 Cache → HDD"
      },
      {
        "key": "ง",
        "text": "L3 Cache → L2 Cache → L1 Cache → Registers → RAM"
      }
    ],
    "answer": "ข",
    "answerText": "Registers → L1 Cache → L2 Cache → L3 Cache → Main Memory (RAM) → NVMe SSD — คำ\nอธิบาย: Registers อยู่ติดกับ ALU จึงเร็วที่สุด ตามด้วย L1, L2, L3 Cache (สร้างจาก SRAM), ถัดมาคือ RAM\n(DRAM) และอุปกรณ์จัดเก็บข้อมูลถาวร (Crucial SSD)",
    "explanation": "",
    "sourcePage": 35
  },
  {
    "id": "q-48",
    "number": 48,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - การแปลงเลขฐาน",
    "difficulty": "intermediate",
    "question": "เลขฐานสิบหก (Hexadecimal) ค่า 3F16 เมื่อแปลงเป็นเลขฐานสอง (Binary 8-bit) และเลขฐานแปด (Octal) จะตรงกับข้อใดตามลำดับ?",
    "options": [
      {
        "key": "ก",
        "text": "001111112 และ 778"
      },
      {
        "key": "ข",
        "text": "001111102 และ 768"
      },
      {
        "key": "ค",
        "text": "011111112 และ 1778"
      },
      {
        "key": "ง",
        "text": "001110152 และ 678"
      }
    ],
    "answer": "ก",
    "answerText": "001111112 และ 778",
    "explanation": "แปลงเลขฐานสิบหกทีละหลักเป็นเลขฐานสอง 4 บิต: 3 = 00112 และ F (15) = 11112 รวมกันได้ 001111112 (มีค่าเท่ากับ 6310) เมื่อจัดกลุ่มละ 3 บิตจากขวาไปซ้ายเพื่อแปลงเป็นฐานแปดจะได้ 000 111 1112 = 0778 = 778",
    "sourcePage": 35
  },
  {
    "id": "q-49",
    "number": 49,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - ข้อจำกัดสถาปัตยกรรมและระบบไฟล์",
    "difficulty": "intermediate",
    "question": "หากผู้ใช้ต้องการคัดลอกไฟล์วิดีโอความละเอียดสูงขนาดไฟล์เดี่ยว 6.5 GB ลงในแฟลชไดรฟ์ขนาด 32 GB แต่ระบบแจ้งเตือนว่า \"File is too large for the destination file system\"ทั้งที่พื้นที่ว่าง ยังเหลือกว่า 25 GB สาเหตุเกิดจากแฟลชไดรฟ์นั้นถูกฟอร์แมตด้วยระบบไฟล์ใด? (Microsoft Learn File Systems)",
    "options": [
      {
        "key": "ก",
        "text": "NTFS"
      },
      {
        "key": "ข",
        "text": "exFAT"
      },
      {
        "key": "ค",
        "text": "FAT32"
      },
      {
        "key": "ง",
        "text": "APFS"
      }
    ],
    "answer": "ค",
    "answerText": "FAT32",
    "explanation": "ระบบไฟล์ FAT32 มีข้อจำกัดขนาดไฟล์เดี่ยวสูงสุดเพียง 4 GB (232 - 1 ไบต์) การแก้ไขคือ ต้องฟอร์แมตแฟลชไดรฟ์เป็น exFAT หรือ NTFS",
    "sourcePage": 35
  },
  {
    "id": "q-50",
    "number": 50,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - BIOS/UEFI และ Partition",
    "difficulty": "intermediate",
    "question": "คอมพิวเตอร์ที่ติดตั้งฮาร์ดดิสก์ขนาด 4 TB และต้องการใช้พื้นที่ทั้งหมดในดิสก์ เดียว พร้อมทั้งเปิดใช้งานฟีเจอร์ Secure Boot เพื่อติดตั้ง Windows 11 ต้องตั้งค่าเฟิร์มแวร์และรูปแบบตารางพาร์ติชันตามข้อ ใด? (Microsoft Learn Generation 2 VMs)",
    "options": [
      {
        "key": "ก",
        "text": "Legacy BIOS คู่กับ MBR (Master Boot Record)"
      },
      {
        "key": "ข",
        "text": "UEFI คู่กับ GPT (GUID Partition Table)"
      },
      {
        "key": "ค",
        "text": "Legacy BIOS คู่กับ FAT16"
      },
      {
        "key": "ง",
        "text": "CMOS คู่กับ MBR"
      }
    ],
    "answer": "ข",
    "answerText": "UEFI คู่กับ GPT (GUID Partition Table)",
    "explanation": "MBR รองรับขนาดดิสก์สูงสุดเพียง 2 TB เท่านั้น สำหรับดิสก์เกิน 2 TB และการรองรับ Secure Boot ในระบบปฏิบัติการยุคใหม่ ต้องใช้เฟิร์มแวร์ UEFI คู่กับพาร์ติชันแบบ GPT",
    "sourcePage": 36
  },
  {
    "id": "q-51",
    "number": 51,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - การคำนวณเวลาโอนย้ายข้อมูล",
    "difficulty": "intermediate",
    "question": "หากเชื่อมต่ออินเทอร์เน็ตความเร็วคงที่ 400 Mbps (Megabits per second) และต้องการดาวน์โหลดไฟล์อิมเมจขนาด 2,000 MB (Megabytes) โดยไม่มีการสูญเสียความเร็วในโปรโตคอล จะใช้ เวลาดาวน์โหลดกี่วินาที?",
    "options": [
      {
        "key": "ก",
        "text": "5 วินาที"
      },
      {
        "key": "ข",
        "text": "20 วินาที"
      },
      {
        "key": "ค",
        "text": "40 วินาที"
      },
      {
        "key": "ง",
        "text": "50 วินาที"
      }
    ],
    "answer": "ค",
    "answerText": "40 วินาที",
    "explanation": "แปลงความเร็วจาก Megabits/s เป็น Megabytes/s โดยหารด้วย 8 จะได้ 400 Mbps ÷ 8 = 50 MB/s ดังนั้นเวลาที่ใช้ดาวน์โหลดไฟล์ 2,000 MB คือ 2,000 ÷ 50 = 40 วินาที",
    "sourcePage": 36
  },
  {
    "id": "q-52",
    "number": 52,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - Process vs Thread",
    "difficulty": "intermediate",
    "question": "ข้อใดอธิบายความแตกต่างระหว่าง Process และ Thread ในระบบปฏิบัติการได้ อย่างถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Process ใช้หน่วยความจำร่วมกันทั้งหมด ส่วนแต่ละ Thread มีพื้นที่หน่วยความจำแยกขาดจากกัน"
      },
      {
        "key": "ข",
        "text": "Thread เป็นหน่วยย่อยภายใน Process โดยหลาย Thread ใน Process เดียวกันจะแชร์พื้นที่หน่วยความจำ (Address Space / Heap) ร่วมกัน ทำให้สลับการทำงานได้เร็วกว่าการสลับข้าม Process"
      },
      {
        "key": "ค",
        "text": "ระบบปฏิบัติการแบบ 64-bit รันได้เฉพาะ Thread ไม่สามารถรัน Process ได้"
      },
      {
        "key": "ง",
        "text": "การเกิด Deadlock เกิดขึ้นได้เฉพาะในระบบที่มี Process เดียวและ Thread เดียวเท่านั้น"
      }
    ],
    "answer": "ข",
    "answerText": "Thread เป็นหน่วยย่อยภายใน Process โดยหลาย Thread ใน Process เดียวกันจะแชร์พื้นที่หน่วยความจำ\n(Address Space / Heap) ร่วมกัน ทำให้สลับการทำงานได้เร็วกว่าการสลับข้าม Process",
    "explanation": "Process มี Address Space เป็นอิสระจากกัน ส่วน Threads ภายใน Process เดียวกันแชร์ Code, Data และ Heap ร่วมกัน (แต่มี Stack และ Register ของแต่ละ Thread แยกกัน)",
    "sourcePage": 36
  },
  {
    "id": "q-53",
    "number": 53,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - Linux File Permissions",
    "difficulty": "intermediate",
    "question": "ในระบบปฏิบัติการ Linux คำสั่ง chmod 754 script.sh จะกำหนดสิทธิ์การ เข้าถึงไฟล์ให้กับเจ้าของไฟล์ (Owner), กลุ่ม (Group) และผู้อื่น (Others) ตรงกับข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "rwxr-xr--"
      },
      {
        "key": "ข",
        "text": "rwxr--r-x"
      },
      {
        "key": "ค",
        "text": "rw-r-xr--"
      },
      {
        "key": "ง",
        "text": "rwxrw-r--"
      }
    ],
    "answer": "ก",
    "answerText": "rwxr-xr--",
    "explanation": "ค่าสิทธิ์ในระบบเลขฐานแปดคำนวณจาก r=4 (Read), w=2 (Write), x=1 (Execute): Owner = 7 (4+2+1) = rwx Group = 5 (4+0+1) = r-x Others = 4 (4+0+0) = r-- รวมกันเป็น rwxr-xr--",
    "sourcePage": 36
  },
  {
    "id": "q-54",
    "number": 54,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - RAID Storage",
    "difficulty": "intermediate",
    "question": "เซิร์ฟเวอร์ของบริษัทต้องการจัดทำระบบดิสก์แบบ RAID โดยเน้นทั้ง ความเร็วในการอ่าน/ เขียนข้อมูล (Striping) และ ความปลอดภัยเมื่อดิสก์เสีย (Mirroring) ไปพร้อมกัน โดยใช้ SSD จำนวน 4 ลูก และยอมเสีย พื้นที่ความจุไปครึ่งหนึ่งเพื่อสำรองข้อมูล ควรเลือกใช้ RAID ระดับใด?",
    "options": [
      {
        "key": "ก",
        "text": "RAID 0"
      },
      {
        "key": "ข",
        "text": "RAID 1"
      },
      {
        "key": "ค",
        "text": "RAID 5"
      },
      {
        "key": "ง",
        "text": "RAID 10 (RAID 1+0)"
      }
    ],
    "answer": "ง",
    "answerText": "RAID 10 (RAID 1+0)",
    "explanation": "RAID 0 เน้นความเร็วอย่างเดียวไม่มีการสำรองข้อมูล (ถ้าพัง 1 ลูก ข้อมูล หายทั้งหมด), RAID 1 คือการทำ Mirroring คู่ขนาน, RAID 5 ใช้ Parity เก็บสำรองเสียความจุ 1 ลูก, ส่วน RAID 10 ผสม ผสานทั้งการทำ Mirroring (RAID 1) และ Striping (RAID 0) โดยใช้ดิสก์อย่างน้อย 4 ลูก",
    "sourcePage": 37
  },
  {
    "id": "q-55",
    "number": 55,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ลำดับตัวดำเนินการ",
    "difficulty": "intermediate",
    "question": "พิจารณานิพจน์ต่อไปนี้ในภาษา Python: result = 10 + 20 // 3 * 2 - 2 ** 3 ค่าของ result หลังประมวลผลคือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "10"
      },
      {
        "key": "ข",
        "text": "14"
      },
      {
        "key": "ค",
        "text": "12"
      },
      {
        "key": "ง",
        "text": "2"
      }
    ],
    "answer": "ข",
    "answerText": "14",
    "explanation": "ลำดับการประมวลผล: ยกกำลังก่อน: 2 ** 3 = 8 หารปัดเศษและคูณจากซ้ายไปขวา: 20 // 3 = 6 จากนั้นนำ 6 * 2 = 12 บวกและลบจากซ้ายไปขวา: 10 + 12 - 8 = 14",
    "sourcePage": 37
  },
  {
    "id": "q-56",
    "number": 56,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - การไล่ผลลัพธ์โค้ด Loop & Condition",
    "difficulty": "intermediate",
    "question": "พิจารณารหัสลำลอง (Pseudocode) ต่อไปนี้: SET sum = 0 FOR i = 1 TO 6 STEP 1 DO IF (i MOD 2 == 0) THEN sum = sum + i ELSE sum = sum - 1 ENDIF ENDFOR PRINT sum ผลลัพธ์ที่แสดงออกทางหน้าจอคือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "9"
      },
      {
        "key": "ข",
        "text": "12"
      },
      {
        "key": "ค",
        "text": "6"
      },
      {
        "key": "ง",
        "text": "15"
      }
    ],
    "answer": "ก",
    "answerText": "9",
    "explanation": "ไล่ค่าตัวแปร i ตั้งแต่ 1 ถึง 6: i = 1 (คี่): sum = 0 - 1 = -1 i = 2 (คู่): sum = -1 + 2 = 1 i = 3 (คี่): sum = 1 - 1 = 0 i = 4 (คู่): sum = 0 + 4 = 4 i = 5 (คี่): sum = 4 - 1 = 3 i = 6 (คู่): sum = 3 + 6 = 9 (หรือคิดลัด: เลขคู่บวกกันคือ 2 + 4 + 6 = 12 หักลบเลขคี่ 3 ตัวคือ -1 × 3 = -3 รวม ได้ 12 - 3 = 9)",
    "sourcePage": 37
  },
  {
    "id": "q-57",
    "number": 57,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - อัลกอริทึม Binary Search",
    "difficulty": "intermediate",
    "question": "กำหนดให้อาเรย์ที่เรียงลำดับแล้ว A = [5, 12, 18, 25, 33, 41, 50, 62, 77] (ดัชนี 0 ถึง 8) หากต้องการค้นหาค่า 18 ด้วยอัลกอริทึม Binary Search โดยกำหนดค่าดัชนีกึ่งกลาง mid = (low + high) // 2 ลำดับของค่า A[mid] ที่ถูกนำมาเปรียบเทียบตั้งแต่ครั้งที่ 1 จนพบข้อมูลคือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "33 → 12 → 18"
      },
      {
        "key": "ข",
        "text": "5 → 12 → 18"
      },
      {
        "key": "ค",
        "text": "33 → 18"
      },
      {
        "key": "ง",
        "text": "25 → 12 → 18"
      }
    ],
    "answer": "ก",
    "answerText": "33 → 12 → 18",
    "explanation": "ครั้งที่ 1: low = 0, high = 8 → mid = (0 + 8) // 2 = 4 ซึ่ง A[4] = 33 เนื่องจาก 18 < 33 จึงปรับขอบเขต ไปค้นฝั่งซ้ายเป็น high = mid - 1 = 3 ครั้งที่ 2: low = 0, high = 3 → mid = (0 + 3) // 2 = 1 ซึ่ง A[1] = 12 เนื่องจาก 18 > 12 จึงปรับขอบเขต ไปค้นฝั่งขวาเป็น low = mid + 1 = 2 ครั้งที่ 3: low = 2, high = 3 → mid = (2 + 3) // 2 = 2 ซึ่ง A[2] = 18 พบข้อมูล! ลำดับที่เปรียบเทียบคือ 33 → 12 → 18 (CS50x Binary Search)",
    "sourcePage": 38
  },
  {
    "id": "q-58",
    "number": 58,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ฟังก์ชันเวียนเกิด (Recursion)",
    "difficulty": "intermediate",
    "question": "กำหนดฟังก์ชันเวียนเกิดดังนี้: def mystery(n): if n <= 1: return 1 return n + mystery(n - 2) เมื่อเรียกใช้งาน mystery(7) จะได้ผลลัพธ์เท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "16"
      },
      {
        "key": "ข",
        "text": "15"
      },
      {
        "key": "ค",
        "text": "28"
      },
      {
        "key": "ง",
        "text": "14"
      }
    ],
    "answer": "ก",
    "answerText": "16",
    "explanation": "ไล่การเรียกซ้ำย้อนกลับ: mystery(7) = 7 + mystery(5) mystery(5) = 5 + mystery(3) mystery(3) = 3 + mystery(1) mystery(1) = 1 (เข้าเงื่อนไข Base case n <= 1) ดังนั้นผลลัพธ์รวมคือ 7 + 5 + 3 + 1 = 16",
    "sourcePage": 38
  },
  {
    "id": "q-59",
    "number": 59,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - พีชคณิตบูลีนและ De Morgan's Law",
    "difficulty": "intermediate",
    "question": "ในการเขียนโปรแกรม เงื่อนไข NOT (score >= 50 AND attendance > 80) มีค่าความจริงสมมูลกับนิพจน์ในข้อใดทุกประการตามกฎของเดอมอร์แกน (De Morgan's Law)?",
    "options": [
      {
        "key": "ก",
        "text": "score < 50 AND attendance <= 80"
      },
      {
        "key": "ข",
        "text": "score < 50 OR attendance <= 80"
      },
      {
        "key": "ค",
        "text": "score <= 50 OR attendance < 80"
      },
      {
        "key": "ง",
        "text": "score > 50 OR attendance >= 80"
      }
    ],
    "answer": "ข",
    "answerText": "score < 50 OR attendance <= 80",
    "explanation": "ตามกฎของเดอมอร์แกน NOT(A · B) = NOT(A) + NOT(B) โดยที่นิเสธของ score >= 50 คือ score < 50, เปลี่ยน AND เป็น OR, และนิเสธของ attendance > 80 คือ attendance <= 80",
    "sourcePage": 39
  },
  {
    "id": "q-60",
    "number": 60,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - อัลกอริทึมการจัดเรียงข้อมูล",
    "difficulty": "intermediate",
    "question": "กำหนดอาเรย์เริ่มต้น [8, 3, 6, 2] หากใช้อัลกอริทึม Bubble Sort เรียง จากน้อยไปมาก โดยเปรียบเทียบและสลับคู่ที่ติดกันจากซ้ายไปขวา เมื่อจบการวนลูปรอบใหญ่ รอบที่ 1 (First Pass) อาเรย์จะ มีหน้าตาอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "[2, 3, 6, 8]"
      },
      {
        "key": "ข",
        "text": "[3, 6, 2, 8]"
      },
      {
        "key": "ค",
        "text": "[2, 8, 3, 6]"
      },
      {
        "key": "ง",
        "text": "[3, 8, 2, 6]"
      }
    ],
    "answer": "ข",
    "answerText": "[3, 6, 2, 8]",
    "explanation": "ในรอบที่ 1 ของ Bubble Sort: เปรียบเทียบคู่แรก (8, 3) สลับเป็น [3, 8, 6, 2] เปรียบเทียบคู่ถัดไป (8, 6) สลับเป็น [3, 6, 8, 2] เปรียบเทียบคู่สุดท้าย (8, 2) สลับเป็น [3, 6, 2, 8] (ค่ามากที่สุดคือ 8 จะลอยไปอยู่ตำแหน่งขวาสุดเมื่อจบรอบที่ 1)",
    "sourcePage": 39
  },
  {
    "id": "q-61",
    "number": 61,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - โครงสร้างข้อมูล Stack & Queue",
    "difficulty": "intermediate",
    "question": "หากนำตัวอักษร 'U', 'T', 'C', 'C' ใส่เข้าไปในโครงสร้างข้อมูลแบบ Stack ทีละตัวตามลำดับ (push('U'), push('T'), push('C'), push('C')) จากนั้นทำการดึงข้อมูลออก (pop()) มา แสดงผลทีละตัวจนหมด จะได้ลำดับตัวอักษรตามข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "U T C C"
      },
      {
        "key": "ข",
        "text": "C C T U"
      },
      {
        "key": "ค",
        "text": "U C T C"
      },
      {
        "key": "ง",
        "text": "T U C C"
      }
    ],
    "answer": "ข",
    "answerText": "C C T U",
    "explanation": "Stack ทำงานแบบ LIFO (Last-In, First-Out) ตัวที่ถูกใส่เข้าไปหลังสุดจะถูกดึงออก มาก่อน จึงเรียงย้อนกลับเป็น C C T U",
    "sourcePage": 39
  },
  {
    "id": "q-62",
    "number": 62,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ความซับซ้อนของลูปซ้อนลูป",
    "difficulty": "intermediate",
    "question": "พิจารณาส่วนของโค้ดต่อไปนี้: count = 0 for i in range(n): for j in range(n): count += 1 ความซับซ้อนของเวลา (Time Complexity) ของโค้ดส่วนนี้ในรูปสัญกรณ์ Big O คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "O(n)"
      },
      {
        "key": "ข",
        "text": "O(2n)"
      },
      {
        "key": "ค",
        "text": "O(n log n)"
      },
      {
        "key": "ง",
        "text": "O(n2)"
      }
    ],
    "answer": "ง",
    "answerText": "O(n2)",
    "explanation": "ลูปชั้นนอกทำงาน n รอบ และในแต่ละรอบลูปชั้นในทำงานอีก n รอบ รวมจำนวนครั้งที่คำสั่ง count += 1 ทำงานคือ n × n = n2 ครั้ง จึงมีความซับซ้อนเป็น O(n2)",
    "sourcePage": 39
  },
  {
    "id": "q-63",
    "number": 63,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - การจำแนกอัลกอริทึม ML",
    "difficulty": "intermediate",
    "question": "ข้อใดจับคู่ระหว่างโจทย์ปัญหากับประเภทและอัลกอริทึมของ Machine Learning ได้ถูกต้องเหมาะสมที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "การจัดกลุ่มลูกค้าตามพฤติกรรมการซื้อโดยไม่มีป้ายกำกับล่วงหน้า → Unsupervised Learning ด้วยอัลกอริทึม K- Means Clustering"
      },
      {
        "key": "ข",
        "text": "การทำนายราคาคอนโดมิเนียมเป็นหน่วยบาท → Unsupervised Learning ด้วยอัลกอริทึม Apriori"
      },
      {
        "key": "ค",
        "text": "การแยกแยะภาพแมวกับสุนัขที่มีเฉลยกำกับ → Reinforcement Learning ด้วยอัลกอริทึม PCA"
      },
      {
        "key": "ง",
        "text": "การฝึกหุ่นยนต์เดินหลบสิ่งกีดขวางด้วยการให้คะแนนรางวัล → Supervised Learning ด้วยอัลกอริทึม Linear Regression"
      }
    ],
    "answer": "ก",
    "answerText": "การจัดกลุ่มลูกค้าตามพฤติกรรมการซื้อโดยไม่มีป้ายกำกับล่วงหน้า → Unsupervised Learning ด้วยอัลกอ\nริทึม K-Means Clustering",
    "explanation": "การแบ่งกลุ่มข้อมูลที่ไม่มีเฉลยกำกับ (Customer Segmentation) เป็นงาน Clustering ในกลุ่ม Unsupervised Learning ซึ่งนิยมใช้อัลกอริทึม K-Means",
    "sourcePage": 40
  },
  {
    "id": "q-64",
    "number": 64,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - ปัญหา Overfitting",
    "difficulty": "intermediate",
    "question": "ในระหว่างการฝึกสอนโมเดล Deep Learning นักวิจัยพบว่าโมเดลมีค่าความแม่นยำบน ชุดข้อมูลฝึกสอน (Training Accuracy) สูงถึง 99.5% แต่เมื่อนำไปทดสอบกับชุดข้อมูลตรวจสอบ (Validation Accuracy) กลับได้ความแม่นยำเพียง 62.0% และกราฟ Validation Loss พุ่งสูงขึ้นอย่างต่อเนื่อง สภาวะนี้เรียกว่าอะไร และควรแก้ไข อย่างไร? (Google ML Overfitting)",
    "options": [
      {
        "key": "ก",
        "text": "Underfitting / แก้ไขโดยเพิ่มจำนวนชั้นของ Neural Network ให้ซับซ้อนขึ้น"
      },
      {
        "key": "ข",
        "text": "Overfitting / แก้ไขโดยใช้เทคนิค Dropout, Regularization, Early Stopping หรือเพิ่มปริมาณข้อมูลฝึกสอน"
      },
      {
        "key": "ค",
        "text": "Vanishing Gradient / แก้ไขโดยตัดข้อมูลฝึกสอนออกครึ่งหนึ่ง"
      },
      {
        "key": "ง",
        "text": "Hallucination / แก้ไขโดยเพิ่มค่า Learning Rate ให้สูงที่สุด"
      }
    ],
    "answer": "ข",
    "answerText": "Overfitting / แก้ไขโดยใช้เทคนิค Dropout, Regularization, Early Stopping หรือเพิ่มปริมาณข้อมูล\nฝึกสอน",
    "explanation": "อาการที่โมเดลทำคะแนนบน Training Set ได้ดีมากแต่ทำบน Validation/Test Set ได้แย่ คืออาการ Overfitting แก้ไขได้ด้วยการลดความซับซ้อนของโมเดล ทำ Regularization/Dropout หรือเพิ่มข้อมูลฝึกสอน",
    "sourcePage": 40
  },
  {
    "id": "q-65",
    "number": 65,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - การคำนวณ Confusion Matrix",
    "difficulty": "intermediate",
    "question": "โมเดล AI สำหรับตรวจคัดกรองผู้ติดเชื้อไวรัสชนิดหนึ่ง ถูกนำไปทดสอบ กับผู้เข้ารับการตรวจ 200 คน ได้ผลลัพธ์ดังนี้: ผู้ที่ติดเชื้อจริงและโมเดลทายว่าติดเชื้อ (TP) = 40 คน ผู้ที่ไม่ติดเชื้อจริงและโมเดลทายว่าไม่ติดเชื้อ (TN) = 140 คน ผู้ที่ไม่ติดเชื้อจริงแต่โมเดลทายผิดว่าติดเชื้อ (FP) = 10 คน ผู้ที่ติดเชื้อจริงแต่โมเดลทายผิดว่าไม่ติดเชื้อ (FN) = 10 คน ค่า Accuracy และค่า Precision ของโมเดลนี้มีค่าเท่ากับข้อใด ตามลำดับ? (Google ML Glossary)",
    "options": [
      {
        "key": "ก",
        "text": "Accuracy = 90% และ Precision = 80%"
      },
      {
        "key": "ข",
        "text": "Accuracy = 80% และ Precision = 90%"
      },
      {
        "key": "ค",
        "text": "Accuracy = 90% และ Precision = 85%"
      },
      {
        "key": "ง",
        "text": "Accuracy = 95% และ Precision = 80%"
      }
    ],
    "answer": "ก",
    "answerText": "Accuracy = 90% และ Precision = 80%",
    "explanation": "Accuracy = (TP + TN) / (Total) = (40 + 140) / (200) = (180) / (200) = 0.90 = 90% Precision = (TP) / (TP + FP) = (40) / (40 + 10) = (40) / (50) = 0.80 = 80% (ใน случаяนี้ Recall ก็เท่ากับ (40) / (40+10) = 80\\% เช่นกัน)",
    "sourcePage": 40
  },
  {
    "id": "q-66",
    "number": 66,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - สถาปัตยกรรม Deep Learning",
    "difficulty": "intermediate",
    "question": "สถาปัตยกรรมโครงข่ายประสาทเทียมใดที่เป็นรากฐานของโมเดลภาษา ขนาดใหญ่ยุคปัจจุบัน (เช่น Gemini, GPT, Claude) โดยใช้กลไก Self-Attention ในการประมวลผลความสัมพันธ์ของคำ ทั้งหมดในประโยคพร้อมกัน? (IBM Machine Learning)",
    "options": [
      {
        "key": "ก",
        "text": "Convolutional Neural Network (CNN)"
      },
      {
        "key": "ข",
        "text": "Recurrent Neural Network (RNN)"
      },
      {
        "key": "ค",
        "text": "Transformer Architecture"
      },
      {
        "key": "ง",
        "text": "Multilayer Perceptron (MLP) ยุคแรก"
      }
    ],
    "answer": "ค",
    "answerText": "Transformer Architecture",
    "explanation": "สถาปัตยกรรม Transformer ที่เปิดตัวในปี 2017 ใช้กลไก Self- Attention ทำให้สามารถฝึกสอนบน GPU แบบขนานได้อย่างมีประสิทธิภาพและเป็นรากฐานของ LLM ทั้งหมดในปัจจุบัน (IBM ML)",
    "sourcePage": 41
  },
  {
    "id": "q-67",
    "number": 67,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - RAG และ Vector Database",
    "difficulty": "intermediate",
    "question": "หากมหาวิทยาลัยต้องการสร้างระบบ AI ตอบคำถามเกี่ยวกับระเบียบการรับ สมัครนักศึกษาปี 2569 โดยอ้างอิงจากไฟล์เอกสาร PDF กติกาฉบับล่าสุดอย่างแม่นยำและไม่อนุญาตให้ AI แต่งข้อมูลขึ้นเอง โดยไม่ต้องนำโมเดล LLM ไปฝึกสอนใหม่ (Retraining) ควรเลือกใช้เทคนิคใด? (Google Cloud RAG)",
    "options": [
      {
        "key": "ก",
        "text": "K-Means Clustering"
      },
      {
        "key": "ข",
        "text": "Retrieval-Augmented Generation (RAG) ร่วมกับ Vector Database"
      },
      {
        "key": "ค",
        "text": "Image Segmentation ด้วย CNN"
      },
      {
        "key": "ง",
        "text": "Reinforcement Learning แบบสุ่ม"
      }
    ],
    "answer": "ข",
    "answerText": "Retrieval-Augmented Generation (RAG) ร่วมกับ Vector Database",
    "explanation": "RAG จะแปลง เอกสารระเบียบการเป็น Vector Embeddings เก็บใน Vector Database เมื่อผู้ใช้ถาม ระบบจะค้นเนื้อหาที่ตรงที่สุดมา แนบใน Prompt ให้ LLM ตอบตามข้อเท็จจริง ช่วยลด Hallucination และประหยัดค่าใช้จ่ายในการฝึกโมเดลใหม่ (NVIDIA RAG)",
    "sourcePage": 41
  },
  {
    "id": "q-68",
    "number": 68,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - พารามิเตอร์ของ LLM",
    "difficulty": "intermediate",
    "question": "ในการเรียกใช้งาน API ของโมเดลภาษาขนาดใหญ่ (LLM) เพื่อสร้างโค้ดโปรแกรมหรือ คำนวณคำตอบทางคณิตศาสตร์ที่ต้องการความถูกต้องแม่นยำและให้ผลลัพธ์คงเดิมมากที่สุด ควรตั้งค่าพารามิเตอร์ Temperature อย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ตั้งค่า Temperature ให้สูงที่สุด (เช่น 1.5 – 2.0)"
      },
      {
        "key": "ข",
        "text": "ตั้งค่า Temperature ให้ต่ำหรือเท่ากับ 0 (เช่น 0.0 – 0.2)"
      },
      {
        "key": "ค",
        "text": "ตั้งค่า Context Window ให้เหลือ 1 Token"
      },
      {
        "key": "ง",
        "text": "ปิดการใช้งาน Self-Attention"
      }
    ],
    "answer": "ข",
    "answerText": "ตั้งค่า Temperature ให้ต่ำหรือเท่ากับ 0 (เช่น 0.0 – 0.2)",
    "explanation": "ค่า Temperature ที่ต่ำ (เข้าใกล้ 0) จะบังคับให้โมเดลเลือก Token ที่มีความน่าจะเป็นสูงสุด (Greedy / Deterministic decoding) เหมาะกับงานที่ต้องการ ความแม่นยำและข้อเท็จจริง",
    "sourcePage": 41
  },
  {
    "id": "q-69",
    "number": 69,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - Data Preprocessing",
    "difficulty": "intermediate",
    "question": "ในการเตรียมข้อมูลเพื่อเทรนโมเดล Machine Learning หากคอลัมน์ Province เก็บชื่อจังหวัดของลูกค้า 5 จังหวัดซึ่งเป็นข้อมูลหมวดหมู่ที่ ไม่มีลำดับความสำคัญมาก-น้อย (Nominal Categorical Data) วิธีแปลงข้อมูลเป็นตัวเลขวิธีใดเหมาะสมที่สุดเพื่อไม่ให้โมเดลเข้าใจผิดว่าจังหวัดหนึ่งมีค่าเชิงตัวเลขมากกว่าอีกจังหวัดหนึ่ง?",
    "options": [
      {
        "key": "ก",
        "text": "One-Hot Encoding"
      },
      {
        "key": "ข",
        "text": "การแทนค่าทั้งหมดด้วย 0"
      },
      {
        "key": "ค",
        "text": "การเรียงตามตัวอักษรแล้วคูณด้วย 1,000"
      },
      {
        "key": "ง",
        "text": "การลบคอลัมน์เป้าหมายทิ้ง"
      }
    ],
    "answer": "ก",
    "answerText": "One-Hot Encoding",
    "explanation": "One-Hot Encoding จะสร้างคอลัมน์ไบนารี (0 หรือ 1) แยกตามหมวดหมู่ ทำให้ไม่มีลำดับศักดิ์เทียมเกิดขึ้น ต่างจาก Label Encoding (0, 1, 2, 3, 4) ที่อาจทำให้โมเดลเชิงเส้นเข้าใจผิดว่า หมายเลข 4 มีค่ามากกว่าหมายเลข 1",
    "sourcePage": 41
  },
  {
    "id": "q-70",
    "number": 70,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - AI Agents",
    "difficulty": "intermediate",
    "question": "ข้อใดคือคุณลักษณะเด่นที่ทำให้ AI Agents (Agentic AI) แตกต่างจากแชตบอต LLM แบบ ถาม-ตอบทั่วไป? (AWS GraphRAG & Agentic AI)",
    "options": [
      {
        "key": "ก",
        "text": "AI Agents ไม่ใช้โครงข่ายประสาทเทียมในการทำงานเลย"
      },
      {
        "key": "ข",
        "text": "AI Agents สามารถตั้งเป้าหมายย่อย วางแผนการทำงานหลายขั้นตอน (Multi-step reasoning/planning) จดจำ บริบท และเรียกใช้เครื่องมือภายนอก (Tool Use / API Calling) เพื่อทำงานให้สำเร็จได้โดยอัตโนมัติ"
      },
      {
        "key": "ค",
        "text": "AI Agents ทำงานได้เฉพาะเมื่อไม่มีการเชื่อมต่ออินเทอร์เน็ตเท่านั้น"
      },
      {
        "key": "ง",
        "text": "AI Agents ใช้สำหรับบีบอัดไฟล์รูปภาพเท่านั้น"
      }
    ],
    "answer": "ข",
    "answerText": "AI Agents สามารถตั้งเป้าหมายย่อย วางแผนการทำงานหลายขั้นตอน (Multi-step\nreasoning/planning) จดจำบริบท และเรียกใช้เครื่องมือภายนอก (Tool Use / API Calling) เพื่อทำงานให้สำเร็จได้\nโดยอัตโนมัติ",
    "explanation": "ตามนิยามของ IBM AI Agents และ AWS ระบบ Agentic AI ผสานความเข้าใจภาษาของ LLM เข้ากับความสามารถในการวางแผน (Planning), ความจำ (Memory) และการเรียกใช้เครื่องมือ (Tool use) 5.3 ระดับยาก (Advanced / Hard Level: ข้อ 71–100)",
    "sourcePage": 42
  },
  {
    "id": "q-71",
    "number": 71,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - โครงสร้างการรับรองความถูกต้องและความไม่ปฏิเสธความรับผิด",
    "difficulty": "advanced",
    "question": "ในการทำธุรกรรมทางการเงินดิจิทัล หาก ต้องการสร้าง ลายเซ็นดิจิทัล (Digital Signature) เพื่อรับรองความถูกต้องของข้อมูล (Integrity) และยืนยันตัวตนผู้ส่งโดย ไม่สามารถปฏิเสธความรับผิดได้ (Non-repudiation) ขั้นตอนการทำงานที่ถูกต้องในข้อใดที่ระบบใช้? (NIST SP 1800-26)",
    "options": [
      {
        "key": "ก",
        "text": "นำข้อความมาเข้ารหัสด้วย Public Key ของผู้รับ แล้วส่งไปพร้อมกับรหัสผ่าน"
      },
      {
        "key": "ข",
        "text": "นำข้อความต้นฉบับมาผ่านฟังก์ชันแฮช (Cryptographic Hash เช่น SHA-256) เพื่อให้ได้ Message Digest แล้วนำ ค่าแฮชไปเข้ารหัสด้วย Private Key ของผู้ส่ง โดยผู้รับจะตรวจสอบด้วย Public Key ของผู้ส่ง"
      },
      {
        "key": "ค",
        "text": "นำข้อความต้นฉบับมาบีบอัดด้วยอัลกอริทึม ZIP แล้วเข้ารหัสด้วย Public Key ของผู้ส่ง"
      },
      {
        "key": "ง",
        "text": "นำค่าแฮชของข้อความไปเข้ารหัสด้วย Private Key ของผู้รับ แล้วให้ผู้ส่งใช้ Public Key ของผู้รับตรวจสอบ"
      }
    ],
    "answer": "ข",
    "answerText": "นำข้อความต้นฉบับมาผ่านฟังก์ชันแฮช (Cryptographic Hash เช่น SHA-256) เพื่อให้ได้ Message\nDigest แล้วนำค่าแฮชไปเข้ารหัสด้วย Private Key ของผู้ส่ง โดยผู้รับจะตรวจสอบด้วย Public Key ของผู้ส่ง — คำ\nอธิบาย: Digital Signature ต้องสร้างด้วย Private Key ของผู้ส่ง เสมอ (เพื่อยืนยันว่ามาจากผู้ส่งจริง) และเมื่อผู้รับใช้\nPublic Key ของผู้ส่ง ถอดรหัสได้ค่าแฮชที่ตรงกับค่าแฮชของไฟล์ที่ได้รับ ย่อมพิสูจน์ได้ทั้ง Integrity (ข้อมูลไม่ถูกแก้ไข)\nและ Non-repudiation",
    "explanation": "",
    "sourcePage": 42
  },
  {
    "id": "q-72",
    "number": 72,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ความปลอดภัยระดับฮาร์ดแวร์และคลาวด์",
    "difficulty": "advanced",
    "question": "เทคโนโลยี Confidential Computing เช่น Intel SGX (Software Guard Extensions) สร้างพื้นที่ปลอดภัยที่เรียกว่า Enclave ขึ้นมาเพื่อปกป้องข้อมูลในสถานะใด และมีขอบเขต การป้องกันอย่างไร?",
    "options": [
      {
        "key": "ก",
        "text": "ปกป้องเฉพาะข้อมูลขณะจัดเก็บในฮาร์ดดิสก์ (Data at Rest) โดยอนุญาตให้ระบบปฏิบัติการโฮสต์อ่านได้อิสระ"
      },
      {
        "key": "ข",
        "text": "ปกป้องเฉพาะข้อมูลขณะส่งผ่านสายแลน (Data in Transit) แทนการใช้ TLS"
      },
      {
        "key": "ค",
        "text": "ปกป้องข้อมูลและโค้ด ขณะกำลังประมวลผลในหน่วยความจำ (Data in Use) โดยแยกส่วนและเข้ารหัสในระดับฮาร์ดแวร์ CPU แม้แต่ OS Kernel หรือ Hypervisor ที่ถูกเจาะระบบก็ไม่สามารถแอบอ่านข้อมูลภายใน Enclave ได้"
      },
      {
        "key": "ง",
        "text": "ใช้สำหรับเร่งความเร็วการแสดงผลกราฟิก 3 มิติบนเว็บเบราว์เซอร์"
      }
    ],
    "answer": "ค",
    "answerText": "ปกป้องข้อมูลและโค้ด ขณะกำลังประมวลผลในหน่วยความจำ (Data in Use) โดยแยกส่วนและเข้ารหัสใน\nระดับฮาร์ดแวร์ CPU แม้แต่ OS Kernel หรือ Hypervisor ที่ถูกเจาะระบบก็ไม่สามารถแอบอ่านข้อมูลภายใน Enclave\nได้",
    "explanation": "ตามเอกสาร Intel SGX Explained Enclave ปกป้อง Confidentiality และ Integrity ของโค้ดและ ข้อมูลขณะรันอยู่ใน RAM (Data in Use) จากทั้ง OS Kernel และ Hypervisor",
    "sourcePage": 42
  },
  {
    "id": "q-73",
    "number": 73,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - กฎหมายคุ้มครองข้อมูลเปรียบเทียบ",
    "difficulty": "advanced",
    "question": "จากการเปรียบเทียบกรอบกฎหมาย GDPR มาตรา 22 และ EU AI Act มาตรา 14 และ 86 กับ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) ของไทย ในประเด็น \"การตัดสินใจอัตโนมัติโดย ปัญญาประดิษฐ์\" (Automated Decision-Making: ADM) ข้อใดกล่าวถูกต้องตามข้อเท็จจริงทางวิชาการในปัจจุบัน?",
    "options": [
      {
        "key": "ก",
        "text": "PDPA ของไทยมีบทบัญญัติบังคับเรื่อง Human Oversight-by-Design ที่เข้มงวดกว่า EU AI Act ทุกประการ"
      },
      {
        "key": "ข",
        "text": "กรอบกฎหมายสหภาพยุโรปกำหนดสิทธิของเจ้าของข้อมูลในการขอให้มนุษย์เข้าแทรกแซง (Human Intervention) และ สิทธิได้รับคำอธิบายอัลกอริทึม (EU AI Act มาตรา 86) ในขณะที่ PDPA ปัจจุบันของไทยยังไม่มีบทบัญญัติเฉพาะเจาะจงที่ รับรองสิทธิปฏิเสธ ADM โดยตรงเหมือน GDPR มาตรา 22"
      },
      {
        "key": "ค",
        "text": "ทั้ง GDPR, EU AI Act และ PDPA ห้ามมิให้ธนาคารใช้ซอฟต์แวร์คำนวณดอกเบี้ยโดยเด็ดขาด"
      },
      {
        "key": "ง",
        "text": "EU AI Act บังคับใช้เฉพาะกับบริษัทที่ตั้งอยู่ในทวีปเอเชียเท่านั้น"
      }
    ],
    "answer": "ข",
    "answerText": "กรอบกฎหมายสหภาพยุโรปกำหนดสิทธิของเจ้าของข้อมูลในการขอให้มนุษย์เข้าแทรกแซง (Human\nIntervention) และสิทธิได้รับคำอธิบายอัลกอริทึม (EU AI Act มาตรา 86) ในขณะที่ PDPA ปัจจุบันของไทยยังไม่มี\nบทบัญญัติเฉพาะเจาะจงที่รับรองสิทธิปฏิเสธ ADM โดยตรงเหมือน GDPR มาตรา 22",
    "explanation": "งานวิจัยเปรียบ เทียบใน วารสาร JISSD (2026) ชี้ให้เห็นว่า EU มีกลไกคุ้มครอง 4 ชั้น (GDPR มาตรา 22 + EU AI Act มาตรา 14 และ 86) ในขณะที่ PDPA พ.ศ. 2562 ยังมีช่องว่างด้านสิทธิปฏิเสธ ADM และการบังคับทำ DPIA สำหรับระบบ AI ความเสี่ยงสูง",
    "sourcePage": 43
  },
  {
    "id": "q-74",
    "number": 74,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - Quantum Computing & Cryptography",
    "difficulty": "advanced",
    "question": "เหตุใดการพัฒนาคอมพิวเตอร์ควอนตัมขนาดใหญ่ที่เสถียร (Fault-tolerant Quantum Computer) จึงเป็นภัยคุกคามโดยตรงต่อระบบการเข้ารหัสแบบกุญแจสาธารณะอย่าง RSA และ ECC ที่ใช้อยู่บนอินเทอร์เน็ตในปัจจุบัน? (IBM Think Topics)",
    "options": [
      {
        "key": "ก",
        "text": "เพราะคอมพิวเตอร์ควอนตัมสามารถเดารหัสผ่าน Wi-Fi ด้วยการสุ่มตัวอักษรทีละตัวได้ช้ากว่าเดิม"
      },
      {
        "key": "ข",
        "text": "เพราะอัลกอริทึมของชอร์ (Shor's Algorithm) บนคอมพิวเตอร์ควอนตัมสามารถแยกตัวประกอบของจำนวนเต็มขนาด ใหญ่และแก้ปัญหา Discrete Logarithm ได้ในเวลาแบบพหุนาม (Polynomial Time) จึงจำเป็นต้องเปลี่ยนผ่านไปสู่ มาตรฐาน Post-Quantum Cryptography (PQC)"
      },
      {
        "key": "ค",
        "text": "เพราะคอมพิวเตอร์ควอนตัมทำให้สายไฟเบอร์ออปติกหยุดทำงานทันที"
      },
      {
        "key": "ง",
        "text": "เพราะ Qubit ไม่สามารถทำงานร่วมกับเลขฐานสองได้เลยแม้ผ่านตัวแปลง"
      }
    ],
    "answer": "ข",
    "answerText": "เพราะอัลกอริทึมของชอร์ (Shor's Algorithm) บนคอมพิวเตอร์ควอนตัมสามารถแยกตัวประกอบของ\nจำนวนเต็มขนาดใหญ่และแก้ปัญหา Discrete Logarithm ได้ในเวลาแบบพหุนาม (Polynomial Time) จึงจำเป็นต้อง\nเปลี่ยนผ่านไปสู่มาตรฐาน Post-Quantum Cryptography (PQC)",
    "explanation": "ความปลอดภัยของ RSA อาศัย ความยากในการแยกตัวประกอบของเลขจำนวนเฉพาะขนาดใหญ่ ซึ่ง Shor's Algorithm สามารถแก้ได้รวดเร็วมากบน Quantum Computer (ส่วนการเข้ารหัสแบบสมมาตรเช่น AES-256 ได้รับผลกระทบจาก Grover's Algorithm เพียงลด ระดับความปลอดภัยลงครึ่งหนึ่งซึ่งยังปลอดภัยสูง)",
    "sourcePage": 43
  },
  {
    "id": "q-75",
    "number": 75,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - การโจมตีระดับแอปพลิเคชัน vs เครือข่าย",
    "difficulty": "advanced",
    "question": "ข้อใดเปรียบเทียบการโจมตีแบบ Layer 7 (Application Layer) DDoS Attack กับ Layer 3/4 DDoS Attack ได้ถูกต้อง?",
    "options": [
      {
        "key": "ก",
        "text": "Layer 7 DDoS ใช้เฉพาะโปรโตคอล ICMP Ping เท่านั้น ส่วน Layer 3 DDoS ใช้ HTTP GET"
      },
      {
        "key": "ข",
        "text": "Layer 7 DDoS (เช่น HTTP Flood) จำลองการส่งคำขอระดับแอปพลิเคชันที่ดูเหมือนผู้ใช้ปกติเพื่อผลาญทรัพยากร CPU, RAM และฐานข้อมูลของเซิร์ฟเวอร์โดยตรงแม้ใช้แบนด์วิดท์ไม่มาก ส่วน Layer 3/4 DDoS มุ่งเน้นการอัดปริมาณ ทราฟฟิกให้เต็มท่อเครือข่ายหรือตารางสถานะ TCP"
      },
      {
        "key": "ค",
        "text": "Layer 7 DDoS ป้องกันได้ด้วยการใช้สายแลน Cat6 แทน Cat5e"
      },
      {
        "key": "ง",
        "text": "Layer 3 DDoS เกิดขึ้นได้เฉพาะบนเครือข่ายไร้สาย Bluetooth เท่านั้น"
      }
    ],
    "answer": "ข",
    "answerText": "Layer 7 DDoS (เช่น HTTP Flood) จำลองการส่งคำขอระดับแอปพลิเคชันที่ดูเหมือนผู้ใช้ปกติเพื่อผลาญ\nทรัพยากร CPU, RAM และฐานข้อมูลของเซิร์ฟเวอร์โดยตรงแม้ใช้แบนด์วิดท์ไม่มาก ส่วน Layer 3/4 DDoS มุ่งเน้น\nการอัดปริมาณทราฟฟิกให้เต็มท่อเครือข่ายหรือตารางสถานะ TCP",
    "explanation": "ตามเอกสารของ Cloudflare Application Layer DDoS การโจมตีระดับ Layer 7 จะโจมตีจุดที่เซิร์ฟเวอร์ต้องประมวลผลหนัก (เช่น การค้นหาฐานข้อมูล ผ่าน HTTP GET/POST)",
    "sourcePage": 43
  },
  {
    "id": "q-76",
    "number": 76,
    "categoryId": "general-it",
    "tag": "กลุ่ม 1 - ตัวชี้วัดความพร้อมใช้งานของระบบ (SLA Uptime)",
    "difficulty": "advanced",
    "question": "หากผู้ให้บริการ Cloud ประกาศรับประกันความพร้อม ใช้งานของระบบ (Service Level Agreement: SLA) ที่ระดับ \"Four Nines\" (99.99% Availability) ต่อปี ระบบดังกล่าว สามารถหยุดทำงานโดยไม่คาดคิด (Downtime) ได้สูงสุดประมาณเท่าใดในรอบ 1 ปี (365 วัน)?",
    "options": [
      {
        "key": "ก",
        "text": "ประมาณ 3.65 วันต่อปี"
      },
      {
        "key": "ข",
        "text": "ประมาณ 8.76 ชั่วโมงต่อปี"
      },
      {
        "key": "ค",
        "text": "ประมาณ 52.56 นาทีต่อปี"
      },
      {
        "key": "ง",
        "text": "ประมาณ 5.26 นาทีต่อปี"
      }
    ],
    "answer": "ค",
    "answerText": "ประมาณ 52.56 นาทีต่อปี",
    "explanation": "ใน 1 ปีมีจำนวนนาทีทั้งหมด = 365 × 24 × 60 = 525,600 นาที ความไม่พร้อมใช้งานที่ยอมรับได้สำหรับ 99.99% คือ 100\\% - 99.99\\% = 0.01\\% = 0.0001 ดังนั้นเวลา Downtime สูงสุดต่อปี = 525,600 × 0.0001 = 52.56 นาทีต่อปี (หากเป็น 99.9% คือ ~8.76 ชั่วโมง และ 99.999% \"Five Nines\" คือ ~5.26 นาที)",
    "sourcePage": 44
  },
  {
    "id": "q-77",
    "number": 77,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - คำนวณ Subnet Address & Broadcast Address เชิงลึก",
    "difficulty": "advanced",
    "question": "เครื่องคอมพิวเตอร์เครื่องหนึ่งได้รับ หมายเลข IP Address คือ 172.16.45.140/27 ข้อใดระบุ Network Address, First Usable Host, Last Usable Host และ Broadcast Address ของเครือข่ายย่อย (Subnet) ที่เครื่องนี้สังกัดอยู่ได้ถูกต้องทั้งหมด? (Cisco TCP/IP Overview)",
    "options": [
      {
        "key": "ก",
        "text": "Network: 172.16.45.128, First Host: 172.16.45.129, Last Host: 172.16.45.158, Broadcast: 172.16.45.159"
      },
      {
        "key": "ข",
        "text": "Network: 172.16.45.128, First Host: 172.16.45.129, Last Host: 172.16.45.190, Broadcast: 172.16.45.191"
      },
      {
        "key": "ค",
        "text": "Network: 172.16.45.0, First Host: 172.16.45.1, Last Host: 172.16.45.254, Broadcast: 172.16.45.255"
      },
      {
        "key": "ง",
        "text": "Network: 172.16.45.136, First Host: 172.16.45.137, Last Host: 172.16.45.142, Broadcast: 172.16.45.143"
      }
    ],
    "answer": "ก",
    "answerText": "Network: 172.16.45.128, First Host: 172.16.45.129, Last Host: 172.16.45.158, Broadcast:\n172.16.45.159",
    "explanation": "Prefix /27 มีจำนวนบิตโฮสต์ h = 32 - 27 = 5 บิต ขนาดบล็อก (Block Size) ในออกเต็ตที่ 4 คือ 25 = 32 แอดเดรสต่อ หนึ่งเครือข่ายย่อย พหุคูณของ 32 ได้แก่ 0, 32, 64, 96, 128, 160, ... เนื่องจาก 140 อยู่ระหว่าง 128 กับ 160 ดังนั้น: Network Address คือ 172.16.45.128 Broadcast Address (ก่อนถึงบล็อกถัดไป .160 อยู่ 1 ค่า) คือ 172.16.45.159 ช่วงโฮสต์ที่ใช้งานได้จริง คือ 172.16.45.129 ถึง 172.16.45.158 (รวม 30 เครื่อง)",
    "sourcePage": 44
  },
  {
    "id": "q-78",
    "number": 78,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - กฎการย่อหมายเลข IPv6",
    "difficulty": "advanced",
    "question": "กำหนดหมายเลข IPv6 Address แบบเต็มคือ 2001:0db8:0000:0000:0050:0000:0000:0ab0 ข้อใดคือการเขียนย่อที่ ถูกต้องตามมาตรฐาน RFC 5952?",
    "options": [
      {
        "key": "ก",
        "text": "2001:db8::50::ab0"
      },
      {
        "key": "ข",
        "text": "2001:db8::50:0:0:ab0"
      },
      {
        "key": "ค",
        "text": "2001:db8:0:0:5:0:0:ab"
      },
      {
        "key": "ง",
        "text": "2001:0db8::0050:0:0:0ab"
      }
    ],
    "answer": "ข",
    "answerText": "2001:db8::50:0:0:ab0",
    "explanation": "กฎการย่อ IPv6 มี 2 ข้อ: ตัดเลข 0 นำหน้า (Leading zeros) ของแต่ละกลุ่มออกได้ แต่ห้ามตัดเลข 0 ต่อท้าย (Trailing zeros) ดังนั้น 0db8 → db8, 0050 → 50, และ 0ab0 → ab0 (ตัด 0 ท้ายไม่ได้!) ยุบกลุ่มที่เป็น 0000 ติดกันด้วย :: ได้ เพียงแห่งเดียวเท่านั้น (จึงทำให้ข้อ ก. ผิดเพราะใช้ :: สองครั้ง) เมื่อยุบชุดแรกเป็น :: ชุดหลังจึงต้องเขียนเป็น :0:0: ได้ผลลัพธ์คือ 2001:db8::50:0:0:ab0",
    "sourcePage": 44
  },
  {
    "id": "q-79",
    "number": 79,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - การทำงานร่วมกันของ Layer 2 และ Layer 3",
    "difficulty": "advanced",
    "question": "เมื่อเครื่อง PC-A (192.168.1.10/24) ส่งแพ็กเก็ตไปยัง เว็บเซิร์ฟเวอร์ภายนอก (8.8.8.8) ผ่าน Default Gateway Router (192.168.1.1/24) ในจังหวะที่เฟรมข้อมูลวิ่งออกจาก พอร์ตของ PC-A ไปยังขาในของ Router ค่า Destination IP Address และ Destination MAC Address ที่ระบุอยู่ใน ส่วนหัวของแพ็กเก็ตและเฟรมนั้นคือข้อใด? (Cloudflare Network Layer)",
    "options": [
      {
        "key": "ก",
        "text": "Destination IP = 192.168.1.1 และ Destination MAC = MAC ของ 8.8.8.8"
      },
      {
        "key": "ข",
        "text": "Destination IP = 8.8.8.8 และ Destination MAC = MAC ของขาใน Default Gateway Router (192.168.1.1)"
      },
      {
        "key": "ค",
        "text": "Destination IP = 8.8.8.8 และ Destination MAC = FF:FF:FF:FF:FF:FF"
      },
      {
        "key": "ง",
        "text": "Destination IP = 192.168.1.1 และ Destination MAC = MAC ของขาใน Default Gateway Router (192.168.1.1)"
      }
    ],
    "answer": "ข",
    "answerText": "Destination IP = 8.8.8.8 และ Destination MAC = MAC ของขาใน Default Gateway Router\n(192.168.1.1)",
    "explanation": "กฎเหล็กของระบบเครือข่าย: Source/Destination IP Address (Layer 3) จะคงเดิม ตั้งแต่ต้นทางถึงปลายทางสุดท้าย (เว้นแต่ถูกแปลงด้วย NAT ที่ขาออกของ Router) แต่ Source/Destination MAC Address (Layer 2) จะเปลี่ยนไปทุกๆ Hop ดังนั้นเมื่อ PC-A พบว่า 8.8.8.8 อยู่คนละวงแลน จึงใส่ Destination IP เป็น 8.8.8.8 แต่จ่าหน้าซองเฟรม (Destination MAC) ไปที่ MAC Address ของ Default Gateway (192.168.1.1)",
    "sourcePage": 45
  },
  {
    "id": "q-80",
    "number": 80,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - การแก้ไขปัญหาเครือข่าย IPv6 & Windows",
    "difficulty": "advanced",
    "question": "จากแนวปฏิบัติของ Cisco CCNA และ Microsoft Learn ข้อใดกล่าวถูกต้องเกี่ยวกับการตั้งค่า IPv4 และ IPv6?",
    "options": [
      {
        "key": "ก",
        "text": "บน Cisco Router การส่งต่อแพ็กเก็ต IPv6 ถูกเปิดไว้โดยค่าเริ่มต้น ไม่ต้องพิมพ์คำสั่งใดๆ"
      },
      {
        "key": "ข",
        "text": "หากเครื่อง Windows ตั้งรับ IPv4 จาก DHCP Server แต่ไม่สามารถติดต่อ DHCP Server ได้เลย เครื่องจะกำหนด IP ช่วง APIPA (169.254.x.x/16) ให้ตนเอง และบน Cisco Router ต้องสั่งเปิด ipv6 unicast-routing ก่อนจึงจะ ทำหน้าที่ส่งต่อแพ็กเก็ต IPv6 ข้ามเครือข่ายได้"
      },
      {
        "key": "ค",
        "text": "ระเบียน DNS ที่ใช้จับคู่ชื่อโดเมนกับหมายเลข IPv6 คือ CNAME Record เท่านั้น"
      },
      {
        "key": "ง",
        "text": "คำสั่ง ipconfig /flushdns ใช้สำหรับขอรับหมายเลข IP Address ใหม่จาก DHCP Server"
      }
    ],
    "answer": "ข",
    "answerText": "หากเครื่อง Windows ตั้งรับ IPv4 จาก DHCP Server แต่ไม่สามารถติดต่อ DHCP Server ได้เลย เครื่อง\nจะกำหนด IP ช่วง APIPA (169.254.x.x/16) ให้ตนเอง และบน Cisco Router ต้องสั่งเปิด ipv6 unicast-\nrouting ก่อนจึงจะทำหน้าที่ส่งต่อแพ็กเก็ต IPv6 ข้ามเครือข่ายได้",
    "explanation": "ตามเอกสาร Cisco Learning Network บน Cisco IOS ค่าเริ่มต้นเปิดเฉพาะ IPv4 routing แต่ต้องพิมพ์คำสั่ง ipv6 unicast-routing เพื่อเปิด IPv6 routing (ส่วนระเบียน DNS ของ IPv6 คือ AAAA Record และคำสั่งขอ IP ใหม่คือ ipconfig /renew)",
    "sourcePage": 45
  },
  {
    "id": "q-81",
    "number": 81,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - สถาปัตยกรรม Kubernetes",
    "difficulty": "advanced",
    "question": "ในระบบจัดการคอนเทนเนอร์ Kubernetes (K8s) ข้อใดอธิบายความสัมพันธ์ ระหว่าง Control Plane, Node และ Pod ได้อย่างถูกต้อง? (Kubernetes Docs)",
    "options": [
      {
        "key": "ก",
        "text": "Pod คือเซิร์ฟเวอร์กายภาพที่ภายในบรรจุ Control Plane หลายตัว"
      },
      {
        "key": "ข",
        "text": "Control Plane ทำหน้าที่บริหารจัดการคลัสเตอร์และจัดตารางงาน (Scheduling) โดยสั่งให้นำ Pod (ซึ่งเป็นหน่วยดี พลอยที่เล็กที่สุดที่บรรจุหนึ่งหรือหลายคอนเทนเนอร์ไว้ด้วยกัน) ไปรันบนเครื่อง Worker Node"
      },
      {
        "key": "ค",
        "text": "Node คือไฟล์ Dockerfile ที่ยังไม่ถูกคอมไพล์"
      },
      {
        "key": "ง",
        "text": "Kubernetes ต้องสร้าง Guest OS Kernel ใหม่ทุกครั้งที่มีการสร้าง Pod"
      }
    ],
    "answer": "ข",
    "answerText": "Control Plane ทำหน้าที่บริหารจัดการคลัสเตอร์และจัดตารางงาน (Scheduling) โดยสั่งให้นำ Pod (ซึ่งเป็น\nหน่วยดีพลอยที่เล็กที่สุดที่บรรจุหนึ่งหรือหลายคอนเทนเนอร์ไว้ด้วยกัน) ไปรันบนเครื่อง Worker Node",
    "explanation": "ตามเอกสาร AWS Kubernetes Cluster Pod คือหน่วยเล็กที่สุดที่รันคอนเทนเนอร์ โดยรันอยู่บนเครื่อง Node และถูก ควบคุมดูแลโดย Control Plane",
    "sourcePage": 45
  },
  {
    "id": "q-82",
    "number": 82,
    "categoryId": "network-cloud",
    "tag": "กลุ่ม 2 - การจับคู่บริการ Cloud 3 ค่ายหลัก",
    "difficulty": "advanced",
    "question": "นักพัฒนาต้องการเลือกใช้บริการ (1) เครื่องเซิร์ฟเวอร์เสมือนระดับ IaaS, (2) พื้นที่เก็บไฟล์แบบ Object Storage และ (3) ระบบประมวลผลโค้ดแบบ Serverless Function (FaaS) บน แพลตฟอร์ม AWS ข้อใดระบุชื่อบริการทั้ง 3 ส่วนได้ถูกต้องตามลำดับ? (AWS Cloud Essentials)",
    "options": [
      {
        "key": "ก",
        "text": "Amazon EC2, Amazon S3, และ AWS Lambda"
      },
      {
        "key": "ข",
        "text": "Amazon S3, Amazon RDS, และ Amazon EKS"
      },
      {
        "key": "ค",
        "text": "Azure VM, Azure Blob Storage, และ Azure Functions"
      },
      {
        "key": "ง",
        "text": "Compute Engine, Cloud Storage, และ BigQuery"
      }
    ],
    "answer": "ก",
    "answerText": "Amazon EC2, Amazon S3, และ AWS Lambda",
    "explanation": "บน AWS: Amazon EC2 = Virtual Server (IaaS), Amazon S3 = Object Storage, และ AWS Lambda = Serverless Functions (FaaS) (ส่วนข้อ ค. เป็นของ Microsoft Azure และข้อ ง. เป็นของ Google Cloud)",
    "sourcePage": 46
  },
  {
    "id": "q-83",
    "number": 83,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - การแทนจำนวนเต็มลบด้วย Two's Complement",
    "difficulty": "advanced",
    "question": "ในระบบคอมพิวเตอร์ที่ใช้เลขฐานสองขนาด 8 บิต แบบ Two's Complement เลขฐานสอง 111101012 มีค่าเท่ากับจำนวนเต็มฐานสิบในข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "-11"
      },
      {
        "key": "ข",
        "text": "-10"
      },
      {
        "key": "ค",
        "text": "-245"
      },
      {
        "key": "ง",
        "text": "+245"
      }
    ],
    "answer": "ก",
    "answerText": "-11",
    "explanation": "เนื่องจากบิตซ้ายสุด (MSB) เป็น 1 จึงเป็นจำนวนเต็มลบ วิธีหาค่าในระบบ Two's Complement: กลับบิตทั้งหมด (1's Complement): จาก 11110101 เป็น 00001010 (8 + 2 = 10) บวกเพิ่มด้วย 1: 00001010 + 1 = 000010112 = 8 + 2 + 1 = 11 ดังนั้น 111101012 จึงแทนค่า -11 (หรือคิดจากน้ำ หนักบิตซ้ายสุด: -128 + 64 + 32 + 16 + 0 + 4 + 0 + 1 = -11)",
    "sourcePage": 46
  },
  {
    "id": "q-84",
    "number": 84,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - การคำนวณ Average Memory Access Time (AMAT)",
    "difficulty": "advanced",
    "question": "ระบบคอมพิวเตอร์เครื่องหนึ่งมีเวลาในการเข้า ถึงหน่วยความจำ L1 Cache (Cache Hit Time) เท่ากับ 2 ns และหากไม่พบข้อมูลในแคชจะต้องเสียเวลาดึงข้อมูลจากหน่วย ความจำหลัก (Cache Miss Penalty) เพิ่มอีก 100 ns หากอัตราการพบข้อมูลในแคช (Cache Hit Rate) เท่ากับ 95% เวลา เฉลี่ยในการเข้าถึงหน่วยความจำ (AMAT = Hit Time + Miss Rate × Miss Penalty) จะมีค่าเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "5 ns"
      },
      {
        "key": "ข",
        "text": "7 ns"
      },
      {
        "key": "ค",
        "text": "52 ns"
      },
      {
        "key": "ง",
        "text": "97 ns"
      }
    ],
    "answer": "ข",
    "answerText": "7 ns",
    "explanation": "อัตราการไม่พบข้อมูลในแคช (Miss Rate) = 1 - 0.95 = 0.05 (5\\%) แทนค่าลงในสูตร: AMAT = 2 ns + (0.05 × 100 ns) = 2 ns + 5 ns = 7 ns",
    "sourcePage": 46
  },
  {
    "id": "q-85",
    "number": 85,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - อัลกอริทึมการจัดตารางงาน CPU (CPU Scheduling)",
    "difficulty": "advanced",
    "question": "กำหนดให้มีโปรเซส 3 ตัว เข้ามาพร้อมกันที่เวลา t = 0 ได้แก่: โปรเซส P1 ใช้เวลาประมวลผล (Burst Time) = 10 ms โปรเซส P2 ใช้เวลาประมวลผล (Burst Time) = 2 ms โปรเซส P3 ใช้เวลาประมวลผล (Burst Time) = 4 ms หากระบบปฏิบัติการใช้อัลกอริทึม SJF (Shortest Job First - Non-preemptive) ค่าเฉลี่ยของเวลารอคอย (Average Waiting Time) ของทั้ง 3 โปรเซสจะเท่ากับกี่มิลลิวินาที?",
    "options": [
      {
        "key": "ก",
        "text": "2.0 ms"
      },
      {
        "key": "ข",
        "text": "2.67 ms"
      },
      {
        "key": "ค",
        "text": "5.33 ms"
      },
      {
        "key": "ง",
        "text": "8.0 ms"
      }
    ],
    "answer": "ข",
    "answerText": "2.67 ms",
    "explanation": "อัลกอริทึม SJF จะเลือกโปรเซสที่ใช้เวลาน้อยที่สุดเข้าทำงานก่อน คือลำดับ P2 (2 ms) → P3 (4 ms) → P1 (10 ms): เวลารอของ P2 = 0 ms (เริ่มทำทันทีที่ t=0 เสร็จที่ t=2) เวลารอของ P3 = 2 ms (เริ่มทำที่ t=2 เสร็จที่ t=6) เวลารอของ P1 = 6 ms (เริ่มทำที่ t=6 เสร็จที่ t=16) ค่าเฉลี่ยเวลารอคอย = (0 + 2 + 6) / (3) = (8) / (3) ≈ 2.67 ms",
    "sourcePage": 47
  },
  {
    "id": "q-86",
    "number": 86,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - เงื่อนไขการเกิด Deadlock",
    "difficulty": "advanced",
    "question": "ในระบบปฏิบัติการ การเกิดภาวะติดตาย (Deadlock) จะเกิดขึ้นได้ก็ต่อเมื่อมี เงื่อนไขของ Coffman ครบทั้ง 4 ข้อพร้อมกัน หากวิศวกรระบบออกแบบให้ \"เมื่อโปรเซสใดขอทรัพยากรเพิ่มแล้วไม่ได้รับทันที โปรเซสนั้นต้องปล่อยทรัพยากรทั้งหมดที่ถือครองอยู่ออกมาก่อน\" เป็นการป้องกัน Deadlock โดยการทำลายเงื่อนไขข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "Mutual Exclusion"
      },
      {
        "key": "ข",
        "text": "Hold and Wait"
      },
      {
        "key": "ค",
        "text": "Circular Wait"
      },
      {
        "key": "ง",
        "text": "Thrashing"
      }
    ],
    "answer": "ข",
    "answerText": "Hold and Wait",
    "explanation": "เงื่อนไข Hold and Wait คือการที่โปรเซสถือครองทรัพยากรหนึ่งไว้แล้วรอคอย ขออีกทรัพยากรหนึ่ง การบังคับให้ปล่อยทรัพยากรที่ถืออยู่หากขอเพิ่มไม่สำเร็จจึงเป็นการทำลายเงื่อนไข Hold and Wait โดยตรง",
    "sourcePage": 47
  },
  {
    "id": "q-87",
    "number": 87,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - การคำนวณขนาดไฟล์ภาพไม่บีบอัด",
    "difficulty": "advanced",
    "question": "ภาพดิจิทัลแบบ Bitmap ที่ไม่มีการบีบอัดข้อมูล มีความละเอียด 1,920 × 1,080 พิกเซล (Full HD) และใช้ความลึกสีระดับ 24-bit True Color (RGB ช่องสีละ 8 บิต) จะมีขนาดข้อมูลเฉพาะส่วน พิกเซลกี่ไบต์ (Bytes)?",
    "options": [
      {
        "key": "ก",
        "text": "2,073,600 ไบต์"
      },
      {
        "key": "ข",
        "text": "6,220,800 ไบต์"
      },
      {
        "key": "ค",
        "text": "16,588,800 ไบต์"
      },
      {
        "key": "ง",
        "text": "49,766,400 ไบต์"
      }
    ],
    "answer": "ข",
    "answerText": "6,220,800 ไบต์",
    "explanation": "ความลึกสี 24 bits = 24 ÷ 8 = 3 Bytes ต่อ 1 พิกเซล จำนวนพิกเซลทั้งหมด = 1,920 × 1,080 = 2,073,600 พิกเซล ดังนั้นขนาดข้อมูล = 2,073,600 × 3 = 6,220,800 ไบต์ (ประมาณ 5.93 MiB)",
    "sourcePage": 47
  },
  {
    "id": "q-88",
    "number": 88,
    "categoryId": "hardware-os",
    "tag": "กลุ่ม 3 - ความจุและสมรรถนะของ RAID 5",
    "difficulty": "advanced",
    "question": "หากนำ SSD ขนาดความจุลูกละ 2 TB จำนวน 4 ลูก มาต่อเป็นอาร์เรย์ แบบ RAID 5 พื้นที่ความจุรวมที่สามารถนำมาเก็บข้อมูลได้จริง (Usable Capacity) จะเท่ากับกี่ TB และระบบสามารถทนทานต่อ การที่ SSD เสียหายพร้อมกันได้สูงสุดกี่ลูกโดยที่ข้อมูลไม่สูญหาย?",
    "options": [
      {
        "key": "ก",
        "text": "ความจุใช้งานจริง 8 TB / ทนดิสก์เสียได้ 0 ลูก"
      },
      {
        "key": "ข",
        "text": "ความจุใช้งานจริง 4 TB / ทนดิสก์เสียได้ 2 ลูก"
      },
      {
        "key": "ค",
        "text": "ความจุใช้งานจริง 6 TB / ทนดิสก์เสียได้ 1 ลูก"
      },
      {
        "key": "ง",
        "text": "ความจุใช้งานจริง 2 TB / ทนดิสก์เสียได้ 3 ลูก"
      }
    ],
    "answer": "ค",
    "answerText": "ความจุใช้งานจริง 6 TB / ทนดิสก์เสียได้ 1 ลูก",
    "explanation": "สูตรความจุใช้งานจริงของ RAID 5 สำหรับดิสก์ N ลูก คือ (N - 1) × S = (4 - 1) × 2 TB = 6 TB โดยเสียพื้นที่เทียบเท่า 1 ลูกเพื่อเก็บค่า Distributed Parity และสามารถ ทนต่อการที่ดิสก์เสียได้สูงสุด 1 ลูก",
    "sourcePage": 48
  },
  {
    "id": "q-89",
    "number": 89,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ฟังก์ชันเวียนเกิด 2 แขนงและ Call Tree",
    "difficulty": "advanced",
    "question": "พิจารณาฟังก์ชันในภาษา Python ต่อไปนี้: def calc(n): if n <= 1: return n return calc(n - 1) + calc(n - 2) + 1 เมื่อเรียกใช้ calc(4) จะได้ค่าผลลัพธ์เท่ากับเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "3"
      },
      {
        "key": "ข",
        "text": "5"
      },
      {
        "key": "ค",
        "text": "7"
      },
      {
        "key": "ง",
        "text": "9"
      }
    ],
    "answer": "ค",
    "answerText": "7",
    "explanation": "คำนวณจากล่างขึ้นบน (Bottom-up): calc(0) = 0 calc(1) = 1 calc(2) = calc(1) + calc(0) + 1 = 1 + 0 + 1 = 2 calc(3) = calc(2) + calc(1) + 1 = 2 + 1 + 1 = 4 calc(4) = calc(3) + calc(2) + 1 = 4 + 2 + 1 = 7",
    "sourcePage": 48
  },
  {
    "id": "q-90",
    "number": 90,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ลูป For-Else และคำสั่ง Continue/Break ใน Python",
    "difficulty": "advanced",
    "question": "พิจารณาโค้ดภาษา Python ต่อไปนี้: total = 0 for x in range(1, 7): if x % 2 == 0: continue if x > 5: break total += x else: total += 10 print(total) ผลลัพธ์ที่แสดงออกทางหน้าจอคือข้อใด? (Python Control Flow Docs)",
    "options": [
      {
        "key": "ก",
        "text": "9"
      },
      {
        "key": "ข",
        "text": "19"
      },
      {
        "key": "ค",
        "text": "15"
      },
      {
        "key": "ง",
        "text": "25"
      }
    ],
    "answer": "ข",
    "answerText": "19",
    "explanation": "range(1, 7) ให้ค่า x = 1, 2, 3, 4, 5, 6 เมื่อ x เป็นเลขคู่ (2, 4, 6) จะเข้าเงื่อนไข if x % 2 == 0: continue จึงข้ามกลับไปเริ่มรอบถัดไปทันที (ทำให้เมื่อ x = 6 ถูก continue ข้ามไปก่อน จึง ไม่เคยถึงคำสั่ง if x > 5: break!) เมื่อ x เป็นเลขคี่ (1, 3, 5) จะถูกบวกเข้า total ได้ 1 + 3 + 5 = 9 ตามเอกสารทางการของ Python Control Flow บล็อก else ของลูป for จะทำงานเมื่อลูปจบลงตามปกติโดย ไม่ถูก ขัดจังหวะด้วย break ดังนั้นจึงทำ total += 10 รวมเป็น 9 + 10 = 19",
    "sourcePage": 48
  },
  {
    "id": "q-91",
    "number": 91,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - การวิเคราะห์ความซับซ้อนเมื่อตัวแปรลูปคูณสอง",
    "difficulty": "advanced",
    "question": "พิจารณาส่วนของอัลกอริทึมต่อไปนี้: steps = 0 i = 1 while i < n: for j in range(n): steps += 1 i = i * 2 ความซับซ้อนของเวลา (Time Complexity) ของโค้ดข้างต้นในรูปสัญกรณ์ Big O คือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "O(n)"
      },
      {
        "key": "ข",
        "text": "O(log n)"
      },
      {
        "key": "ค",
        "text": "O(n log n)"
      },
      {
        "key": "ง",
        "text": "O(n2)"
      }
    ],
    "answer": "ค",
    "answerText": "O(n log n)",
    "explanation": "ลูปชั้นนอก (while i < n) ปรับค่า i = i * 2 ในแต่ละรอบ (1, 2, 4, 8, ..., 2k ≥ n) จึงทำงานเพียง ⌈ log2 n ⌉ รอบ ส่วนในแต่ละรอบมีลูปชั้นใน (for j in range(n)) ที่ทำงาน n ครั้ง ดังนั้นจำนวนครั้ง รวมคือ n × log2 n = O(n log n)",
    "sourcePage": 49
  },
  {
    "id": "q-92",
    "number": 92,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - จำนวนครั้งการเปรียบเทียบสูงสุดของ Binary Search",
    "difficulty": "advanced",
    "question": "หากฐานข้อมูลมีรายชื่อนักศึกษาที่เรียงลำดับตาม รหัสประจำตัวแล้วจำนวน 1,000,000 (หนึ่งล้าน) รายการ การค้นหารหัสนักศึกษาคนหนึ่งด้วยอัลกอริทึม Binary Search ใน กรณีแย่ที่สุด (Worst Case) จะต้องทำการเปรียบเทียบค่าในอาเรย์ไม่เกินกี่ครั้ง?",
    "options": [
      {
        "key": "ก",
        "text": "20 ครั้ง"
      },
      {
        "key": "ข",
        "text": "1,000 ครั้ง"
      },
      {
        "key": "ค",
        "text": "500,000 ครั้ง"
      },
      {
        "key": "ง",
        "text": "1,000,000 ครั้ง"
      }
    ],
    "answer": "ก",
    "answerText": "20 ครั้ง",
    "explanation": "จำนวนครั้งการเปรียบเทียบสูงสุดของ Binary Search คือ ⌊ log2 n ⌋ + 1 เนื่องจาก 210 = 1,024 ≈ 103 ดังนั้น 220 = (210)2 = 1,048,576 > 1,000,000 จึงใช้การเปรียบเทียบสูงสุดไม่เกิน 20 ครั้ง!",
    "sourcePage": 49
  },
  {
    "id": "q-93",
    "number": 93,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - การวิเคราะห์วงจรลอจิกเกตผสม",
    "difficulty": "advanced",
    "question": "กำหนดวงจรดิจิทัลที่มีอินพุต 3 ตัว คือ A = 1, B = 0, C = 1 โดยต่อเข้า กับลอจิกเกตตามสมการบูลีน: Y = NOT((A ⊕ B) · (\\overline{B + C))} ค่าเอาต์พุต Y ของวงจรนี้มีค่าเท่ากับข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "0"
      },
      {
        "key": "ข",
        "text": "1"
      },
      {
        "key": "ค",
        "text": "ไม่สามารถหาค่าได้"
      },
      {
        "key": "ง",
        "text": "สลับไปมาระหว่าง 0 กับ 1"
      }
    ],
    "answer": "ข",
    "answerText": "1",
    "explanation": "แทนค่า A=1, B=0, C=1 ลงในสมการทีละส่วน: A ⊕ B (XOR): 1 ⊕ 0 = 1 NOT(B + C) (NOR): B + C = 0 + 1 = 1 เมื่อใส่ NOT (NOT(1)) จะได้ 0 นำทั้งสองวงเล็บมาทำ AND กัน: 1 · 0 = 0 ใส่ NOT คลุมทั้งหมด (NOT(0)) ของ NAND สุดท้าย ได้ผลลัพธ์ Y = 1",
    "sourcePage": 49
  },
  {
    "id": "q-94",
    "number": 94,
    "categoryId": "programming-algo",
    "tag": "กลุ่ม 4 - ความเข้าใจเรื่อง Mutable Default Argument และ Reference ใน Python",
    "difficulty": "advanced",
    "question": "พิจารณาโค้ดภาษา Python ต่อไปนี้: a = [10, 20, 30] b = a b.append(40) c = a[:] c.append(50) print(len(a), a[-1]) ผลลัพธ์ที่แสดงออกทางหน้าจอคือข้อใด?",
    "options": [
      {
        "key": "ก",
        "text": "3 30"
      },
      {
        "key": "ข",
        "text": "4 40"
      },
      {
        "key": "ค",
        "text": "5 50"
      },
      {
        "key": "ง",
        "text": "4 50"
      }
    ],
    "answer": "ข",
    "answerText": "4 40",
    "explanation": "คำสั่ง b = a ไม่ได้คัดลอกลิสต์ใหม่ แต่ให้ตัวแปร b ชี้ไปยังอ็อบเจกต์ลิสต์ตัวเดียวกับ a ในหน่วยความจำ ดังนั้นเมื่อทำ b.append(40) ลิสต์ a จึงเปลี่ยนเป็น [10, 20, 30, 40] ด้วย (Python Control Flow & Lists) คำสั่ง c = a[:] เป็นการทำ Shallow Copy สร้างลิสต์ใบใหม่แยกต่างหาก ดังนั้น c.append(50) จึงไม่กระทบกับ a ดังนั้น len(a) จึงเท่ากับ 4 และตัวสุดท้าย a[-1] คือ 40",
    "sourcePage": 50
  },
  {
    "id": "q-95",
    "number": 95,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - การคำนวณ F1-Score และวิเคราะห์ Imbalanced Dataset",
    "difficulty": "advanced",
    "question": "ระบบ AI ตรวจจับธุรกรรมบัตรเครดิตต้อง สงสัย ทดสอบกับข้อมูลธุรกรรม 10,000 รายการ (โดยมีธุรกรรมทุจริตจริง 100 รายการ และธุรกรรมปกติ 9,900 รายการ) โมเดลทำนายผลดังนี้: ตรวจจับธุรกรรมทุจริตได้ถูกต้อง (TP) = 60 รายการ ทายผิดว่าธุรกรรมปกติเป็นทุจริต (FP) = 40 รายการ ปล่อยให้ธุรกรรมทุจริตหลุดรอดไปได้ (FN) = 40 รายการ ทายธุรกรรมปกติได้ถูกต้อง (TN) = 9,860 รายการ ค่า Precision, Recall และ F1-Score ของโมเดลนี้สำหรับคลาส ทุจริตมีค่าเท่าใด? (Google ML Glossary)",
    "options": [
      {
        "key": "ก",
        "text": "Precision = 60%, Recall = 60%, และ F1-Score = 60% (0.60)"
      },
      {
        "key": "ข",
        "text": "Precision = 99.2%, Recall = 60%, และ F1-Score = 75% (0.75)"
      },
      {
        "key": "ค",
        "text": "Precision = 60%, Recall = 99.2%, และ F1-Score = 75% (0.75)"
      },
      {
        "key": "ง",
        "text": "Precision = 40%, Recall = 60%, และ F1-Score = 48% (0.48)"
      }
    ],
    "answer": "ก",
    "answerText": "Precision = 60%, Recall = 60%, และ F1-Score = 60% (0.60)",
    "explanation": "Precision = (TP) / (TP + FP) = (60) / (60 + 40) = (60) / (100) = 0.60 (60%) Recall = (TP) / (TP + FN) = (60) / (60 + 40) = (60) / (100) = 0.60 (60%) F1-Score = 2 × (0.60 × 0.60) / (0.60 + 0.60) = 0.60 (60%) (สังเกตว่าแม้ค่า Accuracy รวมจะสูงถึง (60+9860) / (10000) = 99.2\\% แต่ประสิทธิภาพจริงในการจับทุจริตวัดจาก F1-Score ได้เพียง 60%)",
    "sourcePage": 50
  },
  {
    "id": "q-96",
    "number": 96,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - การคำนวณเอาต์พุตของ Neuron และ Activation Function",
    "difficulty": "advanced",
    "question": "โหนดประสาทเทียม (Artificial Neuron) โหนดหนึ่งรับค่าอินพุต 3 ตัว คือ x1 = 2.0, x2 = -1.0, x3 = 3.0 โดยมีค่าน้ำหนักกำกับคือ w1 = 0.5, w2 = 2.0, w3 = -1.0 และมีค่าไบแอส b = 1.5 หากโหนดนี้ใช้ฟังก์ชันกระตุ้นแบบ ReLU (Rectified Linear Unit: f(z) = max(0, z)) ค่าเอาต์พุตที่ ได้จากโหนดนี้จะมีค่าเท่าใด? (IBM Neural Networks)",
    "options": [
      {
        "key": "ก",
        "text": "-2.5"
      },
      {
        "key": "ข",
        "text": "0.0"
      },
      {
        "key": "ค",
        "text": "1.5"
      },
      {
        "key": "ง",
        "text": "2.5"
      }
    ],
    "answer": "ข",
    "answerText": "0.0",
    "explanation": "คำนวณผลรวมถ่วงน้ำหนัก z = (x1 w1 + x2 w2 + x3 w3) + b: z = (2.0 × 0.5) + (-1.0 × 2.0) + (3.0 × -1.0) + 1.5 = 1.0 - 2.0 - 3.0 + 1.5 = -2.5 1. ส่งผ่านฟังก์ชัน ReLU: f(-2.5) = max(0, -2.5) = 0.0",
    "sourcePage": 51
  },
  {
    "id": "q-97",
    "number": 97,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - การคำนวณ Cosine Similarity ของ Vector Embeddings",
    "difficulty": "advanced",
    "question": "ในระบบ Vector Database สำหรับทำ Semantic Search กำหนดให้เวกเตอร์ Embedding ของคำค้นหา A = [3, 4] และเวกเตอร์ของเอกสาร B = [6, 8] ค่าความ คล้ายคลึงเชิงมุม (Cosine Similarity: cosθ = (A · B) / (|A| |B|)) ระหว่างเวกเตอร์ทั้งสองมีค่าเท่าใด?",
    "options": [
      {
        "key": "ก",
        "text": "0.0"
      },
      {
        "key": "ข",
        "text": "0.5"
      },
      {
        "key": "ค",
        "text": "0.8"
      },
      {
        "key": "ง",
        "text": "1.0"
      }
    ],
    "answer": "ง",
    "answerText": "1.0",
    "explanation": "ผลคูณจุด (Dot Product): A · B = (3 × 6) + (4 × 8) = 18 + 32 = 50 ขนาดของเวกเตอร์: |A| = √(32 + 42) = √(25) = 5 และ |B| = √(62 + 82) = √(100) = 10 ดังนั้น cosθ = (50) / (5 × 10) = (50) / (50) = 1.0 (หรือสังเกตได้ทันทีว่า B = 2A คือชี้ไปในทิศทางเดียวกันทุกประการ มุมระหว่างเวกเตอร์เป็น 0° จึงมีค่า Cosine Similarity สูงสุดเท่ากับ 1.0)",
    "sourcePage": 51
  },
  {
    "id": "q-98",
    "number": 98,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - ความปลอดภัยในสถาปัตยกรรม RAG",
    "difficulty": "advanced",
    "question": "จากเอกสารทางเทคนิคของ IBM เรื่อง Retrieval-Augmented Generation (RAG) ข้อใดระบุข้อได้เปรียบด้านความปลอดภัยของข้อมูลและความเสี่ยงที่องค์กรต้องระวังในระบบ RAG ได้ถูก ต้องที่สุด?",
    "options": [
      {
        "key": "ก",
        "text": "RAG บังคับให้ต้องนำข้อมูลความลับของลูกค้าไปฝังรวมในพารามิเตอร์ของโมเดลสาธารณะเสมอ"
      },
      {
        "key": "ข",
        "text": "RAG ช่วยแยกข้อมูลภายในองค์กรออกจากชุดข้อมูลฝึกสอนของโมเดล (ทำให้เพิกถอนสิทธิ์การเข้าถึงได้ทันที) แต่หากฐาน ข้อมูล Vector Database ไม่ได้รับการเข้ารหัสและถูกเจาะระบบ ผู้โจมตีอาจย้อนกลับกระบวนการ Vector Embedding (Embedding Inversion) เพื่อกู้คืนข้อมูลต้นฉบับได้"
      },
      {
        "key": "ค",
        "text": "Vector Database ไม่จำเป็นต้องมีการควบคุมสิทธิ์การเข้าถึงเพราะเวกเตอร์ตัวเลขไม่สามารถแปลงกลับเป็นข้อความได้ เลยในทุกกรณี"
      },
      {
        "key": "ง",
        "text": "การใช้ RAG ทำให้โมเดลไม่ต้องใช้ GPU ในการทำ Inference อีกต่อไป"
      }
    ],
    "answer": "ข",
    "answerText": "RAG ช่วยแยกข้อมูลภายในองค์กรออกจากชุดข้อมูลฝึกสอนของโมเดล (ทำให้เพิกถอนสิทธิ์การเข้าถึงได้\nทันที) แต่หากฐานข้อมูล Vector Database ไม่ได้รับการเข้ารหัสและถูกเจาะระบบ ผู้โจมตีอาจย้อนกลับกระบวนการ\nVector Embedding (Embedding Inversion) เพื่อกู้คืนข้อมูลต้นฉบับได้",
    "explanation": "ตามเอกสาร IBM RAG - Greater data security จุดเด่นของ RAG คือการไม่นำข้อมูลองค์กรไปเทรนฝังในโมเดล แต่ต้องระวังการเข้ารหัส Vector Database เพราะหากรั่วไหลอาจถูกทำ Embedding Inversion ได้",
    "sourcePage": 51
  },
  {
    "id": "q-99",
    "number": 99,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - GraphRAG vs Vector RAG",
    "difficulty": "advanced",
    "question": "ในสถาปัตยกรรม AI สมัยใหม่ปี 2025–2026 เทคนิค GraphRAG ที่ผสาน โครงสร้างกราฟความรู้ (Knowledge Graph) เข้ากับ Vector Embeddings (Vector + Graph Hybrid) เข้ามาช่วยแก้ข้อ จำกัดใดของระบบ RAG แบบค้นหาเวกเตอร์ปกติเพียงอย่างเดียว?",
    "options": [
      {
        "key": "ก",
        "text": "ช่วยลดขนาดของฮาร์ดดิสก์ลงจนเหลือศูนย์ไบต์"
      },
      {
        "key": "ข",
        "text": "ช่วยให้ระบบสามารถเข้าใจและเชื่อมโยงความสัมพันธ์เชิงโครงสร้างหลายทอด (Multi-hop relationships) ระหว่างเอนทิ ตีต่างๆ ที่กระจายอยู่ในเอกสารหลายฉบับ ซึ่งการค้นหาด้วยความคล้ายคลึงของเวกเตอร์ (Semantic Search) เพียงอย่าง เดียวมักจับความสัมพันธ์ข้ามเอกสารได้ไม่ครบถ้วน"
      },
      {
        "key": "ค",
        "text": "ช่วยเปลี่ยนโมเดลภาษาให้กลายเป็นระบบปฏิบัติการ Linux"
      },
      {
        "key": "ง",
        "text": "ใช้สำหรับแปลงไฟล์เสียงให้เป็นสายสัญญาณไฟเบอร์ออปติก"
      }
    ],
    "answer": "ข",
    "answerText": "ช่วยให้ระบบสามารถเข้าใจและเชื่อมโยงความสัมพันธ์เชิงโครงสร้างหลายทอด (Multi-hop relationships)\nระหว่างเอนทิตีต่างๆ ที่กระจายอยู่ในเอกสารหลายฉบับ ซึ่งการค้นหาด้วยความคล้ายคลึงของเวกเตอร์ (Semantic\nSearch) เพียงอย่างเดียวมักจับความสัมพันธ์ข้ามเอกสารได้ไม่ครบถ้วน",
    "explanation": "ตามเอกสาร AWS What is GraphRAG การผสาน Vector + Graph Hybrid ช่วยให้ได้ทั้งความสามารถในการค้นหาความหมายใกล้เคียง (Semantic Search) และการไล่ความสัมพันธ์ระหว่างโหนดเอนทิตี (Graph Traversal)",
    "sourcePage": 52
  },
  {
    "id": "q-100",
    "number": 100,
    "categoryId": "ai-datascience",
    "tag": "กลุ่ม 5 - จำนวนพารามิเตอร์ของชั้น Fully Connected Layer",
    "difficulty": "advanced",
    "question": "โครงข่ายประสาทเทียมชั้นหนึ่งเป็นแบบ Fully Connected (Dense) Layer ที่รับอินพุตขนาด 128 โหนด และส่งออกไปยังชั้นถัดไปที่มี 64 โหนด โดยทุกโหนดในชั้นถัดไปมี ค่า Bias (b) ประจำโหนดของตนเอง จำนวนพารามิเตอร์ที่ต้องฝึกสอน (Trainable Parameters: Weights + Biases) ทั้งหมดของชั้นนี้มีค่าเท่ากับเท่าใด? (IBM Neural Networks)",
    "options": [
      {
        "key": "ก",
        "text": "192 พารามิเตอร์"
      },
      {
        "key": "ข",
        "text": "8,192 พารามิเตอร์"
      },
      {
        "key": "ค",
        "text": "8,256 พารามิเตอร์"
      },
      {
        "key": "ง",
        "text": "16,384 พารามิเตอร์"
      }
    ],
    "answer": "ค",
    "answerText": "8,256 พารามิเตอร์",
    "explanation": "สูตรคำนวณพารามิเตอร์ของชั้น Dense Layer ที่มีอินพุต Nin และเอาต์พุต Nout คือ: Parameters = (Nin × Nout) + Nout = (128 × 64) + 64 = 8,192 + 64 = 8,256 พารามิเตอร์ 6. Advanced Questions — โจทย์วิเคราะห์และบูรณาการระดับสูง (สำหรับรอบชิงชนะ เลิศ) ในรอบชิงชนะเลิศ (Final Round) ซึ่งคัดเหลือเพียง 10 ทีมสุดท้ายจาก 100 ทีม (UTCC STECH) โจทย์มักต้องการการคิด วิเคราะห์แบบบูรณาการข้ามกลุ่มวิชา โจทย์วิเคราะห์ 5 ข้อต่อไปนี้ออกแบบมาเพื่อฝึกทักษะการแก้ปัญหาเชิงลึกของทีม ที่",
    "sourcePage": 52
  }
];

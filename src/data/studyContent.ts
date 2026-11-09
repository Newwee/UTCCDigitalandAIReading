import { CategoryInfo, StudyTopic } from '../types';

/**
 * 5 หมวดหมู่ความรู้หลัก ตามเกณฑ์การแข่งขัน UTCC Digital and AI Challenge 2026
 * คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยหอการค้าไทย ร่วมกับ สมาคมโปรแกรมเมอร์ไทย และ AIAT
 * อ้างอิงจาก UTCC Digital and AI Challenge 2026 Study Guide (ตารางที่ 1 หน้า 1)
 */
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'general-it',
    nameTh: 'กลุ่มที่ 1: ความรู้ทั่วไปด้านไอทีและโทรคมนาคม',
    nameEn: 'General Knowledge & IT Trends',
    iconName: 'Globe',
    description: 'ประวัติศาสตร์คอมพิวเตอร์ Von Neumann, 5 ยุคคอมพิวเตอร์, Quantum Computing, Wi-Fi 7, CIA Triad, Zero Trust, ภัยคุกคามทางไซเบอร์, กฎหมาย PDPA และรางวัลโนเบลปี 2024 ด้าน AI',
    color: '#35D5F2'
  },
  {
    id: 'network-cloud',
    nameTh: 'กลุ่มที่ 2: เครือข่าย โครงสร้างพื้นฐาน และ Cloud',
    nameEn: 'Network, Infrastructure & Cloud',
    iconName: 'Network',
    description: 'แบบจำลอง OSI 7 Layers vs TCP/IP, อุปกรณ์เครือข่าย, การคำนวณ Subnet Mask, CIDR, IPv4/IPv6, โปรโตคอล DNS, DHCP, NAT, Cloud Service Models (IaaS/PaaS/SaaS) และ Containerization',
    color: '#8B7CFF'
  },
  {
    id: 'hardware-os',
    nameTh: 'กลุ่มที่ 3: สถาปัตยกรรมฮาร์ดแวร์และระบบปฏิบัติการ',
    nameEn: 'Hardware & Operating Systems',
    iconName: 'Cpu',
    description: 'การทำงานของ CPU, Machine Cycle, แคช L1-L3, AMAT, หน่วยความจำ RAM/SSD, RAID, โครงสร้างระบบปฏิบัติการ Kernel, Process Scheduling, Virtual Memory, Linux Commands และระบบตัวเลข',
    color: '#53DBAB'
  },
  {
    id: 'programming-algo',
    nameTh: 'กลุ่มที่ 4: การเขียนโปรแกรม และอัลกอริทึม',
    nameEn: 'Programming & Algorithms',
    iconName: 'Code',
    description: 'การคิดเชิงคำนวณ, สัญลักษณ์ผังงาน Flowchart มาตรฐาน ANSI/ISO, ภาษาเทียม Pseudocode, โครงสร้างควบคุม, แถวลำดับ Array, Big-O Complexity, Sorting & Searching, พีชคณิตบูลีน และ Dynamic Programming',
    color: '#F59E0B'
  },
  {
    id: 'ai-datascience',
    nameTh: 'กลุ่มที่ 5: ปัญญาประดิษฐ์ และวิทยาศาสตร์ข้อมูล',
    nameEn: 'AI, Machine Learning & Data Science',
    iconName: 'BrainCircuit',
    description: 'ระดับของ AI (ANI/AGI/ASI), การเรียนรู้ Supervised/Unsupervised/RL, การเตรียมข้อมูล Preprocessing, Confusion Matrix, Neural Networks, Backpropagation, LLMs, Transformer, RAG และ Quantization',
    color: '#EC4899'
  }
];

/**
 * บทเรียนฉบับสมบูรณ์ แปลงจากเอกสาร UTCC Digital and AI Challenge 2026 Study Guide ทั้ง 57 หน้า
 * ครอบคลุม 5 กลุ่มวิชา + โจทย์อัตนัยวิเคราะห์เชิงลึกรอบชิงชนะเลิศ + กลยุทธ์การจัดทีม
 * ทุกบทเรียนระบุหมายเลขหน้าอ้างอิงตรงกับ PDF ต้นฉบับอย่างแท้จริง
 */
export const STUDY_TOPICS: StudyTopic[] = [
  {
    id: 'lesson-general-it',
    lessonNumber: 1,
    title: 'กลุ่มที่ 1: ความรู้ทั่วไปด้านคอมพิวเตอร์ เทคโนโลยีสารสนเทศ และข่าวสารยุคดิจิทัล',
    category: 'general-it',
    description: 'ประวัติศาสตร์คอมพิวเตอร์ Von Neumann Architecture, 5 ยุคคอมพิวเตอร์, Quantum Computing, Wi-Fi 7, CIA Triad, Zero Trust Architecture, ภัยคุกคามไซเบอร์, กฎหมาย PDPA และรางวัลโนเบลปี 2024 ด้าน AI',
    tags: ['Von Neumann', '5 ยุคคอมพิวเตอร์', 'Quantum', 'Wi-Fi 7', 'CIA Triad', 'Zero Trust', 'PDPA', 'โนเบล 2024'],
    readingTime: 18,
    updatedAt: '2026-11-09',
    sourcePages: 'หน้า 2–5',
    sections: [
      {
        id: 'sec-1-1',
        title: '1.1 ประวัติศาสตร์คอมพิวเตอร์และสถาปัตยกรรม Von Neumann',
        content: `รากฐานของคอมพิวเตอร์สมัยใหม่เริ่มต้นจากเครื่อง Analytical Engine ที่ออกแบบโดย Charles Babbage ในปี ค.ศ. 1837 โดยมี Ada Lovelace เป็นผู้เขียนขั้นตอนวิธี (Algorithm) สำหรับคำนวณตัวเลขเบอร์นูลลี จึงได้รับการยกย่องเป็น "โปรแกรมเมอร์คนแรกของโลก"

หัวใจสำคัญของสถาปัตยกรรมคอมพิวเตอร์ในปัจจุบันคือ Von Neumann Architecture ซึ่งเสนอขึ้นโดย John von Neumann ในปี ค.ศ. 1945 สถาปัตยกรรมนี้มีลักษณะเด่นคือ "จัดเก็บทั้งคำสั่งโปรแกรม (Instructions) และข้อมูล (Data) ไว้ในหน่วยความจำหลัก (RAM) เดียวกัน" ในรูปแบบเลขฐานสอง และใช้บัสชุดเดียวกันในการรับส่งข้อมูล ทำให้โครงสร้างเครื่องเรียบง่ายแต่มีคอขวดที่เรียกว่า "Von Neumann Bottleneck" เมื่อความเร็ว CPU สูงกว่าความเร็วบัสของหน่วยความจำ`,
        keyTakeaways: [
          'Charles Babbage เป็นผู้ออกแบบ Analytical Engine; Ada Lovelace เป็นโปรแกรมเมอร์คนแรกของโลก',
          'Von Neumann Architecture จัดเก็บคำสั่งและข้อมูลไว้ในหน่วยความจำหลัก (RAM) เดียวกันในรูปเลขฐานสอง',
          'Von Neumann Bottleneck เกิดจากขีดจำกัดความเร็วการส่งข้อมูลระหว่าง CPU กับ RAM ผ่านบัสชุดเดียวกัน'
        ],
        callouts: [
          {
            type: 'exam',
            title: 'ข้อสอบมักเปรียบเทียบ Harvard Architecture vs Von Neumann',
            content: 'สถาปัตยกรรม Harvard จะแยกหน่วยความจำและบัสของคำสั่งออกจากบัสของข้อมูล (มักใช้ใน DSP และไมโครคอนโทรลเลอร์ขนาดเล็ก) ส่วน Von Neumann รวมคำสั่งและข้อมูลไว้ในหน่วยความจำเดียวกัน'
          }
        ]
      },
      {
        id: 'sec-1-2',
        title: '1.2 วิวัฒนาการ 5 ยุคของคอมพิวเตอร์',
        content: `การแบ่งยุคของคอมพิวเตอร์ทั้ง 5 ยุคจำแนกตามเทคโนโลยีฮาร์ดแวร์หลักที่ใช้ในการประมวลผลและการจัดเก็บข้อมูล ดังแสดงในตารางที่ 2:`,
        tables: [
          {
            caption: 'ตารางที่ 2: สรุป 5 ยุคของคอมพิวเตอร์และเทคโนโลยีฮาร์ดแวร์หลัก (อ้างอิง Study Guide หน้า 3)',
            headers: ['ยุค (Generation)', 'ช่วงปี ค.ศ.', 'เทคโนโลยีประมวลผลหลัก', 'หน่วยความจำ / สื่อบันทึก', 'ภาษาโปรแกรม', 'ตัวอย่างเครื่องสำคัญ'],
            rows: [
              ['ยุคที่ 1', '1940–1956', 'หลอดสุญญากาศ (Vacuum Tubes)', 'Magnetic Drums, Magnetic Tape', 'ภาษาเครื่อง (Machine Code), Assembly', 'ENIAC, EDVAC, UNIVAC I'],
              ['ยุคที่ 2', '1956–1963', 'ทรานซิสเตอร์ (Transistors)', 'Magnetic Core Memory', 'ภาษาระดับสูงยุคแรก: FORTRAN, COBOL', 'IBM 7094, IBM 1401'],
              ['ยุคที่ 3', '1964–1971', 'แผงวงจรรวม (Integrated Circuit - IC)', 'Semiconductor Memory, แผ่นดิสก์แม่เหล็ก', 'BASIC, Pascal, C ยุคเริ่มต้น', 'IBM System/360, PDP-8'],
              ['ยุคที่ 4', '1971–ปัจจุบัน', 'ไมโครโปรเซสเซอร์ (VLSI, ULSI Microprocessors)', 'RAM (DRAM, SRAM), SSD, Flash', 'C, C++, Java, Python, JavaScript', 'Intel 4004, IBM PC, Apple Macintosh'],
              ['ยุคที่ 5', 'ปัจจุบัน–อนาคต', 'ปัญญาประดิษฐ์ (AI), ควอนตัม (Quantum Computing)', 'High-Bandwidth Memory (HBM), Optical, Qubits', 'ภาษา AI ยุคใหม่, Quantum Frameworks', 'Supercomputers (Frontier), Quantum Chips (Sycamore)']
            ]
          }
        ],
        callouts: [
          {
            type: 'tip',
            title: 'สูตรจำไว: หลอด -> ทราน -> ไอซี -> ไมโคร -> AI/ควอนตัม',
            content: 'ยุค 1: หลอดสุญญากาศ | ยุค 2: ทรานซิสเตอร์ | ยุค 3: วงจรรวม (IC) | ยุค 4: ไมโครโปรเซสเซอร์ (LSI/VLSI) | ยุค 5: ปัญญาประดิษฐ์และคอมพิวเตอร์ควอนตัม'
          }
        ]
      },
      {
        id: 'sec-1-3',
        title: '1.3 เทคโนโลยีร่วมสมัย: Quantum Computing และ Wi-Fi 7',
        content: `• Quantum Computing: คอมพิวเตอร์ดั้งเดิมเก็บข้อมูลเป็นบิต (0 หรือ 1) แต่คอมพิวเตอร์ควอนตัมใช้หน่วย "Qubit (Quantum Bit)" ซึ่งอาศัยหลักฟิสิกส์ควอนตัม 2 ประการหลัก:
1. Superposition: ความสามารถในการอยู่ในสถานะ 0 และ 1 พร้อมกันในเชิงความน่าจะเป็น ทำให้ประมวลผลข้อมูลมหาศาลได้ในรอบเดียว
2. Entanglement: สถานะพัวพันควอนตัมที่คิวบิตคู่กันมีปฏิสัมพันธ์ส่งผลถึงกันในทันทีแม้จะอยู่ห่างกัน

• Wi-Fi 7 (มาตรฐาน IEEE 802.11be): มาตรฐานเครือข่ายไร้สายยุคที่ 7 มีคุณสมบัติเด่นที่ออกสอบบ่อย:
1. ความกว้างช่องสัญญาณสูงถึง 320 MHz (เพิ่มขึ้นเท่าตัวจาก 160 MHz ใน Wi-Fi 6) บนย่านความถี่ 6 GHz
2. เทคนิคการมอดูเลต 4096-QAM (4K-QAM) ที่บรรจุข้อมูลได้ 12 บิตต่อสัญลักษณ์ (เพิ่มความจุข้อมูลขึ้น 20% จาก 1024-QAM)
3. ฟีเจอร์ MLO (Multi-Link Operation): ช่วยให้อุปกรณ์สามารถส่งและรับข้อมูลข้ามหลายย่านความถี่ (2.4 GHz, 5 GHz, 6 GHz) พร้อมกันในเวลาเดียวกัน ลดค่าความหน่วง (Latency) ลงอย่างมาก`,
        keyTakeaways: [
          'Qubit ใช้หลักการ Superposition (เป็น 0 และ 1 พร้อมกัน) และ Entanglement (พัวพันทางควอนตัม)',
          'Wi-Fi 7 (802.11be) รองรับแบนด์วิดท์ 320 MHz, การมอดูเลต 4096-QAM และฟีเจอร์เด่น Multi-Link Operation (MLO)'
        ]
      },
      {
        id: 'sec-1-4',
        title: '1.4 ความมั่นคงปลอดภัยสารสนเทศ: CIA Triad และ Zero Trust Architecture',
        content: `• CIA Triad: เสาหลัก 3 ประการของความมั่นคงปลอดภัยสารสนเทศ (NIST SP 1800-26):
1. Confidentiality (การรักษาความลับ): ป้องกันไม่ให้ผู้ไม่มีสิทธิ์เข้าถึงหรืออ่านข้อมูล เช่น การเข้ารหัสลับ (Encryption: AES-256, RSA), การควบคุมสิทธิ์ (RBAC), การยืนยันตัวตนหลายปัจจัย (MFA)
2. Integrity (ความถูกต้องครบถ้วน): ป้องกันไม่ให้ข้อมูลถูกแอบแก้ไข ดัดแปลง หรือปลอมแปลง เช่น การตรวจสอบด้วย Cryptographic Hash (SHA-256), Digital Signature, Checksum
3. Availability (ความพร้อมใช้): รับประกันว่าระบบและข้อมูลพร้อมให้บริการแก่ผู้ใช้ที่ถูกต้องเสมอ เช่น การติดตั้งระบบไฟฟ้าสำรอง (UPS), การทำ Redundancy / Server Clustering, ระบบป้องกัน DDoS และการสำรองข้อมูล (Backup Disaster Recovery)

• Zero Trust Architecture (NIST SP 800-207): สถาปัตยกรรมความปลอดภัยที่ยึดหลักการ "Never Trust, Always Verify" (ไม่เชื่อใจสิ่งใด ตรวจสอบเสมอ) ไม่ว่าจะอยู่ภายในหรือภายนอกเครือข่ายองค์กร โดยอาศัยหลัก Least Privilege (ให้สิทธิ์เท่าที่จำเป็นที่สุด) และ Micro-segmentation`,
        callouts: [
          {
            type: 'tip',
            title: 'เทคนิคการแยกข้อสอบ CIA Triad',
            content: 'หากโจทย์พูดถึง "การดักฟัง / ข้อมูลรั่วไหล" -> กระทบ Confidentiality; หากพูดถึง "การแอบแก้ตัวเลข / เปลี่ยนรหัส" -> กระทบ Integrity; หากพูดถึง "เว็บล่ม / ไฟดับ / โดนยิง DDoS จนเข้าเว็บไม่ได้" -> กระทบ Availability'
          }
        ]
      },
      {
        id: 'sec-1-5',
        title: '1.5 ภัยคุกคามทางไซเบอร์ มัลแวร์ และระบบป้องกัน',
        content: `ภัยคุกคามทางไซเบอร์ที่พบในการแข่งขันมักถามถึงลักษณะการโจมตีและกลไกป้องกัน:`,
        tables: [
          {
            caption: 'ตารางที่ 3: สรุปประเภทภัยคุกคามไซเบอร์และกลไกการป้องกันที่มักออกสอบ (อ้างอิง Study Guide หน้า 4)',
            headers: ['ประเภทภัยคุกคาม', 'ลักษณะการทำงานและการโจมตี', 'ตัวอย่างรูปแบบการโจมตี', 'กลไกการป้องกัน / ตอบสนอง'],
            rows: [
              ['Phishing', 'หลอกลวงเหยื่อผ่านอีเมล/ข้อความ/เว็บปลอมเพื่อขโมยรหัสผ่านหรือข้อมูลบัตร', 'Spear Phishing (เจาะจงบุคคล), Whaling (เจาะจงผู้บริหารระดับสูง), Smishing (ผ่าน SMS)', 'Email Authentication (SPF, DKIM, DMARC), การฝึกอบรม Security Awareness, FIDO2 MFA'],
              ['Ransomware', 'มัลแวร์เรียกค่าไถ่ที่แอบเข้ารหัสลับไฟล์ข้อมูลในเครื่องของเหยื่อ แล้วเรียกเงินแลกกับคีย์ถอดรหัส', 'WannaCry, LockBit, BlackCat (ใช้โมเดล Ransomware-as-a-Service: RaaS)', 'การสำรองข้อมูลตามกฎ 3-2-1 Backup (3 สำเนา, 2 สื่อ, 1 แห่งออฟไลน์), EDR (Endpoint Detection)'],
              ['DDoS Attack', 'ส่งทราฟฟิกขยะปริมาณมหาศาลจาก Botnet หลายพันเครื่องพร้อมกันจนแบนด์วิดท์หรือทรัพยากรเซิร์ฟเวอร์เต็ม', 'SYN Flood (Layer 4), UDP Amplification (Layer 4), HTTP Flood (Layer 7)', 'Cloud Anycast Scrubbing Centers (Cloudflare, AWS Shield), Rate Limiting, WAF (Web App Firewall)'],
              ['Zero-Day Exploit', 'การโจมตีช่องโหว่ของซอฟต์แวร์ที่ผู้พัฒนายังไม่เคยตรวจพบหรือยังไม่มีการปล่อยแพตช์แก้ไขออกมา', 'การใช้ช่องโหว่ที่ซื้อขายใน Dark Web โจมตีระบบสำคัญก่อนผู้พัฒนาจะรู้ตัว', 'Behavioral Anomaly Detection (ตรวจจับพฤติกรรมผิดปกติ), Sandbox Analysis, Virtual Patching'],
              ['SIEM / SOAR', 'เครื่องมือของศูนย์ Security Operations Center (SOC) ในการรับมือภัยคุกคาม', 'SIEM รวมล็อกและวิเคราะห์เหตุการณ์แบบเรียลไทม์; SOAR สั่งบล็อก IP หรือกักกันเครื่องแบบอัตโนมัติ', 'การนำ AI/ML เข้ามาวิเคราะห์ตรวจจับพฤติกรรมผิดปกติ (UEBA)']
            ]
          }
        ]
      },
      {
        id: 'sec-1-6',
        title: '1.6 กฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA 2562)',
        content: `พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (Personal Data Protection Act - PDPA) กำหนดบทบาทและสิทธิสำคัญ:
1. เจ้าของข้อมูลส่วนบุคคล (Data Subject): บุคคลธรรมดาที่ข้อมูลนั้นสามารถระบุตัวตนได้ (ไม่รวมถึงนิติบุคคลหรือผู้เสียชีวิต)
2. ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller): บุคคลหรือนิติบุคคลซึ่งมีอำนาจหน้าที่ "ตัดสินใจ" เกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล
3. ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor): บุคคลหรือนิติบุคคลซึ่งดำเนินการประมวลผลข้อมูล "ตามคำสั่งหรือในนามของ" ผู้ควบคุมข้อมูลส่วนบุคคลเท่านั้น โดยไม่มีอำนาจตัดสินใจเอง
4. เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO - Data Protection Officer): ผู้ให้คำแนะนำและตรวจสอบการปฏิบัติตามกฎหมายภายในองค์กร

การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล (Data Breach Notification): หากเกิดเหตุข้อมูลรั่วไหล ผู้ควบคุมข้อมูลต้องแจ้งสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) ภายใน "72 ชั่วโมง" นับแต่ทราบเหตุ`,
        keyTakeaways: [
          'Data Controller = ผู้มีอำนาจตัดสินใจ; Data Processor = ผู้ประมวลผลตามคำสั่ง',
          'Data Subject = บุคคลธรรมดาที่ยังมีชีวิตอยู่เท่านั้น',
          'แจ้งเหตุ Data Breach ต่อเจ้าหน้าที่ภายใน 72 ชั่วโมง'
        ]
      },
      {
        id: 'sec-1-7',
        title: '1.7 ข่าวสารเทคโนโลยีระดับโลก: รางวัลโนเบลปี 2024 ด้าน AI',
        content: `ปี 2024 เป็นปีประวัติศาสตร์ที่เทคโนโลยีปัญญาประดิษฐ์และโครงข่ายประสาทเทียมได้รับรางวัลโนเบลถึง 2 สาขา:
• รางวัลโนเบลสาขาฟิสิกส์ (Nobel Prize in Physics 2024):
มอบให้แก่ John J. Hopfield และ Geoffrey E. Hinton สำหรับการค้นพบและคิดค้นพื้นฐานที่นำไปสู่ "การเรียนรู้ของเครื่องด้วยโครงข่ายประสาทเทียม (Foundations of Machine Learning with Artificial Neural Networks)" โดย Hopfield คิดค้น Hopfield Network (ใช้หลักการหมุนของอนุภาคแม่เหล็กเชิงฟิสิกส์มาจำลองหน่วยความจำแบบเชื่อมโยง) และ Hinton พัฒนา Boltzmann Machine รวมถึงเป็นบิดาแห่ง Deep Learning ผู้บุกเบิกอัลกอริทึม Backpropagation

• รางวัลโนเบลสาขาเคมี (Nobel Prize in Chemistry 2024):
มอบให้แก่ David Baker ครึ่งหนึ่ง (สำหรับการออกแบบโปรตีนด้วยคอมพิวเตอร์) และอีกครึ่งหนึ่งร่วมกันระหว่าง Demis Hassabis และ John M. Jumper จาก Google DeepMind สำหรับการพัฒนาโมเดล AI "AlphaFold2" ที่แก้ปัญหาความท้าทายทางชีววิทยาอายุ 50 ปีเรื่องการทำนายโครงสร้างสามมิติของโปรตีนได้อย่างแม่นยำสูง`,
        callouts: [
          {
            type: 'exam',
            title: 'ข้อสอบออกตรงตัวแน่นอน!',
            content: 'โนเบลฟิสิกส์ 2024 = John Hopfield & Geoffrey Hinton (Artificial Neural Networks); โนเบลเคมี 2024 = Demis Hassabis & John Jumper (AlphaFold2 ทำนายโครงสร้างโปรตีน 3D)'
          }
        ]
      }
    ],
    summary: 'สรุปกลุ่มที่ 1 ครอบคลุมประวัติศาสตร์คอมพิวเตอร์ สถาปัตยกรรม Von Neumann, 5 ยุคคอมพิวเตอร์, ควอนตัมและ Wi-Fi 7, ความมั่นคงปลอดภัยสารสนเทศ CIA Triad, Zero Trust, ภัยคุกคามไซเบอร์, กฎหมาย PDPA และรางวัลโนเบลปี 2024 ด้าน AI',
    keyPoints: [
      'Ada Lovelace เป็นโปรแกรมเมอร์คนแรก; Von Neumann เสนอสถาปัตยกรรมรวมคำสั่งและข้อมูลใน RAM เดียวกัน',
      'Wi-Fi 7 เด่นด้วย MLO (Multi-Link Operation) และ 4096-QAM',
      'CIA Triad: C = รักษาความลับ, I = ป้องกันการแก้ไขดัดแปลง, A = พร้อมใช้งาน',
      'Zero Trust: Never trust, always verify และใช้หลัก Least Privilege',
      'PDPA: Data Controller มีอำนาจตัดสินใจ, Data Processor ทำตามคำสั่ง, แจ้งเหตุรั่วไหลใน 72 ชม.',
      'รางวัลโนเบลปี 2024 ยกย่อง AI: ฟิสิกส์ (Hopfield & Hinton) และเคมี (Hassabis & Jumper - AlphaFold2)'
    ],
    importantTerms: [
      { term: 'Von Neumann Architecture', definition: 'สถาปัตยกรรมคอมพิวเตอร์ที่จัดเก็บทั้งคำสั่งโปรแกรมและข้อมูลไว้ในหน่วยความจำเดียวกันในรูปแบบเลขฐานสอง', category: 'General IT' },
      { term: 'Superposition', definition: 'คุณสมบัติทางควอนตัมที่คิวบิตสามารถอยู่ในสถานะ 0 และ 1 พร้อมกันในเชิงความน่าจะเป็น', category: 'Quantum' },
      { term: 'CIA Triad', definition: 'เสาหลักความมั่นคงปลอดภัยสารสนเทศ 3 ประการ: Confidentiality, Integrity, Availability', category: 'Security' },
      { term: 'Zero Trust Architecture', definition: 'แนวคิดด้านความปลอดภัยที่กำหนดให้ Never trust, always verify แม้อยู่ภายในเครือข่ายองค์กร', category: 'Security' },
      { term: 'Data Controller vs Processor', definition: 'Controller มีอำนาจตัดสินใจในการประมวลผลข้อมูล ส่วน Processor ดำเนินการตามคำสั่งของ Controller', category: 'PDPA' }
    ]
  },
  {
    id: 'lesson-network-cloud',
    lessonNumber: 2,
    title: 'กลุ่มที่ 2: เทคโนโลยีเครือข่าย โครงสร้างพื้นฐาน และ Cloud Computing',
    category: 'network-cloud',
    description: 'แบบจำลอง OSI 7 Layers vs TCP/IP, อุปกรณ์เครือข่ายและ Collision/Broadcast Domain, การคำนวณ Subnetting, CIDR, Private IP, โปรโตคอล DNS/DHCP/NAT, Cloud Service Models และ Containerization',
    tags: ['OSI 7 Layers', 'TCP/IP', 'Subnetting', 'CIDR', 'DNS', 'DHCP', 'Cloud Computing', 'Docker', 'Kubernetes'],
    readingTime: 22,
    updatedAt: '2026-11-09',
    sourcePages: 'หน้า 5–10',
    sections: [
      {
        id: 'sec-2-1',
        title: '2.1 สถาปัตยกรรมเครือข่ายและแบบจำลองอ้างอิง: OSI 7 Layers vs TCP/IP',
        content: `การสื่อสารในระบบเครือข่ายอาศัยแบบจำลองอ้างอิงในการแบ่งขั้นตอนการทำงานออกเป็นชั้น (Layers) แบบจำลองที่ออกสอบเป็นประจำคือ OSI 7 Layers และ TCP/IP 4 Layers ดังแสดงในตารางที่ 4:`,
        tables: [
          {
            caption: 'ตารางที่ 4: ตารางเปรียบเทียบ OSI 7 Layers vs TCP/IP 4 Layers อย่างละเอียด (อ้างอิง Study Guide หน้า 5–6)',
            headers: ['ชั้น OSI Layer', 'ชื่อชั้น (Layer Name)', 'หน่วยข้อมูล (PDU)', 'หน้าที่และคำอธิบายหลัก', 'โปรโตคอลตัวอย่าง', 'อุปกรณ์ที่ทำงานในชั้นนี้'],
            rows: [
              ['Layer 7', 'Application', 'Data', 'เป็นส่วนต่อประสานกับแอปพลิเคชันของผู้ใช้ในการส่งข้อมูล', 'HTTP, HTTPS, DNS, DHCP, FTP, SMTP, SSH', 'Next-Gen Firewall (NGFW), Web Application Firewall (WAF)'],
              ['Layer 6', 'Presentation', 'Data', 'จัดรูปแบบข้อมูล แปลงรหัสอักขระ (ASCII/UTF-8) บีบอัด และเข้ารหัสลับ', 'TLS/SSL, JPEG, MPEG, ASCII', 'Gateway, Application Proxy'],
              ['Layer 5', 'Session', 'Data', 'สร้าง ควบคุม ดูแล และยุติการเชื่อมต่อระหว่างแอปพลิเคชัน', 'NetBIOS, RPC, PPTP', 'Session Border Controller (SBC)'],
              ['Layer 4', 'Transport', 'Segment (TCP) / Datagram (UDP)', 'รับผิดชอบการส่งข้อมูลแบบ End-to-End, ควบคุม Flow Control และ Error Detection', 'TCP (พอร์ต 80, 443), UDP (พอร์ต 53, 67/68)', 'Layer 4 Load Balancer, Stateful Firewall'],
              ['Layer 3', 'Network', 'Packet', 'หาเส้นทาง (Routing) และกำหนดที่อยู่เชิงตรรกะ (Logical IP Address)', 'IPv4, IPv6, ICMP, ARP, OSPF, BGP', 'Router, Layer 3 Switch'],
              ['Layer 2', 'Data Link', 'Frame', 'ส่งข้อมูลข้ามโหนดผ่านตัวกลางกายภาพ กำหนด MAC Address และตรวจจับข้อผิดพลาด (CRC)', 'Ethernet (802.3), Wi-Fi (802.11), ARP, VLAN', 'Switch (Layer 2), Bridge, Wireless Access Point (WAP)'],
              ['Layer 1', 'Physical', 'Bit', 'แปลงข้อมูลบิต (0 และ 1) เป็นสัญญาณไฟฟ้า แสง หรือคลื่นวิทยุบนสายสัญญาณ', '1000BASE-T, V.35, DSL, Bluetooth', 'Hub, Repeater, สาย UTP/STP, สาย Fiber Optic, ขั้วต่อ RJ-45']
            ]
          }
        ],
        callouts: [
          {
            type: 'tip',
            title: 'วิธีจำหน่วยข้อมูล PDU',
            content: 'Layer 7-5 = Data -> Layer 4 = Segment/Datagram -> Layer 3 = Packet -> Layer 2 = Frame -> Layer 1 = Bit'
          }
        ]
      },
      {
        id: 'sec-2-2',
        title: '2.2 อุปกรณ์เครือข่ายและ Collision / Broadcast Domain',
        content: `แนวคิดที่ออกสอบบ่อยที่สุดเรื่องอุปกรณ์เครือข่ายคือขอบเขตการชนกันของสัญญาณ (Collision Domain) และขอบเขตการแพร่สัญญาณ (Broadcast Domain):
• Hub (Layer 1): ส่งต่อสัญญาณไฟฟ้าออกทุกพอร์ตแบบทื่อๆ ทุกพอร์ตของ Hub อยู่ใน Collision Domain เดียวกัน และ Broadcast Domain เดียวกัน
• Switch (Layer 2): จดจำหมายเลข MAC Address ลงในตาราง MAC Address Table (CAM Table) จึงส่งเฟรมแบบ Unicast ไปยังพอร์ตปลายทางโดยตรง ทำให้ "แต่ละพอร์ตของ Switch แยกเป็น Collision Domain อิสระจากกัน" แต่ทุกพอร์ตยังคงอยู่ใน "Broadcast Domain เดียวกัน" (เว้นแต่จะมีการแบ่ง VLAN)
• Router (Layer 3): ทำหน้าที่หาเส้นทางโดยใช้ Routing Table และ IP Address ตามธรรมชาติ Router จะไม่ส่งต่อเฟรม Broadcast ข้ามอินเทอร์เฟซ ดังนั้น "แต่ละพอร์ตของ Router จึงแยกทั้ง Collision Domain และ Broadcast Domain"`,
        keyTakeaways: [
          'Switch แยก Collision Domain ในแต่ละพอร์ต แต่ยังคงอยู่ใน Broadcast Domain เดียวกัน',
          'Router แยกทั้ง Collision Domain และ Broadcast Domain ในทุกพอร์ต',
          'VLAN (Virtual LAN) คือการแบ่ง Broadcast Domain เสมือนบน Switch Layer 2 ตัวเดียวกัน'
        ]
      },
      {
        id: 'sec-2-3',
        title: '2.3 การกำหนดแอดเดรสในระบบเครือข่าย: IPv4, Subnet Mask และ CIDR',
        content: `• IPv4 Address: มีขนาด 32 บิต แบ่งเป็น 4 กลุ่ม (Octets) กลุ่มละ 8 บิต คั่นด้วยจุด
• Private IP Address ตามมาตรฐาน RFC 1918 (ออกสอบทุกปี!):
- Class A: 10.0.0.0 ถึง 10.255.255.255 (Prefix: /8)
- Class B: 172.16.0.0 ถึง 172.31.255.255 (Prefix: /12) -> ข้อควรระวัง: 172.32.0.1 ไม่ใช่ Private IP!
- Class C: 192.168.0.0 ถึง 192.168.255.255 (Prefix: /16)
- Loopback Address: 127.0.0.1 ถึง 127.255.255.254 (127.0.0.0/8)
- APIPA (Automatic Private IP Addressing): 169.254.0.1 ถึง 169.254.255.254 (เมื่อเครื่องขอ IP จาก DHCP ไม่ได้)

• การคำนวณ Subnet Mask:
จำนวนบิตโฮสต์ h = 32 - Prefix (/p)
จำนวน IP ทั้งหมด = 2^h
จำนวนเครื่องที่ใช้งานได้จริง (Usable Hosts) = 2^h - 2 (ต้องหักออก 2 แอดเดรสเสมอ: Network Address ที่บิตโฮสต์เป็น 0 ทั้งหมด และ Broadcast Address ที่บิตโฮสต์เป็น 1 ทั้งหมด)`,
        callouts: [
          {
            type: 'warning',
            title: 'จุดหลอกเรื่อง Private IP Class B',
            content: 'จำให้ขึ้นใจว่า Class B Private IP สิ้นสุดที่ 172.31.255.255 เท่านั้น! หากข้อสอบให้ 172.32.0.1 หรือ 172.15.0.1 มา จะถือเป็น Public IP Address ทันที'
          }
        ]
      },
      {
        id: 'sec-2-4',
        title: '2.4 โปรโตคอลพื้นฐานในเครือข่าย: DNS, DHCP, NAT, ARP, ICMP',
        content: `• DNS (Domain Name System - พอร์ต UDP/TCP 53): แปลงชื่อโดเมนเป็น IP Address
- A Record: แปลงชื่อโดเมนเป็น IPv4 (32-bit)
- AAAA Record: แปลงชื่อโดเมนเป็น IPv6 (128-bit)
- CNAME Record: ชื่อเสมือน (Canonical Name / Alias) ที่ชี้ไปยังโดเมนอื่น
- MX Record: ชี้ไปยังเซิร์ฟเวอร์รับอีเมล (Mail Exchanger)
- DNS over HTTPS (DoH): ส่งคำขอ DNS ผ่าน HTTPS (พอร์ต 443) เพื่อป้องกันการดักฟัง

• DHCP (Dynamic Host Configuration Protocol): แจก IP อัตโนมัติด้วยกระบวนการ DORA 4 ขั้นตอน:
Discover (Client ส่ง Broadcast) -> Offer (Server เสนอ IP) -> Request (Client ร้องขอรับ IP) -> Acknowledge (Server ยืนยัน)

• NAT (Network Address Translation): กลไกแปลง Private IP เป็น Public IP ก่อนออกสู่อินเทอร์เน็ต
• ARP (Address Resolution Protocol): แปลงหมายเลข IP Address เป็นหมายเลข MAC Address บน Layer 2
• ICMP (Internet Control Message Protocol): โปรโตคอลตรวจสอบข้อผิดพลาดเครือข่าย (ใช้ในคำสั่ง Ping และ Traceroute) ทำงานบน Layer 3 โดย "ไม่มีหมายเลขพอร์ต"`,
        keyTakeaways: [
          'A Record = IPv4; AAAA Record = IPv6; CNAME = โดเมนเสมือน; MX = อีเมล',
          'DHCP ทำงานตามขั้นตอน DORA: Discover -> Offer -> Request -> Acknowledge',
          'ICMP (Ping) ทำงานบน Layer 3 จึงไม่มีหมายเลขพอร์ต TCP หรือ UDP'
        ]
      },
      {
        id: 'sec-2-5',
        title: '2.5 สถาปัตยกรรมและโปรโตคอลหลัก: TCP vs UDP และหมายเลขพอร์ต',
        content: `• TCP (Transmission Control Protocol): Connection-oriented, เชื่อถือได้ มีการสร้างการเชื่อมต่อผ่าน 3-Way Handshake (SYN -> SYN-ACK -> ACK), มีการตรวจสอบข้อผิดพลาดและส่งซ้ำ (Retransmission), มี Flow Control และ Congestion Control เหมาะกับ Web (HTTP/HTTPS), File Transfer, Email
• UDP (User Datagram Protocol): Connectionless, ไม่มีการรับประกันการส่งถึง ไม่มี 3-Way Handshake, ทำงานรวดเร็ว มี Overhead ต่ำ เหมาะกับ Real-time Streaming, VoIP, Online Gaming, DNS Query, DHCP

หมายเลขพอร์ตสำคัญที่ออกสอบ:
- 20/21: FTP (File Transfer)
- 22: SSH (Secure Shell)
- 25: SMTP (Simple Mail Transfer)
- 53: DNS (Domain Name System)
- 67/68: DHCP (Server/Client)
- 80: HTTP (Hypertext Transfer Protocol)
- 110: POP3 (Post Office Protocol)
- 143: IMAP (Internet Message Access Protocol)
- 443: HTTPS (HTTP Secure / TLS)
- 3389: RDP (Remote Desktop Protocol)`,
        callouts: [
          {
            type: 'tip',
            title: 'พอร์ตยอดฮิตในข้อสอบ',
            content: 'SSH = 22, DNS = 53, DHCP = 67/68, HTTP = 80, HTTPS = 443, RDP = 3389'
          }
        ]
      },
      {
        id: 'sec-2-6',
        title: '2.6 Cloud Computing และ Shared Responsibility Model',
        content: `• รูปแบบการติดตั้ง (Deployment Models):
1. Public Cloud: ทรัพยากรเป็นของผู้ให้บริการ (AWS, Azure, Google Cloud) เข้าถึงผ่านอินเทอร์เน็ต
2. Private Cloud: ทรัพยากรถูกใช้งานเฉพาะองค์กรเดียว ติดตั้งใน Data Center ของตนเองเพื่อความปลอดภัยสูงสุด
3. Hybrid Cloud: การผสานระหว่าง On-premises/Private Cloud กับ Public Cloud เพื่อความยืดหยุ่น
4. Multi-Cloud: การใช้บริการ Public Cloud จากผู้ให้บริการมากกว่า 1 รายพร้อมกัน (เช่น ใช้ทั้ง AWS และ GCP)

• รูปแบบบริการ (Service Models) และโมเดลความรับผิดชอบร่วมกัน (Shared Responsibility):
- IaaS (Infrastructure as a Service): ผู้ให้บริการดูแลฮาร์ดแวร์, ระบบเครือข่าย, Virtualization; ลูกค้าต้องดูแล OS, Runtime, Middleware, Data และ Application (เช่น AWS EC2, Google Compute Engine)
- PaaS (Platform as a Service): ผู้ให้บริการดูแลไปจนถึง OS, Runtime และฐานข้อมูล; ลูกค้าดูแลเฉพาะ Data และ Application Code (เช่น AWS Elastic Beanstalk, Google App Engine, Vercel)
- SaaS (Software as a Service): ผู้ให้บริการดูแลทุกชั้นตั้งแต่ฮาร์ดแวร์จนถึงตัวซอฟต์แวร์; ลูกค้าเป็นเพียงผู้ใช้งาน (เช่น Google Workspace, Microsoft 365, Canva)`,
        keyTakeaways: [
          'IaaS: ผู้ใช้ต้องดูแล OS เอง (เช่น เช่า VM)',
          'PaaS: ผู้ใช้ดูแลเฉพาะ Code และ Data (เช่น Vercel, App Engine)',
          'SaaS: ผู้ใช้ใช้งานซอฟต์แวร์สำเร็จรูปพร้อมใช้ (เช่น Google Docs, Canva)'
        ]
      },
      {
        id: 'sec-2-7',
        title: '2.7 การจำลองระบบ: Virtual Machine vs Containerization และ Kubernetes',
        content: `• Virtual Machine (VM): ใช้ Hypervisor จำลองฮาร์ดแวร์เสมือน โดยแต่ละ VM ต้องติดตั้งระบบปฏิบัติการตัวเต็มของตนเอง (Guest OS) ทำให้กินพื้นที่และบูตช้ากว่า
- Type 1 (Bare-metal Hypervisor): รันบนฮาร์ดแวร์เซิร์ฟเวอร์โดยตรง เช่น VMware ESXi, Microsoft Hyper-V, Proxmox VE
- Type 2 (Hosted Hypervisor): รันบน OS อื่น เช่น VMware Workstation, VirtualBox

• Containerization (Docker): การจำลองระดับระบบปฏิบัติการ (OS-level Virtualization) โดยไม่มี Guest OS แยก แต่แชร์ Kernel ร่วมกับ Host OS ทำให้ Container มีขนาดเล็ก บูตได้ในเสี้ยววินาที และพกพาง่าย (Portable)

• Kubernetes (K8s): แพลตฟอร์ม Container Orchestration สำหรับบริหารจัดการ Container นับพันตัว
- Pod: หน่วยดีพลอยที่เล็กที่สุดใน Kubernetes ภายในบรรจุ 1 หรือหลาย Container ที่แชร์ IP และ Storage ร่วมกัน
- Control Plane: สมองส่วนกลางที่ทำหน้าที่จัดตารางงาน (Scheduling), ตรวจสอบสถานะ และจัดการคลัสเตอร์`,
        callouts: [
          {
            type: 'exam',
            title: 'ข้อแตกต่างสำคัญระหว่าง VM กับ Container',
            content: 'VM ต้องมี Guest OS แยกในแต่ละตัว จึงกินทรัพยากรสูงกว่า; Container ไม่มี Guest OS แต่แชร์ Host OS Kernel ร่วมกัน จึงมี Overhead ต่ำกว่ามาก'
          }
        ]
      }
    ],
    summary: 'สรุปกลุ่มที่ 2 ครอบคลุมแบบจำลอง OSI 7 Layers และ TCP/IP, อุปกรณ์ Switch/Router/Hub, การคำนวณ IP Subnetting และ CIDR, โปรโตคอล DNS, DHCP, TCP, UDP, Cloud Service Models (IaaS/PaaS/SaaS) และความแตกต่างระหว่าง VM กับ Docker/Kubernetes',
    keyPoints: [
      'OSI 7 Layers: All People Seem To Need Data Processing (App, Pres, Sess, Trans, Net, Data, Phys)',
      'Switch แยก Collision Domain; Router แยกทั้ง Collision และ Broadcast Domain',
      'Private IP Class B คือ 172.16.0.0 - 172.31.255.255 เท่านั้น (172.32.x.x เป็น Public IP)',
      'TCP มี 3-Way Handshake เชื่อถือได้; UDP รวดเร็ว Overhead ต่ำ',
      'IaaS ผู้ใช้คุม OS; PaaS ผู้ใช้คุม Code; SaaS ผู้ใช้ใช้งานโปรแกรม',
      'Container แชร์ Host OS Kernel ร่วมกัน ทำให้บูตเร็วกว่า VM ที่ต้องรัน Guest OS เต็มตัว'
    ],
    importantTerms: [
      { term: 'Encapsulation', definition: 'กระบวนการห่อหุ้มข้อมูลโดยเพิ่ม Header ของแต่ละชั้นในแบบจำลองเครือข่ายจากบนลงล่าง', category: 'Network' },
      { term: 'MAC Address', definition: 'ที่อยู่ทางกายภาพขนาด 48 บิต ที่ฝังมากับการ์ดเครือข่าย ทำงานบน Layer 2', category: 'Network' },
      { term: 'CIDR', definition: 'Classless Inter-Domain Routing การระบุขนาดเครือข่ายด้วยเครื่องหมาย / ตามด้วยจำนวนบิตของเน็ตเวิร์ก เช่น /24', category: 'Network' },
      { term: 'Hypervisor', definition: 'ซอฟต์แวร์หรือเฟิร์มแวร์ที่สร้างและบริหารจัดการเครื่องเสมือน (Virtual Machines)', category: 'Cloud' },
      { term: 'Kubernetes Pod', definition: 'หน่วยที่เล็กที่สุดในการบริหารจัดการของ Kubernetes ซึ่งบรรจุคอนเทนเนอร์ที่แชร์เครือข่ายร่วมกัน', category: 'Cloud' }
    ]
  },
  {
    id: 'lesson-hardware-os',
    lessonNumber: 3,
    title: 'กลุ่มที่ 3: สถาปัตยกรรมฮาร์ดแวร์และระบบปฏิบัติการ (Hardware & OS)',
    category: 'hardware-os',
    description: 'การทำงานของ CPU, Machine Cycle, Cache Memory, AMAT, RAM DDR4/DDR5, Secondary Storage (SSD NVMe vs SATA), RAID, โครงสร้างเคอร์เนล, Process Scheduling, Virtual Memory, Linux Commands และระบบตัวเลข',
    tags: ['CPU Architecture', 'Machine Cycle', 'Cache', 'AMAT', 'DDR5', 'NVMe', 'RAID', 'Kernel', 'Virtual Memory', 'Linux', 'Number Systems'],
    readingTime: 20,
    updatedAt: '2026-11-09',
    sourcePages: 'หน้า 10–13',
    sections: [
      {
        id: 'sec-3-1',
        title: '3.1 สถาปัตยกรรมและการทำงานของ CPU: Machine Cycle',
        content: `CPU (Central Processing Unit) ทำหน้าที่เป็นสมองกลของคอมพิวเตอร์ ประกอบด้วยองค์ประกอบหลัก:
1. Control Unit (CU - หน่วยควบคุม): อ่านคำสั่ง ถอดรหัส และควบคุมจังหวะการทำงานของทุกส่วน
2. Arithmetic Logic Unit (ALU - หน่วยคำนวณและตรรกะ): ทำหน้าที่คำนวณทางคณิตศาสตร์ (บวก ลบ คูณ หาร) และเปรียบเทียบทางตรรกะ (AND, OR, NOT, เปรียบเทียบค่า)
3. Registers (เรจิสเตอร์): หน่วยความจำความเร็วสูงที่สุดในตัว CPU ใช้เก็บข้อมูลและคำสั่งที่กำลังประมวลผลทันที เช่น Program Counter (PC), Instruction Register (IR), Accumulator (ACC)
4. Cache Memory: หน่วยความจำความเร็วสูงที่อยู่ติดกับแกนประมวลผล

วงจรการทำงานของคำสั่งใน CPU เรียกว่า Instruction Cycle (Machine Cycle) ประกอบด้วย 4 ขั้นตอนต่อเนื่อง:
Fetch (ดึงคำสั่งจาก RAM มาที่ CPU) -> Decode (Control Unit ถอดรหัสคำสั่ง) -> Execute (ALU ประมวลผลคำสั่ง) -> Store (บันทึกผลลัพธ์กลับลง Register หรือ RAM)`,
        keyTakeaways: [
          'CPU ประกอบด้วย CU (ควบคุม/ถอดรหัส), ALU (คำนวณ/ตรรกะ), Registers (หน่วยความจำเร็วสุดใน CPU)',
          'Machine Cycle 4 ขั้นตอน: Fetch -> Decode -> Execute -> Store',
          'Program Counter (PC) เก็บแอดเดรสของคำสั่งถัดไปที่จะถูกดึงมาประมวลผล'
        ]
      },
      {
        id: 'sec-3-2',
        title: '3.2 ลำดับชั้นหน่วยความจำ (Memory Hierarchy), แคช และ AMAT',
        content: `ลำดับชั้นหน่วยความจำเรียงจากเร็วสุด/แพงสุด/ความจุน้อยสุด ไปยังช้าสุด/ถูกสุด/ความจุมากสุด:
Registers -> Cache (L1 -> L2 -> L3) -> RAM (Main Memory) -> Secondary Storage (SSD, HDD)

• ความแตกต่างระหว่าง SRAM และ DRAM:
- SRAM (Static RAM): ใช้ทรานซิสเตอร์ 4-6 ตัวต่อ 1 บิต ไม่ต้องคอยรีเฟรชสัญญาณไฟฟ้า ทำงานเร็วมาก ใช้ทำ Cache Memory
- DRAM (Dynamic RAM): ใช้ทรานซิสเตอร์ 1 ตัวคู่กับตัวเก็บประจุ (Capacitor) ต้องคอยรีเฟรชสัญญาณไฟฟ้าตลอดเวลา ใช้ทำหน่วยความจำหลัก (RAM DDR4/DDR5)

• การคำนวณเวลาเข้าถึงหน่วยความจำเฉลี่ย (AMAT - Average Memory Access Time):
สูตร: AMAT = Hit Time + (Miss Rate x Miss Penalty)
ตัวอย่าง: แคช L1 มี Hit Time = 2 ns, Hit Rate = 95% (ดังนั้น Miss Rate = 1 - 0.95 = 0.05), และเวลาเข้าถึง RAM (Miss Penalty) = 100 ns
AMAT = 2 ns + (0.05 x 100 ns) = 2 ns + 5 ns = 7 ns`,
        callouts: [
          {
            type: 'exam',
            title: 'สูตรคำนวณ AMAT ออกสอบข้อคำนวณแน่นอน!',
            content: 'AMAT = Hit Time + (Miss Rate x Miss Penalty) โดย Miss Rate = 1 - Hit Rate ระวังอย่านำ Hit Rate ไปคูณตรงๆ'
          }
        ]
      },
      {
        id: 'sec-3-3',
        title: '3.3 สื่อบันทึกข้อมูลทุติยภูมิ (Secondary Storage), SSD และ RAID',
        content: `• การเปรียบเทียบ SSD vs HDD:
- HDD (Hard Disk Drive): ใช้จานแม่เหล็กหมุนและหัวอ่านกลไก มีค่า Latency จากการหมุนจาน (Seek Time) บอบบางต่อแรงกระแทก ความเร็วอ่าน/เขียน ~100–250 MB/s
- SSD (Solid State Drive): ใช้ชิปหน่วยความจำแฟลชแบบ NAND Flash ไม่มีชิ้นส่วนเคลื่อนไหว ทนแรงกระแทก
  * SATA SSD: เชื่อมต่อผ่านบัส SATA III ความเร็วสูงสุดติดเพดานที่ ~550 MB/s
  * M.2 NVMe SSD: ใช้โปรโตคอล NVMe บนบัส PCIe ความเร็วสูงถึง 3,500–14,000+ MB/s

• การต่อดิสก์แบบ RAID (Redundant Array of Independent Disks):
- RAID 0 (Striping): กระจายข้อมูลเขียนลงดิสก์พร้อมกัน เพิ่มความเร็วสูงสุด แต่ "ไม่มี Redundancy" หากดิสก์พัง 1 ลูก ข้อมูลเสียหายทั้งหมด
- RAID 1 (Mirroring): เขียนข้อมูลซ้ำเหมือนกันทุกประการ 2 ลูก เน้นความปลอดภัย ความจุรวมเหลือ 50%
- RAID 5 (Striping with Distributed Parity): ต้องใช้ดิสก์อย่างน้อย 3 ลูก มีการกระจาย Parity ความจุใช้งานได้ = (N - 1) x ความจุต่อลูก ทนต่อดิสก์เสียได้ 1 ลูก
- RAID 10 (1+0): รวมความเร็วของ Striping และความปลอดภัยของ Mirroring ต้องใช้ดิสก์อย่างน้อย 4 ลูก`,
        keyTakeaways: [
          'M.2 คือขนาดสล็อตกายภาพ (Form Factor); NVMe คือโปรโตคอลความเร็วสูงบนบัส PCIe',
          'RAID 0 = เร็วแต่ไร้ความปลอดภัย; RAID 1 = Mirror 50%; RAID 5 = ใช้ Parity ทนดิสก์เสียได้ 1 ลูก'
        ]
      },
      {
        id: 'sec-3-4',
        title: '3.4 โครงสร้างระบบปฏิบัติการ เคอร์เนล และ Process Scheduling',
        content: `• Kernel: แกนกลางของ OS ที่ควบคุมฮาร์ดแวร์โดยตรง
- Monolithic Kernel: ฟังก์ชันทุกอย่าง (Driver, File System, Memory Management) รันอยู่ใน Kernel Space เดียวกัน ประสิทธิภาพสูงมาก (เช่น Linux Kernel)
- Microkernel: ลดส่วนของ Kernel ให้เหลือเฉพาะ IPC, Thread Scheduling และนำ Driver ไปรันใน User Space มีเสถียรภาพสูงแต่มี Overhead ในการสลับโหมด

• วงจรชีวิตของ Process (5 States):
New (สร้างใหม่) -> Ready (พร้อมรัน รอคิว CPU) -> Running (กำลังรันบน CPU) -> Waiting / Blocked (รอ I/O หรือเหตุการณ์) -> Terminated (สิ้นสุดการทำงาน)

• Context Switching: กระบวนการที่ CPU บันทึกสถานะของ Process เดิมลงใน PCB (Process Control Block) แล้วโหลดสถานะของ Process ถัดไปขึ้นมารัน

• อัลกอริทึม CPU Scheduling:
- FCFS (First-Come, First-Served): ใครมาก่อนได้รันก่อน เกิดปัญหา Convoy Effect (โปรเซสสั้นต้องรอโปรเซสยาวนาน)
- SJF (Shortest Job First): โปรเซสที่มี Burst Time สั้นที่สุดได้รันก่อน ให้ค่า Average Waiting Time ต่ำที่สุด
- Round Robin (RR): แบ่งเวลาการรันตาม Time Quantum (q) เท่าๆ กัน เหมาะกับระบบ Time-Sharing`,
        callouts: [
          {
            type: 'tip',
            title: 'ข้อสอบจุดหลอก Process State',
            content: 'เมื่อ Process ทำงานด้าน I/O เสร็จสิ้น จะไม่ได้กลับไปสถานะ Running ทันที แต่ต้องย้ายไปรอคิวที่สถานะ Ready ก่อนเสมอ'
          }
        ]
      },
      {
        id: 'sec-3-5',
        title: '3.5 การจัดการหน่วยความจำ: Paging, Virtual Memory และ Thrashing',
        content: `• Virtual Memory (หน่วยความจำเสมือน): เทคนิคที่ช่วยให้โปรแกรมสามารถทำงานได้แม้จะมีขนาดใหญ่กว่า RAM จริง โดยอาศัยพื้นที่ใน Secondary Storage มาจำลองเป็น Page File (Windows) หรือ Swap Space (Linux)
• Paging: การแบ่งหน่วยความจำเสมือนออกเป็นบล็อกขนาดคงที่เรียกว่า "Page" และแบ่ง RAM จริงออกเป็นบล็อกขนาดเท่ากันเรียกว่า "Page Frame" โดยมี Page Table ทำหน้าที่จับคู่แอดเดรส
• Page Fault: เหตุการณ์ที่ CPU ต้องการเข้าถึงข้อมูลใน Page ที่ไม่ได้อยู่ใน RAM ระบบปฏิบัติการจะหยุดชั่วขณะและไปดึง Page นั้นจากดิสก์ขึ้นมาไว้ใน RAM
• Thrashing: สภาวะวิกฤตที่ RAM ไม่เพียงพอจนระบบปฏิบัติการต้องสลับ Page เข้าออกดิสก์ตลอดเวลา (Paging Overhead สูง) ส่งผลให้การทำงานของ CPU ลดลงจนระบบค้าง`,
        keyTakeaways: [
          'Virtual Memory ช่วยให้รันโปรแกรมขนาดใหญ่กว่า RAM ได้โดยใช้ Page File/Swap',
          'Page Fault เกิดขึ้นเมื่อต้องการ Page ที่ยังไม่ได้โหลดลง RAM',
          'Thrashing คือสภาวะที่ระบบมัวแต่สลับหน้าข้อมูลเข้าออกดิสก์จนเครื่องค้าง'
        ]
      },
      {
        id: 'sec-3-6',
        title: '3.6 คำสั่งพื้นฐานและสิทธิ์การเข้าถึงในระบบปฏิบัติการ Linux',
        content: `• สิทธิ์การเข้าถึงไฟล์ (Linux Permissions):
รหัสสิทธิ์ 10 ตัวอักษร เช่น -rwxr-xr--
- อักขระตัวที่ 1: ประเภทไฟล์ (- คือไฟล์ทั่วไป, d คือไดเรกทอรี)
- อักขระตัวที่ 2–4: สิทธิ์ของเจ้าของไฟล์ (User/Owner: u)
- อักขระตัวที่ 5–7: สิทธิ์ของกลุ่ม (Group: g)
- อักขระตัวที่ 8–10: สิทธิ์ของบุคคลอื่น (Others: o)

การแปลงค่าตัวเลขฐานแปด (Octal Notation):
Read (r) = 4, Write (w) = 2, Execute (x) = 1
ตัวอย่าง: chmod 754 file.txt
- Owner: 7 = 4 + 2 + 1 (rwx)
- Group: 5 = 4 + 0 + 1 (r-x)
- Others: 4 = 4 + 0 + 0 (r--)`,
        codeSnippets: [
          {
            language: 'bash',
            title: 'คำสั่ง Linux ยอดฮิตในข้อสอบ',
            code: `# เปลี่ยนสิทธิ์ไฟล์เป็น rwxr-xr--
chmod 754 script.sh

# เปลี่ยนเจ้าของไฟล์
chown student:developers project/

# แสดงโปรเซสที่กำลังรันทั้งหมด
ps aux | grep python

# ดูการใช้ทรัพยากรแบบเรียลไทม์
top`
          }
        ]
      },
      {
        id: 'sec-3-7',
        title: '3.7 ระบบตัวเลขและการแทนข้อมูล (Number Systems)',
        content: `• ฐานสอง (Binary - ฐาน 2: 0, 1)
• ฐานแปด (Octal - ฐาน 8: 0–7) -> 1 หลักฐานแปด เท่ากับ 3 บิตฐานสอง
• ฐานสิบหก (Hexadecimal - ฐาน 16: 0–9, A–F) -> 1 หลักฐานสิบหก เท่ากับ 4 บิต (Nibble)
  A=10, B=11, C=12, D=13, E=14, F=15

ตัวอย่างการแปลง:
Binary 1101 1010_2 -> 1101 [13 = D] 1010 [10 = A] = DA_16
DA_16 = (13 x 16^1) + (10 x 16^0) = 208 + 10 = 218_10

หน่วยวัดข้อมูล:
1 Byte (B ตัวพิมพ์ใหญ่) = 8 bits (b ตัวพิมพ์เล็ก)
เมื่อคำนวณความเร็วเน็ต เช่น เน็ต 800 Mbps ดาวน์โหลดไฟล์จริงจะได้ความเร็วสูงสุด = 800 / 8 = 100 MB/s`,
        callouts: [
          {
            type: 'warning',
            title: 'ระวังหน่วยความเร็วเน็ต vs ขนาดไฟล์',
            content: 'ความเร็วเน็ตบอกเป็น Mbps (เมกะบิต) ขนาดไฟล์บอกเป็น MB (เมกะไบต์) ต้องหารด้วย 8 เสมอ!'
          }
        ]
      }
    ],
    summary: 'สรุปกลุ่มที่ 3 ครอบคลุมการทำงานของ CPU, Machine Cycle, แคชและสูตร AMAT, ความแตกต่าง SSD SATA กับ M.2 NVMe, การจัดแถวดิสก์ RAID, สถานะโปรเซส, Process Scheduling, Virtual Memory, Paging, สิทธิ์ Linux และการแปลงระบบเลขฐาน',
    keyPoints: [
      'Machine Cycle: Fetch -> Decode -> Execute -> Store',
      'AMAT = Hit Time + (Miss Rate x Miss Penalty)',
      'SSD M.2 NVMe วิ่งบน PCIe เร็วกว่า SATA SSD หลายเท่า',
      'RAID 5 ทนดิสก์เสียได้ 1 ลูก ความจุ = (N-1) x Size',
      'Linux Permissions: r=4, w=2, x=1 (754 = rwxr-xr--)',
      '1 Byte = 8 bits ความเร็วเน็ต Mbps หาร 8 ได้ขนาดไฟล์ MB/s'
    ],
    importantTerms: [
      { term: 'ALU', definition: 'Arithmetic Logic Unit หน่วยคำนวณและเปรียบเทียบตรรกะภายใน CPU', category: 'Hardware' },
      { term: 'Cache Memory', definition: 'หน่วยความจำ SRAM ความเร็วสูงมากที่เก็บข้อมูลที่ถูกเรียกใช้บ่อยเพื่อลดเวลารอจาก RAM', category: 'Hardware' },
      { term: 'Context Switching', definition: 'กระบวนการที่ CPU บันทึกสถานะโปรเซสเดิมลง PCB แล้วสลับไปรันโปรเซสใหม่', category: 'OS' },
      { term: 'Thrashing', definition: 'สภาวะที่ OS มัวแต่สลับหน้าข้อมูล Virtual Memory จน CPU ทำงานจริงแทบไม่ได้', category: 'OS' }
    ]
  },
  {
    id: 'lesson-programming-algo',
    lessonNumber: 4,
    title: 'กลุ่มที่ 4: การเขียนโปรแกรม ขั้นตอนวิธี และการคิดเชิงคำนวณ (Programming & Algorithms)',
    category: 'programming-algo',
    description: 'การคิดเชิงคำนวณ, สัญลักษณ์ผังงาน Flowchart มาตรฐาน ANSI/ISO, ภาษาเทียม Pseudocode, ลำดับความสำคัญตัวดำเนินการ, โครงสร้างควบคุม, แถวลำดับ 1D/2D, Big-O Complexity, Sorting & Searching และพีชคณิตบูลีน',
    tags: ['Flowchart', 'Pseudocode', 'Big-O', 'Bubble Sort', 'Binary Search', 'Array', 'Boolean Algebra', 'De Morgan'],
    readingTime: 25,
    updatedAt: '2026-11-09',
    sourcePages: 'หน้า 13–16',
    sections: [
      {
        id: 'sec-4-1',
        title: '4.1 กระบวนการคิดเชิงคำนวณและขั้นตอนการแก้ปัญหา (Computational Thinking)',
        content: `การคิดเชิงคำนวณ (Computational Thinking) มี 4 เสาหลัก:
1. การแยกย่อยปัญหา (Decomposition): แตกปัญหาใหญ่ที่ซับซ้อนออกเป็นปัญหาย่อยๆ ที่จัดการได้ง่าย
2. การจดจำรูปแบบ (Pattern Recognition): สังเกตหารูปแบบ ความเหมือน หรือแนวโน้มที่เกิดขึ้นซ้ำๆ
3. การคิดเชิงนามธรรม (Abstraction): คัดกรองเฉพาะข้อมูลที่จำเป็นและสำคัญ ตัดรายละเอียดที่ไม่เกี่ยวข้องออก
4. การออกแบบขั้นตอนวิธี (Algorithm Design): วางลำดับขั้นตอนคำสั่งที่ชัดเจน แม่นยำ และสิ้นสุดได้ในการแก้ปัญหา`,
        keyTakeaways: [
          'Decomposition = แยกย่อยปัญหา',
          'Pattern Recognition = หารูปแบบที่ซ้ำกัน',
          'Abstraction = ตัดรายละเอียดที่ไม่สำคัญออก มุ่งเน้นแก่นแท้',
          'Algorithm Design = ลำดับขั้นตอนคำสั่งที่สิ้นสุดได้'
        ]
      },
      {
        id: 'sec-4-2',
        title: '4.2 สัญลักษณ์ผังงาน (Flowchart) ตามมาตรฐานสากล ANSI/ISO',
        content: `สัญลักษณ์มาตรฐาน ANSI/ISO ของ Flowchart ที่ออกสอบเป็นประจำสรุปได้ดังตารางที่ 5:`,
        tables: [
          {
            caption: 'ตารางที่ 5: สัญลักษณ์ผังงานมาตรฐานสากล (Flowchart ANSI/ISO Symbols) (อ้างอิง Study Guide หน้า 14)',
            headers: ['สัญลักษณ์ (Flowchart Symbol)', 'รูปทรงเรขาคณิต', 'ความหมายและหน้าที่การทำงาน', 'ข้อกำหนดและตัวอย่างการใช้งาน'],
            rows: [
              ['Terminator', 'วงรี หรือ สี่เหลี่ยมมุมมน (Oval)', 'จุดเริ่มต้น (Start) หรือ จุดสิ้นสุด (End) ของโปรแกรม', 'มีเส้นโฟลว์ออกจาก Start 1 เส้น และเส้นเข้า End 1 เส้น'],
              ['Process', 'สี่เหลี่ยมผืนผ้า (Rectangle)', 'การประมวลผล การคำนวณ หรือการกำหนดค่าตัวแปร', 'เช่น sum = a + b, count = count + 1'],
              ['Decision', 'สี่เหลี่ยมข้าวหลามตัด (Diamond)', 'การตัดสินใจหรือตรวจสอบเงื่อนไขทางตรรกะ', 'มีเส้นโฟลว์เข้า 1 เส้น และมีเส้นโฟลว์ออกอย่างน้อย 2 ทาง (Yes/No, True/False) เสมอ'],
              ['Input / Output (I/O)', 'สี่เหลี่ยมด้านขนาน (Parallelogram)', 'การรับข้อมูลเข้าหรือแสดงผลข้อมูลทั่วไปโดยไม่เจาะจงอุปกรณ์', 'เช่น Read X, Print sum'],
              ['Manual Input', 'สี่เหลี่ยมคางหมูด้านบนเอียง (Trapezoid)', 'การรับข้อมูลเข้าผ่านแป้นพิมพ์ (Keyboard Input)', 'เช่น รับคะแนนสอบจากผู้ใช้'],
              ['Display', 'รูปทรงปลายแหลมคล้ายหน้าจอ', 'การแสดงผลลัพธ์ออกทางจอภาพ (Monitor)', 'เช่น แสดงข้อความ "Pass" บนหน้าจอ'],
              ['On-page Connector', 'วงกลมเล็ก (Small Circle)', 'จุดเชื่อมต่อผังงานภายในหน้าเดียวกัน', 'ใช้ลดความซับซ้อนของเส้นโฟลว์ที่ตัดกันภายในหน้า'],
              ['Off-page Connector', 'ห้าเหลี่ยมคว่ำปลายแหลม', 'จุดเชื่อมต่อผังงานเพื่อข้ามไปต่อในหน้าถัดไป', 'ใช้เมื่อผังงานมีความยาวเกิน 1 หน้ากระดาษ'],
              ['Preparation', 'หกเหลี่ยม (Hexagon)', 'การเตรียมค่าเริ่มต้นสำหรับการวนลูป (Loop Initialization)', 'เช่น กำหนดค่าเริ่มต้น i = 1 to 10']
            ]
          }
        ],
        callouts: [
          {
            type: 'exam',
            title: 'ข้อสอบจุดหลอกสัญลักษณ์ผังงาน',
            content: 'สี่เหลี่ยมผืนผ้า = การประมวลผล (Process); สี่เหลี่ยมด้านขนาน = รับหรือแสดงผลข้อมูล (I/O); สี่เหลี่ยมข้าวหลามตัด = ตรวจสอบเงื่อนไข (Decision)'
          }
        ]
      },
      {
        id: 'sec-4-3',
        title: '4.3 ภาษาเทียม (Pseudocode), โครงสร้างควบคุม และลำดับตัวดำเนินการ',
        content: `• ลำดับความสำคัญของตัวดำเนินการ (Operator Precedence) ที่ต้องจำให้ขึ้นใจ:
1. วงเล็บ () มีความสำคัญสูงสุด
2. ยกกำลัง ** (คุณสมบัติ Right-to-Left: เช่น 2 ** 3 ** 2 = 2 ** 9 = 512 ไม่ใช่ 8 ** 2 = 64!)
3. คูณ *, หารจริง /, หารปัดเศษทิ้ง //, หารเอาเศษ % (Modulo) ทำจากซ้ายไปขวา
4. บวก + และ ลบ - ทำจากซ้ายไปขวา
5. ตัวดำเนินการเปรียบเทียบ (==, !=, <, >, <=, >=)
6. ตัวดำเนินการตรรกะ: NOT สำคัญกว่า AND และ AND สำคัญกว่า OR เสมอ!

• โครงสร้างควบคุม 3 รูปแบบ:
1. Sequence (ลำดับ): ทำงานจากบนลงล่าง
2. Selection (ทางเลือก): if, if-else, switch-case
3. Iteration (ทำซ้ำ):
   - Pre-test Loop (for, while): ตรวจเงื่อนไขก่อนเข้ารอบแรก หากเงื่อนไขเป็นเท็จจะไม่ทำคำสั่งในลูปเลย (ทำ 0 รอบ)
   - Post-test Loop (do-while): ทำคำสั่งก่อน 1 รอบ แล้วตรวจเงื่อนไขท้ายลูป จึงทำงาน "อย่างน้อย 1 รอบเสมอ" แม้เงื่อนไขเป็นเท็จตั้งแต่ต้น
   - break สั่งหยุดและออกจากลูปทันที; continue สั่งข้ามคำสั่งที่เหลือในรอบปัจจุบันแล้วไปเริ่มรอบถัดไป`,
        codeSnippets: [
          {
            language: 'pseudo',
            title: 'ตัวอย่างตรรกะลูปภาษาเทียม (Sum 1 to N)',
            code: `START
  INPUT N
  SET sum = 0
  SET i = 1
  WHILE i <= N DO
    sum = sum + i
    i = i + 1
  ENDWHILE
  OUTPUT sum
END`
          }
        ]
      },
      {
        id: 'sec-4-4',
        title: '4.4 โครงสร้างข้อมูลแถวลำดับ (Array 1D, 2D) และการคำนวณแอดเดรส',
        content: `• แถวลำดับ 1 มิติ (1D Array): เก็บข้อมูลประเภทเดียวกันในหน่วยความจำเรียงต่อกัน อ้างอิงผ่าน Index เริ่มจาก 0 (Zero-based Indexing) เช่น scores[0] คือสมาชิกตัวแรก
• แถวลำดับ 2 มิติ (2D Array: Rows x Columns):
การจัดเก็บในหน่วยความจำแบ่งเป็น 2 แบบ:
1. Row-Major Order (เรียงตามแถว): เก็บสมาชิกแถวที่ 0 ให้ครบก่อน แล้วตามด้วยแถวที่ 1, 2, ... (ภาษา C/C++, Python นิยมใช้)
   สูตร Address A[i][j] = Base_Address + [(i x Num_Cols) + j] x Element_Size
2. Column-Major Order (เรียงตามคอลัมน์): เก็บสมาชิกคอลัมน์ที่ 0 ให้ครบก่อน แล้วตามด้วยคอลัมน์ที่ 1, 2, ... (ภาษา FORTRAN, MATLAB ใช้)
   สูตร Address A[i][j] = Base_Address + [(j x Num_Rows) + i] x Element_Size`,
        callouts: [
          {
            type: 'tip',
            title: 'สังเกตมิติตอนแปลงแอดเดรส',
            content: 'Row-Major ให้คูณด้วยจำนวนคอลัมน์ทั้งหมด (Num_Cols) แล้วบวกด้วย j'
          }
        ]
      },
      {
        id: 'sec-4-5',
        title: '4.5 การวิเคราะห์ความซับซ้อนของขั้นตอนวิธี (Big-O Notation)',
        content: `Big-O Notation ใช้วัดขอบเขตบน (Worst-case Upper Bound) ของเวลาหรือพื้นที่ที่อัลกอริทึมใช้ตามขนาดข้อมูลอินพุต n เรียงจากเร็วสุดไปช้าสุด:
O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)

- O(1) Constant Time: เข้าถึงอาร์เรย์ด้วยดัชนี A[i], ดึงข้อมูลจาก Hash Table
- O(log n) Logarithmic Time: Binary Search
- O(n) Linear Time: Linear Search, การวนลูปชั้นเดียว 1 ถึง n
- O(n log n) Linearithmic Time: Merge Sort, Quick Sort (กรณีเฉลี่ย)
- O(n^2) Quadratic Time: Nested Loop 2 ชั้น, Bubble Sort, Selection Sort, Insertion Sort
- O(2^n) Exponential Time: การคำนวณ Fibonacci แบบ Recursive ธรรมดาที่ไม่มี Memoization`,
        tables: [
          {
            caption: 'ตารางที่ 6: สรุปความซับซ้อนของเวลา (Time Complexity) อัลกอริทึมค้นหาและจัดเรียงข้อมูล (อ้างอิง Study Guide หน้า 15)',
            headers: ['ชื่ออัลกอริทึม', 'ประเภท', 'กรณีดีที่สุด (Best Case)', 'กรณีเฉลี่ย (Average Case)', 'กรณีแย่ที่สุด (Worst Case)', 'ความซับซ้อนของพื้นที่ (Space)'],
            rows: [
              ['Linear Search', 'ค้นหาเชิงเส้น', 'O(1) (เจอตัวแรก)', 'O(n)', 'O(n) (เจอตัวท้ายหรือไม่พบ)', 'O(1)'],
              ['Binary Search', 'ค้นหาทวิภาค (ต้องเรียงข้อมูลก่อน)', 'O(1) (เจอตัวกลาง)', 'O(log n)', 'O(log n)', 'O(1)'],
              ['Bubble Sort', 'เรียงลำดับแบบฟอง', 'O(n) (เมื่อปรับปรุงด้วย swapped flag)', 'O(n^2)', 'O(n^2)', 'O(1)'],
              ['Selection Sort', 'เรียงลำดับแบบเลือก', 'O(n^2)', 'O(n^2)', 'O(n^2)', 'O(1)'],
              ['Insertion Sort', 'เรียงลำดับแบบแทรก', 'O(n) (ข้อมูลเรียงแล้ว)', 'O(n^2)', 'O(n^2)', 'O(1)'],
              ['Merge Sort', 'แบ่งแยกและเอาชนะ (Divide & Conquer)', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)'],
              ['Quick Sort', 'แบ่งแยกและเอาชนะด้วย Pivot', 'O(n log n)', 'O(n log n)', 'O(n^2) (เมื่อเลือก Pivot แย่สุด)', 'O(log n)']
            ]
          }
        ]
      },
      {
        id: 'sec-4-6',
        title: '4.6 พีชคณิตบูลีน (Boolean Algebra) และลอจิกเกต',
        content: `• ลอจิกเกตพื้นฐาน:
- AND (คูณ): ให้ผลลัพธ์เป็น 1 เมื่อทุกอินพุตเป็น 1
- OR (บวก): ให้ผลลัพธ์เป็น 1 เมื่อมีอินพุตใดอินพุตหนึ่งเป็น 1
- NOT (กลับค่า): กลับ 0 เป็น 1 และกลับ 1 เป็น 0
- XOR (Exclusive OR): ให้ผลลัพธ์เป็น 1 เมื่ออินพุต "ต่างกัน" (0 กับ 1 หรือ 1 กับ 0) และเป็น 0 เมื่ออินพุตเหมือนกัน

• Universal Gates: เกต NAND และ NOR ได้รับการยกย่องเป็น Universal Gates เพราะสามารถนำมาประกอบกันเพื่อสร้างวงจรแทนเกตอื่นทุกชนิดได้ครบถ้วน

• กฎของเดอมอร์แกน (De Morgan's Laws):
1. NOT (A AND B) = (NOT A) OR (NOT B)
2. NOT (A OR B) = (NOT A) AND (NOT B)`,
        callouts: [
          {
            type: 'exam',
            title: 'De Morgan ในเงื่อนไขการเขียนโค้ด',
            content: 'NOT (score >= 50 AND attendance > 80) สมมูลกับ (score < 50 OR attendance <= 80) ระวังเครื่องหมายกลับด้านจาก >= เป็น < และ > เป็น <='
          }
        ]
      }
    ],
    summary: 'สรุปกลุ่มที่ 4 ครอบคลุมการคิดเชิงคำนวณ 4 เสาหลัก, สัญลักษณ์ Flowchart มาตรฐาน ANSI, ภาษาเทียม Pseudocode, ลำดับตัวดำเนินการ, โครงสร้างควบคุม, การคำนวณแอดเดรส Array 1D/2D, Big-O Complexity, อัลกอริทึมค้นหาและจัดเรียงข้อมูล, พีชคณิตบูลีน และกฎของเดอมอร์แกน',
    keyPoints: [
      'Flowchart: Oval = Start/End, Rectangle = Process, Diamond = Decision, Parallelogram = I/O',
      'ลำดับตัวดำเนินการ: วงเล็บ -> ยกกำลัง (Right-to-Left) -> คูณ/หาร -> บวก/ลบ -> เปรียบเทียบ -> NOT -> AND -> OR',
      'Pre-test Loop (while, for) อาจทำ 0 รอบ; Post-test Loop (do-while) ทำอย่างน้อย 1 รอบเสมอ',
      'Binary Search ใช้ได้เฉพาะข้อมูลที่เรียงลำดับแล้ว (O(log n)); ข้อมูลยังไม่เรียงต้องใช้ Linear Search O(n)',
      'Merge Sort มีความซับซ้อน O(n log n) ในทุกกรณี แต่ใช้พื้นที่เพิ่ม O(n)',
      'Universal Gates คือ NAND และ NOR สามารถสร้างเกตอื่นได้ครบทุกตัว'
    ],
    importantTerms: [
      { term: 'Pseudocode', definition: 'รหัสลำลองที่เขียนอธิบายขั้นตอนอัลกอริทึมด้วยถ้อยคำกึ่งภาษาอังกฤษและโครงสร้างตรรกะ', category: 'Programming' },
      { term: 'Short-Circuit Evaluation', definition: 'การประเมินค่านิพจน์ตรรกะที่หยุดทำงานทันทีเมื่อทราบผลลัพธ์แน่นอนแล้ว เช่น False AND X จะไม่ทำ X', category: 'Programming' },
      { term: 'Big-O Notation', definition: 'สัญกรณ์คณิตศาสตร์ที่ใช้วัดขอบเขตบนของเวลาหรือพื้นที่เมื่อขนาดอินพุต n เติบโตขึ้น', category: 'Algorithms' },
      { term: 'Universal Gate', definition: 'ลอจิกเกตพื้นฐาน (NAND, NOR) ที่สามารถนำมาต่อรวมกันเพื่อสร้างเกตชนิดอื่นได้ครบทั้งหมด', category: 'Logic' }
    ]
  },
  {
    id: 'lesson-ai-datascience',
    lessonNumber: 5,
    title: 'กลุ่มที่ 5: ปัญญาประดิษฐ์ วิทยาศาสตร์ข้อมูล และโมเดลภาษาขนาดใหญ่ (AI & Data Science)',
    category: 'ai-datascience',
    description: 'ระดับขั้นของ AI (ANI/AGI/ASI), Machine Learning Paradigms, การเตรียมข้อมูล Preprocessing, Confusion Matrix, Neural Networks, Backpropagation, Overfitting, LLMs, Transformer, RAG และ Model Quantization',
    tags: ['AI', 'Machine Learning', 'Deep Learning', 'Confusion Matrix', 'Neural Networks', 'Transformer', 'RAG', 'Quantization'],
    readingTime: 25,
    updatedAt: '2026-11-09',
    sourcePages: 'หน้า 16–19',
    sections: [
      {
        id: 'sec-5-1',
        title: '5.1 นิยาม ลำดับชั้น และระดับขั้นของปัญญาประดิษฐ์',
        content: `• ลำดับชั้นความสัมพันธ์:
Artificial Intelligence (ศาสตร์กว้างสุด) -> Machine Learning (การให้คอมพิวเตอร์เรียนรู้จากข้อมูล) -> Deep Learning (การใช้โครงข่ายประสาทเทียมหลายชั้น) -> Generative AI (การสร้างเนื้อหาใหม่)

• ระดับขั้นของ AI แบ่งตามขีดความสามารถ:
1. ANI (Artificial Narrow Intelligence / Weak AI): AI ที่เชี่ยวชาญเฉพาะด้านใดด้านหนึ่ง เช่น ระบบจดจำใบหน้า, ChatGPT, AlphaFold2 (AI ในปัจจุบันทั้งหมดอยู่ในระดับนี้)
2. AGI (Artificial General Intelligence / Strong AI): AI ที่มีความสามารถทางสติปัญญาทัดเทียมมนุษย์ในทุกด้าน สามารถเรียนรู้ แก้ปัญหา และปรับตัวในบริบทใหม่ได้เอง
3. ASI (Artificial Superintelligence): AI ที่มีสติปัญญาเหนือกว่ามนุษย์ในทุกด้าน`,
        keyTakeaways: [
          'ลำดับชั้น: AI ครอบ ML, ML ครอบ DL, DL ครอบ GenAI',
          'AI ในปัจจุบันทั้งหมดเป็น ANI (Narrow AI) ที่เก่งเฉพาะงานที่ถูกเทรนมา'
        ]
      },
      {
        id: 'sec-5-2',
        title: '5.2 กระบวนทัศน์การเรียนรู้ของเครื่อง (Machine Learning Paradigms)',
        content: `Machine Learning แบ่งเป็น 3 กระบวนทัศน์หลัก:
1. การเรียนรู้แบบมีผู้สอน (Supervised Learning): ข้อมูลมีทั้งฟีเจอร์ (Features: X) และป้ายกำกับเฉลย (Labels: y)
   - Classification (จำแนกประเภท): ผลลัพธ์เป็นหมวดหมู่ไม่ต่อเนื่อง (Discrete) เช่น สแปมอีเมล/ไม่ใช่สแปม, รูปหมา/แมว (โมเดล: Logistic Regression, Decision Tree, Random Forest, SVM)
   - Regression (การถดถอย): ผลลัพธ์เป็นค่าตัวเลขต่อเนื่อง (Continuous) เช่น ทำนายราคาบ้าน, อุณหภูมิ (โมเดล: Linear Regression, Ridge, Lasso)

2. การเรียนรู้แบบไม่มีผู้สอน (Unsupervised Learning): ข้อมูลไม่มีป้ายกำกับเฉลย (Unlabeled Data)
   - Clustering (การจัดกลุ่ม): จัดกลุ่มข้อมูลที่คล้ายกันเข้าด้วยกัน เช่น K-Means Clustering, DBSCAN
   - Dimensionality Reduction (การลดมิติข้อมูล): ยุบจำนวนตัวแปรโดยรักษาข้อมูลส่วนใหญ่ไว้ เช่น PCA (Principal Component Analysis)
   - Association Rule (การหากฎความสัมพันธ์): วิเคราะห์พฤติกรรมการซื้อ เช่น Apriori Algorithm (Market Basket Analysis)

3. การเรียนรู้แบบเสริมกำลัง (Reinforcement Learning): ตัวกระทำ (Agent) ทำการทดลองและเรียนรู้จากการมีปฏิสัมพันธ์กับสภาพแวดล้อม (Environment) เพื่อให้ได้รับรางวัลสะสมสูงสุด (Maximize Cumulative Reward) ผ่านการกำหนดกลยุทธ์ (Policy) เช่น AlphaGo, การขับขี่รถยนต์อัตโนมัติ`,
        callouts: [
          {
            type: 'warning',
            title: 'จุดหลอกยอดนิยม: Logistic Regression',
            content: 'แม้ชื่อจะมีคำว่า Regression แต่ Logistic Regression จัดเป็นอัลกอริทึมสำหรับงาน Classification (จำแนกประเภท) เพราะใช้ Sigmoid Function คำนวณความน่าจะเป็นของคลาส!'
          }
        ]
      },
      {
        id: 'sec-5-3',
        title: '5.3 กระบวนการเตรียมข้อมูล (Data Preprocessing) และการแบ่งชุดข้อมูล',
        content: `• การเตรียมข้อมูล (Data Preprocessing):
1. การจัดการค่าว่าง (Missing Values): การตัดแถวทิ้ง (Deletion) หรือการแทนที่ด้วยค่ากลาง (Imputation: Mean, Median, Mode)
2. การแปลงข้อมูลหมวดหมู่ (Categorical Encoding):
   - Label Encoding: แปลงเป็นตัวเลข 0, 1, 2,... เหมาะกับข้อมูลที่มีลำดับศักดิ์ (Ordinal Data เช่น วุฒิการศึกษา, ไซส์เสื้อ)
   - One-Hot Encoding: แตกเป็นคอลัมน์ใหม่ที่เก็บค่า 0 กับ 1 เหมาะกับข้อมูลที่ไม่มีลำดับศักดิ์ (Nominal Data เช่น สี, เพศ, จังหวัด)
3. การปรับสเกลข้อมูล (Feature Scaling):
   - Normalization (Min-Max Scaling): ปรับค่าให้อยู่ในช่วง [0, 1] ด้วยสูตร (x - min) / (max - min)
   - Standardization (Z-score): ปรับให้มีค่าเฉลี่ย 0 และส่วนเบี่ยงเบนมาตรฐาน 1 ด้วยสูตร (x - mean) / std

• การแบ่งชุดข้อมูล (Data Splitting):
- Training Set (70–80%): ใช้สำหรับฝึกสอนโมเดลและปรับค่าน้ำหนัก (Weights)
- Validation Set (10–15%): ใช้สำหรับปรับจูน Hyperparameters และตรวจสอบ Overfitting ระหว่างการฝึกสอน
- Test Set (10–15%): แยกเก็บไว้ประเมินประสิทธิภาพขั้นสุดท้าย "ห้ามนำมาใช้ปรับโมเดลเด็ดขาด" เพื่อป้องกัน Data Leakage`,
        keyTakeaways: [
          'Nominal Data (ไม่มีลำดับศักดิ์) ต้องใช้ One-Hot Encoding ป้องกันโมเดลเข้าใจผิดเรื่องขนาดตัวเลข',
          'Test Set ห้ามนำมาเทรนหรือปรับ Hyperparameters โดยเด็ดขาด'
        ]
      },
      {
        id: 'sec-5-4',
        title: '5.4 การประเมินประสิทธิภาพโมเดล (Evaluation Metrics)',
        content: `• ตารางความสับสน (Confusion Matrix) สำหรับการจำแนก 2 คลาส:
- TP (True Positive): ทายว่าจริง และผลจริงคือจริง (ถูกต้อง)
- TN (True Negative): ทายว่าเท็จ และผลจริงคือเท็จ (ถูกต้อง)
- FP (False Positive - Type I Error): ทายว่าจริง แต่ผลจริงคือเท็จ (ทายเกิน)
- FN (False Negative - Type II Error): ทายว่าเท็จ แต่ผลจริงคือจริง (ทายหลุด)

• ตัววัดผลสำคัญ (ออกสอบข้อคำนวณ 100%!):
1. Accuracy (ความถูกต้องโดยรวม) = (TP + TN) / (TP + TN + FP + FN)
   *ระวัง: ในชุดข้อมูลที่ไม่สมดุล (Imbalanced Data) ค่า Accuracy จะหลอกตา เช่น คนเป็นโรคมี 1% โมเดลทายว่าไม่เป็นทุกคนจะได้ Accuracy 99% แต่ไร้ประโยชน์
2. Precision (ความเที่ยงตรง) = TP / (TP + FP)
   วัดว่า "ในบรรดาที่โมเดลทายว่าจริง ทั้งหมด มีของจริงอยู่เท่าใด" (เน้นลด False Positive เช่น สแปมเมล)
3. Recall / Sensitivity (ความครบถ้วน) = TP / (TP + FN)
   วัดว่า "ในบรรดาของจริงทั้งหมด โมเดลจับได้ครบถ้วนเท่าใด" (เน้นลด False Negative เช่น ตรวจโรคมะเร็ง, ตรวจจับคนร้าย)
4. F1-Score = ค่าเฉลี่ยฮาร์มอนิก (Harmonic Mean) ระหว่าง Precision และ Recall
   สูตร: F1 = 2 x (Precision x Recall) / (Precision + Recall)`,
        callouts: [
          {
            type: 'exam',
            title: 'สูตร F1-Score ออกสอบทุกปี',
            content: 'F1-Score = 2 x (Precision x Recall) / (Precision + Recall) ใช้เป็นตัวชี้วัดหลักเมื่อชุดข้อมูลมีความไม่สมดุล (Imbalanced Dataset)'
          }
        ]
      },
      {
        id: 'sec-5-5',
        title: '5.5 โครงข่ายประสาทเทียม การเรียนรู้เชิงลึก และปัญหา Overfitting',
        content: `• Artificial Neural Network (ANN): ประกอบด้วย Input Layer -> Hidden Layers -> Output Layer
การประมวลผลคำนวณผลรวมถ่วงน้ำหนัก z = sum(w_i * x_i) + b แล้วส่งผ่าน Activation Function (เช่น Sigmoid, ReLU: f(x) = max(0, x), Softmax)
- Forward Propagation: ส่งข้อมูลไปข้างหน้าเพื่อหาค่าทำนาย
- Backpropagation & Gradient Descent: ส่งค่า Error/Loss ย้อนกลับมาเพื่อหาความชัน (Gradients) และปรับค่าน้ำหนัก (Weights) ให้ความคลาดเคลื่อนลดลง

• ปัญหา Overfitting vs Underfitting:
- Overfitting: โมเดลเรียนรู้และจดจำข้อมูลชุดฝึกสอนมากเกินไป (High Variance) ทำนาย Training Set ได้คะแนนสูงลิบ แต่ทำนาย Test Set ได้คะแนนแย่
  วิธีแก้: เพิ่มข้อมูล (Data Augmentation), ใช้เทคนิค Dropout (สุ่มปิดโหนดระหว่างเทรน), ทำ Regularization (L1 Lasso, L2 Ridge), Early Stopping
- Underfitting: โมเดลเรียบง่ายเกินไปจนจับแพทเทิร์นของข้อมูลไม่ได้ (High Bias)
  วิธีแก้: เพิ่มความซับซ้อนของโมเดล (เพิ่มชั้น Layer/Node), ปรับลด Regularization, ปรับเพิ่ม Feature ที่เกี่ยวข้อง`,
        keyTakeaways: [
          'Activation Function ReLU: f(x) = max(0, x) นิยมใช้ใน Hidden Layers เพราะคำนวณเร็วและแก้ปัญหา Vanishing Gradient',
          'Overfitting = จำข้อสอบเก่าได้หมดแต่เจอข้อสอบใหม่ทำไม่ได้ แก้ด้วย Dropout, Regularization, Early Stopping'
        ]
      },
      {
        id: 'sec-5-6',
        title: '5.6 เทคโนโลยี AI ยุคใหม่: LLMs, Transformer, RAG และ Model Quantization',
        content: `• Transformer Architecture (Vaswani et al., 2017 "Attention Is All You Need"):
หัวใจสำคัญของ LLM (Large Language Models เช่น GPT-4, Gemini) คือกลไก "Self-Attention" ที่คำนวณความสัมพันธ์ของทุกคำในประโยคพร้อมกันแบบขนาน (Parallel Processing) แทนที่โมเดลรุ่นเก่า (RNN/LSTM) ที่ต้องประมวลผลทีละคำตามลำดับ

• RAG (Retrieval-Augmented Generation):
สถาปัตยกรรมที่ช่วยลดปัญหาภาพหลอน (Hallucination) ของ AI โดย "ไม่แก้ไขค่าน้ำหนัก (Weights) ของโมเดล" แต่ทำหน้าที่ดึงข้อมูลอ้างอิงที่เกี่ยวข้องจากฐานข้อมูลภายนอก (เช่น เอกสารในองค์กรที่เก็บใน Vector Database ผ่าน Vector Embeddings) แล้วนำข้อมูลนั้นมาแนบลงใน Prompt ณ เวลาที่ผู้ใช้ตั้งคำถาม (Inference Time)

• Model Quantization:
เทคนิคการบีบอัดขนาดโมเดล AI โดยลดทอนความละเอียดของตัวเลขค่าน้ำหนัก (Precision) เช่น จาก 16-bit Floating Point (FP16: 2 Bytes ต่อพารามิเตอร์) ลงมาเป็น 4-bit (INT4 / FP4: 0.5 Bytes ต่อพารามิเตอร์) ช่วยลดการใช้หน่วยความจำ VRAM บน GPU ลงถึง 75% ทำให้สามารถรันโมเดลขนาดใหญ่บนคอมพิวเตอร์ส่วนบุคคลหรือโทรศัพท์มือถือได้`,
        callouts: [
          {
            type: 'tip',
            title: 'ข้อสอบจุดหลอกเรื่อง RAG',
            content: 'RAG ไม่ใช่การ Fine-tuning โมเดล! RAG ไม่ได้แตะต้องค่าน้ำหนักภายในโมเดลเลยแม้แต่น้อย แต่เป็นการค้นหาเอกสารมาแปะใส่ใน Context Window ของ Prompt'
          }
        ]
      }
    ],
    summary: 'สรุปกลุ่มที่ 5 ครอบคลุมระดับของ AI, การเรียนรู้แบบมีผู้สอน/ไม่มีผู้สอน/เสริมกำลัง, กระบวนการเตรียมข้อมูล Preprocessing, ตาราง Confusion Matrix, สูตร Accuracy, Precision, Recall, F1-Score, โครงข่ายประสาทเทียม, Backpropagation, ปัญหา Overfitting, สถาปัตยกรรม Transformer, กลไก RAG และการทำ Model Quantization',
    keyPoints: [
      'Supervised Learning: มี Label (Classification ทำนายหมวดหมู่, Regression ทำนายค่าตัวเลข)',
      'Logistic Regression จัดเป็นโมเดล Classification ไม่ใช่ Regression',
      'F1-Score = 2 x (Precision x Recall) / (Precision + Recall) เหมาะกับ Imbalanced Data',
      'Activation ReLU: f(x) = max(0, x); Activation Softmax ใช้แปลงเป็นความน่าจะเป็นของหลายคลาส',
      'Transformer ใช้ Self-Attention ประมวลผลทุกคำพร้อมกันแบบขนาน',
      'RAG ดึงข้อมูลภายนอกจาก Vector DB มาใส่ใน Prompt โดยไม่แก้ค่าน้ำหนักโมเดล',
      'Quantization 4-bit ใช้พื้นที่ 0.5 Bytes ต่อพารามิเตอร์ (FP16 ใช้ 2 Bytes)'
    ],
    importantTerms: [
      { term: 'Machine Learning', definition: 'สาขาย่อยของ AI ที่พัฒนาอัลกอริทึมให้ระบบเรียนรู้และพัฒนาตนเองจากข้อมูลได้โดยตรง', category: 'AI' },
      { term: 'Overfitting', definition: 'สภาวะที่โมเดลจดจำข้อมูลฝึกสอนดีเกินไปจนไม่สามารถนำไปทำนายข้อมูลชุดใหม่ได้อย่างถูกต้อง', category: 'AI' },
      { term: 'Transformer', definition: 'สถาปัตยกรรมโครงข่ายประสาทเทียมที่ใช้กลไก Self-Attention ประมวลผลข้อมูลลำดับแบบขนาน', category: 'GenAI' },
      { term: 'RAG', definition: 'Retrieval-Augmented Generation สถาปัตยกรรมที่ดึงข้อมูลภายนอกมาแนบใน Prompt เพื่อลดภาพหลอนของ LLM', category: 'GenAI' },
      { term: 'Vector Embeddings', definition: 'การแปลงข้อมูลข้อความ รูปภาพ หรือเสียง ให้เป็นแถวลำดับตัวเลขในปริภูมิหลายมิติที่แทนความหมายเชิงบริบท', category: 'AI' }
    ]
  },
  {
    id: 'lesson-advanced-scenarios',
    lessonNumber: 6,
    title: 'โจทย์วิเคราะห์เชิงลึกรอบชิงชนะเลิศ (Final Round Deep Analytical Scenarios)',
    category: 'programming-algo',
    description: 'ฝึกทำโจทย์วิเคราะห์และบูรณาการข้ามกลุ่มวิชา 3 ข้อใหญ่ สำหรับรอบชิงชนะเลิศ 10 ทีมสุดท้าย: การคำนวณ VLSM Subnetting, การคำนวณ VRAM สำหรับรัน LLM และการไล่อัลกอริทึม Dynamic Programming',
    tags: ['รอบชิงชนะเลิศ', 'อัตนัย', 'VLSM', 'LLM VRAM', 'Dynamic Programming', 'House Robber'],
    readingTime: 20,
    updatedAt: '2026-11-09',
    sourcePages: 'หน้า 52–54',
    sections: [
      {
        id: 'sec-6-1',
        title: '6.1 โจทย์วิเคราะห์ข้อที่ 1: การออกแบบเครือข่ายย่อย VLSM และความปลอดภัยคลาวด์',
        content: `สถานการณ์โจทย์: บริษัทสตาร์ทอัพแห่งหนึ่งได้รับจัดสรรบล็อกเครือข่ายภายในคือ 10.10.10.0/24 และต้องการแบ่งเครือข่ายย่อยแบบประหยัดแอดเดรสที่สุด (VLSM: Variable Length Subnet Mask) ให้กับ 3 แผนก ได้แก่:
1. แผนก AI Research: มีเครื่องเซิร์ฟเวอร์และเวิร์กสเตชันรวม 55 เครื่อง
2. แผนก Software Dev: มีเครื่องคอมพิวเตอร์รวม 25 เครื่อง
3. แผนก Cloud Ops: มีเครื่องคอมพิวเตอร์รวม 10 เครื่อง
จงหา Prefix (/p), Subnet Mask และช่วง Network–Broadcast Address ของทั้ง 3 แผนกโดยเรียงจากขนาดใหญ่ไปเล็ก

แนวทางการวิเคราะห์และเฉลยละเอียด:
ในการทำ VLSM ต้องจัดสรรเครือข่ายจากกลุ่มที่ต้องการจำนวนโฮสต์ "มากที่สุดไปน้อยที่สุด" เสมอเพื่อไม่ให้เกิดช่องว่างของบล็อกแอดเดรส:

1. แผนก AI Research (ต้องการ 55 เครื่อง):
- หาจำนวนบิตโฮสต์ h ที่ทำให้ 2^h - 2 >= 55 จะได้ h = 6 บิต (2^6 - 2 = 62 เครื่อง, ขนาดบล็อก = 64)
- Prefix คือ 32 - 6 = /26 (Subnet Mask: 255.255.255.192)
- ช่วงแอดเดรส: 10.10.10.0/26 (Network: 10.10.10.0, Usable Hosts: 10.10.10.1 – 10.10.10.62, Broadcast: 10.10.10.63)

2. แผนก Software Dev (ต้องการ 25 เครื่อง):
- หาจำนวนบิตโฮสต์ h ที่ทำให้ 2^h - 2 >= 25 จะได้ h = 5 บิต (2^5 - 2 = 30 เครื่อง, ขนาดบล็อก = 32)
- Prefix คือ 32 - 5 = /27 (Subnet Mask: 255.255.255.224)
- เริ่มต้นต่อจาก .63 คือ 10.10.10.64/27 (Network: 10.10.10.64, Usable Hosts: 10.10.10.65 – 10.10.10.94, Broadcast: 10.10.10.95)

3. แผนก Cloud Ops (ต้องการ 10 เครื่อง):
- หาจำนวนบิตโฮสต์ h ที่ทำให้ 2^h - 2 >= 10 จะได้ h = 4 บิต (2^4 - 2 = 14 เครื่อง, ขนาดบล็อก = 16)
- Prefix คือ 32 - 4 = /28 (Subnet Mask: 255.255.255.240)
- เริ่มต้นต่อจาก .95 คือ 10.10.10.96/28 (Network: 10.10.10.96, Usable Hosts: 10.10.10.97 – 10.10.10.110, Broadcast: 10.10.10.111)`,
        keyTakeaways: [
          'จัดสรรเครือข่ายตามลำดับความต้องการโฮสต์จากมากไปน้อยเสมอ',
          'สูตรคำนวณจำนวนโฮสต์ที่ใช้ได้: 2^h - 2',
          'Prefix /26 = บล็อก 64; /27 = บล็อก 32; /28 = บล็อก 16'
        ]
      },
      {
        id: 'sec-6-2',
        title: '6.2 โจทย์วิเคราะห์ข้อที่ 2: การคำนวณหน่วยความจำ GPU (VRAM) สำหรับรันโมเดล LLM',
        content: `สถานการณ์โจทย์: ทีมนักวิจัยต้องการนำโมเดลภาษาขนาดใหญ่ (LLM) ที่มีจำนวนพารามิเตอร์ 7 พันล้านตัว (7B Parameters) มารันเพื่อทำ Inference บนเครื่องเซิร์ฟเวอร์หรือแล็ปท็อป
1. หากเก็บค่าน้ำหนัก (Weights) ของโมเดลในรูปแบบทศนิยม FP16 (16-bit Floating Point) จะต้องใช้ VRAM อย่างน้อยกี่ GB?
2. หากต้องการลดการใช้ VRAM ลงให้สามารถรันบนแล็ปท็อปที่มี VRAM 6 GB ได้โดยใช้เทคนิค 4-bit Quantization (INT4 / FP4) พื้นที่เก็บค่าน้ำหนักจะลดลงเหลือกี่ GB?

แนวทางการวิเคราะห์และเฉลยละเอียด:
1. กรณี FP16 (16 บิตต่อพารามิเตอร์):
- เนื่องจาก 1 Byte = 8 bits ดังนั้นพารามิเตอร์ขนาด 16 บิตจะใช้พื้นที่ = 16 / 8 = 2 Bytes ต่อ 1 พารามิเตอร์
- โมเดลขนาด 7 x 10^9 พารามิเตอร์ จะใช้พื้นที่เก็บค่าน้ำหนัก = 7 x 10^9 x 2 Bytes = 14 x 10^9 Bytes = 14 GB
(เมื่อรวมพื้นที่สำหรับ KV Cache และ Context Window ขณะรัน Inference จะต้องใช้ VRAM รวมประมาณ 16–18 GB)

2. กรณี 4-bit Quantization (4 บิตต่อพารามิเตอร์):
- พารามิเตอร์ขนาด 4 บิต ใช้พื้นที่ = 4 / 8 = 0.5 Bytes ต่อ 1 พารามิเตอร์
- พื้นที่เก็บค่าน้ำหนักจะลดลงเหลือ = 7 x 10^9 x 0.5 Bytes = 3.5 GB ทำให้สามารถโหลดลงในแล็ปท็อปที่มี VRAM 6 GB ได้อย่างสบาย (เหลือพื้นที่อีก 2.5 GB สำหรับระบบและ KV Cache)`,
        keyTakeaways: [
          'VRAM พื้นฐาน = จำนวนพารามิเตอร์ x (จำนวนบิต / 8)',
          'FP16 (16-bit) ใช้ 2 Bytes/พารามิเตอร์ -> 7B โมเดลใช้ 14 GB',
          'INT4 / FP4 (4-bit) ใช้ 0.5 Bytes/พารามิเตอร์ -> 7B โมเดลใช้ 3.5 GB'
        ]
      },
      {
        id: 'sec-6-3',
        title: '6.3 โจทย์วิเคราะห์ข้อที่ 3: การไล่อัลกอริทึม Dynamic Programming vs Recursion',
        content: `สถานการณ์โจทย์: พิจารณาฟังก์ชันค้นหาค่าสูงสุดของการเลือกหยิบเหรียญโดยห้ามหยิบเหรียญที่วางติดกัน (House Robber / Non-adjacent Maximum Sum) สำหรับอาเรย์ coins = [4, 1, 2, 7, 5, 3] โดยมีสมการความสัมพันธ์เวียนเกิดคือ:
dp[i] = max(dp[i-1], dp[i-2] + coins[i])
จงคำนวณค่าในตาราง dp ตั้งแต่ดัชนี 0 ถึง 5 พร้อมระบุผลลัพธ์สูงสุดและตำแหน่งของเหรียญที่ถูกเลือก

แนวทางการวิเคราะห์และเฉลยละเอียด:
ไล่คำนวณค่าสะสมสูงสุด dp[i] ทีละดัชนีจากซ้ายไปขวา:
- i = 0 (coins[0] = 4): มีเหรียญเดียว เลือกหยิบเหรียญที่ 0 -> dp[0] = 4
- i = 1 (coins[1] = 1): max(coins[0], coins[1]) = max(4, 1) -> dp[1] = 4
- i = 2 (coins[2] = 2): max(dp[1], dp[0] + coins[2]) = max(4, 4 + 2) -> dp[2] = 6 (หยิบเหรียญ 4 และ 2)
- i = 3 (coins[3] = 7): max(dp[2], dp[1] + coins[3]) = max(6, 4 + 7) -> dp[3] = 11 (หยิบเหรียญ 4 และ 7)
- i = 4 (coins[4] = 5): max(dp[3], dp[2] + coins[4]) = max(11, 6 + 5) -> dp[4] = 11
- i = 5 (coins[5] = 3): max(dp[4], dp[3] + coins[5]) = max(11, 11 + 3) -> dp[5] = 14

ผลลัพธ์: ผลรวมสูงสุดคือ 14 โดยเลือกเหรียญที่ดัชนี 0, 3, และ 5 (ค่า 4, 7, และ 3 ซึ่งไม่ติดกันเลย รวมได้ 4 + 7 + 3 = 14)
การใช้ตารางจดจำผลลัพธ์ย่อย (Dynamic Programming) ช่วยลดความซับซ้อนของเวลาจาก O(2^n) ในการเรียกซ้ำแบบ Recursion ลงมาเหลือเพียง O(n)`,
        keyTakeaways: [
          'Dynamic Programming ใช้แก้ปัญหาที่มี Overlapping Subproblems',
          'สมการ dp[i] = max(dp[i-1], dp[i-2] + coins[i]) เป็นรูปแบบคลาสสิก',
          'เปลี่ยนความซับซ้อนของเวลาจาก Exponential O(2^n) เป็น Linear O(n)'
        ]
      }
    ],
    summary: 'สรุปโจทย์วิเคราะห์เชิงลึกรอบชิงชนะเลิศ 3 ข้อใหญ่: การคำนวณเครือข่ายย่อย VLSM แบบประหยัดแอดเดรส, การคำนวณ VRAM สำหรับโมเดลภาษาขนาดใหญ่ (LLM) ด้วย Quantization และการแก้ปัญหา Dynamic Programming เพื่อลดเวลาประมวลผล',
    keyPoints: [
      'VLSM: จัดสรรตามขนาดโฮสต์จากมากไปน้อยเสมอ',
      'LLM VRAM: FP16 ใช้ 2 Bytes/param, 4-bit ใช้ 0.5 Bytes/param',
      'Dynamic Programming: ลดเวลาจาก O(2^n) เหลือ O(n) ด้วยตารางจดจำ'
    ]
  },
  {
    id: 'lesson-team-strategy',
    lessonNumber: 7,
    title: 'กลยุทธ์เตรียมตัวสอบและการแบ่งบทบาททีม 3 คน (Tri-Specialist Strategy & Countdown Plan)',
    category: 'general-it',
    description: 'กลยุทธ์การแบ่งหน้าที่ในทีม 3 คน (Tri-Specialist Strategy) ตารางซ้อมโค้งสุดท้ายก่อน 19 พฤศจิกายน 2569 และการรวบรวมแหล่งอ้างอิงมาตรฐานระดับโลก 20 สถาบัน',
    tags: ['กลยุทธ์ทีม', 'Tri-Specialist', 'แผนซ้อม', 'ตารางเวลา', 'แหล่งอ้างอิง'],
    readingTime: 15,
    updatedAt: '2026-11-09',
    sourcePages: 'หน้า 54–57',
    sections: [
      {
        id: 'sec-7-1',
        title: '7.1 การแบ่งบทบาทสมาชิกในทีม (Tri-Specialist Strategy)',
        content: `เนื่องจากกติกาการแข่งขัน UTCC Digital and AI Challenge 2026 กำหนดให้แข่งขันเป็นทีม ทีมละ 3 คน โดยในรอบคัดเลือกทุกทีมต้องช่วยกันทำข้อสอบปรนัย เพื่อคัดเอาเพียง 10 ทีมจาก 100 ทีมเข้าสู่รอบชิงชนะเลิศ การวางแผนแบ่งความเชี่ยวชาญเฉพาะทาง (Role Specialization) ภายในทีมจึงเป็นปัจจัยชี้ขาดชัยชนะ:

ไม่ควรให้สมาชิกทั้ง 3 คนอ่านทุกเรื่องแบบผิวเผินเหมือนกันหมด แต่ควรกำหนดให้ทุกคนมีความรู้พื้นฐานครบทั้ง 5 กลุ่ม และแบ่งความเชี่ยวชาญเชิงลึก (Deep Specialist) คนละ 2 กลุ่มวิชาเพื่อให้มีการตรวจสอบไขว้ (Cross-check) ดังตารางที่ 9:`,
        tables: [
          {
            caption: 'ตารางที่ 9: ตารางแบ่งบทบาทสมาชิกในทีม 3 คน (Tri-Specialist Role Matrix) (อ้างอิง Study Guide หน้า 54–55)',
            headers: ['สมาชิกในทีม', 'กลุ่มวิชาหลักที่รับผิดชอบเชิงลึก', 'กลุ่มวิชารองที่ช่วยตรวจสอบไขว้', 'หัวข้อสำคัญที่ต้องฝึกจนชำนาญ'],
            rows: [
              ['สมาชิก A (Infrastructure & Systems)', 'กลุ่ม 2: Network / Cloud และ กลุ่ม 3: Hardware / OS', 'กลุ่ม 1: General IT และความมั่นคงปลอดภัย', 'การคำนวณ Subnetting, VLSM, OSI 7 Layers, CPU Architecture, AMAT Cache, Linux Permissions, RAID'],
              ['สมาชิก B (Algorithms & Logic)', 'กลุ่ม 4: Programming & Algorithms และ กลุ่ม 3: Hardware (ระบบตัวเลข)', 'กลุ่ม 5: Machine Learning (ตรรกะคณิตศาสตร์และการคำนวณ)', 'การไล่ผังงาน Flowchart, ภาษาเทียม Pseudocode, ลูปและเงื่อนไข, ความซับซ้อน Big-O, Sorting/Search, พีชคณิตบูลีน, Dynamic Programming'],
              ['สมาชิก C (AI & Emerging Tech)', 'กลุ่ม 5: AI / Machine Learning และ กลุ่ม 1: General IT / ข่าวสารเทคโนโลยี', 'กลุ่ม 4: Programming (โครงสร้างข้อมูล Data Science)', 'Supervised/Unsupervised/RL, Data Preprocessing (Scaling/Encoding), Confusion Matrix & F1-Score, Neural Networks, LLM, RAG, PDPA, โนเบล 2024']
            ]
          }
        ]
      },
      {
        id: 'sec-7-2',
        title: '7.2 แผนตารางซ้อมโค้งสุดท้ายก่อนวันแข่งขัน (19 พฤศจิกายน 2569)',
        content: `1. ช่วงวันที่ 10–13 พฤศจิกายน 2569 (ปูพื้นฐานและเก็บรายละเอียด 5 กลุ่ม):
อ่านทบทวนเนื้อหาทั้ง 5 กลุ่มวิชาใน Study Platform ทำความเข้าใจสถาปัตยกรรม คำศัพท์ทางเทคนิค และทำความเข้าใจจุดหลอก 12 ข้อ

2. ช่วงวันที่ 14–16 พฤศจิกายน 2569 (ฝึกทำข้อสอบจำลองจับเวลาจริง):
นำข้อสอบจำลองทั้ง 100 ข้อในระบบ Quiz Mode มาฝึกทำแบบจับเวลาชุดละ 20 ข้อตามรูปแบบรอบคัดเลือกจริง เพื่อฝึกความเร็วในการส่งข้อสอบ (Tie-breaker)

3. ช่วงวันที่ 17–18 พฤศจิกายน 2569 (ทบทวนจุดผิดพลาดและเตรียมความพร้อมก่อนวันแข่ง):
ทบทวนเฉพาะข้อที่ตอบผิด ซ้อมทำโจทย์วิเคราะห์อัตนัย 3 ข้อใหญ่ของรอบชิงชนะเลิศ และเตรียมความพร้อมอุปกรณ์

4. วันพฤหัสบดีที่ 19 พฤศจิกายน 2569 (วันแข่งขันจริง):
08:30 น. รายงานตัว ณ ชั้น 1 อาคารหอประชุม มหาวิทยาลัยหอการค้าไทย`,
        callouts: [
          {
            type: 'tip',
            title: 'กุญแจสู่การผ่านรอบคัดเลือก 10 ทีม',
            content: 'รอบคัดเลือกคัดเหลือเพียง 10 ทีมจาก 100 ทีม (Top 10%) หากคะแนนเท่ากันจะตัดสินที่ "เวลาส่งข้อสอบ" ความแม่นยำและการตัดสินใจที่รวดเร็วจึงสำคัญที่สุด'
          }
        ]
      },
      {
        id: 'sec-7-3',
        title: '7.3 สรุปแหล่งข้อมูลอ้างอิงมาตรฐานระดับโลก 20 สถาบัน',
        content: `เนื้อหาและข้อสอบทั้งหมดใน Study Guide อ้างอิงจากแหล่งข้อมูลมาตรฐานระดับโลก 20 สถาบัน:
1. คณะวิทยาศาสตร์และเทคโนโลยี ม.หอการค้าไทย (UTCC STECH)
2. สมาคมโปรแกรมเมอร์ไทย และ สมาคมปัญญาประดิษฐ์ประเทศไทย (AIAT)
3. CAMPHUB, PorTCAS & DekPort (ฐานข้อมูลกติกาการแข่งขัน)
4. Computer History Museum (Timeline of Computer History, Charles Babbage & Ada Lovelace)
5. The Nobel Prize & University College London (Hopfield, Hinton, Hassabis, Jumper: 2024 Nobel Laureates)
6. National Institute of Standards and Technology (NIST SP 1800-26 CIA Triad & SP 800-207 Zero Trust)
7. สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) & วารสาร JISSD (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล PDPA)
8. Cisco Networking Academy & Cisco Documentation (OSI Model, TCP/IP, VLAN, Subnetting)
9. Cloudflare Learning Center (Network Layer, DNS, DoH, TLS, DDoS)
10. Amazon Web Services (AWS Types of Cloud, Shared Responsibility, Containerization, GraphRAG)
11. Google Cloud & Google Machine Learning Glossary (PaaS/IaaS/SaaS, RAG, Precision/Recall, Overfitting)
12. Microsoft Learn (Windows Architecture, NTFS, AMAT, Virtual Memory)
13. NVIDIA Technical Glossary (Deep Learning, LLMs, PyTorch, Model Quantization, FP4/FP16)
14. IBM Think Topics & Documentation (Cybersecurity, Zero Trust, Quantum Computing, Neural Networks)
15. Apple Support, Linux Kernel, Docker & Kubernetes Documentation (APFS, Linux Permissions, Pods)
16. Crucial Memory & Storage Guides (DDR5 vs DDR4 RAM, SSD NVMe vs SATA)
17. Python 3.15 Documentation & MDN Web Docs (Operator Precedence, Data Structures)
18. Harvard CS50x 2026 & MIT OpenCourseWare 6.006 (Algorithms, Big-O, Binary Search, Dynamic Programming)
19. Red Hat Linux Guides (Monolithic Kernel, Process States)
20. IEEE Computer Society (802.3 Ethernet, 802.11be Wi-Fi 7 Standards)`,
        keyTakeaways: [
          'เนื้อหาอ้างอิงตรงตามหลักสูตรสากลและเอกสารทางการ',
          'ทุกตัวเลข สูตรการคำนวณ และทฤษฎีได้รับการพิสูจน์ตามมาตรฐานวิชาการ'
        ]
      }
    ],
    summary: 'สรุปกลยุทธ์เตรียมตัวสอบและการแบ่งบทบาททีม 3 คน (Tri-Specialist Strategy) แผนซ้อมโค้งสุดท้าย และแหล่งข้อมูลอ้างอิงมาตรฐานสากล 20 สถาบัน',
    keyPoints: [
      'Tri-Specialist Strategy: สมาชิก 3 คนเชี่ยวชาญเฉพาะทางคนละ 2 กลุ่ม และตรวจสอบไขว้กัน',
      'รอบคัดเลือกตัดสินเวลาส่งเมื่อคะแนนเท่ากัน ความเร็วและแม่นยำคือปัจจัยชี้ขาด',
      'อ้างอิงมาตรฐาน 20 แหล่งสากล มั่นใจได้ในความถูกต้อง 100%'
    ]
  }
];

export function getTopicsByCategory(categoryId: string): StudyTopic[] {
  return STUDY_TOPICS.filter(t => t.category === categoryId);
}

export function getTopicById(topicId: string): StudyTopic | undefined {
  return STUDY_TOPICS.find(t => t.id === topicId);
}

export function getAllCategoriesWithCounts(): (CategoryInfo & { topicsCount: number })[] {
  return CATEGORIES.map(category => {
    const count = STUDY_TOPICS.filter(t => t.category === category.id).length;
    return {
      ...category,
      topicsCount: count
    };
  });
}

export function searchTopics(query: string): StudyTopic[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return STUDY_TOPICS;

  return STUDY_TOPICS.filter(topic => {
    const inTitle = topic.title.toLowerCase().includes(clean);
    const inDesc = topic.description.toLowerCase().includes(clean);
    const inTags = topic.tags.some(tag => tag.toLowerCase().includes(clean));
    const inSummary = topic.summary?.toLowerCase().includes(clean);
    const inTerms = topic.importantTerms?.some(
      term => term.term.toLowerCase().includes(clean) || term.definition.toLowerCase().includes(clean)
    );
    const inSections = topic.sections.some(
      sec => sec.title.toLowerCase().includes(clean) || sec.content.toLowerCase().includes(clean)
    );

    return inTitle || inDesc || inTags || inSummary || inTerms || inSections;
  });
}

export interface AdvancedQuestionStep {
  step: string;
  detail: string;
}

export interface AdvancedQuestionRubric {
  criterion: string;
  points: number;
}

export interface AdvancedQuestion {
  id: string;
  title: string;
  categoryId: 'general-it' | 'network-cloud' | 'hardware-os' | 'programming-algo' | 'ai-datascience';
  categoryNumber: number;
  categoryName: string;
  topic: string;
  scenario: string;
  questionPrompt: string;
  maxScore: number;
  rubric: AdvancedQuestionRubric[];
  solutionSteps: AdvancedQuestionStep[];
  modelAnswer: string;
  keyTakeaways: string;
  sourcePage: number;
}

export const ADVANCED_QUESTIONS: AdvancedQuestion[] = [
  {
    id: "adv-1",
    title: "โจทย์ข้อเขียนข้อที่ 1: สถาปัตยกรรม von Neumann, วงจรอุปกรณ์ และองค์ประกอบหลัก",
    categoryId: "general-it",
    categoryNumber: 1,
    categoryName: "ความรู้ทั่วไปด้านไอทีและโทรคมนาคม",
    topic: "von Neumann Architecture & Instruction Processing Cycle",
    scenario: "ระบบคอมพิวเตอร์ที่ใช้งานในปัจจุบัน ไม่ว่าจะเป็นพีซี แล็ปท็อป สมาร์ตโฟน หรือเซิร์ฟเวอร์คลาวด์ ล้วนพัฒนาบนพื้นฐานสถาปัตยกรรมฟอนนอยมันน์ (von Neumann Architecture) ที่แบ่งการทำงานของระบบออกเป็นหน่วยต่างๆ จงอธิบายหลักการทำงานขององค์ประกอบหลัก 4 ส่วน (CPU, Memory, Input/Output, Bus System) และวงรอบการประมวลผลคำสั่ง (Instruction Cycle)",
    questionPrompt: "1. อธิบายหน้าที่ของ Control Unit (CU), Arithmetic Logic Unit (ALU), Registers และหน่วยความจำหลัก (RAM)\n2. อธิบายขั้นตอนการทำงานของ Instruction Cycle (Fetch, Decode, Execute, Store)\n3. ปัญหา von Neumann Bottleneck คืออะไร และเทคโนโลยีคอมพิวเตอร์สมัยใหม่ใช้แนวทางใดในการลดปัญหานี้",
    maxScore: 10,
    rubric: [
      { criterion: "อธิบายหน้าที่ของ CU, ALU, Registers, RAM ถูกต้องครบถ้วน", points: 3 },
      { criterion: "ลำดับขั้นตอน Instruction Cycle (Fetch, Decode, Execute, Store) ละเอียดถูกต้อง", points: 3 },
      { criterion: "วิเคราะห์สาเหตุ von Neumann Bottleneck และแนวทางแก้ไข (Cache Hierarchy, Pipelining) ชัดเจน", points: 4 }
    ],
    solutionSteps: [
      {
        step: "1. องค์ประกอบหลักของ CPU และหน่วยความจำ",
        detail: "• Control Unit (CU): ทำหน้าที่ควบคุมและประสานงานคำสั่งการทำงานทั้งหมดของระบบ ถอดรหัสคำสั่ง และส่งสัญญาณควบคุม\n• ALU: ทำหน้าที่คำนวณทางคณิตศาสตร์ (+, -, *, /) และเปรียบเทียบทางตรรกศาสตร์ (AND, OR, NOT)\n• Registers: หน่วยความจำความเร็วสูงที่สุดภายใน CPU เพื่อเก็บข้อมูลและคำสั่งที่กำลังประมวลผล เช่น Program Counter (PC), Instruction Register (IR), Accumulator (ACC)\n• RAM (Main Memory): หน่วยความจำหลักที่เก็บทั้งโปรแกรมคำสั่งและข้อมูลที่โปรแกรมใช้งานแบบชั่วคราว (Volatile)"
      },
      {
        step: "2. วงรอบการประมวลผลคำสั่ง (Instruction Cycle)",
        detail: "1. Fetch: CU ดึงคำสั่งจาก RAM ตามตำแหน่งแอดเดรสที่ระบุใน Program Counter (PC) มาเก็บไว้ใน Instruction Register (IR) และเพิ่มค่า PC ขึ้น 1\n2. Decode: CU แปลความหมายของรหัสคำสั่ง (Opcode) ว่าต้องกระทำสิ่งใดและระบุตำแหน่งของ Operand\n3. Execute: ส่งสัญญาณให้ ALU หรือหน่วยที่เกี่ยวข้องดำเนินการคำนวณหรือประมวลผลตามคำสั่ง\n4. Store (Writeback): บันทึกผลลัพธ์ที่ได้จากการคำนวณกลับลงใน Register หรือ RAM เพื่อนำไปใช้งานต่อไป"
      },
      {
        step: "3. ปัญหา von Neumann Bottleneck และแนวทางแก้ไข",
        detail: "ปัญหา von Neumann Bottleneck เกิดจากการที่ความเร็วในการประมวลผลของ CPU พัฒนาไปเร็วกว่าความเร็วบัส (Bus) ในการส่งผ่านข้อมูลและคำสั่งระหว่าง CPU กับ RAM อย่างมหาศาล ทำให้ CPU ต้องรอคอยข้อมูล (Idle state)\nแนวทางแก้ไข:\n1. การใช้ลำดับชั้นหน่วยความจำแคช (Cache Memory L1, L2, L3) ความเร็วสูงภายในชิป CPU\n2. เทคนิค Instruction Pipelining และ Superscalar เพื่อประมวลผลคำสั่งเหลื่อมเวลากัน\n3. การใช้บัสแบบมัลติแชนแนล (Dual/Quad Channel) และหน่วยความจำรุ่นใหม่ความเร็วสูง (DDR5, HBM)"
      }
    ],
    modelAnswer: "1. องค์ประกอบหลัก:\n- Control Unit (CU) ควบคุมลำดับการทำงานและถอดรหัสคำสั่ง\n- ALU ทำการคำนวณคณิตศาสตร์และตรรกะ\n- Registers เป็นหน่วยความจำขนาดเล็กความเร็วสูงมากในซีพียูสำหรับพักข้อมูลคำสั่งเฉพาะหน้า\n- RAM เป็นหน่วยความจำหลักสำหรับเก็บโปรแกรมและข้อมูลขณะทำงาน\n\n2. Instruction Cycle:\n- Fetch: ดึงคำสั่งจาก RAM มายัง IR โดยใช้ตัวชี้ PC\n- Decode: ถอดรหัสคำสั่งเพื่อระบุการทำงานและ Operand\n- Execute: ประมวลผลคำสั่งผ่าน ALU หรือหน่วยควบคุม\n- Store: เขียนผลลัพธ์ลงใน Register หรือหน่วยความจำ\n\n3. von Neumann Bottleneck คือคอขวดที่เกิดจากความจุและแบนด์วิดท์ของระบบส่งข้อมูล (Bus) ระหว่าง CPU กับ RAM ช้ากว่าความเร็วการคำนวณของ CPU แก้ไขโดยใช้ Cache L1/L2/L3 ความเร็วสูง, Pipelining, Branch Prediction และการเชื่อมต่อแบบความเร็วสูง",
    keyTakeaways: "von Neumann Architecture ใช้บัสร่วมกันระหว่างข้อมูลและคำสั่ง ทำให้เกิดคอขวดด้านแบนด์วิดท์ การใช้ Cache Hierarchy จึงเป็นหัวใจสำคัญของคอมพิวเตอร์ยุคใหม่",
    sourcePage: 52
  },
  {
    id: "adv-2",
    title: "โจทย์ข้อเขียนข้อที่ 2: กฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA) และแบบจำลอง CIA Triad",
    categoryId: "general-it",
    categoryNumber: 1,
    categoryName: "ความรู้ทั่วไปด้านไอทีและโทรคมนาคม",
    topic: "PDPA Compliance, Cyber Security & CIA Triad Framework",
    scenario: "โรงพยาบาลเอกชนแห่งหนึ่งกำลังพัฒนาแพลตฟอร์มการแพทย์ทางไกล (Telemedicine) เพื่อตรวจรักษาผู้ป่วยผ่านระบบออนไลน์ ซึ่งระบบมีการเก็บประวัติการรักษา ข้อมูลภาพสแกน โรคประจำตัว และข้อมูลการชำระเงิน ในฐานะที่ปรึกษาด้านความปลอดภัยสารสนเทศ ท่านต้องวางแนวทางปฏิบัติตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) และหลักการความมั่นคงปลอดภัยสารสนเทศ CIA Triad",
    questionPrompt: "1. อธิบายความแตกต่างของบทบาทระหว่าง Data Controller (ผู้ควบคุมข้อมูล) และ Data Processor (ผู้ประมวลผลข้อมูล) ในสถานการณ์นี้\n2. ระบุสิทธิของเจ้าของข้อมูลส่วนบุคคล (Data Subject Rights) อย่างน้อย 4 สิทธิ ที่โรงพยาบาลต้องจัดให้มีช่องทางรองรับ\n3. เสนอมาตรการทางเทคนิคเพื่อปกป้องระบบตามหลัก CIA Triad (Confidentiality, Integrity, Availability)",
    maxScore: 10,
    rubric: [
      { criterion: "จำแนกบทบาท Data Controller และ Data Processor ได้ถูกต้องตามบริบท", points: 2.5 },
      { criterion: "ระบุสิทธิของเจ้าของข้อมูลตาม PDPA ถูกต้อง 4 สิทธิ พร้อมอธิบายแนวทางปฏิบัติ", points: 2.5 },
      { criterion: "เสนอมาตรการทางเทคนิคครอบคลุม Confidentiality, Integrity และ Availability ครบทั้ง 3 มิติ", points: 5 }
    ],
    solutionSteps: [
      {
        step: "1. Data Controller vs Data Processor",
        detail: "• Data Controller (ผู้ควบคุมข้อมูลส่วนบุคคล): คือโรงพยาบาล มีอำนาจตัดสินใจเกี่ยวกับการรวบรวม ใช้ หรือเปิดเผยข้อมูลคนไข้ เพื่อวัตถุประสงค์การตรวจรักษาและการแพทย์\n• Data Processor (ผู้ประมวลผลข้อมูลส่วนบุคคล): คือบริษัทผู้ให้บริการคลาวด์หรือบริษัทผู้พัฒนาระบบซอฟต์แวร์ภายนอกที่ดำเนินการประมวลผลข้อมูลตามคำสั่งและในนามของโรงพยาบาลเท่านั้น"
      },
      {
        step: "2. สิทธิของเจ้าของข้อมูลส่วนบุคคล (Data Subject Rights 4 สิทธิ)",
        detail: "1. สิทธิในการขอเข้าถึงและรับสำเนาข้อมูล (Right of Access)\n2. สิทธิในการขอแก้ไขข้อมูลให้ถูกต้องเป็นปัจจุบัน (Right to Rectification)\n3. สิทธิในการขอให้ลบ ทำลาย หรือทำให้เป็นข้อมูลไม่สามารถระบุตัวตนได้ (Right to Erasure / Forgotten)\n4. สิทธิในการเพิกถอนความยินยอม (Right to Withdraw Consent) ในส่วนที่ไม่ขัดกับกฎหมายการรักษาพยาบาล"
      },
      {
        step: "3. มาตรการตามกรอบ CIA Triad",
        detail: "• Confidentiality (การรักษาความลับ): การเข้ารหัสข้อมูล (Encryption) ทั้ง Data at Rest (AES-256) และ Data in Transit (TLS 1.3), กำหนดสิทธิ์แบบ Role-Based Access Control (RBAC), ใช้ Multi-Factor Authentication (MFA)\n• Integrity (ความถูกต้องสมบูรณ์): ตรวจสอบความถูกต้องของเวชระเบียนด้วย Cryptographic Hash (SHA-256), เก็บล็อกการเข้าถึงและการแก้ไขที่ไม่สามารถปลอมแปลงได้ (Audit Log / WORM)\n• Availability (ความพร้อมใช้งาน): ออกแบบระบบสำรองข้อมูลอัตโนมัติ (Automated Backup & Disaster Recovery), จัดทำ High Availability (HA) คลัสเตอร์แบบกระจายเซิร์ฟเวอร์ และมีระบบป้องกันการโจมตี DDoS"
      }
    ],
    modelAnswer: "1. บทบาท:\n- Data Controller: โรงพยาบาล มีอำนาจตัดสินใจวัตถุประสงค์และวิธีการใช้ข้อมูล\n- Data Processor: ผู้ให้บริการระบบ Cloud / ซอฟต์แวร์ที่ทำหน้าที่จัดเก็บและคำนวณตามคำสั่งโรงพยาบาล\n\n2. สิทธิเจ้าของข้อมูล 4 ประการ:\n1) สิทธิขอเข้าถึงและรับสำเนาข้อมูล\n2) สิทธิขอให้แก้ไขข้อมูลให้ถูกต้อง\n3) สิทธิขอให้ลบหรือทำลายข้อมูลเมื่อหมดความจำเป็น\n4) สิทธิขอเพิกถอนความยินยอม\n\n3. มาตรการ CIA Triad:\n- Confidentiality: เข้ารหัสข้อมูล AES-256 และ TLS 1.3 ร่วมกับ MFA และการจำกัดสิทธิ์ Least Privilege\n- Integrity: ใช้ Digital Signatures, Checksum/Hash และระบบ Audit Logging ป้องกันการแก้ไขประวัติโดยมิชอบ\n- Availability: ใช้ระบบสำรองข้อมูล Multi-Region Cloud, Load Balancer และระบบกู้คืนภัยพิบัติ (Disaster Recovery)",
    keyTakeaways: "PDPA กำหนดหน้าที่ความรับผิดชอบอย่างเข้มงวดต่อข้อมูลสุขภาพ (Sensitive Data) ต้องมีมาตรการรักษาความปลอดภัยทั้งเชิงนโยบายและเชิงเทคนิคตามหลัก CIA Triad เสมอ",
    sourcePage: 52
  },
  {
    id: "adv-3",
    title: "โจทย์ข้อเขียนข้อที่ 3: การออกแบบจัดสรรเครือข่ายย่อย VLSM และการแก้ปัญหาเราติง",
    categoryId: "network-cloud",
    categoryNumber: 2,
    categoryName: "เทคโนโลยีเครือข่าย/Infrastructure/Cloud Computing",
    topic: "VLSM Subnet Design, IP Planning & Default Gateway Troubleshooting",
    scenario: "บริษัทเทคโนโลยีได้รับบล็อกเครือข่ายภายในคือ 192.168.10.0/24 และต้องแบ่งจัดสรรซับเน็ตแบบประหยัดที่สุด (VLSM) ให้กับ 4 แผนกที่มีความต้องการจำนวนโฮสต์แตกต่างกัน:\n1. แผนก AI Lab: ต้องการไอพีสำหรับใช้งานจริง 58 เครื่อง\n2. แผนก Cloud Service: ต้องการไอพีสำหรับใช้งานจริง 26 เครื่อง\n3. แผนก Cyber Security: ต้องการไอพีสำหรับใช้งานจริง 12 เครื่อง\n4. ลิงก์เชื่อมต่อเราเตอร์แบบจุดต่อจุด (Point-to-Point WAN Link): ต้องการ 2 โฮสต์",
    questionPrompt: "1. จงหา Prefix (/p), Subnet Mask, Network Address, Broadcast Address และช่วง Usable Host IP ของทั้ง 4 ซับเน็ตโดยเรียงลำดับจากขนาดใหญ่ไปเล็ก\n2. หากคอมพิวเตอร์ในแผนก AI Lab เครื่องหนึ่งเชื่อมต่อสาย LAN และได้รับไอพีถูกต้อง สามารถ Ping ไปยัง Default Gateway ได้ แต่ไม่สามารถเปิดเว็บภายนอกได้ (Ping 8.8.8.8 ไม่ผ่าน) จงวิเคราะห์สาเหตุที่เป็นไปได้ 2 ประการและวิธีตรวจสอบ",
    maxScore: 10,
    rubric: [
      { criterion: "คำนวณและจัดสรรซับเน็ตทั้ง 4 ชุดด้วย VLSM ได้ถูกต้อง ไม่มีการทับซ้อนของช่วงแอดเดรส", points: 6 },
      { criterion: "ระบุ Subnet Mask, Network, Broadcast และ Usable IP ครบถ้วน", points: 2 },
      { criterion: "วิเคราะห์สาเหตุการเชื่อมต่ออินเทอร์เน็ตไม่ได้ (NAT/Routing/WAN Link) และวิธีตรวจสอบถูกต้อง", points: 2 }
    ],
    solutionSteps: [
      {
        step: "1. ซับเน็ตที่ 1: แผนก AI Lab (ต้องการ 58 โฮสต์)",
        detail: "หาบิตโฮสต์ h ที่ 2^h - 2 >= 58 -> h = 6 (2^6 - 2 = 62 โฮสต์, บล็อกขนาด 64)\nPrefix: 32 - 6 = /26 (Subnet Mask: 255.255.255.192)\n• Network: 192.168.10.0/26\n• Usable IP: 192.168.10.1 - 192.168.10.62\n• Broadcast: 192.168.10.63"
      },
      {
        step: "2. ซับเน็ตที่ 2: แผนก Cloud Service (ต้องการ 26 โฮสต์)",
        detail: "หาบิตโฮสต์ h ที่ 2^h - 2 >= 26 -> h = 5 (2^5 - 2 = 30 โฮสต์, บล็อกขนาด 32)\nPrefix: 32 - 5 = /27 (Subnet Mask: 255.255.255.224)\n• Network: 192.168.10.64/27\n• Usable IP: 192.168.10.65 - 192.168.10.94\n• Broadcast: 192.168.10.95"
      },
      {
        step: "3. ซับเน็ตที่ 3: แผนก Cyber Security (ต้องการ 12 โฮสต์)",
        detail: "หาบิตโฮสต์ h ที่ 2^h - 2 >= 12 -> h = 4 (2^4 - 2 = 14 โฮสต์, บล็อกขนาด 16)\nPrefix: 32 - 4 = /28 (Subnet Mask: 255.255.255.240)\n• Network: 192.168.10.96/28\n• Usable IP: 192.168.10.97 - 192.168.10.110\n• Broadcast: 192.168.10.111"
      },
      {
        step: "4. ซับเน็ตที่ 4: Point-to-Point WAN Link (ต้องการ 2 โฮสต์)",
        detail: "หาบิตโฮสต์ h ที่ 2^h - 2 >= 2 -> h = 2 (2^2 - 2 = 2 โฮสต์, บล็อกขนาด 4)\nPrefix: 32 - 2 = /30 (Subnet Mask: 255.255.255.252)\n• Network: 192.168.10.112/30\n• Usable IP: 192.168.10.113 - 192.168.10.114\n• Broadcast: 192.168.10.115"
      },
      {
        step: "5. การวิเคราะห์ปัญหาเครือข่าย",
        detail: "การที่ Ping ไปยัง Default Gateway ได้ แสดงว่า Layer 1, 2 และ 3 ในเครือข่ายแลนภายในทำงานปกติ สาเหตุที่ Ping 8.8.8.8 ไม่ผ่านเกิดจาก:\n1. เราเตอร์ไม่มี Default Route ออกสู่เครือข่ายภายนอก (0.0.0.0/0) หรือขา WAN ขาดการเชื่อมต่อ ตรวจสอบด้วยคำสั่ง `traceroute 8.8.8.8` หรือ `show ip route` บนเราเตอร์\n2. เราเตอร์ไม่ได้เปิดใช้งาน Network Address Translation (NAT) หรือไม่ได้ทำ Overload (PAT) ทำให้ IP ไพรเวตไม่สามารถสื่อสารบนอินเทอร์เน็ตได้ ตรวจสอบสถานะ NAT translation บนเราเตอร์"
      }
    ],
    modelAnswer: "1. การจัดสรร VLSM:\n• AI Lab (58 โฮสต์): 192.168.10.0/26 (Mask: 255.255.255.192), Usable: .1 - .62, Broadcast: .63\n• Cloud Service (26 โฮสต์): 192.168.10.64/27 (Mask: 255.255.255.224), Usable: .65 - .94, Broadcast: .95\n• Cyber Security (12 โฮสต์): 192.168.10.96/28 (Mask: 255.255.255.240), Usable: .97 - .110, Broadcast: .111\n• WAN Link (2 โฮสต์): 192.168.10.112/30 (Mask: 255.255.255.252), Usable: .113 - .114, Broadcast: .115\n\n2. ปัญหา Ping 8.8.8.8 ไม่ผ่าน:\n1) ขาดการตั้งค่า NAT/PAT บนเราเตอร์ ทำให้ไอพีภายในไม่ได้รับการแปลงเป็น Public IP\n2) ขาด Default Route (0.0.0.0/0) บนเราเตอร์ หรือสายสัญญาณขา WAN สู่ ISP มีปัญหา ตรวจสอบด้วยคำสั่ง traceroute",
    keyTakeaways: "กฎเหล็กของ VLSM คือต้องจัดสรรบลอกจากกลุ่มความต้องการโฮสต์ 'มากที่สุดไปน้อยที่สุด' เสมอ เพื่อป้องกันบล็อกไอพีแยกกระจาย",
    sourcePage: 53
  },
  {
    id: "adv-4",
    title: "โจทย์ข้อเขียนข้อที่ 4: การเปรียบเทียบคลาวด์โมเดล (IaaS, PaaS, SaaS) และกลไก DHCP / DNS",
    categoryId: "network-cloud",
    categoryNumber: 2,
    categoryName: "เทคโนโลยีเครือข่าย/Infrastructure/Cloud Computing",
    topic: "Cloud Computing Models & Core Infrastructure Protocols (DORA & DNS Resolution)",
    scenario: "มหาวิทยาลัยกำลังวางแผนย้ายระบบบริการการศึกษาขึ้นสู่คลาวด์ ขณะเดียวกันห้องแล็บคอมพิวเตอร์เกิดปัญหานักเรียนเชื่อมต่อเครือข่ายแล้วเปิดเว็บด้วยชื่อโดเมน (เช่น www.utcc.ac.th) ไม่ได้ แต่สามารถเปิดเว็บด้วย IP แอดเดรสตรงได้",
    questionPrompt: "1. อธิบายเปรียบเทียบ IaaS, PaaS, และ SaaS ในมุมมองของความรับผิดชอบ (Shared Responsibility) สิ่งที่ผู้ให้บริการดูแล และสิ่งที่องค์กรต้องดูแลเอง\n2. อธิบายขั้นตอนการทำงานของ DHCP ในการขอรับไอพีแอดเดรสอัตโนมัติผ่านกระบวนการ DORA (Discover, Offer, Request, Acknowledge)\n3. วิเคราะห์สาเหตุที่เปิดเว็บด้วยชื่อ URL ไม่ได้แต่เปิดด้วย IP ได้ และอธิบายกระบวนการ Recursive DNS Resolution เมื่อไคลเอนต์ต้องการแปลงชื่อโดเมน",
    maxScore: 10,
    rubric: [
      { criterion: "เปรียบเทียบ IaaS, PaaS, SaaS และความรับผิดชอบร่วมได้ถูกต้องครบถ้วน", points: 3.5 },
      { criterion: "อธิบายขั้นตอน DORA ของ DHCP ได้ถูกต้องครบทั้ง 4 ขั้นตอน", points: 3 },
      { criterion: "ระบุสาเหตุปัญหา DNS และอธิบายลำดับการแปลงชื่อ Recursive DNS Resolution ถูกต้อง", points: 3.5 }
    ],
    solutionSteps: [
      {
        step: "1. เปรียบเทียบโมเดลบริการคลาวด์ (Shared Responsibility)",
        detail: "• IaaS (Infrastructure as a Service): ผู้ให้บริการดูแล Hardware, Virtualization, Storage, Data Center ผู้ใช้ต้องดูแล OS, Middleware, Runtime, Data และ Application (เช่น AWS EC2, Azure VM)\n• PaaS (Platform as a Service): ผู้ให้บริการดูแลไปจนถึง OS, Runtime, Database ผู้ใช้ดูแลเฉพาะ Code โปรแกรมและ Data (เช่น Google App Engine, Vercel, Firebase)\n• SaaS (Software as a Service): ผู้ให้บริการดูแลทุกอย่างแบบเบ็ดเสร็จ ผู้ใช้เพียงแค่ล็อกอินใช้งานผ่านเบราว์เซอร์ (เช่น Google Workspace, Microsoft 365)"
      },
      {
        step: "2. ขั้นตอนการแจกจ่ายไอพีของ DHCP (DORA Process)",
        detail: "1. Discover: ไคลเอนต์ส่ง Broadcast ข้อความ DHCPDISCOVER ค้นหาเซิร์ฟเวอร์\n2. Offer: DHCP Server ตอบกลับด้วย DHCPOFFER เสนอไอพีแอดเดรส ซับเน็ตมาร์ก เกตเวย์ และ DNS\n3. Request: ไคลเอนต์ส่ง Broadcast ข้อความ DHCPREQUEST แจ้งความจำนงรับข้อเสนอนั้น\n4. Acknowledge: เซิร์ฟเวอร์ตอบกลับด้วย DHCPACK ยืนยันการผูกแอดเดรสและเริ่มนับเวลา Lease Time"
      },
      {
        step: "3. ปัญหา DNS และกระบวนการ Recursive Resolution",
        detail: "สาเหตุ: ปัญหาเกิดจากระบบ DNS ทำงานล้มเหลว เช่น ตั้งค่า DNS Server ผิดพลาด, DNS Cache เสียหาย หรือพอร์ต UDP 53 ถูกบล็อก\nกระบวนการแปลงชื่อ (DNS Resolution):\n1. ไคลเอนต์ค้นหาใน Local Cache / Hosts file หากไม่พบจะส่งถาม Recursive Resolver (เช่น 8.8.8.8)\n2. Resolver ส่งถาม Root Name Server (.) เพื่อรับแอดเดรสของ TLD Server (.th)\n3. Resolver ถาม TLD Name Server (.ac.th) เพื่อรับแอดเดรสของ Authoritative Name Server ของโดเมน\n4. Resolver ถาม Authoritative Name Server (utcc.ac.th) เพื่อรับค่า A Record (IP Address) ส่งกลับให้ไคลเอนต์"
      }
    ],
    modelAnswer: "1. โมเดลคลาวด์:\n- IaaS: เช่าโครงสร้างพื้นฐาน (VM/Storage/Network) ผู้ใช้ติดตั้งและดูแล OS รวมถึงแอปพลิเคชันเอง\n- PaaS: เช่าแพลตฟอร์มพร้อมสภาพแวดล้อมรันโปรแกรม ผู้ใช้ดูแลเฉพาะซอร์สโค้ดและข้อมูล\n- SaaS: ใช้งานซอฟต์แวร์สำเร็จรูปผ่านเว็บ ผู้ให้บริการดูแลระบบทั้งหมด\n\n2. ขั้นตอน DORA:\n- Discover: ไคลเอนต์บรอดแคสต์หาเซิร์ฟเวอร์\n- Offer: เซิร์ฟเวอร์เสนอไอพีและพารามิเตอร์\n- Request: ไคลเอนต์ร้องขอใช้ไอพีที่เสนอ\n- Acknowledge: เซิร์ฟเวอร์ส่งคำยืนยันการให้เช่าไอพี\n\n3. ปัญหาเปิดชื่อเว็บไม่ได้: เกิดจาก DNS Server ใช้งานไม่ได้หรือตั้งค่าไม่ถูกต้อง การแปลงชื่อจะเริ่มต้นจาก Local Cache -> Recursive Resolver -> Root Server -> TLD Server -> Authoritative Server เพื่อนำ IP กลับมาติดต่อ",
    keyTakeaways: "เมื่อระบบเข้าเว็บด้วย IP ได้แต่ชื่อไม่ได้ ปัญหาอยู่ที่ Name Resolution (DNS) เสมอ ตรวจสอบได้ด้วยเครื่องมือ nslookup หรือ dig",
    sourcePage: 53
  },
  {
    id: "adv-5",
    title: "โจทย์ข้อเขียนข้อที่ 5: การทำงานของ Memory Hierarchy, หน่วยความจำเสมือน และปรากฏการณ์ Thrashing",
    categoryId: "hardware-os",
    categoryNumber: 3,
    categoryName: "กลุ่ม Hardware และระบบปฏิบัติการ",
    topic: "Computer Architecture, Memory Hierarchy, Virtual Memory & OS Paging",
    scenario: "ในการประมวลผลโมเดลปัญญาประดิษฐ์และการจำลองข้อมูลทางสถิติขนาดใหญ่ เครื่องคอมพิวเตอร์จำเป็นต้องประสานงานระหว่าง CPU, แคชหลายระดับ, หน่วยความจำหลัก RAM และพื้นที่จัดเก็บบน NVMe SSD หากแอปพลิเคชันต้องการหน่วยความจำมากกว่า RAM ทางกายภาพ ระบบปฏิบัติการจะเปิดใช้งาน Virtual Memory",
    questionPrompt: "1. จงเรียงลำดับหน่วยความจำใน Memory Hierarchy จากเร็วที่สุดไปช้าที่สุด (พร้อมระบุขนาดความจุโดยประมาณของแต่ละระดับ)\n2. อธิบายหลักการทำงานของ Virtual Memory, Page Table, Page Hit และ Page Fault\n3. ปรากฏการณ์ Thrashing ในระบบปฏิบัติการคืออะไร มีสาเหตุจากสิ่งใด และมีแนวทางป้องกันแก้ไขอย่างไร",
    maxScore: 10,
    rubric: [
      { criterion: "เรียงลำดับ Memory Hierarchy จากเร็วไปช้า พร้อมระบุความจุและบทบาทถูกต้อง", points: 3 },
      { criterion: "อธิบายกลไก Virtual Memory, Page Table, Page Hit และ Page Fault ได้ชัดเจน", points: 4 },
      { criterion: "วิเคราะห์สาเหตุของ Thrashing และเสนอแนวทางแก้ไขทั้งระดับฮาร์ดแวร์และโอเอสได้ครบถ้วน", points: 3 }
    ],
    solutionSteps: [
      {
        step: "1. การจัดลำดับ Memory Hierarchy",
        detail: "1. CPU Registers: เร็วที่สุดในระดับ Sub-nanosecond (ความจุระดับ Bytes/KB)\n2. L1 Cache: อยู่ในแกนประมวลผล (ความจุ 32 - 128 KB ต่อคอร์)\n3. L2 Cache: เร็วสูง (ความจุ 512 KB - 2 MB ต่อคอร์)\n4. L3 Cache: แคชที่แชร์ร่วมกันทุกคอร์ (ความจุ 8 - 96 MB)\n5. RAM (Main Memory): หน่วยความจำหลัก Volatile (ความจุ 8 - 128 GB, ความเร็วระดับ 50-80 GB/s)\n6. Secondary Storage (NVMe/SATA SSD): Non-volatile (ความจุ 512 GB - 4 TB, ความเร็วระดับ 500 - 7,000 MB/s)\n7. Tertiary/Cold Storage (HDD, Magnetic Tape): ช้าที่สุด ความจุระดับหลาย Terabytes/Petabytes"
      },
      {
        step: "2. กลไก Virtual Memory และ Paging",
        detail: "• Virtual Memory: เทคนิคที่ขยายพื้นที่หน่วยความจำจำลองให้กับโปรแกรมโดยใช้ฮาร์ดดิสก์/SSD เป็นพื้นที่เสมือน (Swap/Pagefile)\n• Paging: แบ่งพื้นที่ Logical Memory เป็นบล็อกขนาดคงที่เรียกว่า Pages (เช่น 4 KB) และแบ่ง Physical Memory ออกเป็น Frames\n• Page Table: ตารางที่จับคู่ Virtual Address ไปยัง Physical Frame Address บริหารจัดการโดยฮาร์ดแวร์ MMU (Memory Management Unit)\n• Page Hit: ข้อมูลหน้าหน่วยความจำที่ต้องการมีอยู่ใน RAM จริง พร้อมให้ CPU อ่านได้ทันที\n• Page Fault: ข้อมูลหน้าหน่วยความจำที่ต้องการไม่ได้อยู่ใน RAM โอเอสต้องระงับโปรแกรมชั่วคราวและสั่งดึงหน้านั้นจาก SSD เข้ามายัง RAM"
      },
      {
        step: "3. ปรากฏการณ์ Thrashing และการแก้ไข",
        detail: "• นิยาม: Thrashing คือสภาวะที่ระบบปฏิบัติการใช้เวลาส่วนใหญ่ไปกับการสลับหน้าหน่วยความจำเข้า-ออกจากดิสก์ (Swapping/Paging) มากกว่าการประมวลผลจริง ทำให้ CPU Utilization ลดลงเกือบเหลือ 0 และระบบค้างชะงัก\n• สาเหตุ: ผลรวมของ Working Set Size ของโปรแกรมทั้งหมดที่กำลังทำงานเกินกว่าขนาด RAM กายภาพที่มีอยู่จริง\n• แนวทางแก้ไข:\n1. ด้านฮาร์ดแวร์: อัปเกรดเพิ่มขนาดหน่วยความจำกายภาพ (RAM) หรือเปลี่ยนไปใช้ SSD ความเร็วสูงเพื่อลด Latency ของการ Swap\n2. ด้านระบบปฏิบัติการ: ลดระดับการรันมัลติโปรแกรมมิ่ง (Degree of Multiprogramming) หรือปิดโปรแกรมที่ไม่จำเป็น\n3. ปรับแต่งอัลกอริทึม Page Replacement เช่น การใช้อัลกอริทึม Working Set Model หรือ Page Fault Frequency (PFF)"
      }
    ],
    modelAnswer: "1. ลำดับ Memory Hierarchy (เร็วไปช้า):\nRegisters (< 1 KB) -> L1 Cache (KB) -> L2 Cache (MB) -> L3 Cache (MB) -> RAM (GB) -> NVMe SSD (TB) -> HDD (TB)\n\n2. กลไก Virtual Memory:\nระบบแบ่งหน่วยความจำโปรแกรมเป็น Pages และ RAM จริงเป็น Frames โดยมี Page Table แปลงแอดเดรส หากหน้าที่ต้องการอยู่ใน RAM จะเกิด Page Hit หากไม่อยู่จะเกิด Page Fault ซึ่งระบบปฏิบัติการจะโหลดหน้านั้นจาก SSD มาไว้ใน RAM\n\n3. Thrashing:\nคือภาวะที่ระบบใช้เวลาสลับหน้าข้อมูลระหว่าง RAM กับดิสก์ตลอดเวลาจนระบบค้าง เกิดจาก RAM จริงไม่พอกับขนาดหน่วยความจำที่แอปพลิเคชันต้องการใช้งานพร้อมกัน แก้ไขโดยการปิดโปรแกรมส่วนเกิน ลดระดับการทำงานพร้อมกัน หรืออัปเกรดเพิ่ม RAM ทางกายภาพ",
    keyTakeaways: "Virtual Memory ช่วยให้รันโปรแกรมขนาดใหญ่กว่า RAM จริงได้ แต่การมี Page Fault บ่อยเกินไปจะนำไปสู่ปัญหา Thrashing ที่ทำให้ระบบหยุดตอบสนอง",
    sourcePage: 53
  },
  {
    id: "adv-6",
    title: "โจทย์ข้อเขียนข้อที่ 6: การเปรียบเทียบระบบปฏิบัติการ (Windows vs Linux) และสถาปัตยกรรม VM vs Container",
    categoryId: "hardware-os",
    categoryNumber: 3,
    categoryName: "กลุ่ม Hardware และระบบปฏิบัติการ",
    topic: "Operating System Architecture, POSIX vs ACL, Hypervisor Type 1/2 vs Docker Containers",
    scenario: "ทีมวิศวกรซอฟต์แวร์กำลังออกแบบระบบเซิร์ฟเวอร์สำหรับแอปพลิเคชันองค์กร โดยต้องตัดสินใจเลือกระบบปฏิบัติการพื้นฐาน (Windows Server vs Linux Ubuntu) และต้องเลือกระหว่างการรันแอปพลิเคชันบน Virtual Machine (VM) ผ่าน Hypervisor หรือการรันด้วย Containerization (Docker)",
    questionPrompt: "1. เปรียบเทียบความแตกต่างระหว่าง Windows และ Linux ใน 3 ประเด็น: โครงสร้าง Kernel (Monolithic vs Hybrid), ระบบไฟล์ (NTFS vs ext4), และระบบสิทธิ์การเข้าถึงไฟล์ (File Permissions)\n2. อธิบายความแตกต่างระหว่าง Type 1 Hypervisor (Bare-metal) และ Type 2 Hypervisor (Hosted) พร้อมยกตัวอย่างซอฟต์แวร์\n3. เปรียบเทียบ Virtual Machine (VM) กับ Container ในแง่ Overhead ทรัพยากร, ความเร็วในการเริ่มระบบ (Startup Time) และการแยกส่วนความปลอดภัย (Security Isolation)",
    maxScore: 10,
    rubric: [
      { criterion: "เปรียบเทียบ Windows vs Linux ครบทั้ง 3 มิติ (Kernel, File System, Permissions) ได้ถูกต้อง", points: 3 },
      { criterion: "จำแนก Type 1 และ Type 2 Hypervisor พร้อมยกตัวอย่างถูกต้อง", points: 3 },
      { criterion: "เปรียบเทียบ VM กับ Container ด้าน Overhead, Startup Time และ Isolation ชัดเจน", points: 4 }
    ],
    solutionSteps: [
      {
        step: "1. เปรียบเทียบ Windows vs Linux",
        detail: "• Kernel Structure: Linux ใช้ Monolithic Kernel (ไดรเวอร์และระบบไฟล์ทำงานใน Kernel space ร่วมกันด้วยความเร็วสูง) ส่วน Windows ใช้ Hybrid Kernel (แบ่งฟังก์ชันบางส่วนทำงานแบบ Microkernel เพื่อความเสถียร)\n• File System: Windows ใช้ NTFS (รองรับ Alternate Data Streams, Journaling, Case-insensitive) ส่วน Linux นิยมใช้ ext4, XFS, Btrfs (โครงสร้าง Inode, Hierarchical root '/', Case-sensitive)\n• File Permissions: Linux อิงระบบ POSIX (Read, Write, Execute สำหรับ Owner, Group, Others: rwxr-xr-x หรือเลขฐานแปด เช่น 755) ส่วน Windows ใช้ระบบ Access Control Lists (ACLs) ที่กำหนดสิทธิ์ระดับผู้ใช้และกลุ่มแบบละเอียด"
      },
      {
        step: "2. Type 1 vs Type 2 Hypervisor",
        detail: "• Type 1 Hypervisor (Bare-metal): ติดตั้งบนฮาร์ดแวร์เซิร์ฟเวอร์โดยตรงโดยไม่ต้องมี Host OS ขั้นกลาง มีประสิทธิภาพสูงและ Latency ต่ำ เช่น VMware ESXi, Microsoft Hyper-V, KVM, Proxmox VE\n• Type 2 Hypervisor (Hosted): ติดตั้งเป็นโปรแกรมประยุกต์อยู่บนระบบปฏิบัติการหลัก (Host OS) เหมาะสำหรับการทดสอบ พัฒนา และการเรียนการสอน เช่น VMware Workstation, Oracle VirtualBox"
      },
      {
        step: "3. การเปรียบเทียบ Virtual Machine vs Container",
        detail: "• Overhead ทรัพยากร: VM มี Overhead สูงเพราะต้องจำลองฮาร์ดแวร์เสมือนและรัน Guest OS เต็มรูปแบบในทุก VM ส่วน Container มี Overhead ต่ำมากเพราะแชร์ Kernel เดียวกันกับ Host OS\n• Startup Time: VM ใช้เวลาบูตระบบเป็นระดับหลายวินาทีถึงนาที (เหมือนเปิดเครื่องใหม่) ส่วน Container เริ่มการทำงานในระดับมิลลิวินาทีหรือวินาทีเดียว\n• Security Isolation: VM มีระดับความปลอดภัยและการแยกส่วนสูงกว่า (Hardware-level isolation) หาก Guest OS ถูกเจาะก็ไม่กระทบเครื่องอื่น ส่วน Container มีการแยกส่วนระดับ Process-level (Namespaces & Cgroups) หาก Kernel ของ Host มีช่องโหว่อาจเกิด Container Escape ได้"
      }
    ],
    modelAnswer: "1. Windows vs Linux:\n- Kernel: Linux ใช้ Monolithic Kernel มีประสิทธิภาพสูง ส่วน Windows ใช้ Hybrid Kernel\n- File System: Windows ใช้ NTFS (Case-insensitive) ส่วน Linux ใช้ ext4/XFS อิงระบบ Inode (Case-sensitive)\n- Permissions: Linux ใช้สิทธิ์ rwx แบ่งตาม Owner/Group/Other ส่วน Windows ใช้ตาราง ACLs ละเอียด\n\n2. Hypervisors:\n- Type 1 (Bare-metal): รันตรงบนฮาร์ดแวร์ ประสิทธิภาพสูงสุด เช่น VMware ESXi, KVM\n- Type 2 (Hosted): รันบน Host OS เช่น VirtualBox, VMware Workstation\n\n3. VM vs Container:\n- Overhead: VM หนักเพราะต้องมี Guest OS ทุกตัว ส่วน Container เบามากเพราะแชร์ Host Kernel\n- Startup: VM บูตหลายนาที ส่วน Container รันได้ในไม่กี่วินาที\n- Isolation: VM ปลอดภัยกว่าเพราะแยกส่วนระดับฮาร์ดแวร์ ส่วน Container แยกส่วนระดับโปรเซสผ่าน Namespaces/Cgroups",
    keyTakeaways: "Container โดดเด่นด้านความเบาและการปรับขนาดอย่างรวดเร็ว (Microservices) ในขณะที่ Virtual Machine โดดเด่นด้านการรัน OS ที่หลากหลายและความปลอดภัยสูงสุด",
    sourcePage: 53
  },
  {
    id: "adv-7",
    title: "โจทย์ข้อเขียนข้อที่ 7: การออกแบบอัลกอริทึม ผังงาน (Flowchart) และรหัสเทียม (Pseudocode) ด้วยโครงสร้างควบคุม",
    categoryId: "programming-algo",
    categoryNumber: 4,
    categoryName: "กลุ่มการเขียนโปรแกรม และอัลกอริทึม",
    topic: "Algorithm Design, Flowcharting, Pseudocode & Control Structures",
    scenario: "ร้านค้าออนไลน์ต้องการให้ออกแบบอัลกอริทึมคำนวณราคาสินค้าสุทธิของตะกร้าช็อปปิ้ง โดยรับรายการราคาสินค้าเป็นอาเรย์ items[] ขนาด n ชิ้น และค่าสถานะสมาชิก isVIP (บูลีน) มีเงื่อนไขการคำนวณดังนี้:\n- คำนวณหายอดรวมราคาสินค้าทั้งหมดในตะกร้า\n- หากยอดรวม >= 2,000 บาท ลดทันที 15% และฟรีค่าจัดส่ง\n- หากยอดรวม >= 1,000 บาทแต่ < 2,000 บาท ลดทันที 10% และค่าจัดส่ง 50 บาท\n- หากยอดรวม < 1,000 บาท ไม่ได้ส่วนลด และค่าจัดส่ง 80 บาท\n- หาก isVIP = True ให้ลดราคาเพิ่มอีก 5% จากยอดหลังหักส่วนลดรอบแรก",
    questionPrompt: "1. เขียนรหัสเทียม (Pseudocode) ที่สมบูรณ์ในการรับค่าอินพุต คำนวณตามเงื่อนไข และส่งออกยอดชำระสุทธิ\n2. ระบุโครงสร้างควบคุมทั้ง 3 ประเภท (Sequence, Selection, Iteration) ภายในอัลกอริทึมที่เขียนขึ้น\n3. อธิบายสัญลักษณ์มาตรฐาน 4 สัญลักษณ์ของผังงาน (Flowchart) ที่ต้องใช้เพื่อแทนรหัสเทียมนี้",
    maxScore: 10,
    rubric: [
      { criterion: "เขียน Pseudocode ถูกต้อง สมบูรณ์ มีการวนลูปหายอดรวม และคำนวณเงื่อนไขส่วนลดครบถ้วน", points: 4 },
      { criterion: "ระบุและชี้จุดที่เป็นโครงสร้าง Sequence, Selection, Iteration ได้อย่างถูกต้อง", points: 3 },
      { criterion: "อธิบายสัญลักษณ์ผังงาน Terminal, Process, Decision, Input/Output และทิศทางได้ถูกต้อง", points: 3 }
    ],
    solutionSteps: [
      {
        step: "1. รหัสเทียม (Pseudocode)",
        detail: "ALGORITHM CalculateTotalPayment\nINPUT: items[] (array of numbers), n (integer), isVIP (boolean)\nOUTPUT: finalAmount (number)\n\nBEGIN\n    totalPrice = 0\n    FOR i FROM 0 TO n - 1 DO\n        totalPrice = totalPrice + items[i]\n    END FOR\n\n    discountRate = 0.0\n    shippingFee = 0\n\n    IF totalPrice >= 2000 THEN\n        discountRate = 0.15\n        shippingFee = 0\n    ELSE IF totalPrice >= 1000 THEN\n        discountRate = 0.10\n        shippingFee = 50\n    ELSE\n        discountRate = 0.0\n        shippingFee = 80\n    END IF\n\n    discountedPrice = totalPrice * (1 - discountRate)\n\n    IF isVIP == TRUE THEN\n        discountedPrice = discountedPrice * 0.95\n    END IF\n\n    finalAmount = discountedPrice + shippingFee\n    OUTPUT finalAmount\nEND"
      },
      {
        step: "2. โครงสร้างควบคุมทั้ง 3 ประเภท",
        detail: "1. โครงสร้างแบบลำดับ (Sequence): คำสั่งทำงานตามลำดับบนลงล่าง เช่น การกำหนดค่าเริ่มต้น `totalPrice = 0` และการคำนวณ `finalAmount = discountedPrice + shippingFee`\n2. โครงสร้างแบบมีทางเลือก (Selection): การใช้คำสั่งเงื่อนไขตัดสินใจ `IF - ELSE IF - ELSE` ในการกำหนดอัตราส่วนลดและค่าส่งตามยอดซื้อ และการตรวจสอบสมาชิก `IF isVIP == TRUE`\n3. โครงสร้างแบบทำซ้ำ (Iteration / Loop): การใช้ลูป `FOR i FROM 0 TO n-1` เพื่อวนซ้ำบวกสะสมราคาสินค้าแต่ละชิ้นในอาเรย์"
      },
      {
        step: "3. สัญลักษณ์มาตรฐานของผังงาน (Flowchart)",
        detail: "1. Terminal (วงรี/สี่เหลี่ยมมน): จุดเริ่มต้นและสิ้นสุดของโปรแกรม (Start / End)\n2. Process (สี่เหลี่ยมผืนผ้า): การประมวลผลหรือกำหนดค่า เช่น `totalPrice = totalPrice + items[i]`\n3. Decision (สี่เหลี่ยมขนมเปียกปูน): การตัดสินใจหรือตรวจสอบเงื่อนไข เช่น `totalPrice >= 2000?`\n4. Input / Output (สี่เหลี่ยมด้านขนาน): การรับค่าหรือแสดงผลข้อมูล เช่น การรับค่า `items[]` และแสดงผล `finalAmount`"
      }
    ],
    modelAnswer: "1. Pseudocode:\nเริ่มต้น totalPrice = 0\nวนซ้ำบวกค่าจาก items[i] เข้า totalPrice จนครบทุกชิ้น\nตรวจสอบเงื่อนไข:\n- ถ้า totalPrice >= 2000: ลด 15% ค่าส่ง 0\n- ถ้า totalPrice >= 1000: ลด 10% ค่าส่ง 50\n- กรณีอื่น: ไม่ลด ค่าส่ง 80\nคำนวณราคาหลังลด = totalPrice * (1 - ส่วนลด)\nถ้า isVIP เป็นจริง: ราคาหลังลด = ราคาหลังลด * 0.95\nผลลัพธ์สุทธิ = ราคาหลังลด + ค่าจัดส่ง\n\n2. โครงสร้างควบคุม:\n- Sequence: การประกาศตัวแปรและการคำนวณตามลำดับ\n- Selection: คำสั่ง IF-ELSE ตรวจสอบยอดเงินและสถานะ VIP\n- Iteration: คำสั่ง FOR LOOP วนรอบบวกค่าในอาเรย์\n\n3. สัญลักษณ์ผังงาน:\n1) วงรีมน = Terminal (Start/End)\n2) สี่เหลี่ยมผืนผ้า = Process (การคำนวณกำหนดค่า)\n3) สี่เหลี่ยมขนมเปียกปูน = Decision (การตรวจสอบเงื่อนไข)\n4) สี่เหลี่ยมด้านขนาน = Input/Output (รับข้อมูล/แสดงผล)",
    keyTakeaways: "การเขียนรหัสเทียมที่ดีต้องชัดเจน ไม่ขึ้นกับภาษาโปรแกรมใดภาษาหนึ่ง และครอบคลุมโครงสร้างการทำงานทั้ง 3 รูปแบบอย่างเป็นตรรกะ",
    sourcePage: 54
  },
  {
    id: "adv-8",
    title: "โจทย์ข้อเขียนข้อที่ 8: การวิเคราะห์ประสิทธิภาพอัลกอริทึม Big-O, การค้นหา และการจัดเรียงข้อมูล",
    categoryId: "programming-algo",
    categoryNumber: 4,
    categoryName: "กลุ่มการเขียนโปรแกรม และอัลกอริทึม",
    topic: "Algorithm Complexity, Big-O Notation, Binary Search vs Linear Search, Quick/Merge Sort",
    scenario: "ระบบฐานข้อมูลทะเบียนนักเรียนมีข้อมูลจำนวน N = 1,000,000 ระเบียน ต้องการพัฒนาฟังก์ชันค้นหาข้อมูลนักเรียนตามรหัสประจำตัว ระบบเดิมใช้วิธีค้นหาแบบลำดับ (Linear Search) ทำให้เกิดความล่าช้าอย่างมากเมื่อมีผู้ใช้งานพร้อมกัน",
    questionPrompt: "1. เปรียบเทียบประสิทธิภาพ Time Complexity (Big-O Notation) ระหว่าง Linear Search และ Binary Search ทั้งในกรณี Best Case, Average Case และ Worst Case\n2. อธิบายเงื่อนไขสำคัญที่สุด (Precondition) ก่อนที่จะสามารถใช้งาน Binary Search ได้ และหากข้อมูลยังไม่จัดเรียง ควรเลือกอัลกอริทึมใดระหว่าง Bubble Sort (O(N^2)) กับ Merge Sort / Quick Sort (O(N log N)) พร้อมแสดงเหตุผล\n3. คำนวณจำนวนรอบการเปรียบเทียบข้อมูลสูงสุด (Worst Case) ในการค้นหาข้อมูล 1,000,000 รายการด้วย Binary Search",
    maxScore: 10,
    rubric: [
      { criterion: "เปรียบเทียบ Time Complexity ระหว่าง Linear Search และ Binary Search ถูกต้องครบทุก Case", points: 3 },
      { criterion: "ระบุ Precondition ของ Binary Search และเปรียบเทียบข้อดีของ O(N log N) Sorting ชัดเจน", points: 3.5 },
      { criterion: "คำนวณจำนวนรอบการค้นหาสูงสุดของ Binary Search จากสูตร log2(N) ได้ถูกต้อง (≈ 20 รอบ)", points: 3.5 }
    ],
    solutionSteps: [
      {
        step: "1. เปรียบเทียบ Time Complexity",
        detail: "• Linear Search:\n- Best Case: O(1) (พบข้อมูลที่ตำแหน่งแรกสุดทันที)\n- Average Case: O(N) (เฉลี่ยต้องตรวจประมาณ N/2 รายการ)\n- Worst Case: O(N) (ข้อมูลอยู่ตัวสุดท้ายหรือไม่พบข้อมูล ต้องตรวจครบ N รายการ)\n\n• Binary Search:\n- Best Case: O(1) (พบข้อมูลที่ตำแหน่งกึ่งกลางทันที)\n- Average Case: O(log N)\n- Worst Case: O(log N) (แบ่งครึ่งข้อมูลไปเรื่อยๆ จนเหลือตัวสุดท้าย)"
      },
      {
        step: "2. Precondition และการเลือกอัลกอริทึมจัดเรียงข้อมูล",
        detail: "• เงื่อนไขสำคัญ (Precondition): ข้อมูลในอาเรย์ต้องได้รับการ 'จัดเรียงลำดับ' (Sorted Array) เสียก่อน จึงจะสามารถตัดข้อมูลทิ้งครึ่งหนึ่งในแต่ละรอบได้\n• การเลือกอัลกอริทึม Sorting สำหรับข้อมูล N = 1,000,000 รายการ:\n- Bubble Sort มีความซับซ้อน O(N^2) จะต้องเปรียบเทียบข้อมูลถึง (10^6)^2 = 1,000,000,000,000 รอบ (1 ล้านล้านรอบ) ซึ่งทำให้โปรแกรมหยุดตอบสนอง\n- Merge Sort หรือ Quick Sort มีความซับซ้อน O(N log N) จะใช้เวลาเปรียบเทียบเพียง 10^6 x log2(10^6) ≈ 20,000,000 รอบ (20 ล้านรอบ) ซึ่งเร็วกว่าหลายหมื่นเท่า จึงจำเป็นต้องเลือก Merge/Quick Sort"
      },
      {
        step: "3. คำนวณรอบการเปรียบเทียบสูงสุดของ Binary Search",
        detail: "สูตรคำนวณจำนวนรอบสูงสุดของ Binary Search คือ floor(log2(N)) + 1\nสำหรับ N = 1,000,000:\n2^19 = 524,288\n2^20 = 1,048,576\nเนื่องจาก 2^19 < 1,000,000 <= 2^20 ดังนั้น log2(1,000,000) มีค่าประมาณ 19.93\nจำนวนรอบการเปรียบเทียบสูงสุดคือ 20 ครั้งเท่านั้น! เทียบกับ Linear Search ที่ต้องวนลูปถึง 1,000,000 ครั้ง"
      }
    ],
    modelAnswer: "1. เปรียบเทียบ Time Complexity:\n- Linear Search: Best = O(1), Average = O(N), Worst = O(N)\n- Binary Search: Best = O(1), Average = O(log N), Worst = O(log N)\n\n2. เงื่อนไขและ Sorting:\nBinary Search บังคับว่าข้อมูลต้องผ่านการจัดเรียงลำดับ (Sorted) มาก่อนเสมอ สำหรับข้อมูล 1 ล้านตัว ต้องเลือก Merge Sort หรือ Quick Sort ที่มีประสิทธิภาพ O(N log N) (~20 ล้านขั้นตอน) ห้ามใช้ Bubble Sort O(N^2) เด็ดขาดเพราะใช้ขั้นตอนถึง 1 ล้านล้านครั้ง\n\n3. การคำนวณรอบสูงสุด:\nจำนวนรอบ Worst Case = ceil(log2(1,000,000)) = 20 ครั้งเท่านั้น จึงเร็วกว่า Linear Search มหาศาล",
    keyTakeaways: "Binary Search ลดปริมาณข้อมูลลงครึ่งหนึ่งในทุกขั้นตอน ทำให้ค้นหาข้อมูลขนาด 1 ล้านรายการได้ในไม่เกิน 20 รอบเปรียบเทียบ",
    sourcePage: 54
  },
  {
    id: "adv-9",
    title: "โจทย์ข้อเขียนข้อที่ 9: วงจร Machine Learning Pipeline, การวัดผล Confusion Matrix และ Overfitting",
    categoryId: "ai-datascience",
    categoryNumber: 5,
    categoryName: "กลุ่มปัญญาประดิษฐ์",
    topic: "Machine Learning Pipeline, Model Evaluation, Confusion Matrix & Overfitting Mitigation",
    scenario: "โรงพยาบาลต้องการพัฒนาโมเดล Machine Learning เพื่อจำแนกภาพถ่ายเอกซเรย์ทรวงอกว่าผู้ป่วยเป็น 'โรคปอดอักเสบ (Pneumonia)' หรือ 'ปกติ (Normal)' โดยเป้าหมายหลักทางการแพทย์คือต้องการตรวจจับผู้ป่วยให้ได้มากที่สุดเท่าที่จะเป็นไปได้ และต้องหลีกเลี่ยงการวินิจฉัยผู้ป่วยที่เป็นโรคว่าเป็นคนปกติ (False Negative ต่ำที่สุด)",
    questionPrompt: "1. อธิบายขั้นตอนสำคัญ 5 ขั้นตอนของวงจรการเรียนรู้ของเครื่อง (Machine Learning Pipeline) ตั้งแต่เริ่มเก็บข้อมูลจนถึงการนำไปใช้งาน\n2. อธิบายความหมายของค่าใน Confusion Matrix (TP, FP, TN, FN) พร้อมอธิบายว่าเหตุใดในสถานการณ์นี้จึงต้องให้ความสำคัญกับค่า Recall (Sensitivity) มากกว่า Precision\n3. อธิบายสาเหตุของปัญหา Overfitting และเสนอแนวทางแก้ไขอย่างน้อย 3 วิธี",
    maxScore: 10,
    rubric: [
      { criterion: "อธิบาย 5 ขั้นตอนของ ML Pipeline ได้ถูกต้องเป็นระบบตามลำดับสากล", points: 3 },
      { criterion: "อธิบาย TP, FP, TN, FN ถูกต้อง และให้เหตุผลความสำคัญของ Recall ทางการแพทย์ได้ลึกซึ้ง", points: 4 },
      { criterion: "อธิบายสาเหตุของ Overfitting และเสนอแนวทางแก้ไขที่ถูกต้องอย่างน้อย 3 วิธี", points: 3 }
    ],
    solutionSteps: [
      {
        step: "1. 5 ขั้นตอนของ Machine Learning Pipeline",
        detail: "1. Data Collection & Ingestion: รวบรวมภาพถ่ายเอกซเรย์จากระบบเวชระเบียนพร้อมผลวินิจฉัยยืนยัน\n2. Data Preprocessing & Augmentation: ปรับขนาดภาพ (Resize), ปรับช่วงสี (Normalize), กำจัด Noise, และขยายชุดข้อมูลด้วย Data Augmentation (หมุน, พลิกภาพ)\n3. Model Selection & Training: แบ่งข้อมูลเป็น Train/Validation/Test Split (เช่น 70:15:15) และเลือกสถาปัตยกรรมโมเดล (เช่น CNN) เพื่อทำการฝึกสอน\n4. Evaluation & Validation: ประเมินประสิทธิภาพโมเดลด้วยชุดข้อมูลทดสอบที่ไม่เคยเห็นมาก่อนโดยใช้ Confusion Matrix, ROC-AUC\n5. Deployment & Monitoring: นำโมเดลขึ้นใช้งานจริงบนระบบโรงพยาบาลและคอยติดตามการเปลี่ยนแปลงของการทำนาย (Model Drift)"
      },
      {
        step: "2. Confusion Matrix และความสำคัญของ Recall",
        detail: "• True Positive (TP): เป็นโรค และโมเดลทำนายว่า เป็นโรค (ถูกต้อง)\n• True Negative (TN): ไม่เป็นโรค และโมเดลทำนายว่า ไม่เป็นโรค (ถูกต้อง)\n• False Positive (FP): ไม่เป็นโรค แต่โมเดลทำนายว่า เป็นโรค (ผลบวกลวง)\n• False Negative (FN): เป็นโรค แต่โมเดลทำนายว่า ไม่เป็นโรค (ผลลบลวง - อันตรายร้ายแรง)\n\n• เหตุผลที่ Recall สำคัญกว่า Precision:\nสูตร Recall = TP / (TP + FN)\nในทางการแพทย์ หากเกิด False Negative (FN) ผู้ป่วยที่เป็นโรคปอดอักเสบจะไม่ได้รับการรักษาและอาจเป็นอันตรายถึงชีวิต ในขณะที่ False Positive (FP) คนไข้เพียงแค่ต้องเข้าตรวจซ้ำเพื่อยืนยัน ดังนั้นระบบจึงต้องมุ่งเน้นเพิ่มค่า Recall ให้สูงสุดเพื่อลด FN ให้เข้าใกล้ 0"
      },
      {
        step: "3. สาเหตุและการแก้ปัญหา Overfitting",
        detail: "• สาเหตุ: โมเดลมีความซับซ้อนสูงเกินไป (High Variance) หรือชุดข้อมูลมีขนาดเล็กเกินไป ทำให้โมเดล 'จดจำรายละเอียดเฉพาะจุดและสัญญาณรบกวน (Noise)' ของข้อมูลฝึกสอนได้แม่นยำ 100% แต่ไม่สามารถนำไปทำนายข้อมูลใหม่ได้จริง\n• แนวทางแก้ไข (3 วิธี):\n1. Data Augmentation: เพิ่มความหลากหลายของข้อมูลภาพ เช่น การสุ่มหมุน ซูม กลับด้านภาพ\n2. Regularization (L1/L2 หรือ Dropout): ใช้ Dropout ตัดการเชื่อมต่อของบางโหนดในเครือข่ายประสาทแบบสุ่มระหว่างการเทรน เพื่อป้องกันการพึ่งพาโหนดใดโหนดหนึ่งมากเกินไป\n3. Early Stopping: ตรวจสอบ Validation Loss ระหว่างเทรน หาก Loss เริ่มเพิ่มขึ้นให้หยุดการฝึกสอนทันทีเพื่อไม่ให้โมเดลจำข้อสอบ"
      }
    ],
    modelAnswer: "1. ขั้นตอน ML Pipeline:\n1) Data Collection: รวบรวมภาพเอกซเรย์\n2) Preprocessing: ปรับขนาด Normalization และแปลงข้อมูล\n3) Model Training: แบ่งข้อมูล Train/Test แล้วฝึกสอนโมเดล (CNN)\n4) Evaluation: ทดสอบวัดประสิทธิภาพด้วย Confusion Matrix\n5) Deployment: ปล่อยใช้งานจริงและติดตามผล\n\n2. Confusion Matrix & Recall:\n- TP: เป็นโรค ทำนายว่า เป็นโรค\n- TN: ไม่เป็นโรค ทำนายว่า ไม่เป็นโรค\n- FP: ไม่เป็นโรค ทำนายว่า เป็นโรค\n- FN: เป็นโรค ทำนายว่า ไม่เป็นโรค\nในงานการแพทย์ False Negative เป็นอันตรายถึงชีวิตหากคนไข้ไม่ได้รับการรักษา จึงต้องให้ความสำคัญกับค่า Recall = TP/(TP+FN) สูงที่สุด\n\n3. Overfitting & การแก้ปัญหา:\nเกิดจากโมเดลซับซ้อนเกินไปจนจดจำ Noise ของข้อมูล Train แก้ไขโดย: 1) ทำ Data Augmentation เพิ่มข้อมูล 2) ใส่ Dropout เพื่อสุ่มตัดการเชื่อมต่อโหนด 3) ทำ Early Stopping หยุดเทรนเมื่อ Validation Loss เริ่มพุ่งขึ้น",
    keyTakeaways: "ในการวินิจฉัยโรคทางการแพทย์ False Negative มีความเสียหายรุนแรงกว่า False Positive ดังนั้นตัวชี้วัด Recall จึงสำคัญที่สุด",
    sourcePage: 54
  },
  {
    id: "adv-10",
    title: "โจทย์ข้อเขียนข้อที่ 10: สถาปัตยกรรม Transformer, Prompt Engineering และจริยธรรมของ AI (AI Ethics)",
    categoryId: "ai-datascience",
    categoryNumber: 5,
    categoryName: "กลุ่มปัญญาประดิษฐ์",
    topic: "Generative AI, Transformer Self-Attention, Prompt Engineering & AI Safety",
    scenario: "องค์กรธุรกิจขนาดใหญ่กำลังนำ Generative AI และโมเดลภาษาขนาดใหญ่ (Large Language Models: LLM) มาพัฒนาเป็นระบบแชตบอตผู้ช่วยอัจฉริยะสำหรับตอบคำถามลูกค้าและช่วยพนักงานวิเคราะห์ข้อมูล แต่ฝ่ายบริหารมีความกังวลเกี่ยวกับปัญหาความแม่นยำ ข้อมูลที่แต่งขึ้นเอง (Hallucination) ความลำเอียงของคำตอบ (Bias) และความปลอดภัยของข้อมูลความลับองค์กร",
    questionPrompt: "1. อธิบายสถาปัตยกรรม Transformer โดยเฉพาะกลไก Self-Attention Mechanism ว่ามีหลักการทำงานอย่างไร และดีกว่าโมเดลแบบเดิม (RNN / LSTM) อย่างไร\n2. อธิบายและยกตัวอย่างเทคนิคการสั่งการโมเดล (Prompt Engineering) อย่างน้อย 3 รูปแบบ: Zero-Shot Prompting, Few-Shot Prompting, และ Chain-of-Thought (CoT) Prompting\n3. วิเคราะห์ความเสี่ยงด้าน AI Hallucination, AI Bias และ Data Privacy พร้อมเสนอแนวทางการป้องกันและควบคุมความเสี่ยงในระดับองค์กรอย่างน้อย 3 แนวทาง",
    maxScore: 10,
    rubric: [
      { criterion: "อธิบาย Transformer และกลไก Self-Attention ได้ถูกต้อง ชี้ให้เห็นข้อดีด้าน Parallelization เหนือ RNN", points: 3 },
      { criterion: "อธิบายและยกตัวอย่างเทคนิค Prompt Engineering (Zero-Shot, Few-Shot, CoT) ถูกต้อง ชัดเจน", points: 3.5 },
      { criterion: "วิเคราะห์ความเสี่ยงด้าน Hallucination, Bias, Privacy และเสนอแนวทางป้องกันเชิงระบบได้สมบูรณ์", points: 3.5 }
    ],
    solutionSteps: [
      {
        step: "1. สถาปัตยกรรม Transformer และ Self-Attention",
        detail: "• หลักการทำงาน: Transformer ละทิ้งการประมวลผลคำทีละคำตามลำดับเวลาแบบ RNN โดยใช้กลไก Self-Attention Mechanism ในการคำนวณ 'ค่าน้ำหนักความสัมพันธ์' (Attention Weights) ระหว่างคำทุกคำในประโยคพร้อมกัน ผ่านเวกเตอร์ Query (Q), Key (K), และ Value (V)\n• ข้อได้เปรียบเหนือ RNN/LSTM:\n1. การประมวลผลแบบขนาน (Parallelization): สามารถประมวลผลโทเค็นทั้งหมดพร้อมกันบน GPU ได้อย่างรวดเร็ว\n2. การจับความสัมพันธ์ระยะไกล (Long-range Dependencies): จัดการบริบทคำที่อยู่ห่างกันในเอกสารยาวๆ ได้อย่างมีประสิทธิภาพโดยไม่เกิดปัญหา Vanishing Gradient"
      },
      {
        step: "2. เทคนิค Prompt Engineering 3 รูปแบบ",
        detail: "1. Zero-Shot Prompting: ป้อนคำสั่งให้โมเดลทำงานทันทีโดยไม่มีตัวอย่างประกอบ เช่น 'จงจำแนกอารมณ์ของข้อความนี้: สินค้าส่งเร็วมาก แพ็กเกจเรียบร้อย'\n2. Few-Shot Prompting: ป้อนตัวอย่างคู่คำถาม-คำตอบ (Input-Output Examples) 2-3 ตัวอย่างก่อนให้โมเดลตอบคำถามจริง เพื่อชี้นำรูปแบบและโทนคำตอบที่ต้องการ\n3. Chain-of-Thought (CoT) Prompting: กระตุ้นให้โมเดลแสดงขั้นตอนการคิดและเหตุผลทีละสเต็ปก่อนสรุปคำตอบ (เช่น การเติมประโยค 'Let's think step by step' หรือเขียนตัวอย่างขั้นตอนการแก้โจทย์เลข) ช่วยเพิ่มความแม่นยำในการแก้ปัญหาตรรกะและการคำนวณ"
      },
      {
        step: "3. ความเสี่ยงและการควบคุมจริยธรรม AI ในองค์กร",
        detail: "• ความเสี่ยง:\n- AI Hallucination: การที่โมเดลสร้างข้อมูลเท็จ แหล่งอ้างอิงปลอม ด้วยน้ำเสียงที่มั่นใจ\n- AI Bias: อคติทางเพศ เชื้อชาติ หรือวัฒนธรรมที่ติดมากับ Training Data\n- Data Privacy & Security: การที่พนักงานนำข้อมูลความลับหรือรหัสผ่านไปป้อนลงในโมเดลสาธารณะ ทำให้ข้อมูลรั่วไหลหรือถูกนำไปเทรนโมเดลต่อ\n\n• แนวทางป้องกันในองค์กร (3 แนวทาง):\n1. การใช้เทคนิค RAG (Retrieval-Augmented Generation): ให้โมเดลค้นหาข้อเท็จจริงจากฐานข้อมูลภายในของบริษัทก่อนตอบ เพื่อลด Hallucination และรับประกันความถูกต้อง\n2. กำหนดนโยบาย AI Governance และใช้ Enterprise Tier: เลือกใช้โมเดลระดับองค์กรที่มีสัญญาคุ้มครองข้อมูล (Zero Data Retention) ห้ามนำข้อมูลไปเทรนโมเดล\n3. ติดตั้ง Guardrails & Human-in-the-Loop: สร้างตัวกรองเนื้อหา (Content Filter) ก่อนส่งให้ผู้ใช้ และกำหนดให้มีมนุษย์ตรวจสอบคำตอบที่สำคัญก่อนนำไปใช้งานจริง"
      }
    ],
    modelAnswer: "1. Transformer & Self-Attention:\nTransformer ใช้กลไก Self-Attention คำนวณความสัมพันธ์ของคำทุกคำในประโยคพร้อมกันผ่านเวกเตอร์ Query, Key, Value โดยไม่ต้องอ่านทีละคำตามลำดับเวลา ทำให้ประมวลผลแบบขนานบน GPU ได้เร็วขึ้นมหาศาล และจับใจความบริบทระยะไกลได้ดีกว่า RNN อย่างสิ้นเชิง\n\n2. Prompt Engineering 3 แบบ:\n- Zero-Shot: สั่งงานโดยตรงไม่มีตัวอย่าง เช่น 'แปลข้อความนี้เป็นภาษาอังกฤษ: ...'\n- Few-Shot: ให้ตัวอย่างอินพุต-เอาต์พุต 2-3 ตัวอย่างก่อนสั่งงานจริง เพื่อล็อกโครงสร้างคำตอบ\n- Chain-of-Thought (CoT): สั่งให้โมเดลคิดทีละขั้นตอน 'คิดทีละขั้นเพื่อหาคำตอบ' ช่วยเพิ่มความแม่นยำในโจทย์คำนวณและตรรกะ\n\n3. ความเสี่ยงและการป้องกัน:\n- Hallucination (ข้อมูลหลอน/เท็จ): ป้องกันด้วยระบบ RAG ดึงข้อมูลจริงจากเอกสารองค์กรมาอ้างอิง\n- AI Bias (อคติ): ตั้ง Guardrails และปรับจูนโมเดลด้วย RLHF\n- Data Privacy (ข้อมูลรั่ว): ใช้นโยบายห้ามป้อนข้อมูลความลับ และเลือกใช้ Enterprise API ที่ไม่นำข้อมูลไปเทรนต่อ พร้อมมี Human-in-the-Loop คอยตรวจทาน",
    keyTakeaways: "Generative AI มีพลังสูงแต่เสี่ยงต่ออาการหลอน (Hallucination) การผสานเทคนิค RAG ร่วมกับ Prompt Engineering และ AI Governance จึงจำเป็นสำหรับองค์กร",
    sourcePage: 54
  }
];

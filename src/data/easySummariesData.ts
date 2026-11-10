import { CategoryId } from '../types';

export interface EasySummaryCard {
  title: string;
  subtitle: string;
  bullets: string[];
  examTip?: string;
  badge?: string;
}

export interface FormulaItem {
  name: string;
  formula: string;
  explanation: string;
  example: string;
  result: string;
}

export interface ComparisonRow {
  aspect: string;
  itemA: string;
  itemB: string;
  itemC?: string;
}

export interface ComparisonTableData {
  title: string;
  colA: string;
  colB: string;
  colC?: string;
  rows: ComparisonRow[];
}

export interface UnitSummary {
  unitNumber: number;
  id: CategoryId;
  nameTh: string;
  nameEn: string;
  color: string;
  sourcePages: string;
  questionRange: string; // e.g. "ข้อ 1–20 (20 ข้อ)"
  oneLiner: string;
  mustRememberPoints: string[];
  keyConceptCards: EasySummaryCard[];
  formulasAndRules?: FormulaItem[];
  comparisonTable?: ComparisonTableData;
  memoryTricks: {
    title: string;
    description: string;
    technique: string;
  }[];
  commonMistakes: {
    wrong: string;
    right: string;
    reason: string;
  }[];
}

export const UNIT_SUMMARIES: UnitSummary[] = [
  // =========================================================================
  // UNIT 1: วิทยาการคอมพิวเตอร์และเทคโนโลยีดิจิทัลทั่วไป
  // =========================================================================
  {
    unitNumber: 1,
    id: 'general-it',
    nameTh: 'วิทยาการคอมพิวเตอร์และเทคโนโลยีดิจิทัลทั่วไป',
    nameEn: 'General IT, History, Emerging Tech & Ethics',
    color: '#35D5F2',
    sourcePages: 'หน้า 2–5, 20–24',
    questionRange: 'ข้อ 1–20 (20 ข้อ)',
    oneLiner: 'จำยุคคอมพิวเตอร์ (หลอดสูญญากาศ→ทรานซิสเตอร์→IC→VLSI), 4 บุคคลสำคัญ, สเปก Wi-Fi 7 (802.11be), หลักการควอนตัม (Superposition/Entanglement) และกฎหมาย PDPA',
    mustRememberPoints: [
      'ยุคคอมพิวเตอร์: ยุค 1 = หลอดสูญญากาศ (ENIAC), ยุค 2 = ทรานซิสเตอร์, ยุค 3 = แผงวงจรรวม (IC), ยุค 4 = ไมโครโพรเซสเซอร์ (VLSI/Intel 4004), ยุค 5 = ปัญญาประดิษฐ์และควอนตัม',
      '4 บุคคลประวัติศาสตร์: Babbage (บิดาคอมพิวเตอร์/Analytical Engine), Ada Lovelace (โปรแกรมเมอร์คนแรก/เลข Bernoulli), Alan Turing (Turing Machine/Turing Test), Grace Hopper (บุกเบิกคอมไพเลอร์ A-0/COBOL/คำว่า Bug)',
      'Wi-Fi 7 (IEEE 802.11be): ใช้แบนด์วิดท์สูงสุด 320 MHz, การมอดูเลต 4096-QAM (12-bit/symbol), และฟีเจอร์ MLO (Multi-Link Operation) เชื่อมต่อหลายคลื่นพร้อมกัน',
      '5G NR: มี 3 บริการหลักคือ eMBB (เน็ตเร็วแบนด์วิดท์สูง), URLLC (ดีเลย์ต่ำมาก <1ms สำหรับรถไร้คนขับ/ผ่าตัดทางไกล), mMTC (เชื่อมต่อ IoT ล้านตัว/ตร.กม.)',
      'Quantum Computing: Qubit อยู่ในสถานะ Superposition (|0⟩ และ |1⟩ พร้อมกัน) และ Entanglement; อัลกอริทึมของ Shor ถอดรหัส RSA ได้เร็ว ส่วน Grover ค้นหาข้อมูลเร็วกว่าเดิมกำลังสอง (O(√N))',
      'ความมั่นคงปลอดภัยและกฎหมาย: CIA Triad (Confidentiality, Integrity, Availability), PDPA บังคับใช้ฐานกฎหมาย (Consent, Contract, Legal Obligation ฯลฯ)',
      'รางวัลโนเบล 2024: ฟิสิกส์มอบให้ Hopfield & Hinton (รากฐาน Deep Learning); เคมีมอบให้ Baker, Hassabis & Jumper (AlphaFold 2 ทำนายโครงสร้างโปรตีน)'
    ],
    keyConceptCards: [
      {
        title: '4 บิดาและมารดาแห่งวิทยาการคอมพิวเตอร์',
        subtitle: 'ออกสอบแน่นอนทุกสนาม',
        bullets: [
          'Charles Babbage: ออกแบบ Difference Engine และ Analytical Engine (เครื่องคำนวณเชิงกลแบบเอนกประสงค์)',
          'Ada Lovelace: เขียน Algorithm แรกสำหรับคำนวณ Bernoulli Numbers ได้รับการยกย่องเป็นโปรแกรมเมอร์คนแรก',
          'Alan Turing: วางรากฐาน Turing Machine, พิสูจน์ Halting Problem ว่าคำนวณไม่ได้ และเสนอ Turing Test',
          'Grace Hopper: สร้าง Linker/Compiler แรกชื่อ A-0 และผลักดันภาษา COBOL พบตัวมอด (Moth) จริงใน Mark II'
        ],
        examTip: 'ถ้าโจทย์ถาม "โปรแกรมเมอร์คนแรก" ตอบ Ada Lovelace; ถ้าถาม "บิดาคอมพิวเตอร์" ตอบ Babbage; ถ้าถาม "โมเดลเชิงคณิตศาสตร์ของการคำนวณ" ตอบ Turing Machine',
        badge: 'ประวัติศาสตร์'
      },
      {
        title: 'Wi-Fi 7 vs 5G NR Tech Spec',
        subtitle: 'เทคโนโลยีเครือข่ายไร้สายยุคใหม่',
        bullets: [
          'Wi-Fi 7 รหัสมาตรฐานสากล: IEEE 802.11be (EHT - Extremely High Throughput)',
          'Wi-Fi 7 ปรับขนาดช่องสัญญาณกว้างสุดเป็น 320 MHz (กว้างกว่า Wi-Fi 6 สองเท่า)',
          '4096-QAM: เข้ารหัสข้อมูลได้ 12 bits ต่อ 1 สัญลักษณ์ (Wi-Fi 6 ใช้ 1024-QAM = 10 bits)',
          'MLO (Multi-Link Operation): รับส่งข้อมูลบนคลื่น 2.4, 5 และ 6 GHz ได้พร้อมกันทันที ลด Latency มหาศาล',
          '5G URLLC: ออกแบบมาเพื่อ Ultra-Reliable Low Latency Communication (ความหน่วงต่ำกว่า 1 มิลลิวินาที)'
        ],
        examTip: 'ข้อสอบชอบหลอกรหัสมาตรฐาน: Wi-Fi 6 = 802.11ax, Wi-Fi 7 = 802.11be อย่าจำสับสน!',
        badge: 'เทคโนโลยีไร้สาย'
      },
      {
        title: 'Quantum Computing Foundations',
        subtitle: 'ฟิสิกส์ควอนตัมกับการคำนวณ',
        bullets: [
          'Qubit: หน่วยข้อมูลพื้นฐานที่อยู่ในสถานะเชิงเส้นทับซ้อน (Linear Superposition: α|0⟩ + β|1⟩ โดยที่ |α|² + |β|² = 1)',
          'Quantum Entanglement: สถานะพัวพันทางควอนตัม เมื่อวัดสถานะของคิวบิตหนึ่ง จะทราบสถานะของอีกคู่หนึ่งทันทีไม่ว่าจะห่างกันแค่ไหน',
          'Shor\'s Algorithm: อัลกอริทึมแยกตัวประกอบจำนวนเต็มขนาดใหญ่ในเวลาแบบ Polynomial ทำลายความปลอดภัยของ RSA และ ECC',
          'Grover\'s Algorithm: ค้นหาข้อมูลใน Unsorted Database ด้วยความเร็ว O(√N) เทียบกับแบบเดิมที่ใช้ O(N)'
        ],
        examTip: 'จำคู่: Shor = แยกตัวประกอบ/ทำลาย RSA, Grover = ค้นหาฐานข้อมูลไม่เรียงลำดับ O(√N)',
        badge: 'ควอนตัม'
      },
      {
        title: 'PDPA & CIA Triad',
        subtitle: 'กฎหมายข้อมูลส่วนบุคคลและความมั่นคงปลอดภัย',
        bullets: [
          'CIA Triad: C = Confidentiality (การรักษาความลับ), I = Integrity (ความถูกต้องสมบูรณ์), A = Availability (ความพร้อมใช้งาน)',
          'Data Subject: เจ้าของข้อมูลส่วนบุคคล (มีสิทธิขอเข้าถึง, ขอโอนย้าย, ขอลบ/ทำลายข้อมูล)',
          'Data Controller: ผู้มีอำนาจตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล',
          'Data Processor: ผู้ดำเนินการประมวลผลข้อมูล "ตามคำสั่ง" ของ Controller',
          'DPO: เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล ให้คำแนะนำและประสานงานกับ สคส.'
        ],
        examTip: 'การแฮกแก้ไขเกรดในฐานข้อมูลผิดหลัก "Integrity (I)"; เว็บล่มจาก DDoS ผิดหลัก "Availability (A)"; ข้อมูลลูกค้ารั่วไหลผิดหลัก "Confidentiality (C)"',
        badge: 'ความปลอดภัย & กฎหมาย'
      }
    ],
    comparisonTable: {
      title: 'ตารางสรุป 5 ยุคคอมพิวเตอร์',
      colA: 'ยุค / ช่วงเวลา',
      colB: 'เทคโนโลยีฮาร์ดแวร์หลัก',
      colC: 'ภาษาซอฟต์แวร์และนวัตกรรม',
      rows: [
        { aspect: 'ยุค 1 (1940–1956)', itemA: 'หลอดสูญญากาศ (Vacuum Tubes)', itemB: 'ภาษาเครื่อง (Machine Code), เครื่อง ENIAC, UNIVAC I' },
        { aspect: 'ยุค 2 (1956–1963)', itemA: 'ทรานซิสเตอร์ (Transistors)', itemB: 'ภาษาแอสเซมบลี, FORTRAN, COBOL' },
        { aspect: 'ยุค 3 (1964–1971)', itemA: 'แผงวงจรรวม (Integrated Circuit - IC)', itemB: 'ระบบปฏิบัติการ (OS), คีย์บอร์ด, จอภาพ, IBM System/360' },
        { aspect: 'ยุค 4 (1971–ปัจจุบัน)', itemA: 'ไมโครโพรเซสเซอร์ (VLSI/ULSI)', itemB: 'Intel 4004, คอมพิวเตอร์ส่วนบุคคล (PC), GUI, อินเทอร์เน็ต' },
        { aspect: 'ยุค 5 (ปัจจุบัน–อนาคต)', itemA: 'ปัญญาประดิษฐ์ (AI) & ควอนตัม', itemB: 'Deep Learning, LLM, คิวบิต, การประมวลผลแบบขนานมหาศาล' }
      ]
    },
    memoryTricks: [
      {
        title: 'สูตรจำ 5 ยุคคอมพิวเตอร์',
        description: 'จำตัวย่ออุปกรณ์หลัก: "หลอด - ทราน - ไอซี - ไมโคร - ปัญญา"',
        technique: 'หลอด (สูญญากาศ) -> ทราน (ซิสเตอร์) -> ไอซี (IC) -> ไมโคร (โพรเซสเซอร์) -> ปัญญา (ประดิษฐ์ AI & ควอนตัม)'
      },
      {
        title: 'สูตรจำ Wi-Fi 7 สเปกหลัก',
        description: 'Wi-Fi 7 ตัวย่อคือ "be" ช่องกว้าง "320" ความไว "4096"',
        technique: '802.11"be" (be = Wi-Fi 7) | กว้างสุด 320 MHz | 4096-QAM (12 บิตต่อสัญลักษณ์)'
      }
    ],
    commonMistakes: [
      {
        wrong: 'Wi-Fi 7 ใช้รหัส IEEE 802.11ax',
        right: 'Wi-Fi 7 ใช้รหัส IEEE 802.11be (802.11ax คือ Wi-Fi 6)',
        reason: 'โจทย์ชอบสลับตัวอักษรท้าย ax (Wi-Fi 6) กับ be (Wi-Fi 7)'
      },
      {
        wrong: 'Charles Babbage เป็นผู้เขียนโปรแกรมคนแรก',
        right: 'Ada Lovelace เป็นโปรแกรมเมอร์คนแรก ส่วน Babbage เป็นผู้ออกแบบฮาร์ดแวร์',
        reason: 'Babbage สร้างแบบร่างเครื่อง แต่ Lovelace เป็นผู้บันทึกอัลกอริทึม Bernoulli Numbers สำหรับสั่งงานเครื่อง'
      },
      {
        wrong: 'อัลกอริทึมของ Shor ใช้ค้นหาข้อมูลใน Database',
        right: 'Shor ใช้แยกตัวประกอบจำนวนเต็ม (ถอดรหัส RSA) ส่วน Grover ใช้ค้นหา Database แบบไม่เรียง',
        reason: 'Shor = Factoring RSA (Exponential speedup), Grover = Unsorted Search (Quadratic speedup)'
      }
    ]
  },

  // =========================================================================
  // UNIT 2: เครือข่ายคอมพิวเตอร์และความปลอดภัยบนคลาวด์
  // =========================================================================
  {
    unitNumber: 2,
    id: 'network-cloud',
    nameTh: 'เครือข่ายคอมพิวเตอร์และความปลอดภัยบนคลาวด์',
    nameEn: 'Computer Networks, Protocols, Subnetting & Cloud',
    color: '#8B7CFF',
    sourcePages: 'หน้า 5–8, 20–24',
    questionRange: 'ข้อ 21–40 (20 ข้อ)',
    oneLiner: 'จำ OSI 7 เลเยอร์และ PDU ให้แม่น, คำนวณ Subnetting /24 ถึง /30 ให้ไวใน 10 วินาที, จำ Private IP ทั้ง 3 คลาส และแยกความต่างของ IaaS/PaaS/SaaS และ Container',
    mustRememberPoints: [
      'OSI 7 Layers (บนลงล่าง): Application(7) -> Presentation(6) -> Session(5) -> Transport(4) -> Network(3) -> Data Link(2) -> Physical(1)',
      'หน่วยข้อมูล (PDU): เลเยอร์ 7-5 = Data, เลเยอร์ 4 = Segment, เลเยอร์ 3 = Packet, เลเยอร์ 2 = Frame, เลเยอร์ 1 = Bit (สูตร: Don\'t Stop Pouring Fresh Beer)',
      'TCP vs UDP: TCP มี 3-Way Handshake (SYN -> SYN-ACK -> ACK), เชื่อถือได้, มีการจัดเรียงลำดับ; UDP ไม่ต้อง Handshake, ไม่มี Flow Control, เน้นเร็วสุด (VoIP, DNS, Streaming)',
      'Private IP (RFC 1918): Class A = 10.0.0.0/8, Class B = 172.16.0.0/12 (172.16–172.31), Class C = 192.168.0.0/16; Loopback = 127.0.0.1; APIPA = 169.254.0.0/16',
      'สูตรหาจำนวนโฮสต์ที่ใช้ได้: Usable Hosts = 2^(32 - Prefix) - 2 (หัก Network Address กับ Broadcast Address)',
      'DNS Hierarchy: Local Cache -> Recursive Resolver -> Root Server (.) -> TLD (.com/.th) -> Authoritative Nameserver (เก็บระเบียน A, AAAA, CNAME จริง)',
      'Cloud Service: IaaS = ผู้ใช้คุม OS/VM เอง (AWS EC2), PaaS = ผู้ให้บริการคุม OS ให้ ผู้ใช้ลงแค่โค้ด (Firebase/App Engine), SaaS = ใช้งานผ่านเบราว์เซอร์พร้อมใช้ (Google Docs/M365)',
      'Container vs VM: Container แชร์ OS Kernel ของโฮสต์ผ่าน namespaces และ cgroups (เบา, บูตในมิลลิวินาที) ส่วน VM ต้องมี Hypervisor และรัน Guest OS เต็มตัว'
    ],
    keyConceptCards: [
      {
        title: 'OSI 7 Layers & Protocol Mapping',
        subtitle: 'ชั้นการทำงานและโปรโตคอลสำคัญ',
        bullets: [
          'Layer 7 (Application): HTTP, HTTPS, DNS, SMTP, FTP, SSH, Telnet',
          'Layer 6 (Presentation): SSL/TLS, Data Compression, ASCII, JPEG',
          'Layer 5 (Session): ควบคุมการสร้าง/รักษา/ตัดเซสชัน (RPC, NetBIOS)',
          'Layer 4 (Transport): TCP (พอร์ต 80, 443, 22), UDP (พอร์ต 53, 67, 123) -> PDU: Segment',
          'Layer 3 (Network): IP (IPv4, IPv6), ICMP (Ping), อุปกรณ์คือ Router -> PDU: Packet',
          'Layer 2 (Data Link): MAC Address, Ethernet, อุปกรณ์คือ Switch, Bridge -> PDU: Frame',
          'Layer 1 (Physical): สาย UTP, ไฟเบอร์, ฮับ (Hub), สัญญาณไฟฟ้า/แสง -> PDU: Bit'
        ],
        examTip: 'Router ทำงานที่ Layer 3 (Packet); Switch ทำงานที่ Layer 2 (Frame); Hub ทำงานที่ Layer 1 (Bit)',
        badge: 'OSI Model'
      },
      {
        title: 'TCP 3-Way Handshake',
        subtitle: 'การเชื่อมต่อที่เชื่อถือได้ของ Layer 4',
        bullets: [
          'Step 1: Client ส่งแพ็กเก็ต SYN (Synchronize) ขอเริ่มการเชื่อมต่อพร้อม Sequence Number สุ่ม',
          'Step 2: Server ตอบกลับด้วย SYN-ACK (Synchronize-Acknowledge) รับทราบและส่งลำดับของตนเอง',
          'Step 3: Client ส่ง ACK (Acknowledge) ยืนยันการเชื่อมต่อ เสร็จสิ้นกระบวนการ เริ่มรับส่งข้อมูล',
          'การตัดการเชื่อมต่อ (Teardown): ใช้กระบวนการ 4-Way Handshake ด้วยแฟล็ก FIN และ ACK'
        ],
        examTip: 'ข้อสอบถามลำดับแพ็กเก็ตในการเริ่มเชื่อมต่อ TCP คำตอบคือ SYN -> SYN-ACK -> ACK',
        badge: 'TCP/IP'
      },
      {
        title: 'Private IP Addresses & พิเศษ',
        subtitle: 'ไอพีส่วนตัวที่ห้ามวิ่งบน Public Internet (RFC 1918)',
        bullets: [
          'Class A: 10.0.0.0 – 10.255.255.255 (/8) รวม 16.7 ล้านเลขหมาย',
          'Class B: 172.16.0.0 – 172.31.255.255 (/12) รวม 1 ล้านเลขหมาย (ระวังไม่ใช่ 172.0 ถึง 172.255)',
          'Class C: 192.168.0.0 – 192.168.255.255 (/16) รวม 65,536 เลขหมาย',
          'Loopback Address: 127.0.0.1 (ทดสอบเน็ตเวิร์กภายในเครื่องตัวเอง)',
          'APIPA (Automatic Private IP): 169.254.0.1 – 169.254.255.254 ได้มาเมื่อขอ DHCP ไม่สำเร็จ'
        ],
        examTip: 'ถ้าเครื่องเปิดคอมแล้วได้ IP 169.254.x.x แปลว่า "DHCP Server ล่มหรือรับสัญญาณไม่ได้"',
        badge: 'IP Addressing'
      },
      {
        title: 'Cloud & Container Architecture',
        subtitle: 'IaaS vs PaaS vs SaaS และ Docker',
        bullets: [
          'IaaS: ผู้ให้บริการดูแล Hardware + Virtualization; ผู้ใช้ติดตั้ง OS, Runtime, Middleware, App เอง',
          'PaaS: ผู้ให้บริการดูแล OS + Runtime ให้; ผู้ใช้แค่ Deploy Source Code (เช่น Heroku, Firebase)',
          'SaaS: ผู้ให้บริการดูแลทุกอย่าง; ผู้ใช้แค่ Login ใช้งาน (เช่น Gmail, Office 365, Canva)',
          'Docker Containers: แยกโปรเซสด้วย Linux Namespaces (PID, NET, MNT) และคุมทรัพยากรด้วย Cgroups'
        ],
        examTip: 'ข้อดีของ Container เหนือ VM: ไม่ต้องรัน Guest OS ซ้ำซ้อน ทำให้ใช้ RAM น้อยและเปิดปิดได้ไวกว่า',
        badge: 'Cloud & DevOps'
      }
    ],
    formulasAndRules: [
      {
        name: 'สูตรคำนวณจำนวนโฮสต์ของ Subnet (Usable Host Formula)',
        formula: 'Usable Hosts = 2^(32 - Prefix) - 2',
        explanation: 'นำ 32 ลบด้วยค่า CIDR Prefix จะได้จำนวน Host Bits (n) จากนั้นยกกำลังสองแล้วลบ 2 (หัก Network IP และ Broadcast IP)',
        example: 'เครือข่าย 192.168.10.0/26 -> 32 - 26 = 6 bits -> 2^6 = 64',
        result: 'Usable Hosts = 64 - 2 = 62 เครื่อง (Subnet Mask คือ 255.255.255.192)'
      },
      {
        name: 'ตาราง Subnet Mask ยอดฮิตในข้อสอบ',
        formula: '/24=254 hosts | /25=126 hosts | /26=62 hosts | /27=30 hosts | /28=14 hosts | /29=6 hosts | /30=2 hosts',
        explanation: 'จำคู่: /30 ใช้ทำ Point-to-Point link มี usable IP แค่ 2 เลขหมาย (2^(32-30) - 2 = 4 - 2 = 2)',
        example: '/28 มีกี่ host bits? ตอบ 32 - 28 = 4 bits -> 2^4 = 16',
        result: 'ใช้งานได้ 16 - 2 = 14 เครื่อง (Subnet Mask: 255.255.255.240)'
      }
    ],
    comparisonTable: {
      title: 'เปรียบเทียบ TCP vs UDP',
      colA: 'คุณสมบัติ',
      colB: 'TCP (Transmission Control Protocol)',
      colC: 'UDP (User Datagram Protocol)',
      rows: [
        { aspect: 'รูปแบบการเชื่อมต่อ', itemA: 'Connection-oriented (มี 3-Way Handshake)', itemB: 'Connectionless (ไม่มีการเชื่อมต่อล่วงหน้า)' },
        { aspect: 'ความน่าเชื่อถือ', itemA: 'สูง มีการส่งซ้ำเมื่อแพ็กเก็ตสูญหาย (Retransmit)', itemB: 'ต่ำ ไม่มีการยืนยันการรับส่ง (Best Effort)' },
        { aspect: 'การจัดเรียงลำดับ', itemA: 'รับประกันลำดับแพ็กเก็ตตาม Sequence Number', itemB: 'ไม่รับประกัน อาจมาถึงสลับลำดับกันได้' },
        { aspect: 'ขนาดส่วนหัว (Header)', itemA: '20 ถึง 60 Bytes', itemB: '8 Bytes คงที่ (ทำงานได้เร็วกว่ามาก)' },
        { aspect: 'โปรโตคอลตัวอย่าง', itemA: 'HTTP, HTTPS, SSH, FTP, SMTP', itemB: 'DNS Queries, DHCP, VoIP, Live Streaming, Quake' }
      ]
    },
    memoryTricks: [
      {
        title: 'สูตรท่องจำ OSI 7 Layers (บนลงล่าง 7 ไป 1)',
        description: 'All People Seem To Need Data Processing',
        technique: 'A (Application) -> P (Presentation) -> S (Session) -> T (Transport) -> N (Network) -> D (Data Link) -> P (Physical)'
      },
      {
        title: 'สูตรท่องจำ PDU 5 ลำดับ',
        description: 'Don\'t Stop Pouring Fresh Beer',
        technique: 'D (Data: ชั้น 7-5) -> S (Segment: ชั้น 4) -> P (Packet: ชั้น 3) -> F (Frame: ชั้น 2) -> B (Bit: ชั้น 1)'
      }
    ],
    commonMistakes: [
      {
        wrong: '172.10.1.1 เป็น Private IP Address',
        right: '172.10.1.1 เป็น Public IP! Private Class B เริ่มที่ 172.16.0.0 ถึง 172.31.255.255 เท่านั้น',
        reason: 'คนชอบจำเหมารวมว่า 172.x.x.x เป็น Private ทั้งหมด ซึ่งผิด! ต้องเป็น 172.16 ถึง 172.31 เท่านั้น'
      },
      {
        wrong: 'Switch จัดการส่งต่อข้อมูลระดับ Packet',
        right: 'Switch จัดการส่งต่อ Frame (Layer 2) ส่วน Router จัดการส่งต่อ Packet (Layer 3)',
        reason: 'Switch ตรวจสอบ MAC Address ใน Layer 2 ไม่ใช่ IP Address'
      },
      {
        wrong: 'คำนวณจำนวนโฮสต์ของ /24 ได้ 256 เครื่อง',
        right: 'ใช้งานได้จริง 254 เครื่อง เพราะต้องหัก .0 (Network ID) และ .255 (Broadcast ID)',
        reason: 'อย่าลืมลบ 2 เสมอเมื่อโจทย์ถามจำนวนโฮสต์หรือคอมพิวเตอร์ที่เชื่อมต่อได้'
      }
    ]
  },

  // =========================================================================
  // UNIT 3: ฮาร์ดแวร์ สถาปัตยกรรมคอมพิวเตอร์ และระบบปฏิบัติการ
  // =========================================================================
  {
    unitNumber: 3,
    id: 'hardware-os',
    nameTh: 'ฮาร์ดแวร์ สถาปัตยกรรมคอมพิวเตอร์ และระบบปฏิบัติการ',
    nameEn: 'Computer Architecture, Memory Hierarchy, RAID & OS Internals',
    color: '#53DBAB',
    sourcePages: 'หน้า 8–11, 20–24',
    questionRange: 'ข้อ 41–60 (20 ข้อ)',
    oneLiner: 'คำนวณ AMAT แคชให้เป็น, ท่องวงรอบคำสั่ง Fetch-Decode-Execute, แยกสถาปัตยกรรม von Neumann กับ Harvard, จำระดับ RAID 0/1/5/6/10 และคำนวณสิทธิ์ไฟล์ Linux (chmod)',
    mustRememberPoints: [
      'von Neumann vs Harvard: von Neumann ใช้บัสและหน่วยความจำชุดเดียวกันเก็บทั้ง Code และ Data เกิด von Neumann Bottleneck ส่วน Harvard แยกบัสคำสั่งและบัสข้อมูลอิสระ ดึงพร้อมกันได้',
      'Machine Instruction Cycle: 1. Fetch (ดึงคำสั่งตาม PC มาใส่ IR, เพิ่มค่า PC) -> 2. Decode (CU ถอดรหัสคำสั่ง) -> 3. Execute (ALU ประมวลผล) -> 4. Store/Writeback (บันทึกผลลงรีจิสเตอร์/RAM)',
      'รีจิสเตอร์สำคัญ: PC (ชี้คำสั่งถัดไป), IR (เก็บคำสั่งปัจจุบัน), MAR (เก็บแอดเดรสที่จะอ่านเขียน), MBR/MDR (เก็บข้อมูลที่อ่านเขียนกับบัส), ACC (พักผลลัพธ์คำนวณ)',
      'ลำดับความเร็วหน่วยความจำ: Registers (<1ns) > L1 Cache (1-2ns) > L2 Cache > L3 Cache > Main Memory (DDR5 50-80ns) > NVMe PCIe SSD > SATA SSD > HDD (5-10ms)',
      'สูตรคำนวณ AMAT: AMAT = Hit Time + (Miss Rate × Miss Penalty)',
      'RAID Levels: RAID 0 (Striping/เร็วสุด/เสีย 1 ลูกข้อมูลพังหมด), RAID 1 (Mirroring/ซ้ำซ้อน 50%/เสียได้ 1 ลูก), RAID 5 (Parity กระจาย/เสียได้ 1 ลูก/จุได้ N-1), RAID 6 (Dual Parity/เสียได้ 2 ลูก/จุได้ N-2)',
      'NVMe SSD: เชื่อมต่อตรงกับ PCIe Bus รองรับได้ถึง 64,000 คิว (คิวละ 64,000 คำสั่ง) เหนือกว่า SATA AHCI ที่มีแค่ 1 คิว (32 คำสั่ง)',
      'OS & Linux: Process States (New -> Ready -> Running -> Waiting/Blocked -> Terminated); สิทธิ์ chmod: r=4, w=2, x=1 เรียง Owner-Group-Others (เช่น chmod 755 = rwxr-xr-x)'
    ],
    keyConceptCards: [
      {
        title: 'CPU Instruction Cycle & Registers',
        subtitle: 'วงรอบคำสั่งเครื่องจักร 4 ขั้นตอน',
        bullets: [
          'Fetch: ดึงคำสั่งจาก RAM ตามตำแหน่งแอดเดรสที่ชี้โดย PC (Program Counter) มาเก็บใน IR แล้วเพิ่มค่า PC',
          'Decode: Control Unit (CU) แปลความหมาย Opcode และชี้ตำแหน่ง Operand',
          'Execute: ALU (Arithmetic Logic Unit) ทำการคำนวณทางคณิตศาสตร์หรือตรรกะ',
          'Store / Writeback: เขียนผลลัพธ์กลับไปยังรีจิสเตอร์ปลายทาง หรือหน่วยความจำหลัก'
        ],
        examTip: 'รีจิสเตอร์ที่เก็บ "แอดเดรสของคำสั่งถัดไป" คือ PC (Program Counter) เสมอ',
        badge: 'สถาปัตยกรรม CPU'
      },
      {
        title: 'Cache Memory & AMAT Calculation',
        subtitle: 'สูตรเวลาเข้าถึงหน่วยความจำเฉลี่ย',
        bullets: [
          'แคชทำหน้าที่พักข้อมูลจาก RAM เพื่อลดช่องว่างความเร็ว (Speed Gap) ระหว่าง CPU กับ RAM',
          'L1 Cache เร็วสุดและอยู่ใกล้คอร์ที่สุด ต่อด้วย L2 และ L3 (มักแชร์ร่วมกันทุกคอร์)',
          'สูตร AMAT: AMAT = Hit Time + (Miss Rate × Miss Penalty)',
          'ยิ่ง Hit Rate สูง (Miss Rate ต่ำ) เวลาเฉลี่ย AMAT จะยิ่งวิ่งเข้าใกล้ Hit Time'
        ],
        examTip: 'ระวังโจทย์ให้ "Hit Rate = 95%" ต้องแปลงเป็น "Miss Rate = 5% (0.05)" ก่อนนำไปเข้าสูตร!',
        badge: 'การคำนวณ'
      },
      {
        title: 'RAID Storage Comparison',
        subtitle: 'ระบบสำรองข้อมูลและความจุที่ใช้งานได้',
        bullets: [
          'RAID 0 (Striping): ไม่มีความปลอดภัยเลย เสีย 1 ตัวพังหมด ความจุใช้งาน = N × ขนาด',
          'RAID 1 (Mirroring): สำเนาข้อมูลเหมือนกัน 2 ฝั่ง ความจุใช้งาน = ขนาดดิสก์ 1 ลูก (50%)',
          'RAID 5 (Striping with Parity): ใช้ Parity กระจาย ความจุ = (N - 1) × ขนาด (เสียได้ 1 ลูก)',
          'RAID 6 (Dual Parity): เขียน Parity สองชุด ความจุ = (N - 2) × ขนาด (เสียพร้อมกันได้ 2 ลูก)',
          'RAID 10 (1+0): ทำ Mirroring ก่อนแล้วเอามา Striping ได้ทั้งความเร็วและความทนทาน'
        ],
        examTip: 'โจทย์ยอดฮิต: ดิสก์ 4TB จำนวน 4 ลูกทำ RAID 5 จะเหลือที่ใช้กี่ TB? ตอบ (4 - 1) × 4 = 12 TB',
        badge: 'Storage & RAID'
      },
      {
        title: 'Linux Permissions & File Modes',
        subtitle: 'สิทธิ์ไฟล์แบบเลขฐานแปด (Octal Permissions)',
        bullets: [
          'ค่าประจำสิทธิ์: อ่าน (Read: r) = 4, เขียน (Write: w) = 2, ประมวลผล (Execute: x) = 1',
          '3 กลุ่มผู้ใช้งาน: เจ้าของไฟล์ (Owner/User) -> สมาชิกกลุ่ม (Group) -> คนอื่น (Others)',
          'ตัวอย่าง chmod 755: Owner = 4+2+1=7 (rwx), Group = 4+0+1=5 (r-x), Others = 4+0+1=5 (r-x)',
          'ตัวอย่าง chmod 644: Owner = 4+2+0=6 (rw-), Group = 4+0+0=4 (r--), Others = 4+0+0=4 (r--)'
        ],
        examTip: 'ถ้าต้องการให้ไฟล์รันเป็นสคริปต์ได้ ต้องมีสิทธิ์ x (Execute) เสมอ',
        badge: 'Linux System'
      }
    ],
    formulasAndRules: [
      {
        name: 'สูตรคำนวณ AMAT (Average Memory Access Time)',
        formula: 'AMAT = Hit Time + (Miss Rate × Miss Penalty)',
        explanation: 'คำนวณเวลาถัวเฉลี่ยในการเข้าถึงข้อมูลจากระบบแคช',
        example: 'แคช L1 มี Hit Time = 1 ns, Miss Rate = 4% (0.04), Miss Penalty ไป RAM = 100 ns',
        result: 'AMAT = 1 + (0.04 × 100) = 1 + 4 = 5 ns'
      },
      {
        name: 'สูตรคำนวณความจุ RAID 5 และ RAID 6',
        formula: 'RAID 5 Capacity = (N - 1) × Size | RAID 6 Capacity = (N - 2) × Size',
        explanation: 'N คือจำนวนฮาร์ดดิสก์ทั้งหมดที่ใช้ในอาร์เรย์',
        example: 'ใช้ฮาร์ดดิสก์ 8TB จำนวน 5 ลูก: RAID 5 = (5 - 1) × 8 = 32 TB | RAID 6 = (5 - 2) × 8 = 24 TB',
        result: 'RAID 5 ทนดิสก์พังได้ 1 ลูก, RAID 6 ทนดิสก์พังได้ 2 ลูก'
      }
    ],
    comparisonTable: {
      title: 'เปรียบเทียบสถาปัตยกรรม von Neumann vs Harvard',
      colA: 'คุณสมบัติ',
      colB: 'von Neumann Architecture',
      colC: 'Harvard Architecture',
      rows: [
        { aspect: 'โครงสร้างหน่วยความจำ', itemA: 'หน่วยความจำร่วมกัน (เก็บทั้ง Instructions และ Data)', itemB: 'แยกหน่วยความจำคำสั่งและข้อมูลออกจากกันทางกายภาพ' },
        { aspect: 'บัสข้อมูล (Bus)', itemA: 'ใช้บัสร่วมกันเส้นเดียว (Single System Bus)', itemB: 'แยกบัสข้อมูล (Data Bus) และบัสคำสั่ง (Instruction Bus)' },
        { aspect: 'ความเร็วในการอ่านคำสั่ง', itemA: 'ช้ากว่า ต้องรอสลับรอบอ่านคำสั่งกับอ่านข้อมูล', itemB: 'เร็วกว่า สามารถดึงคำสั่งและข้อมูลได้พร้อมกันในไซเคิลเดียว' },
        { aspect: 'คอขวด (Bottleneck)', itemA: 'เกิด von Neumann Bottleneck ที่แบนด์วิดท์ของบัส', itemB: 'ไม่มีคอขวดของบัสคำสั่ง แต่ฮาร์ดแวร์ซับซ้อนและแพงกว่า' },
        { aspect: 'การใช้งานทั่วไป', itemA: 'คอมพิวเตอร์ทั่วไป (x86, ARM ในระบบ Desktop)', itemB: 'ไมโครคอนโทรลเลอร์ (PIC, AVR/Arduino, DSP)' }
      ]
    },
    memoryTricks: [
      {
        title: 'สูตรจำสิทธิ์ Linux เลข 4-2-1',
        description: 'จำตัวเลขคู่ตัวอักษร: r=4, w=2, x=1',
        technique: 'อ่าน=4, เขียน=2, รัน=1 (ผลรวมสูงสุด 4+2+1=7 คือทำได้ทุกอย่าง)'
      },
      {
        title: 'สูตรจำจำนวนดิสก์ที่พังได้ใน RAID',
        description: 'RAID 0 พังได้ 0 ลูก, RAID 1 พังได้ 1 ลูก, RAID 5 พังได้ 1 ลูก, RAID 6 พังได้ 2 ลูก',
        technique: 'RAID 0 = 0 ลูกรอด (ตายสนิท) | RAID 5 = 1 ลูก | RAID 6 = 2 ลูก (จำเลข 6 คือ 2 พาริตี้)'
      }
    ],
    commonMistakes: [
      {
        wrong: 'Hit Rate 98% นำ 98 ไปคูณกับ Miss Penalty ในสูตร AMAT',
        right: 'ต้องใช้ Miss Rate = 2% (0.02) ในการคูณ ไม่ใช่ Hit Rate!',
        reason: 'สูตรคือ Hit Time + (Miss Rate × Miss Penalty) พลาดตรงนี้คำตอบจะผิดทันที'
      },
      {
        wrong: 'RAID 5 ใช้ฮาร์ดดิสก์ 2 ลูกได้',
        right: 'RAID 5 ต้องใช้ฮาร์ดดิสก์ขั้นต่ำ 3 ลูก (ส่วน RAID 6 ต้องขั้นต่ำ 4 ลูก)',
        reason: 'การกระจาย Parity ต้องมีดิสก์อย่างน้อย 3 ตัวเพื่อคำนวณ XOR'
      },
      {
        wrong: 'คำสั่งถัดไปที่จะประมวลผลถูกเก็บไว้ใน Instruction Register (IR)',
        right: 'IR เก็บคำสั่งที่กำลังทำงานอยู่ ส่วนคำสั่ง "ถัดไป" ถูกชี้โดย Program Counter (PC)',
        reason: 'อย่าสับสนระหว่างคำสั่งปัจจุบัน (IR) กับคำสั่งถัดไป (PC)'
      }
    ]
  },

  // =========================================================================
  // UNIT 4: การเขียนโปรแกรม โครงสร้างข้อมูล และขั้นตอนวิธี
  // =========================================================================
  {
    unitNumber: 4,
    id: 'programming-algo',
    nameTh: 'การเขียนโปรแกรม โครงสร้างข้อมูล และขั้นตอนวิธี',
    nameEn: 'Data Structures, Big-O Complexity, Algorithms & Logic',
    color: '#EC4899',
    sourcePages: 'หน้า 11–14, 20–24',
    questionRange: 'ข้อ 61–80 (20 ข้อ)',
    oneLiner: 'จำลำดับ Big-O (O(1) < O(log N) < O(N) < O(N log N) < O(N²)), สัญลักษณ์ผังงาน Flowchart, กฎเดอมอร์แกนของบูลีน และคุณสมบัติ In-Order Traversal ของ Binary Search Tree',
    mustRememberPoints: [
      'สัญลักษณ์ Flowchart (ISO 5807): สี่เหลี่ยมมุมมน/วงรี = Start/End, สี่เหลี่ยมผืนผ้า = Process/การคำนวณ, สี่เหลี่ยมขนมเปียกปูน = Input/Output, สี่เหลี่ยมข้าวหลามตัด (Diamond) = Decision/เงื่อนไข, วงกลม = จุดเชื่อมต่อ (Connector)',
      'กฎเดอมอร์แกน (De Morgan\'s Laws): NOT(A AND B) = (NOT A) OR (NOT B) และ NOT(A OR B) = (NOT A) AND (NOT B)',
      'ลำดับ Big-O จากเร็วสุดไปช้าสุด: O(1) < O(log N) < O(N) < O(N log N) < O(N²) < O(2^N) < O(N!)',
      'Binary Search: ทำงานได้เฉพาะบนชุดข้อมูลที่ "เรียงลำดับแล้ว (Sorted Array)" เท่านั้น ประสิทธิภาพเวลาคือ O(log N)',
      'เปรียบเทียบ Sorting Algorithms: QuickSort เฉลี่ย O(N log N) แต่ Worst-case เป็น O(N²) เมื่อเลือก Pivot แย่; MergeSort เป็น O(N log N) ทุกกรณี แต่กินแรมเพิ่ม O(N); Bubble/Insertion/Selection เป็น O(N²)',
      'Stack vs Queue: Stack ใช้ LIFO (Last-In-First-Out: Push/Pop) เช่น Undo, ฟังก์ชัน Recursive; Queue ใช้ FIFO (First-In-First-Out: Enqueue/Dequeue) เช่น คิวพิมพ์งาน, คิว CPU',
      'Binary Search Tree (BST): กิ่งซ้ายค่าน้อยกว่า Root, กิ่งขวาค่ามากกว่า Root; การท่องแบบ In-Order Traversal (ซ้าย -> Root -> ขวา) จะได้ข้อมูลเรียงลำดับจากน้อยไปหามากเสมอ!'
    ],
    keyConceptCards: [
      {
        title: 'สัญลักษณ์ Flowchart มาตรฐาน ISO 5807',
        subtitle: 'รูปทรงและความหมายในการออกแบบโปรแกรม',
        bullets: [
          'วงรี / สี่เหลี่ยมมุมมน (Terminator): จุดเริ่มต้น (Start) หรือสิ้นสุด (Stop/End) ของโปรแกรม',
          'สี่เหลี่ยมผืนผ้า (Process): การคำนวณ, ประมวลผล, หรือกำหนดค่าตัวแปร เช่น x = x + 1',
          'สี่เหลี่ยมด้านขนาน (Input/Output): รับค่าจากภายนอกหรือแสดงผล เช่น Read(A), Print(B)',
          'สี่เหลี่ยมข้าวหลามตัด (Decision): การตัดสินใจหรือตรวจสอบเงื่อนไข มีเส้นทางออก True/False หรือ Yes/No',
          'วงกลมเล็ก (Connector): จุดเชื่อมต่อการทำงานภายในหน้าเดียวกัน'
        ],
        examTip: 'ถ้าโจทย์ถามสัญลักษณ์รับค่าคีย์บอร์ดหรือพิมพ์ออกจอ ตอบ "สี่เหลี่ยมด้านขนาน (Parallelogram)" ไม่ใช่สี่เหลี่ยมผืนผ้า!',
        badge: 'Flowchart'
      },
      {
        title: 'Big-O Notation Cheat Sheet',
        subtitle: 'ประสิทธิภาพเวลาและพื้นที่ของอัลกอริทึม',
        bullets: [
          'O(1) - Constant: เข้าถึงสมาชิก Array ด้วย Index, Push/Pop บน Stack, Hash Table Lookup (เฉลี่ย)',
          'O(log N) - Logarithmic: Binary Search บนข้อมูลที่เรียงแล้ว, ค้นหาบน Balanced BST',
          'O(N) - Linear: Linear Search ค้นหาข้อมูลแบบเรียงตัวใน Array ทั่วไป, วนลูปเดียว',
          'O(N log N) - Linearithmic: MergeSort, QuickSort (เฉลี่ย), HeapSort',
          'O(N²) - Quadratic: วนลูปซ้อนกันสองชั้น, BubbleSort, SelectionSort, InsertionSort'
        ],
        examTip: 'ข้อสอบชอบถาม "อัลกอริทึมใดทำงานได้เร็วที่สุดเมื่อ N มีขนาดใหญ่มาก" คำตอบคือ O(log N) หรือ O(1)',
        badge: 'Big-O'
      },
      {
        title: 'กฎพีชคณิตบูลีนและเดอมอร์แกน',
        subtitle: 'สูตรแปลงนิพจน์ตรรกะในข้อสอบ',
        bullets: [
          'De Morgan 1: ¬(A ∧ B) ≡ ¬A ∨ ¬B (นิเสธของ และ คือ หรือของนิเสธ)',
          'De Morgan 2: ¬(A ∨ B) ≡ ¬A ∧ ¬B (นิเสธของ หรือ คือ และของนิเสธ)',
          'กฎการดูดกลืน (Absorption): A ∨ (A ∧ B) = A และ A ∧ (A ∨ B) = A',
          'XOR Logic (A ⊕ B): เป็นจริงเมื่อข้อมูลต่างกันเท่านั้น = (A ∧ ¬B) ∨ (¬A ∧ B)'
        ],
        examTip: 'เมื่อเจอนิพจน์ !(x > 5 && y <= 10) แปลงด้วย De Morgan จะได้ (x <= 5 || y > 10)',
        badge: 'Boolean Logic'
      },
      {
        title: 'Binary Search Tree (BST) & Traversals',
        subtitle: 'โครงสร้างต้นไม้และการท่องโหนด',
        bullets: [
          'คุณสมบัติ BST: โหนดลูกฝั่งซ้าย < โหนดพ่อ < โหนดลูกฝั่งขวา เสมอ',
          'In-Order Traversal (L-D-R): เยี่ยมลูกซ้าย -> เยี่ยมโหนดปัจจุบัน -> เยี่ยมลูกขวา ผลลัพธ์จะได้ข้อมูลเรียงลำดับจากน้อยไปมากเสมอ',
          'Pre-Order Traversal (D-L-R): โหนดปัจจุบัน -> ซ้าย -> ขวา นิยมใช้คัดลอกโครงสร้างต้นไม้',
          'Post-Order Traversal (L-R-D): ซ้าย -> ขวา -> โหนดปัจจุบัน นิยมใช้ลบต้นไม้หรือประเมิน Postfix Expression'
        ],
        examTip: 'ถ้าโจทย์ถาม "การท่องต้นไม้แบบใดให้ผลลัพธ์ข้อมูลเรียงจากน้อยไปมาก" ตอบ "In-Order Traversal" ทันที!',
        badge: 'Data Structures'
      }
    ],
    comparisonTable: {
      title: 'เปรียบเทียบ Sorting Algorithms',
      colA: 'Algorithm',
      colB: 'Time Complexity (Avg / Worst)',
      colC: 'Space / สรุปจุดเด่น',
      rows: [
        { aspect: 'Bubble / Selection', itemA: 'O(N²) / O(N²)', itemB: 'O(1) / ช้ามาก ไม่เหมาะกับข้อมูลขนาดใหญ่' },
        { aspect: 'Insertion Sort', itemA: 'O(N²) / O(N²)', itemB: 'O(1) / เร็วมาก (O(N)) หากข้อมูลเกือบเรียงแล้ว' },
        { aspect: 'QuickSort', itemA: 'O(N log N) / O(N²)', itemB: 'O(log N) / เร็วที่สุดในทางปฏิบัติ แต่ตกม้าตายถ้า Pivot แย่' },
        { aspect: 'MergeSort', itemA: 'O(N log N) / O(N log N)', itemB: 'O(N) / การันตีความเร็วทุกกรณี แต่ต้องใช้แรมสำรอง' },
        { aspect: 'Binary Search', itemA: 'O(log N) / O(log N)', itemB: 'O(1) / ใช้ค้นหาข้อมูล ต้อง Sorted ล่วงหน้าก่อนเสมอ' }
      ]
    },
    memoryTricks: [
      {
        title: 'สูตรจำสัญลักษณ์ Flowchart 4 ทรงหลัก',
        description: 'ผืนผ้า=คิด ข้าวหลาม=ถาม ขนาน=เข้าออก มน=เริ่มจบ',
        technique: 'สี่เหลี่ยมผืนผ้า (คำนวณ) | ข้าวหลามตัด (เงื่อนไข/ถาม) | ด้านขนาน (Input/Output) | มุมมน (Start/Stop)'
      },
      {
        title: 'สูตรจำ In-Order ได้ข้อมูลเรียงลำดับ',
        description: 'In-Order แปลว่า เรียงลำดับตามตัวอักษร',
        technique: 'In-Order = In-Sorted-Order (ซ้าย เล็กสุด -> กลาง -> ขวา ใหญ่สุด)'
      }
    ],
    commonMistakes: [
      {
        wrong: 'ใช้ Binary Search กับ Array ที่ข้อมูลยังไม่ได้เรียงลำดับ',
        right: 'Binary Search บังคับว่าข้อมูลต้องเรียงลำดับ (Sorted) มาก่อนเท่านั้น',
        reason: 'ถ้าข้อมูลไม่เรียง ต้องใช้ Linear Search O(N) เท่านั้น'
      },
      {
        wrong: 'Stack ทำงานแบบ FIFO (First-In-First-Out)',
        right: 'Stack ทำงานแบบ LIFO (Last-In-First-Out) ส่วน Queue คือ FIFO',
        reason: 'Stack เหมือนจานซ้อนกัน จานที่วางบนสุดจะถูกหยิบออกก่อน (Last-In-First-Out)'
      },
      {
        wrong: 'นิเสธของ (A > 10) คือ (A < 10)',
        right: 'นิเสธของ (A > 10) คือ (A <= 10) ต้องมีเครื่องหมายเท่ากับด้วยเสมอ!',
        reason: 'ลืมเครื่องหมายเท่ากับเป็นจุดตกม้าตายอันดับหนึ่งในข้อสอบตรรกศาสตร์'
      }
    ]
  },

  // =========================================================================
  // UNIT 5: ปัญญาประดิษฐ์และวิทยาศาสตร์ข้อมูล
  // =========================================================================
  {
    unitNumber: 5,
    id: 'ai-datascience',
    nameTh: 'ปัญญาประดิษฐ์และวิทยาศาสตร์ข้อมูล',
    nameEn: 'AI, Machine Learning, Deep Learning & LLMs',
    color: '#F59E0B',
    sourcePages: 'หน้า 14–18, 20–24',
    questionRange: 'ข้อ 81–100 (20 ข้อ)',
    oneLiner: 'จำ 3 เสาหลัก ML, คำนวณ Confusion Matrix (Accuracy, Precision, Recall, F1), เข้าใจ Self-Attention ใน Transformer, ขั้นตอน RAG และคำนวณ VRAM ของ Quantization (FP16/INT8/INT4)',
    mustRememberPoints: [
      '3 กลุ่มหลักของ ML: Supervised (มี Label: Classification และ Regression), Unsupervised (ไม่มี Label: k-Means Clustering และ PCA ลดมิติ), Reinforcement (Agent เรียนรู้ผ่าน Action-Reward)',
      'สูตรประเมินโมเดล: Accuracy = (TP+TN)/(TP+TN+FP+FN), Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1-Score = 2×(Precision×Recall)/(Precision+Recall)',
      'การเลือกใช้ Metric: ตรวจมะเร็ง/โรคระบาด/การโกงบัตรเครดิต ให้ความสำคัญกับ Recall สูงสุด (ยอมให้ FP เกิดได้ แต่ต้องไม่ให้ FN หลุด)',
      'Activation Functions: Sigmoid (0 ถึง 1 เกิด Vanishing Gradient), ReLU (max(0, x) ไม่เกิด Vanishing Gradient สำหรับค่าบวก), Softmax (แปลง Logits ให้เป็นความน่าจะเป็นผลรวมเท่ากับ 1.0)',
      'Transformer Architecture: นำเสนอในเปเปอร์ "Attention is All You Need" (2017) ใช้กลไก Self-Attention ประมวลผลข้อความคู่ขนานได้ทั้งหมด แทนที่ RNN/LSTM ที่มีคอขวดตามลำดับ',
      'RAG (Retrieval-Augmented Generation): แก้ปัญหาภาพหลอน (Hallucination) และข้อมูลไม่อัปเดต โดยการ Chunk เอกสาร -> แปลงเป็น Vector Embeddings -> เก็บใน Vector DB -> ค้นหาเนื้อหาที่ตรงกับ Query -> ใส่ใน Context ให้ LLM สรุปคำตอบ',
      'Quantization VRAM: FP32 = 4 Bytes/พารามิเตอร์, FP16/BF16 = 2 Bytes/พารามิเตอร์, INT8 = 1 Byte/พารามิเตอร์, INT4 = 0.5 Byte/พารามิเตอร์ (โมเดล 7B ที่ INT4 ใช้แรมการ์ดจอเพียง ~3.5–4 GB)',
      'Stable Diffusion: ทำงานบน Latent Space (พื้นที่แฝงขนาดเล็กบีบอัดด้วย VAE) ร่วมกับ U-Net และ CLIP Text Encoder ทำให้กินทรัพยากรน้อยกว่าการทำ Diffusion บน Pixel Space โดยตรง'
    ],
    keyConceptCards: [
      {
        title: 'Confusion Matrix & Metrics Selection',
        subtitle: 'ตัวชี้วัดประสิทธิภาพโมเดลและการเลือกใช้งาน',
        bullets: [
          'True Positive (TP): ของจริงเป็นโรค โมเดลทายว่าเป็นโรค (ถูกต้อง)',
          'True Negative (TN): ของจริงปกติ โมเดลทายว่าปกติ (ถูกต้อง)',
          'False Positive (FP - Type I Error): ของจริงปกติ แต่โมเดลทายว่าเป็นโรค (ผลบวกลวง/ตื่นตูม)',
          'False Negative (FN - Type II Error): ของจริงเป็นโรค แต่โมเดลบอกว่าปกติ (ผลลบลวง/อันตรายถึงชีวิต)',
          'Precision = TP / (TP + FP) เน้นความแม่นยำของสิ่งที่ทายว่าบวก (เช่น ตรวจสแปมอีเมล ไม่ต้องการให้อีเมลงานดีหลุดไป)',
          'Recall = TP / (TP + FN) เน้นการเก็บกวาดให้ครบ ไม่ให้หลุดรอด (เช่น ตรวจโรคมะเร็ง, ตรวจจับคนร้าย)'
        ],
        examTip: 'ข้อสอบถามว่าระบบตรวจมะเร็งควรเน้น Metric ใด คำตอบคือ "Recall (Sensitivity)" เพื่อหลีกเลี่ยง False Negative',
        badge: 'การประเมินโมเดล'
      },
      {
        title: 'Transformer & Self-Attention Mechanism',
        subtitle: 'หัวใจของ LLM ยุคใหม่ (GPT, Gemini, Claude)',
        bullets: [
          'ตีพิมพ์โดย Google Brain ปี 2017 ในเปเปอร์ "Attention is All You Need"',
          'สูตร Attention: Attention(Q, K, V) = softmax(Q · K^T / √d_k) · V',
          'Query (Q), Key (K), Value (V): เปรียบเหมือนคำค้นหา, ดัชนีหัวข้อ, และเนื้อหาข้อมูล',
          'ข้อได้เปรียบเหนือกาลเวลา: รองรับ Parallelization เต็มรูปแบบ ไม่ต้องรอคำนวณทีละคำตามลำดับเวลาเหมือน RNN หรือ LSTM'
        ],
        examTip: 'กลไกที่ทำให้โมเดลเข้าใจความสัมพันธ์ระหว่างคำในประโยคได้ไม่ว่าจะอยู่ห่างกันแค่ไหนเรียกว่า "Self-Attention"',
        badge: 'GenAI & LLM'
      },
      {
        title: 'RAG Pipeline Architecture',
        subtitle: 'สถาปัตยกรรมลดภาพหลอนในโมเดลภาษาขนาดใหญ่',
        bullets: [
          'Step 1 (Ingestion): ดึงเอกสารภายใน ตัดย่อยเป็นส่วนๆ (Chunking) ขนาดเหมาะสม',
          'Step 2 (Embedding): นำแต่ละ Chunk เข้า Embedding Model แปลงเป็น Dense Vector ในอวกาศความหมาย',
          'Step 3 (Storage): จัดเก็บลงใน Vector Database (เช่น Milvus, Chroma, Pinecone, FAISS)',
          'Step 4 (Retrieval): เมื่อผู้ใช้ถาม คำถามจะถูกแปลงเป็นเวกเตอร์แล้วค้นหา Chunk ที่ใกล้เคียงด้วย Cosine Similarity',
          'Step 5 (Generation): นำ Chunk ที่ค้นหาได้แนบเป็น Context ส่งให้ LLM สังเคราะห์คำตอบที่มีแหล่งอ้างอิงชัดเจน'
        ],
        examTip: 'RAG ช่วยแก้ 2 ปัญหาใหญ่ของ LLM: 1. ข้อมูลไม่อัปเดต (Outdated Knowledge) 2. การสร้างข้อมูลเท็จ (Hallucination)',
        badge: 'RAG Architecture'
      },
      {
        title: 'Quantization & VRAM Calculation',
        subtitle: 'การบีบอัดขนาดน้ำหนักโมเดลเพื่อรันบนฮาร์ดแวร์จำกัด',
        bullets: [
          'พารามิเตอร์ 1 ตัวเก็บค่าน้ำหนัก (Weight) ในรูปแบบตัวเลขทศนิยม',
          'FP32 (Single Precision): ใช้ 32 บิต = 4 ไบต์ต่อพารามิเตอร์',
          'FP16 / BF16 (Half Precision): ใช้ 16 บิต = 2 ไบต์ต่อพารามิเตอร์ (มาตรฐานฝึกสอนโมเดล)',
          'INT8: แปลงเป็นเลขจำนวนเต็ม 8 บิต = 1 ไบต์ต่อพารามิเตอร์ (ประหยัดแรม 50% คุณภาพแทบไม่ตก)',
          'INT4 (เช่น GPTQ, AWQ, GGUF Q4_K_M): ใช้ 4 บิต = 0.5 ไบต์ต่อพารามิเตอร์ (ประหยัดแรม 75%)'
        ],
        examTip: 'สูตรประเมินขนาด VRAM คร่าวๆ: Parameters (Billion) × ขนาดไบต์ × 1.2 เผื่อ Context Overhead',
        badge: 'Model Deployment'
      }
    ],
    formulasAndRules: [
      {
        name: 'สูตรคำนวณ Confusion Matrix (Precision, Recall, F1)',
        formula: 'Precision = TP / (TP + FP) | Recall = TP / (TP + FN) | F1 = 2 × (P × R) / (P + R)',
        explanation: 'F1-Score คือค่าเฉลี่ยแบบฮาร์โมนิก (Harmonic Mean) เหมาะสำหรับชุดข้อมูลที่ไม่สมดุล (Imbalanced Data)',
        example: 'โมเดลตรวจโรค: TP = 90, FP = 10, FN = 10, TN = 890 -> Precision = 90/100 = 0.90, Recall = 90/100 = 0.90',
        result: 'F1-Score = 2 × (0.9 × 0.9) / (0.9 + 0.9) = 0.90 (90%)'
      },
      {
        name: 'สูตรคำนวณ VRAM สำหรับรันโมเดล LLM',
        formula: 'VRAM (GB) ≈ Model Parameters (Billion) × Bytes per Weight × 1.2',
        explanation: 'เผื่อตัวคูณ 1.2 เป็นค่า Overhead ของ KV-Cache และ Activation Memory',
        example: 'โมเดล LLaMA-3 8B บีบอัดด้วย INT4 (0.5 Bytes per weight) -> 8 × 0.5 = 4 GB × 1.2',
        result: 'ต้องการ VRAM ประมาณ 4.8–5.5 GB (รันบนการ์ดจอ RTX 3060 6GB ได้สบาย)'
      }
    ],
    comparisonTable: {
      title: 'เปรียบเทียบ Supervised vs Unsupervised vs Reinforcement Learning',
      colA: 'ประเภท',
      colB: 'ข้อมูลตั้งต้น (Training Data)',
      colC: 'งานและอัลกอริทึมตัวอย่าง',
      rows: [
        { aspect: 'Supervised Learning', itemA: 'ข้อมูลที่มีป้ายกำกับชัดเจน (Labeled Data: X และ y)', itemB: 'Classification (จำแนกภาพ/สแปม), Regression (ทำนายราคาบ้าน) ด้วย SVM, Random Forest, XGBoost' },
        { aspect: 'Unsupervised Learning', itemA: 'ข้อมูลดิบที่ไม่มีป้ายกำกับ (Unlabeled Data: X เท่านั้น)', itemB: 'Clustering (แบ่งกลุ่มลูกค้า k-Means), Dimensionality Reduction (ลดมิติ PCA), การหากลุ่มผิดปกติ (Anomaly Detection)' },
        { aspect: 'Reinforcement Learning', itemA: 'ไม่มีข้อมูลตายตัว เรียนรู้จากสิ่งแวดล้อม (Environment)', itemB: 'ระบบขับรถอัตโนมัติ, หุ่นยนต์เดิน, เล่นเกมโกะ (AlphaGo), Q-Learning, PPO, DQN' }
      ]
    },
    memoryTricks: [
      {
        title: 'สูตรจำ Precision vs Recall',
        description: 'Precision = แม่นของที่ทาย, Recall = ครบของจริง',
        technique: 'Precision สนใจตัวหารเป็น "ผลที่ทายบวกทั้งหมด (TP+FP)" ส่วน Recall สนใจตัวหารเป็น "ของจริงที่เป็นบวกทั้งหมด (TP+FN)"'
      },
      {
        title: 'สูตรจำขนาดตัวแปร Quantization',
        description: '32 บิต = 4B, 16 บิต = 2B, 8 บิต = 1B, 4 บิต = ครึ่ง B',
        technique: 'เอาจำนวนบิตหาร 8 จะได้ขนาดไบต์ทันที! (32/8 = 4B | 16/8 = 2B | 8/8 = 1B | 4/8 = 0.5B)'
      }
    ],
    commonMistakes: [
      {
        wrong: 'ใช้ Accuracy เป็นเกณฑ์ตัดสินโมเดลทำนายการฉ้อโกง (Fraud Detection)',
        right: 'ข้อมูลการฉ้อโกงมีน้อยมาก (Imbalanced) ต้องใช้ Precision, Recall หรือ F1-Score',
        reason: 'หากธุรกรรมปกติมี 99.9% โมเดลที่ทายว่าปกติทั้งหมดจะได้ Accuracy 99.9% แต่ตรวจจับโจรไม่ได้เลยแม้แต่คนเดียว'
      },
      {
        wrong: 'Single Perceptron สามารถจำแนกปัญหา XOR ได้',
        right: 'Single Perceptron แยกได้เฉพาะฟังก์ชันแบบเชิงเส้น (Linearly Separable) เท่านั้น ต้องมี Multi-Layer จึงจะแก้ XOR ได้',
        reason: 'นี่คือข้อจำกัดทางคณิตศาสตร์ที่ Minsky & Papert พิสูจน์ไว้ในปี 1969'
      },
      {
        wrong: 'Stable Diffusion รันกระบวนการ Denoising บน Pixel Space ขนาด 512x512 โดยตรง',
        right: 'Stable Diffusion ทำงานบน Latent Space ที่ถูกบีบอัดด้วย VAE ก่อน',
        reason: 'การบีบอัดลง Latent Space ช่วยลดขนาดมิติลงถึง 8 เท่า (64x64) ทำให้ประหยัดแรงคำนวณมหาศาล'
      }
    ]
  }
];

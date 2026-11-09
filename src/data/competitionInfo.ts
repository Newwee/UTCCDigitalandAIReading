export interface CompetitionScheduleItem {
  time: string;
  activity: string;
  location: string;
}

export interface CompetitionTimelineItem {
  period: string;
  activity: string;
}

export interface CompetitionDetails {
  title: string;
  edition: string;
  organizedBy: string;
  partners: string[];
  date: string;
  time: string;
  venue: string;
  eligibility: string;
  teamSize: string;
  teamLimit: string;
  rounds: {
    round: string;
    type: string;
    questionsCount: string;
    details: string;
  }[];
  awards: {
    title: string;
    prize: string;
    perks: string;
  }[];
  schedules: CompetitionScheduleItem[];
  timelines: CompetitionTimelineItem[];
  contact: {
    phone: string;
    facebook: string;
    website: string;
  };
  documentImages: {
    title: string;
    path: string;
    description: string;
  }[];
}

export const COMPETITION_DATA: CompetitionDetails = {
  title: "UTCC Digital and AI Challenge 2026",
  edition: "2026",
  organizedBy: "คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยหอการค้าไทย (UTCC STECH)",
  partners: [
    "สมาคมโปรแกรมเมอร์ไทย (Thai Programmer Association)",
    "สมาคมปัญญาประดิษฐ์ประเทศไทย (AIAT - Artificial Intelligence Association of Thailand)"
  ],
  date: "วันพฤหัสบดีที่ 19 พฤศจิกายน 2569",
  time: "08:30 – 16:30 น.",
  venue: "ชั้น 1 อาคารหอประชุม มหาวิทยาลัยหอการค้าไทย",
  eligibility: "นักเรียนระดับมัธยมศึกษาตอนปลาย (ม.4 - ม.6) หรือเทียบเท่า (ปวช. / ปวส.)",
  teamSize: "ทีมละไม่เกิน 3 คน (มาจากสถาบันเดียวกัน แต่ละโรงเรียนส่งได้ไม่เกิน 3 ทีม)",
  teamLimit: "รับจำนวนจำกัด 100 ทีม (คัดเข้ารอบชิงชนะเลิศ 10 ทีม)",
  rounds: [
    {
      round: "รอบคัดเลือก (Round 1)",
      type: "ข้อสอบแบบปรนัย (Multiple Choice)",
      questionsCount: "20 ข้อ (เวลา 10:00 - 11:30 น.)",
      details: "ผู้แข่งขันในแต่ละทีมช่วยกันตอบข้อสอบปรนัย 20 ข้อ เพื่อคัด 10 ทีมที่มีคะแนนสูงสุดเข้าสู่รอบชิงชนะเลิศ หากคะแนนเท่ากันจะตัดสินจากเวลาที่ใช้ในการส่งข้อสอบ"
    },
    {
      round: "รอบชิงชนะเลิศ (Final Round)",
      type: "ข้อสอบแบบอัตนัย (Descriptive / Problem-Solving)",
      questionsCount: "10 ข้อ (เวลา 13:15 - 16:00 น.)",
      details: "10 ทีมสุดท้ายแข่งขันตอบข้อสอบอัตนัยวิเคราะห์และแก้ปัญหาเชิงลึก หากคะแนนเท่ากันคณะกรรมการจะพิจารณาจากเวลาในการทำข้อสอบ"
    }
  ],
  awards: [
    {
      title: "รางวัลชนะเลิศ",
      prize: "10,000 บาท",
      perks: "ใบประกาศเกียรติคุณ + สิทธิ์ได้รับการพิจารณาให้ทุนการศึกษาของคณะฯ"
    },
    {
      title: "รางวัลรองชนะเลิศอันดับ 1",
      prize: "5,000 บาท",
      perks: "ใบประกาศเกียรติคุณ + สิทธิ์ได้รับการพิจารณาให้ทุนการศึกษาของคณะฯ"
    },
    {
      title: "รางวัลรองชนะเลิศอันดับ 2",
      prize: "3,000 บาท",
      perks: "ใบประกาศเกียรติคุณ + สิทธิ์ได้รับการพิจารณาให้ทุนการศึกษาของคณะฯ"
    }
  ],
  schedules: [
    { time: "08:30 – 09:00 น.", activity: "รายงานตัว และลงทะเบียนผู้เข้าแข่งขัน", location: "ด้านหน้าอาคารหอประชุม ชั้น 1" },
    { time: "09:00 – 09:15 น.", activity: "พิธีเปิดการแข่งขัน", location: "อาคารหอประชุม ชั้น 1" },
    { time: "09:15 – 09:45 น.", activity: "พิธีกรชี้แจงกฎและกติกาการแข่งขัน", location: "อาคารหอประชุม ชั้น 1" },
    { time: "10:00 – 11:30 น.", activity: "กิจกรรมแข่งขันตอบปัญหา UTCC Digital and AI Challenge รอบคัดเลือก (ปรนัย 20 ข้อ)", location: "อาคารหอประชุม ชั้น 1" },
    { time: "11:30 – 12:30 น.", activity: "พักรับประทานอาหารกลางวัน", location: "ห้อง IDE" },
    { time: "12:45 – 13:00 น.", activity: "ประกาศผล 10 ทีมที่ผ่านเข้ารอบชิงชนะเลิศ", location: "อาคารหอประชุม ชั้น 1" },
    { time: "13:15 – 16:00 น.", activity: "กิจกรรมแข่งขันตอบปัญหา UTCC Digital and AI Challenge รอบชิงชนะเลิศ (อัตนัย 10 ข้อ)", location: "อาคารหอประชุม ชั้น 1" },
    { time: "16:00 – 16:30 น.", activity: "ประกาศผลการแข่งขันรอบชิงชนะเลิศ พิธีมอบรางวัล และถ่ายภาพร่วมกัน", location: "อาคารหอประชุม ชั้น 1" }
  ],
  timelines: [
    { period: "23 กันยายน – 6 พฤศจิกายน 2569", activity: "รับสมัครผู้เข้าแข่งขัน (ผ่านช่องทางออนไลน์)" },
    { period: "6 – 10 พฤศจิกายน 2569", activity: "ตรวจสอบหลักฐานและคุณสมบัติผู้สมัคร" },
    { period: "10 พฤศจิกายน 2569", activity: "ประกาศรายชื่อทีมผู้มีสิทธิ์เข้าร่วมการแข่งขัน (จำกัด 100 ทีม)" },
    { period: "19 พฤศจิกายน 2569", activity: "ดำเนินการจัดการแข่งขันจริง ณ มหาวิทยาลัยหอการค้าไทย" }
  ],
  contact: {
    phone: "02-697-6504-5",
    facebook: "https://www.facebook.com/utccSciTech",
    website: "https://science.utcc.ac.th"
  },
  documentImages: [
    {
      title: "โปสเตอร์ประชาสัมพันธ์หลัก",
      path: "/competition/S__73605128_0.jpg",
      description: "ภาพโปสเตอร์เชิญชวนการแข่งขัน UTCC Digital & AI Challenge 2026 พร้อมกลุ่มความรู้ 5 ด้าน"
    },
    {
      title: "ประกาศกติกาและ 5 กลุ่มความรู้ (หน้า 1)",
      path: "/competition/S__73605125_0.jpg",
      description: "รายละเอียดประเภทการแข่งขัน คุณสมบัติ และรายละเอียดขอบเขต 5 กลุ่มความรู้"
    },
    {
      title: "รูปแบบการสอบ เกณฑ์ตัดสิน และรางวัล (หน้า 2)",
      path: "/competition/S__73605126_0.jpg",
      description: "รูปแบบรอบคัดเลือก (ปรนัย 20 ข้อ) รอบชิงชนะเลิศ (อัตนัย 10 ข้อ) และรางวัลทุนการศึกษา"
    },
    {
      title: "กำหนดการแข่งขันและขั้นตอนการดำเนินงาน (หน้า 3)",
      path: "/competition/S__73605127_0.jpg",
      description: "ตารางเวลากิจกรรมในวันแข่ง 19 พ.ย. และช่วงเวลารับสมัคร"
    }
  ]
};

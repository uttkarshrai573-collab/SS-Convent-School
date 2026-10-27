export interface AcademicWing {
  id: string;
  name: string;
  grades: string;
  tagline: string;
  description: string;
  features: string[];
  subjects: string[];
  timings: string;
  assessmentStyle: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'affiliation' | 'admissions' | 'academics' | 'facilities';
}

export interface Testimonial {
  name: string;
  relation: string;
  childGrade: string;
  locality: string;
  quote: string;
}

export interface FeeStructure {
  gradeRange: string;
  grades: string;
  annualTuition: number;
  quarterlyInstallment: number;
  activityAndLab: number;
  admissionFeeOneTime: number;
  features: string[];
}

export const SCHOOL_INFO = {
  name: "S.S. Convent Higher Secondary School",
  shortName: "S.S. Convent School",
  city: "Jabalpur",
  state: "Madhya Pradesh",
  pincode: "482002",
  address: "Damoh Road, Near Deendayal Chowk & Karmeta, Jabalpur, MP 482002",
  landmarks: "Just 3 mins from Deendayal Chowk & 4 mins from Karmeta main junction",
  board: "Madhya Pradesh Board of Secondary Education (MP Board)",
  medium: "English Medium",
  classes: "Nursery to 12th Grade (Higher Secondary)",
  streams: ["Science (PCM & PCB)", "Commerce (with Informatics/Maths)"],
  phonePrimary: "+91 94251 58240",
  phoneSecondary: "+91 761 268 4591",
  email: "admissions@ssconventjabalpur.edu.in",
  officeHours: "Monday – Saturday: 8:00 AM – 3:30 PM",
  establishedYear: 1998,
  studentCount: "1,400+",
  teacherRatio: "1:25",
  boardResult: "100% Pass in MP Board Exams",
  busRoutesCount: "14+ Dedicated Bus Routes"
};

export const NEARBY_HUBS = [
  { name: "Deendayal Chowk", distance: "1.2 km", time: "3 mins", note: "Direct city bus and auto connectivity" },
  { name: "Karmeta Junction", distance: "1.5 km", time: "4 mins", note: "Immediate neighborhood proximity" },
  { name: "Damoh Road Bypass", distance: "0.5 km", time: "2 mins", note: "Wide arterial transit corridor" },
  { name: "Damoh Naka", distance: "2.8 km", time: "7 mins", note: "Major commercial & transport junction" },
  { name: "MR-4 Road Crossing", distance: "1.8 km", time: "4 mins", note: "Rapid link to Vijay Nagar & Adhartal" },
  { name: "Jabalpur Junction Station", distance: "6.5 km", time: "16 mins", note: "Central railway hub" }
];

export const ACADEMIC_WINGS: AcademicWing[] = [
  {
    id: "pre-primary",
    name: "Pre-Primary Wing",
    grades: "Nursery, KG-I & KG-II",
    tagline: "Joyful Foundation & Experiential Discovery",
    description: "Our dedicated nursery and kindergarten wing nurtures young minds in a caring, vibrant English-speaking atmosphere. We emphasize phonics, early literacy, sensory play, and social habits.",
    features: [
      "Activity-driven playway methodology",
      "Phonics-based English reading foundation",
      "Colorful child-friendly indoor activity zone",
      "Trained and nurturing lady educators",
      "Regular milestone parent-teacher consultations"
    ],
    subjects: ["English Phonics & Vocabulary", "Foundational Numeracy", "General Awareness & Rhymes", "Art, Craft & Sensory Play", "Storytelling & Moral Etiquette"],
    timings: "8:30 AM – 12:30 PM",
    assessmentStyle: "Continuous observational progress, zero exam anxiety"
  },
  {
    id: "primary",
    name: "Primary Wing",
    grades: "Classes 1 to 5",
    tagline: "Core Conceptual Clarity & English Fluency",
    description: "Building strong fundamentals in mathematics, languages, and environmental studies. We instill disciplined study habits while encouraging curiosity, creative thinking, and sportsmanship.",
    features: [
      "Emphasis on spoken and written English fluency",
      "Hands-on science experiments and math lab activities",
      "Smart classroom visual learning modules",
      "Dedicated computer literacy classes from Class 1",
      "Cultural participation and daily physical education"
    ],
    subjects: ["English Language & Literature", "Hindi Language", "Mathematics", "Environmental Studies (EVS)", "Computer Science", "General Knowledge & Value Education"],
    timings: "8:00 AM – 1:45 PM",
    assessmentStyle: "Periodic term assessments and skill tracking under MP Board guidelines"
  },
  {
    id: "middle",
    name: "Middle School Wing",
    grades: "Classes 6 to 8",
    tagline: "Analytical Rigor & Holistic Exploration",
    description: "Transitioning students toward systematic academic inquiry. Students delve deeper into foundational sciences, algebraic reasoning, languages, and modern computer fundamentals.",
    features: [
      "Integrated science laboratory practical sessions",
      "Structured English debating, essay writing, and elocution",
      "Introductory coding, digital safety, and IT literacy",
      "Inter-house sports competitions (badminton, athletics, cricket)",
      "Remedial mentorship sessions for board preparedness"
    ],
    subjects: ["English (Special)", "Hindi (General)", "Sanskrit / Third Language", "Mathematics (Arithmetic, Algebra, Geometry)", "Integrated Science (Physics, Chemistry, Biology)", "Social Sciences (History, Civics, Geography)", "Computer Applications"],
    timings: "8:00 AM – 2:00 PM",
    assessmentStyle: "Formative and summative assessments as per MP State Board curriculum"
  },
  {
    id: "higher-secondary",
    name: "Secondary & Higher Secondary",
    grades: "Classes 9 to 12",
    tagline: "MP Board Exam Mastery & Career Launchpad",
    description: "Rigorous preparation for MP Board 10th and 12th board exams with dedicated mentorship, fully equipped modern laboratories, and expert faculty in Science and Commerce streams.",
    features: [
      "Specialized Science (PCM/PCB) & Commerce faculties",
      "Dedicated state-of-the-art Physics, Chemistry, Biology & IT labs",
      "MP Board question bank drill, past paper practice & mock exams",
      "Guidance for competitive entrance tests (JEE, NEET, CUET, CA Foundation)",
      "Consistent track record of district toppers and 100% pass rates"
    ],
    subjects: [
      "Science Stream: Physics, Chemistry, Mathematics (PCM) or Biology (PCB) + English + Hindi/Informatics",
      "Commerce Stream: Accountancy, Business Studies, Economics, Applied Mathematics / Informatics Practices + English",
      "Class 9-10: English, Hindi, Mathematics, Science, Social Science, Information Technology"
    ],
    timings: "8:00 AM – 2:15 PM (with after-school revision clinics)",
    assessmentStyle: "MP Board High School & Higher Secondary Exam Preparation"
  }
];

export const CAMPUS_FACILITIES: Facility[] = [
  {
    id: "campus-building",
    title: "Spacious Campus Architecture",
    category: "Campus Infrastructure",
    description: "Located along Damoh Road near Karmeta, our campus features safe gated grounds, modern ventilated academic blocks, landscaped courtyards, and round-the-clock CCTV surveillance.",
    image: "/src/assets/images/school_campus_exterior_1793095261408.jpg",
    stats: "2.5+ Acre Safe Campus"
  },
  {
    id: "smart-classrooms",
    title: "Smart Digital Classrooms",
    category: "Academic Facilities",
    description: "Equipped with interactive display panels and audiovisual multimedia tools that transform abstract mathematical and scientific topics into engaging visual lessons.",
    image: "/src/assets/images/classroom_education_1793095261552.jpg",
    stats: "Digital Smart Boards in every wing"
  },
  {
    id: "science-labs",
    title: "Science & Computer IT Lab",
    category: "Practical Learning",
    description: "Well-equipped practical laboratories for Physics, Chemistry, Biology, and Computer Science enabling students to conduct MP Board experiments under qualified teacher guidance.",
    image: "/src/assets/images/science_computer_lab_1793095262374.jpg",
    stats: "Full MP Board Lab Standards"
  },
  {
    id: "sports-ground",
    title: "Sports & Athletic Arena",
    category: "Physical Fitness",
    description: "Spacious playground with dedicated badminton courts, running track, cricket practice nets, volleyball, and daily physical education sessions guided by certified coaches.",
    image: "/src/assets/images/sports_co_curricular_1793095261969.jpg",
    stats: "Daily Co-Curricular Coaching"
  }
];

export const FEE_TIERS: FeeStructure[] = [
  {
    gradeRange: "Pre-Primary Wing",
    grades: "Nursery, KG-I & KG-II",
    annualTuition: 18500,
    quarterlyInstallment: 4625,
    activityAndLab: 2500,
    admissionFeeOneTime: 2000,
    features: [
      "Includes all learning activity worksheets & art materials",
      "Smart classroom visual sessions included",
      "Four equal quarterly installments",
      "No separate hidden charges"
    ]
  },
  {
    gradeRange: "Primary Wing",
    grades: "Class 1 to Class 5",
    annualTuition: 22000,
    quarterlyInstallment: 5500,
    activityAndLab: 3000,
    admissionFeeOneTime: 2500,
    features: [
      "Computer lab and library access included",
      "Sports and inter-house competition coaching",
      "Term evaluation reports and progress cards",
      "Concession available for siblings"
    ]
  },
  {
    gradeRange: "Middle School Wing",
    grades: "Class 6 to Class 8",
    annualTuition: 26500,
    quarterlyInstallment: 6625,
    activityAndLab: 3500,
    admissionFeeOneTime: 3000,
    features: [
      "Hands-on science lab practical sessions",
      "Computer practical sessions & digital assignments",
      "Remedial English and Mathematics clinics",
      "Sports kit & physical training sessions"
    ]
  },
  {
    gradeRange: "Secondary Wing",
    grades: "Class 9 & Class 10",
    annualTuition: 31000,
    quarterlyInstallment: 7750,
    activityAndLab: 4000,
    admissionFeeOneTime: 3500,
    features: [
      "MP Board registration & syllabus coverage",
      "Comprehensive lab experiment manuals",
      "Mock board test papers and scoring analysis",
      "Dedicated subject teacher doubt clearing"
    ]
  },
  {
    gradeRange: "Higher Secondary (Science / Commerce)",
    grades: "Class 11 & Class 12",
    annualTuition: 36000,
    quarterlyInstallment: 9000,
    activityAndLab: 5000,
    admissionFeeOneTime: 4000,
    features: [
      "Full Physics, Chemistry, Biology or Commerce lab facilities",
      "MP Board board exam preparation & question bank drills",
      "Special orientation for competitive exams",
      "Quarterly installment payment flexibility"
    ]
  }
];

export const BUS_ROUTES = [
  { routeNo: "Route 1", area: "Karmeta & Damoh Road", stops: ["Karmeta Main Market", "Sukha Road", "Damoh Road Bypass", "School Gate"], duration: "10-15 mins" },
  { routeNo: "Route 2", area: "Deendayal Chowk & MR-4", stops: ["Deendayal Bus Stand", "MR-4 Crossing", "Vijay Nagar Sector-2", "Damoh Road"], duration: "15-20 mins" },
  { routeNo: "Route 3", area: "Damoh Naka & Adhartal", stops: ["Damoh Naka", "Adhartal Chowk", "Suhagi", "School Gate"], duration: "15-25 mins" },
  { routeNo: "Route 4", area: "Baldeobagh & Gohalpur", stops: ["Baldeobagh", "Gohalpur Thana", "Raddi Chowki", "Damoh Road"], duration: "20-30 mins" },
  { routeNo: "Route 5", area: "Vijay Nagar & Kachnar City", stops: ["Kachnar City Gate", "Vijay Nagar Square", "Deendayal Ring Road", "School Gate"], duration: "20-25 mins" }
];

export const FAQS: FAQItem[] = [
  {
    question: "Which board is S.S. Convent Higher Secondary School Jabalpur affiliated with?",
    answer: "S.S. Convent Higher Secondary School is affiliated with the Madhya Pradesh Board of Secondary Education (MP Board), Bhopal. We impart education in English Medium from Nursery to 12th Grade.",
    category: "affiliation"
  },
  {
    question: "Where is the school located in Jabalpur?",
    answer: "Our campus is strategically located on Damoh Road, close to Deendayal Chowk, Karmeta, and Damoh Naka in Jabalpur, MP (Pin: 482002). It is easily accessible via both public and private transport.",
    category: "facilities"
  },
  {
    question: "What streams are offered for Class 11 and Class 12 students?",
    answer: "We offer both Science and Commerce streams under the MP Board. Science stream includes PCM (Physics, Chemistry, Mathematics) and PCB (Physics, Chemistry, Biology). Commerce stream includes Accountancy, Business Studies, Economics, and Informatics Practices/Mathematics.",
    category: "academics"
  },
  {
    question: "What is the admission procedure for the new session?",
    answer: "Admissions are open! Parents can submit an online enquiry through our website or visit the administrative desk on Damoh Road. The process involves filling out the registration form, interacting with the academic coordinator, submitting required documents (birth certificate, previous marksheet, transfer certificate, Aadhar), and confirming the seat.",
    category: "admissions"
  },
  {
    question: "Are school fees affordable, and can they be paid in installments?",
    answer: "Yes, S.S. Convent School is committed to providing high-quality English medium education at affordable fee tiers. Fees can be paid conveniently in four quarterly installments. We do not have any hidden fees.",
    category: "admissions"
  },
  {
    question: "Does the school provide safe transport / bus services?",
    answer: "Yes, we operate a fleet of school buses with trained drivers, verified conductors, and female attendants covering Karmeta, Damoh Road, Deendayal Chowk, MR-4, Damoh Naka, Adhartal, Vijay Nagar, and neighboring areas.",
    category: "facilities"
  },
  {
    question: "What are the school timings?",
    answer: "For Pre-Primary (Nursery, KG-I, KG-II): 8:30 AM to 12:30 PM. For Primary, Middle, and Higher Secondary (Classes 1 to 12): 8:00 AM to 2:00 PM, Monday through Saturday.",
    category: "academics"
  },
  {
    question: "How does the school ensure student safety and discipline?",
    answer: "The campus is secured with high boundary walls, dedicated security personnel at entry/exit gates, continuous CCTV monitoring in corridors and common grounds, verified staff credentials, and clean RO drinking water systems.",
    category: "facilities"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajeshwar Patel",
    relation: "Father of Ayush (Class 10)",
    childGrade: "Class 10 - MP Board",
    locality: "Karmeta, Jabalpur",
    quote: "Living near Karmeta, finding a dependable English medium school with dedicated teachers was our priority. S.S. Convent has prepared my son thoroughly for his board exams with regular mock tests and personal attention."
  },
  {
    name: "Sunita Vishwakarma",
    relation: "Mother of Priya (Class 8) & Aniket (Class 4)",
    childGrade: "Classes 8 & 4",
    locality: "Deendayal Chowk, Jabalpur",
    quote: "The bus arrives right on time at Deendayal Chowk, and the teachers are extremely polite and attentive. The balance of academic rigor, English speaking, and moral discipline is truly commendable."
  },
  {
    name: "Er. Manoj Chouksey",
    relation: "Father of Divyansh (Class 12 - Science)",
    childGrade: "Class 12 - Science Stream",
    locality: "Damoh Road, Jabalpur",
    quote: "The science lab facilities and experienced teachers for Physics and Chemistry are top class. My son scored 91% in his 11th standard and feels confident for his MP Board 12th exams."
  }
];

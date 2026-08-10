export const SITE = {
  name: "Next Generations Language Center",
  short: "Next Generations",
  tagline: "Language learning and international education, guided end to end",
  phone: "+44 20 7946 0321",
  phoneHref: "tel:+442079460321",
  whatsapp: "+44 7700 900123",
  whatsappHref: "https://wa.me/447700900123",
  email: "admissions@nextgenerations.center",
  address: "12 Bridgewater House, Kingsway, London WC2B 6UN",
  hours: "Mon – Sat · 09:00 – 19:00",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/student-services", label: "Student Services" },
  { to: "/student-recruitment", label: "Recruitment" },
  { to: "/contact", label: "Contact" },
] as const;

export const COURSES = [
  {
    slug: "general-english",
    title: "General English",
    summary:
      "A structured pathway from foundation to advanced fluency, built around real conversation, reading and confident writing.",
    duration: "8 – 36 weeks",
    level: "Beginner to Advanced",
    hours: "15 hrs / week",
    highlights: ["Small, focused classes", "Regular progress reviews", "Speaking practice every lesson"],
  },
  {
    slug: "ielts",
    title: "IELTS Preparation",
    summary:
      "Focused exam training covering all four skills, with practice tests, timing strategy and individual speaking feedback.",
    duration: "6 – 12 weeks",
    level: "Intermediate and above",
    hours: "20 hrs / week",
    highlights: ["Full practice tests", "Skill-by-skill strategy", "One-to-one speaking feedback"],
  },
  {
    slug: "communication",
    title: "Communication & Public Speaking",
    summary:
      "Practical training in interviews, presentations and professional conversation for students and working professionals.",
    duration: "6 weeks",
    level: "Intermediate and above",
    hours: "8 hrs / week",
    highlights: ["Interview practice", "Presentation coaching", "Personal feedback sessions"],
  },
  {
    slug: "business-english",
    title: "Business & Academic English",
    summary:
      "Professional vocabulary, report and email writing, and academic study skills for university or workplace settings.",
    duration: "10 weeks",
    level: "Upper-intermediate",
    hours: "10 hrs / week",
    highlights: ["Report and email writing", "CV and cover letter clinic", "Meeting and negotiation practice"],
  },
  {
    slug: "world-languages",
    title: "Other Language Courses",
    summary:
      "Tuition in additional languages, from absolute beginner through everyday conversational confidence.",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    hours: "6 hrs / week",
    highlights: ["Conversation-led lessons", "Cultural context", "Flexible evening groups"],
  },
  {
    slug: "young-learners",
    title: "Young Learners",
    summary:
      "Age-appropriate language development for school-age students, with regular parent updates and a supportive classroom.",
    duration: "Termly",
    level: "Ages 9 – 16",
    hours: "4 hrs / week",
    highlights: ["Parent progress updates", "Project-based learning", "Encouraging environment"],
  },
];

export const POSTS = [
  {
    slug: "ielts-speaking-band-7",
    category: "Exam Preparation",
    date: "12 July 2026",
    readTime: "6 min read",
    title: "Seven habits that lift an IELTS speaking performance",
    excerpt:
      "Fluency is rarely the real barrier. Our teachers break down the small, repeatable habits that make speaking answers clearer under exam pressure.",
  },
  {
    slug: "student-visa-checklist",
    category: "Education News",
    date: "28 June 2026",
    readTime: "5 min read",
    title: "A practical timeline for international student applications",
    excerpt:
      "Deadlines, documents and financial evidence take longer than most applicants expect. Here is a realistic month-by-month plan.",
  },
  {
    slug: "thinking-in-english",
    category: "Learning Tips",
    date: "14 June 2026",
    readTime: "4 min read",
    title: "How to stop translating in your head and start thinking in English",
    excerpt:
      "Translation slows you down at exactly the wrong moment. Three classroom-tested techniques to build direct thought in a second language.",
  },
  {
    slug: "study-habits-that-work",
    category: "Student Updates",
    date: "02 June 2026",
    readTime: "3 min read",
    title: "Study habits that make a difference between lessons",
    excerpt:
      "What students do in the hours between classes shapes progress more than any single lesson. Simple routines that compound.",
  },
  {
    slug: "academic-writing-structure",
    category: "Learning Tips",
    date: "21 May 2026",
    readTime: "7 min read",
    title: "The paragraph structure that university markers look for",
    excerpt:
      "Academic writing rewards predictable architecture. Learn the four-move paragraph that keeps your argument visible on every page.",
  },
  {
    slug: "choosing-a-language-centre",
    category: "Education News",
    date: "09 May 2026",
    readTime: "5 min read",
    title: "Nine questions to ask before enrolling at any language centre",
    excerpt:
      "Class size, teacher qualifications, placement testing and progress tracking. A checklist for families comparing schools.",
  },
];

/** Non-promotional commitments — no invented awards, ratings or partnerships. */
export const COMMITMENTS = [
  "Experienced instructors",
  "Small class sizes",
  "Personalised study plans",
  "International education guidance",
  "Support for students and parents",
];

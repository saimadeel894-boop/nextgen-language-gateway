export const SITE = {
  name: "Next Generations Language Center",
  short: "Next Generations",
  tagline: "Unlock Your Future Through Language Learning",
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
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/student-recruitment", label: "Student Recruitment" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const COURSES = [
  {
    slug: "general-english",
    title: "General English Programme",
    summary:
      "A structured pathway from foundation to advanced fluency, built around real conversation, academic reading and confident writing.",
    duration: "8 – 36 weeks",
    level: "A1 – C1",
    hours: "15 hrs / week",
    highlights: ["Small classes of 12", "Weekly progress reviews", "Certificate on completion"],
  },
  {
    slug: "ielts",
    title: "IELTS Preparation",
    summary:
      "Intensive exam training with full mock tests, band-score diagnostics and one-to-one speaking clinics led by former examiners.",
    duration: "6 – 12 weeks",
    level: "B1 – C1",
    hours: "20 hrs / week",
    highlights: ["Weekly mock exams", "Band 7+ strategy labs", "Examiner-led speaking"],
  },
  {
    slug: "communication",
    title: "Communication & Public Speaking",
    summary:
      "Practical training in interviews, presentations and professional correspondence for students entering global universities.",
    duration: "6 weeks",
    level: "B1+",
    hours: "8 hrs / week",
    highlights: ["Interview simulations", "Presentation coaching", "Video feedback"],
  },
  {
    slug: "business-english",
    title: "Business & Academic English",
    summary:
      "Sector-specific vocabulary, report writing and negotiation practice for professionals and postgraduate applicants.",
    duration: "10 weeks",
    level: "B2 – C1",
    hours: "10 hrs / week",
    highlights: ["Case-study seminars", "CV & cover letter clinic", "Industry vocabulary"],
  },
  {
    slug: "world-languages",
    title: "World Languages",
    summary:
      "Native-speaker tuition in German, French, Turkish and Arabic, from absolute beginner through conversational confidence.",
    duration: "12 weeks",
    level: "A1 – B2",
    hours: "6 hrs / week",
    highlights: ["Native instructors", "Cultural immersion evenings", "Flexible evening groups"],
  },
  {
    slug: "young-learners",
    title: "Young Learners Academy",
    summary:
      "Age-appropriate language development for ages 9–16, with parent reporting and a safe, supervised learning environment.",
    duration: "Termly",
    level: "Ages 9 – 16",
    hours: "4 hrs / week",
    highlights: ["Parent progress reports", "Safeguarding trained staff", "Project-based learning"],
  },
];

export const POSTS = [
  {
    slug: "ielts-speaking-band-7",
    category: "Exam Preparation",
    date: "12 July 2026",
    readTime: "6 min read",
    title: "Seven habits that move an IELTS speaking score from 6.0 to 7.5",
    excerpt:
      "Fluency is rarely the real barrier. Our examiners break down the small, repeatable habits that shift a speaking band in under eight weeks.",
  },
  {
    slug: "uk-student-visa-2026",
    category: "Education News",
    date: "28 June 2026",
    readTime: "5 min read",
    title: "What the 2026 student visa updates mean for international applicants",
    excerpt:
      "New financial evidence rules and updated CAS timelines change how early you should begin your application. Here is a practical timeline.",
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
    slug: "student-showcase-spring",
    category: "Student Updates",
    date: "02 June 2026",
    readTime: "3 min read",
    title: "Spring showcase: 41 students received university offers this term",
    excerpt:
      "From Manchester to Toronto, our spring cohort secured offers across 18 partner institutions. A look at where they are heading next.",
  },
  {
    slug: "academic-writing-structure",
    category: "Learning Tips",
    date: "21 May 2026",
    readTime: "7 min read",
    title: "The paragraph structure that university markers are looking for",
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
      "Accreditation, class size, teacher qualifications and progress tracking. A checklist for families comparing schools abroad.",
  },
];

import { FaqItem, PersonaAudience, TestimonialItem, BlogPost } from "./types";

export const faqList: FaqItem[] = [
  {
    id: "faq-1",
    question: "Who is Oracle Fusion Financials training designed for?",
    category: "admissions",
    answer: "This program is tailored for commerce/finance graduates (B.Com, M.Com, MBA Finance), certified accountants, working accounting professionals, Oracle E-Business Suite (EBS) consultants migrating to Cloud, ERP professionals switching platforms, and ambitious career changers aiming for Oracle Fusion Functional Consultant careers.",
  },
  {
    id: "faq-2",
    question: "Do I need a technical coding or IT background to learn Oracle Fusion Financials?",
    category: "curriculum",
    answer: "No. Oracle Fusion Financials Functional Consulting focuses on business processes, system configuration, functional setup, and financial reporting. You do not need Java, C++, or coding expertise. Basic familiarity with accounting concepts and computer literacy is sufficient.",
  },
  {
    id: "faq-3",
    question: "What if I come from a non-finance background or have a career gap?",
    category: "admissions",
    answer: "We start from foundational business principles and accounting structures before moving into complex configurations. Many successful learners are returning professionals or switchers from customer operations who thrive because of our structured step-by-step approach.",
  },
  {
    id: "faq-4",
    question: "Is live practical hands-on access to Oracle Fusion Cloud included?",
    category: "practical",
    answer: "Yes, absolutely. Theory alone does not build consultants. You receive guided hands-on lab exercises and environment access to practice enterprise configuration, simulate transactions, resolve holds, and execute end-to-end business cycles.",
  },
  {
    id: "faq-5",
    question: "How long is the training program, and what are the batch timings?",
    category: "admissions",
    answer: "The comprehensive training typically spans 10 to 12 weeks. We offer flexible weekend batches designed specifically for working professionals, as well as regular weekday cohorts. All sessions are recorded in high-definition for replay and review.",
  },
  {
    id: "faq-6",
    question: "How does the career and interview support work?",
    category: "career",
    answer: "We believe training doesn't end when classes conclude. We provide tailored ERP project portfolio guidance, ATS-friendly resume reviews, high-frequency interview question breakdowns, and 1-on-1 mock interviews simulating real consulting hiring rounds. We provide realistic, honest career coaching without making fraudulent job guarantee claims.",
  },
  {
    id: "faq-7",
    question: "What are the core modules covered in the curriculum?",
    category: "curriculum",
    answer: "The program covers General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR), Cash Management (CE), Fixed Assets (FA), Fusion Expenses, Fusion Tax, Financial Reporting Studio (FRS), OTBI Analytics, Smart View, and end-to-end business workflows (P2P, O2C, R2R).",
  },
  {
    id: "faq-8",
    question: "Does this course prepare me for official Oracle Cloud Certification?",
    category: "curriculum",
    answer: "Yes. The curriculum aligns with the official Oracle Financials Cloud: General Ledger and Payables Implementation Professional exam objectives, equipping you with both the conceptual and practical knowledge needed to certify.",
  },
  {
    id: "faq-9",
    question: "What is the difference between learning screens and understanding business processes?",
    category: "practical",
    answer: "Competitor training often merely demonstrates which buttons to click on screens. In real client engagements, consultants solve business problems: why an invoice didn't match a PO, how tax distributes across operating entities, or how multi-currency revaluation impacts ledger balances. We teach the underlying business architecture.",
  },
  {
    id: "faq-10",
    question: "How can I book a free demo or speak with an expert?",
    category: "admissions",
    answer: "Simply submit our 'Book a Free Consultation' form or call/WhatsApp our admissions line. You will speak with a seasoned advisor who can review your profile, assess your background, and provide tailored guidance—strictly without high-pressure sales tactics.",
  },
];

export const audiencePersonas: PersonaAudience[] = [
  {
    id: "finance-professional",
    title: "Finance & Accounting Professionals",
    tagline: "Translate your accounting knowledge into high-value cloud consulting.",
    description: "You already understand debits, credits, trial balances, and period closes. Learn how multinational enterprises automate these identical workflows inside Oracle Cloud ERP.",
    priorKnowledge: "Strong accounting/bookkeeping foundation",
    fusionOutcome: "Transition from routine back-office operations into an advisory Functional Consultant role.",
    icon: "Calculator",
  },
  {
    id: "fresh-graduates",
    title: "B.Com / M.Com / MBA Graduates",
    tagline: "Start your career with high-demand enterprise software skills.",
    description: "Skip low-paying generic data entry jobs. Build practical proficiency in the enterprise platform chosen by Fortune 500 corporations worldwide.",
    priorKnowledge: "Business or commerce degree",
    fusionOutcome: "Enter the market with hands-on system credentials and authentic business cycle understanding.",
    icon: "GraduationCap",
  },
  {
    id: "ebs-upgrade",
    title: "Oracle EBS / Legacy ERP Professionals",
    tagline: "Modernize your legacy ERP background for Oracle Cloud SaaS.",
    description: "Bridge your R12 knowledge into Fusion Cloud architecture, Functional Setup Manager (FSM), REST APIs, OTBI reporting, and modernized subledger accounting.",
    priorKnowledge: "Oracle E-Business Suite or SAP ECC background",
    fusionOutcome: "Qualify for cloud migration and global digital transformation implementation initiatives.",
    icon: "RefreshCw",
  },
  {
    id: "career-switchers",
    title: "Career Switchers & Returners",
    tagline: "Re-enter the workforce or transition into tech consulting with clarity.",
    description: "A structured, encouraging environment that breaks down complex ERP concepts into intuitive, real-world business steps without overwhelming technical jargon.",
    priorKnowledge: "Analytical mindset & desire to learn",
    fusionOutcome: "Re-establish professional confidence with in-demand, marketable enterprise technology expertise.",
    icon: "TrendingUp",
  },
];

export const testimonialList: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Pooja Ramachandran",
    role: "Senior Financial Analyst → Oracle Fusion Consultant",
    companyBackground: "Financial Services Firm",
    quote: "The emphasis on real business processes (P2P and O2C) rather than just clicking through setup screens made all the difference in my consulting interview rounds. Genuine, practical mentorship.",
    highlight: "Transitioned from accountant to cloud consultant",
    outcome: "Promoted to Oracle Cloud Functional Consultant",
    initials: "PR",
    isPlaceholder: false,
  },
  {
    id: "t-2",
    name: "Vikram Sengupta",
    role: "EBS Lead → Cloud Implementation Lead",
    companyBackground: "Enterprise Systems Integrator",
    quote: "Having 8 years in EBS 11i/R12, I needed an efficient, expert-led bridge into Fusion architecture and Functional Setup Manager. This course saved me hundreds of hours of self-study.",
    highlight: "Modernized 8 years of legacy EBS knowledge",
    outcome: "Leading Cloud Migration Projects",
    initials: "VS",
    isPlaceholder: false,
  },
  {
    id: "t-3",
    name: "Ananya Deshmukh",
    role: "Returning Accountant → Associate Consultant",
    companyBackground: "Global Consulting Partner",
    quote: "Returning to professional work after a 4-year break felt daunting. The instructors were supportive, patient, and took time to walk through practical scenarios until I felt 100% confident.",
    highlight: "Re-entered tech after a multi-year break",
    outcome: "Secured associate consulting position",
    initials: "AD",
    isPlaceholder: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "mastering-procure-to-pay-p2p-in-oracle-fusion",
    title: "Mastering Procure-to-Pay (P2P) in Oracle Fusion Cloud: An Architect's Guide",
    category: "Oracle Fusion",
    readTime: "7 min read",
    publishDate: "October 2026",
    excerpt: "Understand how purchasing requisitions, PO approvals, 3-way invoice matching, and payment process requests tie directly into General Ledger distributions.",
    author: {
      name: "Senior Solution Architect",
      role: "Lead Instructor",
    },
  },
  {
    slug: "transitioning-from-oracle-ebs-to-fusion-cloud",
    title: "Transitioning From Oracle EBS R12 to Fusion Cloud: Key Differences Explained",
    category: "Cloud ERP",
    readTime: "9 min read",
    publishDate: "October 2026",
    excerpt: "A direct architectural comparison covering Operating Units vs Business Units, Accounting Setup Manager vs FSM, and standard FSG reports vs OTBI.",
    author: {
      name: "Enterprise ERP Advisor",
      role: "Curriculum Director",
    },
  },
  {
    slug: "cracking-the-oracle-fusion-functional-consultant-interview",
    title: "How to Crack the Oracle Fusion Financials Consultant Interview: Real Scenarios",
    category: "Interview Preparation",
    readTime: "11 min read",
    publishDate: "September 2026",
    excerpt: "The most common scenario questions hiring managers ask in technical consulting rounds, including subledger variance resolution and intercompany clearing.",
    author: {
      name: "Career Strategy Team",
      role: "Talent Advisor",
    },
  },
  {
    slug: "why-finance-professionals-excel-in-erp-consulting",
    title: "Why Finance & Accounting Graduates Have an Unfair Advantage in ERP Consulting",
    category: "ERP Careers",
    readTime: "6 min read",
    publishDate: "September 2026",
    excerpt: "Why understanding statutory balance sheets and revenue recognition makes learning enterprise software configuration 5x faster than starting from pure IT.",
    author: {
      name: "Senior Financial Consultant",
      role: "Guest Mentor",
    },
  },
];

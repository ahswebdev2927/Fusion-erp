export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Training Program", href: "/oracle-fusion-finance-training", description: "Comprehensive Oracle Cloud Financials program" },
  { label: "Curriculum", href: "/curriculum", description: "Deep-dive 12 module breakdown & hands-on labs" },
  { label: "Career Support", href: "/career-support", description: "Consultant roadmap, resume reviews & mock interviews" },
  { label: "Corporate Training", href: "/corporate-training", description: "Tailored upskilling for enterprise finance teams" },
  { label: "About Us", href: "/about", description: "Our approach, philosophy and instructor credentials" },
  { label: "Blog", href: "/blog", description: "Oracle Fusion insights, career guides, and tutorials" },
];

export const footerLinks = {
  training: [
    { label: "Oracle Fusion Financials", href: "/oracle-fusion-finance-training" },
    { label: "Detailed Curriculum", href: "/curriculum" },
    { label: "Training Program Overview", href: "/oracle-fusion-finance-training" },
    { label: "Career Acceleration", href: "/career-support" },
    { label: "Enterprise Corporate Training", href: "/corporate-training" },
  ],
  company: [
    { label: "About Our Mission", href: "/about" },
    { label: "Contact Admissions", href: "/contact" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Articles & Knowledge Hub", href: "/blog" },
  ],
  resources: [
    { label: "Procure-to-Pay (P2P) Guide", href: "/blog/mastering-procure-to-pay-p2p-in-oracle-fusion" },
    { label: "Record-to-Report (R2R) Process", href: "/blog/understanding-record-to-report-workflow" },
    { label: "Fusion Consultant Career Path", href: "/career-support" },
    { label: "Oracle Certification Roadmap", href: "/oracle-fusion-finance-training" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

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
  course: [
    { label: "Oracle Fusion Financials", href: "/oracle-fusion-finance-training" },
    { label: "Course Curriculum", href: "/curriculum" },
    { label: "Career & Interview Support", href: "/career-support" },
    { label: "Corporate Team Training", href: "/corporate-training" },
    { label: "Book Free Consultation", href: "/book-demo" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Blog & Knowledge Hub", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

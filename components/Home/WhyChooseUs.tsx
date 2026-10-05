import React from "react";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      title: "Business-First Learning",
      description:
        "Understand why accounting transactions take place before touching setup screens. Learn how statutory balance sheets, corporate controllers, and compliance frameworks dictate ERP setups.",
    },
    {
      num: "02",
      title: "Direct Hands-On Cloud Labs",
      description:
        "Practice in real multi-organization Oracle Fusion Cloud instances. Configure primary ledgers, business units, suppliers, banks, and approval hierarchies with guided lab manuals.",
    },
    {
      num: "03",
      title: "Realistic Multi-Entity Scenarios",
      description:
        "Navigate complex corporate situations: resolving 3-way invoice matching tolerance exceptions, clearing foreign currency revaluations, and balancing intercompany journals.",
    },
    {
      num: "04",
      title: "Rigorous 12-Module Structure",
      description:
        "A logical, sequenced learning path that starts with Enterprise Structures and progresses naturally through subledgers, SLA rules, and executive OTBI analytics.",
    },
    {
      num: "05",
      title: "Practitioner-Led Mentorship",
      description:
        "Learn from senior Oracle Solution Architects with 15+ years of multinational ERP deployments across financial services, manufacturing, and technology verticals.",
    },
    {
      num: "06",
      title: "Honest Career & Interview Preparation",
      description:
        "Prepare for real functional consulting interview rounds. Practice explaining business requirements, crafting ATS-compliant project resumes, and completing 1-on-1 mocks.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <Container size="xl">
        {/* Asymmetrical Editorial Layout: 5 cols Left / 7 cols Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Sticky Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1D63ED] uppercase tracking-wider mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D63ED]" />
              WHY FUSION ERP TRAINING
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0A192F] tracking-tight leading-[1.12]">
              Learn the platform.{" "}
              <span className="text-[#1D63ED] font-extrabold block mt-1">
                Understand the business.
              </span>
              Build confidence.
            </h2>

            <p className="mt-6 text-base text-slate-700 leading-relaxed font-normal">
              Most IT courses teach isolated menus. We build the complete business acumen, architectural depth, and communication skills required to excel in enterprise consulting engagements.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-300 text-xs text-slate-600 font-mono font-bold">
              ✓ ENGINEERED FOR REAL CONSULTING READINESS
            </div>
          </div>

          {/* Right Column: Editorial numbered list with strong dividers and crisp text */}
          <div className="lg:col-span-7 divide-y-2 divide-slate-200">
            {points.map((pt) => (
              <div key={pt.num} className="py-7 first:pt-0 last:pb-0 flex items-start gap-6 group">
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#1D63ED] shrink-0 pt-0.5">
                  {pt.num}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] tracking-tight group-hover:text-[#1D63ED] transition-colors">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

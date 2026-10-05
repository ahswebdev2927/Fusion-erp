import React from "react";
import Container from "@/components/ui/Container";

export default function TrustBar() {
  const pillars = [
    {
      metric: "15+ Years",
      label: "Enterprise Consulting Experience",
      detail: "Lead mentors actively manage global implementations",
    },
    {
      metric: "100% Practical",
      label: "Business Scenarios & Labs",
      detail: "P2P, O2C, and R2R end-to-end cycles",
    },
    {
      metric: "12 Modules",
      label: "Structured Cloud Syllabus",
      detail: "From Chart of Accounts to OTBI Analytics",
    },
    {
      metric: "1-on-1 Guidance",
      label: "Consultant Interview Coaching",
      detail: "ATS project portfolios and mock technical rounds",
    },
  ];

  return (
    <div className="bg-white border-b-2 border-slate-200 py-10 shadow-xs">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x-2 divide-slate-200">
          {pillars.map((item, idx) => (
            <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? "lg:pl-8" : ""}`}>
              <div className="text-2xl sm:text-3xl font-black text-[#0A192F] tracking-tight">
                {item.metric}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

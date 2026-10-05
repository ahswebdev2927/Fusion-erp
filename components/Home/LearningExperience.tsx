import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LearningExperience() {
  const steps = [
    {
      step: "01",
      title: "Concept & Architecture",
      detail: "Interactive lectures unpack the underlying business logic, accounting impact, and Oracle Fusion configuration architecture.",
    },
    {
      step: "02",
      title: "Live Cloud Configuration",
      detail: "Log in directly to enterprise sandboxes to set up primary ledgers, business units, suppliers, and transaction rules firsthand.",
    },
    {
      step: "03",
      title: "Interactive Review",
      detail: "Ask questions on edge cases, reconcile variance errors, and review configuration with senior solution architects.",
    },
    {
      step: "04",
      title: "Cross-Module Execution",
      detail: "Run complete multi-entity corporate cycles (P2P, O2C, R2R) simulating authentic client delivery challenges.",
    },
    {
      step: "05",
      title: "Instructor Audit",
      detail: "Receive line-by-line feedback on your ledger entries, SLA rule definitions, and financial reporting studio layouts.",
    },
    {
      step: "06",
      title: "Interview Readiness",
      detail: "Synthesize your hands-on configurations into documented implementation stories for technical consultant interview panels.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9] border-b border-slate-300">
      <Container size="xl">
        <SectionHeading
          eyebrow="PEDAGOGY"
          title="What the learner experience looks like."
          description="A supportive, structured cycle that ensures you never get lost, overwhelmed, or left behind as you progress through enterprise software."
          splitLayout
        />

        {/* Featured Mentorship & Collaboration Banner */}
        <div className="mb-12 bg-white border-2 border-slate-300 rounded-2xl overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 h-64 sm:h-80 w-full overflow-hidden relative">
            <img
              src="/images/mentorship.jpg"
              alt="Enterprise Cloud Architecture Mentorship Session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 lg:to-transparent" />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-3">
            <span className="text-xs font-mono font-bold text-[#1D63ED] bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
              LIVE ARCHITECTURAL WORKSHOPS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] tracking-tight">
              Interactive 1-on-1 & Small Cohort Collaboration
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Step beyond theoretical slide decks. Walk through real multi-tier cloud architectures, ledger hierarchies, and client integration challenges on interactive diagrams with senior enterprise mentors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className="bg-white border-2 border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between shadow-card hover:shadow-card-hover hover:border-[#1D63ED] transition-all"
            >
              <div>
                <span className="text-xs font-mono font-black text-[#1D63ED] bg-blue-50 px-2 py-1 rounded border border-blue-200 inline-block mb-3">
                  PHASE {st.step}
                </span>
                <h3 className="text-lg font-extrabold text-[#0A192F] mb-2 tracking-tight">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {st.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProblemSolution() {
  const pitfalls = [
    "Isolated screen navigation without explaining why debits and credits occur",
    "Unstructured learning tracks leaving learners anxious about job readiness",
    "Zero hands-on access to active Oracle Cloud SaaS pods",
    "Disconnection between textbook menus and multi-entity corporate workflows",
    "Inability to explain scenario questions during client consulting interviews",
    "Lack of genuine confidence when configuring legal entities from scratch",
  ];

  const methodology = [
    {
      step: "01",
      title: "Learn Enterprise Architecture",
      desc: "Chart of Accounts structure, multi-org security, and legal entity hierarchies.",
    },
    {
      step: "02",
      title: "Practice in Active Sandboxes",
      desc: "Direct hands-on configuration of ledgers, suppliers, customers, and banks.",
    },
    {
      step: "03",
      title: "Trace Subledger Accounting",
      desc: "Connect AP and AR transactions directly to automated General Ledger postings.",
    },
    {
      step: "04",
      title: "Execute End-to-End Cycles",
      desc: "Run complete P2P, O2C, and R2R corporate processes with tolerance exceptions.",
    },
    {
      step: "05",
      title: "Master Consultant Interviews",
      desc: "Prepare for scenario-based hiring rounds with 1-on-1 mock interviews and critique.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <Container size="xl">
        <SectionHeading
          eyebrow="THE PEDAGOGICAL SHIFT"
          title="Oracle Fusion can feel complex. Learning it shouldn't."
          description="Most IT training teaches superficial button-clicking. We build deep business acumen and functional consulting capability from the ground up."
          splitLayout
        />

        {/* High-Contrast Asymmetrical Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Traditional Roadblocks (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-100/80 border-2 border-slate-300 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200 block w-fit mb-3">
                WHERE TRADITIONAL TRAINING FAILS
              </span>
              <h3 className="text-xl font-extrabold text-[#0A192F] mb-6">
                The frustration of surface-level coaching
              </h3>

              <div className="space-y-4">
                {pitfalls.map((pitfall, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                      ✕
                    </span>
                    <span className="text-sm text-slate-700 leading-snug font-medium">
                      {pitfall}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-300 text-xs font-mono text-slate-500 font-semibold">
              SURFACE FAMILIARITY ≠ CONSULTING SKILL
            </div>
          </div>

          {/* Right: The FusionERPTraining Transformation (7 Cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#1D63ED]/30 rounded-2xl p-8 lg:p-10 shadow-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#1D63ED] bg-blue-50 px-2.5 py-1 rounded border border-blue-200 block w-fit mb-3">
                THE FUSIONERPTRAINING METHODOLOGY
              </span>
              <h3 className="text-2xl font-extrabold text-[#0A192F] mb-6">
                A structured, scaffolded path to functional fluency
              </h3>

              <div className="space-y-3.5">
                {methodology.map((item) => (
                  <div
                    key={item.step}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-4 hover:border-[#1D63ED] hover:bg-blue-50/30 transition-all"
                  >
                    <span className="text-xs font-mono font-black text-[#1D63ED] bg-white border border-blue-200 px-2 py-1 rounded-md shrink-0 shadow-2xs">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[#0A192F]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 text-xs font-mono font-bold text-[#059669]">
              ✓ BUILDS AUTHENTIC ARCHITECTURAL & SCENARIO COMPETENCE
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

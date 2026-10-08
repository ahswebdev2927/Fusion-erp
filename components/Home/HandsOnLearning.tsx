import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HandsOnLearning() {
  const capabilities = [
    {
      label: "ENV-01",
      title: "Active Multi-Org Cloud Sandboxes",
      description: "Direct login access to enterprise Oracle Fusion pods. Configure ledgers, legal entities, and approval hierarchies with guided lab manuals.",
    },
    {
      label: "ENV-02",
      title: "Rapid Implementation (RI) Automation",
      description: "Learn how senior implementation consultants leverage Rapid Implementation workbooks to deploy full Chart of Accounts models in minutes.",
    },
    {
      label: "ENV-03",
      title: "Tolerance & Hold Troubleshooting",
      description: "Master real client problem resolution: diagnosing 3-way matching quantity variances, price tolerances, and tax calculation discrepancies.",
    },
    {
      label: "ENV-04",
      title: "Subledger Accounting (SLA) Custom Rules",
      description: "Build custom accounting derivation rules, journal line types, and mapping sets to satisfy unique client statutory mandates.",
    },
    {
      label: "ENV-05",
      title: "Real-Time OTBI & Smart View Analytics",
      description: "Construct interactive drill-through balance sheets, income statements, and aging dashboards in Smart View & OTBI.",
    },
    {
      label: "ENV-06",
      title: "Consulting Technical Challenge Simulations",
      description: "Practice answering real architectural and operational questions asked by interview panels at global consulting firms.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-blueprint-dark text-white border-b border-slate-800">
      <Container size="xl">
        <SectionHeading
          eyebrow="HANDS-ON IMMERSION"
          title="Turn concepts into practical, verifiable capability."
          description="Consultants are hired for what they can configure and troubleshoot on client systems. Our training is grounded entirely in real enterprise execution."
          theme="dark"
          splitLayout
        />

        {/* Interactive Cloud Dashboard Console Preview */}
        <div className="mb-12 bg-[#0A192F] border-2 border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700/80 bg-[#112240] text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 text-slate-200 font-semibold">Oracle Fusion Cloud Financials — Enterprise Production Instance</span>
            </div>
            <span className="text-emerald-400 font-semibold text-[11px] bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-0.5 rounded-full">
              LIVE MULTI-ORG POD
            </span>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-900">
            <img
              src="/images/cloud-dashboard.jpg"
              alt="Oracle Cloud ERP Financial Overview Dashboard"
              className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#112240]/90 border border-slate-700/80 rounded-xl p-6.5 hover:border-blue-400 transition-all hover:-translate-y-0.5 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BusinessProcesses() {
  const workflows = [
    {
      code: "FLOW-01",
      title: "Procure-to-Pay (P2P)",
      description: "How companies manage demand, supplier contracting, goods receipt, matching rules, and automated electronic disbursement.",
      badge: "Purchasing & Spend Automation",
      steps: [
        { num: "01", name: "Requisition", desc: "Spend demand creation & approval worklists" },
        { num: "02", name: "Purchase Order", desc: "PO transmission & funds check reservation" },
        { num: "03", name: "Goods Receipt", desc: "Physical receipt & destination accounting" },
        { num: "04", name: "Supplier Invoice", desc: "2-way/3-way tolerance matching & tax rules" },
        { num: "05", name: "Payment & Bank", desc: "Electronic batch disbursement & ledger posting" },
      ],
    },
    {
      code: "FLOW-02",
      title: "Order-to-Cash (O2C)",
      description: "How enterprises capture customer demand, execute billing, apply cash remittances, and reconcile banking ledgers.",
      badge: "Revenue & Billing Settlement",
      steps: [
        { num: "01", name: "Customer Order", desc: "Order booking & credit limit verification" },
        { num: "02", name: "Fulfillment", desc: "Order shipping & cost-of-goods-sold trigger" },
        { num: "03", name: "AutoInvoice", desc: "Automated billing derivation & tax lines" },
        { num: "04", name: "Cash Receipt", desc: "Lockbox / EFT ingest & automated application" },
        { num: "05", name: "Bank Match", desc: "Automated BAI2 statement reconciliation" },
      ],
    },
    {
      code: "FLOW-03",
      title: "Record-to-Report (R2R)",
      description: "How corporate controllers govern subledgers, enforce accounting standards, execute allocations, and deliver executive statements.",
      badge: "Accounting Governance & Period Close",
      steps: [
        { num: "01", name: "Subledger Trx", desc: "AP, AR, Fixed Assets & Payroll transaction capture" },
        { num: "02", name: "SLA Derivation", desc: "Subledger Accounting rules & multi-book journals" },
        { num: "03", name: "GL Posting", desc: "Primary, secondary & reporting ledger balance updates" },
        { num: "04", name: "Revaluation & Alloc", desc: "Foreign exchange revaluation & mass cost allocations" },
        { num: "05", name: "Executive Report", desc: "Balance sheet close & real-time OTBI dashboards" },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <Container size="xl">
        <SectionHeading
          eyebrow="ENTERPRISE WORKFLOWS"
          title="Don't just learn screens. Understand how the business operates."
          description="True ERP consulting requires comprehending cross-functional business cycles. We train you on authentic multinational workflows, not isolated software menus."
          splitLayout
        />

        <div className="space-y-12">
          {workflows.map((wf) => (
            <div
              key={wf.code}
              className="bg-white border-2 border-slate-300 rounded-2xl p-8 lg:p-10 shadow-card"
            >
              {/* Header row with bold badge and strong typography */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-8 border-b-2 border-slate-100 gap-3">
                <div>
                  <div className="text-xs font-mono font-bold text-[#1D63ED] bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block mb-2">
                    {wf.code} • {wf.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0A192F] tracking-tight">
                    {wf.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl font-normal">
                    {wf.description}
                  </p>
                </div>
              </div>

              {/* Precise Architectural Process Pipeline with rich contrast */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
                {wf.steps.map((step, idx) => (
                  <div
                    key={step.num}
                    className="relative bg-slate-50 border-2 border-slate-200 rounded-xl p-4.5 flex flex-col justify-between shadow-2xs hover:border-[#1D63ED] transition-colors"
                  >
                    <div>
                      <div className="text-[11px] font-mono font-black text-[#1D63ED] mb-1">
                        STAGE {step.num}
                      </div>
                      <div className="text-sm font-extrabold text-[#0A192F]">
                        {step.name}
                      </div>
                      <div className="text-xs text-slate-600 mt-1.5 leading-snug font-medium">
                        {step.desc}
                      </div>
                    </div>

                    {idx < wf.steps.length - 1 && (
                      <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border-2 border-slate-300 items-center justify-center text-[#1D63ED] shadow-sm">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

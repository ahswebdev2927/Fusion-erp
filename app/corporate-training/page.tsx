import React from "react";
import type { Metadata } from "next";
import { Building2, Users2, ShieldCheck, Laptop2, Sliders, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Corporate Training & Enterprise Upskilling",
  description:
    "Tailored Oracle Fusion Cloud Financials training for corporate accounting teams, system integrators, and enterprises migrating from EBS to Cloud.",
};

export default function CorporateTrainingPage() {
  const corporateBenefits = [
    {
      icon: <Sliders className="w-6 h-6 text-[#1D63ED]" />,
      title: "Customized to Your Business Processes",
      desc: "We align training examples directly with your industry (manufacturing, banking, healthcare, retail) and Chart of Accounts structure.",
    },
    {
      icon: <Laptop2 className="w-6 h-6 text-[#059669]" />,
      title: "Pre-Go-Live User Enablement",
      desc: "Ensure your finance and accounting department is 100% prepared to operate the new cloud ERP before implementation cutover day.",
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#1D63ED]" />,
      title: "EBS to Cloud Bridge for Internal IT",
      desc: "Upskill internal enterprise support teams from legacy Oracle E-Business Suite 11i/R12 to modern Fusion SaaS pod governance.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
      title: "Audit & Internal Control Compliance",
      desc: "Train business controllers on Segregation of Duties (SoD), BPM approval worklists, and statutory reporting governance.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="xl">
        {/* Hero: 2-column layout with image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
              ENTERPRISE TEAM UPSKILLING
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-6">
              Empower Your Finance & IT Teams for Oracle Cloud Success
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 font-normal">
              Whether your organization is migrating from Oracle EBS to Fusion Cloud or onboarding new functional analysts, our corporate training delivers business-aligned, hands-on enablement.
            </p>

            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Discuss Corporate Training
            </Button>
          </div>

          {/* Right-side Corporate Boardroom Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-elevation-2 bg-white group">
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="/images/corporate-hero.jpg"
                  alt="Enterprise Digital Transformation Boardroom Training Session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0A192F] text-white flex items-center justify-between border-t-2 border-slate-700">
                <div className="text-xs font-mono">
                  <span className="text-[#1D63ED] font-bold">ENTERPRISE L&D</span>: Custom Tracks
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">
                  PRIVATE COHORTS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Enterprise Value"
            title="Why leading organizations trust our corporate workshops"
            description="Designed to minimize implementation friction and maximize internal team self-sufficiency."
            splitLayout
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateBenefits.map((item, idx) => (
              <Card key={idx} className="p-8 sm:p-9">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 w-fit mb-4 shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-[#0A192F] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Formats & Engagement */}
        <div className="bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-3xl p-8 sm:p-14 text-white mb-20 shadow-2xl border-2 border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
                Flexible Corporate Delivery Models
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 font-normal">
                We adapt to your team&apos;s schedule and geographical distribution with interactive virtual labs or intensive on-premise bootcamps.
              </p>

              <div className="space-y-3.5 text-sm text-slate-200 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Private enterprise cohorts with NDA protection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Customized duration (intensive 2-week to 8-week tracks)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Recorded sessions and internal reference documentation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0A192F]/80 p-8 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="text-xl font-extrabold mb-3 text-white">
                Request an Enterprise Proposal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal leading-relaxed">
                Tell us about your team size, target modules, and timeline for a customized syllabus and quote.
              </p>
              <Button href="/contact" variant="primary" size="lg" className="w-full text-center">
                Contact Enterprise L&D Team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Career Support & Consultant Readiness",
  description:
    "Learn with a clear career direction. ATS resume restructuring, technical scenario preparation, mock interview rounds, and consulting mentorship.",
};

export default function CareerSupportPage() {
  const steps = [
    {
      num: "01",
      title: "Background & Skill Assessment",
      desc: "We analyze your past education, finance/accounting experience, or legacy IT work to identify your unique transferrable strengths for Oracle Cloud consulting.",
    },
    {
      num: "02",
      title: "Project Portfolio Crafting",
      desc: "Translate your hands-on cloud labs into documented implementation case studies demonstrating end-to-end P2P, O2C, or R2R project ownership.",
    },
    {
      num: "03",
      title: "ATS-Optimized Resume Overhaul",
      desc: "Restructure your resume to pass automated corporate applicant tracking systems and immediately capture the interest of enterprise recruitment leads.",
    },
    {
      num: "04",
      title: "Scenario & Technical Coaching",
      desc: "Deep-dive into common functional consultant interview questions: SLA rules, tolerance exceptions, multi-currency revaluation, and intercompany clearing.",
    },
    {
      num: "05",
      title: "1-on-1 Live Mock Interview",
      desc: "Sit for an authentic 45-minute technical mock interview with a senior Oracle Solution Architect, receiving instant actionable feedback.",
    },
    {
      num: "06",
      title: "Offer Negotiation & Role Clarity",
      desc: "Understand consulting grade hierarchies (Associate, Consultant, Senior Consultant) and negotiate with market clarity.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="xl">
        {/* Hero: 2-Column layout with image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
              CAREER ACCELERATION & READINESS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-6">
              Learn With a Clear Career Direction.
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 font-normal">
              Acquiring technical knowledge is only half the battle. Our career mentorship equips you with the articulation, project portfolio, and interview stamina needed to stand out in competitive consulting hiring cycles.
            </p>

            {/* High-visibility Ethics callout */}
            <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong className="font-extrabold text-amber-900">Our Ethical Career Policy:</strong> We do not make fraudulent 100% job guarantee claims or fabricate fake resumes. We provide genuine skills, authentic project simulation, and rigorous interview coaching that empowers you to succeed on your own merit.
              </div>
            </div>
          </div>

          {/* Right-side Career Mentorship Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-elevation-2 bg-white group">
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="/images/career-hero.jpg"
                  alt="1-on-1 Career Mentorship & Profile Review Session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0A192F] text-white flex items-center justify-between border-t-2 border-slate-700">
                <div className="text-xs font-mono">
                  <span className="text-[#059669] font-bold">1-ON-1 COACHING</span>: Mock Interviews
                </div>
                <span className="text-[11px] font-mono text-blue-300 font-bold bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/40">
                  ATS RESUME CRITIQUE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Career Roadmap */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="The Pathway"
            title="The 6-Step Career Readiness Framework"
            description="How we transition you from a curious learner to an interview-ready functional professional."
            splitLayout
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <Card key={step.num} className="p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#1D63ED] font-mono font-black flex items-center justify-center text-sm mb-4 shadow-2xs">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0A192F] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sample Mock Questions Section */}
        <div className="bg-white rounded-3xl border-2 border-slate-300 p-8 sm:p-12 mb-20 shadow-card">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] mb-4 tracking-tight">
            Types of Real Client Scenarios We Practice in Mocks
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl font-normal">
            Generic interview prep asks what a table name is. Leading consulting firms evaluate whether you can think through enterprise edge cases:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-800">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>&ldquo;An AP invoice is placed on variance hold despite matching the PO amount. How do you troubleshoot the tolerance derivation?&rdquo;</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>&ldquo;A multinational client needs US GAAP and IFRS reporting on the same transactions. How do you design Primary and Secondary ledgers?&rdquo;</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>&ldquo;During bank auto-reconciliation, MT940 bank statement charges fail to match journal lines. What rule conditions do you inspect?&rdquo;</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>&ldquo;Explain the difference between Subledger Accounting (SLA) Event Classes and Journal Line Rules to a client controller.&rdquo;</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-[#0A192F] to-[#112240] text-white p-8 sm:p-14 rounded-3xl max-w-3xl mx-auto shadow-2xl border-2 border-slate-700">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
            Ready to evaluate your career transition?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 font-normal leading-relaxed">
            Book a 1-on-1 profile consultation to discuss your background and potential career trajectory.
          </p>
          <Button href="/book-demo" variant="white" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Book a Free Consultation
          </Button>
        </div>
      </Container>
    </div>
  );
}

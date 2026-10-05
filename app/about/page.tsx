import React from "react";
import type { Metadata } from "next";
import { BookOpen, Target, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Our Mission & Approach",
  description:
    "Learn about FusionERPTraining.com, our philosophy of teaching practical business architecture, and our commitment to honest career mentorship.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="xl">
        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
            ABOUT FUSIONERPTRAINING.COM
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-6">
            Building practical ERP education that respects the learner&apos;s journey.
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed font-normal">
            We founded FusionERPTraining.com because we saw a pervasive problem across the enterprise IT training industry: institutions teaching isolated button clicks and making exaggerated placement claims, leaving graduates unready for real-world client engagements.
          </p>
        </div>

        {/* Visual Story Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden border-2 border-slate-300 shadow-card">
          <div className="relative h-72 sm:h-96 w-full">
            <img
              src="/images/mentorship.jpg"
              alt="Founding architects conducting enterprise ERP training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white max-w-2xl">
                <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest bg-blue-900/60 px-3 py-1 rounded border border-blue-400/40 mb-2 inline-block">
                  PRACTICAL PEDAGOGY
                </span>
                <p className="text-base sm:text-xl font-bold tracking-tight text-white mt-1">
                  Bridging the gap between conceptual finance education and complex multi-national ERP cloud execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <Card className="p-8 sm:p-10 border-t-4 border-t-[#1D63ED]">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D63ED] mb-5 shadow-2xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#0A192F] mb-3 tracking-tight">Our Story</h2>
            <p className="text-slate-700 leading-relaxed mb-4 font-normal">
              With over 15 years leading global Oracle E-Business Suite and Oracle Fusion Cloud Financials implementations, our founding architects regularly interviewed candidates who looked certified on paper, but struggled to explain how a supplier invoice distributes into General Ledger journals.
            </p>
            <p className="text-slate-700 leading-relaxed font-normal">
              We realized that enterprise technology shouldn&apos;t be taught in vacuum. Professionals thrive when they understand the complete business cycle—procurement, revenue, statutory taxes, and treasury—and how Oracle Cloud is configured to support real financial controllers.
            </p>
          </Card>

          <Card className="p-8 sm:p-10 border-t-4 border-t-[#059669]">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#059669] mb-5 shadow-2xs">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#0A192F] mb-3 tracking-tight">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed mb-4 font-normal">
              Our mission is to provide transparent, practical, and deeply supportive Oracle Cloud education that equips graduates, accountants, and career switchers with genuine functional consulting competence.
            </p>
            <p className="text-slate-700 leading-relaxed font-normal">
              We deliberately reject false promises, fake placement guarantees, and high-pressure sales calls. Instead, we invest in small cohorts, hands-on cloud labs, and honest 1-on-1 mentorship.
            </p>
          </Card>
        </div>

        {/* Learning Philosophy */}
        <div className="bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-3xl p-8 sm:p-14 text-white mb-20 shadow-2xl border-2 border-slate-700">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="What we believe about ERP education"
            description="Four foundational tenets guiding every curriculum module and cohort discussion."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0A192F]/80 p-6 rounded-xl border border-slate-700">
              <div className="text-xl font-mono font-black text-blue-400 mb-2">01</div>
              <h3 className="font-bold text-lg text-white mb-2">Business First</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Software follows business requirements. Master accounting principles and workflows before touching setup screens.
              </p>
            </div>

            <div className="bg-[#0A192F]/80 p-6 rounded-xl border border-slate-700">
              <div className="text-xl font-mono font-black text-[#059669] mb-2">02</div>
              <h3 className="font-bold text-lg text-white mb-2">Active Sandboxes</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reading slides doesn&apos;t build muscle memory. Configure primary ledgers, suppliers, and tax rules with your own hands.
              </p>
            </div>

            <div className="bg-[#0A192F]/80 p-6 rounded-xl border border-slate-700">
              <div className="text-xl font-mono font-black text-blue-400 mb-2">03</div>
              <h3 className="font-bold text-lg text-white mb-2">Scenario Depth</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Real consulting is about diagnosing discrepancies: invoice holds, unposted journals, and bank statement variance clearing.
              </p>
            </div>

            <div className="bg-[#0A192F]/80 p-6 rounded-xl border border-slate-700">
              <div className="text-xl font-mono font-black text-[#059669] mb-2">04</div>
              <h3 className="font-bold text-lg text-white mb-2">Transparent Support</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No inflated statistics. Honest resume critiques and realistic preparation for technical consulting interviews.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-3xl border-2 border-slate-300 p-8 sm:p-12 text-center shadow-card-hover max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] mb-3 tracking-tight">
            Speak with an advisor about your background
          </h2>
          <p className="text-slate-600 mb-6 font-normal">
            We review your current experience and help you choose the best study path without pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3.5">
            <Button href="/book-demo" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Book a Free Consultation
            </Button>
            <Button href="/curriculum" variant="outline">
              Review Full Curriculum
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

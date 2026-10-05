import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck } from "lucide-react";

export default function Instructor() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <Container size="xl">
        <SectionHeading
          eyebrow="LEADERSHIP & CREDIBILITY"
          title="Learn from active enterprise solution architects."
          description="We do not employ generic tutors reading from slides. Every session is led by seasoned ERP implementation leads who advise multinational enterprises daily."
          splitLayout
        />

        {/* Editorial Profile Frame */}
        <div className="bg-white border-2 border-slate-300 rounded-2xl p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual credential card: 4 cols */}
            <div className="lg:col-span-4 bg-[#0A192F] border-2 border-slate-700 rounded-xl overflow-hidden shadow-lg text-white">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-800">
                <img
                  src="/images/instructor.jpg"
                  alt="Principal Solution Architect"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Principal Solution Architect
                  </h3>
                  <p className="text-xs text-blue-300 font-mono font-semibold">
                    Oracle Fusion Cloud Financials Lead
                  </p>
                </div>
              </div>
              <div className="p-4 bg-[#0A192F] text-center border-t border-slate-700/80 text-xs text-slate-300 font-mono font-semibold tracking-wider">
                15+ YRS MULTINATIONAL CONSULTING
              </div>
            </div>

            {/* Narrative & stats: 8 cols */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-blue-50 border border-blue-200 text-slate-900 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                Certified Oracle Cloud Implementation Specialist
              </div>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Having spearheaded end-to-end Oracle E-Business Suite to Fusion Cloud migrations for international banking, manufacturing, and telecommunications clients, our lead instructors bring operational battlefield experience to the classroom. You learn how real financial controllers make decisions.
              </p>

              {/* Data points with strong borders */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t-2 border-slate-200">
                <div className="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 text-center">
                  <div className="text-2xl font-mono font-black text-[#0A192F]">
                    {siteConfig.stats.industryExperienceYears}
                  </div>
                  <div className="text-xs font-bold text-slate-600 mt-0.5">Industry Exp</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 text-center">
                  <div className="text-2xl font-mono font-black text-[#1D63ED]">
                    {siteConfig.stats.handsOnBusinessScenarios}
                  </div>
                  <div className="text-xs font-bold text-slate-600 mt-0.5">Business Scenarios</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 text-center">
                  <div className="text-2xl font-mono font-black text-[#059669]">
                    {siteConfig.stats.practicalLabHours}
                  </div>
                  <div className="text-xs font-bold text-slate-600 mt-0.5">Lab Practice Hours</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 text-center">
                  <div className="text-2xl font-mono font-black text-[#0A192F]">
                    {siteConfig.stats.curriculumModules}
                  </div>
                  <div className="text-xs font-bold text-slate-600 mt-0.5">Core Modules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

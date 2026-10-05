"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Layers,
  ArrowRight,
  Terminal,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { curriculumModules } from "@/lib/curriculum";

export default function CurriculumPage() {
  const [expandedId, setExpandedId] = useState<string | null>("general-ledger");

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="xl">
        {/* Hero: 2-Column layout with image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
              DETAILED COURSE SYLLABUS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-6">
              Complete 12-Module Oracle Fusion Financials Curriculum
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 font-normal">
              Explore every module, subledger concept, real-life practical exercise, and business workflow covered throughout our program.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/book-demo" variant="primary" size="lg">
                Download Syllabus PDF
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Ask About Specific Modules
              </Button>
            </div>
          </div>

          {/* Right-side Curriculum Studio Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-elevation-2 bg-white group">
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="/images/curriculum-hero.jpg"
                  alt="Enterprise Financial Systems Configuration Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0A192F] text-white flex items-center justify-between border-t-2 border-slate-700">
                <div className="text-xs font-mono">
                  <span className="text-[#1D63ED] font-bold">12 CORE MODULES</span>: GL, AP, AR, SLA
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">
                  SYSTEMATIC SYLLABUS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Module Breakdown */}
        <div className="space-y-6 mb-20">
          {curriculumModules.map((module, idx) => {
            const isExpanded = expandedId === module.id;
            return (
              <div
                key={module.id}
                id={module.id}
                className={`bg-white rounded-2xl border-2 transition-all duration-200 overflow-hidden shadow-card ${
                  isExpanded
                    ? "border-[#1D63ED] shadow-card-hover"
                    : "border-slate-300 hover:border-[#1D63ED]/50"
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggle(module.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#1D63ED] flex items-center justify-center font-mono font-black text-base shrink-0 shadow-2xs">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="text-xs font-mono font-bold text-[#1D63ED] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                          {module.code}
                        </span>
                        <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                          {module.businessProcess}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight">
                        {module.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-600 hidden md:block">
                      {isExpanded ? "Hide Details" : "View Syllabus"}
                    </span>
                    <div
                      className={`p-2 rounded-lg border transition-all ${
                        isExpanded
                          ? "bg-[#1D63ED] text-white border-[#1D63ED] rotate-180"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-4 border-t-2 border-slate-100">
                    <p className="text-slate-700 text-base leading-relaxed mb-8 font-normal">
                      {module.longDesc}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Topics Covered */}
                      <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                        <h3 className="font-black text-sm uppercase tracking-wider text-[#0A192F] mb-4 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#1D63ED]" />
                          Core Topics Covered
                        </h3>
                        <ul className="space-y-3">
                          {module.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1D63ED] mt-2 shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practical Exercises & Outcome */}
                      <div className="space-y-6">
                        <div className="bg-emerald-50/50 rounded-xl p-6 border-2 border-emerald-200">
                          <h3 className="font-black text-sm uppercase tracking-wider text-[#0A192F] mb-4 flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-[#059669]" />
                            Hands-On Cloud Labs
                          </h3>
                          <ul className="space-y-2.5">
                            {module.practicalExercises.map((lab, lIdx) => (
                              <li key={lIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                                <span>{lab}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5 rounded-xl bg-blue-50/60 border-2 border-blue-200 text-xs sm:text-sm text-slate-800">
                          <span className="font-black text-[#0A192F] block mb-1">
                            Key Functional Outcome:
                          </span>
                          {module.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Curriculum CTA */}
        <div className="bg-gradient-to-br from-[#0A192F] to-[#112240] text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl border-2 border-slate-700">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
            Want to see how this fits your background?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Book a 15-minute consultation to walk through the curriculum modules relevant to your specific career aspirations.
          </p>
          <Button href="/book-demo" variant="white" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Book a Free Consultation
          </Button>
        </div>
      </Container>
    </div>
  );
}

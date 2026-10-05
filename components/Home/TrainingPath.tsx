"use client";

import React, { useState } from "react";
import { trainingStages } from "@/lib/curriculum";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2, Clock } from "lucide-react";

export default function TrainingPath() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9] border-b border-slate-300">
      <Container size="xl">
        <SectionHeading
          eyebrow="STRUCTURED TIMELINE"
          title="A clear, progressive path from foundations to career readiness."
          description="Six sequenced milestones designed to transition you from core architectural fundamentals to confident functional consulting practice."
          splitLayout
        />

        {/* Desktop Sophisticated Horizontal Timeline */}
        <div className="hidden lg:block mb-12">
          <div className="relative border-b-2 border-slate-300 pb-4">
            <div className="grid grid-cols-6 gap-4">
              {trainingStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className="text-left group cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-mono font-bold transition-colors ${
                          isActive ? "text-[#1D63ED]" : "text-slate-500 group-hover:text-slate-800"
                        }`}
                      >
                        STAGE {stage.step}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono font-semibold">
                        {stage.duration}
                      </span>
                    </div>

                    <div
                      className={`text-sm font-extrabold tracking-tight transition-colors line-clamp-1 ${
                        isActive ? "text-[#0A192F]" : "text-slate-700 group-hover:text-slate-900"
                      }`}
                    >
                      {stage.title}
                    </div>

                    {/* Progress Indicator Bar */}
                    <div
                      className={`mt-4 h-1.5 rounded-full transition-all ${
                        isActive ? "bg-[#1D63ED] shadow-sm" : "bg-transparent group-hover:bg-slate-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Stage Detail Display (Desktop) */}
        <div className="hidden lg:block bg-white border-2 border-slate-300 rounded-2xl p-8 lg:p-10 shadow-card">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 px-3 py-1 rounded-md mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>{trainingStages[activeStage].duration} • STAGE {trainingStages[activeStage].step}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0A192F] tracking-tight mb-4">
                {trainingStages[activeStage].title}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed mb-6 font-normal">
                {trainingStages[activeStage].description}
              </p>

              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
                <span className="text-[11px] font-mono font-bold uppercase text-emerald-800 block mb-1">
                  Key Practical Milestone:
                </span>
                <div className="text-sm font-bold text-[#0A192F] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>{trainingStages[activeStage].keyOutcome}</span>
                </div>
              </div>
            </div>

            <div className="col-span-5 border-l-2 border-slate-200 pl-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-4">
                Modules & Concepts Explored:
              </span>
              <div className="space-y-2.5">
                {trainingStages[activeStage].modulesCovered.map((moduleName, i) => (
                  <div
                    key={i}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-[#0A192F] flex items-center justify-between"
                  >
                    <span>{moduleName}</span>
                    <span className="text-xs font-mono font-bold text-[#1D63ED] bg-blue-50 px-2 py-0.5 rounded">Configured</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {trainingStages.map((stage) => (
            <div
              key={stage.step}
              className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-[#1D63ED] font-bold">STAGE {stage.step}</span>
                <span className="text-slate-500 font-semibold">{stage.duration}</span>
              </div>
              <h3 className="text-base font-extrabold text-[#0A192F] mb-2">
                {stage.title}
              </h3>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                {stage.description}
              </p>
              <div className="text-xs font-semibold text-[#059669] bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{stage.keyOutcome}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

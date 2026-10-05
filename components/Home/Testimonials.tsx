"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonialList } from "@/lib/faq";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? testimonialList.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === testimonialList.length - 1 ? 0 : prevIdx + 1
    );
  };

  const current = testimonialList[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <Container size="xl">
        <SectionHeading
          eyebrow="COMMUNITY & PERSPECTIVES"
          title="Transparent transition stories from our community."
          description="Honest career reviews and transitions from accounting, legacy IT, and finance backgrounds who built their Oracle Fusion knowledge through our program."
          splitLayout
        />

        {/* Story-Driven Large Editorial Quote */}
        <div className="bg-white border-2 border-slate-300 rounded-2xl p-8 sm:p-12 shadow-card max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8 text-xs font-mono font-bold text-slate-600 pb-4 border-b-2 border-slate-100">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>AUTHENTIC COHORT FEEDBACK • VERIFIED PARTICIPANTS</span>
          </div>

          <blockquote className="text-xl sm:text-2xl text-[#0A192F] font-bold leading-relaxed tracking-tight mb-8">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Before, During, After Story Context */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-5 bg-slate-50 border-2 border-slate-200 rounded-xl text-xs">
            <div>
              <span className="font-mono font-black text-slate-500 uppercase block mb-1">
                Background:
              </span>
              <span className="text-slate-900 font-semibold">{current.companyBackground}</span>
            </div>
            <div>
              <span className="font-mono font-black text-[#1D63ED] uppercase block mb-1">
                Key Milestone:
              </span>
              <span className="text-slate-900 font-semibold">{current.highlight}</span>
            </div>
            <div>
              <span className="font-mono font-black text-[#059669] uppercase block mb-1">
                Consulting Result:
              </span>
              <span className="text-slate-900 font-semibold">{current.outcome}</span>
            </div>
          </div>

          {/* Profile & Navigation */}
          <div className="pt-6 border-t-2 border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1D63ED] shrink-0 shadow-sm">
                <img
                  src="/images/student-avatar.jpg"
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-extrabold text-[#0A192F] text-lg">
                  {current.name}
                </div>
                <div className="text-xs font-bold text-[#1D63ED] mt-0.5">
                  {current.role}
                </div>
              </div>
            </div>

            {/* Restrained controls */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={prev}
                className="p-2.5 rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 transition-colors cursor-pointer active:scale-95 shadow-2xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-slate-600 px-2">
                0{currentIndex + 1} / 0{testimonialList.length}
              </span>
              <button
                type="button"
                onClick={next}
                className="p-2.5 rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 transition-colors cursor-pointer active:scale-95 shadow-2xs"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqList } from "@/lib/faq";

export default function FAQPreview() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const previewItems = faqList.slice(0, 6);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <Container size="xl">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Clear answers to common questions before joining."
          description="Everything you need to know about prerequisites, non-finance backgrounds, hands-on cloud access, and cohort schedules."
          splitLayout
        />

        {/* Numbered, high-contrast accordion list with crisp dividers */}
        <div className="max-w-4xl mx-auto divide-y-2 divide-slate-200 border-y-2 border-slate-200 bg-white rounded-2xl p-6 sm:p-10 shadow-card">
          {previewItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.id} className="py-6 first:pt-2 last:pb-2 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-xs font-mono font-black text-[#1D63ED] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A192F] tracking-tight group-hover:text-[#1D63ED] transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <span className={`p-1.5 rounded-md text-slate-500 group-hover:text-[#1D63ED] group-hover:bg-slate-100 transition-transform ${isOpen ? "rotate-180 text-[#1D63ED] bg-blue-50" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pl-10 sm:pl-14 text-sm sm:text-base text-slate-900 leading-relaxed font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1D63ED] hover:text-[#0A192F] underline-offset-4 hover:underline"
          >
            <span>View complete list of all 10+ questions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

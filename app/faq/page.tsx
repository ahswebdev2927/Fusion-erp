import React from "react";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { faqList } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about our Oracle Fusion Cloud Financials training program, prerequisites, cloud instances, and career support.",
};

export default function FAQPage() {
  const allFaqs = faqList.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="lg">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
            HELP & CLARITY
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Honest, transparent answers to help you determine if Oracle Fusion Financials is right for your career path.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-300 shadow-card mb-16">
          <Accordion items={allFaqs} allowMultiple />
        </div>

        <div className="bg-gradient-to-br from-[#0A192F] to-[#112240] text-white rounded-3xl p-8 sm:p-14 text-center shadow-2xl border-2 border-slate-700 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">Still have an unanswered question?</h2>
          <p className="text-slate-300 text-sm sm:text-base mb-6 font-normal leading-relaxed">
            Our admissions leads are happy to speak with you directly without any sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3.5">
            <Button href="/contact" variant="primary">
              Contact Admissions
            </Button>
            <Button href="/book-demo" variant="white">
              Schedule Free Advisory Call
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

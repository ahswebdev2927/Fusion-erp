import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { audiencePersonas } from "@/lib/faq";

export default function AudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <Container size="xl">
        <SectionHeading
          eyebrow="TARGETED PATHWAYS"
          title="Wherever you're starting, there's a clear path forward."
          description="Whether you have an accounting degree, legacy ERP background, or are returning from a career break, our structured curriculum aligns with your specific baseline."
          splitLayout
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiencePersonas.map((persona, idx) => (
            <div
              key={persona.id}
              className="bg-white border-2 border-slate-300 rounded-2xl p-8 flex flex-col justify-between shadow-card hover:shadow-card-hover hover:border-[#1D63ED] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#1D63ED] mb-3">
                  <span className="font-bold bg-blue-50 px-2.5 py-1 rounded border border-blue-200">PATHWAY 0{idx + 1}</span>
                  <span className="text-slate-500 font-sans font-semibold">Individual Roadmap</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight mb-2">
                  {persona.title}
                </h3>
                <p className="text-xs font-bold text-[#1D63ED] mb-4">
                  {persona.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {persona.description}
                </p>

                <div className="space-y-2.5 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-mono">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-slate-500 uppercase shrink-0">Your Baseline:</span>
                    <span className="text-slate-800 font-sans font-semibold">{persona.priorKnowledge}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-[#059669] uppercase shrink-0">Target Outcome:</span>
                    <span className="text-[#0A192F] font-sans font-bold">{persona.fusionOutcome}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Customized study sequence</span>
                <Link
                  href="/book-demo"
                  className="font-bold text-[#1D63ED] inline-flex items-center gap-1 hover:text-[#0A192F] transition-colors"
                >
                  <span>Evaluate My Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

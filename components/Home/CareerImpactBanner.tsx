import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CareerImpactBanner() {
  return (
    <section className="py-14 sm:py-20 bg-tech-mesh border-b border-slate-200">
      <Container size="xl">
        {/* Rich Forest Green Banner matching user screenshot */}
        <div className="bg-gradient-to-br from-[#1E5638] via-[#164E30] to-[#0E3A22] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-emerald-900/60">
          {/* Subtle decorative radial glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl relative z-10">
            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.15] mb-4">
              6-Figure Jobs Start with Oracle Fusion Financials. Are You Ready?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-3xl font-medium mb-8">
              Join The Growing Demand For Oracle Fusion Professionals. Get Certified And Open Doors To High-Paying Opportunities In Top Companies.
            </p>

            {/* Pill CTA button matching screenshot */}
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2E7D4E] hover:bg-[#256B42] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border border-emerald-400/30 group"
            >
              <Sparkles className="w-5 h-5 text-emerald-200 group-hover:rotate-12 transition-transform" />
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

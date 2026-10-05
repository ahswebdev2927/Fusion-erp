import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-tech-mesh border-b border-slate-200">
      <Container size="lg">
        <div className="bg-white border-2 border-slate-300 rounded-3xl p-10 sm:p-16 lg:p-20 text-center shadow-card-hover relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#1D63ED] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
              START YOUR TRANSFORMATION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0A192F] tracking-tight leading-[1.12] mb-4">
              Ready to build your Oracle Fusion journey?
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 font-normal">
              Tell us where you&apos;re starting. We&apos;ll help you understand whether Oracle Fusion Cloud Financials aligns with your background and goals—honestly, objectively, and without pressure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/book-demo"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book a Free Consultation
              </Button>
              <Button
                href="/training"
                size="lg"
                variant="outline"
              >
                View Training Program
              </Button>
            </div>

            {/* Reassurance strip */}
            <div className="mt-10 pt-6 border-t-2 border-slate-100 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-700 font-mono font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>Zero sales pressure or cold calls</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>Direct background evaluation by mentors</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

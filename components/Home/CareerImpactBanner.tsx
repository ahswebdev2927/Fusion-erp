import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, PhoneCall, MessageCircle, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export default function CareerImpactBanner() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello Fusion ERP Training! I am interested in the Oracle Fusion Financials Course and would like to speak with an expert."
  )}`;

  return (
    <section className="py-14 sm:py-20 bg-tech-mesh border-b border-slate-200">
      <Container size="xl">
        {/* Harmonious Enterprise Navy & Royal Blue Banner matching Fusion ERP brand & logo */}
        <div className="bg-gradient-to-br from-[#0A192F] via-[#0E2A47] to-[#1D63ED] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-blue-900/60">
          {/* Subtle brand glow effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl relative z-10">
            {/* Eyebrow badge aligned to brand */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/25 border-2 border-blue-400/40 text-xs sm:text-[13px] font-mono font-black text-white uppercase tracking-wider mb-5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>HIGH-IMPACT CAREER TRANSFORMATION</span>
            </div>

            {/* High-impact Headline tailored to Oracle Fusion Financials */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.15] mb-4">
              High-Paying Global Careers Start with Oracle Fusion Financials. Are You Ready?
            </h2>

            {/* Subtitle connecting market demand with practical mastery */}
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-3xl font-medium mb-8">
              Join the surging global demand for certified Oracle Fusion Financial Consultants. Master real-time General Ledger, AP, AR, and Subledger Accounting to open doors to top enterprise roles worldwide.
            </p>

            {/* Action buttons matching brand styling and direct contact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Pill Button with vibrant brand gradient & sparkles */}
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D63ED] to-[#2563EB] hover:from-[#1752C7] hover:to-[#1D63ED] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border border-blue-300/30 group"
              >
                <Sparkles className="w-5 h-5 text-blue-200 group-hover:rotate-12 transition-transform" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Direct WhatsApp Consultation Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 border border-emerald-400/40 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Talk with Course Advisor</span>
              </a>
            </div>

            {/* Micro reassurance trust notes */}
            <div className="mt-8 pt-6 border-t border-blue-500/20 flex flex-wrap items-center gap-6 text-xs text-blue-200 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Job-Assurance Program</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Direct Access to Cloud ERP Pods</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                <span>Call/WhatsApp: {siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

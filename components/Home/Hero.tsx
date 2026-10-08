"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Compass, Layers, PlayCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const fullText = "Oracle Fusion Financials Course with Expert Training";
  const prefix = "Oracle Fusion Financials Course with ";
  const highlightWord = "Expert Training";
  
  const [displayText, setDisplayText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 45); // snappy, modern typing cadence

    return () => clearInterval(interval);
  }, []);

  // Split current typed progress into prefix and highlighted word
  const currentPrefix = displayText.slice(0, Math.min(displayText.length, prefix.length));
  const currentHighlight = displayText.length > prefix.length ? displayText.slice(prefix.length) : "";

  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 bg-tech-mesh border-b border-slate-200 overflow-hidden">
      <Container size="xl">
        {/* Asymmetrical 7 / 5 Layout with high-contrast editorial hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* High-visibility bold eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border-2 border-emerald-400 text-xs sm:text-[13px] font-black tracking-wider text-emerald-950 uppercase mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <span className="font-black tracking-wide">100% JOB-ASSURED • LIVE PROJECTS & EXPERT GUIDANCE</span>
            </div>

            {/* Powerful headline with typing animation */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0A192F] tracking-tight leading-[1.1] min-h-[120px] sm:min-h-[135px] lg:min-h-[175px]">
              <span>{currentPrefix}</span>
              {currentHighlight && (
                <span className="text-[#1D63ED] font-extrabold">
                  {currentHighlight}
                </span>
              )}
              {/* Animated blinking cursor */}
              <span
                className={`inline-block w-1 h-9 sm:w-1.5 sm:h-11 lg:h-12 bg-[#1D63ED] ml-1.5 align-middle ${
                  isTypingDone ? "animate-pulse" : "animate-bounce"
                }`}
              />
            </h1>

            {/* Clear, readable subtitle with user's value proposition (without live training mention) */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              <strong className="font-semibold text-slate-900">100% Job-Assured Oracle Fusion Financials Course</strong> with real projects and expert guidance to launch your ERP career. Advance your career in Financial Management—master key financial modules, gain real-time hands-on experience, and build the skills needed to excel in today’s dynamic finance and accounting landscape.
            </p>

            {/* High-converting CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                href="/book-demo"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start Your Journey
              </Button>
              <Button
                href="/oracle-fusion-finance-training"
                size="lg"
                variant="outline"
                icon={<PlayCircle className="w-4 h-4 text-[#1D63ED]" />}
              >
                Explore Course Details
              </Button>
            </div>

            {/* Trust checkmarks with high-contrast text */}
            <div className="mt-12 pt-8 border-t border-slate-300 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Live Cloud Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>P2P, O2C & R2R Flows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>15+ Yrs Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>ATS Resume & Mocks</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols - Deep Architectural Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-elevation-2 p-6 sm:p-7 relative z-10">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5 text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-bold text-slate-700">pod-fusion.cloud.oracle.com</span>
                </div>
                <span className="text-[11px] text-[#059669] bg-[#E9F8F1] px-2.5 py-0.5 rounded-full font-bold">
                  CONNECTED
                </span>
              </div>

              {/* Workspace Snapshot Header */}
              <div className="bg-gradient-to-br from-[#0A192F] to-[#112240] text-white p-5 rounded-xl mb-4 shadow-md border border-slate-800">
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-300 mb-1">
                  <span>ENTERPRISE STRUCTURE</span>
                  <span className="text-blue-300 font-bold">GL-PRIMARY-01</span>
                </div>
                <div className="text-lg font-bold tracking-tight">
                  Global Financials Architecture
                </div>
                <div className="mt-3 text-xs flex justify-between border-t border-slate-700/80 pt-2.5 text-slate-300 font-mono">
                  <span>Chart of Accounts: 8 Segments</span>
                  <span className="text-[#059669] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Period Open
                  </span>
                </div>
              </div>

              {/* Structured Module Interconnections */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D63ED]" />
                    <span className="font-bold text-[#0A192F]">General Ledger</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-600 font-medium">Primary / Secondary</span>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D63ED]" />
                    <span className="font-bold text-[#0A192F]">Accounts Payable & Tax</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-600 font-medium">3-Way PO Match Engine</span>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D63ED]" />
                    <span className="font-bold text-[#0A192F]">Accounts Receivable & Cash</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-600 font-medium">AutoInvoice & BAI2 Match</span>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D63ED]" />
                    <span className="font-bold text-[#0A192F]">Fixed Assets & Expenses</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-600 font-medium">Subledger Accounting (SLA)</span>
                </div>
              </div>

              {/* Progress Connection Strip */}
              <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-mono">
                <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                  <Compass className="w-4 h-4 text-[#1D63ED]" />
                  Learn → Practice → Apply → Prepare
                </span>
                <span className="text-[#1D63ED] font-bold">v24.D SaaS</span>
              </div>
            </div>

            {/* Overlapping High-Contrast Badge */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-[#0A192F] text-white p-4 rounded-xl border border-slate-700 shadow-xl z-20">
              <Terminal className="w-5 h-5 text-blue-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">Authentic Cloud Environments</div>
                <div className="text-[11px] text-slate-300">Direct hands-on configuration</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

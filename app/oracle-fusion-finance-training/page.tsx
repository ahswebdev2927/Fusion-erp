import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Users, Laptop, ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { curriculumModules } from "@/lib/curriculum";
import { faqList } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Oracle Fusion Financials Training Program",
  description:
    "Explore the premier Oracle Fusion Cloud Financials training program. 12 comprehensive modules, live cloud instances, and career preparation.",
};

export default function TrainingPage() {
  const trainingFaqs = faqList.filter((f) => f.category === "curriculum" || f.category === "practical");

  return (
    <div className="py-16 sm:py-24 bg-tech-mesh min-h-screen">
      <Container size="xl">
        {/* Hero: 2-column layout with image on right side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4 shadow-xs">
              COMPREHENSIVE TRAINING PROGRAM
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-6">
              Oracle Fusion Financials Training Built Around Practical Understanding
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              A complete professional program designed to transition graduates, accountants, and IT specialists into confident Oracle Fusion Cloud functional consultants.
            </p>
          </div>

          {/* Right-side training hero photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-elevation-2 bg-white group">
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="/images/training-hero.jpg"
                  alt="Enterprise Cloud Financials Training Conference Session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0A192F] text-white flex items-center justify-between border-t-2 border-slate-700">
                <div className="text-xs font-mono">
                  <span className="text-[#059669] font-bold">● ACTIVE LAB</span>: Cohort Session
                </div>
                <span className="text-[11px] font-mono text-blue-300 font-bold bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/40">
                  ORACLE CLOUD SaaS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky-Sidebar Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* 1. Program Overview */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] mb-4 tracking-tight">
                Program Overview
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-6 font-normal">
                Oracle Fusion Cloud Financials is the leading cloud ERP choice for modern enterprise businesses. Our program covers both the macro business cycles (Procure-to-Pay, Order-to-Cash, Record-to-Report) and the granular subledger accounting rules required to implement and support global deployments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-card">
                  <h3 className="font-extrabold text-[#0A192F] text-base mb-3">What you will master:</h3>
                  <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Enterprise multi-org hierarchies & ledgers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Subledger Accounting (SLA) & derivations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Bank auto-reconciliation & cash forecasts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>OTBI analytics & Smart View reporting</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-card">
                  <h3 className="font-extrabold text-[#0A192F] text-base mb-3">Learning Deliverables:</h3>
                  <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1D63ED] shrink-0" />
                      <span>Individual Oracle Cloud practice instance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1D63ED] shrink-0" />
                      <span>Step-by-step PDF lab manuals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1D63ED] shrink-0" />
                      <span>High-definition class video recordings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1D63ED] shrink-0" />
                      <span>1-on-1 resume & mock interview session</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Core Curriculum Highlights */}
            <section id="curriculum" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] tracking-tight">
                  Modules Covered (12 Total)
                </h2>
                <Link
                  href="/curriculum"
                  className="text-sm font-bold text-[#1D63ED] hover:underline"
                >
                  View full topic syllabus →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {curriculumModules.slice(0, 8).map((module) => (
                  <div
                    key={module.id}
                    className="p-5 bg-white rounded-xl border-2 border-slate-200/90 shadow-card hover:border-[#1D63ED] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="font-bold text-[#1D63ED] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">{module.code}</span>
                      <span className="text-slate-500 font-semibold">{module.businessProcess}</span>
                    </div>
                    <h3 className="font-bold text-[#0A192F] text-base mb-1">{module.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">{module.shortDesc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] mb-6 tracking-tight">
                Training FAQ
              </h2>
              <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 sm:p-8 shadow-card">
                <Accordion items={trainingFaqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
              </div>
            </section>
          </div>

          {/* Desktop Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-7 sm:p-8 bg-white border-2 border-blue-400 rounded-3xl shadow-elevation-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1D63ED] bg-blue-50 border border-blue-200 mb-4">
                Next Upcoming Cohort
              </div>
              <h3 className="text-2xl font-black text-[#0A192F] mb-2 tracking-tight">
                Enrollment Open
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-normal">
                Limited to small, focused batches to preserve instructor attention and 1-on-1 feedback.
              </p>

              <div className="space-y-3.5 border-y-2 border-slate-100 py-4 mb-6 text-xs sm:text-sm text-slate-700">
                <div className="flex justify-between">
                  <span className="font-bold text-slate-900">Format:</span>
                  <span className="font-semibold">Live Online Sessions</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-900">Duration:</span>
                  <span className="font-semibold">10 - 12 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-900">Cloud Labs:</span>
                  <span className="font-bold text-[#059669]">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-900">Career Prep:</span>
                  <span className="font-bold text-[#1D63ED]">1-on-1 Guidance</span>
                </div>
              </div>

              <Button
                href="/book-demo"
                variant="primary"
                size="lg"
                className="w-full text-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Talk to an Expert
              </Button>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-xs text-slate-700 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 font-black text-[#0A192F] text-sm">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>Zero Hard Sell Guarantee</span>
              </div>
              <p className="font-medium leading-relaxed">
                Our admissions advisors answer your curriculum and career compatibility questions honestly. If Oracle Fusion is not the right fit for your goals, we tell you openly.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

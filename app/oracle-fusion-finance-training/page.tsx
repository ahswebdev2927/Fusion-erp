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
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border-2 border-blue-400 text-xs sm:text-[13px] font-black tracking-wider text-blue-950 uppercase mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <span className="font-black tracking-wide">COMPREHENSIVE TRAINING PROGRAM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight leading-tight mb-6">
              Oracle Fusion Financials Training Built Around Practical Understanding
            </h1>
            <p className="text-xl sm:text-2xl text-slate-900 leading-relaxed font-bold tracking-tight">
              Still Stuck in a Low-Paying Role? Upgrade with Oracle Fusion Financials Course!
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

        {/* Full-Width Structured Course Sections */}
        <div className="space-y-16 max-w-5xl mx-auto mb-20">
          {/* 1. Program Overview */}
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] mb-4 tracking-tight">
              Program Overview
            </h2>
            <p className="text-base sm:text-[17px] text-slate-950 leading-relaxed mb-8 font-medium">
              Oracle Fusion Cloud Financials is the leading cloud ERP choice for modern enterprise businesses. Our program covers both the macro business cycles (Procure-to-Pay, Order-to-Cash, Record-to-Report) and the granular subledger accounting rules required to implement and support global deployments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-slate-300 shadow-card">
                <h3 className="font-extrabold text-[#0A192F] text-lg mb-4">What you will master:</h3>
                <ul className="space-y-3 text-sm text-slate-900 font-semibold">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Enterprise multi-org hierarchies & ledgers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Subledger Accounting (SLA) & derivations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Bank auto-reconciliation & cash forecasts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>OTBI analytics & Smart View reporting</span>
                  </li>
                </ul>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-slate-300 shadow-card">
                <h3 className="font-extrabold text-[#0A192F] text-lg mb-4">Learning Deliverables:</h3>
                <ul className="space-y-3 text-sm text-slate-900 font-semibold">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1D63ED] shrink-0" />
                    <span>Individual Oracle Cloud practice instance</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1D63ED] shrink-0" />
                    <span>Step-by-step PDF lab manuals</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1D63ED] shrink-0" />
                    <span>High-definition class video recordings</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1D63ED] shrink-0" />
                    <span>1-on-1 resume & mock interview session</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Core Curriculum Highlights */}
          <section id="curriculum" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] tracking-tight">
                Modules Covered (12 Total)
              </h2>
              <Link
                href="/curriculum"
                className="text-sm font-bold text-[#1D63ED] hover:underline inline-flex items-center gap-1"
              >
                <span>View full topic syllabus</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {curriculumModules.slice(0, 8).map((module) => (
                <div
                  key={module.id}
                  className="p-5 bg-white rounded-xl border-2 border-slate-200 shadow-card hover:border-[#1D63ED] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-[#0A192F] text-base mb-1.5">{module.title}</h3>
                    <p className="text-xs text-slate-900 font-medium line-clamp-3 leading-relaxed">{module.shortDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] mb-6 tracking-tight">
              Training FAQ
            </h2>
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 sm:p-10 shadow-card">
              <Accordion items={trainingFaqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { curriculumModules } from "@/lib/curriculum";

export default function ModulesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <Container size="xl">
        <SectionHeading
          eyebrow="COURSE SCOPE"
          title="Oracle Fusion Financials Modules"
          description="A comprehensive, multi-module matrix spanning corporate general ledgers, subledger matching engines, treasury reconciliation, and real-time business intelligence."
          splitLayout
        />

        {/* High-Contrast dense grid with rich card depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculumModules.map((module, idx) => (
            <div
              key={module.id}
              className="bg-white p-7 sm:p-8 rounded-2xl border-2 border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-[#1D63ED] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-end text-xs font-mono mb-3">
                  <span className="text-slate-400 font-bold">0{idx + 1}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] tracking-tight mb-2 group-hover:text-[#1D63ED] transition-colors">
                  {module.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {module.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end text-xs">
                <Link
                  href={`/curriculum#${module.id}`}
                  className="font-bold text-[#1D63ED] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Syllabus</span>
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

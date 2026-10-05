import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CareerSupport() {
  const pillars = [
    {
      num: "01",
      title: "ATS-Ready Project Portfolio",
      desc: "Learn to articulate your hands-on cloud labs as credible implementation case studies that pass corporate screening tools.",
    },
    {
      num: "02",
      title: "1-on-1 Mock Consulting Rounds",
      desc: "Simulate rigorous 45-minute technical interviews with lead architects, receiving honest feedback on reasoning and communication.",
    },
    {
      num: "03",
      title: "Real Client Scenario Mastery",
      desc: "Practice answering deep operational questions: subledger reconciliation imbalances, tax engine rules, and tolerance holds.",
    },
    {
      num: "04",
      title: "Consulting Role Clarity",
      desc: "Understand specific day-to-day requirements across Associate, Functional Consultant, and Senior Consultant positions at global firms.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <Container size="xl">
        <div className="bg-gradient-to-br from-[#0A192F] via-[#0E2445] to-[#0A192F] rounded-3xl p-8 sm:p-12 lg:p-16 text-white border-2 border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Subtle radial depth */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D63ED]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: 5 Cols */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold text-blue-400 tracking-wider uppercase bg-blue-950/70 border border-blue-800/80 px-3 py-1 rounded-md inline-block mb-4">
                CAREER PREPARATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.12] mb-4">
                Training doesn&apos;t end when the class ends.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
                Translating technical knowledge into a credible consultant career requires preparation, clarity, and articulation. We provide dedicated mentorship to help you present your skills with authentic confidence.
              </p>

              <div className="space-y-3 mb-8 text-sm text-slate-200 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Ethical career coaching (no fake placement promises)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Verified project portfolio development</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>1-on-1 personalized interview critique</span>
                </div>
              </div>

              <Button
                href="/career-support"
                variant="white"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Career Support
              </Button>
            </div>

            {/* Right Column: 7 Cols - 4 distinct blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item) => (
                <div
                  key={item.num}
                  className="bg-[#112240]/85 border border-slate-700/80 rounded-2xl p-6 hover:border-blue-400 transition-all hover:-translate-y-0.5 shadow-md"
                >
                  <span className="text-xs font-mono font-bold text-blue-400 block mb-2">
                    ITEM {item.num}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

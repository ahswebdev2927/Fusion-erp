"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Compass, Layers, PlayCircle, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const fullText = "Oracle Fusion Financials Course with Expert Training";
  const prefix = "Oracle Fusion Financials Course with ";
  const highlightWord = "Expert Training";
  
  const [displayText, setDisplayText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Lead form state
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    location: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `*New Consultation Request - FusionERPTraining*`,
      ``,
      `*Full Name:* ${formData.fullName}`,
      `*Mobile Number:* ${formData.mobileNumber}`,
      `*Email:* ${formData.email}`,
      `*Location:* ${formData.location}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919247954331?text=${encodeURIComponent(message)}`;
    setFormSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

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

          {/* Right Column: 5 Cols - Bespoke Fusion ERP Admissions & Consultation Card */}
          <div className="lg:col-span-5 relative w-full">
            {/* Soft decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/15 to-emerald-600/15 rounded-3xl blur-xl opacity-75 -z-10" />

            <div className="bg-white rounded-3xl border-2 border-slate-300 shadow-elevation-2 p-7 sm:p-9 relative z-10">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">
                    Consultation Request Confirmed
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed max-w-sm mx-auto">
                    Thank you! Your information has been routed directly to our senior functional admissions desk. We look forward to guiding your career roadmap.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: "", mobileNumber: "", email: "", location: "" });
                    }}
                    className="text-xs font-bold text-[#1D63ED] hover:underline pt-2 cursor-pointer"
                  >
                    Submit another consultation request
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-[#1D63ED] uppercase tracking-wider mb-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#1D63ED]" />
                      FREE CAREER ROADMAP SESSION
                    </div>
                    <h2 className="text-2xl sm:text-[26px] font-black text-[#0A192F] tracking-tight leading-tight">
                      Book a Free 1-on-1 Consultation
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                      Speak directly with our senior Oracle Cloud consultant to assess your profile and batch schedule.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/15 font-medium text-slate-900 bg-white placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/15 font-medium text-slate-900 bg-white placeholder:text-slate-400 transition-all"
                        />
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          City / Location <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Hyderabad"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/15 font-medium text-slate-900 bg-white placeholder:text-slate-400 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Work or Personal Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul.sharma@example.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm focus:outline-none focus:border-[#1D63ED] focus:ring-2 focus:ring-[#1D63ED]/15 font-medium text-slate-900 bg-white placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl font-extrabold text-white text-sm sm:text-base shadow-sm transition-all hover:bg-[#1651C6] active:scale-[0.99] cursor-pointer bg-[#1D63ED] flex items-center justify-center gap-2 group"
                      >
                        <span>Reserve Free Consultation Call</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-500 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#059669]" />
                      <span>Direct 1-on-1 access. No sales spam.</span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

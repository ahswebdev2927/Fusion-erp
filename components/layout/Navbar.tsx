"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Mail, Phone, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
  }, [pathname]);

  // Click outside listener for Courses dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCoursesActive = pathname === "/training" || pathname === "/curriculum";

  return (
    <>
      {/* 1. Top Contact Strip */}
      <div className="bg-[#0A192F] text-slate-200 border-b border-slate-800 text-xs py-2 px-4 select-none relative z-50">
        <Container size="xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
            {/* Left: Email & Phone */}
            <div className="flex items-center gap-4 sm:gap-6 font-medium">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#1D63ED]" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#059669]" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>

            {/* Right: Batch info badge */}
            <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span>Weekend & Weekday Batches • Global Cloud Labs</span>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Main Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-2.5"
            : "bg-white/90 backdrop-blur-sm border-slate-200 py-3"
        }`}
      >
        <Container size="xl">
          <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
            {/* Left: Brand Logo (4 Cols on Desktop) */}
            <div className="lg:col-span-4 flex items-center">
              <Link
                href="/"
                className="flex items-center group focus-visible:ring-2 focus-visible:ring-[#1D63ED] rounded-lg py-1"
                aria-label="FusionERPTraining.com Homepage"
              >
                <img
                  src="/images/logo.png"
                  alt="Fusion ERP Training"
                  className="h-10 sm:h-12 md:h-14 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[270px] object-contain transition-transform group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* Center: Desktop Navigation (Home, Courses Dropdown, About Us) (4 Cols on Desktop) */}
            <nav
              className="hidden lg:flex items-center justify-center gap-2 lg:col-span-4"
              aria-label="Main Navigation"
            >
              {/* Home */}
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg text-sm tracking-tight transition-colors font-semibold ${
                  pathname === "/"
                    ? "text-[#1D63ED] bg-blue-50/80"
                    : "text-slate-800 hover:text-[#1D63ED] hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              {/* Courses Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className={`px-4 py-2 rounded-lg text-sm tracking-tight transition-colors font-semibold flex items-center gap-1.5 cursor-pointer ${
                    isCoursesActive
                      ? "text-[#1D63ED] bg-blue-50/80"
                      : "text-slate-800 hover:text-[#1D63ED] hover:bg-slate-50"
                  }`}
                  aria-expanded={isCoursesOpen}
                  aria-haspopup="true"
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCoursesOpen ? "rotate-180 text-[#1D63ED]" : "text-slate-500"
                    }`}
                  />
                </button>

                {/* Dropdown Menu Box */}
                {isCoursesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 sm:w-96 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                    <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl p-3.5 space-y-1">
                      <Link
                        href="/training"
                        onClick={() => setIsCoursesOpen(false)}
                        className="p-3.5 rounded-xl hover:bg-blue-50/60 border border-transparent hover:border-blue-200 transition-all block group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-sm text-[#0A192F] group-hover:text-[#1D63ED] transition-colors flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-[#1D63ED]" />
                            Oracle Fusion Cloud Financials
                          </span>
                          <span className="text-[10px] font-mono font-bold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            FLAGSHIP
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          Complete 10-12 week training program covering GL, AP, AR, SLA, Cash Management, and live cloud labs.
                        </p>
                      </Link>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-2 text-xs">
                        <Link
                          href="/curriculum"
                          onClick={() => setIsCoursesOpen(false)}
                          className="font-bold text-[#1D63ED] hover:underline"
                        >
                          View 12-Module Syllabus →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us */}
              <Link
                href="/about"
                className={`px-4 py-2 rounded-lg text-sm tracking-tight transition-colors font-semibold ${
                  pathname === "/about"
                    ? "text-[#1D63ED] bg-blue-50/80"
                    : "text-slate-800 hover:text-[#1D63ED] hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>
            </nav>

            {/* Right: Talk to Expert (WhatsApp CTA) (4 Cols on Desktop) */}
            <div className="hidden lg:flex items-center justify-end gap-3 lg:col-span-4">
              <Button
                href="https://wa.me/919247954331?text=Hi%2C%20I%20am%20interested%20in%20the%20Oracle%20Fusion%20ERP%20Training%20program.%20Please%20share%20more%20details."
                size="sm"
                variant="primary"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Talk to an Expert
              </Button>
            </div>

            {/* Mobile Toggle (Right Column on Mobile) */}
            <div className="flex items-center justify-end gap-2 lg:hidden">
              <a
                href="https://wa.me/919247954331?text=Hi%2C%20I%20am%20interested%20in%20the%20Oracle%20Fusion%20ERP%20Training%20program.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold bg-[#1D63ED] text-white px-3 py-1.5 rounded-lg shadow-sm hover:bg-[#124BC2] transition-colors"
              >
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#0A192F] hover:bg-slate-100 focus:outline-none"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    src="/images/logo.png"
                    alt="Fusion ERP Training"
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-md text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-6 flex flex-col space-y-1.5">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between ${
                    pathname === "/"
                      ? "bg-blue-50 text-[#1D63ED]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Courses Accordion */}
                <div className="rounded-lg border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                    className="w-full px-3 py-2.5 text-sm font-bold text-slate-800 bg-slate-50 flex items-center justify-between"
                  >
                    <span>Courses</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isMobileCoursesOpen ? "rotate-180 text-[#1D63ED]" : "text-slate-500"
                      }`}
                    />
                  </button>

                  {isMobileCoursesOpen && (
                    <div className="p-2 space-y-1 bg-white">
                      <Link
                        href="/training"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`p-2.5 rounded-md text-xs font-semibold block ${
                          pathname === "/training"
                            ? "bg-blue-50 text-[#1D63ED]"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="font-bold text-slate-900">Oracle Fusion Cloud Financials</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">10-12 Week Comprehensive Program</div>
                      </Link>
                      <Link
                        href="/curriculum"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-2.5 py-1.5 text-xs text-[#1D63ED] font-bold block hover:underline"
                      >
                        → View 12-Module Syllabus
                      </Link>
                    </div>
                  )}
                </div>

                {/* About Us */}
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between ${
                    pathname === "/about"
                      ? "bg-blue-50 text-[#1D63ED]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <Button
                href="https://wa.me/919247954331?text=Hi%2C%20I%20am%20interested%20in%20the%20Oracle%20Fusion%20ERP%20Training%20program.%20Please%20share%20more%20details."
                variant="primary"
                className="w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talk to an Expert (WhatsApp)
              </Button>
              <div className="text-xs text-center text-slate-600 space-y-1 font-mono">
                <div>📞 {siteConfig.contact.phone}</div>
                <div className="text-[11px] text-slate-500">{siteConfig.contact.email}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Mail, Phone, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
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

  const isCoursesActive = pathname === "/oracle-fusion-finance-training" || pathname === "/curriculum";

  return (
    <>
      {/* 1. Top Contact Strip */}
      <div className="bg-[#0A192F] text-slate-200 border-b border-slate-800 text-xs sm:text-[13px] py-2 px-4 select-none relative z-50">
        <Container size="xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            {/* Left: Email & Phone */}
            <div className="flex items-center gap-4 sm:gap-6 font-semibold">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#1D63ED]" />
                <span className="text-slate-100">{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors font-mono font-bold"
              >
                <Phone className="w-4 h-4 text-[#059669]" />
                <span className="text-slate-100">{siteConfig.contact.phone}</span>
              </a>
            </div>

            {/* Right: Batch info badge + Social Media Links */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-[13px] text-slate-300">
              <div className="hidden md:flex items-center gap-2 font-mono text-slate-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
                <span>Batch Starting Soon</span>
              </div>

              <div className="hidden md:block w-px h-4 bg-slate-700" />

              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-md bg-[#1877F2] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  aria-label="Follow us on Facebook"
                  title="Facebook"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-md bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  aria-label="Follow us on Instagram"
                  title="Instagram"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                {/* 
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-md bg-slate-800/90 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Connect on LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-md bg-slate-800/90 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Subscribe on YouTube"
                  title="YouTube"
                >
                  <FaYoutube className="w-3 h-3" />
                </a>
                */}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Main Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b py-0 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm"
            : "bg-white/90 backdrop-blur-sm border-slate-200"
        }`}
      >
        <Container size="xl">
          <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
            {/* Left: Brand Logo (4 Cols on Desktop) */}
            <div className="lg:col-span-4 flex items-center">
              <Link
                href="/"
                className="flex items-center group focus-visible:ring-2 focus-visible:ring-[#1D63ED] rounded-lg py-0"
                aria-label="FusionERPTraining.com Homepage"
              >
                <img
                  src="/images/logo.png"
                  alt="Fusion ERP Training"
                  className="h-12 sm:h-14 md:h-16 w-auto max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[340px] object-contain transition-transform group-hover:scale-[1.02]"
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
                    <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl p-2.5">
                      <Link
                        href="/oracle-fusion-finance-training"
                        onClick={() => setIsCoursesOpen(false)}
                        className="p-3.5 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200 transition-all block group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-sm text-[#0A192F] group-hover:text-[#1D63ED] transition-colors flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#1D63ED]" />
                            Oracle Fusion Cloud Financials
                          </span>
                          <span className="text-[10px] font-mono font-bold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                            FLAGSHIP
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors pl-6 font-medium">
                          100% Job-Assured master program
                        </p>
                      </Link>
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
                    className="h-11 w-auto max-w-[220px] object-contain"
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
                        href="/oracle-fusion-finance-training"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`p-2.5 rounded-md text-xs font-semibold block ${
                          pathname === "/oracle-fusion-finance-training"
                            ? "bg-blue-50 text-[#1D63ED]"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-bold text-slate-900">Oracle Fusion Cloud Financials</span>
                          <span className="text-[10px] font-mono font-bold text-[#059669] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                            FLAGSHIP
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          100% Job-Assured master program
                        </div>
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

              {/* Social links in mobile menu */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                {/* 
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#0A66C2] text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#FF0000] text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

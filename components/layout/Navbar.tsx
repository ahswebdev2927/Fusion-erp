"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Layers } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { navigationLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-3"
            : "bg-white/90 backdrop-blur-sm border-slate-200 py-3.5"
        }`}
      >
        <Container size="xl">
          <div className="flex items-center justify-between">
            {/* High-Contrast Brand Mark with Custom Logo */}
            <Link
              href="/"
              className="flex items-center group focus-visible:ring-2 focus-visible:ring-[#1D63ED] rounded-lg py-1"
              aria-label="FusionERPTraining.com Homepage"
            >
              <img
                src="/images/logo.png"
                alt="Fusion ERP Training"
                className="h-11 sm:h-14 md:h-16 w-auto max-w-[210px] sm:max-w-[260px] md:max-w-[300px] object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-sm tracking-tight transition-colors font-medium ${
                      isActive
                        ? "text-[#1D63ED] bg-blue-50/80 font-bold"
                        : "text-slate-700 hover:text-[#1D63ED] hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/book-demo"
                className="text-xs font-bold text-slate-700 hover:text-[#1D63ED] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Book Free Demo
              </Link>
              <Button
                href="/contact"
                size="sm"
                variant="primary"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Talk to an Expert
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/book-demo"
                className="text-xs font-bold bg-blue-50 text-[#1D63ED] px-3 py-1.5 rounded-lg border border-blue-200"
              >
                Book Demo
              </Link>
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    src="/images/logo.png"
                    alt="Fusion ERP Training"
                    className="h-8 w-auto object-contain"
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

              <nav className="mt-6 flex flex-col space-y-1">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                        isActive
                          ? "bg-blue-50 text-[#1D63ED]"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-2.5">
              <Button
                href="/book-demo"
                variant="outline"
                className="w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Free Consultation
              </Button>
              <Button
                href="/contact"
                variant="primary"
                className="w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talk to an Expert
              </Button>
              <p className="text-xs text-center text-slate-500 pt-2 font-mono">
                Admissions: {siteConfig.contact.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

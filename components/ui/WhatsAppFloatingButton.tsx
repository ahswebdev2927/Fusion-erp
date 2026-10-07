"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppFloatingButton() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setShowTooltip(true);
      const hideTimer = setTimeout(() => setShowTooltip(false), 6000);
      return () => clearTimeout(hideTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const rawPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    "Hi, I am interested in the Oracle Fusion Financials Course. Please share course details and next batch timing."
  );
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${defaultMessage}`;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Radar ping animation effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-8 h-8 drop-shadow-sm transition-transform duration-300 group-hover:rotate-6" />

        {/* Online Status Green Dot Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        </span>
      </a>

      {/* Interactive Floating Tooltip Bubble */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 text-xs font-semibold select-none transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25D366] transition-colors"
        >
          Chat with Advisor <span className="text-slate-400 font-normal">| Online</span>
        </a>
        <button
          type="button"
          onClick={() => setShowTooltip(false)}
          className="text-slate-400 hover:text-slate-600 ml-1 text-sm leading-none cursor-pointer"
          aria-label="Dismiss chat tooltip"
        >
          ×
        </button>
      </div>
    </div>
  );
}

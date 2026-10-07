"use client";

import React, { useState, useEffect } from "react";
import { Phone, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function CallFloatingButton() {
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

  const cleanPhone = siteConfig.contact.phone.replace(/[^0-9+]/g, "");

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 flex-row-reverse transition-all duration-500 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <a
        href={`tel:${cleanPhone}`}
        aria-label={`Call us directly at ${siteConfig.contact.phone}`}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#1D63ED] to-[#2563EB] hover:from-[#1550CA] hover:to-[#1D63ED] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400/40"
      >
        {/* Soft pulsing radar ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#1D63ED] opacity-30 animate-ping pointer-events-none" />

        {/* Calling Phone Icon with gentle ring animation */}
        <PhoneCall className="w-6 h-6 drop-shadow-sm transition-transform duration-300 group-hover:rotate-12" />

        {/* Live Active Signal Beacon */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        </span>
      </a>

      {/* Interactive Tooltip Bubble */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 text-xs font-semibold select-none transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <a
          href={`tel:${cleanPhone}`}
          className="hover:text-[#1D63ED] transition-colors font-medium font-mono"
        >
          Call Us: <span className="font-bold text-slate-900">{siteConfig.contact.phone}</span>
        </a>
        <button
          type="button"
          onClick={() => setShowTooltip(false)}
          className="text-slate-400 hover:text-slate-600 ml-1 text-sm leading-none cursor-pointer"
          aria-label="Dismiss call tooltip"
        >
          ×
        </button>
      </div>
    </div>
  );
}

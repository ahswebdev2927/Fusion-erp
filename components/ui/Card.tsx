import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderAccent?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  borderAccent = false,
  padding = "md",
}: CardProps) {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-7",
    lg: "p-8 sm:p-10",
  }[padding];

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-[#1D63ED]/50"
    : "";

  const accentStyles = borderAccent ? "border-t-4 border-t-[#1D63ED]" : "";

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-card ${paddingStyles} ${hoverStyles} ${accentStyles} ${className}`}
    >
      {children}
    </div>
  );
}

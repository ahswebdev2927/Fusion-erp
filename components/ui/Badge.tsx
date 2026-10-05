import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "navy" | "outline" | "slate";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export default function Badge({
  children,
  variant = "blue",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const variantStyles = {
    blue: "bg-[#EBF3FE] text-[#1769E0] border-[#BFDBFE]",
    green: "bg-[#E9F8F1] text-[#22A06B] border-[#A7F3D0]",
    navy: "bg-[#0B1F3A] text-white border-[#0B1F3A]",
    outline: "bg-transparent text-[#64748B] border-[#CBD5E1]",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
  }[variant];

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-medium",
    md: "text-xs sm:text-sm px-3 py-1 font-semibold",
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${sizeStyles} ${variantStyles} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

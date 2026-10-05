"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  icon,
  iconPosition = "right",
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none cursor-pointer rounded-xl select-none text-left";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 sm:py-3 gap-2",
    lg: "text-base px-7 py-3.5 sm:py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#1D63ED] hover:bg-[#124BC2] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-[#1D63ED] border border-[#1D63ED] active:translate-y-0",
    secondary:
      "bg-[#0A192F] hover:bg-[#112240] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-[#0A192F] border border-[#0A192F] active:translate-y-0",
    outline:
      "bg-white hover:bg-slate-50 text-[#0F172A] border-2 border-slate-300 hover:border-[#1D63ED] hover:text-[#1D63ED] shadow-sm hover:shadow active:bg-slate-100",
    white:
      "bg-white hover:bg-slate-50 text-[#0A192F] font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-white focus-visible:ring-white",
    ghost:
      "bg-transparent hover:bg-slate-100 text-[#0F172A] hover:text-[#1D63ED]",
    link:
      "bg-transparent p-0 text-[#1D63ED] hover:text-[#0A192F] underline-offset-4 hover:underline font-bold",
  };

  const combinedClasses = `${baseStyles} ${variant !== "link" ? sizeStyles[size] : ""} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && !icon && (
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      )}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}

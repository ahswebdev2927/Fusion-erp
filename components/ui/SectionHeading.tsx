import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  splitLayout?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
  splitLayout = false,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const eyebrowStyle = isDark
    ? "text-[#93C5FD] border-slate-700 bg-slate-900/60"
    : "text-[#1459C7] border-[#E2E8F0] bg-white";

  const titleColor = isDark ? "text-white" : "text-[#081A33]";
  const descColor = isDark ? "text-slate-300" : "text-[#526077]";

  if (splitLayout) {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-16 lg:mb-20 pb-8 border-b ${isDark ? "border-slate-800" : "border-slate-200/80"} ${className}`}>
        <div className="lg:col-span-7">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider mb-4 border shadow-2xs font-semibold">
              <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#93C5FD]" : "bg-[#1459C7]"}`} />
              <span className={isDark ? "text-slate-200" : "text-slate-700"}>{eyebrow}</span>
            </div>
          )}
          <h2 className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.14] ${titleColor}`}>
            {title}
          </h2>
        </div>
        <div className="lg:col-span-5">
          {description && (
            <p className={`text-base sm:text-lg leading-relaxed ${descColor}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-14 lg:mb-20 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider mb-4 border shadow-2xs font-semibold">
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#93C5FD]" : "bg-[#1459C7]"}`} />
          <span className={isDark ? "text-slate-200" : "text-slate-700"}>{eyebrow}</span>
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15] ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}

"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  subtitle,
  title,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation();

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      ref={ref}
      className={`mb-16 ${alignClasses[align]} ${className} ${
        isVisible ? "fade-in-on-scroll visible" : "fade-in-on-scroll"
      }`}
    >
      {subtitle && (
        <p className="section-subtitle text-foreground/60">
          {subtitle}
        </p>
      )}
      <h2 className="section-title text-foreground mt-2">
        {title}
      </h2>
      <div
        className={`mt-8 h-0.5 w-20 bg-[#DC2626] transition-all duration-700 ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        } ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
        style={{ transformOrigin: align === "right" ? "right" : align === "left" ? "left" : "center" }}
      ></div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
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
  const [isMounted, setIsMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  // Defer animation until after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      ref={ref}
      className={`mb-10 sm:mb-12 md:mb-16 ${alignClasses[align]} ${className}`}
    >
      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
      <h2 className="section-title text-foreground mt-3 sm:mt-4 mb-6 sm:mb-8 px-2 sm:px-0">
        {title}
      </h2>
      <div
        className={`h-0.5 w-12 sm:w-16 bg-[#DC2626] transition-opacity duration-500 ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        } ${isMounted && isVisible ? "opacity-100" : "opacity-100"}`}
      ></div>
    </div>
  );
}

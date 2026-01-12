"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
}

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  const variantClasses = {
    fade: isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    "slide-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12",
    "slide-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
    "slide-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",
    scale: isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${variantClasses[variant]} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

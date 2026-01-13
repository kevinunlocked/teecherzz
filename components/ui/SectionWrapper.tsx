"use client";

import { ReactNode, useEffect, useState } from "react";
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
  const [isMounted, setIsMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  // Defer animation setup until after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show content immediately, animate later
  const variantClasses = {
    fade: isMounted && isVisible
      ? "opacity-100 translate-y-0"
      : isMounted ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0",
    "slide-up": isMounted && isVisible
      ? "opacity-100 translate-y-0"
      : isMounted ? "opacity-0 translate-y-12" : "opacity-100 translate-y-0",
    "slide-left": isMounted && isVisible
      ? "opacity-100 translate-x-0"
      : isMounted ? "opacity-0 -translate-x-8" : "opacity-100 translate-x-0",
    "slide-right": isMounted && isVisible
      ? "opacity-100 translate-x-0"
      : isMounted ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0",
    scale: isMounted && isVisible
      ? "opacity-100 scale-100"
      : isMounted ? "opacity-0 scale-95" : "opacity-100 scale-100",
  };

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

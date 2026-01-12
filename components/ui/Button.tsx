"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-medium transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#DC2626] text-white hover:bg-[#B91C1C] focus:ring-[#DC2626] shadow-lg hover:shadow-xl hover:shadow-[#DC2626]/30 hover:scale-105 hover:-translate-y-1",
    secondary:
      "bg-transparent border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white focus:ring-[#DC2626] hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#DC2626]/20",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  // For demo: Always render as button, never navigate
  return (
    <button 
      type={type} 
      onClick={handleClick} 
      className={combinedClassName}
      style={{ cursor: href ? "pointer" : "default" }}
    >
      {children}
    </button>
  );
}

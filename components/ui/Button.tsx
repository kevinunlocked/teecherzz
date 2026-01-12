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
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#DC2626] text-white hover:bg-[#B91C1C] focus:ring-[#DC2626] hover:shadow-md",
    secondary:
      "bg-transparent border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white focus:ring-[#DC2626] hover:shadow-md",
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

"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = false }: LogoProps) {
  const [logoError, setLogoError] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <a 
      href="/" 
      onClick={handleClick}
      className={`group flex items-center space-x-3 transition-all duration-300 hover:scale-105 ${className}`}
    >
      {/* Logo Image */}
      <div className="relative h-10 w-10 flex-shrink-0 transition-transform duration-300 group-hover:rotate-3">
        {!logoError ? (
          <Image
            src="/logo-1.png"
            alt="Teecherz Home & Office"
            fill
            className="object-contain transition-all duration-300 group-hover:brightness-110"
            priority
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#DC2626] text-white font-bold text-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#DC2626]/30">
            T
          </div>
        )}
      </div>
      
      {/* Optional Text - Show brand name if needed */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white">Teecherz</span>
          <span className="text-xs uppercase text-gray-300">
            Home & Office
          </span>
        </div>
      )}
    </Link>
  );
}

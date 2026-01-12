"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = false }: LogoProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <div className="relative h-10 w-10 flex-shrink-0">
        {!logoError ? (
          <Image
            src="/logo-1.png"
            alt="Teecherz Home & Office"
            fill
            className="object-contain"
            priority
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#DC2626] text-white font-bold text-lg shadow-lg">
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

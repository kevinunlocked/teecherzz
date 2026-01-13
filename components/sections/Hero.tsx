"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

// Constant image path to prevent re-computation on every render
const HERO_IMAGE_PATH = "/Shop - Teecherz Home & Office/hero-living-room.jpg";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  // Defer image loading until after mount - show content immediately
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative bg-background min-h-[70vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - Load after mount */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE_PATH}
            alt="Teecherz Living Room"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 pointer-events-none"></div>
        </div>
      )}
      
      {/* Show content immediately - don't wait for image */}
      <Container className="relative z-10 py-12 sm:py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="hero-heading text-white drop-shadow-2xl mb-4 sm:mb-6">
            Elevate Your Space with Teecherz Furniture
          </h1>
          <p className="hero-text text-white/95 drop-shadow-lg mx-auto px-2 sm:px-0">
            Transform your home and office into stylish and comfortable spaces
            with quality furniture designed for modern living.
          </p>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <Button href="/shop" variant="primary" className="w-full sm:w-auto min-h-[48px] touch-manipulation">
              Shop Collection
            </Button>
            <Button href="/about" variant="secondary" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-foreground w-full sm:w-auto min-h-[48px] touch-manipulation">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

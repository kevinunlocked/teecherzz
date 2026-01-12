"use client";

import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

// Constant image path to prevent re-computation on every render
const HERO_IMAGE_PATH = "/Shop - Teecherz Home & Office/hero-living-room.jpg";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-background min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden section-transition">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_PATH}
          alt="Teecherz Living Room"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: "cover",
            display: "block",
          }}
          loading="eager"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 pointer-events-none"></div>
      </div>
      
      <Container className="relative z-10 py-20 sm:py-28 lg:py-32">
        <div className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h1 className="hero-heading text-white drop-shadow-2xl mb-6">
            Elevate Your Space with Teecherz Furniture
          </h1>
          <p className="hero-text text-white/95 drop-shadow-lg mx-auto">
            Transform your home and office into stylish and comfortable spaces
            with quality furniture designed for modern living.
          </p>
          <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <Button href="/shop" variant="primary" className="w-full sm:w-auto">
              Shop Collection
            </Button>
            <Button href="/about" variant="secondary" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-foreground w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

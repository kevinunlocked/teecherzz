"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";

// Constant image path to prevent re-computation on every render
const HERO_IMAGE_PATH = "/Shop - Teecherz Home & Office/hero-living-room.jpg";

export default function Hero() {
  return (
    <section className="relative bg-background py-20 sm:py-28 lg:py-36 overflow-hidden">
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
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="hero-heading text-white drop-shadow-lg">
            Elevate Your Space with Teecherz Furniture
          </h1>
          <p className="hero-text mt-6 text-white/90 drop-shadow-md">
            Transform your home and office into stylish and comfortable spaces
            with quality furniture designed for modern living.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/shop" variant="primary">
              Shop Collection
            </Button>
            <Button href="/about" variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

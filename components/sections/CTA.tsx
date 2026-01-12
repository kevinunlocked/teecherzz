"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { getShopImagePath } from "@/utils/imagePath";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div
          ref={ref}
          className={`grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Image - Left Side */}
          <div className="group relative order-2 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-300 hover:shadow-lg lg:order-1">
            <img
              src={getShopImagePath("hero-living-room.jpg")}
              alt="Teecherz Furniture"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Content - Right Side */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h3 className="section-title text-left text-foreground mb-6">
              Create Your Dream Space
            </h3>
            <p className="text-body-large text-foreground/70 mb-10">
              Transform your living space into a personalized oasis with our
              wide selection of furniture and decor for every room.
            </p>
            <div>
              <Button href="/shop" variant="primary">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

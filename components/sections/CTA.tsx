"use client";

import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { getShopImagePath } from "@/utils/imagePath";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-background py-16 sm:py-24 md:py-32 lg:py-40">
      <Container>
        <div
          ref={ref}
          className={`grid grid-cols-1 gap-10 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:items-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image - Left Side */}
          <div className="group relative order-2 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 lg:order-1">
            <Image
              src={getShopImagePath("hero-living-room.jpg")}
              alt="Teecherz Furniture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              quality={80}
            />
          </div>
          {/* Content - Right Side */}
          <div className="order-1 flex flex-col justify-center lg:order-2 px-2 sm:px-0">
            <h3 className="section-title text-left text-foreground mb-4 sm:mb-6">
              Create Your Dream Space
            </h3>
            <p className="text-body-large text-foreground/70 mb-6 sm:mb-8 md:mb-10">
              Transform your living space into a personalized oasis with our
              wide selection of furniture and decor for every room.
            </p>
            <div>
              <Button href="/shop" variant="primary" className="w-full sm:w-auto min-h-[48px] touch-manipulation">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { getShopImagePath } from "@/utils/imagePath";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Category {
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  color: "blue" | "orange" | "grey";
  tagline?: string;
}

const categories: Category[] = [
  {
    title: "Dining Room",
    subtitle: "DINING FURNITURE",
    tagline: "Memorable Moments with Family",
    href: "/categories/dining-room",
    color: "blue",
    image: getShopImagePath("imgi_9_gir.jpg"),
  },
  {
    title: "Living Room",
    subtitle: "LIVING FURNITURE",
    tagline: "Comfort beyond your needs",
    href: "/categories/living-room",
    color: "orange",
    image: getShopImagePath("imgi_33_lounge-980x980.jpg"),
  },
  {
    title: "Bedroom Suites",
    subtitle: "BEDROOM SUITES",
    tagline: "Timeless Elegance",
    href: "/categories/bedroom",
    color: "grey",
    image: getShopImagePath("imgi_34_bedroom-980x980.jpg"),
  },
];

const colorClasses = {
  blue: "bg-blue-100/50 hover:bg-blue-100",
  orange: "bg-orange-100/50 hover:bg-orange-100",
  grey: "bg-gray-100/50 hover:bg-gray-100",
};

export default function CategoryShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className="bg-background py-16 sm:py-24 md:py-32 lg:py-40 section-transition">
      <Container>
        <div
          ref={ref}
          className={`grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 md:grid-cols-3 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              onClick={handleClick}
              className={`group relative flex min-h-[200px] sm:min-h-[240px] overflow-hidden rounded-xl sm:rounded-2xl transition-transform duration-200 active:scale-[0.98] md:min-h-[300px] touch-manipulation ${colorClasses[category.color]}`}
            >
              {/* Text Section - Left */}
              <div className="relative z-10 flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10 transition-all duration-300 group-hover:translate-x-1">
                <p className="category-subtitle mb-3 text-foreground/60 transition-colors duration-300 group-hover:text-foreground/80">
                  {category.subtitle}
                </p>
                <h3 className="category-title text-foreground mb-3 transition-colors duration-300 group-hover:text-[#DC2626]">
                  {category.title}
                </h3>
                {category.tagline && (
                  <p className="mb-4 text-sm font-medium text-foreground/70 transition-colors duration-300 group-hover:text-foreground/90">
                    {category.tagline}
                  </p>
                )}
                <div className="h-0.5 w-10 bg-[#DC2626] transition-all duration-500 ease-out group-hover:w-full origin-left"></div>
              </div>
              
              {/* Image Section - Right */}
              <div className="relative flex-shrink-0 overflow-hidden">
                <div className="relative h-full w-32 bg-gradient-to-br from-gray-100 to-gray-200 md:w-40 lg:w-48">
                  {category.image ? (
                    <>
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        quality={80}
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5"></div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-4xl font-semibold text-gray-400">
                        {category.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

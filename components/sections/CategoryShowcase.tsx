"use client";

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
    <section className="bg-background py-24 sm:py-32 lg:py-40 section-transition">
      <Container>
        <div
          ref={ref}
          className={`grid grid-cols-1 gap-10 md:grid-cols-3 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              onClick={handleClick}
              className={`group relative flex min-h-[240px] overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:shadow-lg md:min-h-[300px] ${colorClasses[category.color]}`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Text Section - Left */}
              <div className="relative z-10 flex flex-1 flex-col justify-center p-8 sm:p-10 transition-all duration-300 group-hover:translate-x-1">
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
                <div className="relative h-full w-32 bg-gradient-to-br from-gray-100 to-gray-200 transition-transform duration-500 group-hover:scale-110 md:w-40 lg:w-48">
                  {category.image ? (
                    <>
                      <img
                        src={category.image}
                        alt={category.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5"></div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <span className="text-4xl font-bold text-gray-400 transition-colors duration-300 group-hover:text-gray-600">
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

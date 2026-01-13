"use client";

import Container from "../ui/Container";
import {
  FreeShippingIcon,
  ReturnsIcon,
  Hours24Icon,
  FastDeliveryIcon,
} from "../ui/Icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FreeShippingIcon />,
    title: "Free Shipping",
    description: "Free Delivery",
  },
  {
    icon: <ReturnsIcon />,
    title: "Free Shipping",
    description: "Quick Refunds",
  },
  {
    icon: <Hours24Icon />,
    title: "24 Hours Service",
    description: "24/7 Support",
  },
  {
    icon: <FastDeliveryIcon />,
    title: "Fast Delivery",
    description: "Quick Delivery",
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-background py-16 sm:py-24 md:py-32 lg:py-40 section-transition">
      <Container>
        <div className="mb-10 sm:mb-12 md:mb-16 text-center px-2 sm:px-0">
          <h2 className="section-title text-foreground">
            Order now! We're at your Absolute service
          </h2>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center transition-transform duration-200"
            >
              <div className="mb-8 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-[#DC2626]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70 transition-colors duration-200 group-hover:text-foreground/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

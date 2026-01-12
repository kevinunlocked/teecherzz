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
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="section-title text-foreground">
            Order now! We're at your Absolute service
          </h2>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:text-[#DC2626]">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-[#DC2626]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70 transition-colors duration-300 group-hover:text-foreground/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

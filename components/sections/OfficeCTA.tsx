"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { getShopImagePath } from "@/utils/imagePath";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function OfficeCTA() {
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
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02]">
              <img
                src={getShopImagePath("imgi_25_office2-1.jpg")}
                alt="Office Furniture"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h2 className="section-title text-left text-foreground mb-6">
              Create a great first impression
            </h2>
            <p className="text-body-large text-foreground/70 mb-10">
              Create a great first impression for your business with our modern
              secretarial desks. Designed to keep the work area organized our
              desks will help you achieve a productive day of work. Our desks
              are built from premium durable wood able to withstand the craziest
              workdays.
            </p>
            <div className="mb-12">
              <Button href="/product-category/office-furniture" variant="primary">
                View Office Furniture
              </Button>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold leading-tight text-foreground mb-4">
                Make big decisions on our first-class executive desks
              </h3>
              <p className="text-body text-foreground/70 mb-8">
                Spacious enough to accommodate everyday multitasking while
                keeping your work area clutter-free and well organized. Designed
                with the finest leather work pads to turn your organisations
                goals today into tomorrow's reality.
              </p>
              <div>
                <Button
                  href="/product-category/office-furniture/executive-desks"
                  variant="secondary"
                >
                  View Executive Desks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

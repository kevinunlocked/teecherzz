import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import { getShopImagePath } from "@/utils/imagePath";

export default function OfficeCTA() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="group aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
              <Image
                src={getShopImagePath("imgi_25_office2-1.jpg")}
                alt="Office Furniture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h2 className="section-title text-foreground">
              Create a great first impression
            </h2>
            <p className="text-body-large mt-6 text-foreground/70">
              Create a great first impression for your business with our modern
              secretarial desks. Designed to keep the work area organized our
              desks will help you achieve a productive day of work. Our desks
              are built from premium durable wood able to withstand the craziest
              workdays.
            </p>
            <div className="mt-8">
              <Button href="/product-category/office-furniture" variant="primary">
                View Office Furniture
              </Button>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold leading-tight text-foreground">
                Make big decisions on our first-class executive desks
              </h3>
              <p className="text-body mt-4 text-foreground/70">
                Spacious enough to accommodate everyday multitasking while
                keeping your work area clutter-free and well organized. Designed
                with the finest leather work pads to turn your organisations
                goals today into tomorrow's reality.
              </p>
              <div className="mt-6">
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

import Container from "../ui/Container";
import Button from "../ui/Button";
import { getShopImagePath } from "@/utils/imagePath";

export default function CTA() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image - Left Side */}
          <div className="group relative order-2 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] lg:order-1">
            <img
              src={getShopImagePath("hero-living-room.jpg")}
              alt="Teecherz Furniture"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          {/* Content - Right Side */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h3 className="section-title text-foreground">
              Create Your Dream Space
            </h3>
            <p className="text-body-large mt-6 text-foreground/70">
              Transform your living space into a personalized oasis with our
              wide selection of furniture and decor for every room.
            </p>
            <div className="mt-10">
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

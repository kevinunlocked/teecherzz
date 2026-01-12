import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="hero-heading text-foreground">
            Elevate Your Space with Teecherz Furniture
          </h1>
          <p className="hero-text mt-6 text-foreground/70">
            Transform your home and office into stylish and comfortable spaces
            with quality furniture designed for modern living.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/shop" variant="primary">
              Shop Collection
            </Button>
            <Button href="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

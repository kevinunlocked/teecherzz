import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your Teaching with Teecherz
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/70 sm:text-xl">
            Transform your educational approach with innovative tools and
            resources designed for modern educators.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/courses" variant="primary">
              Explore Courses
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

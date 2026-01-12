import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-6xl font-bold text-gray-400">
                Teecherz
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Create Your Learning Journey
            </h3>
            <p className="mt-6 text-lg leading-8 text-foreground/70">
              Transform your teaching career with our comprehensive selection of
              courses and resources designed for modern educators.
            </p>
            <div className="mt-10">
              <Button href="/courses" variant="primary">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

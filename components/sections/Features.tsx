import Container from "../ui/Container";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🚚",
    title: "Free Resources",
    description: "Access free educational materials",
  },
  {
    icon: "↩️",
    title: "Easy Access",
    description: "Simple enrollment process",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    description: "Round-the-clock assistance",
  },
  {
    icon: "⚡",
    title: "Fast Learning",
    description: "Quick and efficient courses",
  },
];

export default function Features() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

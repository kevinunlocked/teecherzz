import Container from "../ui/Container";
import {
  FreeShippingIcon,
  ReturnsIcon,
  Hours24Icon,
  FastDeliveryIcon,
} from "../ui/Icons";

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
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="section-title text-foreground">
            Order now! We're at your Absolute service
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

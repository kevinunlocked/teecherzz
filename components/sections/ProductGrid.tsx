import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

interface Product {
  id: string;
  name: string;
  price?: string;
  originalPrice?: string;
  image?: string;
  href: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Advanced Teaching Methods",
    price: "$99",
    originalPrice: "$149",
    href: "/courses/advanced-teaching",
  },
  {
    id: "2",
    name: "Digital Classroom Management",
    price: "$79",
    href: "/courses/digital-classroom",
  },
  {
    id: "3",
    name: "Student Engagement Strategies",
    price: "$89",
    originalPrice: "$119",
    href: "/courses/engagement",
  },
  {
    id: "4",
    name: "Assessment & Evaluation",
    price: "$69",
    href: "/courses/assessment",
  },
  {
    id: "5",
    name: "Curriculum Design",
    price: "$109",
    originalPrice: "$139",
    href: "/courses/curriculum",
  },
  {
    id: "6",
    name: "Educational Technology",
    price: "$94",
    href: "/courses/edtech",
  },
  {
    id: "7",
    name: "Special Needs Education",
    price: "$84",
    href: "/courses/special-needs",
  },
  {
    id: "8",
    name: "Professional Development",
    price: "$119",
    originalPrice: "$149",
    href: "/courses/professional-dev",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <SectionHeader
          subtitle="RECENTLY RELEASED"
          title="Latest Courses"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <span className="text-4xl font-bold text-gray-400">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  {product.price && (
                    <p className="text-base font-semibold text-foreground">
                      {product.price}
                    </p>
                  )}
                  {product.originalPrice && (
                    <p className="text-sm text-foreground/50 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/courses" variant="primary">
            View All Courses
          </Button>
        </div>
      </Container>
    </section>
  );
}

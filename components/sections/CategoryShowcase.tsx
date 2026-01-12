import Container from "../ui/Container";

interface Category {
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  color: "blue" | "orange" | "grey";
}

const categories: Category[] = [
  {
    title: "Online Courses",
    subtitle: "INTERACTIVE LEARNING",
    href: "/courses/online",
    color: "blue",
  },
  {
    title: "Teaching Tools",
    subtitle: "EDUCATION RESOURCES",
    href: "/courses/tools",
    color: "orange",
  },
  {
    title: "Certifications",
    subtitle: "PROFESSIONAL DEVELOPMENT",
    href: "/courses/certifications",
    color: "grey",
  },
];

const colorClasses = {
  blue: "bg-blue-50 hover:bg-blue-100",
  orange: "bg-orange-50 hover:bg-orange-100",
  grey: "bg-gray-50 hover:bg-gray-100",
};

export default function CategoryShowcase() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${colorClasses[category.color]}`}
            >
              <div className="relative z-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                  {category.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
                <div className="mt-4 h-0.5 w-12 bg-foreground transition-all duration-300 group-hover:w-full"></div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

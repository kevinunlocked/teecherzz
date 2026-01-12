import Container from "../ui/Container";

interface Category {
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  color: "blue" | "orange" | "grey";
  tagline?: string;
}

const categories: Category[] = [
  {
    title: "Dining Room",
    subtitle: "DINING FURNITURE",
    tagline: "Memorable Moments with Family",
    href: "/categories/dining-room",
    color: "blue",
  },
  {
    title: "Living Room",
    subtitle: "LIVING FURNITURE",
    tagline: "Comfort beyond your needs",
    href: "/categories/living-room",
    color: "orange",
  },
  {
    title: "Bedroom Suites",
    subtitle: "BEDROOM SUITES",
    tagline: "Timeless Elegance",
    href: "/categories/bedroom",
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
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className={`group relative flex min-h-[200px] overflow-hidden rounded-2xl transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-[1.02] md:min-h-[240px] ${colorClasses[category.color]}`}
            >
              {/* Text Section - Left */}
              <div className="relative z-10 flex flex-1 flex-col justify-center p-8 transition-all duration-500 group-hover:translate-x-1">
                <p className="category-subtitle mb-2 text-foreground/60 transition-colors duration-300 group-hover:text-foreground/80">
                  {category.subtitle}
                </p>
                <h3 className="category-title text-foreground transition-colors duration-300 group-hover:text-[#DC2626]">
                  {category.title}
                </h3>
                {category.tagline && (
                  <p className="mt-2 text-sm font-medium text-foreground/70 transition-colors duration-300 group-hover:text-foreground/90">
                    {category.tagline}
                  </p>
                )}
                <div className="mt-4 h-0.5 w-12 bg-[#DC2626] transition-all duration-500 ease-out group-hover:w-full"></div>
              </div>
              
              {/* Image Section - Right */}
              <div className="relative flex-shrink-0 overflow-hidden">
                <div className="h-full w-32 bg-gradient-to-br from-gray-100 to-gray-200 transition-transform duration-500 group-hover:scale-110 md:w-40 lg:w-48">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <span className="text-4xl font-bold text-gray-400 transition-colors duration-300 group-hover:text-gray-600">
                        {category.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

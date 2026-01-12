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
    name: "Modern Sofa Set",
    price: "$899",
    originalPrice: "$1,199",
    href: "/products/modern-sofa",
  },
  {
    id: "2",
    name: "Dining Table Set",
    price: "$649",
    href: "/products/dining-table",
  },
  {
    id: "3",
    name: "Bedroom Suite",
    price: "$1,299",
    originalPrice: "$1,599",
    href: "/products/bedroom-suite",
  },
  {
    id: "4",
    name: "Office Desk",
    price: "$449",
    href: "/products/office-desk",
  },
  {
    id: "5",
    name: "Coffee Table",
    price: "$299",
    originalPrice: "$399",
    href: "/products/coffee-table",
  },
  {
    id: "6",
    name: "Wardrobe",
    price: "$799",
    href: "/products/wardrobe",
  },
  {
    id: "7",
    name: "Dining Chairs Set",
    price: "$349",
    href: "/products/dining-chairs",
  },
  {
    id: "8",
    name: "Bookshelf",
    price: "$249",
    originalPrice: "$329",
    href: "/products/bookshelf",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeader
          subtitle="RECENTLY RELEASED"
          title="Latest Collection"
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
                <h3 className="product-name text-foreground group-hover:text-[#DC2626] transition-colors">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  {product.price && (
                    <p className="product-price text-foreground">
                      {product.price}
                    </p>
                  )}
                  {product.originalPrice && (
                    <p className="product-price-original text-foreground/50 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/shop" variant="primary">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

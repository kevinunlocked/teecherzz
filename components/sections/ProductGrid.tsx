"use client";

import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { getShopImagePath } from "@/utils/imagePath";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    image: getShopImagePath("imgi_32_sofa-980x980.jpg"),
  },
  {
    id: "2",
    name: "Dining Table Set",
    price: "$649",
    href: "/products/dining-table",
    image: getShopImagePath("imgi_9_gir.jpg"),
  },
  {
    id: "3",
    name: "Bedroom Suite",
    price: "$1,299",
    originalPrice: "$1,599",
    href: "/products/bedroom-suite",
    image: getShopImagePath("imgi_34_bedroom-980x980.jpg"),
  },
  {
    id: "4",
    name: "Office Desk",
    price: "$449",
    href: "/products/office-desk",
    image: getShopImagePath("imgi_26_o.jpg3_.jpg"),
  },
  {
    id: "5",
    name: "Coffee Table",
    price: "$299",
    originalPrice: "$399",
    href: "/products/coffee-table",
    image: getShopImagePath("imgi_33_lounge-980x980.jpg"),
  },
  {
    id: "6",
    name: "Wardrobe",
    price: "$799",
    href: "/products/wardrobe",
    image: getShopImagePath("imgi_35_suite-980x980.jpg"),
  },
  {
    id: "7",
    name: "Dining Chairs Set",
    price: "$349",
    href: "/products/dining-chairs",
    image: getShopImagePath("imgi_11_harvard.jpg"),
  },
  {
    id: "8",
    name: "Bookshelf",
    price: "$249",
    originalPrice: "$329",
    href: "/products/bookshelf",
    image: getShopImagePath("imgi_27_office5.jpg3_.jpg"),
  },
];

export default function ProductGrid() {
  const { ref, isVisible } = useScrollAnimation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionHeader
          subtitle="RECENTLY RELEASED"
          title="Latest Collection"
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {products.map((product, index) => (
            <a
              key={product.id}
              href={product.href}
              onClick={handleClick}
              className="group flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                {product.image ? (
                  <>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 transition-all duration-300 group-hover:from-gray-300 group-hover:to-gray-400">
                    <span className="text-4xl font-bold text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-600">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-5 flex flex-col">
                <h3 className="product-name text-foreground transition-colors duration-300 group-hover:text-[#DC2626]">
                  {product.name}
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  {product.price && (
                    <p className="product-price text-foreground transition-all duration-300 group-hover:scale-105">
                      {product.price}
                    </p>
                  )}
                  {product.originalPrice && (
                    <p className="product-price-original text-foreground/50 line-through transition-opacity duration-300 group-hover:opacity-70">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Button href="/shop" variant="primary">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

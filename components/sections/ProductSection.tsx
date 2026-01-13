"use client";

import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Product {
  id: string;
  name: string;
  price?: string;
  image?: string;
  href: string;
}

interface ProductSectionProps {
  title: string;
  shopAllHref: string;
  products: Product[];
}

export default function ProductSection({
  title,
  shopAllHref,
  products,
}: ProductSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className="bg-background py-16 sm:py-24 md:py-32 lg:py-40 section-transition">
      <Container>
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="section-title text-left text-foreground">
            {title}
          </h2>
          <Button href={shopAllHref} variant="secondary" className="text-sm w-full sm:w-auto min-h-[44px] touch-manipulation">
            Shop All
          </Button>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              onClick={handleClick}
              className="group flex flex-col transition-transform duration-200 active:scale-[0.98] touch-manipulation"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    quality={80}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <span className="text-4xl font-semibold text-gray-400">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-5 flex flex-col">
                <h3 className="product-name text-foreground transition-colors duration-300 group-hover:text-[#DC2626]">
                  {product.name}
                </h3>
                {product.price && (
                  <p className="product-price mt-3 text-foreground transition-all duration-300 group-hover:scale-105">
                    {product.price}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { getShopImagePath } from "@/utils/imagePath";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
  href: string;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Cushion Green",
    price: "USD 7.00",
    href: "/product/cushion-green",
    image: getShopImagePath("imgi_13_DSC_3183-300x225.jpg"),
  },
  {
    id: "2",
    name: "Cushion Picky",
    price: "USD 7.00",
    href: "/product/cushion-picky",
    image: getShopImagePath("imgi_14_DSC_3184-300x225.jpg"),
  },
  {
    id: "3",
    name: "Cushion Red",
    price: "USD 7.00",
    href: "/product/cushion-red",
    image: getShopImagePath("imgi_15_DSC_3204-300x225.jpg"),
  },
  {
    id: "4",
    name: "Cushion Lefy",
    price: "USD 7.00",
    href: "/product/cushion-lefy",
    image: getShopImagePath("imgi_16_DSC_3205-300x225.jpg"),
  },
  {
    id: "5",
    name: "Cushion Red stripe",
    price: "USD 7.00",
    href: "/product/cushion-red-stripe",
    image: getShopImagePath("imgi_17_DSC_3224-300x225.jpg"),
  },
  {
    id: "6",
    name: "Cushion Galaxy Blue",
    price: "USD 7.00",
    href: "/product/cushion-galaxy-blue",
    image: getShopImagePath("imgi_18_DSC_3225-300x225.jpg"),
  },
  {
    id: "7",
    name: "Bunk Bed (Pine)",
    price: "USD 350.00",
    href: "/product/bunk-bed-pine",
    image: getShopImagePath("imgi_24_Bunk-Bed-Usd227-3-300x225.jpg"),
  },
];

export default function FeaturedProducts() {
  const { ref, isVisible } = useScrollAnimation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionHeader subtitle="FEATURED" title="Featured Products" />

        <div
          ref={ref}
          className={`grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {featuredProducts.map((product, index) => (
            <a
              key={product.id}
              href={product.href}
              onClick={handleClick}
              className="group flex flex-col transition-all duration-500 hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 30}ms`,
              }}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#DC2626]/10">
                {product.image ? (
                  <>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 transition-all duration-300 group-hover:from-gray-300 group-hover:to-gray-400">
                    <span className="text-2xl font-bold text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-600">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-3 flex flex-col">
                <h3 className="product-name text-sm text-foreground transition-colors duration-300 group-hover:text-[#DC2626] line-clamp-2">
                  {product.name}
                </h3>
                <p className="product-price mt-1 text-sm text-foreground transition-all duration-300 group-hover:scale-105">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import Image from "next/image";
import { getShopImagePath } from "@/utils/imagePath";

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
              className="group flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 transition-all duration-300 group-hover:from-gray-300 group-hover:to-gray-400">
                    <span className="text-4xl font-bold text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-600">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-col">
                <h3 className="product-name text-foreground transition-colors duration-300 group-hover:text-[#DC2626]">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
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

        <div className="mt-12 text-center">
          <Button href="/shop" variant="primary">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

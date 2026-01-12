import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";

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
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h2>
          <Button href={shopAllHref} variant="secondary" className="text-sm">
            Shop All
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                {product.price && (
                  <p className="product-price mt-2 text-foreground">
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

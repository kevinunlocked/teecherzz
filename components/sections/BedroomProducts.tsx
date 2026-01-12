import ProductSection from "./ProductSection";
import { getShopImagePath } from "@/utils/imagePath";

const bedroomProducts = [
  {
    id: "1",
    name: "Oxford Bedroom Suite",
    href: "/product/oxford-bedroom-suite",
    image: getShopImagePath("imgi_6_Oxford-Bedroom-Suite-11-Usd793-Excluding-Kist-2.jpg"),
  },
  {
    id: "2",
    name: "Emperor Bedroom Suite",
    href: "/product/emperor-bedroom-suite",
    image: getShopImagePath("imgi_34_bedroom-980x980.jpg"),
  },
  {
    id: "3",
    name: "Lincoln",
    href: "/product/lincoln",
    image: getShopImagePath("imgi_35_suite-980x980.jpg"),
  },
];

export default function BedroomProducts() {
  return (
    <ProductSection
      title="Bedroom"
      shopAllHref="/product-category/bedroom-furniture"
      products={bedroomProducts}
    />
  );
}

import ProductSection from "./ProductSection";
import { getShopImagePath } from "@/utils/imagePath";

const diningRoomProducts = [
  {
    id: "1",
    name: "Giraffe Dining Room Suite",
    href: "/product/giraffe-dinning-room-suite",
    image: getShopImagePath("imgi_9_gir.jpg"),
  },
  {
    id: "2",
    name: "Sasha Dining Suite (6-seater)",
    href: "/product/sasha-dining-suite-6-seater",
    image: getShopImagePath("imgi_10_Sasha-.jpg"),
  },
  {
    id: "3",
    name: "Gad 4-seater Dining Room Suite (Leather)",
    href: "/product/gad-4-seater-dinning-room-suite-leather",
    image: getShopImagePath("imgi_11_harvard.jpg"),
  },
];

export default function DiningRoomProducts() {
  return (
    <ProductSection
      title="Dining Room"
      shopAllHref="/?product_cat=dining-room-furniture"
      products={diningRoomProducts}
    />
  );
}

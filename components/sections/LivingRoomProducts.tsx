import ProductSection from "./ProductSection";
import { getShopImagePath } from "@/utils/imagePath";

const livingRoomProducts = [
  {
    id: "1",
    name: "Pristine Lounge Suite (Leather)",
    href: "/product/pristine-lounge-suite-leather",
    image: getShopImagePath("imgi_32_sofa-980x980.jpg"),
  },
  {
    id: "2",
    name: "Santiago Lounge Suite (PU Leather)",
    href: "/product/santiago-lounge-suite-pu-leather",
    image: getShopImagePath("imgi_33_lounge-980x980.jpg"),
  },
  {
    id: "3",
    name: "Alaska Lounge Suite (Fabric)",
    href: "/product/alaska-lounge-suite-fabric",
    image: getShopImagePath("imgi_5_lounge.jpg"),
  },
];

export default function LivingRoomProducts() {
  return (
    <ProductSection
      title="Living Room"
      shopAllHref="/product-category/living-room"
      products={livingRoomProducts}
    />
  );
}

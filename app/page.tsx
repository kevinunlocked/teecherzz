import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CategoryShowcase from "@/components/sections/CategoryShowcase";
import LivingRoomProducts from "@/components/sections/LivingRoomProducts";
import BedroomProducts from "@/components/sections/BedroomProducts";
import DiningRoomProducts from "@/components/sections/DiningRoomProducts";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import OfficeCTA from "@/components/sections/OfficeCTA";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionWrapper variant="fade" delay={100}>
          <CategoryShowcase />
        </SectionWrapper>
        <SectionWrapper variant="slide-up" delay={150}>
          <LivingRoomProducts />
        </SectionWrapper>
        <SectionWrapper variant="slide-up" delay={200}>
          <BedroomProducts />
        </SectionWrapper>
        <SectionWrapper variant="slide-up" delay={250}>
          <DiningRoomProducts />
        </SectionWrapper>
        <SectionWrapper variant="fade" delay={300}>
          <FeaturedProducts />
        </SectionWrapper>
        <SectionWrapper variant="slide-up" delay={350}>
          <OfficeCTA />
        </SectionWrapper>
        <SectionWrapper variant="fade" delay={400}>
          <Features />
        </SectionWrapper>
        <SectionWrapper variant="slide-up" delay={450}>
          <CTA />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

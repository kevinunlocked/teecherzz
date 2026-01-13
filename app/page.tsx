"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

// Lazy load all sections below the fold - they load after initial render
const CategoryShowcase = dynamic(() => import("@/components/sections/CategoryShowcase"), {
  loading: () => <div className="min-h-[400px]" />,
});

const LivingRoomProducts = dynamic(() => import("@/components/sections/LivingRoomProducts"), {
  loading: () => <div className="min-h-[400px]" />,
});

const BedroomProducts = dynamic(() => import("@/components/sections/BedroomProducts"), {
  loading: () => <div className="min-h-[400px]" />,
});

const DiningRoomProducts = dynamic(() => import("@/components/sections/DiningRoomProducts"), {
  loading: () => <div className="min-h-[400px]" />,
});

const FeaturedProducts = dynamic(() => import("@/components/sections/FeaturedProducts"), {
  loading: () => <div className="min-h-[400px]" />,
});

const OfficeCTA = dynamic(() => import("@/components/sections/OfficeCTA"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Features = dynamic(() => import("@/components/sections/Features"), {
  loading: () => <div className="min-h-[400px]" />,
});

const CTA = dynamic(() => import("@/components/sections/CTA"), {
  loading: () => <div className="min-h-[400px]" />,
});

const SectionWrapper = dynamic(() => import("@/components/ui/SectionWrapper"));

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // Defer loading below-fold sections until after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Critical above-fold content - loads immediately */}
        <Hero />
        
        {/* Below-fold content - lazy loaded after mount */}
        {isMounted && (
          <>
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
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

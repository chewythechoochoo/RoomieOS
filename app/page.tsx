"use client";

import { useEffect, useState } from "react";
import { BannerSign } from "@/components/banner-sign";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ProductConceptSection } from "@/components/product-concept-section";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  const [night, setNight] = useState(false);

  useEffect(() => {
    if (night) {
      document.body.classList.add("night");
    } else {
      document.body.classList.remove("night");
    }
    return () => {
      document.body.classList.remove("night");
    };
  }, [night]);

  return (
    <div className={night ? "night-root" : "day-root"}>
      <BannerSign night={night} onToggle={() => setNight((n) => !n)} />
      <main className="relative">
        <HeroSection />
        <ProblemSection />
        <ProductConceptSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
}

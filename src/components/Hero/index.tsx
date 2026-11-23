"use client";

import { BackgroundBlobs } from "./BackgroundBlobs";
import { HeroContent } from "./HeroContent";
import { WhyMeCard } from "./WhyMeCard";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--bg-primary)]">
      <BackgroundBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pt-28 pb-16 md:pt-36 md:pb-24 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-14 items-center">
          <HeroContent />
          <WhyMeCard />
        </div>
      </div>
    </section>
  );
}

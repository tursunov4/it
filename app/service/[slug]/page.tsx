"use client";

import ServiceItemHeroSection from "@/components/sections/ServiceItemHeroSection";
import ServicesItemAbout from "@/components/sections/ServicesItemAbout";
import ServicesItemSection from "@/components/sections/ServicesItemSection";

const LandingPage = () => {
  return (
    <div className=" pb-[48px] md:pb-[64px]">
      <ServiceItemHeroSection />
      <ServicesItemSection />
      <ServicesItemAbout />
    </div>
  );
};

export default LandingPage;

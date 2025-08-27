"use client";

import ServicesItemAbout from "@/components/sections/ServicesItemAbout";
import ServicesItemSection from "@/components/sections/ServicesItemSection";

const LandingPage = () => {
  return (
    <div className=" pb-[48px] md:pb-[64px]">
      <ServicesItemSection />
      <ServicesItemAbout />
    </div>
  );
};

export default LandingPage;

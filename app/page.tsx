import React from "react";

import HeroSection from "../components/sections/HeroSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import OutsourcingSection from "../components/sections/OutsourcingSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <OutsourcingSection />
      <ExperienceSection />
    </div>
  );
};

export default page;

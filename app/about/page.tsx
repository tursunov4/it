import AboutHeroSection from "@/components/sections/AboutHeroSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-[28px] mb-[64px]">
      <div className="container">
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C]  text-[12px] md:text-[14px] mb-4">
          <Link href={"/"}>Главная</Link> <span>/</span>{" "}
          <Link href={"#"}>О нас</Link>
        </div>
      </div>
      <AboutHeroSection />
      <PartnershipSection />
    </div>
  );
};

export default AboutPage;

"use client";

import api from "@/api/api";
import ServiceItemHeroSection from "@/components/sections/ServiceItemHeroSection";
import ServicesItemAbout from "@/components/sections/ServicesItemAbout";
import ServicesItemSection from "@/components/sections/ServicesItemSection";
import { ServiceType } from "@/types";
import { useEffect, useState } from "react";

const LandingPage = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<ServiceType | null>(null);

  useEffect(() => {
    api
      .get(`/uslugi/${params.slug}/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.slug]);
  return (
    <div className=" pb-[48px] md:pb-[64px]">
      <ServiceItemHeroSection data={data} />
      <ServicesItemSection />
      <ServicesItemAbout />
    </div>
  );
};

export default LandingPage;

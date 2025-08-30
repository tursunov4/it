"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: ["Прямо. Без вариантов..."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative h-[500px] md:h-[620px] w-full flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/herobg.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="font-semibold mx-auto max-w-[300px] md:max-w-full text-[46px] md:text-[88px] mb-[40px] md:mb-20px">
          От задачи <br className="md:hidden " /> – к решению.
        </h1>
        <p className="font-light text-[18px] md:text-[40px]">
          <noscript>Прямо. Без вариантов...</noscript>
          <span ref={el}></span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import api from "@/api/api";
import React, { use, useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<{ text: string }[]>([]);

  useEffect(() => {
    api
      .get("/policeprivase/terms/")
      .then((res) => setData(res.data))
      .catch((err) => [console.log(err)]);
  });
  return (
    <section className="py-[42px] md:py-[64px]">
      <div className="container">
        <h2 className="font-semibold text-[20px] md:text-[34px] mb-[20px] md:mb-[40px]">
          Условия использования
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: data[0]?.text || "" }}
          className="text-[16px] md:text-[18px]"
        />
      </div>
    </section>
  );
};

export default page;

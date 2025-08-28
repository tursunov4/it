"use client";
import Link from "next/link";
import TeamCard from "../../components/card/TeamCard";
import { useEffect, useState } from "react";
import api from "@/api/api";

const team = [
  {
    id: 1,
    name: "Иванов Иван",
    age: 27,
    description:
      "Уровень сервиса будет отслеживаться режиме. lorem dsafasdfas d sfa dasf asdf as df saf da sf as d fas das d sdfasdf asf a sdf asdfas dfa sdf asd f",
    image: "/images/team-placeholder.png", // o‘zingizning rasmingizni qo‘shasiz
  },
  {
    id: 2,
    name: "Иванов Иван",
    age: 27,
    description: "Уровень сервиса будет отслеживаться режиме.",
    image: "/images/team-placeholder.png",
  },
  {
    id: 3,
    name: "Иванов Иван",
    age: 27,
    description: "Уровень сервиса будет отслеживаться режиме.",
    image: "/images/team-placeholder.png",
  },
  {
    id: 4,
    name: "Иванов Иван",
    age: 27,
    description: "Уровень сервиса будет отслеживаться режиме.",
    image: "/images/team-placeholder.png",
  },
];

export default function AboutPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    api
      .get("/komanda/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="  min-h-[684px] pt-[14px] pb-[42px] md:pt-[28px] md:pb-[64px]  ">
      {/* Breadcrumb */}
      <div className="container">
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C]  text-[12px] md:text-[14px] mb-4">
          <Link href={"/"}>Главная</Link> <span>/</span>{" "}
          <Link href={"#"}>Наша команда</Link>
        </div>

        {/* Title */}
        <h2 className="font-semibold  mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Наша команда
        </h2>

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

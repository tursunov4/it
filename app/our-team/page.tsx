"use client";
import Link from "next/link";
import TeamCard from "../../components/card/TeamCard";
import { useEffect, useState } from "react";
import api from "@/api/api";
import { GroupType } from "@/types";

export default function AboutPage() {
  const [data, setData] = useState<GroupType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get("/komanda/");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching team:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className="min-h-[684px] pt-[14px] pb-[42px] md:pt-[28px] md:pb-[64px]">
      {/* Breadcrumb */}
      <div className="container">
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C] text-[12px] md:text-[14px] mb-4">
          <Link href={"/"}>Главная</Link> <span>/</span>{" "}
          <span>Наша команда</span>
        </div>

        {/* Title */}
        <h2 className="font-semibold mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Наша команда
        </h2>

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-[22px] bg-[#2A2830] h-[300px] animate-pulse"
                />
              ))
            : data?.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
        </div>
      </div>
    </section>
  );
}

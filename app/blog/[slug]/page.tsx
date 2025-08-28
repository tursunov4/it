// app/blog/[id]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const posts = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  title: "Конкуренция и технологии",
  excerpt:
    "Основными законами современного общества являются: свобода предпринимательства, право частной собственности...",
  date: "12.05.25",
  image: "/placeholder.png", // public papkaga placeholder qo'yishingiz mumkin
}));

export default function BlogDetailPage() {
  const router = useRouter();
  return (
    <div className=" min-h-screen py-10 text-white">
      <div className="container ">
        {/* Breadcrumb */}
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C]  text-[12px] md:text-[14px] mb-4">
          <Link href={"/"}>Главная</Link> <span>/</span>{" "}
          <Link href={"/blog"}>Блог</Link>
          <span>/</span> <Link href={"#"}>Конкуренция и it технологии</Link>
        </div>

        {/* Post Title */}
        <h1 className="font-semibold  mb-[20px] md:mb-[30px] text-[20px] md:text-[34px]">
          Конкуренция и it технологии
        </h1>

        {/* Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 md:mb-[48px]">
          <div className="w-full h-[300px] h-[490px] bg-white rounded-[16px] md:rounded-[22px]">
            <Image
              src="/placeholder.png"
              alt="Post image"
              width={200}
              height={200}
              className="opacity-70"
            />
          </div>
          <div>
            <div className="flex gap-1 mb-[28px] align-center">
              <Image
                width={13}
                height={13}
                src="/svg/pencil.svg"
                alt="pencil"
              />
              <span className="font-normal text-[13px] leading-[138%]">
                12.05.25
              </span>
            </div>
            <p className="font-normal leading-[138%] text-[12px] md:text-[16px]">
              Основными законами современного общества являются: свобода
              предпринимательства, право частной собственности и наличие
              конкурентной среды. Предпринимательство получает стабильность
              только в условиях конкуренции, а главное условие конкуренции —
              эффективность производства. Развивающиеся страны имеют
              нестабильный, слабеющий и недостаточный результат, основное
              использование ресурсов — человеческие и денежные ресурсы.
            </p>
          </div>
        </div>

        {/* Post Content */}
        <div className="font-normal mb-[42px]  md:mb-[64px] leading-[138%] text-[12px] md:text-[16px]">
          <p>
            Но наибольшей результативностью — обладают способности,
            инновационные решения и использование информационных технологий
            (ИТ). Для успешного развития бизнеса сегодня необходимо применение
            цифровых решений: CRM-системы, автоматизация процессов, обработка
            больших данных, искусственный интеллект, машинное обучение,
            электронная коммерция, цифровой маркетинг. Все это формирует новые
            конкурентные преимущества на современном рынке.
          </p>
          <p>
            Современные компании вынуждены адаптироваться к изменениям рынка,
            внедрять цифровые инструменты и развивать собственные инновационные
            решения. В этом контексте использование ИТ становится ключевым
            фактором для выживания и успешного развития предприятий.
          </p>
        </div>

        {/* Related posts */}
        <h2 className="font-semibold  pt-[42px] md:pt-[64px]   mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Может быть интересно
        </h2>
        <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#1E1C24] rounded-[22px] overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="w-full bg-white">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={320}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Content */}
              <div className=" p-5 md:p-[25px] flex flex-col ">
                <h2 className=" text-[16px]   leading-[138%] md:text-[20px] font-semibold  mb-3 md:mb-4">
                  {post.title}
                </h2>
                <p className="  text-[12px]  font-normal  leading-[138%] md:text-[16px] text-[#FFFFFFDB] mb-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center  gap-[6px] text-gray-400 leading-[144%] text-[10px] mb-3">
                  <Image
                    alt={"pencil"}
                    width={10}
                    height={10}
                    src={"/svg/pencil.svg"}
                  />
                  <span>{post.date}</span>
                </div>

                <button
                  onClick={() => router.push(`/blog/dasf`)}
                  className="  w-full justify-center flex items-center cursor-pointer gap-[10px]  btn-gradient  text-[14px]  transition-all duration-500  font-semibold md:text-[16px]  text-white  rounded-[14px]  p-[10px]  border border-[#FFA362]"
                >
                  Читать полностью
                  <Image
                    src={"/svg/btnicon.svg"}
                    alt={"btnicon"}
                    width={28}
                    height={28}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

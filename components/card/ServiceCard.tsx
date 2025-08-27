import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageMobile: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-[#FAFAFA] rounded-[22px] p-5 md:p-[30px] flex  gap-[26px] justify-between shadow-md hover:shadow-lg transition">
      {/* Title + description */}
      <div className=" flex flex-col justify-between w-full lg:w-[calc(100%-206px)]">
        <div>
          <h3 className=" font-semibold text-[15px] md:text-[20px] text-[#121212] mb-4 ">
            {service.title}
          </h3>
          <p className=" font-normal text-[12px] md:text-[16px] text-[#121212CC] ">
            {service.description}
          </p>
        </div>

        <div>
          <span className="block  w-full h-[1px]  bg-[#1212120F]  my-5 md:my-[30px]" />
          {/* Bullet points */}
          <ul className="list-disc list-inside space-y-1 font-normal text-[12px] md:text-[16px] text-[#121212CC] mb-4">
            {service.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <Image
            src={service.imageMobile}
            alt={service.title}
            width={280}
            height={120}
            className="  block lg:hidden w-full my-4 h-[120px]   "
          />

          <button className="  w-full md:w-auto justify-center flex items-center cursor-pointer gap-[10px]  btn-gradient  text-[14px]  transition-all duration-500  font-semibold md:text-[16px]  text-white  rounded-[14px]  p-[10px]  border border-[#FFA362]">
            Узнать подробнее
            <Image
              src={"/svg/btnicon.svg"}
              alt={"btnicon"}
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>

      <Image
        src={service.image}
        alt={service.title}
        width={180}
        height={287}
        className="  hidden lg:block w-[180px]   "
      />
    </div>
  );
}

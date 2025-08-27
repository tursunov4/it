import Image from "next/image";

type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
};

export default function ServicePriceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col md:flex-row justify-between md:gap-5 w-full">
      <div className="bg-[#FAFAFA] w-full md:w-[calc(100%-244px)] rounded-[16px]  md:rounded-[22px] p-5 md:p-[30px] shadow hover:shadow-lg transition">
        <h3 className=" font-semibold text-[16px]  md:text-[20px] text-[#121212] mb-3 md:mb-4">
          {service.title}
        </h3>
        <p className="font-normal text-[12px] md:text-[16px] text-[#121212CC]">
          {service.description}
        </p>
      </div>

      <div className=" flex  flex-col bg-[#FAFAFA] w-full md:w-[224px] rounded-2xl   rounded-[16px] md:rounded-[22px] p-[14px] flex flex-col   items-center gap-[12px] shadow hover:shadow-lg transition">
        <div className=" w-full p-[12px] rounded-[14px] border text-center border-[#FFA362] text-[#121212] font-semibold whitespace-nowrap">
          {service.price}
        </div>

        <button className="  w-full md:w-full justify-center flex items-center cursor-pointer gap-[10px]  btn-gradient  text-[14px]  transition-all duration-500  font-semibold md:text-[16px]  text-white  rounded-[14px]  p-[10px]  border border-[#FFA362]">
          Оставить заявку
          <Image
            src={"/svg/btnicon.svg"}
            alt={"btnicon"}
            width={28}
            height={28}
          />
        </button>
      </div>
    </div>
  );
}

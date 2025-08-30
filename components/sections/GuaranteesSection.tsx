import Image from "next/image";
import React from "react";

const GuaranteesSection = () => {
  return (
    <section className=" py-[42px] md:py-[64px]">
      <div className="container ">
        <div className=" rounded-[16px] md:rounded-[26px] grbg py-[42px] px-5 md:p-[44px] bg-white">
          <h2 className="text-[#121212]   text-[20px] md:text-[34px] font-semibold  mb-[20px] md:mb-[50px]">
            Какие гарантии вы получаете?
          </h2>

          <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Guarantee 1 */}
            <div className="rounded-[22px] p-5 md:p-[30px] lg:p-[40px] bg-[#F1F1F1] space-y-4">
              <div className="flex items-center justify-between">
                <Image
                  src={"/svg/gr1.svg"}
                  width={45}
                  height={30}
                  alt="gr"
                  className=" w-[45px] block h-[30px] md:w-[57px] md:h-[38px] "
                />
                <span className="font-bold text-[#12121233] text-[14px] md:text-[16px]">
                  01
                </span>
              </div>
              <h3 className=" text-[#121212] text-[15px] md:text-[20px] leading-[100%] font-semibold">
                Опыт работы 17 лет
              </h3>
              <p className="text-[#121212CC] font-normal  leading-[138%] text-[12px] md:text-[16px]">
                Опыт - залог понимания принципов построения и долговечной работы
                вверенных компании.
              </p>
            </div>
            <div className="rounded-[22px] p-5 md:p-[30px] lg:p-[40px] bg-[#F1F1F1] space-y-4">
              <div className="flex items-center justify-between">
                <Image
                  src={"/svg/g2.svg"}
                  width={45}
                  height={30}
                  alt="gr"
                  className=" w-[45px] block h-[30px] md:w-[57px] md:h-[38px] "
                />
                <span className="font-bold text-[#12121233] text-[14px] md:text-[16px]">
                  02
                </span>
              </div>
              <h3 className=" text-[#121212] text-[15px] md:text-[20px] leading-[100%] font-semibold">
                Мониторинг 24/7
              </h3>
              <p className="text-[#121212CC] font-normal  leading-[138%] text-[12px] md:text-[16px]">
                Мониторинг сервисов позволит быть уверенным в работоспособности
                бизнеса круглые сутки.
              </p>
            </div>
            <div className="rounded-[22px] p-5 md:p-[30px] lg:p-[40px] bg-[#F1F1F1] space-y-4">
              <div className="flex items-center justify-between">
                <Image
                  src={"/svg/gr3.svg"}
                  width={45}
                  height={30}
                  alt="gr"
                  className=" w-[45px] block h-[30px] md:w-[57px] md:h-[38px] "
                />
                <span className="font-bold text-[#12121233] text-[14px] md:text-[16px]">
                  03
                </span>
              </div>
              <h3 className=" text-[#121212] text-[15px] md:text-[20px] leading-[100%] font-semibold">
                Защита данных
              </h3>
              <p className="text-[#121212CC] font-normal  leading-[138%] text-[12px] md:text-[16px]">
                Настраиваем резервное копирование и используем приватные сети с
                VPN.
              </p>
            </div>
            <div className="rounded-[22px] p-5 md:p-[30px] lg:p-[40px] bg-[#F1F1F1] space-y-4">
              <div className="flex items-center justify-between">
                <Image
                  src={"/svg/gr4.svg"}
                  width={45}
                  height={30}
                  alt="gr"
                  className=" w-[45px] block h-[30px] md:w-[57px] md:h-[38px] "
                />
                <span className="font-bold text-[#12121233] text-[14px] md:text-[16px]">
                  04
                </span>
              </div>
              <h3 className=" text-[#121212] text-[15px] md:text-[20px] leading-[100%] font-semibold">
                Снижение затрат
              </h3>
              <p className="text-[#121212CC] font-normal  leading-[138%] text-[12px] md:text-[16px]">
                Экономия минимум 50 процентов стоимости услуг, делая выбор в
                сторону IT-аутсорсинга.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;

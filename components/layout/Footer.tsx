import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white py-[60px]">
      <div className="container">
        <div className=" pb-[20px] md:pb-[34px] grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Block 1 */}
          <div className="font-semibold text-[14px] flex flex-col gap-2">
            <Link href="/">Главная</Link>
            <Link href="/about" className="block">
              О нас
            </Link>
            <Link href="/pricing" className="block">
              Стоимость услуг
            </Link>
          </div>

          {/* Block 2 */}
          <div className="font-semibold text-[14px] flex flex-col gap-2">
            <Link href="/services" className="block">
              Наши услуги
            </Link>
            <Link href="/team" className="block">
              Наша команда
            </Link>
            <Link href="/blog" className="block">
              Блог
            </Link>
          </div>

          {/* Block 3 */}
          <div className="font-semibold text-[14px] flex flex-col gap-2">
            <Link href="/offer" className="block">
              Оферта
            </Link>
            <Link href="/privacy" className="block">
              Политика конфиденциальности
            </Link>
          </div>

          {/* Block 4 */}
          <div className="space-y-3 flex flex-col md:items-end md:text-end">
            <div>
              <p className="font-semibold  text-[16px] md:text-[22px]">
                +7 (909) 900-99-20
              </p>
              <p className="font-semibold  text-[16px] md:text-[22px]">
                go@email.ru
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://vk.com" target="_blank">
                <Image src={"/svg/vk.svg"} alt={"tg"} width={32} height={24} />
              </Link>
              <Link href="https://t.me" target="_blank">
                <Image src={"/svg/tg.svg"} alt={"tg"} width={32} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className=" px-4 mt-8 border-t border-[#FFFFFF29] pt-4  text-sm text-[#FFFFFF5C]">
          © 2025 Все права защищены
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger va close icon
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="container">
        <div className=" mx-auto flex items-center justify-between py-[21px]">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Главная
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex font-normal text-[16px] xl:gap-[44px] lg:gap-[20px]  items-center">
            <Link href="/about">О нас</Link>
            <Link href="/service">Наши услуги</Link>
            <Link href="/our-team">Наша команда</Link>
            <Link href="/pricing">Стоимость услуг</Link>
            <Link href="/blog">Блог</Link>
          </nav>
          <div className=" hidden md:flex items-center gap-[30px]">
            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <Link href="https://vk.com" target="_blank">
                <Image src={"/svg/vk.svg"} alt={"vk"} width={32} height={24} />
              </Link>
              <Link href="https://t.me" target="_blank">
                <Image src={"/svg/tg.svg"} alt={"tg"} width={32} height={24} />
              </Link>
            </div>

            {/* CTA Button */}
            <button className=" flex items-center cursor-pointer gap-[10px]  btn-gradient   transition-all duration-500  font-semibold text-[16px]  text-white  rounded-[14px] p-[10px]  border border-[#FFA362]">
              Задать вопрос
              <Image
                src={"/svg/btnicon.svg"}
                alt={"btnicon"}
                width={28}
                height={28}
              />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <Link href="/about" onClick={toggleMenu}>
            О нас
          </Link>
          <Link href="/service" onClick={toggleMenu}>
            Наши услуги
          </Link>
          <Link href="/our-team" onClick={toggleMenu}>
            Наша команда
          </Link>
          <Link href="/pricing" onClick={toggleMenu}>
            Стоимость услуг
          </Link>
          <Link href="/blog" onClick={toggleMenu}>
            Блог
          </Link>

          <div className="flex space-x-4">
            <Link href="https://vk.com" target="_blank">
              <Image src={"/svg/vk.svg"} alt={"vk"} width={32} height={24} />
            </Link>
            <Link href="https://t.me" target="_blank">
              <Image src={"/svg/tg.svg"} alt={"tg"} width={32} height={24} />
            </Link>
          </div>

          <Link
            href="/contact"
            className="block bg-orange-500 hover:bg-orange-600 text-center text-white px-4 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Задать вопрос
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

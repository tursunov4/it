"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger va close icon
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="container">
        <div className="mx-auto flex items-center justify-between py-[10px] md:py-[21px]">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            <Image src="/logo.png" alt="logo" width={60} height={60} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex font-normal text-[16px] xl:gap-[44px] lg:gap-[20px] items-center text-white">
            <Link href="/about">О нас</Link>
            <Link href="/service">Наши услуги</Link>
            <Link href="/our-team">Наша команда</Link>
            <Link href="/pricing">Стоимость услуг</Link>
            <Link href="/blog">Блог</Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-[30px]">
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
            <button
              onClick={() => openModal()}
              className="flex items-center cursor-pointer gap-[10px] btn-gradient transition-all duration-500 font-semibold text-[16px] text-white rounded-[14px] p-[10px] border border-[#FFA362]"
            >
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
            className="md:hidden flex items-center focus:outline-none text-white"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Image
                src={"/svg/hambur.svg"}
                alt={"hambur"}
                width={28}
                height={28}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden z-40 shadow-xl`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col space-y-6 px-6 text-[18px] font-normal">
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
        </nav>

        {/* Socials */}
        <div className="flex space-x-4 px-6 mt-8">
          <Link href="https://vk.com" target="_blank">
            <Image src={"/svg/vk.svg"} alt={"vk"} width={32} height={24} />
          </Link>
          <Link href="https://t.me" target="_blank">
            <Image src={"/svg/tg.svg"} alt={"tg"} width={32} height={24} />
          </Link>
        </div>

        {/* CTA Button */}
        <div className="px-6 mt-8">
          <button
            onClick={() => {
              openModal();
              toggleMenu();
            }}
            className="w-full flex items-center justify-center gap-[10px] btn-gradient font-semibold text-[16px] text-white rounded-[14px] py-3 border border-[#FFA362]"
          >
            Задать вопрос
            <Image
              src={"/svg/btnicon.svg"}
              alt={"btnicon"}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

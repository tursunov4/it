"use client";

import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";

export default function ThankYouModal() {
  const { thankYouOpen, closeThankYou } = useModal();

  if (!thankYouOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={closeThankYou} // tashqariga bosganda yopiladi
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative text-center"
        onClick={(e) => e.stopPropagation()} // ichiga bosganda yopilmaydi
      >
        <button
          onClick={closeThankYou}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-semibold mb-3">Спасибо!</h2>
        <p className="text-gray-600">
          Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
        </p>

        <button
          onClick={closeThankYou}
          className="w-full justify-center flex items-center cursor-pointer gap-[10px] btn-gradient text-[14px] transition-all duration-500 font-semibold md:text-[16px] text-white rounded-[14px] p-[10px] border border-[#FFA362]"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

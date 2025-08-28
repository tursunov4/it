"use client";

import api from "@/api/api";
import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  question: string;
  agree: boolean;
};

export default function ConsultationModal() {
  const { isOpen, closeModal, openThankYou } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await api.post("http://185.4.65.234/api/zayavki/create/", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.question, // APIga question -> message sifatida yuboriladi
      });

      reset(); // formani tozalash
      closeModal();
      openThankYou();
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white text-black rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close btn */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl md:text-2xl font-semibold text-center mb-5">
          Оставьте заявку и получите бесплатную консультацию
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full border rounded-lg px-3 py-2"
            {...register("name", { required: "Введите имя" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="tel"
            placeholder="Номер телефона"
            className="w-full border rounded-lg px-3 py-2"
            {...register("phone", { required: "Введите номер телефона" })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}

          <input
            type="email"
            placeholder="Ваша электронная почта"
            className="w-full border rounded-lg px-3 py-2"
            {...register("email", {
              required: "Введите email",
              pattern: { value: /^\S+@\S+$/i, message: "Неверный email" },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <textarea
            placeholder="Ваш вопрос"
            className="w-full border rounded-lg px-3 py-2"
            rows={3}
            {...register("question")}
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...register("agree", { required: "Необходимо согласие" })}
            />
            Я принимаю условия публичной оферты и выражаю согласие на обработку
            персональных данных
          </label>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree.message}</p>
          )}

          <button
            disabled={isSubmitting}
            className="w-full justify-center flex items-center cursor-pointer gap-[10px] btn-gradient text-[14px] transition-all duration-500 font-semibold md:text-[16px] text-white rounded-[14px] p-[10px] border border-[#FFA362] disabled:opacity-50"
          >
            {isSubmitting ? "Отправка..." : "Отправить"}
            {!isSubmitting && (
              <Image
                src={"/svg/btnicon.svg"}
                alt={"btnicon"}
                width={28}
                height={28}
              />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

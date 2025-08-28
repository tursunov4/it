"use client";

import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";
import { useState } from "react";

export default function ConsultationModal() {
  const { isOpen, closeModal, openThankYou } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
    openThankYou();
    // Bu joyda API ga jo'natishingiz mumkin
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white text-black rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close btn */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500  hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl md:text-2xl font-semibold text-center mb-5">
          Оставьте заявку и получите бесплатную консультацию
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full border rounded-lg px-3 py-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            className="w-full border rounded-lg px-3 py-2"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="Ваша электронная почта"
            className="w-full border rounded-lg px-3 py-2"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Ваш вопрос"
            className="w-full border rounded-lg px-3 py-2"
            rows={3}
            value={formData.question}
            onChange={(e) =>
              setFormData({ ...formData, question: e.target.value })
            }
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={formData.agree}
              onChange={(e) =>
                setFormData({ ...formData, agree: e.target.checked })
              }
              required
            />
            Я принимаю условия публичной оферты и выражаю согласие на обработку
            персональных данных
          </label>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
          >
            Отправить →
          </button>
        </form>
      </div>
    </div>
  );
}

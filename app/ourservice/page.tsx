"use client";
import React, { useState } from "react";
import Image from "next/image";

const LandingPage = () => {
  const [selectedService, setSelectedService] = useState("web-development");

  const services = [
    {
      id: "web-development",
      icon: "💻",
      title: "Веб-разработка",
      description:
        "Создание современных веб-приложений и сайтов с использованием передовых технологий",
    },
    {
      id: "mobile-apps",
      icon: "📱",
      title: "Мобильные приложения",
      description:
        "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android",
    },
    {
      id: "devops",
      icon: "⚙️",
      title: "DevOps и администрирование",
      description:
        "Настройка и поддержка серверной инфраструктуры, автоматизация процессов развертывания",
    },
    {
      id: "testing",
      icon: "🧪",
      title: "Тестирование ПО",
      description:
        "Комплексное тестирование программного обеспечения, автоматизация тестирования",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              ИТ-аутсорсинг – ваш удаленный
              <span className="text-orange-400"> ИТ-отдел</span> от 30 000
              ₽/мес.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Профессиональная разработка, поддержка и развитие ваших ИТ-решений
              силами опытной команды разработчиков
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Получить консультацию
              </button>
              <button className="border border-gray-600 hover:border-orange-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Узнать подробнее
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded w-3/4"></div>
                <div className="h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded w-1/2"></div>
                <div className="h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded w-5/6"></div>
              </div>
              <div className="mt-8 bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">
                    Система работает
                  </span>
                </div>
                <div className="text-2xl font-bold text-orange-400">99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
            Что входит в услугу?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-black rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Доверьте ИТ-обслуживание нам, мы получаете:
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-sm">Экспертов в команде</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm">Техническая поддержка</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm">Лет на рынке услуг</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm">Успешных проектов</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 text-black max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">
                Оставьте заявку на консультацию
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                />
                <textarea
                  placeholder="Опишите вашу задачу"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Server Rack Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
                <div className="grid grid-cols-3 gap-4 h-96">
                  <div className="bg-gray-700 rounded border-2 border-gray-600 flex flex-col">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 border-b border-gray-600 last:border-b-0 bg-gradient-to-r from-gray-600 to-gray-700 m-1 rounded-sm"
                      ></div>
                    ))}
                  </div>
                  <div className="bg-gray-700 rounded border-2 border-gray-600 flex flex-col">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 border-b border-gray-600 last:border-b-0 bg-gradient-to-r from-gray-600 to-gray-700 m-1 rounded-sm"
                      ></div>
                    ))}
                  </div>
                  <div className="bg-gray-700 rounded border-2 border-gray-600 flex flex-col">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 border-b border-gray-600 last:border-b-0 bg-gradient-to-r from-gray-600 to-gray-700 m-1 rounded-sm"
                      ></div>
                    ))}
                    <div className="h-16 bg-gray-800 rounded m-1 flex items-center justify-center">
                      <div className="w-8 h-4 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Профессиональный ИТ-аутсорсинг
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Наша компания предоставляет полный спектр ИТ-услуг для бизнеса
                  любого масштаба. Мы берем на себя все технические задачи,
                  позволяя вам сосредоточиться на развитии основного направления
                  деятельности.
                </p>
                <p>
                  В нашей команде работают опытные разработчики, системные
                  администраторы, DevOps-инженеры и специалисты по
                  информационной безопасности. Мы используем современные
                  технологии и следуем лучшим практикам разработки.
                </p>
                <p>
                  Предлагаем гибкие модели сотрудничества: от отдельных проектов
                  до полного ИТ-аутсорсинга. Наш подход основан на понимании
                  бизнес-потребностей клиента и предоставлении оптимальных
                  технических решений.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

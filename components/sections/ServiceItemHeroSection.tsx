import React from "react";

const ServiceItemHeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            ИТ-аутсорсинг – ваш удаленный
            <span className="text-orange-400"> ИТ-отдел</span> от 30 000 ₽/мес.
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
                <span className="text-sm text-gray-300">Система работает</span>
              </div>
              <div className="text-2xl font-bold text-orange-400">99.9%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItemHeroSection;

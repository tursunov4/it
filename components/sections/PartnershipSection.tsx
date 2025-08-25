import React from "react";

const PartnershipSection = () => {
  return (
    <section className="bg-black text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
          Сотрудничать с нами это:
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Partnership Item 1 */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mx-auto transform rotate-12">
              <div className="w-12 h-12 bg-white rounded transform -rotate-12 flex items-center justify-center">
                <span className="text-orange-500 text-xl font-bold">📊</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Надёжно</h3>
            <p className="text-gray-400 leading-relaxed">
              Стабильные и проверенные решения на основе лучших практик
              индустрии. Каждый проект реализуется с соблюдением высочайших
              стандартов качества.
            </p>
          </div>

          {/* Partnership Item 2 */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">👥</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Удобно</h3>
            <p className="text-gray-400 leading-relaxed">
              Простота в использовании наших решений позволяет быстро
              интегрировать системы автоматизации в ваши рабочие процессы.
            </p>
          </div>

          {/* Partnership Item 3 */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white text-2xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold">Выгодно</h3>
            <p className="text-gray-400 leading-relaxed">
              Автоматизация тестирования значительно снижает временные и
              финансовые затраты, повышая эффективность разработки.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-lg">
            Связаться с нами →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;

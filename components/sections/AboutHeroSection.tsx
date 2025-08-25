import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">О нас</h1>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Компания АУТЕСТ существует с 2017 года, поэтому у нас большой опыт
              в сфере автоматизации тестирования и разработки программного
              обеспечения. Наша команда состоит из опытных специалистов, которые
              помогут вам достичь целей в области качества ПО.
            </p>
            <p>
              Мы предоставляем специализированные консультации по вопросам
              автоматизации тестирования, разработке и внедрению систем
              обеспечения качества. Наши услуги включают в себя: анализ текущих
              процессов тестирования, разработку стратегий автоматизации,
              внедрение современных инструментов и методологий тестирования.
            </p>
            <p>
              Мы работаем с различными технологиями и инструментами
              автоматизации: Selenium, Cypress, TestNG, JUnit, Maven, Gradle и
              многими другими. Наш подход основан на лучших практиках индустрии
              и адаптирован под специфику каждого проекта. Мы помогаем компаниям
              оптимизировать процессы тестирования и повысить качество
              выпускаемого программного продукта.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
            <div className="grid grid-cols-3 gap-4 h-96">
              {/* Server Racks Mockup */}
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
      </div>
    </section>
  );
};

export default AboutHeroSection;

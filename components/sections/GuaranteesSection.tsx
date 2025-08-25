import React from "react";

const GuaranteesSection = () => {
  return (
    <section className="bg-white text-black py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
          Какие гарантии вы получаете?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Guarantee 1 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">17</span>
            </div>
            <h3 className="text-xl font-semibold">Опыт работы 17 лет</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Опыт - залог надёжности. Мы специализируемся на автоматизации
              тестирования более семнадцати лет.
            </p>
          </div>

          {/* Guarantee 2 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">24/7</span>
            </div>
            <h3 className="text-xl font-semibold">Мониторинг 24/7</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Мониторинг процессов тестирования работает 24 часа в сутки,
              обеспечивая стабильность вашей системы.
            </p>
          </div>

          {/* Guarantee 3 */}
          <div className="text-center space-y-4 relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold">Защита данных</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Все данные о тестировании надёжно защищены и хранятся в
              зашифрованном виде согласно международным стандартам.
            </p>
          </div>

          {/* Guarantee 4 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold">Соблюдение актов</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Мы гарантируем соблюдение всех актов и договорённостей,
              обеспечивая прозрачность процессов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;

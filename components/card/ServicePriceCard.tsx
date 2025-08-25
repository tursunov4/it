import { ArrowRight } from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
};

export default function ServicePriceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow hover:shadow-lg transition">
      <div>
        <h3 className="text-lg font-semibold text-black mb-1">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600">{service.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <span className="text-black font-semibold whitespace-nowrap">
          {service.price}
        </span>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
          Оставить заявку
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

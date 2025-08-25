import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  points: string[];
  image: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition">
      {/* Title + description */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{service.description}</p>

        {/* Bullet points */}
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
          {service.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Bottom: button + image */}
      <div className="flex items-end justify-between mt-auto">
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
          Узнать подробнее
          <ArrowRight className="w-4 h-4" />
        </button>
        <div className="w-28 h-28 relative">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

import { GroupType } from "@/types";
import Image from "next/image";

export default function TeamCard({ member }: { member: GroupType }) {
  return (
    <div className="rounded-[16px] md:rounded-[22px] bg-[#1E1C24] shadow-md hover:shadow-lg transition w-full overflow-hidden">
      {/* Image */}
      <div className="w-full h-[228px]">
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={228}
          className="w-full h-full object-cover rounded-t-[22px]"
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
      </div>

      {/* Info */}
      <div className="p-5 md:p-[28px] text-white">
        <p className="font-semibold text-[15px] md:text-[20px]">
          {member.name} / {member.age} лет
        </p>
        <p className="text-sm font-normal text-[12px] md:text-[16px] text-[#FFFFFFDB] mt-2">
          {member.position}
        </p>
      </div>
    </div>
  );
}

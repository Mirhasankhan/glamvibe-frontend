import { TService } from "@/types/common";
import { AlarmClock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Card = ({ service }: { service: TService }) => {
  return (
    <Link href={`/services/${service.id}`}  key={service.id} className="relative border-2 p-1">
      <Image
        className="object-cover h-[300px] w-full"
        src={service.imageUrls[0]}
        width={400}
        height={300}
        alt=""
      ></Image>
      <div className="p-2">
        <div className="flex items-center gap-2">
          <FaStar className="text-orange-300"></FaStar>
          <h1 className="font-medium">2 Review</h1>
        </div> 
         <p className="text-xl py-1">{service.serviceName}</p>
        <div className="flex justify-between items-center">
          <p className="font-medium">${service.price}</p>
          <div className="flex gap-1 items-center">
            <AlarmClock size={15}></AlarmClock>
            <p>1 hours</p>
          </div>
        </div>       
      </div>
      <div className="right-8 top-12 absolute">
        <Eye className="text-white"></Eye>
      </div>
    </Link>
  );
};

export default Card;

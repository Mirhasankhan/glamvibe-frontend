import { TService } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ service }: { service: TService }) => {
  return (
    <div key={service.id}>
      <Image src={service.imageUrls[0]} width={400} height={300} alt=""></Image>
      <p>{service.serviceName}</p>
      <Link href="/book-appointment">
        <button>Book Now</button>
      </Link>
    </div>
  );
};

export default Card;

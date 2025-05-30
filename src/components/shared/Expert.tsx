import { TExprt } from "@/types/common";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Expert = ({ experts }: { experts: TExprt[] }) => {
  return (
    <>
      {experts?.map((expert: TExprt) => (
        <div key={expert.id} className="relative group">
          <Image alt="expert" height={300} width={500} src={expert.imageUrl} />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4 text-white text-xl">
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaInstagram className="hover:text-primary cursor-pointer" />
              <FaTwitter className="hover:text-primary cursor-pointer" />
            </div>
          </div>
          <div className="bg-white text-center py-6 border-b-[6px] border-primary shadow-md ">
            <h1 className="text-xl">{expert.name}</h1>
            <p>{expert.category.categoryName} Expert</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Expert;

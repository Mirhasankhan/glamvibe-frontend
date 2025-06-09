"use client";
import Profile from "@/components/profile/Profile";
import { useCategoriesQuery } from "@/redux/features/services/services.api";
import { TCategory } from "@/types/common";
import { JWTDecode } from "@/utils/jwt";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavMenu = () => {
  const [show, setShow] = useState(false);
  const { data: categories } = useCategoriesQuery("");
  const { decoded } = JWTDecode();

  return (
    <div className="relative flex items-center gap-12 dark:text-black text-sm font-medium uppercase">
      <Link className="hover:text-primary p-2 rounded-lg" href="/">
        Home
      </Link>
      <Link
        onMouseOver={() => setShow(!show)}
        className="hover:text-primary"
        href="/services"
      >
        Services
      </Link>
      <Link className="hover:text-primary" href="/">
        News
      </Link>
      <Link className="hover:text-primary" href="/">
        Contact Us
      </Link>
      {decoded?.email ? (
        <div>
          <Profile></Profile>
        </div>
      ) : (
        <Link className="hover:text-primary" href="/login">
          Sign In
        </Link>
      )}
      {show && (
        <div className="z-20 absolute top-12   bg-white pr-12 shadow-md border-2 border-primary rounded-xl  p-4 grid grid-cols-2 gap-6">
          {categories?.result?.map((category: TCategory) => (
            <Link
              href={{
                pathname: "/services",
                query: {
                  category: `${category.id}`,
                },
              }}
              className="space-y-3 hover:bg-primary p-2 cursor-pointer rounded-xl hover:text-primary hover:bg-opacity-40"
              key={category.id}
            >
              <div className="flex items-center gap-1">
                <Image
                  alt=""
                  src={category.mediaUrls[0]}
                  height={20}
                  width={20}
                ></Image>
                <p>hello</p>
              </div>
              <h1 className="text-xs text-gray-400">
                {category.overview} Lorem ipsum dolor sit amet con
              </h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavMenu;

// HAIR_COLOR
//   FACE_MAKEUP
//   BLEACH_WAXING
//   HAIR_STYLING

"use client";
import Link from "next/link";
import { useState } from "react";

const NavMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex items-center gap-12 dark:text-black text-sm font-medium uppercase">
      <Link className="hover:text-primary" href="/">
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
      <Link className="hover:text-primary" href="/login">Sign In</Link>
      {show && (
        <div className="absolute top-12 left-20 bg-white pr-12 shadow-md border-t-2 border-primary  p-4 flex flex-col">
          <Link
            className="hover:text-primary hover:pl-2 border-b pb-2 transition-all duration-800"
            href="/"
          >
            Hair Color
          </Link>
          <Link
            className="hover:text-primary hover:pl-2 border-b py-2 transition-all duration-800"
            href="/"
          >
            Face Makeup
          </Link>
          <Link
            className="hover:text-primary hover:pl-2 border-b py-2 transition-all duration-800"
            href="/"
          >
            Hair Styling
          </Link>
          <Link
            className="hover:text-primary hover:pl-2 border-b pt-2 transition-all duration-800"
            href="/"
          >
            Bleach Waxing
          </Link>
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

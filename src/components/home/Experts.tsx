import Container from "@/utils/Container";
import ex1 from "../../assets/expert1.jpg";
import ex2 from "../../assets/expert2.jpg";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Experts = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold text-center mb-8">MEET OUR EXPERTS</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4 2xl:grid-cols-5">
        <div className="relative group">
          {/* Expert Image */}
          <Image alt="expert" height={300} width={500} src={ex1.src} className="w-full h-auto object-cover" />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4 text-white text-xl">
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaInstagram className="hover:text-primary cursor-pointer" />
              <FaTwitter className="hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Name and Role */}
          <div className="left-8 bg-white text-center text-xl py-6 -bottom-12 border-t-[6px] border-primary shadow-sm w-3/4 absolute">
            <h1>Jamie Patrick</h1>
            <p>Hair Stylist</p>
          </div>
        </div>
        <div className="relative group">
          {/* Expert Image */}
          <Image alt="expert" height={300} width={500} src={ex2.src} className="w-full h-auto object-cover" />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4 text-white text-xl">
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaInstagram className="hover:text-primary cursor-pointer" />
              <FaTwitter className="hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Name and Role */}
          <div className="left-8 bg-white text-center text-xl py-6 -bottom-12 border-t-[6px] border-primary shadow-sm w-3/4 absolute">
            <h1>Jamie Patrick</h1>
            <p>Hair Stylist</p>
          </div>
        </div>
        <div className="relative group">
          {/* Expert Image */}
          <Image alt="expert" height={300} width={500} src={ex1.src} className="w-full h-auto object-cover" />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4 text-white text-xl">
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaInstagram className="hover:text-primary cursor-pointer" />
              <FaTwitter className="hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Name and Role */}
          <div className="left-8 bg-white text-center text-xl py-6 -bottom-12 border-t-[6px] border-primary shadow-sm w-3/4 absolute">
            <h1>Jamie Patrick</h1>
            <p>Hair Stylist</p>
          </div>
        </div>
        <div className="relative group">
          {/* Expert Image */}
          <Image alt="expert" height={300} width={500} src={ex2.src} className="w-full h-auto object-cover" />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4 text-white text-xl">
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaInstagram className="hover:text-primary cursor-pointer" />
              <FaTwitter className="hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Name and Role */}
          <div className="left-8 bg-white text-center text-xl py-6 -bottom-12 border-t-[6px] border-primary shadow-sm w-3/4 absolute">
            <h1>Jamie Patrick</h1>
            <p>Hair Stylist</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experts;

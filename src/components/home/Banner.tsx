import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import image1 from "../../assets/banner2.avif";
import image2 from "../../assets/banner.jpg";
import image3 from "../../assets/banner.avif";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const banners = [
  {
    id: 1,
    subHeading: "Best Place For You",
    heading: " SPA AND BEAUTY SALON",
    buttonText: "Get Appointment",
    image: `url(${image1.src})`,
  },
  {
    id: 2,
    subHeading: "Luxury Spa Service",
    heading: "EXCLUSIVE CARE FOR YOUR FACE",
    buttonText: "Get Appointment",
    image: `url(${image2.src})`,
  },
  {
    id: 3,
    subHeading: "Revitalizing Message ",
    heading: "EXPERT HAIR STYLING",
    buttonText: "Get Appointment",
    image: `url(${image3.src})`,
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={banners[index].id}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-full h-[600px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: banners[index].image }}
        >
          <div className="text-white h-full flex flex-col gap-6 items-center justify-center w-full bg-black bg-opacity-50 p-6 rounded-lg text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              <p
                style={{ fontFamily: "Dancing Script" }}
                className="italic text-primary text-3xl"
              >
                {banners[index].subHeading}
              </p>
              <h1 className="text-6xl py-5 font-medium text-white">
                {banners[index].heading}
              </h1>
              <Link href="/book-appointment">
                <button className="px-4 py-2 bg-primary font-medium border-primary border">
                  {banners[index].buttonText} <ArrowRight className="inline" size={20}></ArrowRight>
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;

"use client";
import Container from "@/utils/Container";
import img1 from "../../assets/testimonial-4-1.jpg";
import img2 from "../../assets/js.jpg";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Hoque",
    title: "Actress & Model",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam sunt aliquid ipsum consequuntur nesciunt repellendus...",
    image: img2.src,
  },
  {
    name: "Mizan Rahman",
    title: "Fashion Photographer",
    text: "Cupiditate placeat similique consectetur voluptates quam labore, corporis nobis accusantium possimus, ipsam facilis, dolor ratione.",
    image: img2.src,
  },
  {
    name: "Nasima Akter",
    title: "Influencer",
    text: "Quidem, accusantium ut a porro rerum voluptate id ducimus eos impedit iure officia possimus harum placeat nihil.",
    image: img2.src,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-12">
        {/* Left Side Image */}
        <div>
          <img src={img1.src} alt="Testimonial Visual" className="w-full rounded-xl" />
        </div>

        {/* Right Side Testimonial */}
        <div>
          <h2 className="text-primary text-xl">Our Testimonials</h2>
          <h1 className="text-4xl font-medium py-3">What People Talk About Us</h1>

          {/* Carousel Viewport */}
          <div className="relative w-full overflow-hidden">
            <div className="w-[370px] md:w-[580px] overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${index * 82}%` }}
                transition={{ type: "spring", stiffness: 80 }}
                style={{ gap: "1.5rem" }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="min-w-[82%] max-w-[82%] bg-white border p-6 rounded-lg shadow"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex text-primary gap-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-700" />
                      </div>
                      <Quote size={32} />
                    </div>
                    <p className="py-4 text-gray-700 text-sm md:text-base">{t.text}</p>
                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <h1 className="font-medium text-lg md:text-xl pb-1">{t.name}</h1>
                        <p className="text-sm text-gray-500">{t.title}</p>
                      </div>
                      <img
                        className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover"
                        src={t.image}
                        alt={t.name}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start gap-4 mt-6">
            <button
              onClick={prev}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
            >
              Previous
            </button>
            <button
              onClick={next}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;

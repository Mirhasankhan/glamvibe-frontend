"use client";
import Banner from "@/components/home/Banner";
import Benefits from "@/components/home/Benefits";
import BestServices from "@/components/home/BestServices";
import Experts from "@/components/home/Experts";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
// import Welcome from "@/components/home/Welcome";
import WhyUs from "@/components/home/WhyUs";

import { useTheme } from "next-themes";

const HOmePage = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <BestServices></BestServices>
      <Benefits></Benefits>
      <WhyUs></WhyUs>
      {/* <Welcome></Welcome> */}
      <Testimonial></Testimonial>
      <Experts></Experts>
      <h1 className="text-4xl text-red-700">Hello</h1>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default HOmePage;

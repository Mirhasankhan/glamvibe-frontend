"use client";
import Banner from "@/components/home/Banner";
import BestServices from "@/components/home/BestServices";
import Welcome from "@/components/home/Welcome";
import WhyUs from "@/components/home/WhyUs";


import { useTheme } from "next-themes";

const HOmePage = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>  
      <BestServices></BestServices>    
      <WhyUs></WhyUs>
      <h1 className="text-4xl text-red-700">Hello</h1>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default HOmePage;

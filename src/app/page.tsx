"use client"
import { useTheme } from "next-themes";

const HOmePage = () => {
  const { setTheme } = useTheme();
 
  return (
    <div>
      <h1 className="text-4xl text-red-700">Hello</h1>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default HOmePage;

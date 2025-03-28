"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const Verify = ({ setActive }: { setActive: (value: string) => void }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const numberCode = parseInt(code.join(""), 10);
    console.log(numberCode);
    setActive("reset");
    alert(`Code verified: ${code.join("")}`);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-medium pb-4">Password Reset Request</h1>
      <p>
        We sent a code to{" "}
        <span className="font-medium">mirhasan000034@gmail.com</span>
      </p>
      <h2 className="text-lg font-bold mb-4">Enter 4-digit Code</h2>
      <div className="flex space-x-2">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            className="border p-2 w-16 h-16 text-center text-lg rounded-xl"
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={code.join("").length !== 4}
        className={`mt-4 px-4 py-2 rounded text-white font-bold ${
          code.join("").length === 4
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300"
        }`}
      >
        Verify
      </button>
      <Link href="/login" className="flex items-center gap-1 pt-6">
        <ArrowLeft size={15} /> Back to login
      </Link>
    </div>
  );
};

export default Verify;

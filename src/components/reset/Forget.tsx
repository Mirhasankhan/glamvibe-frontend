"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { ArrowLeft, Loader } from "lucide-react";
import { TLoginValues } from "@/types/common";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const ForgetPassword = ({ setActive }: { setActive: (value: string) => void })=> {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>();

  const onSubmit: SubmitHandler<TLoginValues> = async (data) => {
    console.log(data);
    setActive("verify")
    toast.success("An otp was sent to your email")
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <h1 className="text-xl font-medium">Forget Password?</h1>
      <p>No worries, we will send you reset instructions.</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg pt-6  bg-white"
      >
        <div className="mb-4">
          <label className="block font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            className="w-[430px] p-2 border rounded-md"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-[#ff84b4] text-white py-3 w-full font-medium rounded-md"
        >
          {isLoading ? (
            <Loader className="animate-spin mx-auto"></Loader>
          ) : (
            "Send OTP"
          )}
        </button>
      </form>
     <Link href="/login" className="flex items-center gap-1 pt-6">
     <ArrowLeft size={15}/> Back to login
     </Link>
    </div>
  );
};

export default ForgetPassword;

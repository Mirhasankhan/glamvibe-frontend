"use client";

import { useForm, SubmitHandler } from "react-hook-form";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader } from "lucide-react";
import logo from "../../assets/fya2.png";
import Image from "next/image";
import { TLoginValues } from "@/types/common";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>();

  const onSubmit: SubmitHandler<TLoginValues> = async (data) => {
    console.log(data);

    setIsLoading(true);
    // const response = await loginAdmin(loginData);

    // if (response.data?.success == true) {

    //   localStorage.setItem("token", response.data.result.accessToken);

    //   toast.success(response.data.message);
    //   router.push("/dashboard/admin");
    //   setIsLoading(false);
    // } else if (response.error) {
    //   toast.error("Invalid Email or password");
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="w-full md:w-1/3 mx-auto  p-2 my-4 dark:text-white">
      <Image src={logo} alt="" height={40} width={40}></Image>
      <h1 className="text-xl font-medium ppy-2 ">Create Account</h1>
      <p className="text-sm">
        Enter to get unlimited access to data & information
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg pt-6 bg-white"
      >
        <div className="mb-4">
          <label className="block font-medium">User Name</label>
          <input
            {...register("username", {
              required: "Username is required",
            })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
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
            "Create Account"
          )}
        </button>
      </form>
      <div className="flex items-center justify-center my-4">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">Or, Login with</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="bg-white flex items-center gap-2 justify-center border py-3 w-full rounded-md"
      >
        <FcGoogle size={20} /> Sign Up With Google
      </button>
      <div className="text-center pt-2">
        Already have an account?
        <Link
          href="/login"
          className="text-[#ff84b4] hover:underline"
        >
          login
        </Link>
      </div>
    </div>
  );
};

export default Register;

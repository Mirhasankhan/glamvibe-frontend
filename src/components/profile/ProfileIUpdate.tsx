"use client";

import { IFormInput } from "@/types/common";
import { useForm, SubmitHandler } from "react-hook-form";

const ProfileUpdate = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    reset();
    console.log(data);
  };

  return (
    <div>
      <div className="bg-white rounded-md mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-6 my-3">
            <div className="w-full">
              <label className="font-medium pb-2 block" htmlFor="">
                Full Name
              </label>
              <input
                className="input-design"
                type="text"
                placeholder="Input your full name"
                {...register("username")}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="font-medium pb-2 block" htmlFor="">
              Email
            </label>
            <input className="input-design" type="email" readOnly />
          </div>
          <div className="w-full mt-3">
            <label className="font-medium pb-2 block" htmlFor="">
              Phone Number
            </label>
            <input
              className="input-design"
              type="number"
              placeholder="enter your phone number"
              {...register("phone")}
            />
          </div>
          <div className="w-full mt-3">
            <label className="font-medium pb-2 block" htmlFor="">
              Address
            </label>
            <input
              className="input-design"
              type="text"
              placeholder="enter your address"
              {...register("address")}
            />
          </div>

          <div className="flex gap-6 mt-6 items-center justify-start">
            <button
              type="submit"
              className="text-primary bg-white border w-full py-3 rounded-xl font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;

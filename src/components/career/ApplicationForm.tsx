import { useApplyMutation } from "@/redux/features/career/career.api";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  expectedSalary: string;
  experience: string;
  education: string;
};

const ApplicationForm = () => {
  const [apply, { isLoading }] = useApplyMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [imageFile, setImageFile] = useState<File | null>(null);

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("bodyData", JSON.stringify(data));

    if (imageFile) {
      formData.append("files", imageFile);
    }

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    const response = await apply({id:"6862361b87a1a7197adbbb5a",data:formData});
    console.log(response);

    reset();
    setImageFile(null);
  };

  return (
    <div>
      <h1 className="text-xl font-medium py-3">Apply for this position </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <input
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Full Name"
            className="input-design"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="input-design"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="number"
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Enter phone number"
            className="input-design"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Expected Salary */}
        <div>
          <input
            type="number"
            {...register("expectedSalary", {
              required: "Expected salary is required",
            })}
            placeholder="Expected Salary"
            className="input-design"
          />
          {errors.expectedSalary && (
            <p className="text-red-500 text-sm mt-1">
              {errors.expectedSalary.message}
            </p>
          )}
        </div>

        {/* Experience */}
        <div>
          <input
            {...register("experience", { required: "Experience is required" })}
            placeholder="Experience"
            className="input-design"
          />
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience.message}
            </p>
          )}
        </div>

        {/* Education */}
        <div>
          <input
            {...register("education", { required: "Education is required" })}
            placeholder="Education"
            className="input-design"
          />
          {errors.education && (
            <p className="text-red-500 text-sm mt-1">
              {errors.education.message}
            </p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="input-design"
          />
          {/* Optionally show a small message if no file selected */}
          {!imageFile && (
            <p className="text-gray-500 text-sm mt-1">
              Only PDF files allowed.
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [imageFile, setImageFile] = useState<File | null>(null);

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append("bodyData", JSON.stringify(data));

    if (imageFile) {
      formData.append("files", imageFile);
    }

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    reset();
    setImageFile(null);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <input
        {...register("fullName", { required: "Full name is required" })}
        placeholder="Full Name"
        className="input-design"
      />
      {errors.fullName && (
        <p className="text-red-500">{errors.fullName.message}</p>
      )}

      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
        className="input-design"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        {...register("phone", { required: "Phone number is required" })}
        placeholder="Phone"
        className="input-design"
      />
      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

      <input
        {...register("expectedSalary", {
          required: "Expected salary is required",
        })}
        placeholder="Expected Salary"
        className="input-design"
      />
      {errors.expectedSalary && (
        <p className="text-red-500">{errors.expectedSalary.message}</p>
      )}

      <input
        {...register("experience", { required: "Experience is required" })}
        placeholder="Experience"
        className="input-design"
      />
      {errors.experience && (
        <p className="text-red-500">{errors.experience.message}</p>
      )}

      <input
        {...register("education", { required: "Education is required" })}
        placeholder="Education"
        className="input-design"
      />
      {errors.education && (
        <p className="text-red-500">{errors.education.message}</p>
      )}

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setImageFile(e.target.files?.[0] || null)}
        className="input-design"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ApplicationForm;

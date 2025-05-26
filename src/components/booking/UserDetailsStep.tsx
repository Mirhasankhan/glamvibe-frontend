import React from "react";
import { useForm } from "react-hook-form";

interface UserDetailsStepProps {
  onNext: () => void;
  onSubmit: (userDetails: {
    userName: string;
    userEmail: string;
    userPhone: string;
  }) => void;
}

const UserDetailsStep: React.FC<UserDetailsStepProps> = ({
  onNext,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    userName: string;
    userEmail: string;
    userPhone: string;
  }>();

  const handleFormSubmit = (data: {
    userName: string;
    userEmail: string;
    userPhone: string;
  }) => {
    onSubmit(data);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Details</h2>
        <p className="text-gray-600">
          Please provide your contact information for the appointment
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-4 max-w-md mx-auto"
      >
        {/* Name Field */}
        <div className="space-y-2">
          <label className="block font-medium">Full Name</label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your full name"
            {...register("userName", { required: "Name is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.userName && (
            <p className="text-red-500 text-sm">{errors.userName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Email</label>
          <input
            id="userEmail"
            type="email"
            placeholder="Enter your email address"
            {...register("userEmail", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email",
              },
            })}
            className={`w-full p-3 border-2 rounded-lg transition-colors ${
              errors.userEmail
                ? "border-red-300 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
          {errors.userEmail && (
            <p className="text-red-500 text-sm">{errors.userEmail.message}</p>
          )}
        </div>      
        <div className="space-y-2">
             <label className="block font-medium">Phone Number</label>
          <input
            id="userPhone"
            type="tel"
            placeholder="Enter your phone number"
            {...register("userPhone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
            className={`w-full p-3 border-2 rounded-lg transition-colors ${
              errors.userPhone
                ? "border-red-300 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
          {errors.userPhone && (
            <p className="text-red-500 text-sm">{errors.userPhone.message}</p>
          )}
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="px-6 items-center bg-primary text-xl text-white py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Summary
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsStep;

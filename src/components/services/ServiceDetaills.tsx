import { Star } from "lucide-react";
import React from "react";

const ServiceDetaills = ({ service }: { service: any }) => {
  console.log(service);
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-medium">{service?.result?.serviceName}</h1>
      <div className="flex py-3 items-center gap-1">
        <Star className="text-orange-500" size={20}></Star> <h1 className="font-medium">{service?.result?.avgRating || "5"}</h1> (5 bookings)
      </div>
      <h1 className="py-4 text-2xl font-medium text-primary">
        Service Fee: {service?.result?.price}
      </h1>
      <h1>Category: {service?.result?.category?.categoryName}</h1>
      <h1 className="py-2">
        {service?.result?.description}jflskdfjl Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quo pariatur nemo accusantium amet
        quisquam possimus voluptates, ipsa sint? Velit provident eaque error
        accusantium assumenda quae nihil laboriosam officia obcaecati a?
      </h1>

      <button className="bg-primary text-white px-6 py-2 rounded-xl mt-6">
        Book Appointment
      </button>
    </div>
  );
};

export default ServiceDetaills;

import Container from "@/utils/Container";
import { Clock, MapPin } from "lucide-react";
import React from "react";

const SubHeader = () => {
  return (
    <div className="bg-[#282c3c]">
      <Container>
        <div className="flex justify-between items-center ">
          <div className="flex justify-between gap-8">
            <div className="flex items-center gap-2 border-r pr-8">
              <MapPin className="text-primary font-medium" size={15} />
              <h1 className="font-medium text-sm text-white">24 Tech Roqad st Ny 10023</h1>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-primary font-medium" size={15} />
              <h1 className="font-medium text-sm text-white">2Mon-Sat: 9am to 6pm</h1>
            </div>
          </div>
          <div>
            <button className="bg-primary p-3 text-sm font-medium ">
              Get An Appointment
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubHeader;

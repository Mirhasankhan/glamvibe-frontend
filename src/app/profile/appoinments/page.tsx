"use client";
import Completed from "@/components/appointment/Completed";
import Upcoming from "@/components/appointment/Upcoming";
import Sidebar from "@/components/profile/Sidebar";
import Container from "@/utils/Container";
import React, { useState } from "react";

const AppointmentsPage = () => {
  const [active, setActive] = useState("completed");
  return (
    <Container>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-3">
          <h1 className="text-xl font-semibold pb-4">My Appointments</h1>
          <div className="flex w-full gap-8">
            <button onClick={()=>setActive("upcoming")} className={`${active == "upcoming" ? "bg-primary text-white":"border border-primary text-primary bg-white"} w-full rounded-full py-2 font-semibold`}>Upcoming</button>
           <button onClick={()=>setActive("completed")}  className={`${active == "completed" ? "bg-primary text-white":"border border-primary text-primary bg-white"} w-full rounded-full py-2 font-semibold`}>completed</button>
          </div>
          {active == "upcoming" && <Upcoming></Upcoming>}
          {active == "completed" && <Completed></Completed>}
        </div>
      </div>
    </Container>
  );
};

export default AppointmentsPage;

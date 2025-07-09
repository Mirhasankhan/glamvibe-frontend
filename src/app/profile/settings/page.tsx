import Sidebar from "@/components/profile/Sidebar";
import Container from "@/utils/Container";
import React from "react";

const SettingsPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-6">
        <div className="hidden md:block md:col-span-1 border-r-2">
          <Sidebar></Sidebar>
        </div>
        <div className="hidden md:block md:col-span-1 border-r-2">
          <h1> kkkkkkkkkkk nnnnnnnnnn</h1>
        </div>
      </div>
    </Container>
  );
};

export default SettingsPage;

import Sidebar from "@/components/profile/Sidebar";
import Container from "@/utils/Container";
import Image from "next/image";
import img1 from "../../../assets/expert2.jpg";
import ChangePassword from "@/components/profile/ChangePassword";
import ProfileUpdate from "@/components/profile/ProfileIUpdate";

const OverViewPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-2">
              <h1 className="font-medium pb-3">Account Management</h1>
              <div className="border p-5">
                <Image alt="" height={200} width={600} src={img1}></Image>
                <h1 className="bg-primary text-center py-2 w-full mt-3">
                  Update Photo
                </h1>
              </div>
              <ChangePassword></ChangePassword>
            </div>
            <div className="col-span-3">
              <div>
                <h1 className="font-medium">Profile Information</h1>
                <ProfileUpdate></ProfileUpdate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OverViewPage;

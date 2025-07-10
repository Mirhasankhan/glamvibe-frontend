import Container from "@/utils/Container";
import logo from "../../../assets/logo1.avif";
import NavMenu from "./NavMenu";
import SmallDeviceMenu from "./SmallDeviceMenu";
import Link from "next/link";


const Header = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center py-1">
          <Link href="/" className="flex items-center gap-1">
            <img className="h-16 w-16 rounded-full" src={logo.src} alt="GlamVibe logo" />
            <div className="dark:text-black">
              <h1 className="text-2xl font-medium">GlamVibe</h1>
              <p>Spa Beauty</p>
            </div>
          </Link>
      
          <div>
            <NavMenu></NavMenu>
            <SmallDeviceMenu></SmallDeviceMenu>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

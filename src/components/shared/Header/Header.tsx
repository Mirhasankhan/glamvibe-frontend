import Container from "@/utils/Container";
import logo from "../../../assets/logo9.png";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center gap-1">
            <img className="h-16 w-16 rounded-full" src={logo.src} alt="GlamVibe logo" />
            <div className="dark:text-black">
              <h1 className="text-2xl font-medium">GlamVibe</h1>
              <p>Spa Beauty</p>
            </div>
          </div>
          <div>
            <NavMenu></NavMenu>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

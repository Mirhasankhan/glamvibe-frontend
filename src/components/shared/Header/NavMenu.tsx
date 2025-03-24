import Link from "next/link";

const NavMenu = () => {
  return (
    <div className="flex items-center gap-12 dark:text-black font-medium uppercase">
      <Link className="hover:text-[#ff84b4]" href="/">Home</Link>
      <Link className="hover:text-[#ff84b4]" href="/">Services</Link>
      <Link className="hover:text-[#ff84b4]" href="/">News</Link>
      <Link className="hover:text-[#ff84b4]" href="/">Gallery</Link>
      <Link className="hover:text-[#ff84b4]" href="/">Contact Us</Link>
    </div>
  );
};

export default NavMenu;

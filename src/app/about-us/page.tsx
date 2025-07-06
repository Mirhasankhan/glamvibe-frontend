import Link from "next/link";
import bgImage from "../../assets/about-us.webp";

const AboutUsPage = () => {
  return (
    <div>
      <div
        className="h-[250px] md:h-[450px] 2xl:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="bg-black h-full w-full flex flex-col items-center justify-center bg-opacity-70">
          <div className="flex gap-2 mt-2 font-medium">
            <Link className="text-white" href="/">
              Home /
            </Link>
            <h1 className="text-white">About</h1>
          </div>
          <h1 className="text-white text-5xl font-semibold">About Us</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

import bg1 from "../../assets/about.avif";
import { ImCheckmark } from "react-icons/im";

const WhyUs = () => {
  return (
    <div
      className="h-[200px] md:h-[500px] 2xl:h-[750px] bg-cover bg-center flex"
      style={{ backgroundImage: `url(${bg1.src})` }}
    >
      <div className="h-full w-1/2 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="flex flex-col gap-4 w-fit text-left">
          <h1 className="text-xl uppercase text-primary font-semibold">
            Get Our Services
          </h1>
          <h1 className="text-5xl pb-6 font-semibold text-white leading-snug">
            Get An Incredible Spa <br /> Experience with Glamvibe <br /> Spa
            Center
          </h1>
          <div className="flex text-white items-center gap-1 font-medium">
            <ImCheckmark />
            <p>5+ Years Of Experience In Beauty Services</p>
          </div>
          <div className="flex text-white items-center gap-1 font-medium">
            <ImCheckmark />
            <p>We Have Experienced Team Members</p>
          </div>
          <button className="bg-primary text-white rounded-xl px-6 py-2 w-fit">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

import bg1 from "../../assets/image1.avif";
import bg2 from "../../assets/image2.avif";
import { IoIosCheckmark } from "react-icons/io";

const WhyUs = () => {
  return (
    <div className="grid grid-cols-5 relative">
      <div className="col-span-2">
        <img src={bg1.src} className="w-full h-[600px]" alt="" />
      </div>
      <div className="col-span-3">
        <img src={bg2.src} className="w-full h-[600px]" alt="" />
      </div>
      <div className="bg-primary p-12 absolute left-96 top-16 text-white">
        <p className="text-2xl italic">Barber</p>
        <h1 className="uppercase text-3xl font-medium pb-3">
          Gentleman Choices
        </h1>
        <p>
          Getting a bit of pampering is a way to escape from reality for a bit,
          like a pause button to <br /> just relax, take a breath and restart.I
          t’s a great way to reward yourse lf healthy body & <br /> mind, when
        </p>
        <div className="pt-5 flex gap-4 items-center">
          <div className=" bg-white rounded-full text-primary">
            <IoIosCheckmark size={30} />
          </div>
          <div className=" border-b py-5">
            <h1 className="text-xl">Friendly Behaviour</h1>
            <p>
              Warmly welcome clients for experience in terms of quality Hair &
              Skin services in <br /> comfort environment.
            </p>
          </div>
        </div>
        <div className="pt-5 flex gap-4 items-center">
          <div className=" bg-white rounded-full text-primary">
            <IoIosCheckmark size={30} />
          </div>
          <div>
            <h1 className="text-xl">Always Customer Support</h1>
            <p>
              Our commitment is to always try to master the art of exemplary
              services & <br /> experience; with excellence works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

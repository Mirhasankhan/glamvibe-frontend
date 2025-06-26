import Image from "next/image";
import ser1 from "../../assets/servicebg1.jpeg";
import ser2 from "../../assets/servicebg2.jpeg";
import ser3 from "../../assets/servicebg3.jpeg";
import bati from "../../assets/bati.png";

const Services = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-full">
          <Image className="object-cover h-full" src={ser1} height={100} width={800} alt=""></Image>
        </div>
        <div className="w-full text-white">
          <div className="w-full gap-8 px-12 py-8 flex bg-primary">
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf"></Image>
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf"></Image>
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
          </div>
          <div className="w-full gap-8 px-12 py-8 flex bg-primary">
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf"></Image>
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf"></Image>
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        
        <div className="w-full text-white">
          <div className="w-full gap-8 px-12 py-8 flex bg-primary">
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf"></Image>
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf"></Image>
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
          </div>
          <div className="w-full gap-8 px-12 py-8 flex bg-primary">
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf"></Image>
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf"></Image>
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image className="object-cover h-full" src={ser2} height={100} width={800} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default Services;

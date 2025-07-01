import Image from "next/image";
import ser2 from "../../assets/servicebg2.jpeg";
import ser3 from "../../assets/servicebg3.jpeg";
import bati from "../../assets/bati.png";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <div className="mt-8">
      <div className="md:flex justify-between">
        <div className="w-full">
          <Image
            className="object-cover h-full 2xl:h-[494px] w-full"
            src={ser3}
            height={100}
            width={800}
            alt=""
          ></Image>
        </div>
        <div className="w-full text-white">
          <motion.div
            className="w-full gap-8 px-12 py-8 flex bg-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf" />
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>

            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf" />
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full gap-8 px-12 py-8 flex bg-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf" />
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>

            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf" />
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="w-full text-white">
          <motion.div
            className="w-full gap-8 px-12 py-8 flex bg-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf" />
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>

            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf" />
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full gap-8 px-12 py-8 flex bg-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf" />
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>

            <div className="flex flex-col text-center items-center">
              <Image src={bati} height={30} width={50} alt="sf" />
              <h1 className="text-2xl py-4 font-semibold">Bleach Waxing</h1>
              <p>
                Experience the rejuvenating power of Thai traditional massage
                with our expert practitioners, offering deep relaxation and
                wellness.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-full">
          <Image
            className="object-cover h-full 2xl:h-[494px] w-full"
            src={ser2}
            height={100}
            width={800}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Services;

import Container from "@/utils/Container";
import img1 from "../../assets/benefit1.jpg";
import img2 from "../../assets/benefits2.jpg";
import experience from "../../assets/experience.png";
import discount from "../../assets/discount.png";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-12">
        {/* Left image column with motion */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex gap-6"
        >
          <img src={img2.src} alt="Benefit 2" />
          <img src={img1.src} alt="Benefit 1" />
        </motion.div>

        {/* Right text content column with motion */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-primary text-xl font-medium">Our Benefits</h3>
          <h1 className="text-4xl font-semibold py-3">Why Choose Us?</h1>
          <h2 className="text-2xl text-primary pb-3">Book and enjoy our special treatments</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            laboriosam aut incidunt debitis nobis omnis suscipit corporis
            blanditiis consequatur odio vel ipsa quis assumenda saepe et
            repellat, quisquam nostrum deserunt ratione reprehenderit, porro
            perferendis? Atque consequuntur blanditiis repudiandae pariatur
            repellendus.
          </p>
          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="col-span-2 flex items-center gap-3 border-r">
              <div className="bg-primary p-4 rounded-full">
                <img className="h-12 w-12" src={experience.src} alt="Experience" />
              </div>
              <h1 className="text-2xl font-medium">Expert & Smart Team</h1>
            </div>
            <h1 className="col-span-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur in quaerat placeat earum velit saepe.
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="col-span-2 flex items-center gap-3 border-r">
              <div className="bg-primary p-4 rounded-full">
                <img className="h-12 w-12" src={discount.src} alt="Discount" />
              </div>
              <h1 className="text-2xl font-medium">Low Price & Friendly</h1>
            </div>
            <h1 className="col-span-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur in quaerat placeat earum velit saepe.
            </h1>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Benefits;

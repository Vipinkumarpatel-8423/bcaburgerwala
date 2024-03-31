// import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";

const Founder = () => {
  const option = {
    initial: {
      x: "-100",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...option}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Vipin Kumar Patel</h3>
        <p>Hey, Everyone I am Vipin Kumar , the founder of MCA Burger Wala.</p>
      </motion.div>
    </section>
  );
};

export default Founder;

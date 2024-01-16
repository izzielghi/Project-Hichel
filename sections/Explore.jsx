"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Explore = () => {
  return (
    <section id="explore">
      <motion.div
        class="grid grid-cols-2 py-20 gap-0 place-content-stretch"
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0.2, 1)}
      >
        <motion.div>
          <a href="">
            <img
              src="/undi.png"
              alt="undangan digital"
              className="w-full h-full object-cover relative z-1"
            />
          </a>
        </motion.div>
        <motion.div>
          <a href="">
            <img
              src="/bundi.png"
              alt="buku undangan digital"
              className="w-full h-full object-cover relative z-1"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Explore;
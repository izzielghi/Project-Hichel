'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.xPaddings} h-full py-20 relative`}>
    <motion.div
      class="grid grid-cols-3 gap-5 place-content-stretch"
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0.2, 1)}
    >
      <div className="flex flex-col items-center justify-center col-span-3">
        <div class={`${styles.paragraph}`}>Apa Kata Mereka?</div>
        <br />
        <div className={`${styles.paragraph3}`}>
          Bukti nyata bahwa Hicel telah menjadi bagian kebahagiaan
        </div>
        <div className={`${styles.paragraph3} pb-10`}>
          moment terbaik mereka
        </div>

        <div className="flex items-center gap-10">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default World;

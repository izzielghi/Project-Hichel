"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { slideIn } from "../utils/motion";

const About = () => (
  <section className="relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-row justify-between items-center w-full z-10"
      >
        <div className="relative">
          <motion.p className={`${styles.paragraph} max-w-[800px] my-20`}>
            Kenapa Memilih Hichel?
          </motion.p>
        </div>
      </motion.div>
    </motion.div>

    <div className="relative w-full sm:h-[500px] h-[350px] overflow-hidden z-0">
      <img
        src="/banner.png"
        alt="banner"
        className="w-full h-full object-cover relative z-1"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${styles.innerWidth} mx-auto ${styles.flexStart} flex-col z-0`}
      >
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`${styles.paragraph3} max-w-[800px] my-20`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla
          aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur
          id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
          fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet
          sodales felis.
        </motion.p>
      </motion.div>
    </div>

    <div className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <img
            src="/hp.png"
            alt="hp"
            className="h-full sm:h-[500px] object-right rounded-tl-[140px] absolute -top-[600px] -right-[50px] z-10"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;

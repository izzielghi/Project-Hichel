"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className="bg">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col z-10`}
    >
      <div className="flex flex-row justify-between items-center w-full z-10">
        <motion.p
          variants={textVariant(1.1)}
          className={`${styles.paragraph} max-w-[800px] my-20`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt <br /> <br />
          <span className={`${styles.paragraph2}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
            rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
          </span>
          <br />
          <br />
          <a href="">
            <span className="font-extrabold text-[16px] md:text-[15px] leading-[30px] text-black bg-[#D5C9B5] py-3 pr-11 pl-11 rounded-md">
              Pesan Sekarang
            </span>
          </a>
        </motion.p>
      </div>
    </motion.div>
  </section>
);

export default Hero;

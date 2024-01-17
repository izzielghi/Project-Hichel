'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className="bgradient my-20 py-20">
    <motion.div
      class="relative"
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0.2, 1)}
    >
      <div className="flex flex-col items-center justify-center col-span-3">
        <div class={`${styles.paragraph}`}>Temukan Paket Terbaikmu</div>
        <br />
        <div className={`${styles.paragraph3}`}>
          Pilih paket undangan online yang sesuai dengan
        </div>
        <div className={`${styles.paragraph3} pb-10`}>kebutuhanmu</div>

        <div class="flex items-center gap-10">
          <div
            className={`${styles.boxplan} flex flex-col items-center justify-center py-8`}
          >
            <div className={`${styles.paragraph4}`}>SILVER</div>
            <div className={`${styles.paragraph3}`}>Rp x00.000</div> <br />
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>{" "}
            <br />
            <a
              href=""
              className="font-extrabold text-white bg-black py-1 pr-10 pl-10 rounded-lg"
            >
              Pilih Paket
            </a>
          </div>
          <div
            className={`${styles.boxplan} flex flex-col items-center justify-center py-16`}
          >
            <div className={`${styles.paragraph4}`}>DIAMOND</div>
            <div className={`${styles.paragraph3}`}>Rp x00.000</div> <br />
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
            <br />
            <a
              href=""
              className="font-extrabold text-white bg-black py-1 pr-10 pl-10 rounded-lg"
            >
              Pilih Paket
            </a>
          </div>
          <div
            className={`${styles.boxplan} flex flex-col items-center justify-center py-8`}
          >
            <div className={`${styles.paragraph4}`}>GOLD</div>
            <div className={`${styles.paragraph3}`}>Rp x00.000</div> <br />
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
            <br />
            <a
              href=""
              className="font-extrabold text-white bg-black py-1 pr-10 pl-10 rounded-lg"
            >
              Pilih Paket
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default WhatsNew;

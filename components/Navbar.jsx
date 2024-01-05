'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0" />
    <div
      className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row justify-between gap-8`}
    >
      <h2 className="font-extrabold text-[24px] md:text-[30px] leading-[30px] text-black">
        HICHEL
      </h2>
      <h2 className="font-extrabold text-[15px] md:text-[15px] leading-[30px] text-black">
        Portofolio
      </h2>
      <h2 className="font-extrabold text-[15px] md:text-[15px] leading-[30px] text-black">
        Design
      </h2>
      <h2 className="font-extrabold text-[15px] md:text-[15px] leading-[30px] text-black">
        Paket
      </h2>
      <div className="flex flex-col md:flex-row justify-end md:gap-0">
        <h2 className="font-extrabold text-[15px] md:text-[15px] leading-[30px] text-black bg-gray-300 py-1 pr-5 pl-5 rounded-md">
          Register
        </h2>
        <h2 className="font-extrabold text-[15px] md:text-[15px] leading-[30px] text-white bg-black py-1 pr-5 pl-5 rounded-md">
          Login
        </h2>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;

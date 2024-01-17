'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.xPaddings} h-full py-20 relative`}>
    <motion.div
      class="grid grid-cols-3 gap-5 place-content-stretch"
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0.2, 1)}
    >
      <div className="flex flex-col items-center justify-center col-span-3">
        <div class={`${styles.paragraph}`}>
          Bagaimana Hichel
        </div>
        <div class={`${styles.paragraph}`}>
          Melengkapi Undanganmu
        </div>
        <br />
        <div className={`${styles.paragraph3} pb-10`}>
          Fitur - fitur terbaik yang kami siapkan untuk Anda
        </div>
      </div>
      <div>
        <a href="" className={`${styles.boxmenu}`}>
          <img
            src="/qr.png"
            alt="qr"
            className="w-100 h-100 object-cover relative z-1"
          />
          <div className={`${styles.paragraph2}`}>RSVP & QR Code</div> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </a>
      </div>
      <div>
        <a href="" className={`${styles.boxmenu}`}>
          <img
            src="/lexicon.png"
            alt="lexicon"
            className="w-100 h-100 object-cover relative z-1"
          />
          <div className={`${styles.paragraph2}`}>RSVP & QR Code</div> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </a>
      </div>
      <div>
        <a href="" className={`${styles.boxmenu}`}>
          <img
            src="/hand.png"
            alt="hand"
            className="w-100 h-100 object-cover relative z-1"
          />
          <div className={`${styles.paragraph2}`}>RSVP & QR Code</div> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </a>
      </div>
      <div>
        <a href="" className={`${styles.boxmenu}`}>
          <img
            src="/mail.png"
            alt="mail"
            className="w-100 h-100 object-cover relative z-1"
          />
          <div className={`${styles.paragraph2}`}>RSVP & QR Code</div> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </a>
      </div>
      <div>
        <a href="" className={`${styles.boxmenu}`}>
          <img
            src="/map.png"
            alt="map"
            className="w-100 h-100 object-cover relative z-1"
          />
          <div className={`${styles.paragraph2}`}>RSVP & QR Code</div> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </a>
      </div>
      <div>
        <a href="" className={`${styles.boxmenu}`}>
          <img
            src="/user.png"
            alt="user"
            className="w-100 h-100 object-cover relative z-1"
          />
          <div className={`${styles.paragraph2}`}>RSVP & QR Code</div> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </a>
      </div>
    </motion.div>
  </section>
);

export default GetStarted;

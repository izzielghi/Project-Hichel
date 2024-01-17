'use client';

import Accordion from "../components/Accordion";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Insights() {
  const data = [
    {
      id: 0,
      label: "Lorem ipsum dolor sit amet",
      renderContent: () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </p>
      ),
    },
    {
      id: 1,
      label: "Lorem ipsum dolor sit amet",
      renderContent: () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </p>
      ),
    },
    {
      id: 2,
      label: "Lorem ipsum dolor sit amet",
      renderContent: () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam.
        </p>
      ),
    },
  ];

  return (
    <div className="Insight">
      <section className="relative my-20 py-20">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col items-center justify-center col-span-2 relative"
        >
          <img
            src="/banner.png"
            alt="banner"
            className="w-full h-full object-cover relative z-0"
          />
          <div className="absolute flex gap-20 items-center justify-center">
            <div className="flex flex-col items-center justify-center py-8 text-white">
              <div className={`${styles.paragraph}`}>
                Frequently <br /> <span>Asked</span> <br />{" "}
                <span>Question</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-8 text-white">
              <Accordion items={data} keepOthersOpen={false} />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Insights;

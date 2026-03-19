"use client";
import Image from "next/image";
import groupPhoto from "@/public/home/groupPhoto.webp";
import landingTitle from "@/public/home/landingTitle.svg";
import { motion } from "motion/react";

const pictAnimation = {
  initial: { opacity: 0.25 },
  whileInView: { opacity: 1, transition: { duration: 0.2 } },
};

const textAnimation = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Lander = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 place-items-center">
      <motion.div
        variants={pictAnimation}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="z-0 col-start-1 row-start-1 grid w-full"
      >
        <Image
          src={groupPhoto}
          alt="Landing Picture"
          className="h-auto w-full"
        />
      </motion.div>

      <motion.div
        variants={textAnimation}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="z-10 col-start-1 row-start-1"
      >
        <Image
          src={landingTitle}
          alt="Landing Picture"
          className="mx-auto w-3/4 items-center"
        />
      </motion.div>
    </div>
  );
};

export default Lander;

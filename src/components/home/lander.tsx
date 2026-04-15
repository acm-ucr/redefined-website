"use client";
import Image from "next/image";
import ClinicGroup from "@/public/home/clinicGroup.webp";
import landingTitle from "@/public/home/landingTitle.svg";
import { motion } from "motion/react";

const pictAnimation = {
  initial: { opacity: 0.25 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.2 },
};

const textAnimation = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Lander = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 place-items-center">
      <motion.div
        {...pictAnimation}
        viewport={{ once: true }}
        className="z-0 col-start-1 row-start-1 grid w-full"
      >
        <Image src={ClinicGroup} alt="Clinic Group" className="h-auto w-full" />
      </motion.div>

      <motion.div
        {...textAnimation}
        viewport={{ once: true }}
        className="z-10 col-start-1 row-start-1"
      >
        <Image
          src={landingTitle}
          alt="Redefined at UCR Title"
          className="mx-auto w-3/4 items-center"
        />
      </motion.div>
    </div>
  );
};

export default Lander;

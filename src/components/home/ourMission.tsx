"use client";
import Image from "next/image";
import heartLogo from "@/public/redefineD_heart.svg";
import { motion } from "motion/react";

const titleAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const boxAnimation = {
  initial: { opacity: 0, x: -20 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const },
  },
};

const OurMissionComponent = () => {
  return (
    <div className="bg-redefined-taupe pt-10 pb-10 md:pt-20 md:pb-20">
      <div className="flex w-full flex-col items-center gap-12">
        <motion.p
          variants={titleAnimation}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="bg-redefined-cream text-redefined-rust font-redefined-chivo w-11/12 rounded-4xl text-center text-3xl font-medium tracking-widest italic drop-shadow-[0px_17px_0px_#5d5947] md:text-4xl lg:p-4 lg:text-6xl"
        >
          OUR MISSION
        </motion.p>

        <motion.div
          variants={boxAnimation}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="bg-redefined-cream flex w-3/4 flex-col items-center gap-6 rounded-3xl py-5 pr-13 pl-10 drop-shadow-[-20px_20px_0px_#5d5947] lg:flex-row lg:items-start"
        >
          <Image alt="Picture of heart" src={heartLogo} />
          <p className="font-redefined-albert text-center text-base leading-9 sm:text-lg md:text-xl lg:text-2xl">
            Our club is dedicated to educating students about street medicine
            and the needs of underserved communities. By working closely with
            our parent organization, we provide members not only with knowledge
            but also with hands-on fieldwork opportunities. Through service,
            learning, and real-world experience, we aim to help marginalized
            populations redefine their lives while inspiring students to grow in
            purpose and create a lasting impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMissionComponent;

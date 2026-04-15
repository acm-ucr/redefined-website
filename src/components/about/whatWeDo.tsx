"use client";
import Image from "next/image";
import clinic from "@/public/about/clinic.webp";
import nurse from "@/public/about/nurse.svg";
import { motion } from "motion/react";

const titleAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const imageAnimation = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const },
};

const textAnimation = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const },
};

const iconAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.4, ease: "easeOut" as const },
};

const WhatWeDo = () => {
  return (
    <div className="bg-redefined-taupe flex justify-center p-8 md:p-20">
      <div className="bg-redefined-sand relative flex w-[95vw] flex-col rounded-4xl p-8 shadow-[-15px_15px_0px_#5d5947]">
        <motion.p
          {...titleAnimation}
          viewport={{ once: true }}
          className="text-redefined-rust font-redefined-chivo relative -top-8 -m-4 text-center text-4xl font-bold italic sm:text-5xl md:-top-10 md:-m-8 md:text-left md:text-6xl lg:text-7xl"
        >
          WHAT WE DO
        </motion.p>
        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-2">
          <motion.div
            {...imageAnimation}
            viewport={{ once: true }}
            className="relative z-2 order-1 aspect-video w-full overflow-hidden rounded-[4rem] drop-shadow-[-15px_10px_0px_var(--color-redefined-rust)] xl:order-1"
          >
            <Image
              src={clinic}
              alt="Clinic Photo"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.p
            {...textAnimation}
            viewport={{ once: true }}
            className="text-redefined-black order-2 mx-auto w-4/5 text-center text-base leading-normal sm:text-lg md:text-xl lg:leading-normal xl:order-2 xl:pl-2 xl:text-left xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-loose"
          >
            redefineD at UCR provides general meetings, workshops, and
            volunteering opportunities for students at UCR. The goal for the
            club is to spread awareness and education about street medicine, for
            it is an important area in medicine but unknown to most people.
            Partnering with the redefineD nonprofit organization, we bring great
            resources to help students further their goals in pursuing
            healthcare professions.
          </motion.p>
        </div>
        <motion.div
          {...iconAnimation}
          viewport={{ once: true }}
          className="absolute right-4 -bottom-12 z-20 w-16 md:-bottom-16 md:w-28 lg:w-28"
        >
          <Image src={nurse} alt="Nurse Icon" className="h-auto w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;

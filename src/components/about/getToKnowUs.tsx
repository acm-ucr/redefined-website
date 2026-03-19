"use client";
import Image from "next/image";
import board from "@/public/about/board.webp";
import ambulance from "@/public/about/ambulance.svg";
import { motion } from "motion/react";

const titleAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const textAnimation = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const },
};

const imageAnimation = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const },
};

const iconAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.4, ease: "easeOut" as const },
};

const GetToKnowUs = () => {
  return (
    <div className="bg-redefined-taupe flex justify-center px-8 pt-20 pb-16 md:px-20 md:pt-24 md:pb-20">
      <div className="bg-redefined-rust relative flex w-[95vw] flex-col rounded-4xl p-6 shadow-[15px_10px_0px_#5d5947] md:p-8">
        <motion.p
          {...titleAnimation}
          viewport={{ once: true }}
          className="text-redefined-cream font-redefined-chivo relative -top-8 -m-4 text-center text-4xl font-bold italic sm:text-5xl md:-top-10 md:-m-8 md:text-right md:text-6xl lg:text-7xl"
        >
          GET TO KNOW US
        </motion.p>
        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-2">
          <motion.p
            {...textAnimation}
            viewport={{ once: true }}
            className="text-redefined-cream order-2 mx-auto w-4/5 text-center text-base leading-normal sm:text-lg md:text-xl lg:leading-normal xl:order-1 xl:pr-2 xl:text-left xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-loose"
          >
            redefineD at UCR is a club that stems from the redefineD nonprofit
            organization. At our club, we aim to help students learn about the
            topic of street medicine and providing healthcare services to
            underserved populations. Our club started in the Fall Quarter of
            2025. redefineD at UCR values service, compassion, and empowerment.
            Through our club, you will gain valuable experience, obtain new
            knowledge, and be able to build a strong network of peers.
          </motion.p>
          <motion.div
            {...imageAnimation}
            viewport={{ once: true }}
            className="relative z-2 order-1 h-full w-full"
          >
            <Image
              src={board}
              alt="Board Photo"
              className="h-full w-full object-contain drop-shadow-[15px_10px_0px_#5d5947]"
            />
          </motion.div>
        </div>
        <motion.div
          {...iconAnimation}
          viewport={{ once: true }}
          className="absolute -bottom-10 left-4 z-20 w-24 md:-bottom-16 md:w-32 lg:w-36"
        >
          <Image
            src={ambulance}
            alt="Ambulance Icon"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GetToKnowUs;

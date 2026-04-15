"use client";
import Image from "next/image";
import Link from "next/link";
import Line from "@/public/pulse.svg";
import { motion } from "motion/react";

const cardAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const textAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.3 },
};

const pulseAnimation = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.5, ease: "easeOut" as const },
};

const NotFound = () => {
  return (
    <div className="bg-redefined-taupe relative flex h-screen flex-col items-center justify-center overflow-hidden px-4">
      <motion.div
        {...cardAnimation}
        className="bg-redefined-sand relative z-10 flex w-full max-w-2xl flex-col items-center justify-center rounded-3xl py-12 shadow-[10px_8px_0px_#5d5947] sm:w-[90vw] sm:rounded-4xl sm:py-16 md:py-24 md:shadow-[15px_10px_0px_#5d5947]"
      >
        <p className="text-redefined-rust font-redefined-zilla text-7xl font-bold italic sm:text-8xl md:text-9xl">
          404
        </p>
        <motion.p
          {...textAnimation}
          className="font-redefined-albert text-lg text-black sm:text-xl md:text-2xl"
        >
          page not found
        </motion.p>
        <motion.p
          {...textAnimation}
          className="font-redefined-albert pt-8 text-lg text-black sm:pt-10 sm:text-xl md:pt-12 md:text-2xl"
        >
          return to
          <Link
            href="/"
            className="text-redefined-rust font-redefined-albert ml-2 text-lg italic underline underline-offset-4 transition-colors hover:text-black sm:text-xl md:text-2xl"
          >
            home page
          </Link>
        </motion.p>
      </motion.div>
      <motion.div
        {...pulseAnimation}
        className="absolute bottom-10 w-full md:bottom-20"
      >
        <Image src={Line} alt="Pulse Line" className="w-screen object-cover" />
      </motion.div>
    </div>
  );
};

export default NotFound;

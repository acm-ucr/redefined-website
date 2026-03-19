"use client";
import Link from "next/link";
import { motion } from "motion/react";

const buttonAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const },
  },
};

const JoinUs = () => {
  return (
    <div className="bg-redefined-taupe">
      <Link href="https://discord.com/invite/GrU6QAHJJ" target="_blank">
        <motion.div
          variants={buttonAnimation}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="bg-color-redefined-cream flex justify-center"
        >
          <button className="bg-redefined-cream border-redefined-olive font-redefined-albert text-redefined-rust mb-11 cursor-pointer rounded-full border-10 p-6 text-4xl font-bold transition-transform duration-300 hover:scale-105 md:w-100 md:text-5xl lg:w-100 lg:text-6xl">
            Join Us!
          </button>
        </motion.div>
      </Link>
    </div>
  );
};

export default JoinUs;

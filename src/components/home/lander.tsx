"use client";
import Image from "next/image";
import Picture from "@/public/Landing_Pic.webp";
import Picture_Text from "@/public/Landing_pic_text.svg";
import { motion } from "motion/react";

const Lander = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 place-items-center">
      <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="z-0 col-start-1 row-start-1 grid w-full"
      >
        <Image
          src={Picture}
          alt="Landing Picture"
          className="h-auto w-full"
        />{" "}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 col-start-1 row-start-1"
      >
        <Image src={Picture_Text} alt="Landing Picture" />
      </motion.div>
    </div>
  );
};

export default Lander;

"use client";
import BoardCard from "@/components/board/boardCard";
import { boardMembers } from "@/data/boardInfo";
import { motion } from "motion/react";

const fadeInAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2 },
};

const fadeInAnimationCard = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
};

const gridClasses = [
  "flex w-full justify-center md:col-span-2 xl:col-span-2",
  "flex w-full justify-center md:col-span-2 xl:col-span-2",
  "flex w-full justify-center md:col-span-2 xl:col-span-2",
  "flex w-full justify-center md:col-span-2 xl:col-start-2 xl:col-span-2",
  "flex w-full justify-center md:col-start-2 md:col-span-2 xl:col-start-4 xl:col-span-2",
];

const BoardEntry = () => {
  return (
    <div className="bg-redefined-taupe min-h-screen px-4 py-10">
      <motion.div
        {...fadeInAnimation}
        viewport={{ once: true }}
        className="font-redefined-zilla text-redefined-rust text-center text-4xl font-extrabold uppercase italic sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl xl:mb-12 xl:text-8xl"
      >
        Meet The Board
      </motion.div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 md:grid-cols-4 md:gap-y-10 lg:gap-x-16 xl:grid-cols-6 2xl:gap-x-52">
        {boardMembers.map((member, index) => (
          <motion.div
            {...fadeInAnimationCard}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className={
              gridClasses[index] ||
              "flex w-full justify-center md:col-span-2 xl:col-span-2"
            }
          >
            <BoardCard
              imagePath={member.imagePath}
              name={member.name}
              role={member.role}
              major={member.major}
              email={member.email}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoardEntry;

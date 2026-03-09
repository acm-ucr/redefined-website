"use client";
import BoardCard from "@/components/board/boardCard";
import { boardMembers } from "@/data/boardInfo";
import { motion } from "motion/react";

const BoardEntry = () => {
  return (
    <div className="bg-redefined-olive-50 min-h-screen px-4 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="font-redefined-zilla text-redefined-rust mb-12 text-center text-6xl font-extrabold uppercase italic"
      >
        Meet The Board
      </motion.div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-2 gap-y-10 px-4">
        {boardMembers.map((member, index) => (
          <motion.div
            key={member.email}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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

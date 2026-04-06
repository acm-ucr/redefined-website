"use client";
import Image from "next/image";
import monitor from "@/public/calendar/monitor.svg";
import bottle from "@/public/calendar/bottle.svg";
import board from "@/public/calendar/board.svg";

interface CardProps {
  title: string;
  location: string;
  date: string;
  time: string;
  index: number;
}

const icons = [monitor, bottle, board];
const Card = ({ title, location, date, time, index }: CardProps) => {
  const mode = index % 2 == 0;
  const lineStyling = `h-1 w-full rounded-full border-0 ${mode ? " bg-redefined-rust" : " bg-redefined-cream"}`;
  const icon = icons[index % 3];
  return (
    <div className="relative flex w-full max-w-3xs flex-col place-items-center">
      <p
        className={`font-redefined-zilla -mb-4 w-9/10 rounded-t-3xl p-4 pb-7 text-center text-xl font-bold md:text-2xl ${mode ? "text-redefined-cream bg-redefined-rust" : "text-redefined-rust bg-redefined-cream"}`}
      >
        {title}
      </p>
      <div
        className={`h-80 w-full rounded-4xl py-12 ${mode ? "text-redefined-rust bg-redefined-cream shadow-[-10px_10px_0_var(--color-redefined-rust)]" : "text-redefined-cream bg-redefined-rust shadow-[-10px_10px_0_var(--color-redefined-cream)]"} font-redefined-chivo flex flex-col items-center justify-around p-3 text-center text-4xl font-medium`}
      >
        <hr className={lineStyling} />
        <p className="text-4xl">{date}</p>
        <p className="font-vsa-alt pt-3 text-base">{time}</p>
        <p className="text-base font-bold md:text-lg">{location}</p>
        <hr className={lineStyling} />
      </div>
      <Image className="absolute right-0 bottom-2 h-11" src={icon} alt="Icon" />
    </div>
  );
};

export default Card;

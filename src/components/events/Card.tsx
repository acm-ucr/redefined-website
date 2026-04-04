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

const icons = [board, bottle, monitor];
const Card = ({ title, location, date, time, index }: CardProps) => {
  const mode = index % 2 == 0;
  const lineStyling = `h-1 w-full rounded-full border-0 ${mode ? " bg-redefined-rust" : " bg-redefined-cream"}`;
  const icon = icons[index % 3];
  return (
    <div className="relative flex w-[33vw] flex-col place-items-center">
      <p
        className={`w-4/5 text-center text-xl font-bold md:text-2xl ${mode ? "text-redefined-cream bg-redefined-rust" : "text-redefined-rust bg-redefined-cream"}`}
      >
        {title}
      </p>
      <div
        className={`w-full rounded-4xl py-12 ${mode ? "text-redefined-rust bg-redefined-cream" : "text-redefined-cream bg-redefined-rust"} flex flex-col items-center justify-around rounded-t-md p-3 text-center`}
      >
        <hr className={lineStyling} />
        <p className="text-2xl font-bold md:text-3xl">{date}</p>
        <p className="font-vsa-alt pt-0 text-base md:pt-3 md:text-lg">{time}</p>
        <p className="text-base font-bold md:text-lg">{location}</p>
        <hr className={lineStyling} />
      </div>
      <Image className="absolute right-0 bottom-0" src={icon} alt="Icon" />
    </div>
  );
};

export default Card;

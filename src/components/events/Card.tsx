"use client";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  location: string;
  date: string;
  time: string;
  image: StaticImageData;
  index: number;
}

const Card = ({ title, location, date, time, image, index }: CardProps) => {
  const mode = index % 2 == 0;
  const lineStyling = `h-1 w-full border-0 ${mode ? " bg-redefined-rust" : " bg-redefined-cream"}`;
  return (
    <div className="flex w-[33vw] flex-col">
      <p
        className={`text-center text-xl font-bold md:text-2xl ${mode ? "text-redefined-cream bg-redefined-rust" : "text-redefined-rust bg-redefined-cream"}`}
      >
        {title}
      </p>
      <div
        className={`${mode ? "text-redefined-rust bg-redefined-cream" : "text-redefined-cream bg-redefined-rust"} flex flex-col items-center justify-around rounded-t-md p-3 text-center`}
      >
        <hr className={lineStyling} />
        <p className="text-2xl font-bold md:text-3xl">{date}</p>
        <p className="font-vsa-alt pt-0 text-base md:pt-3 md:text-lg">{time}</p>
        <p className="text-base font-bold md:text-lg">{location}</p>
        <hr className={lineStyling} />
      </div>
      <Image src={image} alt="Event Icon" />
    </div>
  );
};

export default Card;

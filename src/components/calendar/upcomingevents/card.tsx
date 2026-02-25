"use client";

interface CardProps {
  title: string;
  month: string;
  day: string;
  location: string;
  startingTime: string;
  description: string;
}

const Card = ({ title, month, day, startingTime, description }: CardProps) => {
  return (
    <div className="grid grid-cols-4">
      <div className="flex flex-col items-center justify-center rounded-l-md bg-winc-blue-500 text-white">
        <p className="pt-4 text-4xl font-bold">{month}</p>
        <p className="py-2 text-4xl font-bold">{day}</p>
        <p className="pb-4 text-lg font-light">{startingTime}</p>
      </div>
      <div className="col-span-3 flex flex-col rounded-r-md bg-winc-beige-100 py-4 pl-4 text-winc-blue-500">
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-lg font-semibold">
          {description ? description : "No event details"}
        </p>
      </div>
    </div>
  );
};

export default Card;

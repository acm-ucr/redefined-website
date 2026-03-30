"use client";

interface TitleProps {
  title: string;
}
const EventTitle = ({ title }: TitleProps) => {
  return (
    <div className="w-ful flex flex-col place-items-center">
      <h1 className="bg-redefined-cream font-redefined-chivo text-redefined-rust z-10 mt-5 w-[65vw] rounded-4xl p-3 text-center text-6xl font-semibold tracking-widest italic">
        {title}
      </h1>
      <div className="bg-redefined-sage -mt-12 h-20 w-[80vw] rounded-full"></div>
    </div>
  );
};

export default EventTitle;

"use client";

interface TitleProps {
  title?: string;
}
const EventTitle = ({ title }: TitleProps) => {
  return (
    <div className="bg-redefined-sage relative mx-auto mt-15 mb-10 flex h-10 w-[90vw] justify-center rounded-full sm:w-[80vw] lg:h-20">
      {title && (
        <h1 className="bg-redefined-cream font-redefined-chivo text-redefined-rust absolute -top-8 h-fit w-[70vw] rounded-4xl p-2 text-center text-3xl font-semibold tracking-widest italic sm:w-[60vw] sm:text-4xl lg:text-6xl">
          {title}
        </h1>
      )}
    </div>
  );
};

export default EventTitle;

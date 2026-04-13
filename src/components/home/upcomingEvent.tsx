"use client";

interface EventProps {
  date: string;
  title: string;
}

const EventEntry = ({ date, title }: EventProps) => {
  const dateVal = new Date(date);
  const formattedDate = dateVal
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
    .toUpperCase();
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    hour12: true,
  };
  if (dateVal.getMinutes() > 0) {
    timeOptions.minute = "2-digit";
  }
  const formattedTime = dateVal.toLocaleTimeString("en-US", timeOptions);
  return (
    <div className="bg-redefined-cream flex w-full flex-row rounded-4xl text-center">
      <h3 className="bg-redefined-rust text-redefined-cream font-redefined-chivo w-fit rounded-4xl p-10 md:py-3">
        {formattedDate} {formattedTime}
      </h3>
      <h3 className="font-redefined-albert flex-1 p-10 md:p-3">{title}</h3>
    </div>
  );
};

export default EventEntry;

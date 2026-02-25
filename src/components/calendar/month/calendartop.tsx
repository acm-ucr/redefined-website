import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";

interface CalendarTopProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarTop = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: CalendarTopProps) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="mx-auto flex w-10/12 flex-col items-center justify-between md:flex-row">
      <div className="text-winc-red-400 flex w-full items-center justify-center pb-6 md:justify-start md:space-x-4 md:pb-0">
        <button
          onClick={onPrevMonth}
          className="text-3xl transition hover:-translate-x-1 md:text-4xl"
        >
          <RiArrowLeftFill />
        </button>
        <span className="w-fit px-4 text-3xl font-bold md:px-0 md:text-4xl">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <button
          onClick={onNextMonth}
          className="text-3xl transition hover:translate-x-1 md:text-4xl"
        >
          <RiArrowRightFill />
        </button>
      </div>
    </div>
  );
};

export default CalendarTop;

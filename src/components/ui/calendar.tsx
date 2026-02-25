"use client";

import * as React from "react";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { GoogleEventProps } from "../calendar/calendarcall";
import CalendarDay from "@/components/calendar/month/calendarday";
import CalendarTop from "@/components/calendar/month/calendartop";
import UpcomingEvents from "../calendar/upcomingevents/upcomingevents";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col">
      <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <DayPicker
        month={currentDate}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return days[date.getDay()];
          },
          formatCaption: () => "",
        }}
        className={`${className} pb-8`}
        classNames={{
          months: "",
          month: "",
          caption: "",
          caption_label: "",
          nav: "space-x-8",
          nav_button: "",
          nav_button_previous: "hidden",
          nav_button_next: "hidden",
          table: "w-full  space-y-1",
          head_row:
            "border border-winc-orange-100 flex mt-[2vw] w-full rounded-t-xl text-center items-center justify-center grid grid-cols-7",
          head_cell:
            "text-white bg-winc-red-400 text-md md:text-3xl py-1 md:py-2",
          row: "grid grid-cols-7",
          cell: "bg-winc-beige-100 border border-winc-orange-100 p-0 bg-white h-[15vh] md:h-[20vh]",
          day: "",
          day_range_end: "",
          day_selected: "",
          day_outside: "",
          day_disabled: "",
          day_range_middle: "",
          day_hidden: "",
          ...classNames,
        }}
        components={{
          IconLeft: () => (
            <div onClick={prevMonth}>
              <RiArrowLeftFill />
            </div>
          ),
          IconRight: () => (
            <div onClick={nextMonth}>
              <RiArrowRightFill />
            </div>
          ),
          Day: ({ displayMonth, date }) => (
            <CalendarDay
              date={date}
              displayMonth={displayMonth}
              events={events}
            />
          ),
        }}
        {...props}
      />
      <UpcomingEvents />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

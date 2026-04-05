"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import * as motion from "motion/react-client";

const slideUp = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
};

const slideDown = {
  hidden: { opacity: 0, y: -5 },
  show: { opacity: 1, y: 0 },
};
const transition = { duration: 0.3 };

export type GoogleEventProps = {
  start: { dateTime: string };
  end: { dateTime: string };
  location: string;
  description: string;
  summary: string;
};

export type EventProps = Partial<{
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

type CalendarDayCellProps = {
  date: Date;
  displayMonth: Date;
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

const CalendarDayCell = ({
  date,
  displayMonth,
  events,
  setCurrent,
}: CalendarDayCellProps) => {
  const today = new Date();
  const isToday =
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();

  const currentMonth = displayMonth.getMonth() === date.getMonth();

  const filteredEvents = events?.filter(({ start, end }) => {
    if (!start || !end) return false;
    const eventStartDate = new Date(start);
    const eventEndDate = new Date(end);

    eventStartDate.setHours(0, 0, 0, 0);
    eventEndDate.setHours(23, 59, 59, 999);

    return date >= eventStartDate && date <= eventEndDate;
  });

  return (
    <div
      className={`${
        isToday ? "" : currentMonth ? "bg-transparent" : "bg-transparent"
      } no-scrollbar group border-redefined-olive flex h-24 w-full flex-col items-end overflow-y-auto border-r-2 p-0 align-top last:border-r-0`}
    >
      <div
        className={cn(
          "group-hover:bg-redefined-olive relative w-full flex-1 transition-colors group-hover:rounded-xl",
          isToday && "bg-none bg-contain bg-center bg-no-repeat",
        )}
      >
        <div
          className={`${
            currentMonth ? "" : "opacity-80"
          } text-fit text-redefined-olive font-redefined-chivo top-0 m-1 rounded-xl bg-transparent px-1 text-start font-semibold md:text-right md:text-xl`}
        >
          {isToday ? (
            <div className="bg-redefined-taupe ml-auto flex h-5 w-5 items-center justify-center rounded-full font-semibold text-black sm:h-8 sm:w-8">
              {date.getDate()}
            </div>
          ) : (
            date.getDate()
          )}
        </div>

        {filteredEvents?.map(
          ({ title, start, end, location, description }, index) => {
            const startDate = new Date(start as string);
            if (
              startDate.getDate() === date.getDate() &&
              startDate.getMonth() === date.getMonth() &&
              startDate.getFullYear() === date.getFullYear()
            ) {
              return (
                <motion.div
                  key={index}
                  variants={slideUp}
                  transition={{ ...transition, delay: 0.2 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-redefined-rust z-10 mb-1 flex h-7 w-full cursor-pointer rounded-xl p-1 text-center font-medium transition hover:opacity-60"
                  onClick={() =>
                    setCurrent({ title, start, end, location, description })
                  }
                >
                  <div className="hidden flex-col leading-tight text-black md:flex">
                    <div className="truncate font-semibold">{title}</div>
                  </div>
                </motion.div>
              );
            }
            return null;
          },
        )}
      </div>
    </div>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  formatters,
  components,
  events,
  setCurrent,
  ...props
}: CalendarProps) {
  console.log("Calendar events:", events);
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  return (
    <motion.div
      variants={slideDown}
      transition={{ ...transition, delay: 0.2 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <DayPicker
        showOutsideDays={showOutsideDays}
        month={currentMonth}
        onMonthChange={setCurrentMonth}
        className={cn(
          "group/calendar w-5/6 p-0 [--cell-size:50px] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
          String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
          className,
        )}
        captionLayout="label"
        formatters={{
          formatWeekdayName: (weekday) =>
            weekday.toLocaleString("en-US", { weekday: "short" }),
          ...formatters,
        }}
        classNames={{
          root: cn("w-full h-fit max-w-7xl mx-auto bg-redefined-cream"),
          months: cn("flex gap-4 flex-col md:flex-row relative"),
          month: cn(
            "flex flex-col w-full items-center sm:items-stretch border-collapse [&_tr:last-child_td]:border-b-0",
          ),
          nav: cn(
            "flex items-center w-full hidden justify-between px-4:md px-8 py-2 scale-125",
          ),
          button_previous: cn(
            buttonVariants({ variant: "ghost" }),
            "size-(--cell-size) aria-disabled:opacity-50 select-none",
          ),
          button_next: cn(
            buttonVariants({ variant: "ghost" }),
            "size-(--cell-size) aria-disabled:opacity-50 select-none",
          ),
          month_caption: cn(
            "flex items-center justify-between h-(--cell-size) w-full px-(--cell-size) text-redefined-cream",
          ),
          dropdowns: cn(
            "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          ),
          dropdown_root: cn(
            "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          ),
          dropdown: cn("absolute bg-popover inset-0 opacity-0"),
          caption_label: cn(
            "select-none font-bold flex w-full items-center justify between text-xl",
            captionLayout === "label"
              ? "text-4xl"
              : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          ),
          table: cn("w-full border-collapse table-fixed grid grid-cols-5"),
          weekdays: cn(
            "grid grid-cols-7 h-fit text-center text-sm bg-redefined-cream border-redefined-olive border-b-2",
          ),
          weekday: cn(
            "text-muted-foreground flex-1 text-xl sm:text-3xl select-none font-redefined-zilla text-redefined-olive border-redefined-olive border-r-2 last:border-r-0",
          ),
          // Applied bottom borders to the rows, skipping the last row
          week: cn(
            "grid grid-cols-7 w-full font-vsa-alt font-semibold border-b-2 border-redefined-olive last:border-b-0",
          ),
          week_number_header: cn("select-none w-(--cell-size)"),
          week_number: cn("text-[0.8rem] select-none text-muted-foreground"),
          day: cn("relative w-full h-full p-0 flex justify-center"),
          range_start: cn("rounded-l-md bg-accent"),
          range_middle: cn("rounded-none"),
          range_end: cn("rounded-r-md bg-accent"),
          today: cn(
            "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-md",
          ),
          outside: cn(
            "text-muted-foreground aria-selected:text-muted-foreground",
          ),
          disabled: cn("text-muted-foreground opacity-50"),
          hidden: cn("invisible"),
          // Applied right borders to the cells, skipping the last cell in the row
          cell: cn(""),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          ),

          MonthCaption: ({ calendarMonth }) => {
            const date = calendarMonth.date;
            const monthName = date.toLocaleString("en-US", { month: "long" });
            const year = date.getFullYear();

            return (
              <div className="bg-redefined-rust relative grid -translate-1 justify-items-center rounded-lg p-3">
                <h2 className="text-redefined-cream font-redefined-zilla off text-2xl font-bold sm:text-4xl">
                  {monthName} {year}
                </h2>
                <div className="absolute right-0 flex h-full flex-row items-center justify-center pr-4">
                  <ChevronLeft
                    className="text-redefined-cream mr-2 size-5 cursor-pointer transition-opacity hover:opacity-75"
                    onClick={() => {
                      const prevMonth = new Date(currentMonth);
                      prevMonth.setMonth(currentMonth.getMonth() - 1);
                      setCurrentMonth(prevMonth);
                    }}
                  />
                  <ChevronRight
                    className="text-redefined-cream size-5 cursor-pointer transition-opacity hover:opacity-75"
                    onClick={() => {
                      const nextMonth = new Date(currentMonth);
                      nextMonth.setMonth(currentMonth.getMonth() + 1);
                      setCurrentMonth(nextMonth);
                    }}
                  />
                </div>
              </div>
            );
          },

          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <ChevronLeft
                  className={cn("text-redefined-cream size-4", className)}
                  {...props}
                />
              );
            }
            if (orientation === "right") {
              return (
                <ChevronRight
                  className={cn("text-redefined-cream size-4", className)}
                  {...props}
                />
              );
            }
            return (
              <ChevronDownIcon className={cn("size-4", className)} {...props} />
            );
          },
          Day: ({ day }) => (
            <CalendarDayCell
              date={day.date}
              displayMonth={day.displayMonth}
              events={events}
              setCurrent={setCurrent}
            />
          ),
          ...components,
        }}
        {...props}
      />
    </motion.div>
  );
}

export { Calendar };

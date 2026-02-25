"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Calendar as UICalendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: GoogleEventProps;
};

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const { data } = useQuery<{
    allEvents: GoogleEventProps[];
    futureEvents: GoogleEventProps[];
  }>({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const now = new Date();
      const tenWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const tenWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
      ).then((res) => res.json());

      const allEvents: GoogleEventProps[] = response.items || [];

      const futureEvents = allEvents
        .filter((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          return startString && new Date(startString) >= now;
        })
        .slice(0, 3);

      return { allEvents, futureEvents };
    },
  });

  return (
    <div>
      <div className="border-winc-red-400 mt-8 mb-2 w-full border-4" />
      <p className="bg-winc-red-400 py-4 text-center text-4xl font-bold text-white">
        Programs & Events
      </p>
      <div className="border-winc-red-400 mt-2 mb-16 w-full border-4" />
      <UICalendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="mx-auto w-11/12 md:w-10/12"
        events={data?.allEvents ?? []}
      />
    </div>
  );
};

export default CalendarCall;

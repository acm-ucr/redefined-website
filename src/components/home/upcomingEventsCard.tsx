"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import EventEntry from "@/components/home/upcomingEvent";
import Image from "next/image";
import stethoscope from "@/public/stethoscope.svg";

interface startAPI {
  dateTime: string;
  date: string;
}
interface GoogleAPI {
  summary: string;
  start: startAPI;
}
interface SimpleEvent {
  date: string;
  title: string;
}

const up_motion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const },
};

const UpcomingEvents = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const now = new Date().toISOString();
      const url = new URL(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events`,
      );
      const params = {
        key: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY as string,
        timeMin: now,
        maxResults: "3",
        singleEvents: "true",
        orderBy: "startTime",
        fields: "items(summary,start)",
      };
      url.search = new URLSearchParams(params).toString();

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Calendar API Error: ${error.error.message}`);
      }
      const eventData = await response.json();
      console.log("Raw Data", eventData);

      return (eventData.items || []).map((event: GoogleAPI) => ({
        title: event.summary ?? "No Title",
        date: event.start.dateTime || event.start.date,
      }));
    },
  });
  return (
    <motion.div
      {...up_motion}
      viewport={{ once: true }}
      className="bg-redefined-olive-50 relative mx-auto my-10 w-11/12 rounded-4xl md:w-7/10"
    >
      <Image
        src={stethoscope}
        alt="stethoscope"
        className="absolute -top-4 left-0 h-14 w-fit md:-top-5 md:-left-5 md:h-20"
      />
      <h2 className="font-redefined-chivo text-redefined-rust pt-5 text-center text-2xl font-medium italic md:text-4xl">
        Upcoming Events
      </h2>
      <div className="flex flex-col p-5">
        {data.length > 0 ? (
          data.map((event: SimpleEvent, index: number) => (
            <EventEntry key={index} date={event.date} title={event.title} />
          ))
        ) : isLoading ? (
          <h2 className="text-redefined-cream w-full text-center text-xl">
            Loading Events
          </h2>
        ) : (
          <h2 className="text-redefined-cream w-full text-center text-xl">
            No Upcoming Events
          </h2>
        )}
      </div>
    </motion.div>
  );
};

export default UpcomingEvents;

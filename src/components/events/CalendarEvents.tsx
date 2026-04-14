"use client";

import {
  Calendar,
  EventProps,
  GoogleEventProps,
} from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { isAfter, isSameDay } from "date-fns";
import EventTitle from "@/components/events/EventTitle";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import { CalendarEvent } from "@/data/types";

const Events = () => {
  const [current, setCurrent] = useState<EventProps>({});
  const today = new Date();
  const timeMin = new Date(
    today.getTime() - 60 * 60 * 24 * 7 * 5 * 1000,
  ).toISOString();
  const timeMax = new Date(
    today.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
  ).toISOString();
  today.setHours(0, 0, 0, 0);

  const { isPending, data = [] } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
            timeMin,
          )}&timeMax=${encodeURIComponent(timeMax)}`).then((res) => res.json());

      console.log("Raw Google Calendar API response:", response);

      const events = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: new Date(start.dateTime),
          end: new Date(end.dateTime),
          location: location || "TBA",
          description,
          title: summary || "No Title",
        }),
      );
      return events;
    },
  });
  console.log("Fetched calendar events:", data);
  const upcomingEvents = data
    .filter(
      (e: CalendarEvent) =>
        isAfter(e.start, Date()) || isSameDay(e.start, new Date()),
    )
    .sort(
      (a: CalendarEvent, b: CalendarEvent) =>
        a.start.getTime() - b.start.getTime(),
    )
    .slice(0, 3);
  return (
    <>
      {!isPending && (
        <Dialog
          open={Object.keys(current).length > 0}
          onOpenChange={() => setCurrent({})}
        >
          <DialogContent className="border-redefined-rust bg-redefined-cream max-w-sm rounded-4xl border-4 sm:max-w-2xl sm:p-8">
            <DialogHeader>
              <DialogTitle>
                <div className="font-redefined-zilla relative flex place-content-between text-4xl">
                  <p>{current.title}</p>
                  <p>
                    {new Date(current.start as string).toLocaleDateString(
                      "en-US",
                      {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </p>
                </div>

                <div className="font-redefined-zilla my-2 flex flex-col gap-1 font-normal">
                  Time:{" "}
                  {new Date(current.start as string).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    },
                  )}{" "}
                  -{" "}
                  {new Date(current.end as string).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  <p>Location: {current.location}</p>
                </div>
              </DialogTitle>
              <DialogDescription className="font-redefined-chivo relative text-black">
                {current.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
      <div className="bg-redefined-taupe flex h-full w-full flex-col">
        <EventTitle title="Calendar" />

        <Calendar
          mode="single"
          selected={new Date()}
          className="mx-auto w-21/22 md:w-10/12"
          events={data}
          setCurrent={setCurrent}
        />
        <EventTitle title="Upcoming Events" />
        <UpcomingEvents events={upcomingEvents} />
        <EventTitle />
      </div>
    </>
  );
};

export default Events;

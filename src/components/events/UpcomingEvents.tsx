import { CalendarEvent } from "@/data/types";
import Card from "@/components/events/Card";
import { motion } from "motion/react";

interface EventsProps {
  events: CalendarEvent[];
}

const animation = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const },
  viewport: { once: true },
};

const UpcomingEvents = ({ events }: EventsProps) => (
  <motion.div
    {...animation}
    className={`flex flex-col place-items-center gap-10 p-10 ${events.length > 0 ? "md:flex-row" : ""}`}
  >
    {events.length > 0 ? (
      events.map((event, key) => (
        <Card
          key={key}
          index={key}
          title={event.title}
          location={event.location}
          date={event.start.toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })}
          time={
            event.start.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            }) +
            " - " +
            event.end.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })
          }
        />
      ))
    ) : (
      <h1 className="bg-redefined-cream font-redefined-chivo text-redefined-rust h-fit w-[70vw] rounded-4xl p-2 text-center text-3xl font-semibold tracking-widest italic sm:w-[60vw] sm:text-3xl lg:text-5xl">
        No Upcoming Events
      </h1>
    )}
  </motion.div>
);

export default UpcomingEvents;

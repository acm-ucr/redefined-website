import { CalendarEvent } from "@/components/events/types";
import Card from "@/components/events/Card";

interface EventsProps {
  events: CalendarEvent[];
}

const UpcomingEvents = ({ events }: EventsProps) => (
  <div className="flex flex-col place-items-center gap-10 p-10 md:flex-row">
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
      <p>No Upcoming Events</p>
    )}
  </div>
);

export default UpcomingEvents;

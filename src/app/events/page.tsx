import Calendar from "@/components/events/CalendarEvents";
import EventTitle from "@/components/events/EventTitle";
import Card from "@/components/events/Card";
const EventsPage = () => {
  return (
    <>
      <EventTitle title="Calendar" />
      <Calendar />
      <EventTitle title="Upcoming Events" />
      <Card
        title="General Meetings"
        date="10/25/25"
        time="7pm"
        location="Somewhere"
        index={2}
      />
    </>
  );
};

export default EventsPage;

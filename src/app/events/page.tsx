import Calendar from "@/components/events/CalendarEvents";
import EventTitle from "@/components/events/EventTitle";
import Card from "@/components/events/Card";
const EventsPage = () => {
  return (
    <div className="bg-redefined-taupe">
      <EventTitle title="Calendar" />
      <Calendar />
      <EventTitle title="Upcoming Events" />
      <Card
        title="General Meetings"
        date="10/25/25"
        time="7pm"
        location="Somewhere"
        index={0}
      />
      <Card
        title="General Meetings"
        date="10/25/25"
        time="7pm"
        location="Somewhere"
        index={1}
      />
      <Card
        title="General Meetings"
        date="10/25/25"
        time="7pm"
        location="Somewhere"
        index={2}
      />
    </div>
  );
};

export default EventsPage;

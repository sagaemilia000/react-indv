import EventItem from '../eventItem/EventItem';
import "./eventList.css"

const EventList = ({ events }) => {
  if (!events || events.length === 0) {
    return <p>Inga event tillgängliga.</p>;
  }

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
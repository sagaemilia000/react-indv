import EventItem from '../eventItem/EventItem';
import "./eventList.css"

const EventList = ({ events }) => {
  if (!events || events.length === 0) {
    return <p className='message'>Inga event tillgängliga.</p>;
  }

  return (
    <ul className="event-list">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
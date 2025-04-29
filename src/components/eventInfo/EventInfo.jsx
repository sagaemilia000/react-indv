import "./eventInfo.css"

function EventInfo({ event }) {
    if (!event) return null;
  
    return (
      <div className="event-info">
        <p className="event-info__paragraph">You are about to score some tickets to</p>
        <section className="event-info__container">
            <h1 className="event-info__title">{event.name}</h1>
            <p className="event-info__when">{event.when.date} kl {event.when.from} - {event.when.to}</p>
            <p className="event-info__where">@ {event.where}</p>
        </section>
      </div>
    );
  }
  
  export default EventInfo;
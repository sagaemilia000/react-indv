import "./eventItem.css"
import { Link } from "react-router-dom";

function EventItem({ event }) {
    return (
    <Link className="link" to={`/details/${event.id}`} state={{ event }}>
        <li className="event-item">
            <p className="event-item__date">{event.when.date.slice(0, 6)}</p>
            <div className="event-item__info">
                <h2 className="event-item__title">{event.name}</h2>
                <p className="event-item__where">{event.where}</p>
                <p className="event-item__time">
                    {event.when.from} - {event.when.to}
                </p>
                <p className="event-item__price">{event.price} sek</p>
            </div>
        </li>
    </Link>
    );
  };
  
  export default EventItem;
import Navbar from "../../components/navBar/NavBar"
import { useLocation } from "react-router-dom";
import EventInfo from "../../components/eventInfo/EventInfo";

function EventDetailsPage() {

    const location = useLocation();
    const event = location.state?.event;

    if (!event) {
        return <p>Inget event hittades.</p>;
    }

    return (
        <div className="page-wrapper">
            <h1 className="heading">Event</h1>
            <EventInfo event={event}/>
            <Navbar />
        </div>
    )
}

export default EventDetailsPage
import Navbar from "../../components/navBar/NavBar"
import "./eventsPage.css"
import { useEffect } from 'react';
import useEventStore from '../../store/eventStore';
import EventList from '../../components/eventList/EventList';
import CartBtn from "../../components/cartBtn/CartBtn";

function EventsPage() {

    const { events, isLoading, error, fetchEvents } = useEventStore();

    useEffect(() => {
        fetchEvents();
    }, []);

    if (isLoading) return <p className="message">Laddar events...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
        <div className="page-wrapper">
            <h1 className="heading">Events</h1>
            <div className="event-list">
                <EventList events={events} />
            </div>
                <CartBtn />
                <Navbar />
        </div>
        </>
    )
}

export default EventsPage
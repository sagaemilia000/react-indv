import Navbar from "../../components/navBar/NavBar"
import "./eventsPage.css"
import { useEffect } from 'react';
import useTicketStore from '../../store/ticketStore';
import EventList from '../../components/eventList/EventList';

function EventsPage() {

    const { events, isLoading, error, fetchEvents } = useTicketStore();

    useEffect(() => {
        fetchEvents();
    }, []);

    if (isLoading) return <p>Laddar events...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
        <h1 className="events-title">Events</h1>
        <div className="event-list">
            <EventList events={events} />
        </div>
            <Navbar />
        </>
    )
}

export default EventsPage
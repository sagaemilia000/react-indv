import "./eventsPage.css"
import { useEffect } from 'react';
import useEventStore from '../../store/eventStore';
import EventList from '../../components/eventList/EventList';
import CartBtn from "../../components/cartBtn/CartBtn";
import { motion } from "framer-motion";

function EventsPage() {

    const { events, isLoading, error, fetchEvents } = useEventStore();

    useEffect(() => {
        fetchEvents();
    }, []);

    if (isLoading) return <p className="message">Laddar events...</p>;
    if (error) return <p>{error}</p>;

    return (
        <motion.div
            className="page-wrapper"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
        >
            <h1 className="heading">Events</h1>
            <EventList events={events} />
            <CartBtn />
        </motion.div>
    )
}

export default EventsPage
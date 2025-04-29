import Navbar from "../../components/navBar/NavBar"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import EventInfo from "../../components/eventInfo/EventInfo";
import TicketCounter from "../../components/ticketCounter/TicketCounter";
import "./eventDetailsPage.css"

function EventDetailsPage() {

    const location = useLocation();
    const event = location.state?.event;

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
            console.log("Lägger till i kundvagn:", {
            eventId: event.id,
            quantity,
            totalPrice: quantity * event.price,
            });
        }

    if (!event) {
        return <p>Inget event hittades.</p>;
    }

    return (
        <div className="page-wrapper">
            <h1 className="heading">Event</h1>
            <EventInfo event={event}/>
            <Navbar />
            <TicketCounter value={quantity} price={event.price} onChange={setQuantity} />
            <button className="btn cart-btn" onClick={handleAddToCart}>Lägg till i kundvagn</button>
        </div>
    )
}

export default EventDetailsPage
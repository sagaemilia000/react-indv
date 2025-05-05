import Navbar from "../../components/navBar/NavBar"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import EventInfo from "../../components/eventInfo/EventInfo";
import TicketCounter from "../../components/ticketCounter/TicketCounter";
import "./eventDetailsPage.css"
import { useCartStore } from "../../store/cartStore";

function EventDetailsPage() {

    const location = useLocation();
    const event = location.state?.event;

    // const handleAddToCart = () => {
    //     addToCart(event, quantity);
    //     }

    const { getQuantityById } = useCartStore();
    const [quantity, setQuantity] = useState(() => getQuantityById(event.id));

    const { addToCart } = useCartStore();

    const handleAddToCart = () => {
        const item = {
            id: event.id,
            name: event.name,
            where: event.where,
            date: event.when.date,
            from: event.when.from,
            to: event.when.to,
            price: event.price,
            quantity,
            totalPrice: event.price * quantity
    };

  addToCart(item);
};

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
import Navbar from "../../components/navBar/NavBar"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventInfo from "../../components/eventInfo/EventInfo";
import TicketCounter from "../../components/ticketCounter/TicketCounter";
import "./eventDetailsPage.css"
import { useCartStore } from "../../store/cartStore";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function EventDetailsPage() {

    const location = useLocation();
    const event = location.state?.event;
    const navigate = useNavigate();

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
            toast.success(`${event.name} x${quantity} har lagts till i kundvagnen`);
            navigate("/events")
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
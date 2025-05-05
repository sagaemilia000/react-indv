import TicketItem from "../ticketItem/TicketItem";
import "./ticketList.css"

function TicketList({ tickets }) {
    if (tickets.length === 0) {
        return <p className="message">Inga biljetter än.</p>;
    }

    return (
        <ul className="ticket-list">
                {tickets.map((ticket, index) => (
                <TicketItem key={index} ticket={ticket} />
            ))}
        </ul>
    );

}

export default TicketList

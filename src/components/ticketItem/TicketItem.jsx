function TicketItem({ ticket }) {
    return (
      <div className="ticket">
        <h2>{ticket.eventName}</h2>
        <p>Datum {ticket.date}</p>
        <p>Tid {ticket.from} - {ticket.to}</p>
        <p>Section {ticket.section} Plats {ticket.seat}</p>
        <p>Biljettnummer {ticket.ticketNumber}</p>
      </div>
    );
  }
  
  export default TicketItem;
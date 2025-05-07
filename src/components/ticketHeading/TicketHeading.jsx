import "./ticketHeading.css"

function TicketHeading({ name }) {
    return (
        <section className="ticket-name">
          <p className="ticket-word">WHAT</p>
          <h2 className="heading ticket-name__heading">{name}</h2>
        </section>
      );
}

export default TicketHeading;
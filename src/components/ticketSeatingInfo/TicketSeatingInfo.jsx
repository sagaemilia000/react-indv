import "./ticketSeatingInfo.css"

function TicketSeatingInfo({ section, seat }) {
    return (
        <section className="ticket-seating">
            <p className="ticket-word">INFO</p>
            <p className="ticket-seating__sec-plc">Section {section} - Plats {seat}</p>
        </section>
    )
}

export default TicketSeatingInfo
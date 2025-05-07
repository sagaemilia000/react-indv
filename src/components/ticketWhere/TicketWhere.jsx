import "./ticketWhere.css"

function TicketWhere({ where }) {
    return (
        <section className="ticket-where">
            <p className="ticket-word">WHERE</p>
            <h3 className="ticket-where__place">{where}</h3>
        </section>
    )
}

export default TicketWhere
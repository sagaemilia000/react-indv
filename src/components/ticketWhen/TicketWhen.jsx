import "./ticketWhen.css"

function TicketWhen({ date, from, to }) {
    return (
        <section className="ticket-when">
            <article>
                <p className="ticket-word">WHEN</p>
                <p className="ticket-info">{date}</p>
            </article>
            <article>
                <p className="ticket-word">FROM</p>
                <p className="ticket-info">{from}</p>
            </article>
            <article>
                <p className="ticket-word">TO</p>
                <p className="ticket-info">{to}</p>
            </article>       
        </section>
    )
}

export default TicketWhen
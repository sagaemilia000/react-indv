import "./ticketItem.css"
import Barcode from "../../assets/barcode.png"

function TicketItem({ ticket }) {
    return (
      <div className="ticket">
        <section className="ticket-name">
            <p className="ticket-word">WHAT</p>
            <h2 className="heading ticket-name__heading">{ticket.eventName}</h2>
        </section>
        
        <section className="ticket-where">
            <p className="ticket-word">WHERE</p>
            <h3 className="ticket-where__place">{ticket.where}</h3>
        </section>
        
        <section className="ticket-when">
            <article>
                <p className="ticket-word">WHEN</p>
                <p className="ticket-info">{ticket.date.slice(0, 6)}</p>
            </article>
            <article>
                <p className="ticket-word">FROM</p>
                <p className="ticket-info">{ticket.from}</p>
            </article>
            <article>
                <p className="ticket-word">TO</p>
                <p className="ticket-info">{ticket.to}</p>
            </article>       
        </section>
        
        <section className="ticket-seating">
            <p className="ticket-word">INFO</p>
            <p className="ticket-seating__sec-plc">Section {ticket.section} - Plats {ticket.seat}</p>
        </section>
        
        <section className="ticket-nmbr">
            <img className="ticket-barcode" src={Barcode} alt="Ticket-barcode" />
            <p>#{ticket.ticketNumber}</p>
        </section>
      </div>
    );
  }
  
  export default TicketItem;
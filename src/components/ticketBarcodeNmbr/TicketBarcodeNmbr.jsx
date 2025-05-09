import Barcode from "../../assets/barcode.png"
import "./ticketBarcodeNmbr.css"

function TicketBarcodeNmbr ({ ticketNmbr }) {
    return (
        <section className="ticket-nmbr">
            <img className="ticket-barcode" src={Barcode} alt="Ticket-barcode" />
            <p>#{ticketNmbr}</p>
        </section>
    )
}

export default TicketBarcodeNmbr
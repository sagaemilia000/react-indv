import "./ticketItem.css"
import TicketHeading from "../ticketHeading/TicketHeading";
import TicketWhere from "../ticketWhere/TicketWhere";
import TicketWhen from "../ticketWhen/TicketWhen";
import TicketSeatingInfo from "../ticketSeatingInfo/TicketSeatingInfo";
import TicketBarcodeNmbr from "../ticketBarcodeNmbr/TicketBarcodeNmbr";

function TicketItem({ ticket }) {
    return (
      <li className="ticket">
        <TicketHeading name={ticket.eventName}/>
        <TicketWhere where={ticket.where} />
        <TicketWhen date={ticket.date.slice(0, 6)} from={ticket.from} to={ticket.to} />
        <TicketSeatingInfo section={ticket.section} seat={ticket.seat}/>
        <TicketBarcodeNmbr ticketNmbr={ticket.ticketNumber}/>
      </li>
    );
  }
  
  export default TicketItem;
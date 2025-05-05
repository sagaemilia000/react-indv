import Navbar from "../../components/navBar/NavBar"
import { useEffect, useState } from "react";
import TicketList from "../../components/ticketList/TicketList";
import "./ticketPage.css"

function TicketPage() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("orders") || "[]");
    setTickets(savedTickets);
  }, []);

  return (
    <div className="page-wrapper ticket-page__background">
        <TicketList tickets={tickets} />
        <Navbar />
    </div>
  );
}

export default TicketPage;
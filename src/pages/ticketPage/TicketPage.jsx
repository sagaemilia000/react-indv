import { useEffect, useState } from "react";
import TicketList from "../../components/ticketList/TicketList";
import "./ticketPage.css"
import { motion } from "framer-motion";

function TicketPage() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("orders") || "[]");
    setTickets(savedTickets);
  }, []);

  return (
    <motion.div
      className="page-wrapper ticket-page__background"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
    >
        <h1 className="heading tickets-heading">Dina biljetter</h1>
        <TicketList tickets={tickets} />
    </motion.div>
  );
}

export default TicketPage;
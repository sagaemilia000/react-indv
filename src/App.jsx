import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import EventDetailsPage from "./pages/eventDetailsPage/EventDetailsPage";
import CartPage from "./pages/cartPage/CartPage";
import TicketPage from "./pages/ticketPage/TicketPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element= {<LandingPage/>} />
        <Route 
          path="/events"
          element= {<EventsPage/>} />
      <Route 
          path="/details/:id"
          element= {<EventDetailsPage/>} />
        <Route 
          path="/cart"
          element= {<CartPage/>} />
        <Route 
          path="/tickets"
          element= {<TicketPage/>} />
        <Route 
          path="*"
          element= {<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

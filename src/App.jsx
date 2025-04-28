import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import HomePage from "./pages/homePage/HomePage";
import EventDetailsPage from "./pages/eventDetailsPage/EventDetailsPage";
import CartPage from "./pages/cartPage/CartPage";
import TicketPage from "./pages/ticketPage/TicketPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element= {<LandingPage/>} />
        <Route 
          path="/home"
          element= {<HomePage/>} />
      <Route 
          path="/details"
          element= {<EventDetailsPage/>} />
        <Route 
          path="/cart"
          element= {<CartPage/>} />
        <Route 
          path="/tickets"
          element= {<TicketPage/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import EventDetailsPage from "./pages/eventDetailsPage/EventDetailsPage";
import CartPage from "./pages/cartPage/CartPage";
import TicketPage from "./pages/ticketPage/TicketPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Navbar from "./components/navBar/NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/layout/Layout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
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
          </Route>
        </Routes>
        <Navbar />
      </BrowserRouter>
      <ToastContainer 
        position="top-center" 
        autoClose={3000}
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body" />
        
    </>
  )
}

export default App

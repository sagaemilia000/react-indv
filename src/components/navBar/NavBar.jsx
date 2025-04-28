import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return(
        <nav className="navbar">
            <Link className="navbar__item" to="/">
                Hem
            </Link>
            <Link className="navbar__item" to="/events">
                Event
            </Link>
            <Link className="navbar__item" to="/tickets"> 
                Biljetter
            </Link>
        </nav>
    )
}

export default Navbar
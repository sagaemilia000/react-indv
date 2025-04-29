import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return(
        <nav className="navbar">
            <Link className="navbar__item link" to="/">
                Hem
            </Link>
            <Link className="navbar__item link" to="/events">
                Event
            </Link>
            <Link className="navbar__item link" to="/tickets"> 
                Biljetter
            </Link>
        </nav>
    )
}

export default Navbar
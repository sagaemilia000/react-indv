import Logo from "../../components/logo/Logo"
import Navbar from "../../components/navBar/NavBar"
import "./landingpage.css"


function LandingPage() {
    return (
        <>
            <div className="landingpage-wrapper">
                <Logo />
                <Navbar />
            </div>
            
        </>
    )
}

export default LandingPage
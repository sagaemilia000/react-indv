import Navbar from "../../components/navBar/NavBar"
import ErrorIcon from "../../assets/error.svg"
import "./errorPage.css"

function ErrorPage() {
    return (
        <div className="page-wrapper error-page">
            <section className="error-section">
                <img className="error-section__icon" src={ErrorIcon} alt="Error icon" />
                <h1 className="error-section__msg">Oops! Sidan kunde inte hittas</h1>
                <p className="error-section__paragraph">Det verkar som att sidan du letar efter inte finns eller har flyttats.</p>
            </section>
            <Navbar />
        </div>
    )
}

export default ErrorPage
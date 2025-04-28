import LogoIcon from "../../assets/logo.png"
import "./logo.css";

function Logo() {
    return (
        <section className="logo-section">
            <img src={LogoIcon} alt="Logo" className="logo-section__logo" />
            <h1 className="logo-section__title">Where it's @</h1>
            <h2 className="logo-section__subtitle">Ticketing made easy</h2>
        </section>
    )
}

export default Logo
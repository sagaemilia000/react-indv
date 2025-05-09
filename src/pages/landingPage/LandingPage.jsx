import Logo from "../../components/logo/Logo"
import "./landingpage.css"
import { motion } from "framer-motion";


function LandingPage() {
    return (
        <motion.div
            className="landingpage-wrapper"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
        >
            <Logo />
        </motion.div>   
    )
}

export default LandingPage
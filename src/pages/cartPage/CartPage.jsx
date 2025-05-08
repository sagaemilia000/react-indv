import { useCartStore } from "../../store/cartStore";
import CartList from "../../components/cartList/CartList";
import "./cartPage.css";
import { useNavigate } from "react-router-dom";
import { fireConfetti } from "../../utils/confetti";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, submitOrder } = useCartStore();
  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    submitOrder()
    fireConfetti();
    navigate("/tickets")
  }

  return (
    <motion.div
      className="page-wrapper"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <Link to="/events" className="back-arrow">
        <span>◀</span>
      </Link>
      <h1 className="heading">Order</h1>
      {cartItems.length === 0 ? (
        <>
          <p className="message">Kundvagnen är tom</p>
        </>
        ) : (
        <>
          <CartList items={cartItems} />
          <p className="event-info__paragraph">Totalt värde på order</p>
          <h2 className="ticket-counter__total">{total} SEK</h2>
          <button className="btn" onClick={handleSubmit}>Skicka order</button>
        </>
      )}
    </motion.div>
  );
}

export default CartPage;
import Navbar from "../../components/navBar/NavBar"
import { useCartStore } from "../../store/cartStore";
import CartList from "../../components/cartList/CartList";
import "./cartPage.css";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cartItems, submitOrder } = useCartStore();
  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    submitOrder()
    navigate("/tickets")
  }

  return (
    <div className="page-wrapper">
      <h1 className="heading">Order</h1>
      {cartItems.length === 0 ? (
        <>
        <p className="message">Kundvagnen är tom</p>
        <Navbar />
        </>
      ) : (
        <>
          <CartList items={cartItems} />
          <p className="event-info__paragraph">Totalt värde på order</p>
          <h2 className="ticket-counter__total">{total} SEK</h2>
          <button className="btn" onClick={handleSubmit}>Skicka order</button>
          <Navbar />
        </>
      )}
    </div>
  );
}

export default CartPage;
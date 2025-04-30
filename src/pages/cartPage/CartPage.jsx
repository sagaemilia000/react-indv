import Navbar from "../../components/navBar/NavBar"
import { useCartStore } from "../../store/cartStore";
import CartList from "../../components/cartList/CartList";
import "./cartPage.css";

function CartPage() {
  const { cartItems, clearCart } = useCartStore();
  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

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
          <p>Totalt värde på order</p>
          <h2>Totalt: {total} SEK</h2>
          <button onClick={clearCart}>Skicka order</button>
          <Navbar />
        </>
      )}
    </div>
  );
}

export default CartPage;
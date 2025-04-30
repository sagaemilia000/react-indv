import Navbar from "../../components/navBar/NavBar"
// import { useCartStore } from "../../store/cartStore";
// import "./cartPage.css";

// function CartPage() {

//     const { cartItems, clearCart } = useCartStore();

//     const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

//     return (
//         <>
//             <div className="page-wrapper">
//                 <h1 className="heading">Order</h1>
//                 {cartItems.length === 0 ? (
//                 <p>Kundvagnen är tom.</p>
//                 ) : (
//                 <>
//                     <ul>
//                         {cartItems.map((item, index) => (
//                         <li key={index} className="cart-item">
//                             <h2>{item.name}</h2>
//                             <p>Antal: {item.quantity}</p>
//                             <p>Pris per biljett: {item.price} SEK</p>
//                             <p>Total: {item.totalPrice} SEK</p>
//                         </li>
//                         ))}
//                     </ul>
//                     <h2>Totalt: {total} SEK</h2>
//                     <button onClick={clearCart}>Slutför och töm kundvagn</button>
//                 </>
//         )}
//             </div>
//             <Navbar />
//         </>
        
//     )
// }

// export default CartPage

import { useCartStore } from "../../store/cartStore";
import CartList from "../../components/cartList/CartList";
import "./cartPage.css";

function CartPage() {
  const { cartItems, clearCart } = useCartStore();
  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="page-wrapper">
      <h1 className="heading">Din Kundvagn</h1>
      {cartItems.length === 0 ? (
        <p>Kundvagnen är tom.</p>
      ) : (
        <>
          <CartList items={cartItems} />
          <h2>Totalt: {total} SEK</h2>
          <button onClick={clearCart}>Slutför och töm kundvagn</button>
          <Navbar />
        </>
      )}
    </div>
  );
}

export default CartPage;
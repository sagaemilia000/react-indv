import CartItem from "../cartItem/CartItem";
import "./cartList.css"

function CartList({ items }) {
  return (
    <ul className="cart-list">
      {items.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default CartList;
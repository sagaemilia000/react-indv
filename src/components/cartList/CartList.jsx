import CartItem from "../cartItem/CartItem";

function CartList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default CartList;
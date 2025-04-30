import "./cartItem.css"
import { useCartStore } from "../../store/cartStore";

function CartItem({ item }) {

    const { updateQuantity } = useCartStore();

    const increase = () => updateQuantity(item.id, item.quantity + 1);
    const decrease = () => updateQuantity(item.id, item.quantity - 1);

    return (
        <li className="cart-item">
            <h2>{item.name}</h2>
            <p>{item.date} kl {item.from} - {item.to}</p>
            <p>{item.quantity}</p>
            <div className="cart-item__controls">
                <button onClick={decrease}>–</button>
                <span>{item.quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        </li>
    )
}

export default CartItem
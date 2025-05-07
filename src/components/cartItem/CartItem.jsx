import "./cartItem.css"
import { useCartStore } from "../../store/cartStore";

function CartItem({ item }) {

    const { updateQuantity } = useCartStore();

    const increase = () => updateQuantity(item.id, item.quantity + 1);
    const decrease = () => updateQuantity(item.id, item.quantity - 1);

    return (
        <li className="ticket-counter cart-item">
            <div className="ticket-counter__controls">
                <section className="cart-item__info">
                    <h2 className="cart-item__title">{item.name}</h2>
                    <p className="cart-item__when">{item.date} kl {item.from} - {item.to}</p>
                </section>
                <section className="ticket-counter__counter cart-item__counter">
                    <button className="cart-item__btn ticket-counter__btn" onClick={decrease}>–</button>
                    <span className="cart-item__value ticket-counter__value">{item.quantity}</span>
                    <button className="cart-item__btn ticket-counter__btn" onClick={increase}>+</button>
                </section>
            </div>
        </li>
    )
}

export default CartItem
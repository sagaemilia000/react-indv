import "./cartItem.css"

function CartItem({ item }) {
    return (
        <li>
            <h2>{item.name}</h2>
            <p>{item.date} kl {item.from} - {item.to}</p>
            <p>{item.quantity}</p>
        </li>
    )
}

export default CartItem
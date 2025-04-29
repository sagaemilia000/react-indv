import { useNavigate } from "react-router-dom"

function CartBtn() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart');
    };

    return (
        <button onClick={handleClick} className="btn">
            Till varukorg
        </button>
    )
}

export default CartBtn
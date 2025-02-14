import React from 'react';
import {useCart} from "../../context/CartContext";
import {getProductQuantity} from "../../utils/CartUtils";

const AddAndRemoveFromCartButton = ({product}) => {
    const {cart, addToCart, removeFromCart} = useCart();
    const quantity = getProductQuantity(cart, product);

    return (
        <div className="d-flex justify-content-center align-items-center gap-2 mt-auto">
            <button onClick={() => removeFromCart(product.id)}
                    className="btn btn-primary">
                -
            </button>
            <span className="fw-bold">{quantity}</span>
            <button onClick={() => addToCart(product)}
                    className="btn btn-primary">
                +
            </button>
        </div>

    );
}
export default AddAndRemoveFromCartButton;
import React from 'react';
import '../../styles/styles.css';
import {useCart} from "../../context/CartContext";

const ProductItem = ({ product, onAddToCart }) => {
    const { cart } = useCart();
    const currentProductInCart = cart.find(item => item.id === product.id);
    const quantity = currentProductInCart ? currentProductInCart.quantity : 0;
    return (
        <div>
            <img className="image" src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>

            {quantity > 0 && <p>Количество в корзине: {quantity}</p>}

            <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
        </div>
    );
};

export default ProductItem;

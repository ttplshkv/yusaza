import React from 'react';
import '../../styles/styles.css';

const CartItem = ({product, onRemoveFromCart}) => {
    return (
        <div>
            <img className="image" src={product.image} alt={product.name}/>

            {product.name} - {product.price} руб., кол-во: {product.quantity}
            <button onClick={() => onRemoveFromCart(product)}>Удалить из корзины</button>
        </div>
    );
};

export default CartItem;

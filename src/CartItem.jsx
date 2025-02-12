import React from 'react';

const CartItem = ({ product, onRemoveFromCart }) => {
    return (
        <li>
            {product.name} - {product.price} руб., кол-во: {product.quantity}
            <button onClick={() => onRemoveFromCart(product)}>Удалить из корзины</button>
        </li>
    );
};

export default CartItem;

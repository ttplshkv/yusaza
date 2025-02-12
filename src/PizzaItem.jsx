import React from 'react';

const PizzaItem = ({ pizza, onAddToCart }) => {
    return (
        <li>
            {pizza.name} - {pizza.price} руб.
            <button onClick={() => onAddToCart(pizza)}>Добавить в корзину</button>
        </li>
    );
};

export default PizzaItem;

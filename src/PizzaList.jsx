import React from 'react';
import { Link } from 'react-router-dom';
import PizzaItem from './PizzaItem';
import { useCart } from './CartContext';

const pizzas = [
    { id: 1, name: "Маргарита", price: 400 },
    { id: 2, name: "Пепперони", price: 500 },
    { id: 3, name: "Четыре сыра", price: 600 }
];

const PizzaList = () => {
    const { addToCart } = useCart();  // Используем хук для добавления товара в корзину

    return (
        <div>
            <h1>Меню пицц</h1>
            <ul>
                {pizzas.map((pizza) => (
                    <PizzaItem key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
            </ul>
            <Link to="/cart">Перейти в корзину</Link>
        </div>
    );
};

export default PizzaList;

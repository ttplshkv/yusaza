import React from 'react';
import { useCart } from './CartContext';
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

function CartPage() {
    const { cart, removeFromCart } = useCart();  // Получаем состояние корзины и метод удаления

    return (
        <div>
            <h1>Корзина</h1>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} onRemoveFromCart={removeFromCart} />
                    ))}
                </ul>
            )}
            <p>Общая сумма: {countSum(cart)}</p>
            <Link to="/pizzas">Перейти в меню пицц</Link>
        </div>
    );
};

function countSum(cart) {
    let sum = 0;

    cart.forEach(product => {
        sum += (product.price * product.quantity);
    });

    return sum;
}

export default CartPage;

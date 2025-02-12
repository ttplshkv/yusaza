import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from "../components/items/CartItem";
import {Link} from "react-router-dom";
import MainButton from "../components/buttons/MainButton";

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
            <MainButton/>
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

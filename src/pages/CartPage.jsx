import React from 'react';
import { useCart } from '../context/CartContext';
import MainButton from "../components/buttons/MainButton";
import ProductItem from "../components/items/ProductItem";

function CartPage() {
    const { cart } = useCart();

    return (
        <div>
            <h1>Корзина</h1>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 g-3">
                    {cart.map((product) => (
                        <ProductItem key={product.id} product={product} />
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

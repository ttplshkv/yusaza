import React from 'react';
import {useCart} from '../context/CartContext';
import MainButton from "../components/buttons/MainButton";
import ProductItem from "../components/items/ProductItem";
import OrderService from "../API/OrderService";

function CartPage({products, address}) {
    const {cart} = useCart();

    return (
        <div className="cart-page">
            <div style={{textAlign: "center"}}>
                <h1 style={{textAlign: "center"}}>Корзина</h1>
                {cart.length === 0 ? (
                    <h3>Корзина пуста</h3>
                ) : (
                    <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 g-3 d-flex justify-content-center">
                        {cart.map((product) => (
                            <ProductItem key={product.id} product={product}/>
                        ))}
                    </ul>
                )}
            </div>

            <p style={{
                borderTop: "1px solid #ccc",
                margin: "20px 0"
            }}>Общая сумма: {countSum(cart)}</p>


            <button className="btn btn-primary" onClick={() => createOrder({ products: cartToIds(cart), personName: "Какое-то имя", number: "Какой-то номер телефона", address: "Какой-то адрес", fullAmount: countSum(cart) })}>
                Оформить заказ
            </button>

        </div>
    );
};

async function createOrder(orderData) {
    if (orderData.products.length === 0) {
        alert("Корзина пуста. Добавьте что-то для оформления заказа");
        return;
    }

    try {
        const data = await OrderService.createOrder(orderData);
        console.log("created order: ", data.order);
        console.log(`Заказ успешно создан! ID: ${data.order._id}`);
        alert(`Заказ успешно создан!`);
    } catch (error) {
        alert("Ошибка при оформлении заказа.");
    }
}

function cartToIds(cart) {
    console.log("cartToIds cart: ", cart);
    console.log("cartToIds cartIds: ", cart.map(product => ({
        productId: product.id,
        quantity: product.quantity
    })));

    return cart.map(product => ({
        productId: product.id,
        quantity: product.quantity
    }));
}

function countSum(cart) {
    let sum = 0;

    cart.forEach(product => {
        sum += (product.price * product.quantity);
    });

    return sum;
}

export default CartPage;

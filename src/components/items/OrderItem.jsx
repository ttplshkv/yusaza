import React from 'react';
import useOrderProducts from "../../hooks/useOrderProducts";

const OrderItem = ({ order }) => {
    const { products, error } = useOrderProducts(order);

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Заказ №{order._id}</h2>
            <p><strong>Адрес доставки:</strong> {order.address}</p>
            <p><strong>Сумма заказа:</strong> {order.fullAmount} ₽</p>

            <h3 className="mt-2 font-semibold">Товары:</h3>
            <ul className="list-disc pl-4">
                {products.map((item) => (
                    <li key={item._id}>
                        <p><strong>{item.title}</strong></p>
                        <p>Количество: {item.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderItem;

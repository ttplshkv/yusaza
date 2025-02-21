import React from 'react';
import { format } from "date-fns";

import useOrderProducts from "../../hooks/useOrderProducts";

const OrderItem = ({order}) => {
    const {products, error} = useOrderProducts(order);

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Заказ №{order._id}</h2>
            <p><strong>Адрес доставки:</strong> {order.address}</p>
            <p><strong>Сумма заказа:</strong> {order.fullAmount} ₽</p>

            {order.isCompleted ? <p>Выполнено</p> : <p>В процессе...</p>}

            <h3 className="mt-2 font-semibold">Товары:</h3>
            <div>
                {products.map((product) => {
                    const orderProduct = order.products.find(p => p.productId === product._id);

                    return (
                        <div key={product._id} style={{border: "1px solid black", padding: "5px"}}>
                            <span className="mr-auto"><strong>{product.name}</strong></span>
                            <span> Количество: {orderProduct ? orderProduct.quantity : "Не найдено"}</span>
                        </div>
                    );
                })}
            </div>

            <h3 className="mt-2 font-semibold">
                Дата: {order.createdAt ? format(new Date(order.createdAt), "dd.MM.yyyy") : "нет данных"}
            </h3>
            <h3 className="mt-2 font-semibold">
                Время: {order.createdAt ? format(new Date(order.createdAt), "HH:mm") : "нет данных"}
            </h3>
        </div>
    );
};

export default OrderItem;

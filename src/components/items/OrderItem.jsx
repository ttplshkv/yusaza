import React from "react";
import { format } from "date-fns";
import useOrderProducts from "../../hooks/useOrderProducts";
import useOrderUpdate from "../../hooks/useOrderUpdate";

const OrderItem = ({ order }) => {
    const { products, error } = useOrderProducts(order);
    const {update, errorUpdate} = useOrderUpdate();

    if (error) return <div className="error">{error}</div>;

    // Форматирование дат
    const createdDate = order?.createdAt ? format(new Date(order.createdAt), "dd.MM.yyyy") : "нет данных";
    const createdTime = order?.createdAt ? format(new Date(order.createdAt), "HH:mm") : "нет данных";

    const completedDate = order?.completedAt ? format(new Date(order.completedAt), "dd.MM.yyyy") : "нет данных";
    const completedTime = order?.completedAt ? format(new Date(order.completedAt), "HH:mm") : "нет данных";

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Заказ №{order._id}</h2>
            <p><strong>Адрес доставки:</strong> {order.address}</p>
            <p><strong>Сумма заказа:</strong> {order.fullAmount} ₽</p>

                {order.isCompleted
                    ? <p><strong>Статус: </strong> выполнено</p>
                    : <p><strong>Статус: </strong> в процессе...</p>
                }

            <h3 className="mt-2 font-semibold">Товары:</h3>
            <div className="grid gap-2">
                {products.map((product) => {
                    const orderProduct = order.products.find(p => p.productId === product._id);

                    return (
                        <div key={product._id} className="border p-2 rounded-md shadow-sm flex justify-between">
                            <strong>{product.name}</strong>
                            <span>, количество: {orderProduct?.quantity ?? "Не найдено"}</span>
                        </div>
                    );
                })}
            </div>

            <h3 className="mt-2 font-semibold">Дата создания: {createdDate}</h3>
            <h3 className="mt-2 font-semibold">Время создания: {createdTime}</h3>

            {order.isCompleted && (
                <div className="mt-4 p-2 bg-gray-100 rounded-lg">
                    <h2 className="text-green-600 font-bold">Выполнено:</h2>
                    <h3 className="font-semibold">Дата: {completedDate}</h3>
                    <h3 className="font-semibold">Время: {completedTime}</h3>
                </div>
            )}

            {!order.isCompleted && (
                <button className="btn btn-danger" onClick={async () => {
                    try {
                        const updatedOrder = await update(order._id, {isCompleted: true, completedAt: new Date()});
                        console.log("Обновленный заказ:", updatedOrder);
                    } catch (error) {
                        alert(error.message);
                    }
                }}>
                    Завершить заказ
                </button>
            )}
        </div>
    );
};

export default OrderItem;

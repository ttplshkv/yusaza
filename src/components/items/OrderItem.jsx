import React from "react";
import {format} from "date-fns";
import useOrderProducts from "../../hooks/useOrderProducts";
import useOrderUpdate from "../../hooks/useOrderUpdate";
import "../../styles/styles.css";

const OrderItem = ({order}) => {
    const {products, error} = useOrderProducts(order);
    const {update, errorUpdate} = useOrderUpdate();

    if (error || errorUpdate) return <div className="error">{error ? error : errorUpdate}</div>;

    // Форматирование дат
    const createdDate = order?.createdAt ? format(new Date(order.createdAt), "dd.MM.yyyy") : "нет данных";
    const createdTime = order?.createdAt ? format(new Date(order.createdAt), "HH:mm") : "нет данных";

    const completedDate = order?.completedAt ? format(new Date(order.completedAt), "dd.MM.yyyy") : "нет данных";
    const completedTime = order?.completedAt ? format(new Date(order.completedAt), "HH:mm") : "нет данных";

    return (
        <div className="border border-black border-2 rounded-lg mt-5">
            <h2 className="border-bottom border-black border-2 text-lg font-bold">Заказ №{order._id}</h2>
            <p className="custom-border-bottom"><strong>Имя заказчика:</strong> {order.personName}</p>
            <p className="custom-border-bottom"><strong>Номер телефона:</strong> {order.number}</p>
            <p className="custom-border-bottom"><strong>Адрес доставки:</strong> {order.address}</p>
            <p className="custom-border-bottom"><strong>Сумма заказа:</strong> {order.fullAmount} ₽</p>

            {order.isCompleted
                ? <p className="custom-border-bottom"><strong>Статус: </strong> выполнено</p>
                : <p className="custom-border-bottom"><strong>Статус: </strong> в процессе...</p>
            }

            <div className="border-top-bottom rounded-md">
                <h3 className="custom-border-bottom text-center mt-2 font-semibold">Товары:</h3>
                <div className="grid gap-2">
                    {(products || []).map((product) => {
                        const orderProduct = order.products.find(p => p.productId === product._id);

                        return (
                            <div key={product._id} className="custom-border-bottom border-bottom-0 flex justify-between">
                                <strong>{product.name}: </strong>
                                <span>{orderProduct?.quantity ?? "Не найдено"}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <p className="custom-border-bottom border-top border-black border-2 border-bottom-0 mt-2 font-semibold">Дата создания: {createdDate}</p>
            <p className="custom-border-bottom mt-2 font-semibold">Время создания: {createdTime}</p>

            {order.isCompleted && (
                <div>
                    <h3 className="custom-border-bottom text-center">Выполнено:</h3>
                    <p className="custom-border-bottom border-bottom-0 font-semibold">Дата: {completedDate}</p>
                    <p className="custom-border-bottom border-bottom-0 font-semibold">Время: {completedTime}</p>
                </div>
            )}

            {!order.isCompleted && (
                <button className="btn btn-danger" onClick={async () => {
                    try {
                        const updatedOrder = await update(order._id, {isCompleted: true, completedAt: new Date()});
                        console.log("Обновленный заказ:", updatedOrder);
                        window.location.reload(true);
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

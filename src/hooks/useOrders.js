import { useState, useEffect } from "react";
import OrderService from "../API/OrderService";

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadOrders = async () => {
            setError(null);
            try {
                const data = await OrderService.getAllOrders();

                if (data && Array.isArray(data.data.orders)) {
                    setOrders(data.data.orders);
                    console.log("Полученные заказы от сервера", data.data.orders);
                } else {
                    console.error("Ожидался массив, но получено:", data.data.orders);
                    setOrders([]);
                }
            } catch (error) {
                console.error("Ошибка при загрузке заказов:", error);
                setError("Произошла ошибка при загрузке заказов");
                setOrders([]);
            }
        };

        loadOrders();
    }, []); // Пустой массив зависимостей → вызов только 1 раз при монтировании

    return { orders, error };
};

export default useOrders;

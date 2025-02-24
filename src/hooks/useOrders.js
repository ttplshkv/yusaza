import { useEffect } from "react";
import useFetch from "./useFetch";
import OrderService from "../API/OrderService";

const useOrders = () => {
    const { data, error, fetchData } = useFetch(() =>
        OrderService.getAllOrders().then((response) => {
            if (response && Array.isArray(response.data.orders)) {
                console.log("Полученные заказы от сервера", response.data.orders);
                return response.data.orders;
            } else {
                console.error("Ожидался массив, но получено:", response.data.orders);
                return [];
            }
        })
    );

    useEffect(() => {
        fetchData();
    }, []);

    return { orders: data ?? [], error };
};

export default useOrders;

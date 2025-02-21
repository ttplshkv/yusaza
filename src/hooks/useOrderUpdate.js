import { useState } from "react";
import axios from "axios";
import OrderService from "../API/OrderService";

const useOrderUpdate = () => {
    const [error, setError] = useState(null);

    const update = async (id, data) => {
        try {
            setError(null);
            const response = await OrderService.updateOrder(id, data);
            return response.data;
        } catch (err) {
            console.error("Ошибка при обновлении заказа:", err);
            setError("Ошибка при обновлении заказа");
        }
    };

    return { update, error };
};

export default useOrderUpdate;

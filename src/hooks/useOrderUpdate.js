import useFetch from "./useFetch";
import OrderService from "../API/OrderService";

const useOrderUpdate = () => {
    const { data, error, fetchData } = useFetch(OrderService.updateOrder);

    const update = async (id, updateData) => {
        await fetchData(id, updateData);
        return data; // Возвращаем обновленный заказ
    };

    return { update, error };
};

export default useOrderUpdate;

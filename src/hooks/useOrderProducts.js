import {useEffect} from "react";
import ProductService from "../API/ProductService";
import useFetch from "./useFetch";

const useOrderProducts = (order) => {
    const {data: products, error, fetchData} = useFetch(ProductService.getProductsByIds);

    useEffect(() => {
        if (!order?.products?.length) {
            fetchData([])
                .then(() => {
                    console.log("Данные успешно загружены");
                })
                .catch((error) => {
                    console.error("Ошибка при загрузке данных:", error);
                });
            return;
        }

        const productIds = order.products.map((item) => item.productId);
        fetchData(productIds)
            .then(() => {
                console.log("Данные успешно загружены");
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
    }, [order]);

    return {products, error};
};

export default useOrderProducts;

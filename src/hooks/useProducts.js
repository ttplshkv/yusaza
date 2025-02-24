import {useEffect} from "react";
import ProductService from "../API/ProductService";
import useFetch from "./useFetch";

const useProducts = (category) => {
    const {data: products, error, fetchData} = useFetch(ProductService.getProductsByCategory);

    useEffect(() => {
        fetchData(category)
            .then(() => {
                console.log("Данные успешно загружены");
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
    }, [category]);


    return {products, error};
};

export default useProducts;

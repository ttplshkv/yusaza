import {useState, useEffect} from "react";
import ProductService from "../API/ProductService";

const loadProducts = async (category, setProducts, setError) => {
    setError(null);
    try {
        const data = await ProductService.getProductsByCategory(category);

        if (data && Array.isArray(data)) {
            setProducts(data);
        } else {
            console.error("Ожидался массив, но получено:", data);
            setProducts([]);
        }
    } catch (error) {
        console.error("Ошибка при загрузке продуктов:", error);
        setError("Произошла ошибка при загрузке продуктов");
        setProducts([]);
    }
};

const useProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        loadProducts(category, setProducts, setError);
    }, [category]);

    return {products, error};
};

export default useProducts;

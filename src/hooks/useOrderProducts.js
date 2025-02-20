import {useState, useEffect} from "react";
import ProductService from "../API/ProductService";

const useOrderProducts = (order) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        if (!order?.products?.length) {
            setProducts([]);
            return;
        }

        setError(null);
        try {
            const productIds = order.products.map((item) => item.productId);
            const fetchProducts = await ProductService.getProductsByIds(productIds);

            setProducts(fetchProducts);
        } catch (error) {
            console.error("Ошибка при загрузке товаров заказа:", error);
            setError("Ошибка загрузки товаров");
            setProducts([]);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [order]);

    return {products, error};
};

export default useOrderProducts;

import { useState, useEffect } from "react";
import ProductService from "../API/ProductService";

const useOrderProducts = (order) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!order?.products?.length) {
                setProducts([]);
                return;
            }

            setError(null);
            try {
                const loadedProducts = await Promise.all(
                    order.products.map(async (item) => {
                        const product = await ProductService.getProductById(item.productId);
                        return {
                            ...item,
                            title: product ? product.name : "Неизвестный товар",
                        };
                    })
                );
                setProducts(loadedProducts);
            } catch (error) {
                console.error("Ошибка при загрузке товаров заказа:", error);
                setError("Ошибка загрузки товаров");
                setProducts([]);
            }
        };

        fetchProducts();
    }, [order]);

    return { products, error };
};

export default useOrderProducts;

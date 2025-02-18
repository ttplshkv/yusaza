import axios from "axios";

const ProductService = {
    async createOrder({ products, address, fullAmount }) {
        try {
            const id = 1;
            const response = await axios.post("http://localhost:5000/api/orders", {
                id,
                products,
                address,
                fullAmount
            });
            return response.data;
        } catch (error) {
            console.error("Ошибка при создании заказа:", error);
            throw error;
        }
    },
};

export default ProductService;

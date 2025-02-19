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
    async getAllOrders() {
        try {
            const response = await axios.get("http://localhost:5000/api/orders");

            if (!response.status) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

export default ProductService;

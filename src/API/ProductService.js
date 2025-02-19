import axios from "axios";

const ProductService = {
    async getProductsByCategory(category = 'pizza') {
        try {
            const response = await axios.get("http://localhost:5000/api/products", {
                params: {
                    category: category
                }
            });

            if (!response.status) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response;
        } catch (error) {
            console.error("Ошибка при запросе продуктов:", error);
            return [];
        }
    },
    async getProductById(id) {
        try {
            const response = await axios.get("http://localhost:5000/api/products", {
                params: {
                    id: id
                }
            });

            if (!response.status) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response;
        } catch (error) {
            console.error("Ошибка при запросе продуктов:", error);
            return [];
        }
    }
}

export default ProductService;
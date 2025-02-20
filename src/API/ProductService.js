import axios from "axios";

const ProductService = {
    async getProductsByCategory(category = 'pizza') {
        try {
            const response = await axios.get(`http://localhost:5000/api/products`, {
                params: {
                    category: category
                }
            });

            if (!response.status) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.data.products;
        } catch (error) {
            console.error("Ошибка при запросе продуктов:", error);
            return [];
        }
    },
    async getProductById(id) {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);

            console.log("getProductById: ", response);

            if (!response.status) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.data.product;
        } catch (error) {
            console.error("Ошибка при запросе продуктов:", error);
            return [];
        }
    },
    async getProductsByIds(ids) {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/by-ids?ids=${ids.join(',')}`);

            if (!response.status) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.data.products;
        } catch (error) {
            console.error("Ошибка при запросе продуктов:", error);
            return [];
        }
    }
}

export default ProductService;
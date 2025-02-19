const Product = require('./models/Product');
const Order = require('./models/Order');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

app.get('/api/products', async (req, res) => {
    try {
        const {category} = req.query;
        let products;

        if (category) {
            products = await Product.find({category});
        } else {
            products = await Product.find();
        }
        res.status(200).json({
            message: "Продукты успешно получены",
            products: products
        });
    } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
        res.status(500).json({message: 'Ошибка сервера'});
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        console.log("product: ", product);

        if (!product) {
            return res.status(404).json({ message: "Продукт не найден" });
        }

        res.status(200).json({
            message: "Продукт успешно получен",
            product: product
        });
    } catch (error) {
        console.error("Ошибка при получении продукта:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});


app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json({
            message: "Заказы успешно получены",
            orders: orders
        });
    } catch (error) {
        console.error('Ошибка при получении заказов:', error);
        res.status(500).json({message: 'Ошибка сервера'});
    }
});

app.post('/api/orders', async (req, res) => {
    try {
        const {products, address, fullAmount} = req.body;

        console.log("req: ", products, address, fullAmount);

        // Проверка обязательных полей
        if (!products || !Array.isArray(products) || products.length === 0 || !address || !fullAmount) {
            return res.status(400).json({message: 'Некорректные данные заказа'});
        }

        // Проверка структуры products
        for (const item of products) {
            if (!item.productId || !item.quantity) {
                return res.status(400).json({message: 'Каждый продукт должен содержать productId и quantity'});
            }
        }

        const order = new Order({products, address, fullAmount});
        await order.save();

        res.status(200).json({
            message: 'Заказ успешно создан', order: order
        });
    } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
        res.status(500).json({message: 'Ошибка сервера'});
    }
});

async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/food_delivery')
        console.log('Успешно подключено к MongoDB');
    } catch (error) {
        console.error('Ошибка подключения к MongoDB:', error);
        process.exit(1);
    }
}

connectToMongoDB()
    .then(() => {
        const PORT = 5000;
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Ошибка при запуске сервера:', error);
    });
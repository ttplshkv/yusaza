const Product = require('./models/Product');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

app.get('/api/products', async (req, res) => {
    try {
        const { category } = req.query;
        let products;

        if (category) {
            products = await Product.find({ category });
        } else {
            products = await Product.find();
        }
        res.json(products);
    } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
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
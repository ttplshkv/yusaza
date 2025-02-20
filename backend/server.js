const express = require("express");
const cors = require("cors");
const connectToMongoDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Настройка CORS
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Middleware для обработки JSON
app.use(express.json());

// Подключение маршрутов
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Запуск сервера после подключения к MongoDB
connectToMongoDB().then(() => {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}`);
    });
}).catch(error => {
    console.error("Ошибка при запуске сервера:", error);
});

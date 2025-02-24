const express = require("express");
const Order = require("../models/Order");
const {ObjectId} = require("mongodb");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ message: "Заказы успешно получены", orders });
    } catch (error) {
        console.error("Ошибка при получении заказов:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

router.post("/", async (req, res) => {
    try {
        const orderData = req.body;

        console.log("Полученный заказ:", req.body);

        if (!orderData.products || !Array.isArray(orderData.products) || orderData.products.length === 0 || !orderData.address || !orderData.fullAmount) {
            return res.status(400).json({ message: "Некорректные данные заказа" });
        }

        for (const item of orderData.products) {
            if (!item.productId || !item.quantity) {
                return res.status(400).json({ message: "Каждый продукт должен содержать productId и quantity" });
            }
        }

        const order = new Order(orderData);
        await order.save();

        res.status(200).json({ message: "Заказ успешно создан", order });
    } catch (error) {
        console.error("Ошибка при создании заказа:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const data = req.body; // Получаем все обновленные поля из запроса

        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: "Нет данных для обновления" });
        }

        const result = await Order.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: data }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Заказ не найден" });
        }

        res.json({ message: "Заказ обновлен", result });
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера", error });
    }
});

module.exports = router;

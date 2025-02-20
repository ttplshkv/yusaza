const express = require("express");
const Order = require("../models/Order");
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
        const { products, address, fullAmount } = req.body;

        if (!products || !Array.isArray(products) || products.length === 0 || !address || !fullAmount) {
            return res.status(400).json({ message: "Некорректные данные заказа" });
        }

        for (const item of products) {
            if (!item.productId || !item.quantity) {
                return res.status(400).json({ message: "Каждый продукт должен содержать productId и quantity" });
            }
        }

        const order = new Order({ products, address, fullAmount });
        await order.save();

        res.status(200).json({ message: "Заказ успешно создан", order });
    } catch (error) {
        console.error("Ошибка при создании заказа:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

// router.patch("/:id", async (req, res) => {
//
// })

module.exports = router;

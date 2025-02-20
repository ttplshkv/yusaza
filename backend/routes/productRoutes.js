const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { category } = req.query;
        const products = category ? await Product.find({ category }) : await Product.find();
        res.status(200).json({ message: "Продукты успешно получены", products });
    } catch (error) {
        console.error("Ошибка при получении продуктов:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

router.get("/by-ids", async (req, res) => {
    try {
        const { ids } = req.query;
        if (!ids) {
            return res.status(400).json({ message: "Не переданы ID продуктов" });
        }

        const productIds = ids.split(",");
        const products = await Product.find({ _id: { $in: productIds } });

        res.status(200).json({ message: "Продукты успешно получены", products });
    } catch (error) {
        console.error("Ошибка при получении продуктов:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Продукт не найден" });
        }

        res.status(200).json({ message: "Продукт успешно получен", product });
    } catch (error) {
        console.error("Ошибка при получении продукта:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

module.exports = router;

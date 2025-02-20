const mongoose = require("mongoose");

async function connectToMongoDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/food_delivery");
        console.log("Успешно подключено к MongoDB");
    } catch (error) {
        console.error("Ошибка подключения к MongoDB:", error);
        process.exit(1);
    }
}

module.exports = connectToMongoDB;
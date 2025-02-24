const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        }
    ],
    personName: String,
    number: String,
    address: String,
    fullAmount: Number,
    isCompleted: { type: Boolean, default: false },
    completedAt: { type: Date, default: null },
}, { timestamps: true }); // Добавляем автоматические метки времени;

module.exports = mongoose.model('Order', orderSchema);

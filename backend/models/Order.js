const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        }
    ],
    address: String,
    fullAmount: Number,
    isCompleted: { type: Boolean, default: false }
}, { timestamps: true }); // Добавляем автоматические метки времени;

module.exports = mongoose.model('Order', orderSchema);

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
});

module.exports = mongoose.model('Order', orderSchema);

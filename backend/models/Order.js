const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            productId: Number,
            quantity: Number
        }
    ],
    address: String,
    fullAmount: Number
});

module.exports = mongoose.model('Order', orderSchema);

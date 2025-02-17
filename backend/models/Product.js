const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image: String,
    category: { type: String, enum: ['pizza', 'sushi'] }
});

module.exports = mongoose.model('Product', productSchema);
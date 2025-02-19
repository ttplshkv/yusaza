const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: { type: String, enum: ['pizza', 'sushi'] }
});

// Создаем виртуальное поле `id`, которое будет возвращать _id как строку
productSchema.virtual('id').get(function() {
    return this._id.toString();
});

// Настройка, чтобы виртуальные поля выводились при преобразовании документа в объект
productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', productSchema);
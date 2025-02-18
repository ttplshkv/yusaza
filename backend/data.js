const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/food_delivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const pizzas = [
    { id: 1, name: "Маргарита", description: "Какое-то описание", price: 400, image: "/images/margo.jpg" },
    { id: 2, name: "Пепперони", description: "Какое-то описание", price: 500, image: "/images/peppe.jpg" },
    { id: 3, name: "Четыре сыра", description: "Какое-то описание", price: 600, image: "/images/4-cheese.jpg" },
    { id: 10, name: "Песто", description: "Какое-то описание", price: 400, image: "/images/pe100.jpg" },
    { id: 11, name: "Гавайская", description: "Какое-то описание", price: 500, image: "/images/peppe.jpg" },
    { id: 12, name: "Ультра острая", description: "Какое-то описание", price: 600, image: "/images/4-cheese.jpg" },
    { id: 13, name: "Ультра острая", description: "Какое-то описание", price: 600, image: "/images/4-cheese.jpg" },
    { id: 14, name: "Ультра острая", description: "Какое-то описание", price: 600, image: "/images/4-cheese.jpg" }
];

const sushi = [
    { id: 4, name: "Филадельфия", description: "Какое-то описание", price: 400, image: "/images/phil.jpg" },
    { id: 5, name: "Калифорния", description: "Какое-то описание", price: 500, image: "/images/eljei.jpg" },
    { id: 6, name: "Классический с огурцом", description: "Какое-то описание", price: 600, image: "/images/classicus-cucum.jpg" },
    { id: 7, name: "Классический с лососем", description: "Какое-то описание", price: 600, image: "/images/classicus.jpg" },
    { id: 8, name: "Филадельфия люкс", description: "Какое-то описание", price: 600, image: "/images/phil_lux.jpg" },
    { id: 9, name: "Ямми", description: "Какое-то описание", price: 500, image: "/images/yammy.jpg" }
];

const seedDB = async () => {
    await Product.deleteMany({});
    const productsToSeed = [
        ...pizzas.map(pizza => ({...pizza, category: 'pizza'})),
        ...sushi.map(su => ({...su, category: 'sushi'}))
    ];

    await Product.insertMany(productsToSeed);
    console.log('Database seeded!');
    await mongoose.connection.close();
};

seedDB();
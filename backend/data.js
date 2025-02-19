const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/food_delivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const pizzas = [
    {name: "Маргарита", description: "Какое-то описание", price: 400, image: "/images/margo.jpg"},
    {name: "Пепперони", description: "Какое-то описание", price: 500, image: "/images/peppe.jpg"},
    {name: "Четыре сыра", description: "Какое-то описание", price: 600, image: "/images/4-cheese.jpg"},
    {name: "Песто", description: "Какое-то описание", price: 400, image: "/images/pe100.jpg"},
    {name: "Гавайская", description: "Какое-то описание", price: 500, image: "/images/peppe.jpg"},
    {name: "Ультра острая", description: "Какое-то описание", price: 600, image: "/images/4-cheese.jpg"},
    {name: "Ультра острая", description: "Какое-то описание", price: 600, image: "/images/4-cheese.jpg"},
    {name: "Ультра острая", description: "Какое-то описание", price: 600, image: "/images/4-cheese.jpg"}
];

const sushi = [
    {name: "Филадельфия", description: "Какое-то описание", price: 400, image: "/images/phil.jpg"},
    {name: "Калифорния", description: "Какое-то описание", price: 500, image: "/images/eljei.jpg"},
    {
        name: "Классический с огурцом",
        description: "Какое-то описание",
        price: 600,
        image: "/images/classicus-cucum.jpg"
    },
    {name: "Классический с лососем", description: "Какое-то описание", price: 600, image: "/images/classicus.jpg"},
    {name: "Филадельфия люкс", description: "Какое-то описание", price: 600, image: "/images/phil_lux.jpg"},
    {name: "Ямми", description: "Какое-то описание", price: 500, image: "/images/yammy.jpg"}
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
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/food_delivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const pizzas = [
    {name: "Маргарита", description: "Классическая итальянская пицца с тонким тестом, томатным соусом, свежей моцареллой и листьями базилика", price: 400, image: "/images/margo.jpg"},
    {name: "Пепперони", description: "Пепперони, моцарелла, томатный соус", price: 500, image: "/images/peppe.jpg"},
    {name: "Четыре сыра", description: "Ароматная итальянская пицца с хрустящей основой, покрытая смесью четырех сыров: моцареллы, горгонзолы, пармезана и эмменталя ", price: 600, image: "/images/4-cheese.jpg"},
    {name: "Песто", description: "Ароматная итальянская пицца с соусом песто, моцареллой, томатами и иногда добавлением курицы или рукколы", price: 400, image: "/images/pe100.jpg"},
    {name: "Гавайская", description: "Сочетание томатного соуса, сыра моцарелла, ветчины и ананасов", price: 500, image: "/images/hawai.jpg"},
    {name: "Ультра острая", description: "Острая и ароматная пицца с томатным соусом, тягучим сыром, пикантным мясным фаршем или курицей, перцем халапеньо, сладким болгарским перцем и специями", price: 600, image: "/images/hothot.jpg"},
    {name: "BBQ", description: "Сытная и ароматная пицца с соусом барбекю, сочным куриным филе или говядиной, красным луком, сыром моцарелла и копченым вкусом.", price: 600, image: "/images/BBQ.jpg"},
    {name: "4 сезона", description: "Классическая итальянская пицца, разделенная на четыре сектора, каждый из которых символизирует одно из времен года. ", price: 600, image: "/images/4-season.jpg"}
];

const sushi = [
    {name: "Филадельфия", description: "Состоит из нежного сливочного сыра, свежего лосося, авокадо или огурца, обернутых в мягкий рис и нори", price: 400, image: "/images/phil.jpg"},
    {name: "Калифорния", description: "Японский ролл наизнанку с начинкой из крабового мяса (или крабового микса), авокадо и огурца", price: 500, image: "/images/eljei.jpg"},
    {
        name: "Классический с огурцом",
        description: "Ролл, состоящий из риса, морских водорослей и хрустящего огурца",
        price: 600,
        image: "/images/classicus-cucum.jpg"
    },
    {name: "Классический с лососем", description: "С нежным ломтём свежего лосося, завернутым в рис и морскую водоросль нори", price: 600, image: "/images/classicus.jpg"},
    {name: "Филадельфия люкс", description: "Сочетание сливочного сыра Филадельфия, свежего лосося, авокадо и огурца, завернутое в тонкий лист нори и посыпанное кунжутом", price: 600, image: "/images/phil_lux.jpg"},
    {name: "Ямми", description: "Ролл с нежным лососем, авокадо и огурцом, завернутый в рис и нори", price: 500, image: "/images/yammy.jpg"}
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
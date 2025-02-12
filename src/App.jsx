import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import {CartProvider} from "./context/CartContext";


const pizzas = [
    {id: 1, name: "Маргарита", price: 400, image: "/images/margo.jpg"},
    {id: 2, name: "Пепперони", price: 500, image: "/images/peppe.jpg"},
    {id: 3, name: "Четыре сыра", price: 600, image: "/images/4-cheese.jpg"}
];

const sushis = [
    {id: 4, name: "Филадельфия", price: 400, image: "/images/phil.jpg"},
    {id: 5, name: "Калифорния", price: 500, image: "/images/eljei.jpg"},
    {id: 6, name: "Классический", price: 600, image: "/images/classicus.jpg"},
    {id: 7, name: "Классический с лососем", price: 600, image: "/images/classicus.jpg"}
];

function App() {
    const [products, setProducts] = useState(pizzas);

    return (
        <CartProvider>
            <Router>
                <div>
                    <Link to="/">
                        <button onClick={() => setProducts(pizzas)}>Пицца</button>
                        <button onClick={() => setProducts(sushis)}>Суши</button>
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<ProductList products={products}/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </Router>
        </CartProvider>
    );
}


export default App;

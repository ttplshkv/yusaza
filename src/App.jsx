import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import {CartProvider} from "./context/CartContext";

function App() {
    const [category, setCategory] = useState("pizza");

    return (
        <Router>
            <div>
                <Link to="/">
                    <button onClick={() => setCategory("pizza")}>Пицца</button>
                    <button onClick={() => setCategory("sushi")}>Суши</button>
                </Link>
            </div>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<ProductList category={category}/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </CartProvider>
        </Router>
    );
}


export default App;

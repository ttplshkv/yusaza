import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PizzaList from './PizzaList';
import CartPage from './CartPage';
import MainPage from './MainPage';
import {CartProvider} from "./CartContext";

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/pizzas" element={<PizzaList />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;

import React, {useState} from 'react';
import {Link, Route, Routes, useLocation} from 'react-router-dom';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import {CartProvider} from "./context/CartContext";
import CartButton from "./components/buttons/CartButton/CartButton";
import MainButton from "./components/buttons/MainButton";

function App() {
    const [category, setCategory] = useState("pizza");
    const location = useLocation();

    return (
        <div className="App">
            {location.pathname === '/' && ( // Показываем CartButton и кнопки только на главной странице
                <div>
                    <CartButton/>
                    <Link to="/">
                        <div style={{float: "left"}}>
                            <button className="btn" onClick={() => setCategory("pizza")}>Пицца</button>
                            <button className="btn" onClick={() => setCategory("sushi")}>Суши</button>
                        </div>
                    </Link>
                </div>
            )}

            <CartProvider>
                <Routes>
                    <Route path="/" element={<ProductList category={category}/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </CartProvider>
        </div>
    );
}


export default App;

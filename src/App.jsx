import React, {useState} from 'react';
import {Link, Route, Routes, useLocation} from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import OrdersPage from "./pages/OrdersPage";
import {CartProvider} from "./context/CartContext";
import CartButton from "./components/buttons/CartButton/CartButton";


function App() {
    const [category, setCategory] = useState("pizza");
    const location = useLocation();

    return (
        <CartProvider>
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

                <Routes>
                    <Route path="/" element={
                        <ProductList category={category}/>
                    }/>
                    <Route path="/cart" element={<CartPage/>}/>

                    <Route path="/orders" element={<OrdersPage/>}/>
                </Routes>
            </div>
        </CartProvider>
    );
}


export default App;

import React, {useState} from 'react';
import {Link, Route, Routes, useLocation} from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import {CartProvider} from "./context/CartContext";
import CartButton from "./components/buttons/CartButton/CartButton";
import OrdersPage from "./pages/OrdersPage";

function App() {
    const [category, setCategory] = useState("pizza");
    const location = useLocation();

    return (
        <div className="App">
            <CartProvider>
                {location.pathname === '/' && (
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

                {/* Оборачиваем нужные маршруты в один Routes */}
                <Routes>
                    <Route path="/" element={
                        <ProductList category={category}/>
                    }/>
                    <Route path="/cart" element={
                        <CartPage/>
                    }/>
                </Routes>
            </CartProvider>

            <Routes>
                <Route path="/orders" element={
                    <OrdersPage isCompleted={false}/>
                }/>

                <Route path="/orders/complete" element={
                    <OrdersPage isCompleted={true}/>
                }/>
            </Routes>
        </div>
    );
}


export default App;

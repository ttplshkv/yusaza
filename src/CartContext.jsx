import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const CartContext = createContext();

// Хук для использования контекста
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // Метод для добавления товара в корзину
    const addToCart = (product) => {
        setCart((prevState) => {
            const existingProduct = prevState.find(item => item.id === product.id);
            if (existingProduct) {
                return prevState.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevState, { ...product, quantity: 1 }];
            }
        });
    };

    // Метод для удаления товара из корзины
    const removeFromCart = (product) => {
        setCart((prevState) => {
            const updatedCart = prevState.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0);
            return updatedCart;
        });
    };

    // Контекст для доступа ко всем методам и состоянию
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
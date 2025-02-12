import React from 'react';
import ProductItem from './items/ProductItem';
import {useCart} from '../context/CartContext';
import '../styles/styles.css';
import CartButton from "./buttons/CartButton";

const ProductList = ({products}) => {
    const {addToCart} = useCart();  // Используем хук для добавления товара в корзину

    return (
        <div>
            <h1>Меню</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} onAddToCart={addToCart}/>
                ))}

            </div>
            <CartButton/>
        </div>
    );
};

export default ProductList;

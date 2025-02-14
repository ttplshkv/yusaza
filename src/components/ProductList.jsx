import React from 'react';
import ProductItem from './items/ProductItem';
import {useCart} from '../context/CartContext';
import '../styles/styles.css';
import CartButton from "./buttons/CartButton";

const ProductList = ({products}) => {
    return (
        <div className="container">
            <h1>Меню</h1>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 g-3">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}

            </div>
            <CartButton/>
        </div>
    );
};

export default ProductList;

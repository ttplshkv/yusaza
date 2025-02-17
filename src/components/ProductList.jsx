import React, {useEffect, useState} from 'react';
import ProductItem from './items/ProductItem';
import '../styles/styles.css';
import CartButton from "./buttons/CartButton";

const ProductList = ({category}) => {
    const [products, setProducts] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products?category=${category}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
                setError(null);
            } catch (error) {
                console.error('Ошибка при загрузке продуктов:', error);
                setError('Произошла ошибка при загрузке продуктов');
                setProducts([]);
            }
        };

        loadProducts();
    }, [category]);

    if (error) {
        return <div className="error">{error}</div>;
    }

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

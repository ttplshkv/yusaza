import React from 'react';
import ProductItem from './items/ProductItem';
import '../styles/styles.css';
import useProducts from "../hooks/useProducts";

const ProductList = ({category}) => {
    const {products, error} = useProducts(category);

    if (!products) {
        return <div>Загрузка...</div>;  // Показать загрузку, пока данные не пришли
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="menu-container">
            <h1 style={{textAlign: "center", marginBottom: "20px"}}>Меню</h1>

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 g-3">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>

        </div>
    );
};

export default ProductList;

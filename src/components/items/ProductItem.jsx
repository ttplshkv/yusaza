import React from 'react';
import '../../styles/styles.css';
import {useCart} from "../../context/CartContext";
import AddAndRemoveFromCartButton from "../buttons/AddAndRemoveFromCartButton";
import {getProductQuantity} from "../../utils/CartUtils";

const ProductItem = ({product}) => {
    const {cart, addToCart} = useCart();
    const quantity = getProductQuantity(cart, product);

    return (
            <div className="col">
                <div className="card custom-card">
                    <img className="card-img-top custom-img" src={product.image} alt={product.name}/>
                    <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{product.name}</h5>
                        <p>{product.description}</p>
                    <h5 className="card-text text-muted text-center">{product.price} ₽</h5>

                    {quantity === 0 ? (
                        <button
                            onClick={() => addToCart(product)}
                            className="btn btn-primary w-100 mt-auto">
                            Добавить в корзину
                        </button>
                    ) : (
                        <AddAndRemoveFromCartButton key={product.id} product={product}/>
                    )}
                    </div>
                </div>
            </div>
    );
};

export default ProductItem;

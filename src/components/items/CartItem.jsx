import React from 'react';
import '../../styles/styles.css';
import AddAndRemoveFromCartButton from "../buttons/AddAndRemoveFromCartButton";

const CartItem = ({product}) => {
    return (
        <div>
            <img className="image" src={product.image} alt={product.name}/>

            {product.name} - {product.price} руб., кол-во: {product.quantity}
            <AddAndRemoveFromCartButton key={product.id} product={product}/>
        </div>
    );
};

export default CartItem;

import React from 'react';
import {Link} from 'react-router-dom';

const CartButton = () => {
    return (
        <div style={{float: "right"}}>
            <Link to="/cart">
                <button className="btn">
                    Перейти в корзину
                </button>
            </Link>
        </div>
    );
};

export default CartButton;

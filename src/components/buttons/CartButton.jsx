import React from 'react';
import { Link } from 'react-router-dom';

const CartButton = () => {
  return (
    <Link to="/cart">
      <button className="cart-button">
        Перейти в корзину
      </button>
    </Link>
  );
};

export default CartButton;

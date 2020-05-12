import React from 'react';
import { Link } from 'react-router-dom';

const CartButton = () => (
  <div>
    <Link to="/cart" data-testid="shopping-cart-button">
      <img alt="shopping cart icon" src="./images/shopping-cart-solid.svg" />
    </Link>
  </div>
);
export default CartButton;

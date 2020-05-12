import React from 'react';
import { Link } from 'react-router-dom';

const CartButton = () => (
  <>
    <Link to="/cart" data-testid="shopping-cart-button">
      <img alt="shopping cart icon" src="./images/shopping-cart-solid.svg" />
    </Link>
  </>
);
export default CartButton;

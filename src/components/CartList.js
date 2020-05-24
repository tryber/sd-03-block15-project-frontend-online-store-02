import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

class CartList extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        {cartItems.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
        <div>
          <Link data-testid="checkout-products" to="/checkout">
            <button>Finalizar compra</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CartList;

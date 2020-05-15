import React, { Component } from 'react';
import CartCard from './CartCard';

class CartList extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        { cartItems.map((
          product,
        ) => <CartCard key={product.id} product={product} />)}
      </div>
    );
  }
}

export default CartList;

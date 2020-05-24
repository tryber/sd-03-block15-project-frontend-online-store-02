import React, { Component } from 'react';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';

class CartList extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        {cartItems.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
        <button data-testid="checkout-products"><Link to='/checkout'>Finalizar compra</Link></button>
      </div>
    );
  }
}

export default CartList;

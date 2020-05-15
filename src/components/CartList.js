import React, { Component } from 'react';
import CartCard from './CartCard';

class CartList extends Component {
  render() {
    const cartArr = JSON.parse(localStorage.getItem('cart'));
    console.log(cartArr);
    return (
      <div>
        { cartArr.map((
          product,
        ) => <CartCard key={product.id} product={product} />)}
      </div>
    );
  }
}

export default CartList;

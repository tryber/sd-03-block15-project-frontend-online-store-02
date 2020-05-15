import React, { Component } from 'react';

import CartList from '../components/CartList';

class CartPage extends Component {
  render() {
    const cartArr = JSON.parse(localStorage.getItem('cart'));

    return (
      <div>
        {cartArr === null ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : <CartList />}
      </div>
    );
  }
}

export default CartPage;

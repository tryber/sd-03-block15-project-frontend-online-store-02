import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

class CartList extends Component {
  render() {
    const { updateSize } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        {cartItems.map((item, index) => (
          <CartCard updateSize={updateSize} key={index} product={item} />
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

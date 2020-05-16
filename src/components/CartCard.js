import React, { Component } from 'react';
import Rating from './Rating';

class CartCard extends Component {
  render() {
    const { title, thumbnail, quantity } = this.props.product;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={thumbnail} alt={title} />
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <Rating />
      </div>
    );
  }
}

export default CartCard;

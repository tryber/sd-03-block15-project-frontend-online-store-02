import React, { Component } from 'react';

class CartCard extends Component {
  render() {
    const { title, thumbnail, quantity } = this.props.product;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={thumbnail} alt={title} />
        <p data-testeid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }
}

export default CartCard;

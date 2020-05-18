import React, { Component } from 'react';
import DetailsPageButton from './DetailsPageButton';

class CartCard extends Component {
  render() {
    const { title, thumbnail, quantity } = this.props.product;
    console.log(quantity)
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={thumbnail} alt={title} />
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <DetailsPageButton />
      </div>
    );
  }
}

export default CartCard;

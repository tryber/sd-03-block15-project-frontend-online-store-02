import React, { Component } from 'react';

import AddCartButton from './AddCartButton';
import RemoveCartItem from './RemoveCartItem';

class DetailsPageButton extends Component {
  constructor(props) {
    super(props);
    const cart = JSON.parse(localStorage.getItem('cartItems'));
    const quantity = cart && cart.find((item) => item.id === props.product.id).quantity;
    this.state = { quantity };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity() {
    const cart = JSON.parse(localStorage.getItem('cartItems'));
    const { product } = this.props;
    if (cart.some((item) => item.id === product.id)) {
      const { quantity } = cart.find((item) => item.id === product.id);
      return this.setState({ quantity });
    }
    return this.setState({ quantity: 0 });
  }

  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    return (
      <div className="product-button" data-testid="product-detail-add-to-cart">
        <AddCartButton
          product={product}
          testid="product-increase-quantity"
          updateQuantity={this.updateQuantity}
        >
          +
        </AddCartButton>
        <label htmlFor="quantidade" data-testid="shopping-cart-product-quantity">{quantity}</label>
        <RemoveCartItem
          product={product}
          updateQuantity={this.updateQuantity}
          testid="product-decrease-quantity"
        >
          -
        </RemoveCartItem>
      </div>
    );
  }
}

export default DetailsPageButton;

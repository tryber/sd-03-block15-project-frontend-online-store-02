import React, { Component } from 'react';

import AddCartButton from './AddCartButton';
import RemoveCartItem from './RemoveCartItem';

class CartCard extends Component {
  constructor(props) {
    super(props);
    const { quantity } = props.product;
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
    const { title, thumbnail } = product;
    const { quantity } = this.state;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={thumbnail} alt={title} />
        <div style={{ display: 'inline-block' }}>
          <AddCartButton
            product={product}
            testid="product-increase-quantity"
            updateQuantity={this.updateQuantity}
          >
            +
          </AddCartButton>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          <RemoveCartItem product={product} updateQuantity={this.updateQuantity} testid="product-decrease-quantity">-</RemoveCartItem>
        </div>
      </div>
    );
  }
}

export default CartCard;

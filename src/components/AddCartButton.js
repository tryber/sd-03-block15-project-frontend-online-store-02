import React, { Component } from 'react';

class AddCartButton extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product, updateQuantity } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems === null) {
      product.quantity = 1;
      localStorage.setItem('cartItems', JSON.stringify([{ ...product }]));
      return updateQuantity && updateQuantity();
    }
    const itemRepetido = cartItems.find((item) => item.id === product.id);
    if (itemRepetido) {
      const indexOfItemInCart = cartItems.indexOf(itemRepetido);
      cartItems[indexOfItemInCart].quantity += 1;
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return updateQuantity && updateQuantity();
    }
    product.quantity = 1;
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
    return updateQuantity && updateQuantity();
  }

  render() {
    const { children, testid } = this.props;
    return (
      <button type="button" data-testid={testid} onClick={this.addToCart}>
        {children}
      </button>
    );
  }
}

export default AddCartButton;

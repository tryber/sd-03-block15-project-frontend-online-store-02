import React, { Component } from 'react';
import CartCard from './CartCard';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
    this.productsCounter = this.productsCounter.bind(this);
  }

  componentDidMount() {
    this.productsCounter();
  }

  productsCounter() {
    const cartArr = JSON.parse(localStorage.getItem('cart'));
    const acc = {};
    const countedProducts = cartArr.forEach(({ product: { id } }) => {
      console.log(acc, id);
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    });
    this.setState({ products: countedProducts });
    console.log(this.state.products);
  }

  render() {
    const cartArr = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        {cartArr.map(({ product }) => <CartCard product={product} />)}
      </div>
    );
  }
}

export default CartList;

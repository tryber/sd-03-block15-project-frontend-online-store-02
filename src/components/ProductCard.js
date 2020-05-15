import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    const prevCart = JSON.parse(localStorage.getItem('cart'));
    if (!prevCart) {
      product.quantity = 1;
      return localStorage.setItem('cart', JSON.stringify([{ ...product }]));
    }
    const aux = prevCart.find((item) => item.id === product.id);
    if (aux) {
      const index = prevCart.indexOf(aux);
      aux.quantity === 'undefined' ? prevCart[index].quantity = 1 : prevCart[index].quantity += 1;
      return localStorage.setItem('cart', JSON.stringify(prevCart));
    }
    product.quantity = 1;
    return localStorage.setItem('cart', JSON.stringify([...prevCart, { ...product }]));
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
        <Link
          to={{
            pathname: `/product/${id}`,
            state: { product },
          }}
          data-testid="product-detail-link"
        >
          Details
        </Link>
        <button data-testid="product-add-to-cart" onClick={this.addToCart} type="button">Add to cart</button>
      </div>
    );
  }
}

export default ProductCard;

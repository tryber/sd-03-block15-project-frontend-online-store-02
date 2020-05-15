import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    const cartArr = JSON.parse(localStorage.getItem('cart'));
    if (cartArr === null) {
      product.quantity = 1;
      return localStorage.setItem('cart', JSON.stringify([{ ...product }]));
    }
    const itemRepetido = cartArr.find((item) => item.id === product.id);
    if (itemRepetido) {
      const indexOfItemInCart = cartArr.indexOf(itemRepetido);
      cartArr[indexOfItemInCart].quantity += 1;
      return localStorage.setItem('cart', JSON.stringify(cartArr));
    }
    product.quantity = 1;
    return localStorage.setItem('cart', JSON.stringify([...cartArr, { ...product }]));
  }

  removeFromCart() {
    const { product } = this.props;
    const cartArr = JSON.parse(localStorage.getItem('cart'));
    // if (!cartArr) return alert('O carrinho está vazio');
    const itemWithUniqueQuantity = cartArr.find((
      item,
    ) => item.id === product.id && item.quantity === 1);
    if (itemWithUniqueQuantity) {
      const indexOfUnique = cartArr.indexOf(itemWithUniqueQuantity);
      cartArr.splice(indexOfUnique, 1);
      return localStorage.setItem('cart', JSON.stringify(cartArr));
    }
    product.quantity -= 1;
    return localStorage.setItem('cart', JSON.stringify(cartArr));
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
        <button
          data-testid="product-add-to-cart"
          onClick={this.addToCart}
          type="button"
        >
          Add to cart
        </button>
        <button type="button" onClick={this.removeFromCart}>Remove</button>
      </div>
    );
  }
}

export default ProductCard;

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
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems === null) {
      product.quantity = 1;
      return localStorage.setItem('cartItems', JSON.stringify([{ ...product }]));
    }
    const itemRepetido = cartItems.find((item) => item.id === product.id);
    if (itemRepetido) {
      const indexOfItemInCart = cartItems.indexOf(itemRepetido);
      cartItems[indexOfItemInCart].quantity += 1;
      return localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    product.quantity = 1;
    return localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
  }

  removeFromCart() {
    const { product } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const itemWithUniqueQuantity = cartItems.find((
      item,
    ) => item.id === product.id && item.quantity === 1);
    if (itemWithUniqueQuantity) {
      const indexOfUnique = cartItems.indexOf(itemWithUniqueQuantity);
      cartItems.splice(indexOfUnique, 1);
      return localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    const indexToSubtract = cartItems.indexOf(cartItems.find((item) => item.id === product.id));
    cartItems[indexToSubtract].quantity -= 1;
    return localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product" >
        <div className="col-sm" >
          <div className="card border border-success" style={{ width: '15rem' }} >
            <img src={thumbnail} alt={title} className="rounded mx-auto d-block" />
            <div className="card-body">
              <h6 className="card-title">{title}</h6>
              <Link
                to={{ pathname: `/product/${id}`, state: { product }, }}
                data-testid="product-detail-link"
                className="card-text" >
              R$ {price}
              </Link>
            </div>
            <div className="card-footer">
              <button data-testid="product-add-to-cart" onClick={this.addToCart} type="button" >
                Add to cart
              </button>
              <button type="button" onClick={this.removeFromCart}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;

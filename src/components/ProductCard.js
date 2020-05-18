import React from 'react';
import { Link } from 'react-router-dom';

import AddCartButton from './AddCartButton';
import Shipping from './Shipping';

class ProductCard extends React.Component {
  render() {
    const { product, cartSize } = this.props;
    const { title, thumbnail, price, id, shipping: { free_shipping: freeShipping } } = product;
    return (
      <div data-testid="product">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm border border-success" style={{ width: '15rem' }} >
            <img src={thumbnail} alt={title} className="rounded mx-auto d-block" />
            <div className="card-body">
              <h6 className="card-title">R$ {price} - {title}</h6>
              <Link
                to={{ pathname: `/product/${id}`, state: { product, cartSize } }}
                data-testid="product-detail-link"
                className="card-text"
              >
              Detalhes <Shipping freeShipping={freeShipping} />
              </Link>
            </div>
            <div className="card-footer">
              <AddCartButton product={product} testid="product-add-to-cart">
                Add to cart
              </AddCartButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;

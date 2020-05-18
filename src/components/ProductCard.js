import React from 'react';
import { Link } from 'react-router-dom';

import AddCartButton from './AddCartButton';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <Link
          to={{
            pathname: `/product/${id}`,
            state: { product },
          }}
          data-testid="product-detail-link"
        >
          Details
        </Link>
        <AddCartButton product={product} testid="product-add-to-cart">
          Add to cart
        </AddCartButton>
      </div>
    );
  }
}

export default ProductCard;

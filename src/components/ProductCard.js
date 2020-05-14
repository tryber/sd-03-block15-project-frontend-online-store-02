import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
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
      </div>
    );
  }
}

export default ProductCard;

import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price, id } = this.props.product;
    return (
      <div>
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
        <Link to={`/product/${id}`} data-testid="product-detail-link">Details</Link>
      </div>
    );
  }
}

export default ProductCard;

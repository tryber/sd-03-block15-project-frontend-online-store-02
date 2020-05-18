import React, { Component } from 'react';

import Rating from '../components/Rating';
import HandleQuantityButton from '../components/HandleQuantityButton';
import CartButton from '../components/CartButton';

class DetailsPage extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <CartButton />
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <HandleQuantityButton product={product} />
        <Rating />
      </div>
    );
  }
}

export default DetailsPage;

import React, { Component } from 'react';
import DetailsPageButton from '../components/DetailsPageButton';
import CartButton from '../components/CartButton';

class DetailsPage extends Component {
  render() {
    const { location: { state: { product: { title, thumbnail, price } } } } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <DetailsPageButton />
        <CartButton />
      </div>
    );
  }
}

export default DetailsPage;

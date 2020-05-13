import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props.product;
    return (
      <div>
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
      </div>
    )
  }
}

export default ProductCard;

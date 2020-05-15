import React, { Component } from 'react';

class CartCard extends Component {
  render() {
    const { title, thumbnail } = this.props.product;
    return (
      <div key={title}>
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <p />
      </div>
    );
  }
}

export default CartCard;

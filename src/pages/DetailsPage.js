import React, { Component } from 'react';

class DetailsPage extends Component {
  render() {
    const { location: { state: { product: { title } } } } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
      </div>
    );
  }
}

export default DetailsPage;

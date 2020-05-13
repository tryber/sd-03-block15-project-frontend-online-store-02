import React, { Component } from 'react';

class DetailsPage extends Component {
  render() {
    const { match: { param: { id } } } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{id}</h2>
      </div>
    );
  }
}

export default DetailsPage;

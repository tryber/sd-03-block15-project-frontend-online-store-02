import React from 'react';

import ProductCard from './ProductCard';
import Search from './Search';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
    this.setProductsState = this.setProductsState.bind(this);
  }

  setProductsState(products) {
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    const { categoryId } = this.props;
    return (
      <div>
        <Search updateState={this.setProductsState} categoryId={categoryId} />
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    );
  }
}

export default ProductList;

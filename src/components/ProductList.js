import React from 'react';

import ProductCard from './ProductCard';
import Search from './Search';

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
          products.map((product) => <ProductCard product={product} />)}
      </div>
    );
  }
}

export default ProductList;

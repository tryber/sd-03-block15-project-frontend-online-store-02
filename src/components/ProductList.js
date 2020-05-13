import React from 'react';

import * as api from '../services/api';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    const { categoryId, search } = this.props;
    this.state = {
      categoryId,
      search,
      products: null,
    };
  }

  componentDidMount() {
    const { categoryId, search } = this.state;
    api
      .getProductsFromCategoryAndQuery(categoryId, search)
      .then((products) => this.setState({ products }));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;

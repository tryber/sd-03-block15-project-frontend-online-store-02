import React from 'react';

import * as api from '../services/api';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    const { categoryId, searchInput } = this.props;
    this.state = {
      categoryId,
      searchInput,
      products: null,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { categoryId, searchInput } = this.state;
    api
      .getProductsFromCategoryAndQuery(categoryId, searchInput)
      .then(({ results }) => this.setState({ products: results }));
  }

  render() {
    const { products } = this.state;
    if (products) return (
      <div>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;

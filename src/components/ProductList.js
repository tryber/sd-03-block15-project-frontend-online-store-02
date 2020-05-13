import React from 'react';

import * as api from '../services/api';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    const { categoryId, search } = this.props;
    super(props);
    this.state = {
      categoryId,
      search,
      products: null,
    };
  }

  componentDidMount() {
    const products = api.getProductsFromCategoryAndQuery(categoryId, search);
    this.setState({ products });
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

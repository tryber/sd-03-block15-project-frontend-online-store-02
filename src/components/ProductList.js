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
      error: false,
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
      .then(({ results }) => this.setState({ products: results }))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { products, error } = this.state;
    if (error) return <p data-testid="product">Nenhum produto foi encontrado</p>;
    return (
      <div>
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;

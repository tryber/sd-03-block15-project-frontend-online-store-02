import React from 'react';

import ProductCard from './ProductCard';
import Search from './Search';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null, notFound: false };
    this.productsState = this.productsState.bind(this);
  }

  productsState(products, notFound) {
    this.setState({ products, notFound });
  }

  render() {
    const { products, notFound } = this.state;
    const { categoryId, resultsByCategoryId } = this.props;
    return (
      <div>
        <Search
          updateProduct={this.productsState}
          categoryId={categoryId}
          hasResultsByCategoryId={!resultsByCategoryId}
        />
        {notFound && !resultsByCategoryId && <p>Nenhum produto foi encontrado</p>}
        {(products &&
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))) ||
          (resultsByCategoryId &&
            resultsByCategoryId.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            )))}
      </div>
    );
  }
}

export default ProductList;

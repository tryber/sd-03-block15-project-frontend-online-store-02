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
    const { categoryId, resultsId } = this.props;
    return (
      <div>
        <Search updateProduct={this.productsState} categoryId={categoryId} />
        {notFound && !resultsId && <p>Nenhum produto foi encontrado</p>}
        {resultsId &&
          resultsId.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
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

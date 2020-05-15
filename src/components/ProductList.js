import React from 'react';

import ProductCard from './ProductCard';
import Search from './Search';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null, notFound: false };
    this.setProductsState = this.setProductsState.bind(this);
    this.notFoundCase = this.notFoundCase.bind(this);
  }

  setProductsState(products) {
    this.setState({ products });
  }

  notFoundCase(notFound) {
    this.setState({ notFound });
  }

  render() {
    const { products, notFound } = this.state;
    const { categoryId } = this.props;
    return (
      <div>
        <Search updateState={this.setProductsState} notFound={this.notFoundCase} categoryId={categoryId} />
        {notFound && <p>Nenhum produto foi encontrado</p>}
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

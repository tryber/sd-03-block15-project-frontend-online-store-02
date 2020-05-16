import React from 'react';

import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, notFound } = this.props;
    return (
      <div>
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

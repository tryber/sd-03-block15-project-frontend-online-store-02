import React from 'react';

import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, notFound } = this.props;
    return (
      <div>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          {notFound && <p>Nenhum produto foi encontrado</p>}
          <div class="container">
            <div class="row" >
              {products &&
                products.map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      </div>
    );
  }
}

export default ProductList;

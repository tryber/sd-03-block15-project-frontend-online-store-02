import React, { Component } from 'react';
import ProductList from './ProductList';

class MainContent extends Component {
  render() {
    const { results, isLoading, notFound, cartSize } = this.props;

    return (
      <div className="jumbotron">
        {!isLoading && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        <ProductList products={results} notFound={notFound} cartSize={cartSize} />
      </div>
    );
  }
}

export default MainContent;

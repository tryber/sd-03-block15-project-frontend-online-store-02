import React from 'react';
import '../App.css';

import * as api from '../services/api';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryId: null, categories: [], resultsByCategoryId: null };
    this.onHandleRadio = this.onHandleRadio.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
  }

  onHandleRadio(categoryId) {
    this.setState({ categoryId }, () => {
      api
        .getProductsFromCategoryAndQuery(categoryId)
        .then(({ results }) => this.setState({ resultsByCategoryId: results }));
    });
  }

  render() {
    const { categoryId, categories, resultsByCategoryId } = this.state;
    return (
      <div>
        <div className="lado-esquerdo">
          <CategoryList
            categories={categories}
            onHandleChange={this.onHandleRadio}
          />
        </div>
        <div className="lado-direito">
          <ProductList categoryId={categoryId} resultsByCategoryId={resultsByCategoryId} />
        </div>
      </div>
    );
  }
}

export default MainPage;

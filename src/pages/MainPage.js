import React from 'react';
import '../App.css';

import * as api from '../services/api';
import CartButton from '../components/CartButton';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: '', categories: [], categoryId: null, searchRequest: false };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleRadio = this.onHandleRadio.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }));
  }

  onHandleChange(event) {
    const { value } = event.target;
    this.setState({ searchInput: value });
  }

  onHandleRadio(categoryId) {
    this.setState({ categoryId });
  }

  onHandleClick() {
    this.setState({ searchRequest: true });
  }

  render() {
    const { categories, categoryId, searchInput, searchRequest } = this.state;
    return (
      <div>
        <div className="lado-esquerdo">
          <CategoryList
            categories={categories}
            onHandleClick={this.onHandleClick}
            handleChange={this.onHandleRadio}
          />
        </div>
        <span>
          <input data-testid="query-input" value={searchInput} onChange={this.onHandleChange} />
          <button data-testid="query-button" type="button" onClick={this.onHandleClick}>
            Pesquisar
          </button>
          <CartButton />
        </span>
        <div className="lado-direito">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          {searchRequest && <ProductList categoryId={categoryId} searchInput={searchInput} />}
        </div>
      </div>
    );
  }
}

export default MainPage;

import React from 'react';
import CartButton from '../components/CartButton';
import CategoryList from '../components/CategoryList';

import * as api from '../services/api';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', categories: [], categoryId: null };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }));
  }

  onHandleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  handleRadio(categoryId) {
    this.setState({ categoryId });
  }

  render() {
    const { categories, search } = this.state;
    return (
      <div>
        <div>
          <CategoryList categories={categories} handleChange={this.handleRadio} />
        </div>
        <input value={search} onChange={this.onHandleChange} />
        <CartButton />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default MainPage;

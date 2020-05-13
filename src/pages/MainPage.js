import React from 'react';

import * as api from '../services/api';
import CartButton from '../components/CartButton';
import CategoryList from '../components/CategoryList';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', categories: [], categoryId: null };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleRadio = this.onHandleRadio.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }));
  }

  onHandleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  onHandleRadio(categoryId) {
    this.setState({ categoryId });
  }

  render() {
    const { categories, search } = this.state;
    return (
      <div>
        <div>
          <CategoryList categories={categories} handleChange={this.onHandleRadio} />
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

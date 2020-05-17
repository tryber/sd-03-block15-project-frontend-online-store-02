import React from 'react';
import '../App.css';

import { getCategories } from '../services/api';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import ProductList from '../components/ProductList';
import ApiRequest from '../components/ApiRequest';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: null,
      searchInput: '',
      categories: [],
      results: null,
      isLoading: false,
      notFound: false,
    };
    this.onHandleRadio = this.onHandleRadio.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  onHandleRadio(categoryId) {
    const { searchInput } = this.setState;
    this.setState({ categoryId });
    this.updateResults(categoryId, searchInput);
  }

  onHandleChange(event) {
    const { value } = event.target;
    this.setState({ searchInput: value });
  }

  updateResults(categoryId, searchInput) {
    ApiRequest(categoryId, searchInput).then(({ results }) =>
      this.setState({
        results,
        isLoading: true,
        notFound: results.length === 0,
      }),
    );
  }

  render() {
    const {
      categoryId,
      categories,
      results,
      searchInput,
      isLoading,
      notFound,
    } = this.state;
    return (
      <div>
        <div className="lado-esquerdo">
          <CategoryList
            categories={categories}
            onHandleRadio={this.onHandleRadio}
            searchInput={searchInput}
          />
        </div>
        <div className="lado-direito">
          <Search
            onHandleChange={this.onHandleChange}
            updateResults={this.updateResults}
            searchInput={searchInput}
            categoryId={categoryId}
            isLoading={isLoading}
          />
          <ProductList products={results} notFound={notFound} />
        </div>
      </div>
    );
  }
}

export default MainPage;

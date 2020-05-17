import React from 'react';
import '../App.css';

import { getCategories } from '../services/api';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import ApiRequest from '../components/ApiRequest';
import CartButton from '../components/CartButton';
import MainContent from '../components/MainContent';

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
    const { categoryId, results, categories, searchInput, isLoading, notFound } = this.state;
    return (
      <div>
        <div className="category-list">
          <CategoryList categories={categories} onHandleRadio={this.onHandleRadio} />
        </div>
        <div className="search-bar fixed-top">
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <span className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
              SPA - Mercado Livre - MIT <CartButton />
            </span>
            <Search
              onHandleChange={this.onHandleChange}
              updateResults={this.updateResults}
              searchInput={searchInput}
              categoryId={categoryId}
              isLoading={isLoading}
            />
          </nav>
        </div>
        <main role="main" className="container">
          <MainContent results={results} isLoading={isLoading} notFound={notFound} />
        </main>
      </div>
    );
  }
}

export default MainPage;

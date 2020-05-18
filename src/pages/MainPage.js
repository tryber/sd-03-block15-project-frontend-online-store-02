import React from 'react';
import '../App.css';

import { getCategories } from '../services/api';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import ApiRequest from '../components/ApiRequest';
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

  onHandleRadio(categoryId, searchInput) {
    this.setState({ categoryId }, () =>
      this.updateResults(categoryId, searchInput)
    );
  }

  onHandleChange(event) {
    const { value } = event.target;
    this.setState({ searchInput: value });
  }

  updateResults(categoryId, searchInput) {
<<<<<<< HEAD
    ApiRequest(categoryId, searchInput).then(({ results }) => {
      this.setState({
        results,
        isLoading: true,
        notFound: results.length === 0,
      });
    });
=======
    ApiRequest(categoryId, searchInput).then(({ results }) => this.setState({
      results,
      isLoading: true,
      notFound: results.length === 0,
    }));
>>>>>>> cab940b0826f9c446fbaeb995e9b4ceebf965c68
  }

  render() {
    const { categoryId, results, categories, searchInput, isLoading, notFound } = this.state;
    return (
      <div>
<<<<<<< HEAD
        <div className="lado-esquerdo">
          <CategoryList
            categories={categories}
            searchInput={searchInput}
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
=======
        <div className="category-list">
          <CategoryList categories={categories} onHandleRadio={this.onHandleRadio} />
>>>>>>> cab940b0826f9c446fbaeb995e9b4ceebf965c68
        </div>
        <Search
          onHandleChange={this.onHandleChange}
          updateResults={this.updateResults}
          searchInput={searchInput}
          categoryId={categoryId}
          isLoading={isLoading}
        />
        <main role="main" className="container">
          <MainContent results={results} isLoading={isLoading} notFound={notFound} />
        </main>
      </div>
    );
  }
}

export default MainPage;

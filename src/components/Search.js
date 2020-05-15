import React from "react";

import * as api from "../services/api";
import CartButton from "../components/CartButton";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      isLoading: false,
    };
    this.apiRequest = this.apiRequest.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(event) {
    const { value } = event.target;
    this.setState({ searchInput: value });
  }

  apiRequest() {
    const { categoryId } = this.props;
    const { searchInput } = this.state;
    api
      .getProductsFromCategoryAndQuery(categoryId, searchInput)
      .then(({ results }) => {
        this.props.updateProduct(results, results.length === 0);
        this.setState({ isLoading: true });
      });
  }

  render() {
    const { searchInput, isLoading } = this.state;
    const { hasResultsId } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          value={searchInput}
          onChange={this.onHandleChange}
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={this.apiRequest}
        >
          Pesquisar
        </button>
        <CartButton />
        {!isLoading && hasResultsId && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </div>
    );
  }
}

export default Search;

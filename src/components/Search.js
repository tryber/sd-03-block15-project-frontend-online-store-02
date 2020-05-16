import React from 'react';

import CartButton from './CartButton';

class Search extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
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
    api.getProductsFromCategoryAndQuery(categoryId, searchInput)
      .then(({ results }) => {
        this.props.updateProduct(results, results.length === 0);
        this.setState({ isLoading: true });
      });
  }

=======
>>>>>>> 5decd275a9de5d77f0ed07c1cef6547ace06ce41
  render() {
    const {
      searchInput,
      categoryId,
      isLoading,
      onHandleChange,
      updateResults,
    } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          value={searchInput}
          onChange={(event) => onHandleChange(event)}
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={() => updateResults(searchInput, categoryId)}
        >
          Pesquisar
        </button>
        <CartButton />
        {!isLoading && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </div>
    );
  }
}

export default Search;

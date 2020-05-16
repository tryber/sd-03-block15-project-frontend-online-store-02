import React from 'react';

import CartButton from './CartButton';

class Search extends React.Component {
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
          onClick={() => updateResults(categoryId, searchInput)}
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

import React from 'react';
import CartButton from '../components/CartButton';

class Search extends React.Component {
  render() {
    const {
      searchInput,
      categoryId,
      onHandleChange,
      updateResults,
    } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <span className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
            SPA - Mercado Livre - MIT <CartButton />
          </span>
          <input
            className="form-control form-control-dark w-100"
            data-testid="query-input"
            value={searchInput}
            onChange={(event) => onHandleChange(event)}
          />
          <button
            className="btn btn-success"
            data-testid="query-button"
            type="button"
            onClick={() => updateResults(searchInput, categoryId)}
          >
            Pesquisar
          </button>
        </nav>
      </div>
    );
  }
}

export default Search;

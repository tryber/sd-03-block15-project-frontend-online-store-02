import React from 'react';

class Search extends React.Component {
  render() {
    const {
      searchInput,
      categoryId,
      onHandleChange,
      updateResults,
    } = this.props;
    return (
      <>
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
          onClick={() => updateResults(categoryId, searchInput)}
        >
          Pesquisar
        </button>
      </>
    );
  }
}

export default Search;

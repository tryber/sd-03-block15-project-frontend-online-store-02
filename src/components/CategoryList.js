import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map(({ id, name }) => <li key={id} data-testid="category">{name}</li>)}
      </ul>
    );
  }
}

export default CategoryList;

import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories, onHandleRadio } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={id}>
            <input
              name="category"
              type="radio"
              data-testid="category"
              onChange={() => onHandleRadio(id, searchInput)}
            />
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;

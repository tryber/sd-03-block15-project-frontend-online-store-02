import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories, onHandleChange } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={id}>
            <input
              name="categoria"
              type="radio"
              data-testid="category"
              onChange={() => onHandleChange(id)}
            />
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;

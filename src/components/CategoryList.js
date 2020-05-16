import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories, onHandleRadio } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={id}>
            <input
              name="categoria"
              type="radio"
              data-testid="category"
              onChange={() => onHandleRadio(id)}
            />
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;

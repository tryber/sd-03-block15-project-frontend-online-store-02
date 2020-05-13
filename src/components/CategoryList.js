import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories, handleChange } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={id}>
            <input type="radio" key={id} data-testid="category" onChange={() => handleChange(id)} />
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;

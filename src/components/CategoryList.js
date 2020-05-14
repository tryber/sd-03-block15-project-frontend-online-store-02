import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories, handleChange, onHandleClick } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={id}>
            <input
              name="category"
              type="radio"
              data-testid="category"
              onChange={() => {
                handleChange(id); onHandleClick();
              }}
            />
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;

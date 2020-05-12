import React from 'react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  render() {
    return (
      <div>
        <input value={this.state.search} onChange={this.onHandleChange} />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <p>TESTE</p>
      </div>
    );
  }
}

export default MainPage;

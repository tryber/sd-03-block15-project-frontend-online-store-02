import React, { Component } from 'react';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { quantidade: 1 };

    this.onClickButtonPlus = this.onClickButtonPlus.bind(this);
    this.onClickButtonMinus = this.onClickButtonMinus.bind(this);
  }

  onClickButtonPlus() {
    this.setState((state) => ({ quantidade: state.quantidade + 1 }));
  }

  onClickButtonMinus() {
    if (this.quant > 1) this.setState((state) => ({ quantidade: state.quantidade - 1 }));
    else this.setState({ quantidade: this.quantidade })
  }

  render() {
    const { location: { state: { product: { title } } } } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <button onClick={this.onClickButtonPlus}>+</button>
          <button onClick={this.onClickButtonMinus}>-</button>
        </div>
      </div>
    );
  }
}

export default DetailsPage;

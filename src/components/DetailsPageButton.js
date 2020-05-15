import React, { Component } from 'react';

class DetailsPageButton extends Component {
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
    const { quantidade } = this.state;
    if (quantidade >= 1) this.setState((state) => ({ quantidade: state.quantidade - 1 }));
    else this.setState({ quantidade: 0 });
  }

  render() {
    // const { title, thumbnail, price} = this.props.product;
    return (
      <div className="product-button" data-testid="product-detail-add-to-cart">
        <label htmlFor="quantidade">{this.state.quantidade}</label>
        <button onClick={this.onClickButtonPlus}>+</button>
        <button onClick={this.onClickButtonMinus}>-</button>
      </div>
    );
  }
}

export default DetailsPageButton;

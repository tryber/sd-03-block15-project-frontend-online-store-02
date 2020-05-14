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
    if (this.quant > 1) this.setState((state) => ({ quantidade: state.quantidade - 1 }));
    else this.setState({ quantidade: this.quantidade })
  }

  Quantidade() {
    return (
      <div data-testid="product-detail-add-to-cart">
        <label htmlFor="quantidade">Quantidade</label>
        <button onClick={this.onClickButtonPlus}>+</button>
        <button onClick={this.onClickButtonMinus}>-</button>
      </div>
    );
  }

  render() {
    // const { title, thumbnail, price} = this.props.product;
    return (
      <div className="Produto">    
        {this.Quantidade()}
      </div>
    );
  }
}

export default DetailsPageButton;

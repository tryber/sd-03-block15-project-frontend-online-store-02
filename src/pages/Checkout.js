import React from "react";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cpf: "",
      phone: "",
      cep: "",
      address: "",
    };
    this.updateState = this.updateState.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  updateState(event, chave) {
    this.setState({ [chave]: event.target.value });
  }

  clearState() {
    this.setState({
      fname: "",
      email: "",
      cpf: "",
      phone: "",
      cep: "",
      address: "",
    });
  }

  renderForm() {
    const { name, email, cpf, phone, cep, address } = this.state;
    return (
      <form>
        <label htmlFor="name">
          Nome completo:
          <input
            data-testid="checkout-fullname"
            type="text"
            id="name"
            value={name}
            onChange={(event) => this.updateState(event, "name")}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            data-testid="checkout-email"
            type="email"
            id="email"
            value={email}
            onChange={(event) => this.updateState(event, "email")}
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            data-testid="checkout-cpf"
            type="text"
            id="cpf"
            value={cpf}
            onChange={(event) => this.updateState(event, "cpf")}
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            data-testid="checkout-phone"
            type="text"
            id="phone"
            value={phone}
            onChange={(event) => this.updateState(event, "phone")}
          />
        </label>
        <label htmlFor="cep">
          CEP:
          <input
            data-testid="checkout-cep"
            type="text"
            id="cep"
            value={cep}
            onChange={(event) => this.updateState(event, "cep")}
          />
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            data-testid="checkout-address"
            type="text"
            id="address"
            value={address}
            onChange={(event) => this.updateState(event, "addrees")}
          />
        </label>
        <button onClick={this.clearState}>Comprar</button>
      </form>
    );
  }

  render() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let totalPrice = 0;
    return (
      <div>
        <div>
          {cartItems.map(({ id, thumbnail, title, price, quantity }) => {
            totalPrice += price * quantity;
            return (
              <div key={id}>
                <img src={thumbnail} alt={title} />
                <span>{title} </span>
                <span>{` R$ ${price * quantity}`}</span>
              </div>
            );
          })}
          <p>{`TOTAL: R$ ${totalPrice}`}</p>
        </div>
        <div>{this.renderForm()}</div>
      </div>
    );
  }
}

export default Checkout;

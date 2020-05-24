import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.updateState = this.updateState.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  clearState() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    });
  }

  updateState(event, chave) {
    this.setState({ [chave]: event.target.value });
  }

  createInput(label, type, id, testid, value) {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          data-testid={testid}
          value={value}
          onChange={(event) => this.updateState(event, id)}
        />
      </div>
    );
  }

  render() {
    const { name, email, cpf, phone, cep, address } = this.state;
    return (
      <div>
        <form>
          {this.createInput('Nome completo:', 'text', 'name', 'checkout-fullname', name)}
          {this.createInput('Email:', 'email', 'email', 'checkout-email', email)}
          {this.createInput('CPF:', 'text', 'cpf', 'checkout-cpf', cpf)}
          {this.createInput('Telefone:', 'text', 'phone', 'checkout-phone', phone)}
          {this.createInput('CEP:', 'text', 'cep', 'checkout-cep', cep)}
          {this.createInput('Endereço:', 'text', 'address', 'checkout-address', address)}
          <button type='button' onClick={this.clearState}>Comprar</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;

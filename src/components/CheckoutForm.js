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

  creatInput(label, type, id, testid, value) {
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

  updateState(event, chave) {
    const value = event.target.value;
    this.setState({ [chave]: value });
  }

  clearState() {
    alert('Compra finalizada!');
    this.setState({
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    });
  }

  render() {
    const { name, email, cpf, phone, cep, address } = this.state;
    return (
      <div>
        {this.creatInput('Nome completo:', 'text', 'name', 'checkout-fullname', name)};
        {this.creatInput('Email:', 'email', 'email', 'checkout-email', email)};
        {this.creatInput('CPF:', 'text', 'cpf', 'checkout-cpf', cpf)};
        {this.creatInput('Telefone:', 'text', 'phone', 'checkout-phone', phone)};
        {this.creatInput('CEP:', 'text', 'cep', 'checkout-cep', cep)};
        {this.creatInput('Endereço:', 'text', 'address', 'checkout-address', address)};
        <div>
          <button onClick={this.clearState}>Comprar</button>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;

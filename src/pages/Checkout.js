import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

class Checkout extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
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
        <CheckoutForm />
        <div>
          <Link to="/">
            <button type="button">Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Checkout;

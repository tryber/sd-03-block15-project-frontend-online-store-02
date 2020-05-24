import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

function checkoutCard ({ thumbnail, title, price, quantity }, index, quant) {
  const rigthQuantity = quantity || quant;
  return (
    <div key={index}>
      <img src={thumbnail} alt={title} />
      <span>{title} </span>
      <span>{`R$ ${price * rigthQuantity}`}</span>
    </div>
  );
}

class Checkout extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let totalPrice = 0;
    return (
      <div>
        <div>
          {cartItems.map((item, index) => {
            if (item.product) {
              totalPrice += item.product.price * item.quantity;
              return checkoutCard(item.product, index, item.quantity);
            }
            totalPrice += item.price * item.quantity;
            return checkoutCard(item, index);
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

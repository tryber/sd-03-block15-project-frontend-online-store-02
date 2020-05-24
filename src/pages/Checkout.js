import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

class Checkout extends React.Component {
  checkoutCard({ thumbnail, title, price, quantity }, index) {
    return (
      <div key={index}>
        <img src={thumbnail} alt={title} />
        <span>{title} </span>
        <span>{`R$ ${price * (quantity || 1 )}`}</span>
      </div>
    );
  }

  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const totalPrice = cartItems.reduce((acc, item) => {
      if (item.product) {
        acc += item.product.price * (item.product.quantity ? item.product.quantity : 1);
      } else {
        acc += item.price * item.quantity;
      }
      return acc;
    }, 0)
    return (
      <div>
        <div>
          {cartItems.map((item, index) => {
            if (item.product) {
              return this.checkoutCard(item.product, index);
            }
            return this.checkoutCard(item, index);
          })}
          <p>{`TOTAL: R$ ${totalPrice}`}</p>
        </div>
        <CheckoutForm />
        <div>
          <Link to='/'>
            <button type='button'>Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Checkout;

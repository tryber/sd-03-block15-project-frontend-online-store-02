import React from "react";
import CheckoutForm from '../components/CheckoutForm';

class Checkout extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let totalPrice = 0;
    return (
      <div>
        {cartItems.map(({ id, thumbnail, title, price, quantity }) => {
          totalPrice += (price * quantity);
          return (
            <div key={id}>
              <img src={thumbnail} alt={title} />
              <span>{title} </span>
              <span>{` R$ ${price * quantity}`}</span>
            </div>
          );
        })}
        <p>{`TOTAL: R$ ${totalPrice}`}</p>
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;

import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

class Checkout extends React.Component {
  checkoutCard({ thumbnail, title, price, quantity }, index) {
    return (
      <div key={index}>
        <img src={thumbnail} alt={title} />
        <span>{title} </span>
        <span>{` R$ ${price * (quantity ? quantity : 1 )}`}</span>
      </div>
    );
  }

  render() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const totalPrice = cartItems.reduce((acc, { price, quantity }) => acc += price * quantity, 0)
    return (
      <div>
        <div>
          {cartItems.map((item, index) => this.checkoutCard(item, index))}
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

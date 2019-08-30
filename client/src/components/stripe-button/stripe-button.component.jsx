import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCart } from "../../redux/cart/cart.actions";

const StripeButton = ({ price, clearCart }) => {
  const key = "pk_test_Gnzho3gpjC1LEdTkgzjXl7Kb00PNTcMzQ7";
  const total = price * 100;

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: total,
        token
      }
    })
      .then(response => {
        console.log(response);
        alert("Payment successful!");
        clearCart();
      })
      .catch(err => {
        console.log("Payment error: ", err);
        alert("Payment error: please, use provided test payment data");
      });
    alert("Payment succeded");
  };

  return (
    <StripeCheckout
      amount={total}
      label="Pay now"
      name="crwn-clothing"
      billingAddress
      shippingAddress
      image="https://www.dziopak.com/img/logo.png"
      description={`Your total is ${price}$`}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={key}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart)
});

export default connect(
  null,
  mapDispatchToProps
)(StripeButton);

import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
  console.log(token);
  alert("Payment succeded");
};

const StripeButton = ({ price }) => {
  const key = "pk_test_Gnzho3gpjC1LEdTkgzjXl7Kb00PNTcMzQ7";
  const total = price * 100;

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

export default StripeButton;

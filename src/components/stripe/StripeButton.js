import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const stripePublishableKey =
    "pk_test_51IBTGRCdS80jGydi4XN0WnZ6rGKxUBEa9Q04V41vGhJ7fel8dFumdu9QPWvqu3t2Zk6RnksKX0VKhzTpRzIpxZCx006FeXpuvm";
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN-Clothing'
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={stripePublishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;

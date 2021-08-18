import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from "../../assets/V.png";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Mob Vibe Ltd.'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            bitcoin={true}
        />
    )
}

export default StripeCheckoutButton;
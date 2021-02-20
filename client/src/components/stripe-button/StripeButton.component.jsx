import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IGAZKC5r5MVYIhaxqYmaks5AWMc6tBVOcL7yyofIvYr80PRzhx16uB84Ydi2P2izvsluWIR4udMpjG2h0dggB4P00DRzzNPqZ';
	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token: token
			}
		})
			.then((response) => {
				alert('Payment Successful');
			})
			.catch((error) => {
				console.log(error);
        alert('Error: Please make sure you use the provided credit card #')
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Ecommerce-Shop"
			billingAddress
			shippingAddress
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;

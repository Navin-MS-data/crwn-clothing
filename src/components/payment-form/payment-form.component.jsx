import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import {
  selectCartTotal,
  selectCartItems,
} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentMessage,
  SuccessContainer,
  SuccessIcon,
  SuccessTitle,
  SuccessDetails,
  OrderNumber,
} from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  const generateOrderNumber = () => {
    return (
      'ORD-' +
      Date.now().toString(36).toUpperCase() +
      Math.random().toString(36).substring(2, 7).toUpperCase()
    );
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (cartTotal === 0) {
      alert('Your cart is empty. Please add items before checkout.');
      return;
    }

    setIsProcessing(true);
    setPaymentStatus(null);

    try {
      const response = await fetch(
        '/.netlify/functions/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: cartTotal * 100 }),
        },
      );

      if (!response.ok) {
        throw new Error(
          'Network response was not ok. Make sure you are running "npm run dev" instead of "npm start".',
        );
      }

      const data = await response.json();
      const clientSecret = data.paymentIntent.client_secret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Guest',
          },
        },
      });

      setIsProcessing(false);

      if (paymentResult.error) {
        setPaymentStatus('failed');
        alert(`Payment failed: ${paymentResult.error.message}`);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          setPaymentStatus('success');
          setOrderDetails({
            orderNumber: generateOrderNumber(),
            amount: cartTotal,
            itemCount: cartItems.reduce(
              (total, item) => total + item.quantity,
              0,
            ),
            email: currentUser?.email || 'guest@example.com',
            date: new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
          });
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
      setIsProcessing(false);
      setPaymentStatus('failed');
      alert(
        error.message ||
          'There was an error processing your payment. Please try again.',
      );
    }
  };

  if (paymentStatus === 'success' && orderDetails) {
    return (
      <PaymentFormContainer>
        <SuccessContainer>
          <SuccessIcon>✓</SuccessIcon>
          <SuccessTitle>Order Successful!</SuccessTitle>
          <OrderNumber>Order #{orderDetails.orderNumber}</OrderNumber>
          <SuccessDetails>
            <p>Thank you for your purchase!</p>
            <p>
              <strong>Amount Paid:</strong> ${orderDetails.amount.toFixed(2)}
            </p>
            <p>
              <strong>Items:</strong> {orderDetails.itemCount}
            </p>
            <p>
              <strong>Date:</strong> {orderDetails.date}
            </p>
            <p>
              <strong>Confirmation sent to:</strong> {orderDetails.email}
            </p>
          </SuccessDetails>
          <p style={{ marginTop: '20px', color: '#666' }}>
            A confirmation email has been sent to your email address.
          </p>
        </SuccessContainer>
      </PaymentFormContainer>
    );
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handlePayment}>
        <h2>Credit Card Payment</h2>
        {paymentStatus === 'failed' && (
          <PaymentMessage>Payment failed. Please try again.</PaymentMessage>
        )}
        <CardElement />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : `Pay $${cartTotal}`}
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

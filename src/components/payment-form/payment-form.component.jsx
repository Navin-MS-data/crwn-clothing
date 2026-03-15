import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import {
  selectCartTotal,
  selectCartItems,
} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { CART_ACTION_TYPES } from '../../store/cart/cart.types';
import { createAction } from '../../utils/firebase/reducer/reducer.utils';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentMessage,
} from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);

  const generateOrderNumber = () =>
    'ORD-' +
    Date.now().toString(36).toUpperCase() +
    Math.random().toString(36).substring(2, 7).toUpperCase();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (cartTotal === 0) {
      alert('Your cart is empty. Please add items before checkout.');
      return;
    }

    setIsProcessing(true);
    setPaymentFailed(false);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: cartTotal * 100 }),
      });

      if (!response.ok) {
        throw new Error('Payment service error. Please try again later.');
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
        setPaymentFailed(true);
        alert(`Payment failed: ${paymentResult.error.message}`);
      } else if (paymentResult.paymentIntent.status === 'succeeded') {
        const orderDetails = {
          orderNumber: generateOrderNumber(),
          amount: cartTotal,
          itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
          email: currentUser?.email || 'guest@example.com',
          date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        };

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, []));
        navigate('/order-confirmation', { state: { orderDetails } });
      }
    } catch (error) {
      console.error('Payment error:', error);
      setIsProcessing(false);
      setPaymentFailed(true);
      alert(
        error.message ||
          'There was an error processing your payment. Please try again.',
      );
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handlePayment}>
        <h2>Credit Card Payment</h2>
        {paymentFailed && (
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

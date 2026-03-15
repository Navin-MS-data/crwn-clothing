import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PaymentForm from '../../components/payment-form/payment-form.component';
import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';

import {
  PaymentPageContainer,
  PaymentPageHeader,
  OrderSummary,
  OrderSummaryTitle,
  OrderSummaryRow,
  OrderSummaryItem,
  OrderSummaryTotal,
  BackButton,
} from './payment.styles';

const Payment = () => {
  const navigate = useNavigate();
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  return (
    <PaymentPageContainer>
      <BackButton onClick={() => navigate('/checkout')}>
        ← Back to Cart
      </BackButton>

      <PaymentPageHeader>Complete Your Order</PaymentPageHeader>

      <OrderSummary>
        <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
        {cartItems.map(({ id, name, quantity, price }) => (
          <OrderSummaryRow key={id}>
            <OrderSummaryItem>{name} × {quantity}</OrderSummaryItem>
            <OrderSummaryItem>${(price * quantity).toFixed(2)}</OrderSummaryItem>
          </OrderSummaryRow>
        ))}
        <OrderSummaryTotal>
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </OrderSummaryTotal>
      </OrderSummary>

      <PaymentForm />
    </PaymentPageContainer>
  );
};

export default Payment;

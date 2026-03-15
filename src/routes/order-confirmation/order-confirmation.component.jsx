import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../../components/button/button.component';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import {
  OrderConfirmationContainer,
  SuccessIcon,
  SuccessTitle,
  OrderNumber,
  DetailsCard,
  DetailRow,
  DetailLabel,
  DetailValue,
  ConfirmationNote,
  ButtonGroup,
} from './order-confirmation.styles';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;

  useEffect(() => {
    if (!orderDetails) {
      navigate('/');
    }
  }, [orderDetails, navigate]);

  if (!orderDetails) return null;

  return (
    <OrderConfirmationContainer>
      <SuccessIcon>✓</SuccessIcon>
      <SuccessTitle>Order Confirmed!</SuccessTitle>
      <OrderNumber>Order #{orderDetails.orderNumber}</OrderNumber>

      <DetailsCard>
        <DetailRow>
          <DetailLabel>Amount Paid</DetailLabel>
          <DetailValue>${orderDetails.amount.toFixed(2)}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Items</DetailLabel>
          <DetailValue>{orderDetails.itemCount}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Date</DetailLabel>
          <DetailValue>{orderDetails.date}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Confirmation sent to</DetailLabel>
          <DetailValue>{orderDetails.email}</DetailValue>
        </DetailRow>
      </DetailsCard>

      <ConfirmationNote>
        A confirmation email has been sent to your email address.
      </ConfirmationNote>

      <ButtonGroup>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => navigate('/shop')}>
          Browse More
        </Button>
      </ButtonGroup>
    </OrderConfirmationContainer>
  );
};

export default OrderConfirmation;

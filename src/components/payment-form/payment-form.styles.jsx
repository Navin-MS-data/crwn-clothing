import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 30px;
  border-top: 1px solid darkgrey;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  .StripeElement {
    width: 100%;
    padding: 15px;
    border: 1px solid darkgrey;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  button {
    margin-top: 15px;
    width: 100%;
  }
`;

export const PaymentMessage = styled.p`
  color: ${({ success }) => (success ? '#4BB543' : '#ff6b6b')};
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

export const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #4bb543;
  color: white;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  animation: scaleIn 0.5s ease-out;

  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const SuccessTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;

export const OrderNumber = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

export const SuccessDetails = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;

  p {
    margin: 10px 0;
    font-size: 16px;
    color: #555;

    &:first-child {
      font-size: 18px;
      color: #333;
      margin-bottom: 15px;
    }

    strong {
      color: #333;
    }
  }
`;

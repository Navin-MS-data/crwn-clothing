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


import styled from 'styled-components';

export const PaymentPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding-bottom: 50px;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 30px auto 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 15px 40px;
    margin: 20px auto 0;
  }
`;

export const PaymentPageHeader = styled.h1`
  font-size: 36px;
  margin: 20px 0 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin: 15px 0 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const BackButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 15px;
  cursor: pointer;
  color: #333;
  padding: 8px 0;
  letter-spacing: 0.3px;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

export const OrderSummary = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px 30px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);

  @media screen and (max-width: 480px) {
    padding: 18px 16px;
  }
`;

export const OrderSummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const OrderSummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #efefef;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const OrderSummaryItem = styled.span`
  font-size: 15px;
  color: #444;

  &:last-child {
    font-weight: 500;
    color: #222;
  }
`;

export const OrderSummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 2px solid #333;
  font-size: 18px;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

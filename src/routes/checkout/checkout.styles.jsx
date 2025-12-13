import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 30px auto 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 20px auto 0;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 768px) {
    padding: 8px 0;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin-top: 15px;
  }
`;

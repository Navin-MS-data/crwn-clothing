import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  @media screen and (max-width: 768px) {
    height: 70px;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 480px) {
    height: 60px;
    margin-bottom: 10px;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 15px;

    span {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 5px 10px;

    span {
      font-size: 12px;
    }
  }
`;

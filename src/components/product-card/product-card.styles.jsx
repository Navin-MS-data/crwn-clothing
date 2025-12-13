import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

export const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  position: absolute;
  top: 240px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProductCartContainer}:hover & {
    opacity: 1;
  }

  button {
    position: relative;
    top: 0;
    display: flex;
    width: 100%;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  margin-bottom: 5px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: relative !important;
  top: 0 !important;
  opacity: 1 !important;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const QuantityValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  min-width: 25px;
  text-align: center;
`;

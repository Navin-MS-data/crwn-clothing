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

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  position: absolute;
  top: 255px;
  background-color: white;
  border: 1px solid black;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProductCartContainer}:hover & {
    opacity: 0.85;
  }
`;

export const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const QuantityValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
`;

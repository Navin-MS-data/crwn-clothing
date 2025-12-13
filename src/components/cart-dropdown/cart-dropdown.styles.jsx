import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 300px;
    top: 70px;
    right: 20px;
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 280px;
    top: 60px;
    right: 10px;
    padding: 10px;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      min-width: unset;
      padding: 0 15px;
      font-size: 12px;
    }
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 40px auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin: 30px auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media screen and (max-width: 768px) {
    height: 200px;
  }

  @media screen and (max-width: 480px) {
    height: 180px;
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 10px 0;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    height: 50px;
    margin-bottom: 15px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 768px) {
    width: 50px;
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 40px;
    padding: 10px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    padding: 5px 8px;
    font-size: 12px;
  }
`;

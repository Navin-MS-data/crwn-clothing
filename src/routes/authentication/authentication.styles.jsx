import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  .desktop-view {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .mobile-view {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 20px auto;

    .desktop-view {
      display: none;
    }

    .mobile-view {
      display: flex;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0 10px;
    gap: 30px;
    margin: 15px auto;
  }
`;

export const MobileFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ToggleLink = styled.span`
  margin-top: 20px;
  font-size: 16px;
  color: #4285f4;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #357ae8;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-top: 15px;
  }
`;

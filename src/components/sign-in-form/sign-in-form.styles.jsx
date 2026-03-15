import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 380px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    h2 {
      font-size: 20px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  color: #cc0000;
  font-size: 14px;
  margin: 8px 0 4px;
`;

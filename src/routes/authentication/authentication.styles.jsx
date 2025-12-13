import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 20px auto;
  }

  @media screen and (max-width: 480px) {
    padding: 0 10px;
    gap: 30px;
    margin: 15px auto;
  }
`;

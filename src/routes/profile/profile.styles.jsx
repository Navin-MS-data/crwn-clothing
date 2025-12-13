import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 50px auto;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fafafa;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 30px auto;
    padding: 30px;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
    margin: 20px auto;
    padding: 20px;
  }
`;

export const ProfileHeader = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const ProfileInfo = styled.div`
  width: 100%;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const ProfileEmail = styled.p`
  font-size: 18px;
  color: #555;
  padding: 15px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 5px;

  strong {
    color: #333;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const ProfileActions = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    width: 100%;
    max-width: 200px;
  }

  @media screen and (max-width: 480px) {
    button {
      max-width: 100%;
    }
  }
`;

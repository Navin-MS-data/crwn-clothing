import styled from 'styled-components';

export const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  min-height: 90vh;
  margin: 60px auto 0;
  padding-bottom: 60px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 40px auto 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 15px 40px;
    margin: 30px auto 0;
  }
`;

export const SuccessIcon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #4bb543;
  color: white;
  font-size: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  animation: scaleIn 0.5s ease-out;

  @keyframes scaleIn {
    0% { transform: scale(0); }
    60% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }
`;

export const SuccessTitle = styled.h1`
  font-size: 32px;
  color: #222;
  margin-bottom: 8px;

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const OrderNumber = styled.p`
  font-size: 14px;
  color: #888;
  letter-spacing: 1.2px;
  margin-bottom: 36px;
  text-transform: uppercase;
`;

export const DetailsCard = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 28px 32px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  margin-bottom: 24px;

  @media screen and (max-width: 480px) {
    padding: 20px 18px;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #ebebeb;

  &:last-child {
    border-bottom: none;
  }
`;

export const DetailLabel = styled.span`
  font-size: 15px;
  color: #666;
`;

export const DetailValue = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  text-align: right;
  max-width: 60%;
  word-break: break-word;
`;

export const ConfirmationNote = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 36px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

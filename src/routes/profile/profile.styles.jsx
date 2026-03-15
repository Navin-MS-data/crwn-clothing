import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;
  margin: 50px auto 60px;
  padding: 40px 36px;

  @media screen and (max-width: 768px) {
    margin: 30px auto 40px;
    padding: 30px 24px;
  }

  @media screen and (max-width: 480px) {
    width: 92%;
    margin: 20px auto 30px;
    padding: 24px 18px;
  }
`;

export const AvatarCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;

  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const AvatarInitials = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
  font-family: 'Space Grotesk', sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const DisplayName = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #111;
  margin-bottom: 6px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const EmailText = styled.p`
  font-size: 15px;
  color: #777;
  margin-bottom: 6px;
  text-align: center;
`;

export const MemberSince = styled.p`
  font-size: 13px;
  color: #aaa;
  letter-spacing: 0.4px;
  margin-bottom: 0;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ebebeb;
  margin: 28px 0;
`;

export const InfoCard = styled.div`
  width: 100%;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const InfoLabel = styled.span`
  font-size: 13px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: 600;
`;

export const InfoValue = styled.span`
  font-size: 15px;
  color: #222;
  font-weight: 500;
  text-align: right;
  word-break: break-word;
  max-width: 65%;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    text-align: left;
  }
`;

export const QuickLinks = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const QuickLinkButton = styled.button`
  flex: 1;
  padding: 12px 0;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: background-color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background-color: #ebebeb;
    border-color: #ccc;
  }
`;

export const SignOutWrapper = styled.div`
  width: 100%;

  button {
    width: 100%;
  }
`;

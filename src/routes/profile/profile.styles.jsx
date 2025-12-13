import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 20px;
  min-height: 80vh;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 400px;
  width: 100%;
`;

export const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProfileInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

export const ProfileName = styled.h2`
  font-size: 28px;
  margin: 0 0 10px 0;
  color: #333;
`;

export const ProfileEmail = styled.p`
  font-size: 16px;
  color: #888;
  margin: 0;
`;

export const ProfileDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

export const ProfileLabel = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export const ProfileValue = styled.span`
  font-size: 14px;
  color: #333;
`;

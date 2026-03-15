import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 130px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 14px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 768px) {
    min-width: 120px;
    height: 45px;
    line-height: 45px;
    padding: 0 16px;
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    min-width: 100px;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    font-size: 12px;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

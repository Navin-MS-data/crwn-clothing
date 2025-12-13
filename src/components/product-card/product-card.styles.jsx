import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 768px) {
    height: 300px;

    button {
      top: 210px;
      width: 90%;
      display: flex;
      opacity: 0.9;
      font-size: 12px;
      padding: 0 20px;
      min-width: unset;
      background-color: black;
      color: white;
      border: none;

      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    }

    img {
      height: 90%;
    }
  }

  @media screen and (max-width: 480px) {
    height: 280px;

    button {
      position: relative;
      top: auto;
      width: 100%;
      font-size: 10px;
      padding: 0 10px;
      height: 35px;
      line-height: 35px;
      display: flex;
      opacity: 1;
      margin-top: 5px;
      background-color: black;
      color: white;
      border: none;

      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    }

    img {
      height: 75%;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    flex-direction: column;
    height: auto;
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Price = styled.span`
  width: 10%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

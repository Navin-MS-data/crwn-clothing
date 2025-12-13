import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    min-height: 80px;
    padding: 10px 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    min-height: 70px;
    padding: 8px 0;
    flex-wrap: wrap;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 20%;
    padding-right: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 25%;
    padding-right: 10px;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;

  @media screen and (max-width: 768px) {
    width: 22%;
  }

  @media screen and (max-width: 480px) {
    width: 20%;
    font-size: 12px;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;

  @media screen and (max-width: 480px) {
    width: 25%;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Value = styled.span`
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    margin: 0 8px;
  }

  @media screen and (max-width: 480px) {
    margin: 0 5px;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding-left: 8px;
  }

  @media screen and (max-width: 480px) {
    padding-left: 5px;
    font-size: 12px;
  }
`;

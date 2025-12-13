import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  gap: 40px;
  align-items: flex-start;
`;

export const BackLink = styled(Link)`
  width: 100%;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductImage = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 350px;

  img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;

    img {
      max-height: 350px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      max-height: 300px;
    }
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ProductCategory = styled.span`
  font-size: 14px;
  color: #888;
  letter-spacing: 2px;
`;

export const ProductName = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ProductPrice = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin: 20px 0;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

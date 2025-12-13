import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 40px;
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
  min-width: 300px;
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
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
`;

export const ProductPrice = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #000;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin: 20px 0;
`;

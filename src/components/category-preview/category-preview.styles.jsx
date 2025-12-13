import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    row-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
    row-gap: 15px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
`;

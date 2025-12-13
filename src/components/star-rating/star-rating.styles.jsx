import styled from 'styled-components';

export const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Star = styled.span`
  font-size: 14px;
  color: ${({ filled }) => {
    switch (filled) {
      case 'full':
        return '#ffc107';
      case 'half':
        return 'linear-gradient(90deg, #ffc107 50%, #e0e0e0 50%)';
      default:
        return '#e0e0e0';
    }
  }};
  background: ${({ filled }) =>
    filled === 'half' ? 'linear-gradient(90deg, #ffc107 50%, #e0e0e0 50%)' : 'none'};
  -webkit-background-clip: ${({ filled }) => (filled === 'half' ? 'text' : 'unset')};
  -webkit-text-fill-color: ${({ filled }) => (filled === 'half' ? 'transparent' : 'unset')};
`;

export const RatingText = styled.span`
  font-size: 12px;
  color: #666;
  margin-left: 5px;
`;

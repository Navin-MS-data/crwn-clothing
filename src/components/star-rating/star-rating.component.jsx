import {
  StarRatingContainer,
  Star,
  RatingText,
} from './star-rating.styles';

const StarRating = ({ rating, reviewCount }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} filled="full">★</Star>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} filled="half">★</Star>);
      } else {
        stars.push(<Star key={i} filled="empty">★</Star>);
      }
    }

    return stars;
  };

  return (
    <StarRatingContainer>
      {renderStars()}
      <RatingText>
        {rating} ({reviewCount} reviews)
      </RatingText>
    </StarRatingContainer>
  );
};

export default StarRating;

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product, category }) => {
  const { id, name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  const addProductToCart = (e) => {
    e.stopPropagation();
    if (!currentUser) {
      navigate('/auth');
      return;
    }
    dispatch(addItemToCart(cartItems, product));
  };

  const goToProductDetail = () => {
    navigate(`/shop/${category}/${id}`);
  };

  return (
    <ProductCartContainer onClick={goToProductDetail}>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;

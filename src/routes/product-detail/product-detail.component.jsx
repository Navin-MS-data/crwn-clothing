import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { selectCategoriesMap } from '../../store/categories/category.selector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button from '../../components/button/button.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  ProductDetailContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductCategory,
  BackLink,
} from './product-detail.styles';

const ProductDetail = () => {
  const { category, productId } = useParams();
  const dispatch = useDispatch();
  const categoriesMap = useSelector(selectCategoriesMap);
  const cartItems = useSelector(selectCartItems);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categoriesMap && Object.keys(categoriesMap).length > 0) {
      const categoryItems = categoriesMap[category];
      if (categoryItems) {
        const foundProduct = categoryItems.find(
          (item) => item.id === parseInt(productId)
        );
        setProduct(foundProduct);
      }
      setIsLoading(false);
    }
  }, [categoriesMap, category, productId]);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  const generateDescription = (product, category) => {
    const descriptions = {
      hats: `This stylish ${product.name} is the perfect accessory to complete your look. Made with premium materials for comfort and durability. One size fits most.`,
      sneakers: `Step up your shoe game with the ${product.name}. Featuring superior comfort, modern design, and excellent craftsmanship. Available in multiple sizes.`,
      jackets: `Stay warm and stylish with the ${product.name}. This premium jacket combines fashion with functionality, perfect for any season.`,
      womens: `Elevate your wardrobe with this beautiful ${product.name}. Designed for comfort and style, this piece is perfect for any occasion.`,
      mens: `Look sharp with the ${product.name}. This classic piece offers both comfort and style, making it a must-have for your wardrobe.`,
    };
    return descriptions[category] || `Premium quality ${product.name}. A great addition to your collection.`;
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!product) {
    return (
      <ProductDetailContainer>
        <h2>Product not found</h2>
        <BackLink to='/shop'>← Back to Shop</BackLink>
      </ProductDetailContainer>
    );
  }

  return (
    <ProductDetailContainer>
      <BackLink to={`/shop/${category}`}>← Back to {category}</BackLink>
      <ProductImage>
        <img src={product.imageUrl} alt={product.name} />
      </ProductImage>
      <ProductInfo>
        <ProductCategory>{category.toUpperCase()}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductDescription>
          {generateDescription(product, category)}
        </ProductDescription>
        <Button onClick={addProductToCart}>Add to Cart</Button>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

export default ProductDetail;

import { useDispatch, useSelector } from 'react-redux';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { Name, Price, Footer, ProductCardContainer, ProductCardImage } from './ProductCard.styles'
import { selectCartItems } from '../../store/cart/cartSelectors';
import { addToCart } from '../../store/cart/cartActions';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;
    const cartItems=useSelector(selectCartItems)
    const addProductToCart = () => {
        dispatch(addToCart(product, cartItems));
    }
    return <ProductCardContainer>
        <ProductCardImage src={imageUrl} alt={name} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to cart</Button>
    </ProductCardContainer>
}

export default ProductCard;
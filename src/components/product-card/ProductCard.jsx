import { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { Name, Price, Footer, ProductCardContainer, ProductCardImage } from './ProductCard.styles'
import { CartContext } from '../../context/CartContext';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const {addToCart} = useContext(CartContext);
    const addProductToCart = () => {
        addToCart(product);
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
import { useContext } from 'react';
import Button from '../button/Button';
import './ProductCard.styles.scss'
import { CartContext } from '../../context/CartContext';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const {addToCart} = useContext(CartContext);
    const addProductToCart = () => {
        addToCart(product);
    }
    return <div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className='footer'>
            <div className='name'>{name}</div>
            <div className='price'>{price}</div>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart} >Add to cart</Button>
    </div>
}

export default ProductCard;
import Button from '../button/Button';
import './ProductCard.styles.scss'

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product
    return <div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className='footer'>
            <div className='name'>{name}</div>
            <div className='price'>{price}</div>
        </div>
        <Button buttonType='inverted' />
    </div>
}

export default ProductCard;
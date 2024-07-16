import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({item}) => {
    const {imageUrl, name, quantity, price} = item;
    const {removeFromCart,removeAllFromCart, addToCart} = useContext(CartContext);
    const removeFromCartHandler = () => {
        removeFromCart(item);
    }
    const removeAllFromCartHandler = () => {
        removeAllFromCart(item);
    }
    const addToCartHandler = () => {
        addToCart(item);
    }
    return <div className='checkout-item-container'>
        <div className='image-container'><img src={imageUrl} alt={name}/></div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeFromCartHandler}>&#10094;</div>
            <div className='value'>{quantity}</div>
            <div className='arrow' onClick={addToCartHandler}>&#10095;</div>
            </span>
        <span className='price'>{price}</span>
        <div onClick={removeAllFromCartHandler}>&#10005;</div>
    </div>

}

export default CheckoutItem;
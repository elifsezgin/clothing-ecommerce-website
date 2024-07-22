import { useDispatch, useSelector } from 'react-redux';
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, Arrow, Value, RemoveButton } from './CheckoutItem.styles';
import {removeFromCart,removeAllFromCart, addToCart}  from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelectors';

const CheckoutItem = ({item}) => {
    const dispatch = useDispatch();
    const {imageUrl, name, quantity, price} = item;
    const cartItems = useSelector(selectCartItems);

    const removeFromCartHandler = () => {
        dispatch(removeFromCart(item, cartItems));
    }
    const removeAllFromCartHandler = () => {
        dispatch(removeAllFromCart(item,cartItems));
    }
    const addToCartHandler = () => {
        dispatch(addToCart(item,cartItems));
    }
    return <CheckoutItemContainer>
        <ImageContainer><img src={imageUrl} alt={name}/></ImageContainer>
        <Name>{name}</Name>
        <Quantity>
            <Arrow onClick={removeFromCartHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addToCartHandler}>&#10095;</Arrow>
        </Quantity>
        <Price>{price}</Price>
        <RemoveButton onClick={removeAllFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>

}

export default CheckoutItem;
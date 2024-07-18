import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, Arrow, Value, RemoveButton } from './CheckoutItem.styles';

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
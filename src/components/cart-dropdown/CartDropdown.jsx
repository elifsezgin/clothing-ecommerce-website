import { useSelector } from 'react-redux';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';

import { CartDropdownContainer, CartItems, EmptyMessage } from './CartDropdown.styles';
import { selectCartItems } from '../../store/cart/cartSelectors';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return <CartDropdownContainer>
        {cartItems.length ? <>
            <CartItems>
                {cartItems.map(cartItem => 
                <CartItem key={cartItem.id} cartItem={cartItem} />
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </> : <EmptyMessage>Your cart is empty</EmptyMessage>}
       
    </CartDropdownContainer>
}   

export default CartDropdown;
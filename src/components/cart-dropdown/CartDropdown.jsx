import { useContext } from 'react';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

import { CartDropdownContainer, CartItems, EmptyMessage } from './CartDropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
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
import { useContext } from 'react';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map(cartItem => 
            <CartItem key={cartItem.id} cartItem={cartItem} />
            )}
        </div>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </div>
}   

export default CartDropdown;
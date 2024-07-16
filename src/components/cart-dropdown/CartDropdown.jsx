import { useContext } from 'react';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import './CartDropdown.styles.scss';
import { CartContext } from '../../context/CartContext';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map(cartItem => 
            <CartItem key={cartItem.id} cartItem={cartItem} />
            )}
        </div>
        <Button>Go to checkout</Button>

    </div>
}   

export default CartDropdown;
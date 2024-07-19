import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {CartIconContainer, ItemCount, ShoppingIcon} from './CartIcon.styles';

const CartIcon = () => {
    const { toggleCartDropdown, count } = useContext(CartContext)
    return <CartIconContainer onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{count}</ItemCount>
    </CartIconContainer>

}

export default CartIcon;
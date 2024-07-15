import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.styles.scss'
import { CartContext } from '../../context/CartContext'
const CartIcon = () => {
    const { toggleCartDropdown } = useContext(CartContext)
    return <div className='cart-icon-container' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>

}

export default CartIcon;
import { useDispatch, useSelector } from 'react-redux';
import {CartIconContainer, ItemCount, ShoppingIcon} from './CartIcon.styles';
import { selectIsCartOpen, selectTotalCount } from '../../store/cart/cartSelectors';
import { setIsCartOpen } from '../../store/cart/cartActions';

const CartIcon = () => {
    const dispatch = useDispatch();
    const totalCount = useSelector(selectTotalCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleCartDropdown = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }
    
    return <CartIconContainer onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{totalCount}</ItemCount>
    </CartIconContainer>

}

export default CartIcon;
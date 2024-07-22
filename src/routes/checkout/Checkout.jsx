import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './Checkout.styles';
import { selectCartItems, selectTotalPrice } from '../../store/cart/cartSelectors';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);
    return <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}
        <Total>Total: ${totalPrice}</Total>
    </CheckoutContainer>

}

export default Checkout;
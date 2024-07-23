import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown  from "../../components/cart-dropdown/CartDropdown";

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './Navigation.styles';
import { selectCurrentUser } from "../../store/user/userSelectors";
import { selectIsCartOpen } from "../../store/cart/cartSelectors";
import { signOutStart } from "../../store/user/userActions";

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    const handleSignOut = () => {
        dispatch(signOutStart())
    }
    
    return <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinks>
                <NavLink to="/shop">SHOP</NavLink>
                {currentUser ? 
                    <NavLink as='span' onClick={handleSignOut}>SIGN OUT</NavLink> :
                    <NavLink to="/auth">SIGN IN</NavLink>
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet/>
    </Fragment>
}

export default Navigation;
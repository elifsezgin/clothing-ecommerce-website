import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown  from "../../components/cart-dropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase/firebaseUtils";

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './Navigation.styles';
import { selectCurrentUser } from "../../store/user/userSelectors";
import { selectIsCartOpen } from "../../store/cart/cartSelectors";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    return <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinks>
                <NavLink to="/shop">SHOP</NavLink>
                {currentUser ? 
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> :
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
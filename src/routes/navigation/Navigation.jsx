import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown  from "../../components/cart-dropdown/CartDropdown";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebaseUtils";

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './Navigation.styles';
import { CartContext } from "../../context/CartContext";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

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
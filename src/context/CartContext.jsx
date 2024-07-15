import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    toggleCartDropdown: () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCartDropdown = () => {
        setIsCartOpen(!isCartOpen);
    }
    const value = {isCartOpen, toggleCartDropdown};
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
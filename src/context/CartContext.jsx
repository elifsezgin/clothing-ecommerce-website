import { createContext, useMemo, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    toggleCartDropdown: () => {},
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    removeAllFromCart: () => {},
    count: 0,
    totalPrice: 0,
})



export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const count = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems])
    const totalPrice = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0), [cartItems])

    const toggleCartDropdown = () => {
        setIsCartOpen(!isCartOpen);
    }
    const addItemToCart = (product) => {
        const existing = cartItems.find(el => el.id === product.id);
        if (existing) {
            return cartItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
        }
        return [...cartItems, {...product, quantity: 1}]
    }
    
    const addToCart = (product) => {
        const updatedCartItems = addItemToCart(product)
        setCartItems(updatedCartItems)
    }

    const removeItemFromCart = (product) => cartItems.map(item => item.id === product.id ? {...item, quantity: item.quantity - 1} : item).filter(item => !!item.quantity)
        

    const removeFromCart = (product) => {
        const updatedCartItems = removeItemFromCart(product)
        setCartItems(updatedCartItems)
    }
    const removeAllFromCart = (product) => {
        const updatedCartItems = cartItems.filter(item => item.id !== product.id);
        setCartItems(updatedCartItems)
    }
    
    const value = {isCartOpen, toggleCartDropdown, addToCart, removeFromCart, removeAllFromCart, cartItems, count, totalPrice};
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
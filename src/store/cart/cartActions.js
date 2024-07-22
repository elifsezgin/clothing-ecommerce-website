import { createAction } from "../../utils/reducer/reducerUtils";
import { CART_ACTION_TYPES } from "./cartActionTypes";

export const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const setIsCartOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);

const addItemToCart = (product, cartItems) => {
  const existing = cartItems.find((el) => el.id === product.id);
  if (existing) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

const removeItemFromCart = (product, cartItems) =>
  cartItems
    .map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => !!item.quantity);

export const addToCart = (product, cartItems) => {
  const updatedCartItems = addItemToCart(product, cartItems);
  return setCartItems(updatedCartItems);
};

export const removeFromCart = (product, cartItems) => {
  const updatedCartItems = removeItemFromCart(product, cartItems);
  return setCartItems(updatedCartItems);
};

export const removeAllFromCart = (product, cartItems) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
  return setCartItems(updatedCartItems);
};

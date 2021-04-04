export const ADD_PIZZA_TO_CART  = "ADD_PIZZA_TO_CART";
export const PLUS_CART_ITEM  = "PLUS_CART_ITEM";
export const MINUS_CART_ITEM  = "MINUS_CART_ITEM";
export const REMOVE_CART_ITEM  = "REMOVE_CART_ITEM";
export const CLEAR_CART  = "CLEAR_CART";

export const addPizzaToCart = (pizza) => ({type: ADD_PIZZA_TO_CART, payload:pizza});
export const clearCart = () => ({type: CLEAR_CART});
export const removeCartItem = (id) => ({type: REMOVE_CART_ITEM, payload:id});
export const plusCartItem = (id) => ({type: PLUS_CART_ITEM, payload:id});
export const minusCartItem = (id) => ({type: MINUS_CART_ITEM, payload:id});
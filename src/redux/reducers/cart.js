import {ADD_PIZZA_TO_CART} from "../actions/cart";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const cart = (state=initialState, action) => {

  switch (action.type) {
    case (ADD_PIZZA_TO_CART):

      const newItems = {
        ...state.items,
        [action.payload.id]: state.items[action.payload.id] ?
            [...state.items[action.payload.id], action.payload] : [action.payload]
      }

      const arrAllPizzas = [].concat(...Object.values(newItems));

      return {
        ...state,
        items: newItems,
        totalCount: arrAllPizzas.length,
        totalPrice: arrAllPizzas.reduce((sum, currentItem) =>  currentItem.price +  sum, 0)
      }

    default:
      return state;
  }
}

export default cart;
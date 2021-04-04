import {ADD_PIZZA_TO_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from "../actions/cart";

const initialState = {
  allItems: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotals = (itemsObj) => {
  const arrItems = Object.values(itemsObj).map(obj => obj.items || obj);
  const arrAllPizzas = [].concat(...arrItems);

  return {
    count:  arrAllPizzas.length,
    sum:    arrAllPizzas.reduce((sum, obj) => obj.price + sum, 0)
  }
}

const cart = (state=initialState, action) => {

  switch (action.type) {
    case (ADD_PIZZA_TO_CART): {

      const currentPizzaItems = {
        [action.payload.id]: state.allItems[action.payload.id] ?
                              [...state.allItems[action.payload.id].items, action.payload] : [action.payload]
      };

      const totalsCurrent = getTotals(currentPizzaItems);

      const newAllItems = {
        ...state.allItems,
        [action.payload.id]: {
          items: currentPizzaItems[action.payload.id],
          sum: totalsCurrent.sum,
          count: totalsCurrent.count
        }
      }

      const totalsAll = getTotals(newAllItems);
      return {
        ...state,
        allItems: newAllItems,
        totalCount: totalsAll.count,
        totalPrice: totalsAll.sum
      }
    }

    case (PLUS_CART_ITEM): {
      const newCurrentItems = [
        ...state.allItems[action.payload].items,
        state.allItems[action.payload].items[0]
      ];

      const totalsCurrent = getTotals(newCurrentItems);

      const newAllItems = {
        ...state.allItems,
        [action.payload]: {
          items: newCurrentItems,
          sum: totalsCurrent.sum,
          count: totalsCurrent.count
        }
      }

      const totalsAll = getTotals(newAllItems);

      return {
        ...state,
        allItems: newAllItems,
        totalCount: totalsAll.count,
        totalPrice: totalsAll.sum
      }
    }

    case (MINUS_CART_ITEM): {
      const prevItems = [...state.allItems[action.payload].items];
      const newCurrentItems = prevItems.length > 1 ? prevItems.slice(1) : prevItems;

      const totalsCurrent = getTotals(newCurrentItems);

      const newAllItems = {
        ...state.allItems,
        [action.payload]: {
          items: newCurrentItems,
          sum: totalsCurrent.sum,
          count: totalsCurrent.count
        }
      }

      const totalsAll = getTotals(newAllItems);

      return {
        ...state,
        allItems: newAllItems,
        totalCount: totalsAll.count,
        totalPrice: totalsAll.sum
      }
    }

    case(REMOVE_CART_ITEM): {
      let allItemsAfterRemove = {
        ...state.allItems
      };
      delete allItemsAfterRemove[action.payload];

      const totalsAll = getTotals(allItemsAfterRemove);
      return {
        ...state,
        allItems: allItemsAfterRemove,
        totalCount: totalsAll.count,
        totalPrice: totalsAll.sum
      }
    }

    case (CLEAR_CART): {
      return {
        ...initialState
      }
    }

    default:
      return state;
  }
}

export default cart;
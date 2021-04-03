import axios from "axios";

export const SET_PIZZAS = "SET_PIZZAS";
export const SET_LOADED = "SET_LOADED";

export const setPizzas = (items) => ({type:SET_PIZZAS, payload: items});
export const setLoaded = (boolean) => ({type:SET_LOADED, payload: boolean});

export const fetchPizzas = (category, typeSortBy, orderSortBy) => (dispatch) => {

  dispatch(setLoaded(false));
  axios.get("http://localhost:3001/pizzas", {
    params: {
      category: category,
      _sort: typeSortBy,
      _order: orderSortBy
    }
  })
      .then(response => {
        dispatch(setPizzas(response.data));
      })
      .finally(() => dispatch(setLoaded(true)));
}
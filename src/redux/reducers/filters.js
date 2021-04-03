import {SET_CATEGORY, TOGGLE_SORT_BY_ORDER, SET_SORT_BY_TYPE} from "../actions/filters";

const initialState = {
  category: null,
  sortBy: {
    type: 'rating',
    order: "desc"
  }
}

const filters = (state=initialState, action) => {

  switch (action.type) {

    case(SET_SORT_BY_TYPE):
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          type: action.payload
        }
      }

    case(TOGGLE_SORT_BY_ORDER):
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          order: state.sortBy.order === "desc" ? "asc" : "desc"
        }
      }

    case (SET_CATEGORY): {
        return {
          ...state,
          category: action.payload
        }
      }

    default:
      return state;
  }
}


export default filters;
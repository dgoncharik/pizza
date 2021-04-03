export const SET_SORT_BY_TYPE = "SET_SORT_BY_TYPE";
export const TOGGLE_SORT_BY_ORDER = "TOGGLE_SORT_BY_ORDER";
export const SET_CATEGORY = "SET_CATEGORY";

export const setSortByType = (type) => ({type:SET_SORT_BY_TYPE, payload:type});
export const toggleSortByOrder = () => ({type:TOGGLE_SORT_BY_ORDER});

export const setCategory = (index) => ({type:SET_CATEGORY, payload:index});
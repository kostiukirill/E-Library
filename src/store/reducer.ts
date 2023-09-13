import { ActionType } from "../types/actionType";
import { StatePropsType } from "../types/statePropsType";

const initialState: StatePropsType = {
  searchInputValue: "",
  selectGenres: "all",
  selectSort: "relevance",
  books: [],
  loaded: false,
  loading: false,
  error : '',
};

function stateReducer(state = initialState, action?: ActionType) {
  let newState: StatePropsType = { ...state };
  if (action)
    switch (action.type) {
      case "CHANGE_SEARCH_INPUT_VALUE":
        return (newState = {
          ...newState,
          searchInputValue: action.searchInputValue
            ? action.searchInputValue
            : newState.searchInputValue,
            error: ''
        });
      case "CHANGE_SELECT_GENRES_VALUE":
        return (newState = {
          ...newState,
          selectGenres: action.selectGenres
            ? action.selectGenres
            : newState.selectGenres,
            error: ''
        });
      case "CHANGE_SELECT_SORT_VALUE":
        return (newState = {
          ...newState,
          selectSort: action.selectSort
            ? action.selectSort
            : newState.selectSort,
            error: ''
        });
      case "ADD_BOOKS":
        return (newState = {
          ...newState,
          books: newState.books
            ? [...newState.books, ...action.books]
            : action.books,
          loading: false,
          loaded: true,
          error: ''
        });
      case "CREATE_BOOKS":
        return (newState = {
          ...newState,
          books: action.books?.length ? action.books : [],
          loading: false,
          loaded: true,
          error: ''
        });
      case "LOADING":
        return (newState = {
          ...newState,
          loading: true,
          loaded: false,
          error: ''
        });
      case "ERROR":
        return (newState = {
          ...newState,
          books: [],
          error: action.error,
          loading: false,
          loaded: true,
        })
      default:
        return newState;
    }
}

export { stateReducer };

import { AnyAction } from "redux";

export interface ActionType extends AnyAction {
  type:
    | "CHANGE_SEARCH_INPUT_VALUE"
    | "CHANGE_SELECT_GENRES_VALUE"
    | "CHANGE_SELECT_SORT_VALUE"
    | "ADD_BOOKS"
    | "CREATE_BOOKS"
    | "LOADING"
    | "ERROR";
}

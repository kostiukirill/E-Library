import axios from "axios";
import { store } from "../../store/store";
import { ActionType } from "../../types/actionType";
import { createActionForDispatchStore } from "../createActionForDispatchStore/createActionForDispatchStore";

export const getBooks = async (
  { type }: ActionType,
  indexStart?: number,
  maxResults?: number
) => {
  store.dispatch({ type: "LOADING" });
  await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${
        store.getState().stateReducer?.searchInputValue
      }${
        store.getState().stateReducer?.selectGenres !== "all"
          ? `+subject=${store.getState().stateReducer?.selectGenres}`
          : ""
      }&orderBy=${store.getState().stateReducer?.selectSort}&startIndex=${
        indexStart ? indexStart : 0
      }&maxResults=${maxResults ? maxResults : 30}&key=${
        process.env.REACT_APP_API_KEY
      }`
    )
    .then((res) => {
      store.dispatch(createActionForDispatchStore(res.data.items, type));
    })
    .catch(() => {
      store.dispatch({ type: "ERROR", error: "Book is not found" });
    });
};

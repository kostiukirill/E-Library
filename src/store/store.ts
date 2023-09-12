import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { stateReducer } from "./reducer";

const allReducers = combineReducers({ stateReducer });

export const store = configureStore({ reducer: allReducers });

store.subscribe(() => {
  localStorage.setItem("bookInfoState", JSON.stringify(store.getState()));
});

import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AnyAction } from "redux";
import { ThunkMiddleware } from "redux-thunk";

export interface StoreType {
  store: ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction>]>;
}

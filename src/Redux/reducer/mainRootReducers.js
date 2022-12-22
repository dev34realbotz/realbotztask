import { combineReducers } from "redux";
import userData from "./index";

export const mainRootReducers = (state, action) =>
  combineReducers({
    userData,
  });

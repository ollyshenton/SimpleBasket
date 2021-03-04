import { combineReducers } from "redux";
import cartReducers from "./cartReducer";

export default combineReducers({
  cart: cartReducers
});

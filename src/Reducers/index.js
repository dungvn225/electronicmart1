import { combineReducers } from "redux";
import Products from "./Products";
import Cart from "./Cart";
const appReducers=combineReducers({
    Products,
    Cart
})

export default appReducers;
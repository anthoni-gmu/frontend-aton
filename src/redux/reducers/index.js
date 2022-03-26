import { combineReducers } from "redux";

import Alert from "./alert";
import Auth from "./auth"
import Product from "./product"
import Cart from "./cart"
export default combineReducers({
    Alert,
    Auth,
    Product,
    Cart,
})
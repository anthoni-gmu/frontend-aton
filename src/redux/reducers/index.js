import { combineReducers } from "redux";

import Alert from "./alert";
import Auth from "./auth"
import Product from "./product"
export default combineReducers({
    Alert,
    Auth,
    Product,
})
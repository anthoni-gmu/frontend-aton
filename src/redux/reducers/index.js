import { combineReducers } from "redux";

import Alert from "./alert";
import Auth from "./auth"
import Product from "./product"
import Cart from "./cart"
import Profile from "./profile"
import Wishlist from "./wishlist"
import Shipping from "./shipping"
export default combineReducers({
    Alert,
    Auth,
    Product,
    Cart,
    Profile,
    Wishlist,
    Shipping
})
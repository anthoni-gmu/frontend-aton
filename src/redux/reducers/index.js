import { combineReducers } from "redux";

import Alert from "./alert";
import Auth from "./auth"
import Product from "./product"
import Cart from "./cart"
import Profile from "./profile"
import Wishlist from "./wishlist"
import Shipping from "./shipping"
import Coupon from "./coupon"
export default combineReducers({
    Alert,
    Auth,
    Product,
    Cart,
    Profile,
    Wishlist,
    Shipping,
    Coupon
})
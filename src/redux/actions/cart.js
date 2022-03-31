import axios from 'axios';
import {
    ADD_ITEM,
    GET_ITEMS,
    UPDATE_ITEM,
    REMOVE_ITEM,
    EMPTY_CART,
    ADD_ITEM_OK,
    ADD_ITEM_FAIL,
    GET_ITEMS_OK,
    GET_ITEMS_FAIL,
    UPDATE_ITEM_OK,
    UPDATE_ITEM_FAIL,
    REMOVE_ITEM_OK,
    REMOVE_ITEM_FAIL,
    EMPTY_CART_OK,
    EMPTY_CART_FAIL,
    SYNCH_CART_OK,
    SYNCH_CART_FAIL
} from './types';
import { getStoreLocal, setStoreLocal } from "../../helpers/helpRedux";
import { setAlert } from './alert';

export const add_item = product => async dispatch => {
    if (getStoreLocal('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            }
        };

        const product_id = product.id;
        const body = JSON.stringify({ product_id });


        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add-item`, body, config);

            if (res.status === 201 || res.status === 200) {
                dispatch({
                    type: ADD_ITEM_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: ADD_ITEM_FAIL
                });
            }
        } catch (err) {
            
        }

    } else {
        let cart = [];
        let cartres = [];
        let amount = 0.0;
        let total_items = 0;
        let data = []
        let count = 1

        let order_item = {}

        if (getStoreLocal('cart') && getStoreLocal('cart') !== []) {
            cartres = JSON.parse(getStoreLocal('cart'))
            cartres = JSON.parse(cartres)
            cartres = cartres[0]
            const MoreThatOne = cartres && cartres !== null && cartres !== undefined && cartres.find(element => element.product.id === product.id);
            if (MoreThatOne !== undefined) {
                count = MoreThatOne.count
            }
            if (product.quantity - count <= 0) {
                count = product.quantity

            } else {
                if (MoreThatOne !== undefined) {
                    count = MoreThatOne.count + 1
                }
            }
        }
        cart = []

        cartres.map(cart_item => {
            if (cart_item.product.id.toString() !== product.id.toString()) {
                cart.push(cart_item);
            }
        });


        order_item = {
            product: product,
            count: count,
        };

        cart.push(order_item);

        if (getStoreLocal('cart')) {
            data = JSON.parse(getStoreLocal('cart'))
            data = JSON.parse(data)
            data = data[0]

            data.map(item => {
                amount += parseFloat(item.product.price) * parseFloat(item.count);
            });
            total_items = data.length
        }

        dispatch({
            type: ADD_ITEM,
            payload: [cart, parseFloat(amount.toFixed(2)), total_items]
        });
    }
}


export const get_items = () => async dispatch => {
    if (getStoreLocal('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            }
        };

        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/cart-items`, config);

            if (res.status === 200) {
                dispatch({
                    type: GET_ITEMS_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_ITEMS_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: GET_ITEMS_FAIL
            });
        }
    } else {
        let cart = [];
        let amount = 0.0;
        let total_items = 0;

        if (getStoreLocal('cart')) {
            cart = JSON.parse(getStoreLocal('cart'))
            cart = JSON.parse(cart)
            cart = cart[0]
            if (cart !== undefined && cart !== []) {
                cart.map(item => {
                    amount += parseFloat(item.product.price) * parseFloat(item.count);
                });
                total_items = cart.length
            } else {
                cart = []
                total_items = 0
                amount = 0.0
            }



        }

        dispatch({
            type: GET_ITEMS,
            payload: [cart, parseFloat(amount.toFixed(2)), total_items]
        });
    }
}


export const update_item = (item, count) => async dispatch => {
    if (getStoreLocal('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            }
        };

        const product_id = item.id;
        const body = JSON.stringify({ product_id, count });

        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/update-item`, body, config);

            if (res.status === 200 && !res.data.error) {
                dispatch({
                    type: UPDATE_ITEM_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: UPDATE_ITEM_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: UPDATE_ITEM_FAIL
            });
        }

    } else {
        let cart = [];
        let cartres = [];
        let amount = 0.0;
        let total_items = 0;
        let data = []

        let order_item = {}

        if (getStoreLocal('cart') && getStoreLocal('cart') !== []) {
            cartres = JSON.parse(getStoreLocal('cart'))
            cartres = JSON.parse(cartres)
            cartres = cartres[0]

        }
        cart = []
        cartres.map(cart_item => {
            if (cart_item.product.id.toString() !== item.id.toString()) {
                cart.push(cart_item);
            }
        });


        order_item = {
            product: item,
            count: count,
        };

        cart.push(order_item);

        if (getStoreLocal('cart')) {
            data = JSON.parse(getStoreLocal('cart'))
            data = JSON.parse(data)
            data = data[0]

            data.map(item => {
                amount += parseFloat(item.product.price) * parseFloat(item.count);
            });
            total_items = data.length
        }

        dispatch({
            type: UPDATE_ITEM,
            payload: [cart, parseFloat(amount.toFixed(2)), total_items]
        });
    }
}


export const remove_item = item => async dispatch => {
    if (getStoreLocal('access')) {
        const product_id = item.id;
        const body = JSON.stringify({ product_id });


        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            },
            data: body
        };

        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove-item`, config);

            if (res.status === 200) {
                dispatch({
                    type: REMOVE_ITEM_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: REMOVE_ITEM_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: REMOVE_ITEM_FAIL
            });
        }
    } else {
        let cart = [];
        let amount = 0.0;
        let total_items = 0;
        let new_cart = [];

        if (getStoreLocal('cart')) {
            cart = JSON.parse(getStoreLocal('cart'))
            cart = JSON.parse(cart)
            cart = cart[0]

            cart.map(item_cart => {
                amount += parseFloat(item_cart.product.price) * parseFloat(item_cart.count);
                if (item_cart.product.id.toString() !== item.id.toString()) {
                    new_cart.push(item_cart);
                }
            });
            total_items = cart.length

        }

        dispatch({
            type: REMOVE_ITEM,
            payload: [new_cart, parseFloat(amount.toFixed(2)), total_items]
        });
    }
}

export const empty_cart = () => async dispatch => {
    if (getStoreLocal('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            }
        };

        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/empty-cart`, config);

            if (res.status === 200) {
                dispatch({
                    type: EMPTY_CART_OK
                });
            } else {
                dispatch({
                    type: EMPTY_CART_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: EMPTY_CART_FAIL
            });
        }
    } else {
        dispatch({
            type: EMPTY_CART
        });
    }
}


export const synch_cart = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `JWT ${getStoreLocal('access')}`,
        }
    };

    let cart_items = [];

    if (getStoreLocal('cart')) {
        let cart = JSON.parse(getStoreLocal('cart'));
        cart = JSON.parse(cart);
        cart = cart[0]
        cart.map(cart_item => {
            const item = {};
            item.product_id = cart_item.product.id;
            item.count = cart_item.count;
            cart_items.push(item);
        });

    }

    const body = JSON.stringify({ cart_items });

    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/synch`, body, config);
        if (res.status === 201) {
            dispatch({
                type: SYNCH_CART_OK
            });
        } else {
            dispatch({
                type: SYNCH_CART_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: SYNCH_CART_FAIL
        });
    }
}
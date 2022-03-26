import axios from 'axios';
import {
    ADD_ITEM,
    GET_TOTAL,
    GET_ITEM_TOTAL,
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
import { getStoreLocal } from "../../helpers/helpRedux";


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
            dispatch({
                type: ADD_ITEM_FAIL
            });
        }

    } else {
        let cart = [];

        if (getStoreLocal('cart')) {
            cart = JSON.parse(getStoreLocal('cart'))
        }

        let shouldAddItem = true;

        cart.map(item => {
            if (product.id.toString() === item.product.id.toString()) {
                shouldAddItem = false;
            }
        });

        const order_item = {
            product: product,
            count: 1
        };

        if (shouldAddItem) {
            cart.push(order_item);
        }

        dispatch({
            type: ADD_ITEM,
            payload: cart
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
        dispatch({
            type: GET_ITEMS
        });
    }
}

export const get_total = () => async dispatch => {

    let total = 0.0;
    let cart = [];

    if (getStoreLocal('cart')) {
        cart = JSON.parse(getStoreLocal('cart'));

        cart.map(item => {
            total += parseFloat(item.product.price) * parseFloat(item.count);
        });
    }

    dispatch({
        type: GET_TOTAL,
        payload: [parseFloat(total.toFixed(2))]
    });
}


export const get_item_total = () => async dispatch => {
    let total = 0;

    if (getStoreLocal('cart')) {
        total = JSON.parse(getStoreLocal('cart')).length;
    }
    console.log("total:",total );

    dispatch({
        type: GET_ITEM_TOTAL,
        payload: total
    });
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

        if (getStoreLocal('cart')) {
            cart = JSON.parse(getStoreLocal('cart'));

            cart.map((cart_item, index) => {
                if (cart_item.product.id.toString() === item.product.id.toString()) {
                    cart[index].count = parseInt(count);
                }
            });
        }

        dispatch({
            type: UPDATE_ITEM,
            payload: cart
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
        let new_cart = [];

        if (getStoreLocal('cart')) {
            cart = JSON.parse(getStoreLocal('cart'));

            cart.map(cart_item => {
                if (cart_item.product.id.toString() !== item.product.id.toString()) {
                    new_cart.push(cart_item);
                }
            });
        }

        dispatch({
            type: REMOVE_ITEM,
            payload: new_cart
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
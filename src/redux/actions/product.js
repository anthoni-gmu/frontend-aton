import {
    PRODUCTS_HOME_OK,
    PRODUCTS_HOME_FAIL,
    PRODUCTS_OK,
    PRODUCTS_FAIL,
    PRODUCT_OK,
    PRODUCT_FAIL
} from './types';

import axios from "axios";

export const products_home = () => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/products_homepage`, config);

        if (res.status === 200) {
            dispatch({
                type: PRODUCTS_HOME_OK,
                payload: res.data
            });

        } else {
            dispatch({
                type: PRODUCTS_HOME_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: PRODUCTS_HOME_FAIL
        });

    }

}
export const products_all = () => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/products`, config);

        if (res.status === 200) {
            dispatch({
                type: PRODUCTS_OK,
                payload: res.data
            });

        } else {
            dispatch({
                type: PRODUCTS_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: PRODUCTS_FAIL
        });

    }

}
export const get_pages_products = (url) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${url}`, config);

        if (res.status === 200) {
            dispatch({
                type: PRODUCTS_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: PRODUCTS_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: PRODUCTS_FAIL
        });
    }

}

export const product_detail = (slug) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api${slug}`, config);

        if (res.status === 200) {

            dispatch({
                type: PRODUCT_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: PRODUCT_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: PRODUCT_FAIL
        });
    }

}


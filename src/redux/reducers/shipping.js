import {
    GET_SHIPPING_OPTIONS_OK,
    GET_SHIPPING_OPTIONS_FAIL
} from '../actions/types';

const initialState = {
    shipping: null,
};

export default function Shipping(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_SHIPPING_OPTIONS_OK:
            return {
                ...state,
                shipping: payload.shipping_options
            }
        case GET_SHIPPING_OPTIONS_FAIL:
            return {
                ...state,
                shipping: null
            }
        default:
            return state;
    }
};
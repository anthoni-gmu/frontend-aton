import axios from 'axios';
import { setAlert } from './alert';
import { get_item_total } from './cart';
import {
    GET_PAYMENT_TOTAL_OK,
    GET_PAYMENT_TOTAL_FAIL,
    LOAD_BT_TOKEN_OK,
    LOAD_BT_TOKEN_FAIL,
    PAYMENT_OK,
    PAYMENT_FAIL,
    RESET_PAYMENT_INFO,
    SET_PAYMENT_LOADING,
    REMOVE_PAYMENT_LOADING
} from './types';

import { getStoreLocal } from "../../helpers/helpRedux";

export const get_payment_total = (shipping_id, coupon_code) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `JWT ${getStoreLocal('access')}`
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/payment/get-payment-total?shipping_id=${shipping_id!==undefined?shipping_id:0}&coupon_code=${coupon_code!==undefined?coupon_code:''}`, config);

        if (res.status === 200 && !res.data.error) {
            dispatch({
                type: GET_PAYMENT_TOTAL_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PAYMENT_TOTAL_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: GET_PAYMENT_TOTAL_FAIL
        });
    }
}

// export const get_client_token = () => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': `JWT ${getStoreLocal('access')}`
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/payment/get-token`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: LOAD_BT_TOKEN_OK,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: LOAD_BT_TOKEN_FAIL
//             });
//         }
//     } catch(err) {
//         dispatch({
//             type: LOAD_BT_TOKEN_FAIL
//         });
//     }
// }

export const process_payment = (
    nonce,
    shipping_id,
    coupon_code,
    full_name,
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    postal_zip_code,
    country_region,
    telephone_number
) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${getStoreLocal('access')}`
        }
    };

    const body = JSON.stringify({
        nonce,
        shipping_id,
        coupon_code,
        full_name,
        address_line_1,
        address_line_2,
        city,
        state_province_region,
        postal_zip_code,
        country_region,
        telephone_number
    });

    dispatch({
        type: SET_PAYMENT_LOADING
    });

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/payment/make-payment`, body, config);
        if (res.status === 200 && res.data.success) {
            dispatch({
                type: PAYMENT_OK
            });
            dispatch(setAlert(res.data.success, 'green'));
            dispatch(get_item_total());
        } else {
            dispatch({
                type: PAYMENT_FAIL
            });
            dispatch(setAlert(res.data.error, 'red'));
        }
    } catch(err) {
        dispatch({
            type: PAYMENT_FAIL
        });
        dispatch(setAlert('Error processing payment', 'red'));
    }

    dispatch({
        type: REMOVE_PAYMENT_LOADING
    });
    window.scrollTo(0, 0);
}

export const reset = () => dispatch => {
    dispatch({
        type: RESET_PAYMENT_INFO
    });
};
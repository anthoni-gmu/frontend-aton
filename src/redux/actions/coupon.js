import axios from 'axios'

import { setAlert } from './alert';
import {
    GET_COUPON_OK,
    GET_COUPON_FAIL
} from './types';
import { getStoreLocal } from "../../helpers/helpRedux";


export const check_coupon = coupon_code => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `JWT ${getStoreLocal('access')}`
        }
    };
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/coupon/check-coupon?coupon_code=${coupon_code}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_COUPON_OK,
                payload: res.data
            });
            dispatch(setAlert('Coupon applied', 'green'));
        } else {
            dispatch({
                type: GET_COUPON_FAIL
            });
            if (res.data.error) {
                dispatch(setAlert(res.data.error, 'red'));
            } else {
                dispatch(setAlert('This coupon does note exist', 'red'));
            }
        }
    } catch (err) {
        dispatch({
            type: GET_COUPON_FAIL
        });
        dispatch(setAlert('This coupon does nota exist', 'red'));
    }

    window.scrollTo(0, 0);
}
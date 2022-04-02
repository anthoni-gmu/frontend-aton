import {
    GET_ACCOUNT_OK,
    GET_ACCOUNT_FAIL,
    UPDATE_ACCOUNT_OK,
    UPDATE_ACCOUNT_FAIL
} from '../actions/types';

const initialState = {
    profile: null
};

export default function Profile(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_ACCOUNT_OK:
            return {
                ...state,
                profile: payload.profile
            }
        case GET_ACCOUNT_FAIL:
            return {
                ...state
            }
        case UPDATE_ACCOUNT_OK:
            return {
                ...state,
                profile: payload.profile
            }
        case UPDATE_ACCOUNT_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}
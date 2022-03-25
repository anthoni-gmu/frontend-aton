import {
    SIGNUP_OK,
    SIGNUP_FAIL,
    LOGIN_OK,
    LOGIN_FAIL,
    USER_LOADED_OK,
    USER_LOADED_FAIL,
    ACTIVATION_OK,
    ACTIVATION_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    AUTHENTICATED_OK,
    AUTHENTICATED_FAIL,
    REFRESH_OK,
    REFRESH_FAIL,
    LOGOUT,
    RESET_PASSWORD_OK,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_OK,
    RESET_PASSWORD_CONFIRM_FAIL
} from '../actions/types'

import {getStoreLocal} from "../../helpers/helpRedux"


const initialState = {
    access: getStoreLocal('access'),
    refresh: getStoreLocal('refresh'),
    isAuthenticated: null,
    user: null,
    loading: false,
}

export default function Auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false
            }
        case USER_LOADED_OK:
            return {
                ...state,
                user: payload
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case AUTHENTICATED_OK:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null
            }
        case LOGIN_OK:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: localStorage.getItem('access'),
                refresh: localStorage.getItem('refresh')
            }
        case ACTIVATION_OK:
        case ACTIVATION_FAIL:
        case RESET_PASSWORD_OK:
        case RESET_PASSWORD_FAIL:
        case RESET_PASSWORD_CONFIRM_OK:
        case RESET_PASSWORD_CONFIRM_FAIL:
            return {
                ...state
            }
        case REFRESH_OK:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                access: localStorage.getItem('access')
            }

        case SIGNUP_OK:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case REFRESH_FAIL:
        case LOGOUT:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            }
        default:
            return state
    }

}
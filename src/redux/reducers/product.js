import {
    PRODUCTS_HOME_FAIL,
    PRODUCTS_HOME_OK,
    PRODUCTS_OK,
    PRODUCTS_FAIL,
} from '../actions/types'

const initialState = {
    products: null,
    count: 0,
    previous: null,
    next: null,
}

export default function Product(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case PRODUCTS_HOME_OK:
            return {
                ...state,
                products: payload.results,
            }
        case PRODUCTS_HOME_FAIL:
            return {
                ...state,
                products: null,
            }
        case PRODUCTS_OK:
            return {
                ...state,
                products: payload.results,
                previous: payload.previous,
                next: payload.next,
                count: payload.count
            }
        case PRODUCTS_FAIL:
            return {
                ...state,
                products: null,
                previous: null,
                next: null,
                count: 0,
            }

        default:
            return state
    }

}
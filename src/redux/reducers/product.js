import {
    PRODUCTS_HOME_FAIL,
    PRODUCTS_HOME_OK,
    PRODUCTS_OK,
    PRODUCTS_FAIL,
    PRODUCT_OK,
    PRODUCT_FAIL,
    CATEGORIES_OK,
    CATEGORIES_OK_FAIL,
    BRANDS_OK,
    BRANDS_FAIL
} from '../actions/types'

const initialState = {
    products: null,
    count: 0,
    previous: null,
    next: null,
    characteristic: null,
    images: null,
    related: null,
    colors: null,
    product: null,
    categories: null,
    brands: null
}

export default function Product(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case PRODUCTS_HOME_OK:
            return {
                ...state,
                products: payload.results,
            }
        case PRODUCT_OK:
            return {
                ...state,
                characteristic: payload.characteristic,
                images: payload.images,
                related: payload.related,
                colors: payload.colors,
                product: payload.product
            }
        case PRODUCT_FAIL:
            return {
                ...state,
                characteristic: null,
                images: null,
                related: null,
                colors: null,
                product: null
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
        case CATEGORIES_OK:
            return {
                ...state,
                categories: payload.categories,
            }
        case CATEGORIES_OK_FAIL:
            return {
                ...state,
                categories: null,

            }
        case BRANDS_OK:
            return {
                ...state,
                brands: payload.brands,
            }
        case BRANDS_FAIL:
            return {
                ...state,
                brands: null,

            }

        default:
            return state
    }

}
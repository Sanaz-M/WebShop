import { initialState } from '../store/index.js'
import { GET_PRODUCTS, TOGGLE_LOADER, SEARCH_QUERY } from '../action'


const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                result: action.payload,
            }
        case SEARCH_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case TOGGLE_LOADER:
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state
    }
}

export default productsReducer
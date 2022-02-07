import { initialState } from '../store/index'
import { GET_COMMENTS, TOGGLE_LOADER } from '../action/index'


const commentReducer = (state = initialState.comments, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                content: action.payload,
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

export default commentReducer;
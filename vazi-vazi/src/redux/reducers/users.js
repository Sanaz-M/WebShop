import { initialState } from '../store/index'
import { GET_USERS, TOGGLE_LOADER } from '../action/index'


const usersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case GET_USERS:
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

export default usersReducer
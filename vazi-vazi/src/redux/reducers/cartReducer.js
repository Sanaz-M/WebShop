import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_QUANTITY, ADD_TO_QUANTITY } from '../action';
import { initialState } from '../store';

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        content: state.content.filter((product) => product !== action.payload),
      }

    case ADD_TO_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      }

    case REMOVE_FROM_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      }

    default:
      return state
  }
}

export default cartReducer;
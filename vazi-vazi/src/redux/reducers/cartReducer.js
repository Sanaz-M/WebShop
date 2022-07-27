import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_QUANTITY } from '../action';
import { initialState } from '../store';

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = state.content.find(item => item.id === action.payload.id)
      if(addedItem >= 0){
        state.content[addedItem].qty +=1
        return {
            ...state,
            content:[...state.content]
        }
    } else {
        const temp = {...action.payload,qty:1}
         return {
            ...state,
            content: [...state.content, temp]
        }
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        content: state.content.filter((product) => product !== action.payload),
      }

    // case ADD_TO_QUANTITY:
    //   return {
    //     ...state,
    //     content: state.content.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
    //   }

    default:
      return state
  }
}

export default cartReducer;
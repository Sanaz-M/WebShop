export const GET_PRODUCTS = 'GET_PRODUCTS';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const GET_USERS = 'GET_USERS';
export const GET_COMMENTS ="GET_COMMENTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_QUANTITY = 'ADD_TO_QUANTITY';
export const REMOVE_FROM_QUANTITY = 'REMOVE_FROM_QUANTITY';



export const getProductAction = (query) => {
    return async (dispatch) => {

        try {
            const response = await fetch(`http://localhost:3000/products?q=${query}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_PRODUCTS,
                    payload: data,
                })
                dispatch({
                    type: SEARCH_QUERY,
                    payload: query,
                })
            } else {
                console.log('error in fetching')
                dispatch({
                    type: TOGGLE_LOADER,
                    payload: false,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: TOGGLE_LOADER,
                payload: false,
            })
        }
    }
};


export const getUsersAction = (userQuery) => {
    return async (dispatch) => {

        try {
            const res = await fetch(`http://localhost:3000/users?q=${userQuery}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.ok) {
                let userData = await res.json()
                console.log(userData)
                dispatch({
                    type: GET_USERS,
                    payload: userData,
                })
            } else {
                console.log('error in fetching')
                dispatch({
                    type: TOGGLE_LOADER,
                    payload: false,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: TOGGLE_LOADER,
                payload: false,
            })
        }
    }
}


export const getCommentsAction = () => {
    return async (dispatch) => {

        try {
            const response = await fetch(`http://localhost:3000/comments`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                let data = await response.json()
                dispatch({
                    type: GET_COMMENTS,
                    payload: data,
                })
            } else {
                console.log('error in fetching')
                dispatch({
                    type: TOGGLE_LOADER,
                    payload: false,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: TOGGLE_LOADER,
                payload: false,
            })
        }
    }
};


export const addToCartAction = (addProduct) => ({
    type: ADD_TO_CART,
    payload: addProduct, 
  });
  
  export const removeFromCartAction = (indexToRemove) => ({
    type: REMOVE_FROM_CART,
    payload: indexToRemove,
  });


  export const addToQuantityAction = (previousQuantity) => ({
      type: ADD_TO_QUANTITY,
      payload: Number(previousQuantity + 1),
  });

  export const removeOfQuantityAction = (previousQuantity) => ({
    type: REMOVE_FROM_QUANTITY,
    payload: Number(previousQuantity - 1),
  });
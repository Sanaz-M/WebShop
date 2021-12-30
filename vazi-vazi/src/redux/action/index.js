export const GET_PRODUCTS = 'GET_PRODUCTS';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const GET_USERS = 'GET_USERS';

export const getProductAction = (query) => {
    return async (dispatch) => {

        try {
            const response = await fetch('http://localhost:3000/products/' + query, {
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


export const getUsersAction = () => {
    return async (dispatch) => {

        try {
            const res = await fetch('http://localhost:3000/users/', {
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
import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err => {
            const errorMsg = err.message
            dispatch(fetchUsersError(errorMsg))
        })
    }
}
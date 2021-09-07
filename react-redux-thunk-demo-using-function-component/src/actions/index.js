// actions.index.js

const axios = require('axios');

// To add new user
export const addUser = (user) => {
    return {
        type : 'ADD_USER',
        payload : user
    }
}

// To delete user
export const deleteUser = (userId) => {
    return {
        type: 'DELETE_USER',
        payload: userId
    }
}

// To fetch users (Redux thunk)
export const fetchUsers = () => {
    return async function fetchUserList(dispatch) {
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            dispatch({
                type: 'FETCH_USERS',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}
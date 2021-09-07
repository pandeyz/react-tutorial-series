// UserReducer.js
const users = [];

const UserReducer = function reducer(state = users, action) {
    switch(action.type) {
        case 'ADD_USER':
            return [...state, action.payload];

        case 'DELETE_USER':
            let existingUsers = [...state];
            let userIndex = action.payload;
            existingUsers.splice(userIndex, 1);
            return existingUsers;
            
        case 'FETCH_USERS':
            return [...state, ...action.payload];
        default:
            return state;
    }
}

export default UserReducer;
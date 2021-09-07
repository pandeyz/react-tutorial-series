// index.js
// To combine reducers

import { combineReducers } from 'redux';

import UserReducer from './UserReducer';

export default combineReducers({
    UserReducer : UserReducer
});
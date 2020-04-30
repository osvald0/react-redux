import { combineReducers } from 'redux';
import userReducer from '../users/duck/reducers';

const rootReducer = combineReducers({
    users: userReducer,
});

export default rootReducer;

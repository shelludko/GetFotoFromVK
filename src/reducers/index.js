import { combineReducers } from 'redux';
import pageReducer from './page';
import userReducer from './user';

const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
});

export default rootReducer;
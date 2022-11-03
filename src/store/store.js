import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

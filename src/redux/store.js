import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {save, load} from 'redux-localstorage-simple';

/*
Note: save() middleware for localstorage: load initialState from lcoalSTorage if exists
*/
const middleware = [logger, thunk]
const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));

console.log("store", store.getState());
export default store;

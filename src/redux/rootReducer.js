import {combineReducers} from 'redux';
import balanceReducer from "./reducers/balance/balanceReducer";

const rootReducer = combineReducers({balanceReducer});

export default rootReducer;
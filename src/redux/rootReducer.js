import {combineReducers} from 'redux';
import balanceReducer from "./reducers/balance/balanceReducer";

const rootReducer = combineReducers({balance: balanceReducer});

export default rootReducer;
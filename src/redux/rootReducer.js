import {combineReducers} from 'redux';
import balanceReducer from "./reducers/balance/balanceReducer";
import bitcoinReducer from "./reducers/bitcoin/bitcoinReducer";

const rootReducer = combineReducers({balance: balanceReducer, bitcoin: bitcoinReducer});

export default rootReducer;
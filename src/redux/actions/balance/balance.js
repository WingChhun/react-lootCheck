import * as constants from "./constants";

const {SET_BALANCE} = constants;

export const setBalance = balance => ({type: SET_BALANCE, balance: balance});

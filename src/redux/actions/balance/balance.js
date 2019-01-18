import * as constants from "./constants";

const {SET_BALANCE, DEPOSIT} = constants;

export const setBalance = balance => ({type: SET_BALANCE, balance: balance});

export const deposit = deposit => ({type: DEPOSIT, payload: deposit})

export const withdrawBalance = withdrawAmount => ({type: constants.WITHDRAW, payload: withdrawAmount});
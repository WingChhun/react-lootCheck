import * as constants from "./constants";

const {SET_BALANCE, DEPOSIT} = constants;

export const setBalance = balance => ({type: SET_BALANCE, payload: balance});

export const deposit = deposit => ({
    type: DEPOSIT,
    payload: parseInt(deposit, 10)
})

export const withdrawBalance = withdrawAmount => ({
    type: constants.WITHDRAW,
    payload: parseInt(withdrawAmount, 10)
});
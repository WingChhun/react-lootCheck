import * as constants from "../../actions/balance/constants";
import * as actions from "../../actions/balance/balance";

const initialState = {

    balance: 0
}

export default function balanceReducer(state = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case constants.SET_BALANCE:

            return {
                ...state,
                balance: action.balance
            }

        case constants.DEPOSIT:
            return {
                ...state,
                balance: state.balance + payload
            }

        case constants.WITHDRAW:
            return {
                ...state,
                balance: state.balance - payload
            };

        default:
            return state;

    }
}

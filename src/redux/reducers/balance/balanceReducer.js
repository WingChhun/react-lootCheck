import * as constants from "../../actions/balance/constants";
import * as actions from "../../actions/balance/balance";

const initialState = {

    balance: -1
}

const balanceReducer = (state = initialState, action) => {

    const {type} = action;

    switch (type) {

        case constants.SET_BALANCE:

            return {
                ...state,
                balance: action.balance
            }

        default:
            return state;

    }
}

export default balanceReducer;
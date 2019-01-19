import * as constants from "../../actions/bitcoin/constants";
import * as actions from "../../actions/bitcoin/bitcoin";

const initialState = {};

function bitcoinReducer(state = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case constants.FETCH_BITCOIN:

            return payload;

        default:
            return state;
    }

}

export default bitcoinReducer;
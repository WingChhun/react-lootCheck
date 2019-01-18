import * as constants from "../../actions/bitcoin/constants";
import * as actions from "../../actions/bitcoin/bitcoin";

const initialState = {};

function bitcoinReducer(state = initialState, action) {

    const {type, payload} = action;

    switch (type) {
        default:
            return state;
    }

}

export default bitcoinReducer;
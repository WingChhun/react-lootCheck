import bitcoinReducer from "./bitcoinReducer";
import * as constants from "../../actions/bitcoin/constants";
import * as actions from "../../actions/bitcoin/bitcoin";

const initialState = {};

describe(`Redux - bitcoin Reducer`, () => {

    const bitcoinData = {
        bpi: `bitcoin price index`
    };

    it(`initializes state`, () => {

        expect(bitcoinReducer(undefined, {})).toEqual(initialState);

    });

    it(`fetches and sets the bitcoin data`, () => {

        expect(bitcoinReducer({}, {
            type: constants.FETCH_BITCOIN,
            payload: bitcoinData
        })).toEqual(bitcoinData);

    });

});
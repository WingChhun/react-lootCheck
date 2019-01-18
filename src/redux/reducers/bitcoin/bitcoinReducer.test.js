import React from "react";
import bitcoinReducer from "./bitcoinReducer";
import * as constants from "../../actions/bitcoin/constants";
import * as actions from "../../actions/bitcoin/bitcoin";

const initialState = {};

describe(`Redux - bitcoin Reducer`, () => {

    it(`initializes state`, () => {

        expect(bitcoinReducer(undefined, {})).toEqual(initialState);

    });

});
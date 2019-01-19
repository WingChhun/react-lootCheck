import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as constants from "./constants";
import * as actions from "./bitcoin";

//Note: Thunk allows to wait for asynchronous actions
const middleware = [thunk];
//$ Function allows us to provide middleware
const createMockStore = configureMockStore([...middleware]);

//$ Pass in store data
const store = createMockStore({bitcoin: {}});

const mockResponse = {
    body: {
        bpi: `bitcoin price index`
    }
};

//Note: A get request to this will return that mock response
fetchMock.get(constants.API_URL, mockResponse);

describe(`Redux - Action - Bitcoin`, () => {

    it(`Creates an async action to fetch the bitcoin value`, () => {

        //? How do we test a promise?

        //Note: use getActions(0 to see what actions were dispatched to the store

        //Note: Build an array of expected actions

        const expectedActions = [
            {
                type: constants.FETCH_BITCOIN,
                payload: mockResponse.body
            }
        ];

        return store
            .dispatch(actions.fetchBitcoin())
            .then(() => {

                //Note: Actions dispatched should match array

                expect(store.getActions()).toEqual(expectedActions);
            })
            .catch(err => {});;

    });

});
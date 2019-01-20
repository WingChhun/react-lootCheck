import * as constants from "./constants";

//TODO: create actions

//Note: redux-thunk gives us access to dispatch
export const fetchBitcoin = () => dispatch => {
    return fetch(constants.API_URL)
        .then(res => res.json())
        .then(json => dispatch({type: constants.FETCH_BITCOIN, payload: json}))
        .catch(err => {
            console.log(err);
        });
};
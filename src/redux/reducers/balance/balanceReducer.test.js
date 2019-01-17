import balanceReducer from "./balanceReducer";
import * as constants from "../../actions/balance/constants";

//NOTE: Pull constants from actions

const {SET_BALANCE} = constants;

//TODO: Keep updating this as balanceReducer grows
const initialState = {
    balance: -1
};

describe("Reducer - Balance", () => {

    it("Sets a balance", () => {

        const balance = 10;
        const prevState = undefined;
        const action = {
            type: SET_BALANCE,
            balance
        };
        const expected = {
            ...initialState
        };

        expected.balance = balance;

        expect(balanceReducer(prevState, action)).toEqual(expected);
    })
}) //*End describe reducer-balance
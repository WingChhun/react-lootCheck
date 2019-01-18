import balanceReducer from "./balanceReducer";
import * as constants from "../../actions/balance/constants";
import {withdrawBalance} from "../../actions/balance/balance";

//NOTE: Pull constants from actions

const {SET_BALANCE} = constants;

//TODO: Keep updating this as balanceReducer grows
const initialState = {
    balance: 0
};

describe("Reducer - Balance", () => {

    it("returns initialState correctly", () => {

        const action = {
            type: '_UNDEFINED'
        };

        expect(balanceReducer(undefined, action)).toEqual(initialState);

    });

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

    it(`deposits a balance`, () => {

        const payload = 10;
        const prevState = {
            ...initialState
        };
        const expected = {
            ...initialState,
            balance: payload
        }
        const action = {
            type: constants.DEPOSIT,
            payload
        };

        expect(balanceReducer(prevState, action)).toEqual(expected);

    });

    it(`withdraws amount from balance`, () => {

        const withdrawAmount = 10;
        const prevState = {
            balance: 10
        };
        const action = {
            type: constants.WITHDRAW,
            payload: withdrawAmount
        };
        const expectedState = {
            balance: 0
        };

        expect(balanceReducer(prevState, action)).toEqual(expectedState);

    });

}) //*End describe reducer-balance